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
          section: "News",},{
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
