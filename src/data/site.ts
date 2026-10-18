// All of the site's copy lives here, so updating the portfolio never means touching markup.

export const profile = {
  name: 'Shahin Nazer',
  role: 'Senior Software Engineer',
  location: 'Dubai, UAE',
  email: 'shahin.nm91@gmail.com',
  url: 'https://shahinnazer.com',
  intro:
    'I build and run software at Emirates in Dubai: .NET services, React front ends, and the automation that keeps them shipping.',
  description:
    'Shahin Nazer is a Senior Software Engineer at Emirates in Dubai, working across C#/.NET, React and DevOps.',
  bio: [
    "I'm a software engineer with more than ten years in the industry. I started out building .NET modules in WPF, WCF and WinForms at Hexagon, which included implementing an emergency services system on site in Makkah.",
    "Today I'm a Senior Software Engineer at Emirates. I've built monitoring and analysis tooling for the internet booking engine and automated the workflows around it. C#, React and JavaScript are where I spend most of my time.",
    'Outside work I build things for my family, most recently an offline-first learning app with 3D mini-games for young children.',
  ],
};

export const socials = [
  { label: 'LinkedIn', href: 'https://ae.linkedin.com/in/shahin-nazer-mohiuddin-62b59b33', icon: 'linkedin' },
  { label: 'GitHub', href: 'https://github.com/Shahin1991', icon: 'github' },
  { label: 'Twitter', href: 'https://twitter.com/shahin91', icon: 'twitter' },
  { label: 'Facebook', href: 'https://www.facebook.com/shahin.nazer', icon: 'facebook' },
] as const;

// Most recent first.
export const experience = [
  {
    company: 'Emirates',
    place: 'Dubai, UAE',
    roles: ['Senior Software Engineer'],
    current: true,
    summary: [
      'Built the monitoring and analysis system for the internet booking engine.',
      'Automated workflows and set up processes that streamline operations.',
    ],
  },
  {
    company: 'Hexagon AB',
    place: 'Makkah, Saudi Arabia',
    roles: ['Software Engineer'],
    current: false,
    summary: [
      'Developed .NET modules in WPF, WCF and WinForms.',
      'Implemented an emergency services system on site in Makkah.',
    ],
  },
];

export const skills = [
  { group: '.NET and C#', items: ['C#', '.NET', 'WPF', 'WCF', 'WinForms'] },
  { group: 'Web', items: ['React', 'JavaScript', 'TypeScript', 'Next.js', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'] },
  { group: 'DevOps', items: ['Workflow automation', 'Monitoring and analysis', 'Git and GitHub', 'Static hosting'] },
  { group: 'Also worked with', items: ['Electron', 'Three.js', 'PWAs', 'IndexedDB'] },
];

export const projects = [
  {
    name: 'Kids Learning Hub',
    summary:
      'An offline-first learning app for children aged 2 to 8, with activities and 3D mini-games grouped by age. There are no fail states: wrong answers get a gentle nudge instead of a buzzer.',
    stack: ['Next.js', 'React', 'TypeScript', 'Three.js', 'IndexedDB'],
    repo: 'https://github.com/Shahin1991/kids-fun-learning',
    demo: null,
  },
  {
    name: 'Emirates flight status',
    summary:
      'Look up flights between two airports across yesterday, today and tomorrow. Airports come from the live Emirates API; results use a recorded response because the status API blocks cross-origin calls.',
    stack: ['React', 'JavaScript'],
    repo: 'https://github.com/Shahin1991/emirates-flight-status',
    demo: 'https://shahin1991.github.io/emirates-flight-status/',
  },
  {
    name: 'MERN learning app',
    summary: 'A full-stack app built to learn the MongoDB, Express, React and Node.js stack end to end.',
    stack: ['MongoDB', 'Express', 'React', 'Node.js'],
    repo: 'https://github.com/Shahin1991/mern_learn_app',
    demo: null,
  },
  {
    name: 'Sorting algorithms in C#',
    summary: 'Selection, bubble, insertion, merge and quick sort, each implemented from first principles.',
    stack: ['C#'],
    repo: 'https://github.com/Shahin1991/CSharp-Sorting-Implementations',
    demo: null,
  },
];
