---
layout: talk
title: Reinforcement Learning Algorithmic Adaptation to Machine Hardware Faults
permalink: /talks/hardware-fault-adaptation/
talk: true
topic_label: Research
icon: fa-robot
thumbnail: /assets/img/publication_preview/Schoepp2024EnhancingHF.png
thumbnail_width: 643
thumbnail_height: 464
thumbnail_alt: "Simulated Ant robot with a damaged leg in a hardware fault experiment."
nav: false
date: 2021-01-25
venue: Graduate Student Seminar, University of Alberta
note: "Online at 2:00 p.m. MST. Supervisors: Osmar Zaiane and Johannes Gunther."
---

On July 20, 1969, the Apollo 11 lunar module, with Astronauts Neil Armstrong and Buzz Aldrin aboard, landed on the moon. It was a great achievement in space exploration. Most people know of this mission's success; yet, there is an untold story about this mission that many people are not aware of, and that ultimately led to its success. In the moments prior to landing on the moon, the astronauts' attention was disrupted by loud alarms, notifying them of a problem with their on-board computer systems. The moment intensified as an error, unknown to the astronauts, was identified - error 1202. After relaying the error code to mission control, the cause of the error was determined; the computer was overloaded and memory was low. Thanks to the software created by a young NASA engineer, Margaret Hamilton, the software controlling the computer system began to handle the error, re-initializing and re-assigning tasks with the highest priority, while dropping those of low priority. Margaret Hamilton, a visionary of her time, had planned for unexpected situations, and in doing so, she had created software that was able to detect, identify, and recover from errors.

Creating systems that can detect, identify, and subsequently recover from their failures are three important areas of engineering and artificial intelligence research. Respectively, these three research areas are known as fault detection, fault diagnosis, and fault tolerance. This thesis examines one of these areas - fault tolerance. With added fault tolerance, a machine recovers from a fault through either pre-engineered or artificial intelligence learning techniques; we explore the latter, empirically evaluating the effectiveness of two reinforcement learning algorithms in enabling a machine to adapt to a hardware fault. In this work, our machines are simulated robots; the faults experienced include joint damage, effector damage, and sensor damage, all of which cause the robot to be either partially immobile or to behave in an unexpected, sometimes erratic, manner. Many of the faults examined would be considered terminal, if not for algorithmic adaptation. The two reinforcement learning algorithms that we investigate are Proximal Policy Optimization and Soft Actor-Critic. We demonstrate that algorithmic adaptation to hardware faults does indeed occur and that, for one simulated robot task, it occurs very quickly (i.e. within hours). Our results establish that reinforcement learning algorithms are successful in adding algorithmic hardware fault tolerance to simulated machines, and that added algorithmic hardware fault tolerance (with reinforcement learning) has the potential to be applied to real-world machines. This is particularly true for special cases, where a repair cannot be performed immediately, and where it is more favourable to have a machine re-learn to perform its task in the presence of a fault, than it is to terminate or proceed with reduced task performance. Example use cases include space, where specialized experts are not immediately available to make machine repairs, and disaster zones, where machines (e.g. robots) are sent to areas that are dangerous or inaccessible to humans, making their immediate repair more challenging or impossible.
