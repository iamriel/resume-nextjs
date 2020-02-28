const experiences = [
  {
    position: 'Django / Node / React / Vue Developer',
    company: {
      name: 'Upwork',
      location: 'Remote',
      description: 'Worked on multiple clients and projects here.',
    },
    period: {
      start: '07/2018',
      end: 'present',
    },
    tasks: [
      'Rocketmail (rocketmail.lu) -- Build RESTful API with Django Rest Framework and Server Side Rendered frontend site with Vue/Nuxt. Created backend that manages contacts and sending campaign.  In the frontend, I built a drag and drop email template builder that will be used in sending of dynamic user emails.',
      'ILS -- Used NodeJS and Express for building RESTful api and React for building frontend side. Built a calendar and scheduling system which automatically sends notifications realtime with the help of websockets. Implement Organization management which contains members and different groups. Handle necessary security implementation both in the backend and frontend.',
      'T-mis (t-mis.fr) -- Built a django powered website that enables users to upload a scanned copy of an invoice (pdf) and copy of products received and then the system automatically identifies anomalies based on the invoice and the list of products and quantities received. Added VueJS in the frontend together with django template to add fluidity of UI/UX.',
      'Hikster (hikster.com) -- Implemented a website that shows hiking places with the map and trail data, i.e. difficulty, elevation. Implemented a feature that enables admins to draw trails in a map and automatically compute necessary information (difficulty, elevation).  Used Django REST Framework for building API with geodjango and postgres postgis for processing geospatial information.',
      'Metronom -- Used DRF for building RESTful API and React on the frontend. The system enables organization to create project and assign users for the tasks in completing the project.  The user can track their progress, time, holidays and budget.',
    ],
  },
  {
    position: 'Django / React Developer / DevOps',
    company: {
      name: 'Lionbridge Technologies, Inc.',
      location: 'Waltham, Ma., United States (remote)',
      description:
        'A multinational software and professional services company specializing in language translation, software development, and content development services',
    },
    period: {
      start: '01/2014',
      end: '07/2018',
    },
    outcome:
      'The company was acquired by a larger company and most of the executives was replaced including the development team',
    tasks: [
      'Build RESTful API with Django Rest Framework',
      'Integrate ReactJS with Django for improving user experience in their website',
      'Implement business processes and handles software development from scratch to deployment',
      'Used AWS, fabric, ansible, and related technologies for managing several servers via architecture as a code principle',
    ],
  },
  {
    position: 'Chief Technology Officer',
    company: {
      name: 'All Deals Leak',
      location: 'Singapre (remote)',
      description:
        'A start up company that provides real-time analytics data for e-commerce by crawling deal sites from several countries in Southeast Asia.',
    },
    period: {
      start: '07/2013',
      end: '01/2014',
    },
    outcome:
      'The company requested me to relocate as they wanted me to talk to investors personally but relocation was not an option for me.',
    tasks: [
      'Handles all software implementation and management for the company.',
      'Use scrapy for crawling millions of deals from different deal sites including Groupon and Qoo10',
      'Supervise automation for categorizing deals with machine learning',
      'Manage several production servers to cater thousands of spider crawling the deal sites without getting permission denied from deal sites',
      'Aggregate deal data and build real time charts that shows the performance of each deal site and the products/deals that are popular',
    ],
  },
  {
    position: 'Django Developer',
    company: {
      name: 'Bixly',
      location: 'Fresno, California (remote)',
      description: 'A California based Python/Angular/React development shop.',
    },
    period: {
      start: '11/2011',
      end: '06/2013',
    },
    tasks: [
      'Develop online course platform for Gurulabs (gurulabs.com). Design database structure and implement dynamic form builder for creating dynamic data based on a course curriculum.',
      'Implement business processes with python for Advisordeck (wealthvest.com). Manage different types of users and permissions.  Implement charts that shows the financial status and updates.',
    ],
    outcome: 'Found better opportunity with another company.',
  },
  {
    position: 'PHP Developer',
    company: {
      name: 'Gaisano Mall Cinemas',
      location: 'Davao City, Philippines',
      description: 'Shopping Mall with several cinemas.',
    },
    period: {
      start: '12/2010',
      end: '10/2011',
    },
    tasks: [
      'Create website that manages schedules of movies to be shown in the cinemas.',
      'Implement comment and ratings system by the users.',
    ],
    outcome: 'Project finished successfully.',
  },
];

export default experiences;
