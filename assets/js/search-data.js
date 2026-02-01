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
        },{id: "books-how-to-take-smart-notes-one-simple-technique-to-boost-writing-learning-and-thinking",
          title: 'How to Take Smart Notes: One Simple Technique to Boost Writing, Learning and...',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/how_to_take_smart_notes/";
            },},{id: "books-moonwalking-with-einstein-the-art-and-science-of-remembering-everything",
          title: 'Moonwalking with Einstein: The Art and Science of Remembering Everything',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/moonwalking_with_einstein/";
            },},{id: "books-the-courage-to-be-disliked-the-japanese-phenomenon-that-shows-you-how-to-change-your-life-and-achieve-real-happiness",
          title: 'The Courage to Be Disliked: The Japanese Phenomenon That Shows You How to...',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_courage_to_be_disliked/";
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
            },},{id: "books-building-a-second-brain-a-proven-method-to-organize-your-digital-life-and-unlock-your-creative-potential",
          title: 'Building a Second Brain: A Proven Method to Organize Your Digital Life and...',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/building_a_second_brain/";
            },},{id: "books-four-thousand-weeks-time-management-for-mortals",
          title: 'Four Thousand Weeks: Time Management for Mortals',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/four_thousand_weeks/";
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
