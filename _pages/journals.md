---
layout: page
title: journals
permalink: /journals/
description: Journals listed in alphabetical order.
nav: false
---

<link rel="stylesheet" href="{{ '/assets/css/conferences.css' | relative_url | bust_file_cache }}">

{% assign journals = site.journals | sort_natural: 'title' %}

<div class="conference-deadlines" id="journal-browser">
  <div class="conf-toolbar" hidden>
    {% include site_filter.liquid id='conf-search' label='Search journals, topics, or publishers' %}
    <div class="conf-tag-filters" role="group" aria-label="Filter by access">
      <button type="button" class="conf-tag-btn" data-access="open" aria-pressed="false"><i class="fa-solid fa-lock-open" aria-hidden="true"></i> Open access</button>
      <button type="button" class="conf-tag-btn" data-access="hybrid" aria-pressed="false"><i class="fa-solid fa-circle-half-stroke" aria-hidden="true"></i> Hybrid</button>
      <button type="button" class="conf-tag-btn" data-access="subscription" aria-pressed="false"><i class="fa-solid fa-lock" aria-hidden="true"></i> Subscription</button>
      <button type="button" class="conf-tag-btn" data-access="unknown" aria-pressed="false" title="Access policy not confirmed"><i class="fa-solid fa-circle-question" aria-hidden="true"></i> Not confirmed</button>
    </div>
    <div class="conf-sort-wrap">
      <label for="conf-sort">Sort</label>
      <select id="conf-sort">
        <option value="name" selected>Name (A–Z)</option>
        <option value="publisher">Publisher (A–Z)</option>
        <option value="impact">Highest impact factor</option>
        <option value="citescore">Highest CiteScore</option>
      </select>
    </div>
  </div>

  <div class="conf-grid" id="journal-grid">
    {% for journal in journals %}
      {% assign access = journal.access | downcase %}
      {% assign access_label = '' %}
      {% assign access_key = 'unknown' %}
      {% if access contains 'hybrid' %}
        {% assign access_label = 'Hybrid' %}
        {% assign access_key = 'hybrid' %}
      {% elsif access contains 'open access' %}
        {% assign access_label = 'Open access' %}
        {% assign access_key = 'open' %}
      {% elsif access contains 'subscription' %}
        {% assign access_label = 'Subscription' %}
        {% assign access_key = 'subscription' %}
      {% endif %}
      {% assign impact_factor = '' %}
      {% assign cite_score = '' %}
      {% for metric in journal.metrics %}
        {% assign metric_name = metric[0] | downcase %}
        {% if metric_name contains 'impact factor' %}
          {% assign impact_factor = metric[1] %}
        {% elsif metric_name contains 'citescore' %}
          {% assign cite_score = metric[1] %}
        {% endif %}
      {% endfor %}
      {% capture search_blob %}{{ journal.title }} {{ journal.publisher }} {{ journal.topics | join: ' ' }} {{ journal.content | markdownify | strip_html }} {{ journal.website }}{% endcapture %}
      <article class="conf-card hoverable" aria-labelledby="journal-{{ journal.slug | escape }}" data-name="{{ journal.title | escape }}" data-publisher="{{ journal.publisher | escape }}" data-access="{{ access_key }}" data-search="{{ search_blob | downcase | strip | escape }}" data-impact-factor="{{ impact_factor | escape }}" data-citescore="{{ cite_score | escape }}">
        {% if access_label != empty %}
          <div class="conf-card-top"><span class="conf-tag">{{ access_label }}</span></div>
        {% endif %}
        <h2 class="conf-card-title" id="journal-{{ journal.slug | escape }}">
          <a href="{{ journal.website | escape }}" target="_blank" rel="noopener noreferrer">{{ journal.title | escape }}</a>
        </h2>
        <p class="conf-card-name">{{ journal.content | markdownify | strip_html | strip | escape }}</p>
        <div class="conf-card-meta">
          {% if journal.publisher %}<span><i class="fa-solid fa-building-columns" aria-hidden="true"></i>{{ journal.publisher | escape }}</span>{% endif %}
          {% if journal.access %}<span><i class="fa-solid fa-book-open" aria-hidden="true"></i>{{ journal.access | escape }}</span>{% endif %}
          {% if journal.topics.size > 0 %}
            <span><i class="fa-solid fa-tags" aria-hidden="true"></i>Topics: {{ journal.topics | join: ', ' | escape }}</span>
          {% endif %}
        </div>
        {% if journal.metrics.size > 0 %}
          <div class="conf-tracks">
            {% if journal.metrics.size > 0 %}
              <dl class="conf-metrics">
                {% for metric in journal.metrics %}
                  <div class="conf-metric-row">
                    <dt>{{ metric[0] | escape }}</dt>
                    <dd>{{ metric[1] | escape }}</dd>
                  </div>
                {% endfor %}
              </dl>
            {% endif %}
          </div>
        {% endif %}
        <a class="conf-card-link" href="{{ journal.website | escape }}" target="_blank" rel="noopener noreferrer">Visit website <i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i></a>
      </article>
    {% endfor %}
  </div>
  <div class="conf-empty-state" id="journal-empty-state"{% if journals.size > 0 %} hidden{% endif %}>No journals match your search and access filters.</div>
</div>

<script src="{{ '/assets/js/journals.js' | relative_url | bust_file_cache }}" type="module"></script>
