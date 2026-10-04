---
layout: page
title: talks
permalink: /talks/
description: Research talks and seminars, listed by year in reverse chronological order and grouped by topic within each year.
nav: true
nav_order: 2.5
published: true
---

<link rel="stylesheet" href="{{ '/assets/css/talks.css' | relative_url | bust_file_cache }}">

{% assign talks = site.pages | where: 'talk', true | sort: 'date' | reverse %}
{% assign talk_years = talks | group_by_exp: 'talk', "talk.date | date: '%Y'" | sort: 'name' | reverse %}

<form class="talk-search" id="talk-search" role="search" aria-label="Filter talks" hidden>
  {% include site_filter.liquid id='talk-search-input' label='Search talks by topic, event, year, or abstract' controls='talk-groups' %}
</form>
<p class="talk-search-status" id="talk-search-status" role="status" aria-live="polite" aria-atomic="true"></p>
<p class="talk-search-empty" id="talk-search-empty" hidden>No talks match your search. Try a different topic, event, or year.</p>

<div class="talk-years" id="talk-groups">
  {% for year in talk_years %}
    <section class="talk-year" aria-labelledby="talk-year-{{ year.name }}">
      <h2 class="talk-year-title" id="talk-year-{{ year.name }}">{{ year.name }}</h2>
      <div class="talk-groups">
        {% assign talk_groups = year.items | group_by: 'title' %}
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
          <article class="talk-group" aria-labelledby="talk-group-{{ year.name }}-{{ forloop.index }}" data-talk-topic="{{ group.name | escape }}">
            <div class="talk-group-header{% if thumbnail_talk %} talk-group-header-with-thumbnail{% endif %}">
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
              <div class="talk-group-heading">
                <h3 class="talk-group-title" id="talk-group-{{ year.name }}-{{ forloop.index }}">{{ group.name | escape }}</h3>
                <p class="talk-group-count">
                  {{ talk_count }} {% if talk_count == 1 %}talk{% else %}talks{% endif %} &middot;
                  {% if talk_count > 1 %}{{ oldest_talk.date | date: '%B %Y' }} &ndash; {% endif %}{{ newest_talk.date | date: '%B %Y' }}
                </p>
              </div>
            </div>
            <ol class="talk-appearances">
              {% for talk in group.items %}
                {% capture search_text %}{{ talk.title }} {{ talk.venue }} {{ talk.note }} {{ talk.date | date: '%B %b %-d %Y' }} {{ talk.date | date: '%Y-%m-%d' }} {{ talk.content | markdownify | strip_html }}{% endcapture %}
                <li class="talk-appearance" data-talk-search="{{ search_text | strip | escape }}">
                  <a class="talk-appearance-venue" href="{{ talk.url | relative_url }}">{{ talk.venue | escape }}</a>
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
                  <time class="talk-appearance-date" datetime="{{ talk.date | date: '%Y-%m-%d' }}">{{ talk.date | date: '%b %-d, %Y' }}</time>
                </li>
              {% endfor %}
            </ol>
          </article>
        {% endfor %}
      </div>
    </section>
  {% endfor %}
</div>

{% include document_viewer.liquid %}

<script src="{{ '/assets/js/talk-search.js' | relative_url | bust_file_cache }}" type="module"></script>
<script src="{{ '/assets/js/talk-thumbnails.js' | relative_url | bust_file_cache }}" type="module"></script>
