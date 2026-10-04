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
        },{id: "nav-conferences",
          title: "conferences",
          description: "Conferences and submission deadlines that I keep track of.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/conferences/";
          },
        },{id: "dropdown-books",
              title: "books",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/books/";
              },
            },{id: "news-began-serving-as-a-workflow-chair-for-aaai-2026-may-2025-january-2026",
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
          section: "News",},{id: "news-our-paper-ai-assisted-peer-review-at-scale-the-aaai-26-ai-review-pilot-is-now-available-on-arxiv",
          title: 'Our paper, “AI-Assisted Peer Review at Scale: The AAAI-26 AI Review Pilot”, is...',
          description: "",
          section: "News",},{id: "news-passed-my-candidacy-exam-and-became-a-ph-d-candidate",
          title: 'Passed my candidacy exam and became a Ph.D. candidate.',
          description: "",
          section: "News",},{id: "news-released-a-zettelkasten-flavoured-implementation-of-andrej-karpathy-s-llm-wiki-which-i-continue-to-expand-and-refine",
          title: 'Released a Zettelkasten-flavoured implementation of Andrej Karpathy’s LLM wiki, which I continue to...',
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
            },},{id: "services-workflow-chair",
          title: 'Workflow Chair',
          description: "Workflow chair for AAAI 2026.",
          section: "Services",handler: () => {
              window.location.href = "/services/service_1/";
            },},{id: "services-service-2",
          title: 'service 2',
          description: "a project with a background image and giscus comments",
          section: "Services",handler: () => {
              window.location.href = "/services/service_2/";
            },},{id: "services-service-3",
          title: 'service 3',
          description: "with background image",
          section: "Services",handler: () => {
              window.location.href = "/services/service_3/";
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
            },},{id: "travels-travel-1",
          title: 'travel 1',
          description: "with background image",
          section: "Travels",handler: () => {
              window.location.href = "/travels/travel_1/";
            },},{id: "travels-travel-2",
          title: 'travel 2',
          description: "a project with a background image and giscus comments",
          section: "Travels",handler: () => {
              window.location.href = "/travels/travel_2/";
            },},{id: "travels-travel-3-with-very-long-name",
          title: 'travel 3 with very long name',
          description: "a project that redirects to another website",
          section: "Travels",handler: () => {
              window.location.href = "/travels/travel_3/";
            },},{id: "travels-travel-4",
          title: 'travel 4',
          description: "another without an image",
          section: "Travels",handler: () => {
              window.location.href = "/travels/travel_4/";
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
