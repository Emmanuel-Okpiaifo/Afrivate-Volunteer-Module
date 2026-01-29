/**
 * Shared pathfinder profile data by id. Used by PathfinderProfile, ContactPathfinder, EnablerPathfinderBookmarks.
 */
export const pathfinderDataById = {
  1: {
    id: 1,
    name: "John Martins",
    role: "Non-Profit Manager",
    location: "Nigeria",
    languages: "Fluent in English, French",
    about: "Experienced non-profit professional with a passion for community development and social impact.",
    skills: ["Management", "Communication", "Leadership"],
    workExperience: [],
    education: [],
    certifications: [],
  },
  2: {
    id: 2,
    name: "John Wick",
    role: "Youth Development Specialist",
    location: "Nigeria",
    languages: "Fluent in English",
    about: "Dedicated to empowering young people through education and mentorship programs.",
    skills: ["Community Outreach", "Event Planning", "Fundraising"],
    workExperience: [],
    education: [],
    certifications: [],
  },
  3: {
    id: 3,
    name: "Joshua Komolafe",
    role: "Fullstack Developer",
    location: "Nigeria",
    languages: "Fluent in English, French",
    about: "I'm a goal-driven developer who pays attention to details and follows up on given instructions.",
    skills: ["Java Developer", "Frontend Developer", "Backend Developer", "Phyton Developer"],
    workExperience: [],
    education: [],
    certifications: [],
  },
  4: {
    id: 4,
    name: "Jason Williams",
    role: "Digital Marketing Specialist",
    location: "Nigeria",
    languages: "Fluent in English",
    about: "Creative marketer with expertise in digital campaigns and social media strategy.",
    skills: ["Content Creation", "Social Media Marketing"],
    workExperience: [],
    education: [],
    certifications: [],
  },
  5: {
    id: 5,
    name: "James Anderson",
    role: "Policy Analyst",
    location: "Nigeria",
    languages: "Fluent in English",
    about: "Policy expert focused on creating meaningful change through research and advocacy.",
    skills: ["Research", "Policy Analysis", "Advocacy"],
    workExperience: [],
    education: [],
    certifications: [],
  },
};

export function getPathfinderById(id) {
  const numId = typeof id === 'string' ? parseInt(id, 10) : id;
  return pathfinderDataById[numId] || pathfinderDataById[3];
}
