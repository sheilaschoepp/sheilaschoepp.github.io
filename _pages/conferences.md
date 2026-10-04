---
layout: page
title: conferences
permalink: /conferences/
description: Conferences and submission deadlines that I keep track of.
nav: true
nav_order: 3
---

<link rel="stylesheet" href="{{ '/assets/css/conferences.css' | relative_url | bust_file_cache }}">

<!-- Adapted from Pulkit Verma's MIT-licensed conference page; see LICENSE.
     https://github.com/pulkitverma25/pulkitverma25.github.io -->

{% assign empty_array = '' | split: ',' %}
{% assign conferences = site.conferences | sort: 'num' %}
{% assign filter_tags = empty_array %}
{% for entry in conferences %}
{% assign entry_tags = entry.tags | default: empty_array %}
{% assign filter_tags = filter_tags | concat: entry_tags %}
{% endfor %}
{% assign filter_tags = filter_tags | uniq | sort %}

<div class="conference-deadlines">
  <div class="conf-toolbar">
    <div class="conf-search-wrap">
      <label class="sr-only" for="conf-search">Search conferences or locations</label>
      <i class="fa-solid fa-magnifying-glass" aria-hidden="true"></i>
      <input type="search" id="conf-search" spellcheck="false" autocomplete="off" placeholder="Search conferences or locations">
    </div>
    <div class="conf-tag-filters" role="group" aria-label="Filter by research area">
      {% for tag in filter_tags %}
        {% assign tag_name = tag %}
        {% case tag %}
          {% when 'AP' %}{% assign tag_name = 'Automated planning' %}
          {% when 'CV' %}{% assign tag_name = 'Computer vision' %}
          {% when 'HCI' %}{% assign tag_name = 'Human-computer interaction' %}
          {% when 'KR' %}{% assign tag_name = 'Knowledge representation' %}
          {% when 'ML' %}{% assign tag_name = 'Machine learning' %}
          {% when 'NLP' %}{% assign tag_name = 'Natural language processing' %}
          {% when 'RL' %}{% assign tag_name = 'Reinforcement learning' %}
          {% when 'RO' %}{% assign tag_name = 'Robotics' %}
        {% endcase %}
        <button type="button" class="conf-tag-btn" data-tag="{{ tag | escape }}" title="{{ tag_name | escape }}" aria-label="{{ tag_name | escape }}" aria-pressed="false">{{ tag | escape }}</button>
      {% endfor %}
    </div>
    <div class="conf-sort-wrap">
      <label for="conf-sort">Sort</label>
      <select id="conf-sort">
        <option value="deadline">Soonest deadline</option>
        <option value="confdate">Conference date</option>
        <option value="name">Name</option>
      </select>
    </div>
  </div>

  <div class="conf-grid" id="conf-grid">
    {% for conference in conferences %}
      {% assign conference_tags = conference.tags %}
      {% assign search_blob = conference.shortname | append: ' ' | append: conference.name | append: ' ' | append: conference.location | downcase %}
      <article class="conf-card hoverable" data-name="{{ conference.shortname | escape }}" data-tags="{{ conference_tags | join: ',' | escape }}" data-search="{{ search_blob | escape }}" data-start="{{ conference.start_date | escape }}">
        <div class="conf-card-top">
          <div class="conf-tags">
            {% for tag in conference_tags %}
              <span class="conf-tag">{{ tag | escape }}</span>
            {% endfor %}
          </div>
          <span class="conf-status-badge" data-role="status"></span>
        </div>
        <h3 class="conf-card-title"><a href="{{ conference.website | escape }}" target="_blank" rel="noopener noreferrer">{{ conference.shortname | escape }}</a></h3>
        <p class="conf-card-name">{{ conference.name | escape }}</p>
        <div class="conf-card-meta">
          <span><i class="fa-solid fa-location-dot" aria-hidden="true"></i>{{ conference.location | escape }}</span>
          <span><i class="fa-solid fa-calendar-days" aria-hidden="true"></i>{{ conference.dates | escape }}</span>
        </div>
        <div class="conf-tracks">
          {% for track in conference.tracks %}
            <div class="conf-track">
              {% if conference.tracks.size > 1 %}<div class="conf-track-name">{{ track.name | escape }}</div>{% endif %}
              {% if track.note %}<div class="conf-track-note">{{ track.note | escape }}</div>{% endif %}
              <div class="conf-submission-closed" data-role="submission-closed" hidden><i class="fa-solid fa-lock" aria-hidden="true"></i> Submission deadlines passed</div>
              <div class="conf-notifications-sent" data-role="notifications-sent" hidden><i class="fa-regular fa-envelope-open" aria-hidden="true"></i> Decision date passed</div>
              {% for deadline in track.deadlines %}
                <div class="conf-deadline-row" data-kind="{% if deadline.decision %}decision{% else %}submission{% endif %}"{% if deadline.date and deadline.date != empty %} data-deadline="{{ deadline.date | escape }}"{% endif %}>
                  <span class="conf-deadline-label">{{ deadline.label | escape }}</span>
                  <span class="conf-deadline-date">{{ deadline.display | default: 'TBD' | escape }}</span>
                  {% if deadline.date and deadline.date != empty %}
                    <span class="conf-countdown" data-role="countdown"></span>
                  {% endif %}
                </div>
              {% endfor %}
            </div>
          {% endfor %}
        </div>
        <p class="conf-track-note">Deadline time zone: {{ conference.timezone | escape }}</p>
        <a class="conf-card-link" href="{{ conference.website | escape }}" target="_blank" rel="noopener noreferrer">Visit website <i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i></a>
      </article>
    {% endfor %}
  </div>

  <div class="conf-empty-state" id="conf-empty-state"{% if conferences.size > 0 %} hidden{% endif %}>No conferences match your filters.</div>
</div>

<script src="{{ '/assets/js/conferences.js' | relative_url | bust_file_cache }}" type="module"></script>
