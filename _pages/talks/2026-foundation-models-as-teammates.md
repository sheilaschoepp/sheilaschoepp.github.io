---
layout: talk
title: "Foundation Models as Teammates: Coordination in FM-Only and Human-FM Teams"
permalink: /talks/foundation-models-as-teammates/
talk: true
icon: fa-people-group
nav: false
date: 2026-06-29
venue: Graduate Student Seminar, Department of Computing Science, University of Alberta
---

Foundation models (FMs), such as large language models and vision–language models, are increasingly deployed as agents that coordinate with other FMs and with humans on sequential decision-making tasks. For these teams, natural language is an appealing default, since both an FM and a human can read it without translation — but that same flexibility can be verbose and open to interpretation, adding overhead and leaving room for misalignment. Yet how teammates exchange information is rarely studied as a variable in its own right: communication is known to help teams coordinate, but the few systems that vary its form confound modality with other design choices. We propose a controlled study that isolates modality in cooperative FM-only and human–FM teams, using an extended Overcooked-AI testbed with modality-specific interfaces for both FMs and humans. We compare a no-explicit-communication baseline against five explicit modalities: free-form natural language, structured, minimal vocabulary, image-based, and multimodal. To isolate modality, we hold fixed the task and the other communication dimensions — who communicates with whom, when, why, and what — and vary only how; frozen FMs of a single base model, adapted by in-context learning, keep capability constant across both settings. Evaluation measures team performance, coordination quality, and communication patterns, with the human–FM study additionally collecting perceived workload, satisfaction, and clarity. Together, the studies will show how modality shapes collaboration in FM-only and human–FM teams, what transfers between settings, and what principles should guide its design.
