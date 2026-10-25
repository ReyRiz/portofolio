/**
 * ==============================================================================
 * PORTFOLIO DATA - CENTRALIZED SINGLE SOURCE OF TRUTH
 * ==============================================================================
 * Fariz Idham Ramdhani (ReyRiz)
 * 
 * Centralized data source for projects, work experience, certifications, and skills.
 * All pages automatically render from this file.
 * ==============================================================================
 */

// Helper to ensure asset paths resolve correctly across root and subpages
function resolveAssetPath(relativePath) {
    if (!relativePath) return '';
    if (relativePath.startsWith('http://') || relativePath.startsWith('https://')) {
        return relativePath;
    }
    const cleanPath = relativePath.replace(/^(\.\/|\.\.\/)+/, '');
    const currentPath = window.location.pathname.replace(/\\/g, '/');
    const isInSubfolder = currentPath.includes('/projects/') || currentPath.includes('/pages/');
    return isInSubfolder ? '../' + cleanPath : './' + cleanPath;
}

// ------------------------------------------------------------------------------
// 1. PERSONAL INFORMATION & PROFILE
// ------------------------------------------------------------------------------
const personalInfo = {
    name: "Fariz Idham Ramdhani",
    nickname: "Fariz",
    alias: "ReyRiz",
    tagline: "Full-Stack Developer, AI Enthusiast & Video Editor",
    statusText: "Open for Opportunities & Collaborations",
    statusText_id: "Terbuka untuk Peluang Kerja & Kolaborasi Menarik",
    statusAvailable: true,
    bioShort: "Information Systems student at Hasanuddin University combining Full-Stack Web Development, Data Science / AI, and Creative Video Production to build modern, impactful digital solutions.",
    bioShort_id: "Mahasiswa Sistem Informasi Universitas Hasanuddin yang memadukan Full-Stack Web Development, Data Science/AI, dan Video Editing kreatif untuk menghasilkan karya digital yang solutif dan berdampak.",
    bioLong: `Hello! I'm Fariz Idham Ramdhani (known as ReyRiz), an Information Systems undergraduate at Universitas Hasanuddin.
    I love engineering modern web applications, exploring machine learning models, and building clean, automated testing suites.
    Outside of coding, I'm an active short-form video editor crafting high-retention content and managing enterprise IT systems.`,
    bioLong_id: `Halo! Saya Fariz Idham Ramdhani (biasa dipanggil ReyRiz), mahasiswa Sistem Informasi di Universitas Hasanuddin.
    Saya gemar membangun aplikasi web modern yang cepat dan terukur, mengeksplorasi model machine learning, serta merancang pengujian software otomatis yang rapi.
    Di luar coding, saya juga aktif memproduksi video pendek dengan retensi tinggi dan menangani kebutuhan IT perusahaan.`,
    location: "Makassar, South Sulawesi, Indonesia",
    email: "farizidhamr@gmail.com",
    github: "https://github.com/ReyRiz",
    linkedin: "https://www.linkedin.com/in/farizidham/",
    instagram: "https://instagram.com/farizidham",
    avatar: "assets/images/fariz-original.jpg",
    stats: [
        { label: "Completed Projects", value: "12+" },
        { label: "Skills & Tech Stack", value: "18+" },
        { label: "Years of Coding", value: "3+ Years" },
        { label: "Degree & Uni", value: "B.S. UNHAS" }
    ]
};

// ------------------------------------------------------------------------------
// 2. WORK EXPERIENCE & CAREER HISTORY
// Chronological order (most recent first)
// ------------------------------------------------------------------------------
const experiencesData = [
    {
        id: "exp-brrads",
        company: "BRRADS Industries",
        companyLogo: "fas fa-cat",
        location: "Makassar, Indonesia",
        totalDuration: "10 mos",
        totalDuration_id: "10 bln",
        gallery: [
            {
                url: "assets/images/experience/brrads-1.jpg",
                caption: "WMS Web Dashboard & Inventory Tracking System",
                caption_id: "Dashboard Aplikasi WMS & Sistem Pelacakan Stok"
            },
            {
                url: "assets/images/experience/brrads-2.jpg",
                caption: "Software Architecture & Flow Review Presentation",
                caption_id: "Presentasi Arsitektur Software & Alur Sistem"
            },
            {
                url: "assets/images/experience/brrads-3.jpg",
                caption: "Internal IT Infrastructure Maintenance & Hardware Lab",
                caption_id: "Pemeliharaan Infrastruktur IT & Lab Hardware Internal"
            }
        ],
        roles: [
            {
                roleTitle: "Editor & IT Staff",
                roleTitle_id: "Editor & IT Staff",
                employmentType: "Contract",
                employmentType_id: "Kontrak",
                workModel: "Hybrid",
                workModel_id: "Hybrid",
                period: "Jun 2026 - Present",
                period_id: "Jun 2026 - Saat ini",
                duration: "5 mos",
                duration_id: "5 bln",
                description: "Managing day-to-day IT operations and producing dynamic video assets—handling technical infrastructure, workstation maintenance, and creative promotional media.",
                description_id: "Menangani kebutuhan IT operasional dan produksi video perusahaan—mulai dari pemeliharaan infrastruktur, troubleshooting workstation, hingga pembuatan konten kreatif untuk promosi.",
                keyAchievements: [
                    "Maintained reliable IT operations and internal network connectivity across the team",
                    "Produced high-quality commercial video campaigns that increased brand visibility",
                    "Delivered fast, helpful technical support and hardware troubleshooting for colleagues"
                ],
                keyAchievements_id: [
                    "Menjaga kelancaran operasional IT dan konektivitas jaringan internal tim",
                    "Memproduksi video promosi komersial yang meningkatkan daya tarik brand",
                    "Memberikan solusi troubleshooting perangkat keras dan bantuan teknis yang sigap"
                ],
                skills: ["IT Support", "Web Development", "Content Editing", "System Troubleshooting", "Team Collaboration"]
            },
            {
                roleTitle: "Web Developer & Editor",
                roleTitle_id: "Web Developer & Editor",
                employmentType: "Internship",
                employmentType_id: "Magang",
                workModel: "On-site",
                workModel_id: "On-site",
                period: "Jan 2026 - Jun 2026",
                period_id: "Jan 2026 - Jun 2026",
                duration: "6 mos",
                duration_id: "6 bln",
                description: "Architected a custom web-based Warehouse Management System (WMS) from the ground up to streamline stock management, inventory audits, and real-time tracking.",
                description_id: "Merancang dan membangun Warehouse Management System (WMS) berbasis web dari nol untuk mempermudah audit stok, pencatatan keluar-masuk barang, dan pelacakan inventaris secara real-time.",
                keyAchievements: [
                    "Engineered a clean, responsive WMS web application using PHP/Laravel and MySQL",
                    "Significantly reduced manual stock-taking discrepancies through automated tracking",
                    "Maintained an agile video editing workflow for consistent weekly content releases"
                ],
                keyAchievements_id: [
                    "Membangun aplikasi WMS yang responsif dan mudah digunakan dengan PHP/Laravel dan MySQL",
                    "Meminimalisir selisih pencatatan inventaris gudang lewat sistem pencatatan otomatis",
                    "Menjaga ritme produksi video promosi mingguan secara konsisten dan tepat waktu"
                ],
                skills: ["Web Development", "PHP / Laravel", "Database Design", "Inventory System", "Problem Solving", "Video Editing"]
            }
        ]
    },
    {
        id: "exp-reza-auditore",
        company: "Reza Auditore (Content Creator / Streamer)",
        companyLogo: "fas fa-video",
        location: "Indonesia",
        totalDuration: "1 yr 4 mos",
        totalDuration_id: "1 thn 4 bln",
        gallery: [
            {
                url: "assets/images/experience/reza-1.jpg",
                caption: "Adobe Premiere Pro Creative Video Editing Suite",
                caption_id: "Editing Studio Adobe Premiere Pro & Color Grading"
            },
            {
                url: "assets/images/experience/reza-2.jpg",
                caption: "Sound Design & Kinetic Audio Waveform Studio",
                caption_id: "Studio Sound Design & Sinkronisasi Ritme Beat"
            },
            {
                url: "assets/images/experience/reza-3.jpg",
                caption: "Viral Short-Form Analytics & Retention Tracking",
                caption_id: "Analitik Video Viral & Optimasi Retensi Penonton"
            }
        ],
        roles: [
            {
                roleTitle: "Lead Video Editor",
                roleTitle_id: "Lead Video Editor",
                employmentType: "Full-time",
                employmentType_id: "Purnawaktu",
                workModel: "Hybrid / Remote",
                workModel_id: "Hybrid / Remote",
                period: "Jul 2025 - Present",
                period_id: "Jul 2025 - Saat ini",
                duration: "1 yr 4 mos",
                duration_id: "1 thn 4 bln",
                description: "Turning long gaming livestreams and unedited footage into high-energy, retention-optimized short-form videos tailored for YouTube Shorts, TikTok, and Instagram Reels.",
                description_id: "Mengolah rekaman livestream panjang menjadi video pendek vertikal yang dinamis dan berenergi tinggi, dioptimalkan khusus untuk algoritma YouTube Shorts, TikTok, dan Instagram Reels.",
                keyAchievements: [
                    "Produced 100+ viral short clips driving substantial viewership growth and community engagement",
                    "Mastered first 3-second hook retention pacing, multi-layer sound design, and color grading",
                    "Consistently hit fast-paced daily turnaround deadlines while maintaining high visual polish"
                ],
                keyAchievements_id: [
                    "Memproduksi lebih dari 100 video viral dengan retensi penonton dan interaksi yang tinggi",
                    "Mengoptimalkan hook 3 detik pertama, tata suara multi-layer, serta color grading sinematik",
                    "Konsisten menjaga deadline harian dengan standar visual yang tetap terjaga rapi"
                ],
                skills: ["Adobe Premiere Pro", "Video Editing", "Short-Form Content", "Storytelling", "Social Media Optimization", "Pacing & Sound Design"]
            }
        ]
    },
    {
        id: "exp-unhas-lab",
        company: "Universitas Hasanuddin",
        companyLogo: "fas fa-university",
        location: "Tamalanrea Campus, Makassar",
        totalDuration: "5 mos",
        totalDuration_id: "5 bln",
        gallery: [
            {
                url: "assets/images/experience/unhas-lab-1.jpg",
                caption: "UNHAS Computer Science & Programming Laboratory",
                caption_id: "Laboratorium Komputer & Pemrograman UNHAS"
            },
            {
                url: "assets/images/experience/unhas-lab-2.jpg",
                caption: "Active Student Mentoring & Practical OOP Guidance",
                caption_id: "Sesi Mentoring Mahasiswa & Praktik OOP Java"
            },
            {
                url: "assets/images/experience/unhas-lab-3.jpg",
                caption: "Live Debugging Workshop & Code Evaluation Desk",
                caption_id: "Workshop Live Debugging & Evaluasi Kode Praktikum"
            }
        ],
        roles: [
            {
                roleTitle: "Computer Lab Assistant (OOP Java)",
                roleTitle_id: "Asisten Laboratorium Komputer (OOP Java)",
                employmentType: "Full-time",
                employmentType_id: "Purnawaktu",
                workModel: "On-site",
                workModel_id: "On-site",
                period: "Feb 2025 - Jun 2025",
                period_id: "Feb 2025 - Jun 2025",
                duration: "5 mos",
                duration_id: "5 bln",
                description: "Mentoring undergraduate students through practical Object-Oriented Programming (Java OOP) lab sessions, bridging abstract concepts with hands-on coding and problem-solving.",
                description_id: "Membimbing mahasiswa dalam praktikum Pemrograman Berorientasi Objek (OOP Java), membantu mereka memahami konsep teoritis lewat praktik coding langsung dan pemecahan masalah algoritma.",
                keyAchievements: [
                    "Guided 40+ students in mastering OOP pillars: Classes, Inheritance, Polymorphism, and Encapsulation",
                    "Led interactive live debugging workshops to help students troubleshoot compilation and runtime bugs",
                    "Created practical lab worksheets and hands-on coding exercises with clear test cases"
                ],
                keyAchievements_id: [
                    "Mendampingi 40+ mahasiswa menguasai pilar OOP: Class, Inheritance, Polymorphism, dan Encapsulation",
                    "Memandu sesi live debugging untuk membantu mahasiswa menemukan dan memperbaiki error pada kode mereka",
                    "Menyusun lembar kerja praktikum dan latihan coding interaktif yang mudah dipahami"
                ],
                skills: ["Java", "Object-Oriented Programming (OOP)", "Code Debugging", "Mentoring", "Problem Solving"]
            }
        ]
    },
    {
        id: "exp-golqi",
        company: "PT GOLQI SUKSES MULIA",
        companyLogo: "fas fa-utensils",
        location: "Makassar, Indonesia",
        totalDuration: "3 mos",
        totalDuration_id: "3 bln",
        gallery: [
            {
                url: "assets/images/experience/golqi-1.jpg",
                caption: "Modern Service Counter & POS Order Terminal",
                caption_id: "Area Kasir & Terminal Pemesanan Digital POS"
            },
            {
                url: "assets/images/experience/golqi-2.jpg",
                caption: "Food Preparation Line & Hygiene Operations",
                caption_id: "Alur Kerja Dapur Bersih & Standar Higienitas"
            },
            {
                url: "assets/images/experience/golqi-3.jpg",
                caption: "Artisan Hospitality & Beverage Service Station",
                caption_id: "Bar Kopi & Pelayanan Pelanggan Ramah"
            }
        ],
        roles: [
            {
                roleTitle: "Food Service Worker",
                roleTitle_id: "Food Service Worker",
                employmentType: "Part-time",
                employmentType_id: "Paruh Waktu",
                workModel: "On-site",
                workModel_id: "On-site",
                period: "Mar 2024 - May 2024",
                period_id: "Mar 2024 - Mei 2024",
                duration: "3 mos",
                duration_id: "3 bln",
                description: "Handled daily front-of-house and kitchen operations in a bustling restaurant setting, prioritizing food hygiene, order accuracy, and friendly guest hospitality.",
                description_id: "Menangani operasional harian restoran dengan ritme kerja cepat, mengutamakan higienitas makanan, ketepatan pesanan, dan pelayanan yang ramah kepada setiap pengunjung.",
                keyAchievements: [
                    "Maintained composure, speed, and seamless team collaboration during high-volume peak hours",
                    "Honed strong interpersonal communication, adaptability, and time-management skills"
                ],
                keyAchievements_id: [
                    "Menjaga ritme kerja dan koordinasi tim yang kompak saat jam-jam sibuk (*peak hours*)",
                    "Mengasah kemampuan komunikasi, ketelitian, serta manajemen waktu dalam lingkungan kerja nyata"
                ],
                skills: ["Teamwork", "Customer Service", "Operational Discipline", "Time Management"]
            }
        ]
    },
    {
        id: "exp-unhas-itsupport",
        company: "Universitas Hasanuddin",
        companyLogo: "fas fa-network-wired",
        location: "Faculty of Engineering, Gowa, South Sulawesi",
        totalDuration: "5 mos",
        totalDuration_id: "5 bln",
        gallery: [
            {
                url: "assets/images/experience/unhas-it-1.jpg",
                caption: "Conference Auditorium AV & Live Broadcast Control",
                caption_id: "Ruang Kontrol Audio-Visual & Live Streaming Acara"
            },
            {
                url: "assets/images/experience/unhas-it-2.jpg",
                caption: "Campus Data Center Server Rack & Patch Cabling",
                caption_id: "Rak Server Jaringan Kampus & Kabel Fiber Optik"
            },
            {
                url: "assets/images/experience/unhas-it-3.jpg",
                caption: "Hardware & Infrastructure Field Troubleshooting",
                caption_id: "Troubleshooting Perangkat Keras & Infrastruktur Kampus"
            }
        ],
        roles: [
            {
                roleTitle: "Information Technology Support Specialist",
                roleTitle_id: "Spesialis IT Support",
                employmentType: "Internship",
                employmentType_id: "Magang",
                workModel: "On-site",
                workModel_id: "On-site",
                period: "Jan 2022 - May 2022",
                period_id: "Jan 2022 - Mei 2022",
                duration: "5 mos",
                duration_id: "5 bln",
                description: "Provided hands-on technical infrastructure and AV support for official university assemblies, international symposiums, and faculty events at the Gowa Engineering campus.",
                description_id: "Menangani dukungan infrastruktur teknis dan perangkat audiovisual (AV) untuk berbagai acara resmi, simposium akademik, dan pertemuan fakultas di Kampus Teknik Gowa.",
                keyAchievements: [
                    "Ensured flawless audio-visual setups and stable live streaming for university symposiums",
                    "Resolved networking (LAN/Wi-Fi) and workstation issues swiftly to prevent event disruptions",
                    "Delivered responsive, courteous on-site technical assistance to professors, keynote speakers, and guests"
                ],
                keyAchievements_id: [
                    "Memastikan setup audio-visual dan live streaming berjalan lancar tanpa kendala teknis",
                    "Menangani troubleshooting jaringan LAN/Wi-Fi dan perangkat komputer secara cepat dan tepat",
                    "Memberikan pendampingan teknis yang ramah dan responsif bagi dosen, pembicara, dan tamu undangan"
                ],
                skills: ["Technical Support", "Computer Networking (LAN/Wi-Fi)", "Audiovisual Equipment", "Troubleshooting", "Customer Service"]
            }
        ]
    }
];

// ------------------------------------------------------------------------------
// 3. EDUCATION HISTORY
// ------------------------------------------------------------------------------
const educationData = [
    {
        id: "edu-unhas",
        institution: "Universitas Hasanuddin (UNHAS)",
        logo: "fas fa-graduation-cap",
        degree: "Bachelor of Computer Science (S.Kom / B.S.) - Information Systems",
        faculty: "Faculty of Mathematics and Natural Sciences (FMIPA)",
        department: "Department of Mathematics - Information Systems Study Program",
        period: "August 2023 - June 2027 (Expected)",
        status: "Currently Enrolled",
        highlights: [
            "Study focus: Software Engineering, Data Mining & Machine Learning, Software Quality Assurance (STQA), Database Architecture, and Web/Mobile Systems.",
            "Active in computer science lab instruction and collaborative software engineering projects.",
            "Applying academic theory into open-source real-world systems on GitHub."
        ],
        relevantCourses: [
            "Object-Oriented Programming (OOP)",
            "Web & Mobile Application Development",
            "Data Mining & Machine Learning",
            "Software Testing & Quality Assurance (STQA)",
            "Database Management Systems (DBMS)",
            "Information Systems Analysis & Design"
        ]
    }
];

// ------------------------------------------------------------------------------
// 4. CERTIFICATIONS & CREDENTIALS
// ------------------------------------------------------------------------------
const certificatesData = [
    {
        id: "cert-web-dev",
        title: "Full-Stack Web Development Mastery",
        title_id: "Sertifikasi Web Development Full-Stack",
        issuer: "Academic & Professional Credential",
        issueDate: "2024",
        category: "webdev",
        credentialId: "WD-2024-UNHAS",
        credentialUrl: "https://github.com/ReyRiz",
        skills: ["HTML5/CSS3", "JavaScript ES6+", "React", "Node.js", "PHP Laravel"],
        description: "Competency certification in architecting, developing, and deploying modern web applications with RESTful API architectures and relational databases.",
        description_id: "Sertifikasi kompetensi dalam merancang, mengembangkan, dan mempublikasikan aplikasi web modern dengan arsitektur RESTful API dan database relasional.",
        featured: true
    },
    {
        id: "cert-data-mining",
        title: "Data Mining & Predictive Analytics",
        title_id: "Sertifikasi Data Mining & Analitik Prediktif",
        issuer: "FMIPA Universitas Hasanuddin",
        issueDate: "2024",
        category: "datamining",
        credentialId: "DM-2024-AI",
        credentialUrl: "https://github.com/ReyRiz/forecasting-electricity-consumption",
        skills: ["Python", "Pandas", "Time Series", "Machine Learning", "Data Visualization"],
        description: "Competency in big data preprocessing, time series cleaning, feature engineering, and deploying hybrid AI/ML forecasting models.",
        description_id: "Kompetensi dalam pemrosesan data besar, pembersihan runtun waktu, rekayasa fitur, dan penerapan model AI/ML peramalan hybrid.",
        featured: true
    },
    {
        id: "cert-qa-testing",
        title: "Software Testing & Quality Assurance Specialist",
        title_id: "Spesialis Pengujian & Penjaminan Kualitas Software (STQA)",
        issuer: "STQA Laboratory Curriculum",
        issueDate: "2024",
        category: "stqa",
        credentialId: "STQA-2024-SPEC",
        credentialUrl: "https://github.com/ReyRiz/portofolio",
        skills: ["Unit Testing", "Selenium WebDriver", "Cypress", "Postman API", "Test Planning"],
        description: "Comprehensive software testing competency covering automated UI testing, REST API validation, performance metrics, and detailed bug report lifecycles.",
        description_id: "Kompetensi pengujian perangkat lunak komprehensif mencakup otomasi UI, validasi REST API, metrik performa, dan siklus pelaporan bug.",
        featured: true
    },
    {
        id: "cert-java-assistant",
        title: "Certified Computer Lab Assistant - Java OOP",
        title_id: "Sertifikat Asisten Laboratorium Komputer - Java OOP",
        issuer: "Dept. of Mathematics / Information Systems UNHAS",
        issueDate: "2025",
        category: "programming",
        credentialId: "LAB-UNHAS-2025",
        credentialUrl: "https://www.linkedin.com/in/farizidham/",
        skills: ["Java Core", "Object-Oriented Programming", "Algorithms", "Mentoring"],
        description: "Official credential acknowledging instructional appointment as an Object-Oriented Programming lab assistant mentoring university students.",
        description_id: "Kredensial resmi penunjukan asisten laboratorium Pemrograman Berorientasi Objek (OOP) untuk mendampingi mahasiswa sarjana.",
        featured: true
    }
];

// ------------------------------------------------------------------------------
// 5. KEAHLIAN & TECH STACK (SKILLS MATRIX)
// ------------------------------------------------------------------------------
const skillsData = {
    programming: [
        { name: "JavaScript (ES6+)", level: "Advanced", icon: "fab fa-js" },
        { name: "Python", level: "Advanced", icon: "fab fa-python" },
        { name: "Java", level: "Advanced", icon: "fab fa-java" },
        { name: "PHP", level: "Intermediate", icon: "fab fa-php" },
        { name: "C / C++", level: "Intermediate", icon: "fas fa-code" },
        { name: "HTML5 & CSS3", level: "Expert", icon: "fab fa-html5" }
    ],
    webDevelopment: [
        { name: "React.js", level: "Advanced", icon: "fab fa-react" },
        { name: "Laravel", level: "Advanced", icon: "fab fa-laravel" },
        { name: "Node.js & Express", level: "Intermediate", icon: "fab fa-node-js" },
        { name: "RESTful API", level: "Advanced", icon: "fas fa-network-wired" },
        { name: "Vite & Modern Tooling", level: "Advanced", icon: "fas fa-bolt" },
        { name: "MySQL & MongoDB", level: "Advanced", icon: "fas fa-database" }
    ],
    mobileAndAI: [
        { name: "Android SDK (Java)", level: "Intermediate", icon: "fab fa-android" },
        { name: "Firebase (Auth/Firestore)", level: "Intermediate", icon: "fas fa-fire" },
        { name: "Time Series & Machine Learning", level: "Advanced", icon: "fas fa-brain" },
        { name: "Web Scraping (Selenium/BS4)", level: "Advanced", icon: "fas fa-spider" },
        { name: "Pandas & Data Science", level: "Advanced", icon: "fas fa-chart-line" }
    ],
    qaAndTesting: [
        { name: "Selenium WebDriver", level: "Advanced", icon: "fas fa-robot" },
        { name: "Cypress", level: "Intermediate", icon: "fas fa-vial" },
        { name: "Postman API Testing", level: "Advanced", icon: "fas fa-paper-plane" },
        { name: "JUnit & Unit Testing", level: "Intermediate", icon: "fas fa-check-double" },
        { name: "Test Documentation & Bug Reporting", level: "Expert", icon: "fas fa-clipboard-check" }
    ],
    creativeAndTools: [
        { name: "Adobe Premiere Pro", level: "Expert", icon: "fas fa-film" },
        { name: "UI/UX Design (Figma)", level: "Intermediate", icon: "fab fa-figma" },
        { name: "Git & GitHub", level: "Advanced", icon: "fab fa-github" },
        { name: "IT Support & Networking", level: "Advanced", icon: "fas fa-server" }
    ]
};

// ------------------------------------------------------------------------------
// 6. DAFTAR LENGKAP PROYEK (PROJECTS DATA)
// ------------------------------------------------------------------------------
// 6. COMPLETE PROJECTS DIRECTORY (PROJECTS DATA)
// ------------------------------------------------------------------------------
const projectsData = [
    {
        id: "energypulse",
        title: "EnergyPulse - AI Electricity Consumption Forecasting",
        category: "datamining",
        categoryName: "Data Mining & AI",
        tags: ["Python", "Machine Learning", "Time Series", "SARIMA", "LSTM", "Matplotlib"],
        description: "Predictive analytics system forecasting power grid demand utilizing statistical time series modeling combined with deep neural networks.",
        thumbnail: "assets/images/project-images/electricity1.jpg",
        images: [
            "assets/images/project-images/electricity1.jpg",
            "assets/images/project-images/electricity2.jpg",
            "assets/images/project-images/electricity3.jpg"
        ],
        githubLink: "https://github.com/ReyRiz/forecasting-electricity-consumption",
        demoLink: "",
        featured: true,
        year: "2024",
        highlights: [
            "Robust outlier detection and missing-value imputation on large-scale utility dataset",
            "Hybrid ensemble architecture blending linear SARIMA with deep recurrent LSTM models",
            "Interactive visualization of daily, weekly, and seasonal power demand trends"
        ],
        fullOverview: `
            <p><strong>EnergyPulse</strong> is an intelligent electricity consumption forecasting platform developed to address grid load volatility for utility networks. It bridges linear statistical methods with deep learning capabilities to model complex, non-linear temporal dependencies.</p>
            <p>Through feature engineering incorporating lag features, calendar seasonality, and national holidays, EnergyPulse achieves minimal Mean Absolute Percentage Error (MAPE) across multi-horizon forecasts.</p>
        `,
        challenges: "Managing volatile demand spikes during public holidays and weather anomalies. Resolved by engineering an adaptive ensemble weighting statistical forecasts against LSTM neural predictions based on historical volatility."
    },
    {
        id: "tokolingu",
        title: "TokoLingu - Language Learning E-Commerce Platform",
        category: "webdev",
        categoryName: "Web Development",
        tags: ["PHP", "Laravel", "Blade", "MySQL", "JavaScript", "E-Commerce"],
        description: "Comprehensive e-commerce marketplace dedicated to foreign language courseware, literature, and educational resources.",
        thumbnail: "assets/images/project2.jpg",
        images: [
            "assets/images/project-images/project2-1.jpg",
            "assets/images/project-images/project2-2.jpg",
            "assets/images/project-images/project2-3.jpg"
        ],
        githubLink: "https://github.com/ReyRiz/tokolingu-ecommerce-project",
        demoLink: "",
        featured: true,
        year: "2024",
        highlights: [
            "Multi-role RBAC authentication (Learner/Buyer, Merchant/Vendor, and Administrator)",
            "Dynamic catalog filtering with secure cart, order lifecycle, and invoice processing",
            "Collaborative filtering recommendation engine suggesting targeted study materials"
        ],
        fullOverview: `
            <p><strong>TokoLingu</strong> is an educational e-commerce platform built on the Laravel framework following strict MVC conventions. Designed to empower language learners by providing verified exercise books, audio packs, and curated guides.</p>
        `,
        challenges: "Architecting a performant recommendation system that matches relevant learning materials based on customer browsing history and target language proficiencies."
    },
    {
        id: "whatsapp-clone",
        title: "WhatsApp Clone - Real-time Android Messenger",
        category: "mobiledev",
        categoryName: "Mobile App",
        tags: ["Java", "Android SDK", "Firebase Realtime", "Push Notification", "Material Design"],
        description: "Native Android instant messaging client featuring real-time chat synchronization, presence status, and rich media sharing.",
        thumbnail: "assets/images/whatsapp1.jpg",
        images: [
            "assets/images/project-images/whatsapp1.jpg",
            "assets/images/project-images/whatsapp2.jpg",
            "assets/images/project-images/whatsapp3.jpg"
        ],
        githubLink: "https://github.com/ReyRiz/tugas-final-mobile",
        demoLink: "",
        featured: true,
        year: "2024",
        highlights: [
            "Sub-second message synchronization powered by Firebase Realtime Database",
            "Read receipts (blue ticks), real-time online status, and typing indicators",
            "Image, audio, and document attachments with client-side compression pipeline"
        ],
        fullOverview: `
            <p>A native Android application replicating the core architecture and user experience of WhatsApp with optimized battery consumption and offline message persistence.</p>
        `,
        challenges: "Managing Firebase database event listeners efficiently to eliminate memory leaks and background battery drain when users navigate rapidly across chat rooms."
    },
    {
        id: "shopease",
        title: "ShopEase - Modern MERN Stack E-Commerce",
        category: "webdev",
        categoryName: "Web Development",
        tags: ["React", "Node.js", "Express", "MongoDB", "Redux", "Socket.io"],
        description: "Full-stack MERN e-commerce application equipped with real-time stock level updates via WebSockets.",
        thumbnail: "assets/images/shopease1.png",
        images: [
            "assets/images/project-images/shopease2.png",
            "assets/images/project-images/shopease3.png",
            "assets/images/project-images/shopease4.png"
        ],
        githubLink: "https://github.com/ReyRiz/shopease-project",
        demoLink: "",
        featured: false,
        year: "2024",
        highlights: [
            "Responsive Single Page Application (SPA) with centralized Redux Toolkit state",
            "Secure JWT token authentication and role-based route guards",
            "Live inventory broadcast through Socket.io to prevent product overselling"
        ],
        fullOverview: `<p>ShopEase delivers a streamlined online shopping experience powered by a modular Express.js REST API and scalable MongoDB document storage.</p>`,
        challenges: "Mitigating race conditions when concurrent shoppers attempt to purchase the final inventory unit simultaneously."
    },
    {
        id: "moodmate",
        title: "MoodMate - Android Mood Tracker & Mental Health",
        category: "mobiledev",
        categoryName: "Mobile App",
        tags: ["Java", "Android", "Cloud Firestore", "Firebase Auth", "MPAndroidChart"],
        description: "Mental health and daily wellness tracker for Android featuring private journaling, emotional trend graphs, and stress-relief exercises.",
        thumbnail: "assets/images/moodmate1.jpg",
        images: [
            "assets/images/project-images/moodmate1.jpg",
            "assets/images/project-images/moodmate2.jpg",
            "assets/images/project-images/moodmate3.jpg"
        ],
        githubLink: "https://github.com/khalikaa/MoodMate-Android",
        demoLink: "",
        featured: true,
        year: "2024",
        highlights: [
            "Intuitive daily mood check-ins with emoji selector and private reflection journal",
            "Weekly and monthly emotional analytics powered by MPAndroidChart",
            "Interactive mini-games and calming breathing exercises designed to alleviate stress"
        ],
        fullOverview: `<p>MoodMate empowers individuals to cultivate mindfulness and mental well-being with end-to-end data privacy secured through Google Cloud Firestore.</p>`,
        challenges: "Rendering smooth analytical chart animations when parsing extensive historical check-in records containing hundreds of entries."
    },
    {
        id: "redride",
        title: "RedRide - Fleet Management & Ride Booking System",
        category: "webdev",
        categoryName: "Web Development",
        tags: ["PHP", "Laravel", "MySQL", "JavaScript", "Google Maps API"],
        description: "Integrated vehicle fleet booking platform offering dynamic fare calculation, driver verification, and administrative trip dispatch.",
        thumbnail: "assets/images/redride1.png",
        images: [
            "assets/images/project-images/redride1.png",
            "assets/images/project-images/redride2.png",
            "assets/images/project-images/redride3.png"
        ],
        githubLink: "https://github.com/khalikaa/RedRide",
        demoLink: "",
        featured: false,
        year: "2024",
        highlights: [
            "Dynamic fare calculation engine factoring distance, road tariffs, and vehicle tier",
            "Administrative command center for dispatch oversight and financial reporting",
            "Passenger rating and driver feedback evaluation module"
        ],
        fullOverview: `<p>RedRide simplifies corporate transportation logistics and personal ride scheduling through real-time route plotting and consolidated fleet management.</p>`,
        challenges: "Ensuring zero latency in vehicle status synchronization between driver terminals and dispatch consoles."
    },
    {
        id: "web-scraping",
        title: "Data Mining Pipeline - Automated Web Scraping",
        category: "datamining",
        categoryName: "Data Mining & AI",
        tags: ["Python", "Selenium", "BeautifulSoup4", "Pandas", "Automation"],
        description: "Multi-source automated data mining pipeline extracting structured records across static HTML and client-rendered AJAX web pages.",
        thumbnail: "assets/images/scraping1.png",
        images: [
            "assets/images/project-images/scraping1.png",
            "assets/images/project-images/scraping2.png",
            "assets/images/project-images/scraping3.png"
        ],
        githubLink: "https://github.com/ReyRiz/data-mining-project",
        demoLink: "",
        featured: false,
        year: "2024",
        highlights: [
            "High-throughput HTML parsing pipeline using BeautifulSoup4",
            "Automated handling of dynamic JavaScript scrolls, popups, and pagination with Selenium",
            "Automated ETL pipeline exporting clean, normalized datasets into CSV for machine learning"
        ],
        fullOverview: `<p>A production-ready web data extraction toolkit designed to harvest, clean, and structure external data for predictive modeling pipelines.</p>`,
        challenges: "Overcoming rate-limiting bottlenecks and dynamically injected DOM structures without impeding overall crawling throughput."
    },
    {
        id: "aksinyata",
        title: "AksiNyata - Social Campaign & Community Impact",
        category: "webdev",
        categoryName: "Web Development",
        tags: ["React", "Vue", "Flask API", "Python", "Social Impact"],
        description: "Community crowdfunding and social initiative hub featuring campaign creation wizards, transparent donation ledgers, and volunteer matching.",
        thumbnail: "assets/images/project6.jpg",
        images: [
            "assets/images/project-images/project6-1.jpg",
            "assets/images/project-images/project6-2.jpg",
            "assets/images/project-images/project6-3.jpg"
        ],
        githubLink: "https://github.com/ReyRiz/AksiNyata",
        demoLink: "",
        featured: false,
        year: "2024",
        highlights: [
            "Multi-step campaign builder for grassroot community organizers",
            "High-performance REST API services built with Python Flask",
            "Transparent donation milestones and goal fulfillment progress tracking"
        ],
        fullOverview: `<p>A social impact platform connecting passionate volunteers and donors with verified humanitarian causes requiring immediate community mobilization.</p>`,
        challenges: "Achieving cohesive state coordination between a reactive single-page frontend and microservice Flask API endpoints."
    },
    {
        id: "stqa-strategies",
        title: "Software Testing Strategies & QA Architecture",
        category: "stqa",
        categoryName: "Software Testing & QA",
        tags: ["QA Architecture", "Test Strategy", "Integration Testing", "Documentation"],
        description: "Enterprise test architectural blueprint covering Unit, Integration, System, Acceptance, Performance, and Security testing methodologies.",
        thumbnail: "assets/images/project-images/stqa1.jpg",
        images: [
            "assets/images/project-images/stqa1.jpg"
        ],
        downloadLink: "assets/docs/software-testing-strategies.pdf",
        githubLink: "https://github.com/ReyRiz/portofolio",
        featured: true,
        year: "2024",
        highlights: [
            "Modern test automation pyramid strategy and coverage distribution standards",
            "Industry-standard functional and non-functional verification methodologies",
            "Comprehensive engineering documentation available as a downloadable PDF"
        ],
        fullOverview: `<p>A strategic software quality assurance manual synthesizing testing best practices, automation frameworks, and enterprise test governance lifecycles.</p>`,
        challenges: "Translating sophisticated test architectures into clear, practical guidelines executable across multidisciplinary development teams."
    },
    {
        id: "stqa-automation-suite",
        title: "Test Automation Suite (Selenium & Cypress)",
        category: "stqa",
        categoryName: "Software Testing & QA",
        tags: ["Selenium", "Cypress", "Postman", "JUnit", "Automation"],
        description: "End-to-end automated UI and RESTful API regression testing suite built with Selenium WebDriver, Cypress, and Postman collections.",
        thumbnail: "assets/images/project-images/stqa7.jpg",
        images: [
            "assets/images/project-images/stqa7.jpg",
            "assets/images/project-images/stqa8.png",
            "assets/images/project-images/stqa6.jpg"
        ],
        downloadLink: "assets/docs/selenium-webdriver-guide.pdf",
        githubLink: "https://github.com/ReyRiz/portofolio",
        featured: false,
        year: "2024",
        highlights: [
            "Page Object Model (POM) architectural pattern for robust, maintainable Selenium scripts",
            "Modern end-to-end browser test automation with Cypress CI/CD integration",
            "Automated RESTful API regression collections run via Newman / Postman runner"
        ],
        fullOverview: `<p>Complete test automation framework verifying critical user journeys from API contract layers down to browser UI rendering, guaranteeing software reliability.</p>`,
        challenges: "Mitigating flaky test occurrences caused by asynchronous DOM updates and unpredictable third-party API latency."
    }
];

// Global helper functions
function getAllProjects() {
    return projectsData;
}

function getFeaturedProjects() {
    return projectsData.filter(p => p.featured);
}

function getProjectById(id) {
    return projectsData.find(p => p.id === id);
}

function getCategories() {
    const isId = typeof getCurrentLang === 'function' && getCurrentLang() === 'id';
    return [
        { id: "all", name: isId ? "Semua Proyek" : "All Projects" },
        { id: "webdev", name: isId ? "Web Dev" : "Web Development" },
        { id: "mobiledev", name: isId ? "Aplikasi Mobile" : "Mobile App" },
        { id: "datamining", name: isId ? "Data & AI" : "Data & AI" },
        { id: "stqa", name: isId ? "Pengujian QA" : "Software Testing & QA" }
    ];
}
