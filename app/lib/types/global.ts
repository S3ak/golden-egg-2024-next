export type Programme =
  | {
      title: "Front-end Development";
      id: 1;
      alias: "fed";
      description: "Digital Design and Graphics: This program focuses on graphic design, digital illustration, user interface (UI) design, and animation.";
    }
  | {
      title: "Digital Design and Graphics";
      id: 1;
      alias: "fed";
      description: "Digital Design and Graphics: This program focuses on graphic design, digital illustration, user interface (UI) design, and animation.";
    }
  | {
      title: "3D Design and Animation";
      id: 1;
      alias: "fed";
      description: "3D Design and Animation: Students in this program learn 3D modeling, animation, visual effects (VFX), and game design.";
    }
  | {
      title: "Game Design";
      id: 1;
      alias: "fed";
      description: "Game Design: This discipline covers game development, game programming, game art, and game production.";
    }
  | {
      title: "Interactive Media";
      id: 1;
      alias: "fed";
      description: "Interactive Media: Students study interactive storytelling, user experience (UX) design, web development, and digital marketing.";
    }
  | {
      title: "Film and TV Production";
      id: 1;
      alias: "fed";
      description: "Film and TV Production: This program covers filmmaking, scriptwriting, cinematography, editing, and post-production.";
    }
  | {
      title: "Digital Marketing";
      id: 1;
      alias: "fed";
      description: "Digital Marketing: Students learn about online marketing strategies, social media marketing, search engine optimization (SEO), and digital analytics.";
    }
  | {
      title: "Music Production";
      id: 1;
      alias: "fed";
      description: "Music Production: This discipline focuses on music composition, audio engineering, sound design, and music business.";
    }
  | {
      title: "Animation";
      id: 1;
      alias: "fed";
      description: "Animation: Students study traditional and digital animation techniques, character animation, motion graphics, and storytelling.";
    }
  | {
      title: "Cybersecurity";
      id: 1;
      alias: "fed";
      description: "Cybersecurity: This program covers network security, ethical hacking, digital forensics, and cybersecurity management.";
    }
  | {
      title: "Data Science";
      id: 1;
      alias: "fed";
      description: "Data Science: Students learn about data analysis, machine learning, data visualization, and big data technologies.";
    };

export type User = {
  id: string;
  // The name of a submission
  email: string;
  name: string;
  role: "student" | "guest" | "admin";
  birthdate?: string;
  langauge?: string;
  // TODO: Create Image type
  images?: string[];
  socialMediaLink?: string;
  programme: Programme;
  cohortYear?: Date[];
  yearsWon?: string;
};

export type Author = {
  user: User;
  id: string;
  // The name of a submission
  email: string;
  name: string;
};

export type submission = {
  id: string;
  // The name of a submission
  title: string;
  description: string;
  category: "design" | "coding" | "film production" | string;
  programme: Programme;
  author: Author;
  fileURL: string; // URL to the submitted file
  submittedBy: User; // ID of the user who submitted the project
  submittedAt: Date;
  cohortYear: Date;
  // TODO: Create Image type
  images: string[];
  public_link?: string;
  event: Event;
  likeCount: number;
};
