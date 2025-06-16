import {
    Fingerprint,
    GraduationCap,
    MessageSquare,
    Search,
    Server,
    Shield,
    ShoppingCart,
    Sparkles,
    Wifi
} from "lucide-react"

type RepoStatus = "public" | "private" | "none"
type LiveStatus = "live" | "offline" | "development" | "archived"

export const AllProjects = [
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
        repoStatus: "private" as RepoStatus,
        liveStatus: "offline" as LiveStatus,
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
        repoStatus: "private" as RepoStatus,
        liveStatus: "offline" as LiveStatus,
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
        repoStatus: "private" as RepoStatus,
        liveStatus: "offline" as LiveStatus,
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
        repoStatus: "development" as RepoStatus,
        liveStatus: "offline" as LiveStatus,
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
        repoStatus: "public" as RepoStatus,
        liveStatus: "offline" as LiveStatus,
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
        repoStatus: "public" as RepoStatus,
        liveStatus: "development" as LiveStatus,
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
        repoStatus: "none" as RepoStatus,
        liveStatus: "offline" as LiveStatus,
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
        repoStatus: "private" as RepoStatus,
        liveStatus: "offline" as LiveStatus,
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
        repoStatus: "public" as RepoStatus,
        liveStatus: "live" as LiveStatus,
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
        repoStatus: "none" as RepoStatus,
        liveStatus: "archived" as LiveStatus,
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
        repoStatus: "public" as RepoStatus,
        liveStatus: "archived" as LiveStatus,
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
        repoStatus: "public" as RepoStatus,
        liveStatus: "offline" as LiveStatus,
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
        repoStatus: "public" as RepoStatus,
        liveStatus: "offline" as LiveStatus,
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
]