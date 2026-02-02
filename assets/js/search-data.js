// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "Publications listed in reverse chronological order. Asterisk (*) indicates equal contribution.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-bookshelf",
          title: "bookshelf",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/books/";
          },
        },{id: "books-neville-goddard-the-complete-reader",
          title: 'Neville Goddard: The Complete Reader',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/neville_goddard_the_complete_reader/";
            },},{id: "books-building-a-second-brain-a-proven-method-to-organize-your-digital-life-and-unlock-your-creative-potential",
          title: 'Building a Second Brain: A Proven Method to Organize Your Digital Life and...',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/building_a_second_brain/";
            },},{id: "books-how-to-take-smart-notes-one-simple-technique-to-boost-writing-learning-and-thinking",
          title: 'How to Take Smart Notes: One Simple Technique to Boost Writing, Learning and...',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/how_to_take_smart_notes/";
            },},{id: "books-moonwalking-with-einstein-the-art-and-science-of-remembering-everything",
          title: 'Moonwalking with Einstein: The Art and Science of Remembering Everything',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/moonwalking_with_einstein/";
            },},{id: "books-psycho-cybernetics-updated-and-expanded",
          title: 'Psycho-Cybernetics: Updated and Expanded',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/psycho_cybernetics/";
            },},{id: "books-the-courage-to-be-disliked-the-japanese-phenomenon-that-shows-you-how-to-change-your-life-and-achieve-real-happiness",
          title: 'The Courage to Be Disliked: The Japanese Phenomenon That Shows You How to...',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_courage_to_be_disliked/";
            },},{id: "books-the-human-mind-owner-39-s-manual-your-connection-to-the-universe-consciousness-and-non-human-intelligence",
          title: 'The Human Mind Owner&amp;#39;s Manual: Your Connection to the Universe, Consciousness, and Non-Human...',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_human_mind_owners_manual/";
            },},{id: "books-elon-musk-walter-isaacson",
          title: 'Elon Musk: Walter Isaacson',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/elon_musk/";
            },},{id: "books-grit",
          title: 'Grit',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/grit/";
            },},{id: "books-steve-jobs",
          title: 'Steve Jobs',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/steve_jobs/";
            },},{id: "books-uptime-a-practical-guide-to-personal-productivity-and-wellbeing",
          title: 'Uptime: A Practical Guide to Personal Productivity and Wellbeing',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/uptime/";
            },},{id: "books-what-if-2-additional-serious-scientific-answers-to-absurd-hypothetical-questions",
          title: 'What If? 2: Additional Serious Scientific Answers to Absurd Hypothetical Questions',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/what_if_2/";
            },},{id: "books-learn-like-a-pro-science-based-tools-to-become-better-at-anything",
          title: 'Learn Like a Pro: Science-Based Tools to Become Better at Anything',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/learn_like_a_pro/";
            },},{id: "books-mindshift-break-through-obstacles-to-learning-and-discover-your-hidden-potential",
          title: 'Mindshift: Break Through Obstacles to Learning and Discover Your Hidden Potential',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/mindshift/";
            },},{id: "books-multipliers-revised-and-updated-unlocking-the-secrets-of-effective-leadership-to-maximize-team-potential",
          title: 'Multipliers, Revised and Updated: Unlocking The Secrets of Effective Leadership to Maximize Team...',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/multipliers/";
            },},{id: "books-uncommon-sense-teaching-practical-insights-in-brain-science-to-help-students-learn",
          title: 'Uncommon Sense Teaching: Practical Insights in Brain Science to Help Students Learn',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/uncommon_sense_teaching/";
            },},{id: "books-how-we-learn-why-brains-learn-better-than-any-machine-for-now",
          title: 'How We Learn: Why Brains Learn Better Than Any Machine ... for Now...',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/how_we_learn/";
            },},{id: "books-on-writing-well-the-essential-guide-to-mastering-nonfiction-writing-and-effective-communication",
          title: 'On Writing Well: The Essential Guide to Mastering Nonfiction Writing and Effective Communication...',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/on_writing_well/";
            },},{id: "books-until-the-end-of-time-mind-matter-and-our-search-for-meaning-in-an-evolving-universe",
          title: 'Until the End of Time: Mind, Matter, and Our Search for Meaning in...',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/until_the_end_of_time/";
            },},{id: "books-win-every-argument-the-art-of-debating-persuading-and-public-speaking",
          title: 'Win Every Argument: The Art of Debating, Persuading, and Public Speaking',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/win_every_argument/";
            },},{id: "books-factfulness-ten-reasons-we-39-re-wrong-about-the-world-and-why-things-are-better-than-you-think",
          title: 'Factfulness: Ten Reasons We&amp;#39;re Wrong About the World--and Why Things Are Better Than...',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/factfullness/";
            },},{id: "books-a-brief-history-of-intelligence-why-the-evolution-of-the-brain-holds-the-key-to-the-future-of-ai",
          title: 'A Brief History of Intelligence: Why the Evolution of the Brain Holds the...',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/a_brief_history_of_intelligence/";
            },},{id: "books-a-thousand-brains-a-new-theory-of-intelligence",
          title: 'A Thousand Brains: A New Theory of Intelligence',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/a_thousand_brains/";
            },},{id: "books-other-minds-the-octopus-the-sea-and-the-deep-origins-of-consciousness",
          title: 'Other Minds: The Octopus, the Sea, and the Deep Origins of Consciousness',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/other_minds/";
            },},{id: "books-leaders-eat-last-why-some-teams-pull-together-and-others-don-39-t",
          title: 'Leaders Eat Last: Why Some Teams Pull Together and Others Don&amp;#39;t',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/leaders_eat_last/";
            },},{id: "books-on-writing-a-memoir-of-the-craft",
          title: 'On Writing: A Memoir of the Craft',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/on_writing/";
            },},{id: "books-scrum-the-art-of-doing-twice-the-work-in-half-the-time",
          title: 'Scrum: The Art of Doing Twice the Work in Half the Time',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/scrum/";
            },},{id: "books-skunk-works-a-personal-memoir-of-my-years-of-lockheed",
          title: 'Skunk Works: A Personal Memoir of My Years of Lockheed',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/skunk_works/";
            },},{id: "books-difficult-conversations-how-to-discuss-what-matters-most",
          title: 'Difficult Conversations: How to Discuss What Matters Most',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/difficult_conversations/";
            },},{id: "books-attitude-is-your-superpower-how-to-create-incredible-life-changing-success",
          title: 'Attitude Is Your Superpower: How to Create Incredible Life-Changing Success',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/attitude_is_your_superpower/";
            },},{id: "books-mind-magic-the-neuroscience-of-manifestation-and-how-it-changes-everything",
          title: 'Mind Magic: The Neuroscience of Manifestation and How It Changes Everything',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/mind_magic/";
            },},{id: "books-say-what-you-mean-a-mindful-approach-to-nonviolent-communication",
          title: 'Say What You Mean: A Mindful Approach to Nonviolent Communication',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/say_what_you_mean/";
            },},{id: "books-talk-like-ted-the-9-public-speaking-secrets-of-the-world-39-s-top-minds",
          title: 'Talk Like TED: The 9 Public-Speaking Secrets of the World&amp;#39;s Top Minds',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/talk_like_ted/";
            },},{id: "books-the-instant-ai-agency-how-to-cash-6-amp-7-figure-checks-in-the-new-digital-gold-rush-without-being-a-tech-nerd",
          title: 'The Instant AI Agency: How To Cash 6 &amp;amp; 7 Figure Checks In...',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_instant_ai_agency/";
            },},{id: "books-the-molecule-of-more-how-a-single-chemical-in-your-brain-drives-love-sex-and-creativity-and-will-determine-the-fate-of-the-human-race",
          title: 'The Molecule of More: How a Single Chemical in Your Brain Drives Love,...',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_molecule_of_more/";
            },},{id: "books-awaken-the-giant-within-how-to-take-immediate-control-of-your-mental-emotional-physical-and-financial",
          title: 'Awaken the Giant Within: How to Take Immediate Control of Your Mental, Emotional,...',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/awaken_the_giant_within/";
            },},{id: "books-what-39-s-your-dream-find-your-passion-love-your-work-build-a-richer-life",
          title: 'What&amp;#39;s Your Dream?: Find Your Passion. Love Your Work. Build a Richer Life....',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/whats_your_dream/";
            },},{id: "books-discipline-is-destiny-the-power-of-self-control",
          title: 'Discipline Is Destiny: The Power of Self-Control',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/discipline_is_destiny/";
            },},{id: "books-blink-the-power-of-thinking-without-thinking",
          title: 'Blink: The Power of Thinking Without Thinking',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/blink/";
            },},{id: "books-flow-the-psychology-of-optimal-experience",
          title: 'Flow: The Psychology of Optimal Experience',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/flow/";
            },},{id: "books-key-person-of-influence-the-five-step-method-to-become-one-of-the-most-highly-valued-and-highly-paid-people-in-your-industry",
          title: 'Key Person of Influence: The Five-Step Method to Become One of the Most...',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/key_person_of_influence/";
            },},{id: "books-talking-to-strangers-what-we-should-know-about-the-people-we-don-39-t-know",
          title: 'Talking to Strangers: What We Should Know about the People We Don&amp;#39;t Know...',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/talking_to_strangers/";
            },},{id: "books-when-the-body-says-no-the-cost-of-hidden-stress",
          title: 'When the Body Says No: The Cost of Hidden Stress',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/when_the_body_says_no/";
            },},{id: "books-four-thousand-weeks-time-management-for-mortals",
          title: 'Four Thousand Weeks: Time Management for Mortals',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/four_thousand_weeks/";
            },},{id: "books-make-it-stick-the-science-of-successful-learning",
          title: 'Make It Stick: The Science of Successful Learning',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/make_it_stick/";
            },},{id: "news-began-serving-as-a-workflow-chair-for-aaai-2026-may-2025-january-2026",
          title: 'Began serving as a workflow chair for AAAI 2026 (May 2025 - January...',
          description: "",
          section: "News",},{id: "news-gave-a-talk-in-amii-s-ai-seminar-series-at-the-university-of-alberta",
          title: 'Gave a talk in Amii’s AI Seminar series at the University of Alberta....',
          description: "",
          section: "News",},{id: "news-attended-ijcai-2025-in-montreal-canada-august-16-22-2025",
          title: 'Attended IJCAI 2025 in Montreal, Canada (August 16 - 22, 2025).',
          description: "",
          section: "News",},{id: "news-presented-our-paper-the-evolving-landscape-of-llm-and-vlm-integrated-reinforcement-learning-at-ijcai-2025",
          title: 'Presented our paper, “The Evolving Landscape of LLM- and VLM-Integrated Reinforcement Learning”, at...',
          description: "",
          section: "News",},{id: "news-attended-aaai-2026-in-singapore-january-20-27-2026",
          title: 'Attended AAAI 2026 in Singapore (January 20 - 27, 2026).',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{id: "teachings-data-science-fundamentals",
          title: 'Data Science Fundamentals',
          description: "This course covers the foundational aspects of data science, including data collection, cleaning, analysis, and visualization. Students will learn practical skills for working with real-world datasets.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/data-science-fundamentals/";
            },},{id: "teachings-introduction-to-machine-learning",
          title: 'Introduction to Machine Learning',
          description: "This course provides an introduction to machine learning concepts, algorithms, and applications. Students will learn about supervised and unsupervised learning, model evaluation, and practical implementations.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/introduction-to-machine-learning/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%73%73%63%68%6F%65%70%70@%75%61%6C%62%65%72%74%61.%63%61", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=uT_fklUAAAAJ", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/sheilaschoepp", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/sheilaschoepp", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/sheilaschoepp", "_blank");
        },
      },{
        id: 'social-notion_username',
        title: 'Notion_username',
        section: 'Socials',
        handler: () => {
          window.open("https://sheilaschoepp.notion.site/", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
