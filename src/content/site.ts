/**
 * Single source of truth for all site copy, pricing and contact details.
 * Edit this file to change what the website says; components only render it.
 */

export interface NavLink {
  label: string;
  href: string;
}

export interface Audience {
  title: string;
  who: string;
  need: string;
}

export interface MethodStage {
  letter: string;
  name: string;
  summary: string;
  activities: string[];
}

export interface Programme {
  name: string;
  price: string;
  description: string;
  includes: string[];
  highlight?: "Flagship" | "Best value";
}

export interface ProgrammeGroup {
  id: string;
  label: string;
  intro: string;
  programmes: Programme[];
}

export interface StandaloneService {
  name: string;
  price: string;
}

export interface InstitutionService {
  name: string;
  detail: string;
  price: string;
}

export interface Faq {
  question: string;
  answer: string;
}

export const contact = {
  phoneDisplay: "+91 73494 21600",
  phoneE164: "+917349421600",
  whatsappNumber: "917349421600",
  city: "Bengaluru, Karnataka",
  hours: "Monday to Saturday, 10:00 to 19:00 IST",
} as const;

export const brand = {
  name: "Alt Way Academy",
  tagline: "Take the alternate way.",
  services: ["Career Counselling", "CV and Interview Readiness", "Upskilling"],
  description:
    "Alt Way Academy helps students and early-career professionals find the skills they already have, choose a career path that fits them, and get ready to be hired through a strong CV, mock interviews and targeted upskilling.",
} as const;

export const navLinks: NavLink[] = [
  { label: "Approach", href: "#approach" },
  { label: "Programmes", href: "#programmes" },
  { label: "Mentor", href: "#mentor" },
  { label: "For Colleges", href: "#colleges" },
  { label: "FAQ", href: "#faq" },
];

export const heroPoints: string[] = [
  "One-to-one sessions, online or in person",
  "A written roadmap after every plan",
  "English, Hindi, Kannada and Tamil",
];

export const audiences: Audience[] = [
  {
    title: "Final-year students and recent graduates",
    who: "Age 20 to 26",
    need: "Clarity on direction, a CV that gets shortlisted, interview practice and a plan for the first job.",
  },
  {
    title: "School and pre-university students",
    who: "Class 10 to 12, with parents",
    need: "Choosing a stream and a course based on strengths and interests rather than guesswork or pressure.",
  },
  {
    title: "Early-career professionals",
    who: "1 to 5 years of experience",
    need: "Switching roles or industries, closing skill gaps and preparing for the next set of interviews.",
  },
  {
    title: "Colleges and institutes",
    who: "Placement cells and departments",
    need: "Affordable workshops and employability programmes that prepare whole batches for placements.",
  },
];

export const method: MethodStage[] = [
  {
    letter: "A",
    name: "Assess",
    summary: "Find the starting point.",
    activities: [
      "Profile, interests and skills assessment",
      "One-to-one counselling session",
      "Clear view of strengths and gaps",
    ],
  },
  {
    letter: "L",
    name: "Level up",
    summary: "Close the gaps.",
    activities: [
      "Written career roadmap",
      "CV and LinkedIn rebuilt for your target roles",
      "Skills plan with practice tasks and course options",
    ],
  },
  {
    letter: "T",
    name: "Take off",
    summary: "Get hired.",
    activities: [
      "Mock interviews with written feedback",
      "Job-search strategy and application plan",
      "Follow-up check-ins as you apply",
    ],
  },
];

export const programmeGroups: ProgrammeGroup[] = [
  {
    id: "students",
    label: "Students and graduates",
    intro: "Start small with a single session or choose a complete package from assessment to interviews.",
    programmes: [
      {
        name: "Alt Discovery",
        price: "₹499",
        description: "A first conversation to understand where you are.",
        includes: ["30-minute introductory counselling session", "Suggested next steps"],
      },
      {
        name: "Alt Assess",
        price: "₹999",
        description: "Understand your strengths before you decide.",
        includes: ["Career assessment", "Counselling session to discuss results"],
      },
      {
        name: "Alt Career Plan",
        price: "₹1,999",
        description: "Our core programme for a clear, written direction.",
        includes: ["Career assessment", "60-minute one-to-one session", "Written report and career roadmap"],
        highlight: "Flagship",
      },
      {
        name: "Alt Graduate Ready",
        price: "₹3,999",
        description: "Everything you need to start applying with confidence.",
        includes: [
          "Alt Career Plan",
          "CV build and LinkedIn guidance",
          "Two mock interviews",
          "Written weakness report",
        ],
        highlight: "Best value",
      },
      {
        name: "Alt Full Journey",
        price: "₹5,999",
        description: "Guided support from first session to first offer.",
        includes: ["Alt Graduate Ready", "Skills roadmap", "Monthly follow-ups for three months"],
      },
    ],
  },
  {
    id: "professionals",
    label: "Working professionals",
    intro: "Focused support for a promotion, a role change or a move into a new industry.",
    programmes: [
      {
        name: "Career Upgrade",
        price: "₹1,999",
        description: "Sharpen your profile for the next step up.",
        includes: ["CV and LinkedIn refresh", "Skill-gap analysis", "Interview preparation"],
      },
      {
        name: "Career Transition",
        price: "₹3,999",
        description: "A structured plan to move into a new role.",
        includes: ["Target-role plan", "Skills roadmap", "CV and interview strategy", "Follow-up sessions"],
        highlight: "Best value",
      },
      {
        name: "Career Mentoring",
        price: "₹5,999 to ₹7,999",
        description: "Ongoing guidance while you make the change.",
        includes: ["Three months of structured mentoring", "Regular progress reviews"],
      },
    ],
  },
];

export const standaloneServices: StandaloneService[] = [
  { name: "CV review", price: "₹499" },
  { name: "CV rewriting", price: "₹999" },
  { name: "ATS-friendly CV build", price: "₹1,499" },
  { name: "LinkedIn optimisation", price: "₹999" },
  { name: "Mock interview (single)", price: "₹799" },
  { name: "Mock interviews (set of three)", price: "₹1,999" },
];

export const institutionServices: InstitutionService[] = [
  {
    name: "Career awareness workshop",
    detail: "A half-day or full-day session on career options, hiring trends and planning.",
    price: "From ₹5,000",
  },
  {
    name: "Student assessment camp",
    detail: "Career assessments for a batch, with individual summaries for each student.",
    price: "From ₹199 per student",
  },
  {
    name: "Four-week employability programme",
    detail: "CV clinics, mock interviews and skill planning delivered over four weeks.",
    price: "From ₹25,000",
  },
  {
    name: "Annual college partnership",
    detail: "Year-round placement readiness support planned with your placement cell.",
    price: "From ₹50,000",
  },
];

export const principles: { title: string; body: string }[] = [
  {
    title: "The whole journey in one place",
    body: "Self-discovery, CV, interviews and upskilling are handled together, so you are not passed between separate vendors.",
  },
  {
    title: "Practice comes first",
    body: "Mock interviews with written feedback show exactly what to fix before the real interview does.",
  },
  {
    title: "You leave with a document",
    body: "Every plan ends with a written roadmap you can follow, share with family and revisit later.",
  },
  {
    title: "Honest advice",
    body: "We never promise jobs, salaries or admissions, and any commission from a course provider is disclosed upfront.",
  },
];

export const mentor = {
  name: "Kenith Anthony",
  role: "Founder and Lead Mentor",
  initials: "KA",
  currentRole: "Talent Acquisition, Pravaig Dynamics",
  bio: [
    "Kenith works in talent acquisition at Pravaig Dynamics, a Bengaluru-based electric vehicle company. His day-to-day work involves screening CVs, running interviews and seeing first-hand why capable candidates are passed over.",
    "He started Alt Way Academy to close that gap from the candidate's side. Students and job seekers get guidance from someone who knows how hiring decisions are actually made, from the first CV scan to the final round.",
  ],
  focusAreas: [
    "Career direction for students and graduates",
    "CV and LinkedIn reviews from a recruiter's perspective",
    "Mock interviews and feedback",
    "Career transitions for early professionals",
  ],
  mission:
    "To help every individual recognise their potential, make an informed career decision and take a confident next step.",
} as const;

export const faqs: Faq[] = [
  {
    question: "Are sessions online or in person?",
    answer:
      "Both. Most sessions run on Google Meet so you can join from anywhere. In-person sessions can be arranged in Bengaluru.",
  },
  {
    question: "Which programme should I start with?",
    answer:
      "If you are unsure, book Alt Discovery. It is a short, low-cost session, and if you continue to a larger package we will recommend the one that fits rather than the most expensive one.",
  },
  {
    question: "Do you guarantee a job or placement?",
    answer:
      "No. Nobody can honestly guarantee a job. We guarantee a clear plan, a stronger CV, real interview practice and personal follow-up, which together improve your chances significantly.",
  },
  {
    question: "Can parents join the session?",
    answer:
      "Yes. For school and pre-university students we encourage a parent to join, especially for stream and course decisions.",
  },
  {
    question: "Do you offer personal or mental health counselling?",
    answer:
      "Not at present. Alt Way Academy focuses on career guidance and employability. Any future counselling services will be delivered only by qualified, registered professionals.",
  },
  {
    question: "How do I pay?",
    answer:
      "Payment is taken by UPI or bank transfer when your session is confirmed. Cancellation and refund terms are shared with every booking.",
  },
];

export const bookingInterests: string[] = [
  "Not sure yet, help me choose",
  ...programmeGroups.flatMap((group) => group.programmes.map((p) => p.name)),
  ...standaloneServices.map((s) => s.name),
  "College or institute partnership",
];

export const bookingProfiles: string[] = [
  "Student (Class 10 to 12)",
  "College student or recent graduate",
  "Working professional",
  "Parent",
  "College or institute",
];
