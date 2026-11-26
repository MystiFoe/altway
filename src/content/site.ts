/**
 * Single source of truth for all site copy, pricing and contact details.
 * Components only render this data, so routine edits happen here.
 */

export interface NavLink {
  label: string;
  href: string;
}

export interface Audience {
  who: string;
  detail: string;
  workOn: string;
}

export interface MethodStage {
  letter: string;
  name: string;
  whatHappens: string;
  youLeaveWith: string;
}

export interface Programme {
  name: string;
  price: string;
  description: string;
  includes: string[];
  /** Short plain-language note shown on the recommended option only. */
  note?: string;
}

export interface ProgrammeGroup {
  id: string;
  label: string;
  intro: string;
  programmes: Programme[];
}

export interface PricedItem {
  name: string;
  price: string;
  detail?: string;
}

export interface Faq {
  question: string;
  answer: string;
}

export const contact = {
  phoneDisplay: "+91 73494 21600",
  phoneE164: "+917349421600",
  whatsappNumber: "917349421600",
  city: "Bengaluru",
  hours: "Monday to Saturday, 10am to 7pm",
} as const;

export const brand = {
  name: "Alt Way Academy",
  tagline: "Take the alternate way.",
  description:
    "Career counselling, CV and interview preparation, and upskilling plans for students and early-career professionals. Run by Kenith Anthony from Bengaluru, online across India.",
} as const;

export const routes = {
  home: "/",
  method: "/how-it-works/",
  programmes: "/programmes/",
  about: "/about/",
  colleges: "/colleges/",
  faq: "/faq/",
  book: "/book/",
} as const;

export const navLinks: NavLink[] = [
  { label: "How it works", href: routes.method },
  { label: "Prices", href: routes.programmes },
  { label: "About Kenith", href: routes.about },
  { label: "For colleges", href: routes.colleges },
  { label: "Questions", href: routes.faq },
];

/** Book page URL with an optional preselected session. */
export function bookingHref(interest?: string): string {
  return interest ? `${routes.book}?interest=${encodeURIComponent(interest)}` : routes.book;
}

export const hero = {
  title: "Career advice from someone who reads CVs for a living.",
  lead: "Kenith Anthony works in talent acquisition and sees every week why good candidates get rejected. Alt Way Academy is where he helps you avoid that: choosing a direction, fixing your CV, and practising interviews until they stop feeling like a test.",
  primaryCta: "Book a ₹499 first session",
  secondaryCta: "See all prices",
  facts: ["Sessions online or in Bengaluru", "English, Hindi, Kannada and Tamil"],
};

/** Lines shown on the sample CV in the hero, with the reviewer's notes. */
export const sampleCv = {
  name: "Ananya R.",
  target: "Applying for: Business Analyst",
  lines: [
    { id: "summary", text: "Hardworking and passionate team player seeking a challenging role." },
    { id: "role", text: "Marketing Intern, Bloom Foods, Bengaluru (Jun to Dec 2025)" },
    { id: "duty", text: "Responsible for handling social media and reports." },
    { id: "result", text: "Built a weekly sales dashboard in Excel used by 3 regional managers." },
    { id: "edu", text: "B.Com, Christ University, 2025. CGPA 7.8" },
    { id: "skills", text: "Skills: MS Office, communication, SQL (basic), Power BI" },
  ],
  notes: {
    summary: "Says nothing. Cut it.",
    duty: "What changed because of you?",
    result: "Good. Lead with this.",
    skills: "Move up, under your name",
  },
} as const;

export const audiences: Audience[] = [
  {
    who: "In Class 10 to 12",
    detail: "Usually with a parent in the session",
    workOn: "Which stream and course suit you, based on an assessment and a proper conversation rather than what everyone else is doing.",
  },
  {
    who: "In final year or just graduated",
    detail: "Most of the people we work with",
    workOn: "Picking target roles, a CV that gets shortlisted, LinkedIn, mock interviews and a plan for the first three months of applying.",
  },
  {
    who: "One to five years into work",
    detail: "Changing role, team or industry",
    workOn: "Where your experience fits next, which skills to close first, and how to explain the move in an interview.",
  },
  {
    who: "Running a placement cell",
    detail: "Colleges and training institutes",
    workOn: "Workshops, assessment camps and four-week programmes that get a whole batch ready before recruiters visit.",
  },
];

export const method: MethodStage[] = [
  {
    letter: "A",
    name: "Assess",
    whatHappens:
      "A short assessment of your interests and strengths, then a one-to-one call where we talk through the results and what you actually want.",
    youLeaveWith: "A clear list of roles worth aiming for, and the ones to drop.",
  },
  {
    letter: "L",
    name: "Level up",
    whatHappens:
      "Your CV and LinkedIn are marked up line by line and rewritten with you. Skill gaps get a short plan with free and paid course options.",
    youLeaveWith: "A rewritten CV and a written roadmap you can follow on your own.",
  },
  {
    letter: "T",
    name: "Take off",
    whatHappens:
      "Mock interviews run the way real ones are, followed by written feedback. Then a plan for where and how to apply, with check-ins as you go.",
    youLeaveWith: "Interview practice that counts, and someone to check in with.",
  },
];

export const programmeGroups: ProgrammeGroup[] = [
  {
    id: "students",
    label: "Students and graduates",
    intro: "Start with one session if you are unsure. Each package includes everything in the one above it.",
    programmes: [
      {
        name: "Discovery session",
        price: "₹499",
        description: "30 minutes to talk through where you are and what would help.",
        includes: ["One video call", "Suggested next steps"],
      },
      {
        name: "Assessment",
        price: "₹999",
        description: "Find out what you are good at before deciding anything.",
        includes: ["Career assessment", "Call to go through the results"],
      },
      {
        name: "Career plan",
        price: "₹1,999",
        description: "The full assessment and a written roadmap to follow.",
        includes: ["Career assessment", "60-minute one-to-one call", "Written report and roadmap"],
        note: "Most people start here",
      },
      {
        name: "Graduate ready",
        price: "₹3,999",
        description: "Career plan, plus everything you need to start applying.",
        includes: ["Career plan", "CV rewrite and LinkedIn review", "Two mock interviews", "Written feedback on weak spots"],
      },
      {
        name: "Full journey",
        price: "₹5,999",
        description: "Graduate ready, plus support while you apply.",
        includes: ["Graduate ready", "Skills roadmap", "Monthly check-ins for three months"],
      },
    ],
  },
  {
    id: "professionals",
    label: "Working professionals",
    intro: "For a promotion, a new role or a move into a different industry.",
    programmes: [
      {
        name: "Career upgrade",
        price: "₹1,999",
        description: "Get your profile ready for the next step up.",
        includes: ["CV and LinkedIn refresh", "Skill-gap review", "Interview preparation"],
      },
      {
        name: "Career change",
        price: "₹3,999",
        description: "A plan for moving into a different role or industry.",
        includes: ["Target-role plan", "Skills roadmap", "CV and interview strategy", "Follow-up calls"],
        note: "Most people start here",
      },
      {
        name: "Mentoring",
        price: "₹5,999 to ₹7,999",
        description: "Regular guidance while you make the move.",
        includes: ["Three months of planned sessions", "Progress reviews"],
      },
    ],
  },
];

export interface TimelineStep {
  when: string;
  title: string;
  detail: string;
}

/** A typical Graduate ready programme, shown on the How it works page. */
export const timeline: TimelineStep[] = [
  {
    when: "Day 1",
    title: "Assessment",
    detail: "You get a link to a 30 to 40 minute assessment you can take from your phone or laptop.",
  },
  {
    when: "Within 3 days",
    title: "One-to-one call",
    detail: "An hour on Google Meet going through your results, your interests and the roles worth aiming for.",
  },
  {
    when: "End of week 1",
    title: "Written roadmap",
    detail: "A short document with your target roles, the skills to work on first and where to learn them.",
  },
  {
    when: "Week 2",
    title: "CV and LinkedIn",
    detail: "Your CV comes back marked up, then we rewrite it together. LinkedIn gets the same treatment.",
  },
  {
    when: "Weeks 3 and 4",
    title: "Two mock interviews",
    detail: "Run like real ones for your target role, each followed by written notes on what to fix.",
  },
];

export const standaloneServices: PricedItem[] = [
  { name: "CV review with written notes", price: "₹499" },
  { name: "CV rewrite", price: "₹999" },
  { name: "CV built from scratch for online applications", price: "₹1,499" },
  { name: "LinkedIn profile review", price: "₹999" },
  { name: "One mock interview", price: "₹799" },
  { name: "Three mock interviews", price: "₹1,999" },
];

export const institutionServices: PricedItem[] = [
  {
    name: "Career awareness workshop",
    detail: "Half a day or a full day on options, hiring and planning.",
    price: "from ₹5,000",
  },
  {
    name: "Assessment camp",
    detail: "Assessments for a whole batch, with a summary for each student.",
    price: "from ₹199 a student",
  },
  {
    name: "Four-week employability programme",
    detail: "CV clinics, mock interviews and skill plans, one week at a time.",
    price: "from ₹25,000",
  },
  {
    name: "Year-round partnership",
    detail: "Placement preparation planned with your placement cell.",
    price: "from ₹50,000",
  },
];

export const collegeProcess: string[] = [
  "A call with your placement team to agree on goals, batch size and dates.",
  "Students take the assessment online a week before the first session.",
  "Workshops and mock interviews run on campus or online, whichever suits the batch.",
  "You receive a batch summary and individual notes for each student afterwards.",
];

/** Commitments phrased as limits, because that is what people want to know. */
export const commitments: string[] = [
  "We will not promise you a job, a salary or an admission. Nobody honestly can.",
  "We will not push the biggest package. If a ₹499 session is all you need, that is what we will tell you.",
  "If we ever earn a commission on a course we suggest, you will hear it from us first.",
  "We do not offer therapy or mental health counselling. If you need that, we will point you to a qualified professional.",
];

export const mentor = {
  name: "Kenith Anthony",
  firstName: "Kenith",
  initials: "KA",
  role: "Founder",
  dayJob: "Talent acquisition at Pravaig Dynamics",
  languages: "English, Hindi, Kannada, Tamil",
  letter: [
    "Most of my week is spent hiring. I read CVs, run screening calls and sit in interviews, and I keep seeing the same thing: capable people rejected for reasons that have nothing to do with their ability. A vague CV. A role they picked because a friend did. An answer they had never said out loud before.",
    "None of that is hard to fix, but most students never get to see the process from the other side of the table. I started Alt Way Academy to give them that view, at a price a student can actually pay.",
    "Every session is with me. If I think you need something I cannot offer, I will say so.",
  ],
} as const;

export const faqs: Faq[] = [
  {
    question: "Are sessions online or in person?",
    answer:
      "Mostly online on Google Meet, so you can join from anywhere in India. In-person sessions can be arranged in Bengaluru.",
  },
  {
    question: "I don't know which one to pick.",
    answer:
      "Book the ₹499 Discovery session. At the end of it you will know whether you need anything more, and if you do, which one.",
  },
  {
    question: "Can my parents join?",
    answer: "Yes. For school students we recommend it, especially when the decision is about a stream or a course.",
  },
  {
    question: "How quickly will I get my CV back?",
    answer: "A marked-up review comes back within three working days. A full rewrite takes about a week, including one round of changes.",
  },
  {
    question: "How do I pay?",
    answer:
      "By UPI or bank transfer once your session time is confirmed. You can reschedule up to 24 hours before a session at no cost.",
  },
  {
    question: "Do you offer personal or mental health counselling?",
    answer:
      "No. Alt Way Academy covers careers and employability only. If that changes, those sessions will be run by qualified, registered professionals.",
  },
];

export const bookingProfiles: string[] = [
  "School student (Class 10 to 12)",
  "College student or recent graduate",
  "Working professional",
  "Parent",
  "College or institute",
];

export const bookingInterests: string[] = [
  "Not sure yet",
  ...programmeGroups.flatMap((group) => group.programmes.map((p) => p.name)),
  ...standaloneServices.map((s) => s.name),
  "College or institute services",
];
