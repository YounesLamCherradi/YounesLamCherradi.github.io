export const contact = {
  email: null as string | null,
  linkedin: null as string | null,
  github: null as string | null,
}

export const navLinks = [
  { href: '#work', label: 'Work' },
  { href: '#services', label: 'Services' },
  { href: '#achievements', label: 'Achievements' },
  { href: '#approach', label: 'Approach' },
  { href: '#about', label: 'About' },
]

export type Project = {
  slug: string
  title: string
  category: string
  context: string
  summary: string
  image: string
  imageAlt: string
  url?: string
  role: string
  contributionLabel: string
  contribution: string[]
  outcomes?: { value: string; label: string }[]
  stack: string[]
}

export const projects: Project[] = [
  {
    slug: 'soar-platform',
    title: 'AI-Assisted SOAR Platform',
    category: 'Security Engineering',
    context: 'Multi-client SOC · DXC Technology Morocco',
    summary:
      'A security orchestration, automation and response platform that validates, enriches and correlates alerts, then opens cases and runs response playbooks automatically.',
    image: '/images/security-monitoring.png',
    imageAlt: 'Illustrative mockup of a security operations dashboard with alert queues and response workflows',
    role: 'Designer and developer — full-stack architecture, integrations and AWS deployment',
    contributionLabel: 'What I built',
    contribution: [
      'Full-stack architecture, dashboards, APIs and automated playbooks in Python and Django',
      'Integrated TheHive, Cortex, MISP, Wazuh and AI services into one workflow',
      'Automated alert validation, enrichment, correlation, case creation and response',
      'Deployed the platform on AWS',
    ],
    outcomes: [
      { value: '55%', label: 'reduction in MTTR' },
      { value: '60%', label: 'fewer false positives' },
    ],
    stack: ['Python', 'Django', 'TheHive', 'Cortex', 'MISP', 'Wazuh', 'AWS'],
  },
  {
    slug: 'digital-innovation-lab',
    title: 'Digital Innovation Lab Platform',
    category: 'Full-Stack Development',
    context: 'Al Akhawayn University in Ifrane',
    summary:
      'The institutional platform of the Digital Innovation Lab at Al Akhawayn University, supporting innovation, research visibility, student engagement and academic collaboration.',
    image: '/images/dil.png',
    imageAlt: 'Illustrative mockup of a university lab platform on a laptop and tablet',
    url: 'https://dil.aui.ma',
    role: 'Led full-stack development, integration, UX and security-conscious engineering',
    contributionLabel: 'What I delivered',
    contribution: [
      'Designed and developed the platform end to end',
      'Integrated supporting solutions into a single, centralised experience',
      'Shaped the user experience and applied security-conscious engineering throughout',
      'Delivered a modern, maintainable foundation for the Lab’s digital presence',
    ],
    stack: ['Full-stack', 'Integration', 'UX design', 'Secure engineering'],
  },
  {
    slug: 'praxis',
    title: 'Praxis',
    category: 'Full-Stack Development',
    context: 'Al Akhawayn University · AI-assisted writing',
    summary:
      'An AI-assisted academic writing platform for Al Akhawayn University, built to support students’ thinking without replacing their voice — planning, drafting, reflection and instructor feedback in one place.',
    image: '/images/praxis.png',
    imageAlt: 'Illustrative mockup of an academic writing editor with a feedback panel',
    url: 'https://praxis.aui.ma',
    role: 'Engineering contributor',
    contributionLabel: 'What the platform does',
    contribution: [
      'AI coaching that encourages students to develop their own ideas',
      'Writing-process insights that show instructors how work evolves',
      'Planning, drafting, reflection and feedback in a single workflow',
      'Keeps human judgment central to assessment',
    ],
    stack: ['AI integration', 'Full-stack', 'EdTech'],
  },
  {
    slug: 'atlas-voices',
    title: 'Atlas Voices',
    category: 'Systems Integration',
    context: 'Open-access oral history archive · Ifrane region',
    summary:
      'A digital archive preserving oral histories and cultural heritage from Morocco’s Ifrane region, open for anyone to explore.',
    image: '/images/project-atlas-voices.png',
    imageAlt: 'Illustrative mockup of a digital oral history archive website',
    url: 'https://atlasvoices.org',
    role: 'Backend developer and deployment lead',
    contributionLabel: 'My contribution',
    contribution: [
      'Developed the Django backend for organising and presenting archive records',
      'Connected backend services with the website interface',
      'Supported regional content exploration',
      'Managed hosting, server configuration, testing, debugging and production deployment',
    ],
    stack: ['Django', 'Python', 'Hosting', 'Deployment'],
  },
  {
    slug: 'wyf-morocco',
    title: 'WYF Morocco',
    category: 'Full-Stack Development',
    context: 'World Youth Festival · Morocco National Committee',
    summary:
      'The official website of Morocco’s National Committee for the World Youth Festival (WYF), the international gathering of young leaders and changemakers. It presents the committee, its programs, youth opportunities, news and announcements.',
    image: '/images/project-wyf.png',
    imageAlt: 'Illustrative mockup of a youth organisation website on phone and tablet',
    url: 'https://wyfmorocco.com',
    role: 'Designer and developer — full development lifecycle',
    contributionLabel: 'What I delivered',
    contribution: [
      'Architecture, frontend and backend implementation',
      'Dynamic content management for programs, news and announcements',
      'Testing, hosting, domain configuration and production deployment',
      'Secure coding, performance optimisation and mobile-first design',
    ],
    stack: ['Full-stack', 'CMS', 'Mobile-first', 'Deployment'],
  },
]

export const services = [
  {
    title: 'Security monitoring & SIEM integration',
    problem: 'Logs exist, but nobody sees the events that matter.',
    help: 'Connect sources, normalise events and tune detections to your environment.',
    deliverables: ['Log source onboarding', 'Detection rules', 'Alert runbook'],
  },
  {
    title: 'Application security',
    problem: 'Known weaknesses or unexplained auth and access issues.',
    help: 'Review, reproduce and fix issues in authentication, input handling and configuration.',
    deliverables: ['Findings report', 'Prioritised fixes', 'Retest notes'],
  },
  {
    title: 'Applied cryptography & data protection',
    problem: 'Sensitive data, passwords or keys handled without a clear protection model.',
    help: 'Review and implement encryption in transit and at rest, password hashing, signing and key handling.',
    deliverables: ['Crypto review', 'TLS & key setup', 'Data protection notes'],
  },
  {
    title: 'Full-stack web development',
    problem: 'You need a dependable web application built properly.',
    help: 'Design and build the frontend, API and data layer with security from the start.',
    deliverables: ['Working application', 'Source repository', 'Setup guide'],
  },
  {
    title: 'Secure deployment & integration',
    problem: 'Getting from a working build to a safe, connected production system.',
    help: 'Configure environments, secrets, access and service-to-service connections.',
    deliverables: ['Deployment config', 'Integration map', 'Access review'],
  },
  {
    title: 'Database migration & reliability',
    problem: 'Moving data or stabilising an application that fails under real use.',
    help: 'Plan migrations, verify integrity and remove recurring failure points.',
    deliverables: ['Migration plan', 'Validation checks', 'Rollback steps'],
  },
  {
    title: 'Documentation & handover',
    problem: 'Systems that only one person understands.',
    help: 'Write clear operational documentation so your team can run what was built.',
    deliverables: ['Architecture notes', 'Runbooks', 'Handover session'],
  },
]

export const milestones = [
  { value: '55%', label: 'MTTR reduction', detail: 'Contributed through the AI-assisted SOAR platform at DXC Technology Morocco' },
  { value: '60%', label: 'Fewer false positives', detail: 'Through automated alert validation, enrichment and correlation' },
  { value: '5', label: 'Platforms in production', detail: 'Across security operations, education, heritage and youth engagement' },
{ value: '3', label: 'University platforms', detail: 'Digital Innovation Lab, Praxis and Atlas Voices at Al Akhawayn University' },
  ]

export const events = [
  { name: 'MOSIP Connect 2026', detail: 'Invited by the Upanzi Network', year: '2026' },
  { name: 'ID4Africa 2025 Annual General Meeting', detail: 'Addis Ababa, Ethiopia · Digital ID finalist', year: '2025' },
  { name: 'World Youth Festival 2025', detail: 'Nizhny Novgorod · Fully funded, representing Morocco', year: '2025' },
]

export type Highlight = {
  title: string
  context: string
  detail: string
  stat?: string
  image?: string
}

export const highlights: Highlight[] = [
  {
    title: 'Best Project — Incubator',
    context: 'ID4Africa AGM 2025 · Upanzi Network',
    detail: 'Recognised by the Upanzi Network for the best project in the incubator track at the ID4Africa Annual General Meeting.',
    stat: 'Best Project',
    image: '/images/achievement-id4africa-award.webp',
  },
  {
    title: 'Digital ID Finalist',
    context: 'ID4Africa AGM 2025 · Addis Ababa',
    detail: 'Selected as a finalist in the digital identity track at the ID4Africa 2025 Annual General Meeting in Ethiopia.',
    stat: 'Finalist',
    image: '/images/achievement-id4africa-finalist.webp',
  },
  {
    title: 'Invited to MOSIP Connect 2026',
    context: 'Upanzi Network',
    detail: 'Invited by the Upanzi Network to take part in MOSIP Connect 2026, the global gathering on open-source digital identity.',
    image: '/images/achievement-upanzi-panel.webp',
  },
  {
    title: 'Fully Funded Delegate, World Youth Festival',
    context: 'Nizhny Novgorod · Representing Morocco',
    detail: 'Selected with full funding to represent Morocco at the World Youth Festival in Nizhny Novgorod, Russia.',
    stat: 'Fully funded',
    image: '/images/achievement-world-youth-festival.webp',
  },
  {
    title: 'Official Reception',
    context: 'Embassy of Russia in Morocco',
    detail: 'Received officially by the Ambassador of Russia in Morocco.',
    image: '/images/achievement-official-reception.webp',
  },
  {
    title: 'Top 5% on TryHackMe',
    context: 'Hands-on security practice',
    detail: 'Ranked in the top 5% of users on TryHackMe through continuous offensive and defensive security labs.',
    stat: 'Top 5%',
  },
]

export type Certification = {
  name: string
  issuer: string
  status: string
  kind: 'Certification' | 'Training'
}

export const certifications: Certification[] = [
  { name: 'CompTIA Security+ ce', issuer: 'CompTIA', status: 'Valid until Jun 2029', kind: 'Certification' },
  { name: 'BeyondTrust Certified Administrator — Password Safe', issuer: 'BeyondTrust', status: 'Valid until Sep 2028', kind: 'Certification' },
  { name: 'FortiGate 7.4 Operator', issuer: 'Fortinet', status: 'Issued May 2024', kind: 'Certification' },
  { name: 'Fortinet Certified Associate in Cybersecurity', issuer: 'Fortinet', status: 'Earned 2024 · expired May 2026', kind: 'Certification' },
  { name: 'Fortinet Certified Fundamentals in Cybersecurity', issuer: 'Fortinet', status: 'Earned 2024 · expired May 2026', kind: 'Certification' },
  { name: 'Technical Introduction to Cybersecurity 1.0', issuer: 'Fortinet', status: 'Completed Apr 2024', kind: 'Training' },
  { name: 'Introduction to the Threat Landscape 2.0', issuer: 'Fortinet', status: 'Completed Apr 2024', kind: 'Training' },
]

export const approach = [
  {
    step: '01',
    title: 'Understand the system',
    body: 'Map how data, users and services actually move before changing anything.',
  },
  {
    step: '02',
    title: 'Build with security in place',
    body: 'Treat access control, secrets and input handling as part of the design, not a final check.',
  },
  {
    step: '03',
    title: 'Deploy deliberately',
    body: 'Repeatable environments, least-privilege access and monitoring from day one.',
  },
  {
    step: '04',
    title: 'Hand over clearly',
    body: 'Documentation and runbooks so the work remains maintainable after I step away.',
  },
]

export const skills = [
  {
    group: 'Security',
    items: ['Application security', 'SIEM & log analysis', 'Access control', 'Secure configuration'],
  },
  {
    group: 'Development',
    items: ['Full-stack web apps', 'REST APIs', 'Relational databases', 'AI integration'],
  },
  {
    group: 'Operations',
    items: ['Deployment', 'Systems integration', 'Database migration', 'Technical documentation'],
  },
]
