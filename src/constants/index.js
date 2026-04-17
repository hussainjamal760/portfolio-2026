// Project data structure
import hostelImage from "@/assets/images/projects/hostel-3.png";
import hostelDemoVideo from "@/assets/images/projects/hostelDemoVideo.webm";
import comsocDemoVideo from "@/assets/images/projects/comsoc-vid.webm";
import skillstackImage from "@/assets/images/projects/sheep.png";
import skillstackVideo from "@/assets/images/projects/sheep.webm";
import ecommerceVideo from "@/assets/images/projects/mv-vid.webm";
import swiftcartImage from "@/assets/images/projects/shippo.png";
import realEstateImage from "@/assets/images/projects/estate1.png";
import realEstateVideo from "@/assets/images/projects/RealEstate-vid.webm";
import chessImage from "@/assets/images/projects/chess2.png";
import chessVideo from "@/assets/images/projects/chess-vid.webm";
import societyImage from "@/assets/images/projects/comsoc1.png";
import loopbazarImage from "@/assets/images/projects/loop-lab-img.png";
import loopbazarVideo from "@/assets/images/projects/loop-lab-vid.mp4";
export const projects = [
  {
    id: "society-management-system",
    title: "Society Management System",
    category: "Management Platform",
    year: "2026",
    status: "Production",
    description:
      "A comprehensive society management platform for university organizations, handling 1500+ concurrent users with optimized performance and enterprise-grade security.",
    about:
      "Engineered a full-stack society management platform designed to streamline operations for university organizations. The system handles complex workflows including society registration, event coordination, member management, and financial tracking. Built with Next.js 16, TypeScript, and MongoDB, the platform supports 1500+ concurrent users with <50ms query response time through advanced connection pooling and query optimization. Features multi-layer security with JWT authentication, Zod validation, and comprehensive rate limiting to prevent DoS attacks.",
    image: societyImage,
    liveUrl: "https://comsoccomsats.vercel.app/",
    codeUrl: "https://github.com/hussainjamal760/Society-Management-System-",
    detailsUrl: "/projects/society-management-system",
    stats: "1500+ Concurrent Users",
    technologies: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "Redux Toolkit",
      "Tailwind CSS",
      "Zod",
      "JWT",
      "Bcrypt",
      "Helmet",
      "Express Rate Limit",
      "Cloudinary",
      "Nodemailer",
      "Chart.js",
      "Framer Motion",
      "GSAP",
      "jsPDF",
      "XLSX",
      "Google Gemini",
      "Groq SDK",
      "Docker",
      "Sentry",
      "Winston",
      "Morgan",
    ],
    features: [
      {
        icon: "Users",
        title: "Multi-Role Dashboards",
        description:
          "Specialized dashboards for Admin, Society Head, and Member roles with role-based access control (RBAC) and permission management.",
      },
      {
        icon: "Calendar",
        title: "Real-Time Event Management",
        description:
          "Complete event lifecycle management with QR code-based attendance tracking, ticketing system, and automated email notifications.",
      },
      {
        icon: "Shield",
        title: "Enterprise-Grade Security",
        description:
          "Multi-layer security with JWT authentication, Zod schema validation, Helmet CSP, XSS protection, MongoDB sanitization, and 6 specialized rate limiters.",
      },
      {
        icon: "Database",
        title: "Optimized Performance",
        description:
          "MongoDB connection pooling (150 max connections) supporting 1500+ concurrent users with <50ms query response time and 60% faster API responses.",
      },
      {
        icon: "FileText",
        title: "Dynamic Form Builder",
        description:
          "Flexible form creation system for event registrations and feedback collection with PDF/Excel report generation capabilities.",
      },
      {
        icon: "DollarSign",
        title: "Financial Management",
        description:
          "Comprehensive sponsorship and budget tracking with financial oversight tools and automated approval workflows.",
      },
    ],
    challengesAndSolutions: [
      {
        challenge:
          "Supporting 1500+ concurrent users without performance degradation or database bottlenecks",
        solution:
          "Implemented MongoDB connection pooling (150 max connections, 225 concurrent operations) with N+1 query optimization, reducing API response time by 60%",
      },
      {
        challenge:
          "Preventing DoS attacks and resource exhaustion while maintaining user experience",
        solution:
          "Built 6 specialized rate limiters (auth: 10/15min, global: 100/15min, member ops: 100/hr) with express-slow-down and request timeout management (30s)",
      },
      {
        challenge:
          "Managing complex multi-stage approval workflows across different user roles",
        solution:
          "Designed state machine-based approval system with automated email notifications via Nodemailer and comprehensive audit logging with Winston",
      },
      {
        challenge:
          "Ensuring data security and preventing common web vulnerabilities at scale",
        solution:
          "Implemented multi-layer security: Bcrypt password hashing, JWT with refresh tokens, Zod validation across 10+ endpoints, Helmet security headers, CORS enforcement, and MongoDB query sanitization",
      },
    ],
    videoData: {
      thumbnail: societyImage,
      youtubeUrl: comsocDemoVideo,
    },
  },

  {
    id: "hostel-management-system",
    title: "Hostelite",
    category: "Management System",
    year: "2026",
    status: "Production",
    description:
      "A production-ready, enterprise-grade hostel management platform serving multiple user roles with real-time operations, automated workflows, and handling 1500+ concurrent users with sub-200ms response times.",
    about:
      "Hostelite is an architected full-stack hostel management system built with modern web technologies and enterprise-grade architecture. The platform features a monorepo structure with shared packages for types, validators, and constants, ensuring type safety and consistency across the entire codebase. With 12+ feature modules including auth, payments, hostels, rooms, students, complaints, and expenses, the system handles complex workflows from registration to automated billing. Built with Next.js 16, React 19, TypeScript, and MongoDB, it implements multi-layer security with JWT authentication, RBAC, rate limiting, and optimized database queries achieving 70% faster query times through strategic indexing and connection pooling.",
    image: hostelImage,
    liveUrl: "https://hostel-management-frontend-ten.vercel.app/",
    codeUrl: "https://github.com/hussainjamal760/Hostel-Management",
    detailsUrl: "/projects/hostel-management-system",
    stats: "10,000+ Concurrent Users",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Redux Toolkit",
      "React Hook Form",
      "Zod",
      "Framer Motion",
      "Chart.js",
      "Recharts",
      "Leaflet",
      "jsPDF",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT",
      "Bcrypt",
      "Helmet",
      "Cloudinary",
      "Multer",
      "Nodemailer",
      "Winston",
      "Morgan",
      "Envalid",
      "Cron Jobs",
    ],
    features: [
      {
        icon: "Shield",
        title: "Enterprise Security & Performance",
        description:
          "Multi-layer security with JWT authentication, RBAC, HTTP-only cookies, rate limiting (500 req/15min auth, 50 users/hr creation), Helmet.js headers, and CORS protection. Handles 10,000+ concurrent users with sub-200ms response times.",
      },
      {
        icon: "Database",
        title: "Optimized Database Architecture",
        description:
          "Normalized MongoDB schema with 10+ collections, compound indexes (hostelId+roomNumber, studentId+month+year), partial indexes for conditional uniqueness, connection pooling (maxPoolSize: 10), and lean queries achieving 70% faster query times and 60% faster read operations.",
      },
      {
        icon: "Zap",
        title: "Automated Billing & Workflows",
        description:
          "Automated cron job system for monthly rent challan generation with duplicate prevention using billingCycleId, overdue payment tracking, reminder notifications, and payment verification supporting multiple methods (Cash, Bank Transfer, Online).",
      },
      {
        icon: "LayoutDashboard",
        title: "Real-Time Analytics Dashboards",
        description:
          "Responsive mobile-first UI with 95+ Lighthouse score, real-time data visualization using Chart.js and Recharts for occupancy, revenue, and expense tracking, PDF generation for receipts, and optimistic UI updates with Redux Toolkit.",
      },
      {
        icon: "Code",
        title: "Type-Safe Monorepo Architecture",
        description:
          "Monorepo structure with shared packages enabling code reuse, TypeScript strict mode across entire codebase, synchronized Zod schemas between frontend/backend, 50+ reusable components, and comprehensive error logging with Winston.",
      },
      {
        icon: "MessageCircle",
        title: "Complete Operations Management",
        description:
          "Complaint management workflow with status tracking, expense tracking for operational costs, notification system with in-app and email delivery, room and bed management, and student lifecycle tracking from admission to checkout.",
      },
    ],
    challengesAndSolutions: [
      {
        challenge:
          "Scaling to handle 10,000+ concurrent users while maintaining sub-200ms response times",
        solution:
          "Implemented MongoDB connection pooling (maxPoolSize: 10), strategic compound indexing reducing query time by 70%, lean queries for 60% faster reads, and optimized aggregation pipelines for dashboard analytics",
      },
      {
        challenge:
          "Preventing DDoS attacks and ensuring enterprise-grade security across all endpoints",
        solution:
          "Deployed multi-layer security: rate limiting middleware (500 req/15min auth, 50 users/hr creation), JWT with HTTP-only cookies, Helmet.js security headers, CORS configuration, and custom API error handling reducing server crashes by 95%",
      },
      {
        challenge:
          "Maintaining type safety and preventing API contract mismatches between frontend and backend",
        solution:
          "Built monorepo architecture with shared TypeScript types, Zod validators, and constants packages, enabling synchronized validation schemas and preventing runtime errors through compile-time type checking",
      },
      {
        challenge:
          "Automating complex monthly billing cycles without duplicate invoices or missed payments",
        solution:
          "Designed automated cron job system with billingCycleId for duplicate prevention, async/await patterns with proper error handling, database connection retry logic, and graceful shutdown handling for zero-downtime deployments",
      },
    ],
    videoData: {
      thumbnail: hostelImage,
      youtubeUrl: hostelDemoVideo,
    },
  },
  {
  id: "loopbazar-ecommerce-platform",
  title: "LoopBazar",
  category: "AI E-Commerce Platform",
  year: "2026",
  status: "Hackathon Winner",
  description:
    "A production-ready AI-powered multi-vendor e-commerce platform with real-time chat, intelligent search, and dynamic pricing, supporting modern marketplace operations.",
    
  about:
    "Built a full-stack multi-vendor e-commerce platform combining Next.js 16 frontend with Express and MongoDB backend. The system supports buyer, seller, and admin roles with complete marketplace workflows including product management, order processing, and analytics. Integrated AI modules such as dynamic pricing suggestions, intelligent search autocomplete, and a context-aware customer support chatbot. Designed with production-grade practices including rate limiting, role-based access control, health monitoring, and scalable deployment on Vercel, Render, and Railway.",

  image: loopbazarImage,
  liveUrl: "https://web-hackathon-loop-lab.vercel.app/",
  codeUrl: "https://github.com/hussainjamal760/Web_Hackathon",
  detailsUrl: "/projects/loopbazar",
  
  stats: "3 Roles + AI Integration",

  technologies: [
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Mongoose",
    "Redux Toolkit",
    "Tailwind CSS",
    "Socket.IO",
    "JWT",
    "Zod",
    "Stripe",
    "Cloudinary",
    "Groq API",
    "Passport OAuth",
    "Winston",
    "Helmet",
    "CORS",
  ],

  features: [
    {
      icon: "ShoppingCart",
      title: "Multi-Vendor Marketplace",
      description:
        "Complete buyer, seller, and admin workflows including product management, cart, wishlist, checkout, and order lifecycle handling.",
    },
    {
      icon: "MessageCircle",
      title: "Real-Time Chat System",
      description:
        "Buyer-seller communication powered by Socket.IO with message status tracking (sent, seen, resolved) and image support.",
    },
    {
      icon: "Brain",
      title: "AI Dynamic Pricing",
      description:
        "Hybrid pricing engine using heuristics + LLM to suggest optimal product pricing with fallback safety and confidence scoring.",
    },
    {
      icon: "Search",
      title: "Intelligent Search Autocomplete",
      description:
        "Search suggestions powered by product relevance, categories, and search history signals for improved discovery.",
    },
    {
      icon: "Bot",
      title: "AI Customer Support",
      description:
        "Context-aware chatbot that assists buyers with orders, refunds, and shipping, with escalation handling for complex queries.",
    },
    {
      icon: "Shield",
      title: "Production-Grade Security",
      description:
        "Secure backend with JWT authentication, role-based access control, rate limiting, Helmet protection, and API throttling.",
    },
  ],

  challengesAndSolutions: [
    {
      challenge:
        "Ensuring reliable AI responses without breaking core platform functionality",
      solution:
        "Implemented hybrid AI architecture with deterministic fallback models and strict validation, ensuring system stability even if LLM fails",
    },
    {
      challenge:
        "Handling real-time communication between buyers and sellers efficiently",
      solution:
        "Integrated Socket.IO with optimized event handling and message state tracking for scalable real-time chat",
    },
    {
      challenge:
        "Maintaining secure and scalable API under high request loads",
      solution:
        "Applied rate limiting, JWT-based auth, role guards, and API throttling to prevent abuse and ensure stability",
    },
    {
      challenge:
        "Improving product discovery and user experience in large datasets",
      solution:
        "Built intelligent autocomplete system combining prefix matching with search history signals for relevance ranking",
    },
  ],

  videoData: {
    thumbnail: loopbazarImage,
    youtubeUrl: loopbazarVideo,
  },
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
