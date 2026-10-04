---
layout: page
title: talks
permalink: /talks/
description: Research talks and seminars, organized by topic and listed in reverse chronological order within each topic.
nav: true
nav_order: 2.5
published: true
---

<link rel="stylesheet" href="{{ '/assets/css/talks.css' | relative_url | bust_file_cache }}">

{% assign talks = site.pages | where: 'talk', true | sort: 'date' | reverse %}
{% assign talk_groups = talks | group_by: 'title' %}

<form class="talk-search" id="talk-search" role="search" aria-label="Filter talks" hidden>
  {% include site_filter.liquid id='talk-search-input' label='Search talks by topic, event, year, or abstract' controls='talk-groups' %}
</form>
<p class="talk-search-status" id="talk-search-status" role="status" aria-live="polite" aria-atomic="true"></p>
<p class="talk-search-empty" id="talk-search-empty" hidden>No talks match your search. Try a different topic, event, or year.</p>

<div class="talk-groups" id="talk-groups">
  {% for group in talk_groups %}
    {% assign newest_talk = group.items | first %}
    {% assign oldest_talk = group.items | last %}
    {% assign talk_count = group.items | size %}
    {% assign thumbnail_talk = nil %}
    {% for talk in group.items %}
      {% if talk.thumbnail != blank %}
        {% assign thumbnail_talk = talk %}
        {% break %}
      {% endif %}
    {% endfor %}
    <article class="talk-group" aria-labelledby="talk-group-{{ forloop.index }}">
      <div class="row">
        <div class="talk-group-media col col-sm-2">
          {% if thumbnail_talk %}
            <img
              class="talk-group-thumbnail preview z-depth-1 rounded"
              src="{{ thumbnail_talk.thumbnail | relative_url | bust_file_cache | escape }}"
              alt="{{ thumbnail_talk.thumbnail_alt | default: group.name | escape }}"
              {% if thumbnail_talk.thumbnail_width %}width="{{ thumbnail_talk.thumbnail_width }}"{% endif %}
              {% if thumbnail_talk.thumbnail_height %}height="{{ thumbnail_talk.thumbnail_height }}"{% endif %}
              loading="lazy"
              decoding="async"
              data-talk-zoomable
            >
          {% else %}
            <div class="talk-group-icon" aria-hidden="true"><i class="fa-solid fa-fw {{ newest_talk.icon | default: 'fa-microphone' | escape }}"></i></div>
          {% endif %}
          <p class="talk-topic-label badge rounded w-100">{{ newest_talk.topic_label | default: 'Talk' | escape }}</p>
        </div>
        <div class="talk-group-content col-sm-8">
          <h2 class="talk-group-title" id="talk-group-{{ forloop.index }}">{{ group.name | escape }}</h2>
          <p class="talk-group-count">
            {{ talk_count }} {% if talk_count == 1 %}talk{% else %}talks{% endif %} &middot;
            {% if talk_count > 1 %}{{ oldest_talk.date | date: '%B %Y' }} &ndash; {% endif %}{{ newest_talk.date | date: '%B %Y' }}
          </p>
          <ol class="talk-appearances">
            {% for talk in group.items %}
              {% capture search_text %}{{ talk.title }} {{ talk.topic_label }} {{ talk.venue }} {{ talk.note }} {{ talk.date | date: '%B %b %-d %Y' }} {{ talk.date | date: '%Y-%m-%d' }} {{ talk.content | markdownify | strip_html }}{% endcapture %}
              <li class="talk-appearance" data-talk-search="{{ search_text | strip | escape }}">
                <div class="talk-appearance-details">
                  <span class="talk-appearance-venue">{{ talk.venue | escape }}</span>
                  <time class="talk-appearance-date" datetime="{{ talk.date | date: '%Y-%m-%d' }}">{{ talk.date | date: '%b %-d, %Y' }}</time>
                </div>
                <div class="talk-appearance-actions">
                  <a class="talk-action" href="{{ talk.url | relative_url }}"><i class="fa-solid fa-align-left" aria-hidden="true"></i> Abstract</a>
                  {% for resource in talk.resources %}
                    {% if resource.label == 'Video' or resource.label == 'Slides' %}
                      {% assign resource_url = resource.url %}
                      {% unless resource_url contains '://' %}{% assign resource_url = resource_url | relative_url %}{% endunless %}
                      <a class="talk-action" href="{{ resource_url | escape }}"{% if resource.label == 'Slides' %} data-document-viewer data-document-label="{{ resource.label | escape }}" data-document-title="{{ talk.title | escape }}"{% endif %}>
                        {% if resource.label == 'Video' %}<i class="fa-solid fa-play" aria-hidden="true"></i> Video{% else %}<i class="fa-solid fa-person-chalkboard" aria-hidden="true"></i> Slides{% endif %}
                      </a>
                    {% endif %}
                  {% endfor %}
                </div>
              </li>
            {% endfor %}
          </ol>
        </div>
      </div>
    </article>
  {% endfor %}
</div>

{% include document_viewer.liquid %}

<script src="{{ '/assets/js/talk-search.js' | relative_url | bust_file_cache }}" type="module"></script>
<script src="{{ '/assets/js/talk-thumbnails.js' | relative_url | bust_file_cache }}" type="module"></script>
