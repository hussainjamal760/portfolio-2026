// Project data structure
import hostelImage from "@/assets/images/projects/hostel-3.png";
import hostelDemoVideo from "@/assets/images/projects/hostelDemoVideo.webm";
import skillstackImage from "@/assets/images/projects/sheep.png";
import skillstackVideo from "@/assets/images/projects/sheep.webm";
import ecommerceVideo from "@/assets/images/projects/mv-vid.webm";
import swiftcartImage from "@/assets/images/projects/shippo.png";
import realEstateImage from "@/assets/images/projects/estate1.png";
import realEstateVideo from "@/assets/images/projects/RealEstate-vid.webm";
import chessImage from "@/assets/images/projects/chess2.png";
import chessVideo from "@/assets/images/projects/chess-vid.webm";
export const projects = [

  {
  id: "hostel-management-system",
  title: "HostelHub",
  category: "Management System",
  year: "2026",
  status: "Development",
  description:
    "A complete Hostel Management System with multi-role hierarchy, automated monthly invoicing, complaint tracking, and secure role-based access control for Admin, Owner, Manager, and Students.",
  about:
    "HostelHub is a fully structured and scalable Hostel Management System designed to digitize hostel operations from registration to rent collection. The system follows a hierarchical workflow where Admin controls approvals, Owners manage hostels, Managers handle day-to-day operations, and Students interact through secure accounts. The platform automates monthly invoice generation, payment proof verification, complaint management, and real-time role-based visibility. Built with secure authentication and optimized database structure, HostelHub ensures transparency, accountability, and efficient hostel administration.",
  image: hostelImage, // Project screenshot
  liveUrl: "https://hostel-management-frontend-ten.vercel.app/",
  codeUrl: "https://github.com/hussainjamal760/Hostel-Management",
  detailsUrl: "/projects/hostel-management-system",
  stats: "5+ Hostels Managed",
  technologies: [
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Redux Toolkit",
    "React Hook Form",
    "Zod",
    "Express.js",
    "MongoDB",
    "Mongoose",
    "JWT",
    "Bcrypt",
    "Cloudinary",
    "NodeMailer",
    "Socket.io",
    "Cron Jobs",
    "Recharts",
    "Vercel",
    "Render"
  ],
  features: [
    {
      icon: "Shield",
      title: "Role-based Access Control",
      description:
        "Supports Admin, Owner, Manager, and Student roles with strict permission-based routing and JWT authentication."
    },
    {
      icon: "LayoutDashboard",
      title: "Admin Approval Workflow",
      description:
        "Owners create accounts and submit hostel requests. Admin reviews and approves or rejects hostel registrations."
    },
    {
      icon: "Building",
      title: "Hostel & Room Management",
      description:
        "Owners create hostels and assign managers. Managers create rooms, manage occupancy, and maintain student records."
    },
    {
      icon: "FileText",
      title: "Automated Monthly Invoicing",
      description:
        "System generates monthly invoices automatically via cron jobs. Students upload payment proofs for verification."
    },
    {
      icon: "CheckCircle",
      title: "Payment Verification System",
      description:
        "Managers verify or reject payment proofs. Owners have complete financial visibility and monitoring access."
    },
    {
      icon: "MessageCircle",
      title: "Complaint Management System",
      description:
        "Students can submit complaints. Managers respond and resolve issues while Owners monitor activity logs."
    }
  ],
  challengesAndSolutions: [
    {
      challenge:
        "Designing a strict hierarchical approval system without breaking data consistency",
      solution:
        "Implemented role-based middleware with MongoDB relational referencing to maintain structured data ownership"
    },
    {
      challenge:
        "Automating recurring monthly invoices while maintaining accurate financial tracking",
      solution:
        "Used Node Cron Jobs with scheduled database triggers to generate invoices and update payment statuses"
    },
    {
      challenge:
        "Ensuring secure credential distribution for managers and students",
      solution:
        "Implemented one-time credential generation with forced password reset on first login and encrypted storage using Bcrypt"
    }
  ],
  videoData: {
    thumbnail: hostelImage,
    youtubeUrl: hostelDemoVideo
  }
},

  {
    id: "sheepAcademy-lms",
    title: "Sheep Academy",
    category: "Education",
    year: "2026",
    status: "Production",
    description:
      "A Learning Management System with VdoCipher secure video protection, Stripe payments, and enrollment analytics for instructors to sell courses without piracy concerns.",
    about:
      "SheepAcademy represents a comprehensive Learning Management System designed to revolutionize online education. Built with modern web technologies, this platform addresses the critical challenges faced by instructors in the digital learning space, particularly around content protection and monetization. The system integrates advanced video security through VdoCipher, ensuring that educational content remains protected from piracy while maintaining an excellent user experience for legitimate learners. With seamless Stripe payment integration and detailed enrollment analytics, instructors can focus on creating quality content while the platform handles the technical complexities of course delivery and student management.",
    image: skillstackImage, // Project screenshot
    liveUrl: "https://sheep-academy-v1.onrender.com/",
    codeUrl: "https://github.com/hussainjamal760/MERN-LMS",
    detailsUrl: "/projects/sheepAcademy-lms",
    stats: "10+ Instructors",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "ShadCN",
      "Redux Toolkit",
      "React Hot Toast",
      "React Hook Form",
      "Zod",
      "Express.js",
      "MongoDB",
      "Redis",
      "JWT",
      "Bcrypt",
      "NextAuth.js",
      "VdoCipher",
      "Stripe",
      "Cloudinary",
      "Socket.io",
      "NodeMailer",
      "Recharts",
      "Vercel",
    ],
    features: [
      {
        icon: "Shield",
        title: "DRM-protected video streaming",
        description:
          "Uses the VdoCipher API to prevent content piracy and unauthorized downloads, ensuring instructors' intellectual property is fully protected.",
      },
      {
        icon: "Users",
        title: "Multi-role authentication",
        description:
          "Supports both students and instructors with JWT authentication and social login integration for seamless user experience.",
      },
      {
        icon: "BookOpen",
        title: "Course creation platform",
        description:
          "Features a drag-and-drop curriculum builder with instant Stripe payment-to-enrollment integration for streamlined course management.",
      },
      {
        icon: "Bell",
        title: "Real-time notifications",
        description:
          "Delivered via Socket.io with advanced course filtering, search capabilities, and responsive dark/light mode design.",
      },
      {
        icon: "BarChart3",
        title: "Analytics dashboard",
        description:
          "Utilizes Recharts to provide comprehensive insights into enrollment metrics, revenue tracking, and user management.",
      },
      {
        icon: "MessageCircle",
        title: "Interactive learning tools",
        description:
          "Encompasses a Q&A system, reviews, and course completion tracking with milestones for enhanced student engagement.",
      },
    ],
    challengesAndSolutions: [
      {
        challenge:
          "Preventing video piracy while maintaining streaming performance across all devices and browsers",
        solution:
          "Integrated VdoCipher DRM with OTP-based validation for secure, piracy-resistant video streaming",
      },
      {
        challenge:
          "Building secure payment workflows with automated enrollment and role-based access control",
        solution:
          "Built Stripe webhook integration with JWT authentication middleware for secure automated course enrollment",
      },
      {
        challenge:
          "Creating scalable analytics that handle real-time data synchronization between client and server",
        solution:
          "Implemented Redis caching with optimized database queries for real-time analytics performance",
      },
    ],
    videoData: {
      thumbnail: skillstackImage,
      youtubeUrl: skillstackVideo,
    },
  },
  {
    id: "shippo-ecommerce",
    title: "Shippo",
    category: "E-commerce",
    year: "2025",
    status: "Production",
    description:
      "A full-stack multi-vendor e-commerce marketplace with real-time chat, secure payments, and event-based flash sales for an engaging shopping experience.",
    about:
      "SwiftCart is a scalable multi-vendor e-commerce platform designed to empower sellers and enhance the shopping experience for buyers. Built with the MERN stack, the application supports secure authentication, Stripe-powered payments, and real-time customer-seller communication through Socket.io. Sellers can manage stores, track orders, and analyze performance while customers enjoy product filtering, wishlist/cl cart functionality, event-based sale timers, and streamlined checkout. The platform includes a powerful admin console for catalog moderation, vendor management, and system-wide analytics.",
    image: swiftcartImage,
    liveUrl: "https://multi-vendor-shippo-1.onrender.com/",
    codeUrl: "https://github.com/hussainjamal760/multi-vendor-shippo",
    detailsUrl: "/projects/shippo-ecommerce",
    stats: "30+ Active Vendors",
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "Redux Toolkit",
      "Socket.io",
      "Tailwind CSS",
      "ShadCN",
      "Stripe",
      "Cloudinary",
      "JWT",
      "Bcrypt",
    ],
    features: [
      {
        icon: "Lock",
        title: "Secure role-based access",
        description:
          "Authentication system with JWT, ensuring buyers, sellers, and admins have isolated permissions.",
      },
      {
        icon: "ShoppingCart",
        title: "Seamless shopping experience",
        description:
          "Product filtering, pagination, wishlist, and fast checkout flow for user convenience.",
      },
      {
        icon: "MessageCircle",
        title: "Real-time messaging",
        description:
          "Instant communication between buyers and vendors powered by Socket.io.",
      },
      {
        icon: "Timer",
        title: "Event-based flash sales",
        description:
          "Countdown timer system enabling time-restricted deals to boost conversions.",
      },
      {
        icon: "Package",
        title: "Order & inventory management",
        description:
          "Efficient tools for sellers to process orders, update inventory, and manage sales.",
      },
      {
        icon: "BarChart3",
        title: "Analytics dashboards",
        description:
          "Performance insights for both sellers and admins with revenue and engagement metrics.",
      },
    ],
    challengesAndSolutions: [
      {
        challenge:
          "Maintaining real-time interactions without affecting platform performance",
        solution:
          "Integrated Socket.io with optimized event handling and Redis-backed messaging architecture (optional future scale).",
      },
      {
        challenge:
          "Handling secure online payments and vendor-specific revenue split",
        solution:
          "Stripe checkout with webhook automation and separate vendor payout logic.",
      },
      {
        challenge:
          "Ensuring a scalable structure for multiple vendors and large product catalogs",
        solution:
          "Modular database schema with efficient indexing and paginated product queries.",
      },
    ],
    videoData: {
      thumbnail: swiftcartImage,
      youtubeUrl: ecommerceVideo,
    },
  },
  {
  id: "real-estate-mern",
  title: "Real Estate Platform",
  category: "Real Estate",
  year: "2025",
  status: "Production",
  description:
    "A full-stack real estate platform built with the MERN stack that allows users to list properties, search listings, and directly connect with landlords or buyers.",
  about:
    "This MERN-based Real Estate application is designed to simplify property management and house-hunting. It provides a clean, secure, and user-friendly platform where users can create accounts, list properties with images, apply advanced filters, and directly contact landlords or sellers. The platform includes JWT and Google OAuth authentication, full CRUD functionality, and a personalized dashboard for managing listings. Deployed on Render, it reflects a real-world scalable product similar to professional real estate platforms.",
  image: realEstateImage,
  liveUrl: "https://mern-real-estate-9rpz.onrender.com/",
  codeUrl: "https://github.com/hussainjamal760/mern-real-estate",
  detailsUrl: "/projects/real-estate-mern",
  stats: "95 Lighthouse Score",
  technologies: [
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Redux Toolkit",
    "JWT",
    "Google OAuth",
    "Tailwind CSS",
    "Cloudinary",
  ],
  features: [
    {
      icon: "Home",
      title: "Property listing system",
      description:
        "Users can create, update, and delete property listings with images and detailed descriptions.",
    },
    {
      icon: "Search",
      title: "Advanced search & filters",
      description:
        "Powerful filtering options to search properties by price, type, location, and availability.",
    },
    {
      icon: "User",
      title: "Secure authentication",
      description:
        "JWT-based authentication with Google OAuth for fast and secure user access.",
    },
    {
      icon: "LayoutDashboard",
      title: "User dashboard",
      description:
        "Personalized dashboard for managing profile details and property listings.",
    },
  ],
  challengesAndSolutions: [
    {
      challenge:
        "Designing a flexible data model for diverse property types and filters",
      solution:
        "Created a scalable MongoDB schema with indexed fields for fast querying",
    },
    {
      challenge:
        "Handling secure image uploads and storage",
      solution:
        "Integrated Cloudinary for optimized image hosting and delivery",
    },
  ],
  videoData: {
    thumbnail: realEstateImage,
    youtubeUrl: realEstateVideo,
  },
},
{
  id: "real-time-chess",
  title: "Real-Time Multiplayer Chess",
  category: "Game / Realtime",
  year: "2025",
  status: "Production",
  description:
    "A real-time multiplayer chess game with live gameplay, chat, and spectating powered by Socket.io and Node.js.",
  about:
    "This Real-Time Multiplayer Chess Game brings competitive gameplay and social interaction together in a lightweight browser-based experience. Players can challenge friends, spectate ongoing matches, chat in real time, and watch game states update instantly. Built using Node.js, Express.js, Socket.io, and Chess.js, the application maintains synchronized game logic, move validation, captured pieces, and automatic win detection. Deployed on Render, it demonstrates real-time backend architecture and event-driven systems.",
  image: chessImage,
  liveUrl: "https://chess-game-gebt.onrender.com/",
  codeUrl: "https://github.com/hussainjamal760/chess-game",
  detailsUrl: "/projects/real-time-chess",
  stats: "96 Lighthouse Score",
  technologies: [
    "Node.js",
    "Express.js",
    "Socket.io",
    "Chess.js",
    "HTML",
    "CSS",
    "JavaScript",
  ],
  features: [
    {
      icon: "Users",
      title: "Multiplayer gameplay",
      description:
        "Play chess with friends in real time with synchronized game states.",
    },
    {
      icon: "Eye",
      title: "Live spectating",
      description:
        "Watch ongoing matches with instant move updates.",
    },
    {
      icon: "MessageCircle",
      title: "Real-time chat",
      description:
        "Chat with players and spectators during live matches using Socket.io.",
    },
    {
      icon: "Crown",
      title: "Automatic game logic",
      description:
        "Move validation, captured pieces, and winner detection handled automatically.",
    },
  ],
  challengesAndSolutions: [
    {
      challenge:
        "Keeping game state synchronized across multiple clients",
      solution:
        "Used Socket.io event-driven architecture with authoritative server-side logic",
    },
    {
      challenge:
        "Ensuring valid chess moves and game rules",
      solution:
        "Integrated Chess.js for reliable move validation and game state management",
    },
  ],
  videoData: {
    thumbnail: chessImage,
    youtubeUrl: chessVideo,
  },
},

];

// Helper function to get project by ID
export const getProjectById = (id) => {
  return projects.find((project) => project.id === id);
};

// Helper function to get all projects
export const getAllProjects = () => {
  return projects;
};
