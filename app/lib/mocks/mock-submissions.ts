export const mockSubmissions = [
  {
    id: "1",
    title: "Beautiful Website Design",
    description: "A stunning design for a website",
    category: "design",
    programme: {
      title: "Web Design",
      duration: "1 year",
      location: "Online",
    },
    author: {
      name: "John Doe",
      email: "john@example.com",
      userId: "123",
    },
    fileURL: "https://example.com/design1",
    submittedBy: "123",
    submittedAt: new Date("2024-03-15"),
    cohortYear: new Date("2023"),
    images: [
      {
        url: "https://example.com/design1/image1",
        caption: "Homepage",
      },
      {
        url: "https://example.com/design1/image2",
        caption: "About Page",
      },
    ],
    public_link: "https://example.com/design1/public",
    event: {
      name: "Design Showcase",
      date: new Date("2024-04-01"),
      location: "Virtual",
    },
    likeCount: 10,
  },
  {
    id: "2",
    title: "Coding Project: Chat Application",
    description: "A real-time chat application built using React and Node.js",
    category: "coding",
    programme: {
      title: "Full Stack Development",
      duration: "2 years",
      location: "On-campus",
    },
    author: {
      name: "Jane Smith",
      email: "jane@example.com",
      userId: "456",
    },
    fileURL: "https://example.com/coding1",
    submittedBy: "456",
    submittedAt: new Date("2024-03-18"),
    cohortYear: new Date("2022"),
    images: [
      {
        url: "https://example.com/coding1/image1",
        caption: "Login Page",
      },
      {
        url: "https://example.com/coding1/image2",
        caption: "Chat Interface",
      },
    ],
    event: {
      name: "Coding Expo",
      date: new Date("2024-05-01"),
      location: "On-campus",
    },
    likeCount: 8,
  },
];
