/**
 * ==============================================================================
 * PORTFOLIO DATA - CENTRALIZED SINGLE SOURCE OF TRUTH
 * ==============================================================================
 * Fariz Idham Ramdhani (ReyRiz)
 * 
 * Ingin tambah proyek, pengalaman kerja, atau sertifikat baru?
 * Cukup copy salah satu template objek di bawah ini dan isi datanya.
 * Website akan otomatis merender semuanya secara instan!
 * ==============================================================================
 */

// Helper untuk memastikan asset path selalu benar dari halaman manapun
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
// 1. INFORMASI PERSONAL & PROFIL
// ------------------------------------------------------------------------------
const personalInfo = {
    name: "Fariz Idham Ramdhani",
    nickname: "Fariz",
    alias: "ReyRiz",
    tagline: "Full-Stack Developer, AI Enthusiast & Video Editor",
    statusText: "Open to Work / Internships & Collaborations",
    statusAvailable: true,
    bioShort: "Mahasiswa Sistem Informasi di Universitas Hasanuddin yang memadukan keahlian Full-Stack Web Development, Data Science/AI, dan Multimedia Creative untuk membangun solusi digital berkinerja tinggi.",
    bioLong: `Halo! Saya Fariz Idham Ramdhani (dikenal juga sebagai ReyRiz), mahasiswa S1 Sistem Informasi di Fakultas MIPA Universitas Hasanuddin. 
    Saya memiliki ketertarikan mendalam dalam merancang sistem web modern berskala besar, analitik prediktif berbasis machine learning, serta otomatisasi pengujian perangkat lunak. 
    Selain sisi rekayasa perangkat lunak, saya juga aktif berkecimpung dalam video editing kreatif dan kepemimpinan operasional IT.`,
    location: "Makassar, Sulawesi Selatan, Indonesia",
    email: "farizidhamr@gmail.com",
    github: "https://github.com/ReyRiz",
    linkedin: "https://www.linkedin.com/in/farizidham/",
    instagram: "https://instagram.com/farizidham",
    avatar: "assets/images/fariz-original.jpg",
    stats: [
        { label: "Proyek Selesai", value: "12+" },
        { label: "Keahlian & Stack", value: "18+" },
        { label: "Tahun Belajar & Coding", value: "3+ Tahun" },
        { label: "IPK / Semester", value: "S1 UNHAS" }
    ]
};

// ------------------------------------------------------------------------------
// 2. PENGALAMAN KERJA & KARIR (WORK EXPERIENCE)
// Disusun kronologis (terbaru ke terlama)
// ------------------------------------------------------------------------------
const experiencesData = [
    {
        id: "exp-brrads",
        company: "BRRADS Industries",
        companyLogo: "fas fa-cat",
        location: "Makassar, Indonesia",
        totalDuration: "10 bln",
        roles: [
            {
                roleTitle: "Editor & IT Staff",
                employmentType: "Kontrak",
                workModel: "Hybrid (Gabungan)",
                period: "Jun 2026 - Saat ini",
                duration: "5 bln",
                description: "Mendukung kebutuhan konten kreatif dan operasional IT perusahaan dengan bertanggung jawab penuh atas pemeliharaan infrastruktur teknis, troubleshooting harian, serta produksi konten digital berkualitas tinggi.",
                keyAchievements: [
                    "Mengelola sistem IT internal untuk kelancaran aktivitas bisnis harian",
                    "Memproduksi dan menyunting aset konten digital visual untuk kebutuhan pemasaran",
                    "Memberikan technical support lintas divisi perusahaan"
                ],
                skills: ["IT Support", "Web Development", "Content Editing", "System Troubleshooting", "Team Collaboration"],
                media: [
                    { name: "Presentasi Kerja", type: "image", url: "assets/images/experience/presentasi.jpeg" }
                ]
            },
            {
                roleTitle: "Web Developer & Editor",
                employmentType: "Magang",
                workModel: "Di lokasi (On-site)",
                period: "Jan 2026 - Jun 2026",
                duration: "6 bln",
                description: "Mengidentifikasi kebutuhan alur inventori yang lebih terstruktur dan berhasil merancang serta mengembangkan Warehouse Management System (WMS) berbasis web untuk mendukung stock opname dan pencatatan inventori real-time.",
                keyAchievements: [
                    "Membangun Warehouse Management System (WMS) berbasis web dari nol",
                    "Mengotomatisasi proses stock opname sehingga mengurangi selisih pencatatan inventori",
                    "Menangani workflow editing konten video korporat secara konsisten"
                ],
                skills: ["Web Development", "PHP / Laravel", "Database Design", "Inventory System", "Problem Solving", "Video Editing"],
                media: [
                    { name: "WMS Dashboard", type: "image", url: "assets/images/experience/wms-dashboard.png" }
                ]
            }
        ]
    },
    {
        id: "exp-reza-auditore",
        company: "Reza Auditore (Content Creator / Streamer)",
        companyLogo: "fas fa-video",
        location: "Indonesia",
        totalDuration: "1 thn 4 bln",
        roles: [
            {
                roleTitle: "Editor Video Utama",
                employmentType: "Purnawaktu",
                workModel: "Hybrid / Remote",
                period: "Jul 2025 - Saat ini",
                duration: "1 thn 4 bln",
                description: "Mentransformasikan rekaman livestream berdurasi panjang menjadi klip dan reels pendek berkecepatan tinggi yang dioptimalkan untuk algoritma YouTube Shorts, TikTok, dan Instagram Reels.",
                keyAchievements: [
                    "Menghasilkan ratusan video pendek dengan retensi penonton dan engagement tinggi",
                    "Menguasai alur kerja cepat (fast-paced timeline, sound design, hook retention, color grading)",
                    "Konsistensi deadline harian untuk platform media sosial multi-channel"
                ],
                skills: ["Adobe Premiere Pro", "Video Editing", "Short-Form Content", "Storytelling", "Social Media Optimization", "Pacing & Sound Design"]
            }
        ]
    },
    {
        id: "exp-unhas-lab",
        company: "Universitas Hasanuddin",
        companyLogo: "fas fa-university",
        location: "Kampus Tamalanrea, Makassar",
        totalDuration: "5 bln",
        roles: [
            {
                roleTitle: "Computer Lab Assistant (OOP Java)",
                employmentType: "Purnawaktu",
                workModel: "Di lokasi (On-site)",
                period: "Feb 2025 - Jun 2025",
                duration: "5 bln",
                description: "Membimbing dan mendampingi mahasiswa selama sesi praktikum Pemrograman Berorientasi Objek (PBO / OOP Java) dengan menerjemahkan konsep teoritis ke dalam implementasi kode praktis serta latihan pemecahan masalah.",
                keyAchievements: [
                    "Membimbing lebih dari 40+ mahasiswa dalam penguasaan konsep Class, Object, Inheritance, Polymorphism, dan Encapsulation",
                    "Memfasilitasi sesi live debugging dan evaluasi tugas praktikum mingguan",
                    "Menyusun materi panduan praktikum dan studi kasus OOP interaktif"
                ],
                skills: ["Java", "Object-Oriented Programming (OOP)", "Code Debugging", "Mentoring", "Pemecahan Masalah"]
            }
        ]
    },
    {
        id: "exp-golqi",
        company: "PT GOLQI SUKSES MULIA",
        companyLogo: "fas fa-utensils",
        location: "Makassar, Indonesia",
        totalDuration: "3 bln",
        roles: [
            {
                roleTitle: "Food Service Worker",
                employmentType: "Paruh Waktu",
                workModel: "Di lokasi (On-site)",
                period: "Mar 2024 - Mei 2024",
                duration: "3 bln",
                description: "Mendukung operasional harian restoran dengan menyiapkan dan menyajikan makanan sesuai Standar Operasional Prosedur (SOP) dan standar kualitas kebersihan yang ketat.",
                keyAchievements: [
                    "Menjaga efisiensi kerja tim di bawah situasi peak hour bertekanan tinggi",
                    "Membangun etos kerja, disiplin waktu, dan keterampilan customer service yang prima"
                ],
                skills: ["Kerja Tim", "Pelayanan Pelanggan", "Disiplin Operasional", "Manajemen Waktu"]
            }
        ]
    },
    {
        id: "exp-unhas-itsupport",
        company: "Universitas Hasanuddin",
        companyLogo: "fas fa-network-wired",
        location: "Fakultas Teknik, Gowa, Sulawesi Selatan",
        totalDuration: "5 bln",
        roles: [
            {
                roleTitle: "Information Technology Support Specialist",
                employmentType: "Magang",
                workModel: "Di lokasi (On-site)",
                period: "Jan 2022 - Mei 2022",
                duration: "5 bln",
                description: "Mendukung acara resmi universitas, seminar, dan rapat pimpinan dengan melakukan setup, konfigurasi, serta pemantauan peralatan audiovisual dan jaringan komputer termasuk kamera, sound system, dan koneksi internet.",
                keyAchievements: [
                    "Memastikan zero-downtime koneksi dan audio-visual pada berbagai event besar universitas",
                    "Melakukan troubleshooting jaringan LAN/Wi-Fi dan konfigurasi perangkat keras secara tanggap",
                    "Memberikan technical support cepat untuk staf dan dosen"
                ],
                skills: ["Dukungan Teknis", "Jaringan Komputer (LAN/Wi-Fi)", "Audiovisual Equipment", "Troubleshooting", "Layanan Pelanggan"]
            }
        ]
    }
];

// ------------------------------------------------------------------------------
// 3. RIWAYAT PENDIDIKAN (EDUCATION)
// ------------------------------------------------------------------------------
const educationData = [
    {
        id: "edu-unhas",
        institution: "Universitas Hasanuddin (UNHAS)",
        logo: "fas fa-graduation-cap",
        degree: "Sarjana Komputer (S.Kom / B.Tech) - Sistem Informasi",
        faculty: "Fakultas Matematika dan Ilmu Pengetahuan Alam (FMIPA)",
        department: "Departemen Matematika - Program Studi Sistem Informasi",
        period: "Agustus 2023 - Juni 2027 (Estimasi)",
        status: "Sedang Menempuh Pendidikan",
        highlights: [
            "Fokus studi: Rekayasa Perangkat Lunak, Data Mining & Machine Learning, Pengujian Sistem (STQA), Arsitektur Basis Data, dan Pengembangan Web/Mobile.",
            "Aktif dalam kegiatan akademik laboratorium dan proyek kolaboratif pengembangan perangkat lunak.",
            "Menerapkan teori perkuliahan ke dalam proyek praktis open-source di GitHub."
        ],
        relevantCourses: [
            "Pemrograman Berorientasi Objek (OOP)",
            "Pengembangan Web & Mobile",
            "Data Mining & Machine Learning",
            "Software Testing & Quality Assurance (STQA)",
            "Sistem Manajemen Basis Data (DBMS)",
            "Analisis dan Perancangan Sistem Informasi"
        ]
    }
];

// ------------------------------------------------------------------------------
// 4. SERTIFIKAT & LISENSI (CERTIFICATIONS)
// Anda bisa menambahkan sertifikat baru dengan sangat mudah di sini!
// ------------------------------------------------------------------------------
const certificatesData = [
    {
        id: "cert-web-dev",
        title: "Full-Stack Web Development Mastery",
        issuer: "Academic & Professional Credential",
        issueDate: "2024",
        category: "webdev",
        credentialId: "WD-2024-UNHAS",
        credentialUrl: "https://github.com/ReyRiz",
        skills: ["HTML5/CSS3", "JavaScript ES6+", "React", "Node.js", "PHP Laravel"],
        description: "Sertifikasi kompetensi dalam merancang, mengembangkan, dan menerapkan aplikasi web modern dengan arsitektur RESTful API dan database relasional.",
        featured: true
    },
    {
        id: "cert-data-mining",
        title: "Data Mining & Predictive Analytics",
        issuer: "FMIPA Universitas Hasanuddin",
        issueDate: "2024",
        category: "datamining",
        credentialId: "DM-2024-AI",
        credentialUrl: "https://github.com/ReyRiz/forecasting-electricity-consumption",
        skills: ["Python", "Pandas", "Time Series", "Machine Learning", "Data Visualization"],
        description: "Kompetensi dalam pengolahan big data, pembersihan data time series, feature engineering, serta penerapan model prediksi hybrid AI/ML.",
        featured: true
    },
    {
        id: "cert-qa-testing",
        title: "Software Testing & Quality Assurance Specialist",
        issuer: "STQA Laboratory Curriculum",
        issueDate: "2024",
        category: "stqa",
        credentialId: "STQA-2024-SPEC",
        credentialUrl: "https://github.com/ReyRiz/portofolio",
        skills: ["Unit Testing", "Selenium WebDriver", "Cypress", "Postman API", "Test Planning"],
        description: "Kompetensi dalam pengujian perangkat lunak komprehensif mencakup automasi pengujian UI, API testing, pengujian performa, dan penyusunan test case/bug report.",
        featured: true
    },
    {
        id: "cert-java-assistant",
        title: "Certified Computer Lab Assistant - Java OOP",
        issuer: "Departemen Matematika / Sistem Informasi UNHAS",
        issueDate: "2025",
        category: "programming",
        credentialId: "LAB-UNHAS-2025",
        credentialUrl: "https://www.linkedin.com/in/farizidham/",
        skills: ["Java Core", "Object-Oriented Programming", "Algorithms", "Mentoring"],
        description: "Sertifikat resmi pengakuan sebagai asisten pengajar praktikum Pemrograman Berorientasi Objek untuk membimbing mahasiswa dalam sesi lab komputer.",
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
const projectsData = [
    {
        id: "energypulse",
        title: "EnergyPulse - Sistem Prediksi Konsumsi Listrik AI",
        category: "datamining",
        categoryName: "Data Mining & AI",
        tags: ["Python", "Machine Learning", "Time Series", "SARIMA", "LSTM", "Matplotlib"],
        description: "Sistem analitik prediktif peramalan konsumsi listrik menggunakan kombinasi model statistik time series dan deep learning neural network.",
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
            "Deteksi outlier dan imputasi data konsumsi energi skala besar",
            "Implementasi arsitektur ensemble hybrid (SARIMA, ARIMA, dan LSTM)",
            "Visualisasi interaktif pola konsumsi harian, mingguan, dan musiman"
        ],
        fullOverview: `
            <p><strong>EnergyPulse</strong> adalah sistem peramalan konsumsi listrik yang dikembangkan untuk mengatasi ketidakpastian beban listrik pada jaringan utilitas. Sistem ini menggabungkan ketepatan model statistik linier dengan kemampuan deep learning dalam memetakan dependensi temporal yang non-linier.</p>
            <p>Dengan teknik feature engineering yang mencakup variabel lag, tren kalender, dan hari libur nasional, EnergyPulse mampu menghasilkan prediksi konsumsi dengan tingkat akurasi Mean Absolute Percentage Error (MAPE) yang sangat rendah.</p>
        `,
        challenges: "Tantangan terbesar adalah menangani lonjakan beban tidak terduga pada hari libur dan anomali cuaca. Solusi dipecahkan melalui arsitektur ensemble yang membobotkan prediksi model statistik dan neural network berdasarkan metrik volatilitas historis."
    },
    {
        id: "tokolingu",
        title: "TokoLingu - Platform E-Commerce Pembelajaran Bahasa",
        category: "webdev",
        categoryName: "Web Development",
        tags: ["PHP", "Laravel", "Blade", "MySQL", "JavaScript", "E-Commerce"],
        description: "Solusi platform marketplace e-commerce komprehensif khusus materi, buku, dan sumber daya edukasi bahasa asing.",
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
            "Autentikasi multi-role (Pembeli, Penjual/Vendor, dan Administrator)",
            "Katalog produk dengan filter dinamis dan integrasi keranjang belanja aman",
            "Algoritma collaborative filtering untuk rekomendasi buku yang relevan"
        ],
        fullOverview: `
            <p><strong>TokoLingu</strong> adalah platform e-commerce yang dibangun menggunakan framework Laravel dengan pola arsitektur MVC yang bersih. Dirancang khusus untuk memfasilitasi pembelajar bahasa agar mudah menemukan materi kursus, ebook, dan modul latihan terpercaya.</p>
        `,
        challenges: "Mengintegrasikan sistem rekomendasi materi belajar yang tepat sasaran berdasarkan riwayat transaksi pembeli dan bahasa yang sedang diminati."
    },
    {
        id: "whatsapp-clone",
        title: "WhatsApp Clone - Real-time Messaging Android",
        category: "mobiledev",
        categoryName: "Mobile App",
        tags: ["Java", "Android SDK", "Firebase Realtime", "Push Notification", "Material Design"],
        description: "Aplikasi pesan instan Android native berfitur lengkap dengan sinkronisasi pesan real-time, status, dan berbagi media.",
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
            "Sinkronisasi pesan real-time dengan Firebase Realtime Database",
            "Fitur read receipts (centang biru), status online, dan indikator typing",
            "Pengiriman file gambar, audio, dan dokumen dengan kompresi lokal"
        ],
        fullOverview: `
            <p>Aplikasi Android native yang mereplikasi fungsionalitas inti WhatsApp dengan arsitektur efisien dan konsumsi baterai rendah. Menekankan performa pengiriman pesan instan dan caching offline.</p>
        `,
        challenges: "Menjaga listener database tetap ringan dan mencegah memory leak saat pengguna berpindah room chat dengan cepat."
    },
    {
        id: "shopease",
        title: "ShopEase - Modern MERN Stack E-Commerce",
        category: "webdev",
        categoryName: "Web Development",
        tags: ["React", "Node.js", "Express", "MongoDB", "Redux", "Socket.io"],
        description: "Platform e-commerce modern dengan arsitektur MERN stack lengkap dengan update inventori stok real-time via WebSockets.",
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
            "Single Page Application (SPA) responsif dengan state management Redux Toolkit",
            "JWT Authentication & role authorization yang aman",
            "Notifikasi stok langsung lewat Socket.io untuk mencegah overselling"
        ],
        fullOverview: `<p>ShopEase menghadirkan pengalaman belanja online yang responsif dengan REST API berbasis Express.js dan database MongoDB fleksibel.</p>`,
        challenges: "Menghindari konflik race-condition ketika dua pengguna memesan sisa barang terakhir di detik yang sama."
    },
    {
        id: "moodmate",
        title: "MoodMate - Android Mood Tracker & Mental Health",
        category: "mobiledev",
        categoryName: "Mobile App",
        tags: ["Java", "Android", "Cloud Firestore", "Firebase Auth", "MPAndroidChart"],
        description: "Aplikasi Android untuk tracking kesehatan mental harian, refleksi diri, grafik statistik emosi, dan mini games relaksasi.",
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
            "Pencatatan mood harian dengan emoji selector dan jurnal refleksi pribadi",
            "Grafik analitik mingguan dan bulanan berbasis MPAndroidChart",
            "Mini games sederhana yang dirancang untuk meredakan stres pengguna"
        ],
        fullOverview: `<p>MoodMate berfokus pada kemudahan pencatatan jurnal kesehatan mental dengan perlindungan data privasi penuh di Google Cloud Firestore.</p>`,
        challenges: "Mengoptimalkan loading grafik performa tinggi ketika data riwayat pengguna telah mencapai ratusan entri harian."
    },
    {
        id: "redride",
        title: "RedRide - Sistem Manajemen Transportasi & Ride Booking",
        category: "webdev",
        categoryName: "Web Development",
        tags: ["PHP", "Laravel", "MySQL", "JavaScript", "Google Maps API"],
        description: "Sistem transportasi terpadu untuk pemesanan armada kendaraan, kalkulasi tarif dinamis, dan verifikasi driver.",
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
            "Kalkulasi tarif dinamis berdasarkan jarak tempuh dan jenis kendaraan",
            "Dashboard administrator untuk monitoring perjalanan dan riwayat transaksi",
            "Sistem rating dan ulasan performa pengemudi"
        ],
        fullOverview: `<p>RedRide dirancang untuk menyederhanakan logistik pemesanan kendaraan operasional dengan pelaporan komprehensif.</p>`,
        challenges: "Memastikan sinkronisasi status ketersediaan armada selalu akurat di seluruh terminal pemesanan."
    },
    {
        id: "web-scraping",
        title: "Data Mining Pipeline - Automated Web Scraping",
        category: "datamining",
        categoryName: "Data Mining & AI",
        tags: ["Python", "Selenium", "BeautifulSoup4", "Pandas", "Automation"],
        description: "Automasi ekstraksi data web multi-sumber dari halaman statis hingga dynamic AJAX/JavaScript rendering.",
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
            "Pipeline ekstraksi data HTML cepat dengan BeautifulSoup4",
            "Penanganan konten dinamis, AJAX scroll, dan pagination menggunakan Selenium",
            "Export data terstruktur ke format CSV dan analitik deskriptif dengan Pandas"
        ],
        fullOverview: `<p>Koleksi script otomasi ekstraksi data untuk kebutuhan analisis data mining dan pembelajaran model prediktif.</p>`,
        challenges: "Mengatasi proteksi rate limiting dan konten yang dimuat secara asinkron tanpa memperlambat proses crawling."
    },
    {
        id: "aksinyata",
        title: "AksiNyata - Platform Kampanye & Dampak Sosial",
        category: "webdev",
        categoryName: "Web Development",
        tags: ["React", "Vue", "Flask API", "Python", "Social Impact"],
        description: "Platform web penggalangan dana dan inisiatif komunitas dengan wizard pembuatan kampanye dan pelacakan donasi.",
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
            "Wizard interaktif pembuatan inisiatif sosial dan kampanye bantuan",
            "Backend API cepat menggunakan Python Flask",
            "Visualisasi progres pencapaian target donasi secara transparan"
        ],
        fullOverview: `<p>Platform kolaborasi sosial yang menghubungkan sukarelawan dengan kampanye kemanusiaan yang membutuhkan dukungan.</p>`,
        challenges: "Membangun integrasi yang mulus antara frontend berbasis komponen reaktif dengan backend microservice Flask."
    },
    {
        id: "stqa-strategies",
        title: "Software Testing Strategies & QA Architecture",
        category: "stqa",
        categoryName: "Software Testing & QA",
        tags: ["QA Architecture", "Test Strategy", "Integration Testing", "Documentation"],
        description: "Panduan dan dokumen arsitektur pengujian komprehensif mencakup Unit, Integration, System, Acceptance, Performance, dan Security testing.",
        thumbnail: "assets/images/project-images/stqa1.jpg",
        images: [
            "assets/images/project-images/stqa1.jpg"
        ],
        downloadLink: "assets/docs/software-testing-strategies.pdf",
        githubLink: "https://github.com/ReyRiz/portofolio",
        featured: true,
        year: "2024",
        highlights: [
            "Framework strategi piramida pengujian perangkat lunak modern",
            "Metodologi pengujian fungsional dan non-fungsional berstandar industri",
            "Tersedia modul dokumentasi PDF lengkap"
        ],
        fullOverview: `<p>Dokumentasi strategis pengujian perangkat lunak yang merangkum best practices, tools, dan alur QA enterprise.</p>`,
        challenges: "Menyajikan metodologi pengujian yang kompleks agar mudah diimplementasikan pada berbagai skala proyek."
    },
    {
        id: "stqa-automation-suite",
        title: "Test Automation Suite (Selenium & Cypress)",
        category: "stqa",
        categoryName: "Software Testing & QA",
        tags: ["Selenium", "Cypress", "Postman", "JUnit", "Automation"],
        description: "Rangkaian panduan dan skrip implementasi automasi pengujian UI dan RESTful API menggunakan Selenium WebDriver, Cypress, dan Postman.",
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
            "Page Object Model (POM) pattern untuk automasi Selenium yang clean",
            "Pengujian end-to-end modern dengan Cypress dan CI/CD integration",
            "Koleksi pengujian otomatis RESTful API dengan Postman runner"
        ],
        fullOverview: `<p>Implementasi menyeluruh pengujian otomatis dari level API hingga UI interaction untuk menjamin reliabilitas software.</p>`,
        challenges: "Menjaga stabilitas skrip automasi dari elemen web dinamis yang sering berubah (flaky tests)."
    }
];

// Helper functions global
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
    return [
        { id: "all", name: "Semua Proyek" },
        { id: "webdev", name: "Web Development" },
        { id: "mobiledev", name: "Mobile App" },
        { id: "datamining", name: "Data & AI" },
        { id: "stqa", name: "Software Testing & QA" }
    ];
}
