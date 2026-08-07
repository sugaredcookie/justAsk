export const issuesData = [
  {
    id: 104,
    title: "Denied giving payment",
    reporter: "Sunny",
    reportedUser: "Amit",
    relatedPost: {
      id: 42,
      title: "Guitar Lessons",
      category: "Skill Exchange",
      tags: ["guitar", "music", "teaching"]
    },
    description: "We agreed on half payment before the lesson and half after. After completing the lesson the other user refused to pay. I provided the full lesson as promised and even extended the session by 15 minutes. The user said they would pay after but never did.",
    status: "OPEN",
    createdAt: "4 Aug 2026",
    resolvedAt: null,
    moderator: null
  },
  {
    id: 103,
    title: "Plagiarized code submission",
    reporter: "Priya",
    reportedUser: "Rahul",
    relatedPost: {
      id: 38,
      title: "React Native App Development",
      category: "Work & Earn",
      tags: ["react", "react-native", "mobile", "coding"]
    },
    description: "The solver submitted plagiarized code and is refusing to issue a refund. I paid for a custom React Native app but received code copied from an open-source project. This is completely unacceptable.",
    status: "UNDER_REVIEW",
    createdAt: "3 Aug 2026",
    resolvedAt: null,
    moderator: "Admin User"
  },
  {
    id: 102,
    title: "Design specifications not followed",
    reporter: "Alex",
    reportedUser: "Jordan",
    relatedPost: {
      id: 35,
      title: "UI/UX Design for Mobile App",
      category: "Work & Earn",
      tags: ["ui", "ux", "design", "figma"]
    },
    description: "The solver didn't follow the design specifications and delivered subpar work. I provided clear Figma designs and color palettes but the final output looks completely different.",
    status: "RESOLVED",
    createdAt: "2 Aug 2026",
    resolvedAt: "3 Aug 2026",
    moderator: "Admin User"
  },
  {
    id: 101,
    title: "User unresponsive after payment",
    reporter: "Maria",
    reportedUser: "Carlos",
    relatedPost: {
      id: 29,
      title: "Spanish Tutoring Sessions",
      category: "Volunteer",
      tags: ["spanish", "tutoring", "language"]
    },
    description: "The poster was unresponsive and didn't provide feedback for over a week. We agreed on 5 sessions but after the first one they stopped responding.",
    status: "DISMISSED",
    createdAt: "1 Aug 2026",
    resolvedAt: null,
    moderator: "Admin User"
  },
  {
    id: 100,
    title: "Ghosted after accepting payment",
    reporter: "Emma",
    reportedUser: "Liam",
    relatedPost: {
      id: 25,
      title: "Mathematics Assignment Help",
      category: "Work & Earn",
      tags: ["math", "calculus", "assignment", "homework"]
    },
    description: "The solver agreed to complete the assignment but ghosted me after accepting the payment. I've been trying to reach them for 3 days with no response.",
    status: "OPEN",
    createdAt: "31 Jul 2026",
    resolvedAt: null,
    moderator: null
  },
  {
    id: 99,
    title: "Demanding extra payment",
    reporter: "Noah",
    reportedUser: "Olivia",
    relatedPost: {
      id: 22,
      title: "Video Editing for YouTube",
      category: "Work & Earn",
      tags: ["video", "editing", "premiere", "youtube"]
    },
    description: "The solver is demanding more payment than originally agreed upon after completing the work. We agreed on ₹500 per video but now they want ₹800.",
    status: "UNDER_REVIEW",
    createdAt: "30 Jul 2026",
    resolvedAt: null,
    moderator: "Admin User"
  }
];