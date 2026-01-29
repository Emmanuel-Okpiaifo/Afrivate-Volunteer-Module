/**
 * Seeds localStorage with realistic placeholder data so you can test
 * all features that use localStorage. Only fills keys that are empty.
 * To re-seed: clear localStorage in DevTools and refresh.
 */

const SEED_KEY = 'afrivate_seed_v1';

function isSeeded() {
  try {
    return localStorage.getItem(SEED_KEY) === 'true';
  } catch (_) {
    return false;
  }
}

function markSeeded() {
  try {
    localStorage.setItem(SEED_KEY, 'true');
  } catch (_) {}
}

export function seedLocalStorage() {
  if (isSeeded()) return;
  try {
    seedEnablerOpportunities();
    seedBookmarks();
    seedPathfinderProfile();
    seedEnablerProfile();
    seedBookmarkedPathfinders();
    markSeeded();
  } catch (e) {
    console.warn('seedLocalStorage:', e);
  }
}

function seedEnablerOpportunities() {
  const key = 'enablerOpportunities';
  if (localStorage.getItem(key)) return;
  const data = [
    {
      id: 'opp-1',
      title: 'Community Health Volunteer',
      company: 'Red Cross Nigeria',
      type: 'Volunteering',
      description: 'Support community health outreach programmes in Lagos and Ogun states. You will help with health screenings, vaccination drives, and first-aid training for local volunteers. This role is ideal for anyone with an interest in public health or medical outreach.',
      responsibilities: [
        'Assist with health screening and data collection at community events',
        'Support vaccination and immunisation campaigns',
        'Help deliver first-aid and basic health training to community volunteers',
        'Maintain records and report to the programme coordinator',
      ],
      qualifications: [
        'Interest in community health or public health',
        'Good communication skills in English (Yoruba or Pidgin a plus)',
        'Ability to travel within Lagos and Ogun',
        'Reliable and punctual',
      ],
      aboutCompany: 'Red Cross Nigeria is part of the global Red Cross and Red Crescent movement. We deliver humanitarian support and community health programmes across Nigeria, with a focus on vulnerable communities.',
      applicationInstructions: 'Apply via this platform with a short note on why you want to volunteer. Selected candidates will be invited for a brief interview.',
      jobType: 'Volunteer',
      location: 'Lagos, Nigeria',
      workModel: 'On-site',
      timeCommitment: 'Part-time',
      createdAt: new Date().toISOString(),
    },
    {
      id: 'opp-2',
      title: 'Youth Mentorship Programme Coordinator',
      company: 'Save the Children Kenya',
      type: 'Volunteering',
      description: 'Coordinate and support our youth mentorship programme in Nairobi. You will match mentors with mentees, organise workshops, and track outcomes. This is a hands-on role for someone passionate about youth development and education.',
      responsibilities: [
        'Match volunteer mentors with young people and support the pairing process',
        'Organise monthly mentorship workshops and life-skills sessions',
        'Track attendance and outcomes and report to the programme manager',
        'Support recruitment and onboarding of new mentors',
      ],
      qualifications: [
        'Experience in youth work, education, or community programmes',
        'Strong organisational and communication skills',
        'Fluency in English and Swahili preferred',
        'Commitment of at least 6 months',
      ],
      aboutCompany: 'Save the Children Kenya works to ensure every child survives, learns, and is protected. Our programmes focus on health, education, and child protection across Kenya.',
      applicationInstructions: 'Submit your CV and a one-page cover letter describing your experience with youth or mentorship. Shortlisted applicants will be contacted within two weeks.',
      jobType: 'Volunteer',
      location: 'Nairobi, Kenya',
      workModel: 'Hybrid',
      timeCommitment: 'Part-time',
      createdAt: new Date().toISOString(),
    },
    {
      id: 'opp-3',
      title: 'Digital Literacy Trainer',
      company: 'TechBridge Africa',
      type: 'Volunteering',
      description: 'Deliver basic digital literacy training to adults and young people in Accra. You will use our curriculum to teach skills such as using smartphones, email, and safe internet use. Training is delivered in community centres and schools.',
      responsibilities: [
        'Deliver digital literacy sessions to groups of 10–15 participants',
        'Adapt materials for different literacy levels and ages',
        'Collect feedback and attendance data for reporting',
        'Support setup and maintenance of training equipment',
      ],
      qualifications: [
        'Comfortable with basic computing and mobile devices',
        'Patient and able to explain concepts simply',
        'Good spoken English; Ga or Twi is an advantage',
        'Available for at least 2 sessions per week',
      ],
      aboutCompany: 'TechBridge Africa is a Ghanaian NGO that bridges the digital divide through training, access to devices, and support for small businesses and job seekers.',
      applicationInstructions: 'Apply with a short bio and your preferred availability. We will share the curriculum and schedule a trial session.',
      jobType: 'Volunteer',
      location: 'Accra, Ghana',
      workModel: 'On-site',
      timeCommitment: 'Flexible',
      createdAt: new Date().toISOString(),
    },
    {
      id: 'opp-4',
      title: 'Environmental Education Volunteer',
      company: 'Green Future Initiative',
      type: 'Volunteering',
      description: 'Help run environmental education sessions for schools and communities in Cape Town. Topics include recycling, water saving, and climate awareness. You will work with our education team to deliver workshops and support school greening projects.',
      responsibilities: [
        'Deliver environmental education workshops in schools and community centres',
        'Support tree-planting and recycling initiatives',
        'Help develop and translate simple educational materials',
        'Assist with monitoring and reporting on programme activities',
      ],
      qualifications: [
        'Interest in environment, sustainability, or education',
        'Good communication skills; isiXhosa or Afrikaans a plus',
        'Able to work with children and teachers',
        'Commitment of 3–6 months preferred',
      ],
      aboutCompany: 'Green Future Initiative works across the Western Cape to promote environmental awareness, school greening, and community-led sustainability projects.',
      applicationInstructions: 'Send a brief motivation letter and your weekly availability. Successful applicants will receive training on our curriculum and safeguarding.',
      jobType: 'Volunteer',
      location: 'Cape Town, South Africa',
      workModel: 'On-site',
      timeCommitment: 'Part-time',
      createdAt: new Date().toISOString(),
    },
    {
      id: 'opp-5',
      title: 'Grant Writing and Fundraising Support',
      company: 'Women in Development Tanzania',
      type: 'Volunteering',
      description: 'Support our small team with grant research, proposal drafting, and donor reporting. This is a remote-friendly role for someone with strong writing skills and an interest in women’s rights and development.',
      responsibilities: [
        'Research grant opportunities and donor requirements',
        'Draft and edit sections of funding proposals and reports',
        'Support with proofreading and formatting of documents',
        'Maintain a simple database of deadlines and applications',
      ],
      qualifications: [
        'Strong written English; experience with proposals or reports',
        'Attention to detail and ability to meet deadlines',
        'Interest in gender equality or development work',
        'Reliable internet and 5–10 hours per week',
      ],
      aboutCompany: 'Women in Development Tanzania supports women-led small businesses and community projects in Dar es Salaam and surrounding regions through training, mentoring, and access to finance.',
      applicationInstructions: 'Submit a writing sample (e.g. 1–2 pages from a report or proposal) and a short cover letter. We will respond within one week.',
      jobType: 'Volunteer',
      location: 'Dar es Salaam, Tanzania (Remote)',
      workModel: 'Remote',
      timeCommitment: 'Flexible',
      createdAt: new Date().toISOString(),
    },
  ];
  localStorage.setItem(key, JSON.stringify(data));
}

function seedBookmarks() {
  const dataKey = 'bookmarkedJobsData';
  const idsKey = 'bookmarkedJobs';
  if (localStorage.getItem(dataKey)) return;
  const bookmarkedJobsData = [
    { id: 'opp-1', title: 'Community Health Volunteer', company: 'Red Cross Nigeria', type: 'Volunteering', location: 'Lagos, Nigeria' },
    { id: 'opp-3', title: 'Digital Literacy Trainer', company: 'TechBridge Africa', type: 'Volunteering', location: 'Accra, Ghana' },
  ];
  const bookmarkedJobs = ['opp-1', 'opp-3'];
  localStorage.setItem(dataKey, JSON.stringify(bookmarkedJobsData));
  localStorage.setItem(idsKey, JSON.stringify(bookmarkedJobs));
}

function seedPathfinderProfile() {
  const key = 'userProfile';
  if (localStorage.getItem(key)) return;
  const data = {
    displayName: 'Amina Okonkwo',
    title: 'Community Development Volunteer',
    location: 'Lagos, Nigeria',
    languages: 'English, Yoruba',
    about: 'I am passionate about community outreach and youth empowerment. I have supported health campaigns and education projects in Lagos and would like to grow in programme coordination and training.',
    workExperience: '2 years supporting community health and education projects with local NGOs in Lagos.',
    skills: ['Project Management', 'Community Outreach', 'Training & Facilitation', 'Data Collection', 'Communication'],
    education: ['B.Sc. Sociology, University of Lagos'],
    certifications: ['Basic First Aid (Red Cross)', 'Safeguarding in Development (online)'],
    profileComplete: true,
  };
  localStorage.setItem(key, JSON.stringify(data));
  localStorage.setItem('hasCompletedProfile', 'true');
}

function seedEnablerProfile() {
  const key = 'enablerProfile';
  if (localStorage.getItem(key)) return;
  const data = {
    bio: 'We are a Nigerian NGO focused on health, education, and youth empowerment. Our programmes run in Lagos, Ogun, and Oyo states.',
    name: 'Somadina Nwosu',
    country: 'Nigeria',
    email: 'somadina@example.org',
    state: 'Lagos',
    phoneNumber: '+234 800 000 0000',
    address: 'Lagos, Nigeria',
    website: 'https://example.org',
    employees: '10-50',
    role: 'Programme Manager',
    profileComplete: true,
    createdAt: new Date().toISOString(),
  };
  localStorage.setItem(key, JSON.stringify(data));
  localStorage.setItem('hasCompletedEnablerProfile', 'true');
}

function seedBookmarkedPathfinders() {
  const key = 'bookmarkedPathfinders';
  if (localStorage.getItem(key)) return;
  localStorage.setItem(key, JSON.stringify([1, 2]));
}
