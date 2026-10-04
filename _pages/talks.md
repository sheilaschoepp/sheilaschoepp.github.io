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

<div class="talk-groups">
  {% for group in talk_groups %}
    {% assign newest_talk = group.items | first %}
    {% assign oldest_talk = group.items | last %}
    {% assign talk_count = group.items | size %}
    <article class="talk-group" aria-labelledby="talk-group-{{ forloop.index }}">
      <div class="talk-group-header">
        <div class="talk-group-icon" aria-hidden="true"><i class="fa-solid fa-fw {{ newest_talk.icon | default: 'fa-microphone' | escape }}"></i></div>
        <div class="talk-group-heading">
          <h2 class="talk-group-title" id="talk-group-{{ forloop.index }}">{{ group.name | escape }}</h2>
          <p class="talk-group-count">
            {{ talk_count }} {% if talk_count == 1 %}talk{% else %}talks{% endif %} &middot;
            {% if talk_count > 1 %}{{ oldest_talk.date | date: '%B %Y' }} &ndash; {% endif %}{{ newest_talk.date | date: '%B %Y' }}
          </p>
        </div>
      </div>
      <ol class="talk-appearances">
        {% for talk in group.items %}
          <li class="talk-appearance">
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

{% include document_viewer.liquid %}
