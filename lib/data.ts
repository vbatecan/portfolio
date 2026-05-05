import {
  Fingerprint,
  GraduationCap,
  MessageSquare,
  Search,
  Server,
  Shield,
  ShoppingCart,
  Sparkles,
  Terminal,
  Wifi,
  Code,
  Database,
  Smartphone,
  Globe,
  Brain,
  Monitor,
  GitBranch,
  Wrench,
  Cloud,
  LayoutDashboard,
} from "lucide-react"

export type RepoStatus = "public" | "private" | "none"
export type LiveStatus = "live" | "offline" | "development" | "archived" | "completed"

export interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  technologies: string[];
  github: string;
  live: string;
  icon: any;
  date: string;
  repoStatus: RepoStatus;
  liveStatus: LiveStatus;
  featured?: boolean;
  details: {
    overview: string;
    keyFeatures: string[];
    impact: string;
    skills: string[];
  };
}

export const AllProjects: Project[] = [
  {
    id: 1,
    title: "Student Attendance Management System",
    description:
      "Web-based interface for biometric attendance tracking with real-time processing and automated reporting",
    category: "web",
    image: "/assets/sams/1.png?height=200&width=300",
    technologies: ["Angular", "Quarkus", "PostgreSQL", "TypeScript", "PrimeNG", "JWT"],
    github: "#",
    live: "#",
    icon: GraduationCap,
    date: "2024",
    repoStatus: "private",
    liveStatus: "offline",
    featured: true,
    details: {
      overview:
        "The web interface of the Trackattend project, integrating fingerprint biometric authentication for real-time student attendance registration.",
      keyFeatures: [
        "SF2 report generation with automated data processing",
        "Section-specific attendance metrics and analytics",
        "SMS notification system for parent communication",
        "Real-time biometric data integration",
        "Teacher and administrator dashboard",
        "Performance analytics and insights",
      ],
      impact:
        "Significantly reduces manual reporting time and effort, allowing educators to focus on instruction rather than administrative tasks.",
      skills: ["Angular", "Quarkus", "PostgreSQL", "TypeScript", "PrimeNG", "JWT", "CSS", "HTML"],
    },
  },
  {
    id: 2,
    title: "Trackattend Hardware System",
    description:
      "Fingerprint-based attendance system with ESP32 microcontroller and AS608 scanner for Punturin Senior High School",
    category: "hardware",
    image: "/assets/Trackattend/1.jpg?height=200&width=300",
    technologies: ["C++", "Arduino", "ESP32", "JavaScript", "HTML", "CSS"],
    github: "#",
    live: "#",
    icon: Fingerprint,
    date: "2024",
    repoStatus: "private",
    liveStatus: "offline",
    details: {
      overview:
        "A comprehensive Grade 12 research project combining hardware and software to automate student attendance using fingerprint biometric technology.",
      keyFeatures: [
        "AS608 fingerprint scanner integration",
        "ESP32 microcontroller programming",
        "Instant SF2 report generation without manual entry",
        "Real-time tracking for teachers",
        "SMS notifications to parents for absences",
        "Web control interface using ESP Async Web Server",
      ],
      impact:
        "Demonstrated considerable success in enhancing attendance accuracy and operational efficiency at Punturin Senior High School.",
      skills: ["C++", "Arduino", "ESP32", "JavaScript", "HTML", "CSS", "Embedded Systems"],
    },
  },
  {
    id: 3,
    title: "Sticker Guidance System",
    description:
      "AI-powered visual detection tool for streamlining sticker location in Silhouette Studio for Shopee orders",
    category: "ai",
    image: "/assets/Sticker Guidance/1.png?height=200&width=300",
    technologies: ["Python", "PyTorch", "YOLO", "Ultralytics", "Roboflow"],
    github: "#",
    live: "#",
    icon: Search,
    date: "2024",
    repoStatus: "private",
    liveStatus: "offline",
    featured: true,
    details: {
      overview:
        "Machine learning solution designed to help editors quickly locate specific stickers within Silhouette Studio software for Shopee product orders.",
      keyFeatures: [
        "Visual detection using YOLO object detection",
        "PyTorch-based machine learning model",
        "Roboflow dataset management and training",
        "Real-time sticker identification and guidance",
        "Improved accuracy for order fulfillment",
        "Streamlined workflow for large sticker inventories",
      ],
      impact:
        "Significantly improves operational efficiency and accuracy in sticker product order preparation, reducing time spent navigating large sticker collections.",
      skills: ["Python", "PyTorch", "YOLO", "Machine Learning", "Computer Vision", "Ultralytics", "Roboflow"],
    },
  },
  {
    id: 4,
    title: "PISO WiFi Management System",
    description:
      "Python-based pay-per-use WiFi system for Orange Pi One with automated access control and admin interface",
    category: "system",
    image: "/placeholder.svg?height=200&width=300",
    technologies: ["Python", "Flask", "Docker", "Linux", "REST API"],
    github: "https://github.com/vbatecan/Piso-WiFi",
    live: "#",
    icon: Wifi,
    date: "2024",
    repoStatus: "development",
    liveStatus: "offline",
    details: {
      overview:
        "A comprehensive WiFi management system enabling pay-per-use internet access with automated control and monitoring capabilities.",
      keyFeatures: [
        "Real-time WiFi access control and time-based credits",
        "MAC address device tracking and management",
        "Web-based admin interface for user management",
        "Transaction history and monitoring dashboard",
        "Docker containerization for development",
        "Linux network tools integration (hostapd, dnsmasq)",
      ],
      impact:
        "Production-ready system for Orange Pi One providing versatile WiFi management for various commercial environments.",
      skills: ["Python", "Flask", "Docker", "Linux", "Network Management", "REST API", "Containerization"],
    },
  },
  {
    id: 5,
    title: "Shoes API",
    description:
      "Robust backend solution with dynamic searching capabilities for comprehensive shoe-related data management",
    category: "api",
    image: "/assets/Shoes Search API/1.png?height=200&width=300",
    technologies: ["Spring Boot", "PostgreSQL", "REST API", "Java"],
    github: "https://github.com/vbatecan/shoes_api",
    live: "#",
    icon: Server,
    date: "Oct 2024 - Nov 2024",
    repoStatus: "public",
    liveStatus: "offline",
    details: {
      overview:
        "A robust backend solution crafted to offer manipulable and dynamic searching capabilities for shoe-related data with comprehensive filtering operations.",
      keyFeatures: [
        "Dynamic and flexible query interface",
        "Comprehensive shoe data aggregation (size, name, brand, specifications)",
        "Advanced filtering and search operations",
        "RESTful API design with Spring Boot",
        "PostgreSQL database integration",
        "Scalable backend architecture",
      ],
      impact:
        "Provides a flexible and powerful API for shoe retailers and applications requiring comprehensive product data management and search capabilities.",
      skills: ["Spring Boot", "PostgreSQL", "REST API", "Java", "Database Design"],
    },
  },
  {
    id: 6,
    title: "ESP32 Deauther",
    description:
      "WiFi security testing tool with enhanced browser-based interface for network deauthentication testing",
    category: "security",
    image: "/assets/esp32-deauther/1.png?height=200&width=300",
    technologies: ["C++", "Arduino", "ESP32", "Hardware"],
    github: "https://github.com/vbatecan/ESP32-Deauther",
    live: "#",
    icon: Shield,
    date: "Oct 2024",
    repoStatus: "public",
    liveStatus: "development",
    featured: true,
    details: {
      overview:
        "Contributed to the development of the user interface for the ESP32 Deauther project—a tool designed for WiFi network security testing and educational purposes.",
      keyFeatures: [
        "Browser-based interface for intuitive controls",
        "Network scanning and device discovery",
        "Deauthentication testing capabilities",
        "Device connectivity management",
        "Educational security research tool",
        "ESP32 microcontroller integration",
      ],
      impact:
        "Enhanced accessibility for educational and security research purposes, making WiFi security testing more approachable for learning environments.",
      skills: ["C++", "Arduino", "ESP32", "Hardware", "Network Security", "Web Interface"],
    },
  },
  {
    id: 7,
    title: "Gold Days Clothing",
    description:
      "Refined e-commerce platform for high-quality apparel with secure transaction systems and seamless shopping experience",
    category: "ecommerce",
    image: "/assets/4/1.png?height=200&width=300",
    technologies: ["PHP", "MySQL", "JavaScript", "HTML", "CSS"],
    github: "#",
    live: "#",
    icon: ShoppingCart,
    date: "Aug 2024 - Sep 2024",
    repoStatus: "none",
    liveStatus: "offline",
    details: {
      overview:
        "A refined e-commerce platform dedicated to the sale of high-quality apparel, leveraging cutting-edge technology for seamless shopping experiences.",
      keyFeatures: [
        "User-friendly shopping interface",
        "Secure transaction processing systems",
        "Product catalog management",
        "Customer account management",
        "Order tracking and management",
        "Responsive design for all devices",
      ],
      impact:
        "Delivered a professional e-commerce solution that provides customers with a secure and intuitive online shopping experience for quality apparel.",
      skills: ["PHP", "MySQL", "JavaScript", "HTML", "CSS", "E-commerce", "Database Design"],
    },
  },
  {
    id: 8,
    title: "Forumania",
    description:
      "Dynamic forum platform fostering online communities with real-time communication and structured discussions",
    category: "community",
    image: "/assets/Forumania/1.png?height=200&width=300",
    technologies: ["PHP", "MySQL", "JavaScript", "HTML", "CSS"],
    github: "#",
    live: "#",
    icon: MessageSquare,
    date: "Jul 2024 - Aug 2024",
    repoStatus: "private",
    liveStatus: "offline",
    details: {
      overview:
        "A forum platform designed to facilitate engaging discussions and foster dynamic online communities with advanced technology and user-centric approach.",
      keyFeatures: [
        "Intuitive interface for seamless interaction",
        "Real-time communication capabilities",
        "Structured discussion environments",
        "User expertise sharing and solution seeking",
        "Community management tools",
        "Responsive design for all devices",
      ],
      impact:
        "Created a valuable tool for cultivating informed and connected communities, enabling users to engage in thoughtful conversations and knowledge exchange.",
      skills: ["PHP", "MySQL", "JavaScript", "HTML", "CSS", "Community Platform", "Real-time Communication"],
    },
  },
  {
    id: 9,
    title: "Soapify",
    description:
      "Professional static website for soap and disinfectant products with responsive design and brand presentation",
    category: "web",
    image: "/assets/Soapify/1.png?height=200&width=300",
    technologies: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/vbatecan/soapify",
    live: "https://vbatecan.github.io/soapify/",
    icon: Sparkles,
    date: "Mar 2024",
    repoStatus: "public",
    liveStatus: "live",
    details: {
      overview:
        "A static website developed as a commission for a client to present and promote soap and disinfectant products, serving as a digital brand introduction.",
      keyFeatures: [
        "Responsive and visually coherent design",
        "Professional brand presentation",
        "Product showcase and information",
        "Client-provided content integration",
        "Cross-device compatibility",
        "Optimized loading performance",
      ],
      impact:
        "Successfully delivered a professional web presence that effectively reflects the client's vision and branding objectives, encouraging product interest and customer engagement.",
      skills: ["JavaScript", "HTML", "CSS", "Responsive Design", "Client Communication", "Brand Implementation"],
    },
  },
  {
    id: 10,
    title: "Enrollment System C# Desktop Application",
    description:
      "Comprehensive desktop application for streamlining student enrollment processes and record-keeping in educational institutions",
    category: "desktop",
    image: "/placeholder.svg?height=200&width=300",
    technologies: ["C#", "Visual Studio", "SQLite", "MySQL", "LocalDB"],
    github: "#",
    live: "#",
    icon: GraduationCap,
    date: "Sep 2023 - Oct 2023",
    repoStatus: "none",
    liveStatus: "archived",
    details: {
      overview:
        "A comprehensive desktop application designed to streamline student enrollment processes and enhance record-keeping in educational institutions, built with C# and equipped with LocalDB.",
      keyFeatures: [
        "User-friendly interface for student registration",
        "Efficient student record management",
        "LocalDB integration for data persistence",
        "Comprehensive enrollment workflow",
        "Educational institution record-keeping",
        "Desktop application with native performance",
      ],
      impact:
        "Streamlines enrollment processes in educational institutions, reducing administrative overhead and improving data accuracy for student management.",
      skills: ["C#", "Visual Studio", "SQLite", "MySQL", "LocalDB", "Desktop Development", "Database Design"],
    },
  },
  {
    id: 11,
    title: "Fast Food Management System",
    description:
      "Comprehensive solution for streamlining fast food operations including inventory, sales, staffing, and customer service management",
    category: "desktop",
    image: "/placeholder.svg?height=200&width=300",
    technologies: ["VB.NET", "Visual Studio", "MySQL", "Desktop Application"],
    github: "https://github.com/vbatecan/AllyFastFood",
    live: "#",
    icon: ShoppingCart,
    date: "Apr 2022 - Jun 2022",
    repoStatus: "public",
    liveStatus: "archived",
    details: {
      overview:
        "A comprehensive solution designed to streamline operations and enhance efficiency in the fast food industry, managing inventory, sales, staffing, and customer service.",
      keyFeatures: [
        "Inventory management and tracking",
        "Sales processing and reporting",
        "Staff management and scheduling",
        "Customer service optimization",
        "Standardized operational processes",
        "Real-time business analytics",
      ],
      impact:
        "Optimizes day-to-day operations in fast food businesses, improving profitability and ensuring consistent, high-quality customer experiences.",
      skills: ["VB.NET", "Visual Studio", "MySQL", "Desktop Application Development", "Business Process Management"],
    },
  },
  {
    id: 12,
    title: "To Do List Spring Boot REST API",
    description:
      "RESTful API for task management applications with full CRUD operations for creating, updating, deleting, and managing tasks",
    category: "api",
    image: "/placeholder.svg?height=200&width=300",
    technologies: ["Spring Boot", "Java", "REST API", "Database"],
    github: "https://github.com/vbatecan/todolist_api",
    live: "#",
    icon: Server,
    date: "Jan 2022",
    repoStatus: "public",
    liveStatus: "offline",
    details: {
      overview:
        "A RESTful API designed to assist Todo list applications in managing task information, providing comprehensive CRUD operations for task management.",
      keyFeatures: [
        "Complete CRUD operations for tasks",
        "RESTful API design principles",
        "Task creation and management",
        "Data retrieval and updating",
        "Database integration for persistence",
        "API documentation and endpoints",
      ],
      impact:
        "Simplifies Todo list app development by providing a robust backend API, eliminating the need for developers to build data management from scratch.",
      skills: ["Spring Boot", "Java", "REST API", "Database Design", "API Development", "Backend Development"],
    },
  },
  {
    id: 13,
    title: "Patient Management System Spring Boot REST API",
    description:
      "RESTful API for patient management applications with full CRUD operations for creating, updating, deleting, and managing patients. Additionally, it includes authentication and authorization using JWT tokens. Implemented RBAC for role-based access control.",
    category: "api",
    image: "/assets/pms/1.png?height=200&width=300",
    technologies: ["Spring Boot", "Java", "REST API", "Database", "PostgreSQL", "JWT", "RBAC"],
    github: "https://github.com/vbatecan/patient-management-system-backend",
    live: "#",
    icon: Server,
    date: "June 2025",
    repoStatus: "public",
    liveStatus: "offline",
    featured: true,
    details: {
      overview:
        "A RESTful API designed to assist Patient Management System applications in managing patient information, providing comprehensive CRUD operations for patient management. Additionally, it includes authentication and authorization using JWT tokens. Implemented RBAC for role-based access control.",
      keyFeatures: [
        "End-to-end CRUD operations for managing patient records",
        "Adherence to RESTful API best practices",
        "Seamless patient registration, updates, and management",
        "Efficient data retrieval and modification capabilities",
        "Persistent storage with integrated database support",
        "Comprehensive API documentation and accessible endpoints",
        "Secure authentication and authorization powered by JWT tokens",
        "Role-Based Access Control (RBAC) for granular permission management"
      ],
      impact:
        "Accelerates the development of Patient Management Systems by providing a secure, scalable, and ready-to-use backend API, allowing developers to focus on building user-facing features instead of foundational data management logic.",
      skills: ["Spring Boot", "Java", "REST API", "Database Design", "API Development", "Backend Development", "Authentication", "Authorization", "RBAC"],
    },
  },
  {
    id: 14,
    title: "Image Tiler in Python for Machine Learning",
    description: "Image Tiler for Machine learning is for datasets that are too large to be processed by the model. It is a tool that can be used to tile the images into smaller pieces that can be processed by the model and improve accuracy to small objects. Roboflow has this feature but is not free. Therefore, I wrote this script for my own use.",
    category: "ai",
    image: "/assets/Image Tiler/1.png?height=200&width=300",
    technologies: ["Python", "Roboflow", "Machine Learning", "Computer Vision"],
    github: "https://github.com/vbatecan/ml-image-tiler",
    live: "#",
    icon: Terminal,
    date: "June 2025",
    repoStatus: "public",
    liveStatus: "archived",
    details: {
      overview:
        "A Python script that tiles images into smaller pieces, making it easier to process large datasets for machine learning tasks. By splitting images into grids, the tool enables models to focus on finer details and improves detection of small objects. Supports batch processing of images in various formats, providing a free and customizable alternative to commercial solutions like Roboflow.",
      keyFeatures: [
        "Tiles single images or entire directories for flexible batch processing",
        "Supports multiple image formats: PNG, JPG/JPEG, BMP, GIF, TIFF",
        "User-defined grid dimensions (e.g., 2x2, 3x3) for customizable tiling",
        "Preserves image quality and metadata during tiling",
        "Simple command-line interface for ease of use",
        "Speeds up dataset preparation for machine learning workflows",
        "Open-source and free to use, unlike some commercial alternatives"
      ],
      impact:
        "Empowers machine learning practitioners to efficiently prepare large image datasets by automating the tiling process, enabling better model performance on small objects and reducing reliance on paid tools. Facilitates experimentation and scalability in computer vision projects.",
      skills: ["Python", "Image Processing", "Machine Learning", "Computer Vision", "Command Line Tools"],
    },
  },
  {
    id: 15,
    title: "Virtuelink",
    description:
      "Virtuelink is a web application for managing meetings, reservations, and related workflows for organizations. It provides a calendar-first interface, user profiles, reservation handling, notifications, and server-side functions to automate common tasks.",
    category: "web",
    image: "/assets/virtuelink/image.png?height=200&width=300",
    technologies: ["Angular", "TypeScript", "Tailwind", "PrimeNG", "Supabase", "PostgreSQL", "Playwright", "pnpm"],
    github: "#",
    live: "https://virtuelink.netlify.app",
    icon: Server,
    date: "2025",
    repoStatus: "private",
    liveStatus: "live",
    featured: true,
    details: {
      overview:
        "Virtuelink streamlines scheduling, reservations, and related workflows for organizations with a calendar-first UI and serverless automation.",
      keyFeatures: [
        "Calendar-first event and reservation management",
        "Reservation requests, approvals, and conflict detection",
        "Role-based profiles and access control",
        "Email and in-app notifications with reminder scheduling",
        "Supabase backend (Postgres, Auth, Storage, Edge Functions)",
        "Serverless functions for automations and background jobs",
        "Integrations for calendar sync and external services",
      ],
      impact:
        "Speeds up scheduling and reduces administrative overhead while providing auditable history and reliable notifications.",
      skills: ["Angular", "TypeScript", "Supabase", "Postgres", "Tailwind", "PrimeNG", "Serverless", "Testing", "Playwright"],
    },
  },
  {
    id: 16,
    title: "Crumb Cabin Orders",
    description:
      "Crumb Cabin Orders is a full-stack web application for a cookie shop, providing an online ordering experience for customers and a comprehensive admin dashboard to manage operations.",
    category: "web",
    image: "/assets/crumb-cabin/image.png?height=200&width=300",
    technologies: [
      "React",
      "Vite",
      "TypeScript",
      "Tailwind",
      "shadcn/ui",
      "React Router",
      "TanStack Query",
      "React Hook Form",
      "Zod",
      "Supabase",
      "PostgreSQL",
      "Playwright",
      "pnpm",
    ],
    github: "#",
    live: "https://crumb-cabin.netlify.app",
    icon: ShoppingCart,
    date: "2025",
    repoStatus: "private",
    liveStatus: "live",
    details: {
      overview:
        "A modern, type-safe ordering system for a cookie shop with customer ordering, voucher support, order tracking, and an admin dashboard for managing menu, orders, bundles, and analytics.",
      keyFeatures: [
        "Customer portal with menu browsing and multi-step order form",
        "Voucher/discount code support at checkout",
        "Order tracking and status updates",
        "Google reCAPTCHA spam protection on order forms",
        "Admin dashboard with secure login and role-based access",
        "Real-time order management and analytics",
        "Menu, bundle, and voucher CRUD management",
        "Supabase Edge Functions for transactional emails and background tasks",
      ],
      impact:
        "Streamlines online ordering and store operations, reduces order handling time, and provides actionable analytics to improve business decisions.",
      skills: [
        "React",
        "Vite",
        "TypeScript",
        "Tailwind",
        "shadcn/ui",
        "TanStack Query",
        "React Hook Form",
        "Zod",
        "Supabase",
        "PostgreSQL",
        "Serverless",
        "Playwright",
      ],
    },
  },
  {
    "id": 17,
    "title": "Kaong Detection Application - Optimized Version",
    "description": "Flask application for detecting Kaong fruit ripeness using YOLO models, refactored into a service-oriented, production-ready architecture.",
    "category": "ai",
    "image": "/assets/kaong-detection/image.png?height=200&width=300",
    "technologies": ["Python", "Flask", "PyTorch", "YOLO", "Ultralytics", "MySQL", "WebSocket"],
    "github": "#",
    "live": "#",
    "icon": Search,
    "date": "Nov 2025",
    "repoStatus": "private",
    "liveStatus": "completed",
    "featured": true,
    "details": {
      "overview": "An optimized, service-oriented Flask app for Kaong ripeness detection using YOLO models with separate DetectionService, DatabaseService, and ImageService for maintainability and performance.",
      "keyFeatures": [
        "Service-oriented architecture (DetectionService, DatabaseService, ImageService)",
        "YOLO-based inference with support for custom and fallback models",
        "Image validation, EXIF orientation handling and automatic resizing",
        "Database connection pooling and configurable save thresholds",
        "REST endpoints and WebSocket for real-time frame analysis",
        "Centralized config with environment variable support",
        "Comprehensive error handling and structured logging"
      ],
      "impact": "Provides accurate, scalable Kaong ripeness assessments with improved maintainability, efficient resource usage, and production-ready configuration.",
      "skills": ["Python", "Flask", "Computer Vision", "PyTorch", "YOLO", "Database Design", "WebSocket", "Logging"]
    }
  },
  {
    id: 18,
    title: "Freelancer Project Management",
    description:
      "A comprehensive project management solution for freelancers managing clients, projects, invoices, and time tracking in a unified dashboard.",
    category: "web",
    image: "/assets/freelance-central/image.png?height=200&width=300",
    technologies: ["Angular", "Tailwind CSS", "PrimeNG", "Supabase", "Chart.js", "FullCalendar", "Gemini AI"],
    github: "#",
    live: "https://freelance-central.netlify.app",
    icon: LayoutDashboard,
    date: "2025",
    repoStatus: "private",
    liveStatus: "live",
    featured: true,
    details: {
      overview:
        "A comprehensive project management solution designed for freelancers. This application helps you manage clients, projects, invoices, time tracking, and more in a unified dashboard. Built with modern web technologies for performance and user experience.",
      keyFeatures: [
        "Centralized dashboard for active projects, tasks, and financial metrics",
        "Detailed project views with task lists, Kanban boards, and file management",
        "Client management with dedicated portals and profiles",
        "Invoicing system to create, manage, and export invoices",
        "Time tracking for tasks and projects",
        "Integrated Gemini AI for task automation and message summarization",
        "Visual analytics and reporting on business performance",
        "Built-in help center and documentation",
      ],
      impact:
        "Streamlines freelance business operations by consolidating project management, client communication, and financial tracking into a single, AI-enhanced platform.",
      skills: [
        "Angular",
        "Tailwind CSS",
        "PrimeNG",
        "Supabase",
        "Chart.js",
        "FullCalendar",
        "Gemini AI",
        "PDF Generation",
      ],
    },
  },
  {
    id: 19,
    title: "Pikash",
    description:
      "Personal finance tracker for Filipinos — offline-first with Supabase sync, wallets, budgets, and built-in calculator for expense/income forms",
    category: "web",
    image: "/assets/pikash/image.png?height=200&width=300",
    technologies: ["React 19", "Vite", "TypeScript", "Tailwind CSS 4", "shadcn/ui", "React Router v7", "Recharts", "Dexie.js", "Supabase", "Cloudflare Pages"],
    github: "https://github.com/vbatecan/pikash",
    live: "#",
    icon: LayoutDashboard,
    date: "2025",
    repoStatus: "public",
    liveStatus: "development",
    details: {
      overview:
        "Pikash is a personal finance tracker designed for Filipinos. It tracks income, expenses, and budgets across multiple wallets with offline-first storage via Dexie.js (IndexedDB) and cloud sync via Supabase. Features a built-in calculator in entry forms for quick amount entry.",
      keyFeatures: [
        "Multi-wallet support (Cash, Debit, Bank, Credit, Savings, Investment)",
        "Expense, income, and transfer tracking with category hierarchy",
        "Offline-first architecture with Dexie.js and Supabase cloud sync",
        "Budget management with periodic limits per category",
        "Built-in calculator keypad with chained arithmetic operations for quick amount entry",
        "Cloudflare Pages deployment for global availability",
      ],
      impact:
        "Gives Filipinos a powerful, privacy-focused tool to manage personal finances — works offline and syncs when connected, making it reliable even on spotty internet.",
      skills: [
        "React 19",
        "Vite",
        "TypeScript",
        "Tailwind CSS 4",
        "shadcn/ui",
        "React Router v7",
        "Recharts",
        "Dexie.js",
        "Supabase",
        "Cloudflare Pages",
        "Offline-First Architecture",
      ],
    },
  },
]

export const SkillsData = [
  {
    name: "Backend Development",
    icon: Server,
    color: "from-green-500 to-emerald-500",
    items: ["Java", "Spring Boot", "Quarkus", "RESTful APIs", "JWT", "OAuth2"],
    description: "Specializing in secure, scalable backend systems with Java frameworks and authentication",
    details: [
      "Enterprise Java with Spring Boot ecosystem",
      "Cloud-native applications with Quarkus",
      "RESTful API design and implementation",
      "JWT-based authentication systems",
      "OAuth2 security implementation",
      "Microservices architecture patterns",
    ],
    relatedProjects: ["Student Attendance Management System", "Shoes API", "To Do List Spring Boot REST API"],
    isSpecialty: true,
  },
  {
    name: "Frontend Development",
    icon: Code,
    color: "from-blue-500 to-cyan-500",
    items: ["Angular", "TypeScript", "JavaScript", "HTML5", "CSS3", "Responsive Design"],
    description: "Creating dynamic, responsive user interfaces with Angular and modern web technologies",
    details: [
      "Angular framework expertise",
      "TypeScript for type-safe development",
      "Component-based architecture",
      "Responsive design and CSS Grid/Flexbox",
      "Frontend-backend integration",
      "Performance optimization and accessibility",
    ],
    relatedProjects: ["Student Attendance Management System", "Soapify", "Freelancer Project Management"],
    isSpecialty: true,
  },
  {
    name: "Database Management",
    icon: Database,
    color: "from-orange-500 to-red-500",
    items: ["PostgreSQL", "MySQL", "MariaDB", "Redis", "SQLite", "Database Design"],
    description: "Relational database expertise with focus on design, optimization, and data integrity",
    details: [
      "Relational database design and normalization",
      "Query optimization and indexing strategies",
      "In-memory caching with Redis",
      "Database migration and backup strategies",
      "ACID compliance and transaction management",
      "Data modeling and schema design",
    ],
    relatedProjects: ["Student Attendance Management System", "Shoes API", "PISO WiFi Management System"],
    isSpecialty: true,
  },
  {
    name: "Security & Authentication",
    icon: Shield,
    color: "from-red-500 to-pink-500",
    items: ["JWT", "OAuth2", "API Security", "Secure Development", "Data Protection"],
    description: "Implementing robust authentication systems and security best practices",
    details: [
      "JWT-based authentication implementation",
      "OAuth2 authorization flows",
      "API security and rate limiting",
      "Secure coding practices and OWASP guidelines",
      "Data encryption and protection",
      "Security monitoring and compliance",
    ],
    relatedProjects: ["Student Attendance Management System", "Shoes API"],
    isSpecialty: true,
  },
  {
    name: "Mobile & Desktop",
    icon: Smartphone,
    color: "from-purple-500 to-pink-500",
    items: ["Kotlin", "Android Studio", "C#", "VB.NET", "Desktop Apps"],
    description: "Native and cross-platform application development",
    details: [
      "Native Android development with Kotlin",
      "C# desktop application development",
      "VB.NET business applications",
      "Cross-platform development strategies",
      "Mobile UI/UX best practices",
      "Desktop application architecture",
    ],
    relatedProjects: ["Trackattend Hardware System", "Enrollment System", "Fast Food Management System"],
  },
  {
    name: "AI/ML & Data",
    icon: Brain,
    color: "from-indigo-500 to-purple-500",
    items: ["Python", "TensorFlow", "PyTorch", "Data Analysis", "Machine Learning"],
    description: "Machine learning models, data analysis, and AI-powered applications",
    details: [
      "Deep learning with TensorFlow and PyTorch",
      "Data preprocessing and feature engineering",
      "Statistical analysis and visualization",
      "Neural network architecture design",
      "Model training, validation, and deployment",
      "Computer vision and NLP applications",
    ],
    relatedProjects: ["Sticker Guidance System", "Freelancer Project Management"],
  },
  {
    name: "Cloud & DevOps",
    icon: Cloud,
    color: "from-teal-500 to-blue-500",
    items: ["Vercel", "Docker", "CI/CD", "AWS", "Linux Systems"],
    description: "Cloud infrastructure, containerization, and automated deployment",
    details: [
      "Serverless deployment with Vercel",
      "Containerization with Docker",
      "Automated CI/CD pipeline setup",
      "AWS cloud services and architecture",
      "Linux system administration",
      "Infrastructure as Code (IaC) practices",
    ],
    relatedProjects: ["PISO WiFi Management System", "Freelancer Project Management"],
  },
  {
    name: "Development Tools",
    icon: Wrench,
    color: "from-yellow-500 to-orange-500",
    items: ["IntelliJ IDEA", "VS Code", "PyCharm", "WebStorm", "Postman"],
    description: "Professional development environment and productivity tools",
    details: [
      "IntelliJ IDEA for Java development",
      "IDE customization and plugin development",
      "Code debugging and profiling techniques",
      "API testing and documentation with Postman",
      "Code quality analysis and refactoring",
      "Integrated development workflows",
    ],
    relatedProjects: ["All Projects"],
  },
  {
    name: "Operating Systems",
    icon: Terminal,
    color: "from-gray-500 to-slate-500",
    items: ["Linux", "Ubuntu", "Arch", "Windows", "Kali", "Debian"],
    description: "Multi-platform system administration and command-line proficiency",
    details: [
      "Linux system administration and scripting",
      "Package management across distributions",
      "System security and hardening",
      "Network configuration and troubleshooting",
      "Shell scripting and automation",
      "Virtualization and dual-boot setups",
    ],
    relatedProjects: ["PISO WiFi Management System", "Trackattend Hardware System"],
  },
  {
    name: "Version Control",
    icon: GitBranch,
    color: "from-violet-500 to-purple-500",
    items: ["Git", "GitHub", "Agile", "Collaboration", "Code Review"],
    description: "Advanced version control workflows and collaborative development",
    details: [
      "Git branching strategies and workflows",
      "Code review processes and best practices",
      "Agile development methodologies",
      "Team collaboration and project management",
      "Merge conflict resolution",
      "Release management and tagging",
    ],
    relatedProjects: ["All Projects"],
  },
  {
    name: "Hardware & IoT",
    icon: Monitor,
    color: "from-emerald-500 to-teal-500",
    items: ["Arduino", "ESP32", "Embedded Systems", "Hardware Programming"],
    description: "Embedded systems programming and IoT device development",
    details: [
      "Arduino programming and circuit design",
      "ESP32 WiFi and Bluetooth integration",
      "Sensor interfacing and data collection",
      "Real-time embedded system development",
      "Hardware-software integration",
      "IoT protocol implementation (MQTT, HTTP)",
    ],
    relatedProjects: ["Trackattend Hardware System", "ESP32 Deauther"],
  },
  {
    name: "Web Technologies",
    icon: Globe,
    color: "from-pink-500 to-rose-500",
    items: ["PHP", "REST APIs", "GraphQL", "Web Security", "Performance"],
    description: "Modern web development with focus on security and performance",
    details: [
      "RESTful API design and implementation",
      "GraphQL schema design and optimization",
      "Web application security best practices",
      "Performance optimization techniques",
      "Caching strategies and CDN integration",
      "Progressive Web App (PWA) development",
    ],
    relatedProjects: ["Gold Days Clothing", "Forumania", "PISO WiFi Management System", "Freelancer Project Management"],
  },

]

export const CoreSpecializations = ["Java", "Spring Boot", "Quarkus", "Angular", "PostgreSQL", "JWT", "OAuth2", "RESTful APIs"]

export const CurrentlyLearning = [
  "Advanced Angular",
  "GraphQL",
  "Advanced Spring Boot",
  "Cloud Architecture",
  "Advanced Cybersecurity",
]
