import { z } from "zod";

export const UserSchema = z.object({
  /** Unique identifier UUID */
  id: z.string(),
  /** Unique email not prohibited no @noroff.no domain */
  email: z.string().email(),
  name: z.string(),
  role: z.enum(["student", "guest", "admin"]),
  age: z.number().optional(),
  birthdate: z.date().optional(),
  languages: z.array(z.string()),
  images: z.array(z.string()),
});

export const AttendeeSchema = z.object({
  hasTicket: z.boolean(),
  eventPreferences: z.array(z.string()).optional(),
  registrationStatus: z.object({
    type: z.enum(["early bird", "regular", "nominee"]),
    kind: z.enum(["general", "vip", "vvip", "staff"]),
    status: z.enum(["confirmed", "pending", "canceled"]),
    date: z.string(),
  }),
  event: z.string(),
  user: UserSchema,
});

// TODO: Find the real aliases for the programmes
const ProgrammesSchema = z.array(
  z.union([
    z.object({
      title: z.literal("Front-end Development"),
      id: z.string().uuid(),
      alias: z.literal("fed"),
      description: z.literal(
        "Digital Design and Graphics: This program focuses on graphic design, digital illustration, user interface (UI) design, and animation."
      ),
    }),
    z.object({
      title: z.literal("Digital Design and Graphics"),
      id: z.string().uuid(),
      alias: z.literal("fed"),
      description: z.literal(
        "Digital Design and Graphics: This program focuses on graphic design, digital illustration, user interface (UI) design, and animation."
      ),
    }),
    z.object({
      title: z.literal("3D Design and Animation"),
      id: z.string().uuid(),
      alias: z.literal("3da"),
      description: z.literal(
        "3D Design and Animation: Students in this program learn 3D modeling, animation, visual effects (VFX), and game design."
      ),
    }),
    z.object({
      title: z.literal("Game Design"),
      id: z.string().uuid(),
      alias: z.literal("gd"),
      description: z.literal(
        "Game Design: This discipline covers game development, game programming, game art, and game production."
      ),
    }),
    z.object({
      title: z.literal("Interactive Media"),
      id: z.string().uuid(),
      alias: z.literal("im"),
      description: z.literal(
        "Interactive Media: Students study interactive storytelling, user experience (UX) design, web development, and digital marketing."
      ),
    }),
    z.object({
      title: z.literal("Film and TV Production"),
      id: z.string().uuid(),
      alias: z.literal("ftv"),
      description: z.literal(
        "Film and TV Production: This program covers filmmaking, scriptwriting, cinematography, editing, and post-production."
      ),
    }),
    z.object({
      title: z.literal("Digital Marketing"),
      id: z.string().uuid(),
      alias: z.literal("dm"),
      description: z.literal(
        "Digital Marketing: Students learn about online marketing strategies, social media marketing, search engine optimization (SEO), and digital analytics."
      ),
    }),
    z.object({
      title: z.literal("Music Production"),
      id: z.string().uuid(),
      alias: z.literal("mp"),
      description: z.literal(
        "Music Production: This discipline focuses on music composition, audio engineering, sound design, and music business."
      ),
    }),
    z.object({
      title: z.literal("Animation"),
      id: z.string().uuid(),
      alias: z.literal("a"),
      description: z.literal(
        "Animation: Students study traditional and digital animation techniques, character animation, motion graphics, and storytelling."
      ),
    }),
    z.object({
      title: z.literal("Cybersecurity"),
      id: z.string().uuid(),
      alias: z.literal("cs"),
      description: z.literal(
        "Cybersecurity: This program covers network security, ethical hacking, digital forensics, and cybersecurity management."
      ),
    }),
    z.object({
      title: z.literal("Data Science"),
      id: z.string().uuid(),
      alias: z.literal("ds"),
      description: z.literal(
        "Data Science: Students learn about data analysis, machine learning, data visualization, and big data technologies."
      ),
    }),
  ])
);

const categoriesSchema = z.array(
  z.union([
    z.literal("HTML"),
    z.literal("CSS"),
    z.literal("JavaScript"),
    z.literal("React"),
    z.literal("Vue"),
    z.literal("Angular"),
    z.literal("Graphic Design"),
    z.literal("Digital Illustration"),
    z.literal("UI Design"),
    z.literal("UX Design"),
    z.literal("3D Modeling"),
    z.literal("Animation"),
    z.literal("Visual Effects"),
    z.literal("Game Design"),
    z.literal("Game Development"),
    z.literal("Game Programming"),
    z.literal("Game Art"),
    z.literal("Game Production"),
    z.literal("Interactive Storytelling"),
    z.literal("UX Design"),
    z.literal("Web Development"),
    z.literal("Digital Marketing"),
    z.literal("Filmmaking"),
    z.literal("Scriptwriting"),
    z.literal("Cinematography"),
    z.literal("Editing"),
    z.literal("Post-production"),
    z.literal("Online Marketing Strategies"),
    z.literal("Social Media Marketing"),
    z.literal("SEO"),
    z.literal("Digital Analytics"),
    z.literal("Music Composition"),
    z.literal("Audio Engineering"),
    z.literal("Sound Design"),
    z.literal("Music Business"),
    z.literal("Traditional Animation"),
    z.literal("Digital Animation"),
    z.literal("Character Animation"),
    z.literal("Motion Graphics"),
    z.literal("Storytelling"),
    z.literal("Network Security"),
    z.literal("Ethical Hacking"),
    z.literal("Digital Forensics"),
    z.literal("Cybersecurity Management"),
    z.literal("Data Analysis"),
    z.literal("Machine Learning"),
    z.literal("Data Visualization"),
    z.literal("Big Data Technologies"),
    z.string(),
  ])
);

export const EventSchema = z.object({
  id: z.string(),
  location: z.enum(["oslo", "bergen", "stavanger", "kristiansand", "online"]),
  date: z.date(),
  timeStart: z.string(),
  timeEnd: z.string(),
  address: z.string(),
  thumbnailImage: z.string(),
  images: z.array(z.string()),
  featuredImage: z.string(),
  registrationDeadline: z.date(),
  year: z.number(),
  admissionFee: z.object({
    student: z.number(),
    guest: z.number(),
  }),
  attendees: z.array(AttendeeSchema),
});

export const SubmissionSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  category: categoriesSchema,
  programme: z.string(),
  author: z.string(),
  fileURL: z.string().url(),
  submittedBy: UserSchema,
  submittedAt: z.date(),
  cohortYear: z.date(),
  images: z.array(z.string()),
  public_link: z.string().url().optional(),
  event: EventSchema,
  likeCount: z.number(),
});

export const NomineeSchema = z.object({
  submissions: z.string(),
  yearsWon: z.array(z.string()).optional(),
  socialMediaLink: z.string().url(),
  programme: z.string(),
  cohortYear: z.array(z.string()).optional(),
  userID: z.string(),
});

export const TicketSchema = z.object({
  id: z.string(),
  owner: UserSchema,
  attendeeName: z.string(),
  event: EventSchema,
  purchaseDate: z.date(),
  url: z.string().url(),
});

export const WinnerSchema = z.object({
  id: z.string(),
  user: UserSchema,
  submission: SubmissionSchema,
  eventId: z.string(),
  winnerName: z.string(),
  year: z.date(),
  programme: ProgrammesSchema,
});

// Infer TypeScript types
export type User = z.infer<typeof UserSchema>;
export type Attendee = z.infer<typeof AttendeeSchema>;
export type Ticket = z.infer<typeof TicketSchema>;
export type Submission = z.infer<typeof SubmissionSchema>;
export type Nominee = z.infer<typeof NomineeSchema>;
export type Event = z.infer<typeof EventSchema>;
export type Winner = z.infer<typeof WinnerSchema>;
export type Programme = z.infer<typeof ProgrammesSchema>;
export type Categories = z.infer<typeof categoriesSchema>;
