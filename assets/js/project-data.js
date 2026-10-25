// This file contains data for all projects

// Function to get correct asset path based on current location
function getAssetPath(relativePath) {
    const currentPath = window.location.pathname;
    const isInSubfolder = currentPath.includes('/projects/');
    
    if (isInSubfolder) {
        return '../' + relativePath;
    } else {
        return './' + relativePath;        
    }
}

const projectsData = [
    {
        id: 9,
        title: "Software Testing Strategies",
        category: "stqa",
        tags: ["Testing", "Quality Assurance", "Test Strategy"],
        description: "Comprehensive documentation covering modern software testing strategies and architectural patterns.",
        thumbnail: "./assets/images/project-images/stqa1.jpg",
        longDescription: `
            <p>This project is a comprehensive guide detailing modern software testing strategies, including:</p>
            <ul>
                <li>Unit Testing Strategy</li>
                <li>Integration Testing Strategy</li>
                <li>System Testing Strategy</li>
                <li>Acceptance Testing Strategy</li>
                <li>Performance Testing Strategy</li>
                <li>Security Testing Strategy</li>
            </ul>
            <p>This document covers industry best practices, testing tools, and execution methodologies across each level.</p>
        `,
        challenges: "Organizing and articulating complex test architecture patterns into an intuitive, practical reference manual.",
        downloadLink: "./assets/docs/software-testing-strategies.pdf",
        images: [
            "./assets/images/project-images/stqa1.jpg",
            "./assets/images/project-images/stqa1.jpg",
            "./assets/images/project-images/stqa1.jpg"
        ]
    },
    {
        id: 10,
        title: "Introduction to UI/UX Testing",
        category: "stqa",
        tags: ["UI Testing", "UX Testing", "Usability"],
        description: "Comprehensive guide to User Interface and User Experience testing methodologies.",
        thumbnail: "./assets/images/project-images/stqa2.png",
        longDescription: `
            <p>This document provides a comprehensive overview of UI/UX evaluation, covering:</p>
            <ul>
                <li>Fundamental Principles of UI/UX Testing</li>
                <li>UI/UX Verification Methodologies</li>
                <li>Tools for UI/UX Testing</li>
                <li>Usability Testing Protocols</li>
                <li>Industry Best Practices in UI/UX Testing</li>
            </ul>
        `,
        challenges: "Structuring an objective evaluation framework to systematically test qualitative user experience factors.",
        downloadLink: "./assets/docs/ui-ux-testing-intro.pdf",
        images: [
            "./assets/images/project-images/stqa2.png",
            "./assets/images/project-images/stqa2.png",
            "./assets/images/project-images/stqa2.png"
        ]
    },
    {
        id: 11,
        title: "Test Plan Architecture & Template",
        category: "stqa",
        tags: ["Test Planning", "Quality Assurance", "Documentation"],
        description: "Complete template and operational walkthrough for crafting production-ready Test Plans.",
        thumbnail: "./assets/images/project-images/stqa3.jpg",
        longDescription: `
            <p>This project provides an enterprise-standard template and walkthrough for developing comprehensive Test Plans, including:</p>
            <ul>
                <li>Test Plan Structure</li>
                <li>Test Objectives</li>
                <li>Test Strategy</li>
                <li>Test Environment</li>
                <li>Test Schedule</li>
                <li>Resource Allocation</li>
            </ul>
        `,
        challenges: "Developing a versatile yet rigorous test planning template adaptable across varied software domains.",
        downloadLink: "./assets/docs/test-plan-template.pdf",
        images: [
            "./assets/images/project-images/stqa3.jpg",
            "./assets/images/project-images/stqa3.jpg",
            "./assets/images/project-images/stqa3.jpg"
        ]
    },
    {
        id: 12,
        title: "Test Scenarios, Cases, and Bug Reports",
        category: "stqa",
        tags: ["Test Cases", "Bug Reports", "QA Documentation"],
        description: "Standardized templates and real-world examples for Test Scenarios, Test Cases, and Bug Reports.",
        thumbnail: "./assets/images/project-images/stqa4.jpg",
        longDescription: `
            <p>This documentation provides an end-to-end guide on:</p>
            <ul>
                <li>Authoring Effective Test Scenarios</li>
                <li>Standardized Test Case Templates</li>
                <li>Defect & Bug Report Formats</li>
                <li>QA Documentation Best Practices</li>
                <li>Real-World Practical Examples</li>
            </ul>
        `,
        challenges: "Formulating standardized test logging schemas that maximize clarity across cross-functional engineering teams.",
        downloadLink: "./assets/docs/test-documentation-templates.pdf",
        images: [
            "./assets/images/project-images/stqa4.jpg",
            "./assets/images/project-images/stqa4.jpg",
            "./assets/images/project-images/stqa4.jpg"
        ]
    },
    {
        id: 13,
        title: "Introduction to Unit Testing",
        category: "stqa",
        tags: ["Unit Testing", "JUnit", "Test Automation"],
        description: "In-depth guide to Unit Testing with a focus on JUnit best practices and implementation.",
        thumbnail: "./assets/images/project-images/stqa5.jpg",
        longDescription: `
            <p>This project provides comprehensive instructional material on unit testing:</p>
            <ul>
                <li>Unit Testing Fundamentals</li>
                <li>JUnit Setup and Configuration</li>
                <li>Writing Effective Unit Tests</li>
                <li>Test Driven Development (TDD)</li>
                <li>Code Coverage and Quality Metrics</li>
            </ul>
        `,
        challenges: "Demonstrating practical unit testing isolation techniques with clean, maintainable mock patterns.",
        downloadLink: "./assets/docs/unit-testing-guide.pdf",
        images: [
            "./assets/images/project-images/stqa5.jpg",
            "./assets/images/project-images/stqa5.jpg",
            "./assets/images/project-images/stqa5.jpg"
        ]
    },
    {
        id: 14,
        title: "Introduction to API Testing",
        category: "stqa",
        tags: ["API Testing", "Postman", "REST API"],
        description: "Comprehensive guide to REST API testing utilizing industry tools and validation methodologies.",
        thumbnail: "./assets/images/project-images/stqa6.jpg",
        longDescription: `
            <p>This document provides an exhaustive introduction to API testing:</p>
            <ul>
                <li>API Testing Fundamentals</li>
                <li>RESTful API Validation with Postman</li>
                <li>Automated Test Scripts for API Assertions</li>
                <li>API Security Testing Basics</li>
                <li>API Performance & Load Evaluation</li>
            </ul>
        `,
        challenges: "Explaining nuanced protocol validation and status assertions in a concise, accessible format.",
        downloadLink: "./assets/docs/api-testing-intro.pdf",
        images: [
            "./assets/images/project-images/stqa6.jpg",
            "./assets/images/project-images/stqa6.jpg",
            "./assets/images/project-images/stqa6.jpg"
        ]
    },
    {
        id: 15,
        title: "Introduction to Selenium WebDriver",
        category: "stqa",
        tags: ["Selenium", "Web Automation", "Testing"],
        description: "Comprehensive handbook for web browser test automation using Selenium WebDriver.",
        thumbnail: "./assets/images/project-images/stqa7.jpg",
        longDescription: `
            <p>This module covers complete browser automation with Selenium WebDriver:</p>
            <ul>
                <li>Selenium Setup and Environment Configuration</li>
                <li>Core & Advanced WebDriver Commands</li>
                <li>Page Object Model (POM) Architecture</li>
                <li>Test Automation Framework Design</li>
                <li>Best Practices & Flaky Test Prevention</li>
            </ul>
        `,
        challenges: "Addressing dynamic asynchronous web elements with robust explicit wait architectures.",
        downloadLink: "./assets/docs/selenium-webdriver-guide.pdf",
        images: [
            "./assets/images/project-images/stqa7.jpg",
            "./assets/images/project-images/stqa7.jpg",
            "./assets/images/project-images/stqa7.jpg"
        ]
    },
    {
        id: 16,
        title: "Introduction to Cypress",
        category: "stqa",
        tags: ["Cypress", "Web Automation", "Modern Testing"],
        description: "Complete introduction to modern end-to-end web testing using Cypress.",
        thumbnail: "./assets/images/project-images/stqa8.png",
        longDescription: `
            <p>This document provides an end-to-end guide to Cypress test automation:</p>
            <ul>
                <li>Cypress Installation & Project Setup</li>
                <li>Writing Your First Spec Test</li>
                <li>Cypress Commands and Assertions</li>
                <li>Test Suite Organization</li>
                <li>CI/CD Pipeline Integration</li>
            </ul>
        `,
        challenges: "Showcasing modern developer-friendly Cypress features and real-time execution benefits for frontend QA.",
        downloadLink: "./assets/docs/cypress-testing-guide.pdf",
        images: [
            "./assets/images/project-images/stqa8.png",
            "./assets/images/project-images/stqa8.png",
            "./assets/images/project-images/stqa8.png"
        ]
    },
    {
        id: 1,
        title: "EnergyPulse - AI Electricity Demand Forecasting",
        category: "datamining",
        tags: ["Python", "Time Series", "Machine Learning", "Forecasting"],
        description: "Advanced predictive analytics system forecasting electricity consumption using hybrid statistical and deep learning models.",
        thumbnail: "./assets/images/electricity1.jpg",
        longDescription: `
            <p>EnergyPulse is an advanced predictive forecasting system developed as part of Data Mining coursework. It combines traditional statistical modeling with deep learning architectures to predict electrical power demand with high accuracy, assisting utilities in optimizing grid resource allocation and preventing waste.</p>
            
            <p>Key development phases include:</p>
            <ul>
                <li>Data ingestion and normalization</li>
                <li>Advanced time series preprocessing including outlier detection and missing-value imputation</li>
                <li>Feature engineering incorporating calendar seasonality, lag features, and external regressors</li>
                <li>Implementation of hybrid forecasting ensembles combining SARIMA, ARIMA, and LSTM neural networks</li>
                <li>Interactive visual dashboards for stakeholder insights and scenario modeling</li>
            </ul>
        `,
        challenges: "Developing models that seamlessly adapt to seasonal cycles as well as irregular anomalies like public holidays and weather shocks. Addressed via a custom ensemble architecture intelligently weighting statistical and deep learning predictions based on historical volatility.",
        images: [
            "./assets/images/project-images/electricity1.jpg", 
            "./assets/images/project-images/electricity2.jpg", 
            "./assets/images/project-images/electricity3.jpg"
        ],
        githubLink: "https://github.com/ReyRiz/forecasting-electricity-consumption"
    },
    {
        id: 2,
        title: "TokoLingu - Language Learning E-Commerce Platform",
        category: "webdev",
        tags: ["PHP", "Laravel", "Blade", "JavaScript", "E-commerce"],
        description: "Comprehensive e-commerce marketplace dedicated to foreign language courseware, literature, and educational resources.",
        thumbnail: "./assets/images/project2.jpg",
        longDescription: `
            <p>TokoLingu is a full-featured e-commerce platform dedicated to foreign language educational resources. Developed as a capstone project for Web Development, with a focus on delivering a frictionless shopping journey for language learners.</p>
            
            <p>Core platform capabilities include:</p>
            <ul>
                <li>User registration and authentication with role-based access control (RBAC)</li>
                <li>Extensive product catalog organized by target language and proficiency level</li>
                <li>Advanced search with faceted filters for language, format, and price</li>
                <li>Shopping cart and persistent wishlist features</li>
                <li>Secure checkout workflow with multiple payment simulation gateways</li>
                <li>Order processing and tracking dashboard</li>
                <li>Merchant portal for vendors to manage catalog listings</li>
                <li>Administrator panel for site operations and sales analytics</li>
                <li>Responsive layout optimized across all screen resolutions</li>
            </ul>
            
            <p>Built with Laravel's MVC architecture, dynamic Blade templating, custom JavaScript interactivity, and MySQL relational storage. Adheres to security best practices including CSRF protection, input sanitization, and secure hashing.</p>
        `,
        challenges: "Implementing a recommendation system that accurately predicts relevant courseware based on user interaction patterns. Solved by developing a collaborative filtering algorithm that analyzes order histories to generate personalized suggestions.",
        images: [
            "./assets/images/project-images/project2-1.jpg", 
            "./assets/images/project-images/project2-2.jpg", 
            "./assets/images/project-images/project2-3.jpg"
        ],
        githubLink: "https://github.com/ReyRiz/tokolingu-ecommerce-project"
    },
    {
        id: 3,
        title: "WhatsApp Clone - Real-time Android Messenger",
        category: "mobiledev",
        tags: ["Java", "Android", "Firebase", "Real-time Messaging"],
        description: "Native Android instant messaging application featuring real-time chat synchronization and rich media sharing.",
        thumbnail: "./assets/images/whatsapp1.jpg",
        longDescription: `
            <p>A native mobile messaging application replicating the core architecture and user experience of WhatsApp, following modern Android software design patterns.</p>
            
            <p>Key capabilities include:</p>
            <ul>
                <li>Phone-number-based user verification and onboarding</li>
                <li>Real-time 1-on-1 chats with read receipts and typing indicators</li>
                <li>Group messaging with administrative privileges</li>
                <li>Rich media sharing (images, audio, and documents) with local compression</li>
                <li>Audio and video call simulation interface</li>
                <li>Push notifications for incoming messages</li>
                <li>Device contact synchronization</li>
                <li>Client-side message encryption protocols</li>
                <li>Status stories with privacy controls</li>
            </ul>
            
            <p>Engineered using native Android with Java following Google Material Design guidelines and utilizing Firebase Realtime Database for instantaneous message transmission. Prioritizes low memory footprints and optimal battery efficiency.</p>
        `,
        challenges: "Managing Firebase database event listeners efficiently to eliminate memory leaks and background battery drain when users navigate rapidly across chat rooms.",
        images: [
            "./assets/images/project-images/whatsapp1.jpg", 
            "./assets/images/project-images/whatsapp2.jpg", 
            "./assets/images/project-images/whatsapp3.jpg"
        ],
        githubLink: "https://github.com/ReyRiz/tugas-final-mobile"
    },
    {
        id: 5,
        title: "ShopEase - Modern MERN Stack E-Commerce",
        category: "webdev",
        tags: ["React", "Node.js", "MongoDB", "E-commerce"],
        description: "Modern full-stack MERN e-commerce web platform offering real-time inventory updates and responsive design.",
        thumbnail: "./assets/images/shopease1.png",
        longDescription: `
            <p>ShopEase is an e-commerce platform engineered with the MERN stack (MongoDB, Express, React, Node.js), emphasizing modern JavaScript architectures and frictionless checkout experiences.</p>
            
            <p>Key features include:</p>
            <ul>
                <li>Single Page Application (SPA) architecture for swift client navigation</li>
                <li>JWT-based authentication and role-based route security</li>
                <li>Real-time stock level synchronization via WebSockets</li>
                <li>Centralized client state management using Redux Toolkit</li>
                <li>Express.js RESTful API endpoints</li>
                <li>Responsive user interface styled with Material UI components</li>
                <li>Client-side validation and comprehensive error handling</li>
                <li>Admin dashboard with sales metrics and analytics visualization</li>
                <li>CI/CD automation pipeline for testing and deployment</li>
            </ul>
            
            <p>Developed using modern JavaScript standards (ES6+), React Hooks for local state control, and robust async/await patterns. Implements strict production-ready security guidelines.</p>
        `,
        challenges: "Preventing inventory overselling when concurrent buyers attempt to checkout the last available unit simultaneously. Resolved with Socket.io real-time broadcast and optimistic UI rollback combined with transactional database locks.",
        images: [
            "./assets/images/project-images/shopease2.png", 
            "./assets/images/project-images/shopease3.png", 
            "./assets/images/project-images/shopease4.png"
        ],
        githubLink: "https://github.com/ReyRiz/shopease-project"
    },
    {
        id: 6,
        title: "AksiNyata - Social Campaign & Community Impact Platform",
        category: "webdev",
        tags: ["React", "Vue", "REST API", "Flask", "Social Impact"],
        description: "Modern web platform for launching, managing, and promoting social impact campaigns and community initiatives.",
        thumbnail: "./assets/images/project6.jpg",
        longDescription: `
            <p>AksiNyata is a digital crowdfunding and social impact hub designed to facilitate community campaigns. Combines modern web architectures with intuitive interfaces to drive meaningful community engagement.</p>
            
            <p>Key features include:</p>
            <ul>
                <li>Interactive campaign creation wizard with customizable milestones</li>
                <li>Multi-channel social promotion tools</li>
                <li>Transparent donation ledgers with secure payment processing</li>
                <li>Real-time milestone progress bars</li>
                <li>Volunteer onboarding and task coordination</li>
                <li>Community event management</li>
                <li>Engagement analytics dashboard</li>
                <li>Community discussion boards and direct messaging</li>
            </ul>
            
            <p>Built with a contemporary stack incorporating React, Vue components for dedicated widgets, and a modular Python Flask microservice backend. Completely responsive across all devices.</p>
        `,
        challenges: "Achieving cohesive state coordination between a reactive frontend and microservice Flask API endpoints. Resolved through clean API contract specifications and structured caching.",
        images: [
            "./assets/images/project-images/project6-1.jpg", 
            "./assets/images/project-images/project6-2.jpg", 
            "./assets/images/project-images/project6-3.jpg"
        ],
        githubLink: "https://github.com/ReyRiz/AksiNyata"
    },
    {
        id: 4,
        title: "RedRide - Transportation & Fleet Management System",
        category: "webdev",
        tags: ["PHP", "Laravel", "MySQL", "JavaScript", "Transportation"],
        description: "Comprehensive fleet management and ride booking system with dynamic route tariffs.",
        thumbnail: "./assets/images/redride1.png",
        longDescription: `
            <p>RedRide is a full-featured transportation platform delivering an integrated dispatch and booking solution for vehicles and logistics.</p>
            
            <p>Core features include:</p>
            <ul>
                <li>Passenger registration and profile management</li>
                <li>Ride booking and reservation system</li>
                <li>Dynamic fare calculation factoring distance, duration, and vehicle tier</li>
                <li>Driver verification and vehicle compliance checks</li>
                <li>Transaction history and digital receipt generation</li>
                <li>Passenger rating and feedback review system</li>
                <li>Admin command center for dispatch oversight</li>
                <li>Fleet trip auditing logs</li>
            </ul>
            
            <p>Constructed on Laravel MVC backend architectures with optimized queries, real-time status updates, and secure route validation.</p>
        `,
        challenges: "Ensuring zero latency in vehicle status synchronization between driver terminals and dispatch consoles while scaling database queries under concurrent operations.",
        images: [
            "./assets/images/project-images/redride1.png", 
            "./assets/images/project-images/redride2.png", 
            "./assets/images/project-images/redride3.png"
        ],
        githubLink: "https://github.com/khalikaa/RedRide"
    },
    {
        id: 7,
        title: "Data Mining Pipeline - Automated Web Scraping",
        category: "datamining",
        tags: ["Python", "Web Scraping", "BeautifulSoup4", "Selenium"],
        description: "Automated Python web scraping suite harvesting multi-source data across static HTML and dynamic AJAX pages.",
        thumbnail: "./assets/images/scraping1.png",
        longDescription: `
            <p>A modular data extraction repository developed for Data Mining coursework. Designed to extract, clean, and normalize web data from static tables up to dynamic JavaScript-rendered interfaces.</p>
            
            <p>Harvested Datasets:</p>
            <ul>
                <li>Country Metrics - Global demographics, land area, and capitals</li>
                <li>Sports Statistics - Team performance records and win/loss rates</li>
                <li>AJAX/JavaScript Content - Dynamically injected client-side DOM records</li>
                <li>Media Databases - Film releases, genres, and audience ratings</li>
            </ul>
            
            <p>Tools & Libraries:</p>
            <ul>
                <li>requests - Lightweight HTTP queries</li>
                <li>BeautifulSoup4 - High-speed HTML DOM parsing</li>
                <li>Selenium - Headless browser automation for AJAX content</li>
                <li>pandas - Data cleaning, normalization, and export to CSV</li>
                <li>csv - Structured file formatting</li>
            </ul>
            
            <p>Produces sanitized, analysis-ready datasets separated cleanly into extraction pipelines, intermediate stages, and structured outputs.</p>
        `,
        challenges: "Handling rate-limiting throttling and dynamically injected DOM structures without impeding overall crawling throughput.",
        images: [
            "./assets/images/project-images/scraping1.png", 
            "./assets/images/project-images/scraping2.png", 
            "./assets/images/project-images/scraping3.png"
        ],
        githubLink: "https://github.com/ReyRiz/data-mining-project"
    },
    {
        id: 8,
        title: "MoodMate - Android Mood Tracker & Mental Health",
        category: "mobile",
        tags: ["Java", "Android", "Firebase Auth", "Firestore", "Material Design"],
        description: "Android application helping users track mental wellness through daily mood check-ins and relaxation exercises.",
        thumbnail: "./assets/images/moodmate1.jpg",
        longDescription: `
            <p>MoodMate is an Android application designed to assist users in monitoring emotional well-being and daily mental health. Offers an intuitive platform for self-reflection and mood stabilization.</p>
            
            <p>Core Features:</p>
            <ul>
                <li><strong>Mood Tracking</strong> - Log daily moods with intensity scales and expressive emojis</li>
                <li><strong>Private Journal</strong> - Write secure daily reflections</li>
                <li><strong>Mini-Games</strong> - Calming interactive games designed for stress relief</li>
                <li><strong>Mood Analytics</strong> - Visual trend charts and weekly/monthly insights</li>
                <li><strong>Reminder Notifications</strong> - Scheduled daily check-in prompts</li>
                <li><strong>Custom Themes</strong> - Personalized color palettes matching user preferences</li>
            </ul>
            
            <p>Built with Java on Android SDK, Firebase Authentication, Cloud Firestore, Material Design, MPAndroidChart, and Glide. Prioritizes data confidentiality with encrypted cloud persistence.</p>
        `,
        challenges: "Rendering smooth analytical chart animations when parsing extensive historical check-in records containing hundreds of entries.",
        images: [
            "./assets/images/project-images/moodmate1.jpg", 
            "./assets/images/project-images/moodmate2.jpg", 
            "./assets/images/project-images/moodmate3.jpg"
        ],
        githubLink: "https://github.com/khalikaa/MoodMate-Android"
    }
];

// Function to update all image paths based on current location
function updateProjectImagePaths() {
    const currentPath = window.location.pathname;
    const isInSubfolder = currentPath.includes('/projects/');
    
    console.log('Current path:', currentPath);
    console.log('Is in subfolder:', isInSubfolder);
    
    projectsData.forEach(project => {
        // Update thumbnail path
        if (project.thumbnail) {
            if (isInSubfolder) {
                // In subfolder, use ../ path
                if (project.thumbnail.startsWith('./assets/')) {
                    project.thumbnail = project.thumbnail.replace('./assets/', '../assets/');
                }
            } else {
                // In root, use ./ path
                if (project.thumbnail.startsWith('../assets/')) {
                    project.thumbnail = project.thumbnail.replace('../assets/', './assets/');
                }
            }
        }
        
        // Update images array paths
        if (project.images) {
            project.images = project.images.map(imagePath => {
                if (isInSubfolder) {
                    // In subfolder, use ../ path
                    if (imagePath.startsWith('./assets/')) {
                        return imagePath.replace('./assets/', '../assets/');
                    }
                } else {
                    // In root, use ./ path
                    if (imagePath.startsWith('../assets/')) {
                        return imagePath.replace('../assets/', './assets/');
                    }
                }
                return imagePath;
            });
        }
        
        // Update downloadLink path
        if (project.downloadLink) {
            if (isInSubfolder) {
                // In subfolder, use ../ path
                if (project.downloadLink.startsWith('./assets/')) {
                    project.downloadLink = project.downloadLink.replace('./assets/', '../assets/');
                }
            } else {
                // In root, use ./ path
                if (project.downloadLink.startsWith('../assets/')) {
                    project.downloadLink = project.downloadLink.replace('../assets/', './assets/');
                }
            }
        }
    });
    
    console.log('Updated projectsData:', projectsData);
}

// Don't update paths immediately - let the calling page handle it
// updateProjectImagePaths();

// Get all unique categories for filtering
const categories = [...new Set(projectsData.map(project => project.category))];

// Map category IDs to display names
const categoryNames = {
    'webdev': 'Web Development',
    'mobiledev': 'Mobile Development',
    'datamining': 'Data Mining',
    'stqa': 'Software Testing & QA'
};

// Export data for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { projectsData, categories, updateProjectImagePaths };
}
