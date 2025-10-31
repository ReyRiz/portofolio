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
        description: "Dokumen komprehensif tentang berbagai strategi pengujian perangkat lunak.",
        thumbnail: "./assets/images/project-images/stqa1.jpg",
        longDescription: `
            <p>Proyek ini adalah dokumen komprehensif yang menjelaskan berbagai strategi pengujian perangkat lunak modern, termasuk:</p>
            <ul>
                <li>Unit Testing Strategy</li>
                <li>Integration Testing Strategy</li>
                <li>System Testing Strategy</li>
                <li>Acceptance Testing Strategy</li>
                <li>Performance Testing Strategy</li>
                <li>Security Testing Strategy</li>
            </ul>
            <p>Dokumen ini mencakup best practices, tools, dan metodologi yang digunakan dalam setiap strategi pengujian.</p>
        `,
        challenges: "Mengorganisir dan menyajikan informasi kompleks tentang strategi pengujian dalam format yang mudah dipahami dan dapat diterapkan.",
        downloadLink: "./assets/docs/software-testing-strategies.pdf",
        images: [
            "./assets/images/project-images/stqa1.jpg",
            "./assets/images/project-images/stqa1.jpg",
            "./assets/images/project-images/stqa1.jpg"
        ]
    },
    {
        id: 10,
        title: "Introduksi ke UI/UX Testing",
        category: "stqa",
        tags: ["UI Testing", "UX Testing", "Usability"],
        description: "Panduan lengkap tentang pengujian User Interface dan User Experience.",
        thumbnail: "./assets/images/project-images/stqa2.png",
        longDescription: `
            <p>Dokumen ini memberikan pengantar komprehensif tentang pengujian UI/UX, meliputi:</p>
            <ul>
                <li>Prinsip Dasar UI/UX Testing</li>
                <li>Metodologi Pengujian UI/UX</li>
                <li>Tools untuk UI/UX Testing</li>
                <li>Usability Testing</li>
                <li>Best Practices dalam UI/UX Testing</li>
            </ul>
        `,
        challenges: "Menyusun framework pengujian yang efektif untuk mengevaluasi aspek UI/UX secara menyeluruh.",
        downloadLink: "./assets/docs/ui-ux-testing-intro.pdf",
        images: [
            "./assets/images/project-images/stqa2.png",
            "./assets/images/project-images/stqa2.png",
            "./assets/images/project-images/stqa2.png"
        ]
    },
    {
        id: 11,
        title: "Test Plan",
        category: "stqa",
        tags: ["Test Planning", "Quality Assurance", "Documentation"],
        description: "Template dan panduan lengkap untuk membuat Test Plan yang efektif.",
        thumbnail: "./assets/images/project-images/stqa3.jpg",
        longDescription: `
            <p>Proyek ini menyediakan template dan panduan untuk membuat Test Plan yang komprehensif, mencakup:</p>
            <ul>
                <li>Struktur Test Plan</li>
                <li>Test Objectives</li>
                <li>Test Strategy</li>
                <li>Test Environment</li>
                <li>Test Schedule</li>
                <li>Resource Requirements</li>
            </ul>
        `,
        challenges: "Mengembangkan template yang fleksibel namun terstruktur untuk berbagai jenis proyek software.",
        downloadLink: "./assets/docs/test-plan-template.pdf",
        images: [
            "./assets/images/project-images/stqa3.jpg",
            "./assets/images/project-images/stqa3.jpg",
            "./assets/images/project-images/stqa3.jpg"
        ]
    },
    {
        id: 12,
        title: "Test Scenario, Case, dan Bug Reports",
        category: "stqa",
        tags: ["Test Cases", "Bug Reports", "QA Documentation"],
        description: "Koleksi template dan contoh untuk Test Scenario, Test Case, dan Bug Report.",
        thumbnail: "./assets/images/project-images/stqa4.jpg",
        longDescription: `
            <p>Dokumen ini berisi panduan lengkap tentang:</p>
            <ul>
                <li>Penulisan Test Scenario yang Efektif</li>
                <li>Template Test Case</li>
                <li>Format Bug Report</li>
                <li>Best Practices dalam Dokumentasi Testing</li>
                <li>Contoh-contoh Praktis</li>
            </ul>
        `,
        challenges: "Menyusun format dokumentasi yang standar namun mudah dipahami untuk berbagai jenis pengujian.",
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
        description: "Pengenalan komprehensif tentang Unit Testing dengan fokus pada praktik terbaik dan implementasi.",
        thumbnail: "./assets/images/project-images/stqa5.jpg",
        longDescription: `
            <p>Proyek ini mencakup materi lengkap tentang unit testing:</p>
            <ul>
                <li>Fundamental Unit Testing</li>
                <li>Setup dan Konfigurasi JUnit</li>
                <li>Writing Effective Unit Tests</li>
                <li>Test Driven Development (TDD)</li>
                <li>Code Coverage dan Quality Metrics</li>
            </ul>
        `,
        challenges: "Mendemonstrasikan praktik unit testing yang efektif dengan contoh-contoh praktis.",
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
        description: "Panduan lengkap tentang pengujian API dengan berbagai tools dan metodologi.",
        thumbnail: "./assets/images/project-images/stqa6.jpg",
        longDescription: `
            <p>Dokumen ini memberikan pengenalan menyeluruh tentang API Testing:</p>
            <ul>
                <li>Fundamental API Testing</li>
                <li>REST API Testing dengan Postman</li>
                <li>Automation API Testing</li>
                <li>Security Testing untuk API</li>
                <li>Performance Testing API</li>
            </ul>
        `,
        challenges: "Menyajikan konsep API testing yang kompleks dalam format yang mudah dipahami.",
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
        description: "Panduan komprehensif tentang automasi pengujian web dengan Selenium WebDriver.",
        thumbnail: "./assets/images/project-images/stqa7.jpg",
        longDescription: `
            <p>Proyek ini mencakup materi lengkap tentang Selenium WebDriver:</p>
            <ul>
                <li>Setup dan Konfigurasi Selenium</li>
                <li>Basic dan Advanced Commands</li>
                <li>Page Object Model</li>
                <li>Test Automation Framework</li>
                <li>Best Practices dan Tips</li>
            </ul>
        `,
        challenges: "Menjelaskan konsep automasi testing yang kompleks dengan contoh praktis yang mudah diikuti.",
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
        description: "Pengenalan lengkap tentang modern web testing menggunakan Cypress.",
        thumbnail: "./assets/images/project-images/stqa8.png",
        longDescription: `
            <p>Dokumen ini memberikan pengenalan komprehensif tentang Cypress:</p>
            <ul>
                <li>Instalasi dan Setup Cypress</li>
                <li>Writing First Test</li>
                <li>Cypress Commands dan Assertions</li>
                <li>Test Organization</li>
                <li>CI/CD Integration</li>
            </ul>
        `,
        challenges: "Menyajikan fitur-fitur modern Cypress dalam format yang mudah dipahami untuk pemula.",
        downloadLink: "./assets/docs/cypress-testing-guide.pdf",
        images: [
            "./assets/images/project-images/stqa8.png",
            "./assets/images/project-images/stqa8.png",
            "./assets/images/project-images/stqa8.png"
        ]
    },
    {
        id: 1,
        title: "EnergyPulse - Sistem Prediksi Konsumsi Listrik",
        category: "datamining",
        tags: ["Python", "Time Series", "Prediksi"],
        description: "Sistem analitik prediktif canggih untuk meramalkan konsumsi listrik menggunakan model AI/ML hybrid.",
        thumbnail: "./assets/images/electricity1.jpg",
        longDescription: `
            <p>EnergyPulse adalah sistem peramalan canggih yang dikembangkan sebagai bagian dari mata kuliah Data Mining. Sistem ini menggunakan kombinasi metode statistik tradisional dan teknik deep learning untuk memprediksi konsumsi listrik dengan akurasi tinggi, membantu perusahaan utilitas mengoptimalkan alokasi sumber daya dan mengurangi pemborosan.</p>
            
            <p>Proyek ini melibatkan beberapa tahapan utama:</p>
            <ul>
                <li>Pengumpulan data</li>
                <li>Preprocessing time series lanjutan termasuk deteksi outlier dan imputasi</li>
                <li>Feature engineering dengan memasukkan fitur temporal, variabel lag, dan regresor eksternal</li>
                <li>Implementasi pendekatan peramalan hybrid yang menggabungkan SARIMA, ARIMA, dan LSTM neural networks</li>
                <li>Dashboard visualisasi interaktif untuk interpretasi hasil</li>
            </ul>
            
        `,
        challenges: "Tantangan terbesar adalah mengembangkan model yang dapat beradaptasi dengan pola musiman reguler dan kejadian tidak beraturan seperti hari libur, cuaca ekstrem, dan pergeseran ekonomi. Saya mengatasi ini dengan menciptakan arsitektur ensemble kustom yang menggabungkan kekuatan model statistik (untuk pola reguler) dengan deep learning (untuk hubungan kompleks), menggunakan meta-learner untuk secara cerdas memberikan bobot prediksi berdasarkan faktor kontekstual.",
        images: [
            "./assets/images/project-images/electricity1.jpg", 
            "./assets/images/project-images/electricity2.jpg", 
            "./assets/images/project-images/electricity3.jpg"
        ],
        githubLink: "https://github.com/ReyRiz/forecasting-electricity-consumption"
    },
    {
        id: 2,
        title: "TokoLingu - Platform E-commerce Pembelajaran Bahasa",
        category: "webdev",
        tags: ["PHP", "Laravel", "Blade", "JavaScript", "E-commerce"],
        description: "Solusi e-commerce komprehensif untuk materi dan sumber daya pembelajaran bahasa.",
        thumbnail: "./assets/images/project2.jpg",
        longDescription: `
            <p>TokoLingu adalah platform e-commerce lengkap yang mengkhususkan diri pada sumber daya pembelajaran bahasa. Platform ini dikembangkan sebagai proyek capstone untuk mata kuliah Pengembangan Web, dengan fokus pada penciptaan pengalaman berbelanja yang mulus untuk para pembelajar bahasa.</p>
            
            <p>Fitur utama platform meliputi:</p>
            <ul>
                <li>Registrasi dan autentikasi pengguna dengan kontrol akses multi-level</li>
                <li>Katalog produk ekstensif yang diorganisir berdasarkan bahasa dan jenis sumber daya</li>
                <li>Pencarian lanjutan dengan filter berdasarkan bahasa, level, format, dan harga</li>
                <li>Fungsi keranjang belanja dan wishlist</li>
                <li>Proses checkout aman dengan berbagai opsi pembayaran</li>
                <li>Sistem manajemen dan pelacakan pesanan</li>
                <li>Dashboard penjual untuk vendor mendaftarkan dan mengelola produk mereka</li>
                <li>Panel admin untuk manajemen situs dan analitik</li>
                <li>Desain responsif yang dioptimalkan untuk semua perangkat</li>
            </ul>
            
            <p>Proyek ini mengimplementasikan arsitektur MVC Laravel dengan templating Blade untuk tampilan dinamis, JavaScript kustom untuk elemen UI interaktif, dan MySQL untuk penyimpanan database. Platform mengikuti praktik terbaik untuk keamanan termasuk perlindungan CSRF, validasi, dan autentikasi aman.</p>
        `,
        challenges: "Tantangan signifikan adalah mengimplementasikan sistem rekomendasi yang menyarankan sumber daya pembelajaran bahasa yang relevan berdasarkan perilaku dan preferensi pengguna. Saya memecahkan ini dengan membuat algoritma collaborative filtering yang menganalisis riwayat pembelian dan pola browsing untuk menghasilkan rekomendasi yang dipersonalisasi, semuanya terintegrasi dalam ekosistem Laravel.",
        images: [
            "./assets/images/project-images/project2-1.jpg", 
            "./assets/images/project-images/project2-2.jpg", 
            "./assets/images/project-images/project2-3.jpg"
        ],
        githubLink: "https://github.com/ReyRiz/tokolingu-ecommerce-project"
    },
    {
        id: 3,
        title: "WhatsApp Clone - Aplikasi Pesan Android",
        category: "mobiledev",
        tags: ["Java", "Android", "Firebase", "Real-time Messaging"],
        description: "Aplikasi WhatsApp Clone fungsional yang dibangun dengan pengembangan Android native dengan fitur pesan real-time dan berbagi media.",
        thumbnail: "./assets/images/whatsapp1.jpg",
        longDescription: `
            <p>WhatsApp Clone ini adalah aplikasi pesan mobile berfitur lengkap yang dikembangkan sebagai proyek akhir untuk mata kuliah Pengembangan Aplikasi Mobile. Aplikasi ini mereplikasi fungsionalitas inti WhatsApp sambil mengimplementasikan praktik pengembangan Android modern.</p>
            
            <p>Aplikasi ini mencakup fitur-fitur berikut:</p>
            <ul>
                <li>Registrasi dan autentikasi pengguna menggunakan verifikasi nomor telepon</li>
                <li>Pesan real-time satu-satu dengan tanda terima baca dan indikator sedang mengetik</li>
                <li>Fungsi chat grup dengan kontrol admin</li>
                <li>Kemampuan berbagi media (gambar, video, dokumen)</li>
                <li>Panggilan suara dan video (simulasi)</li>
                <li>Notifikasi push untuk pesan baru</li>
                <li>Sinkronisasi kontak</li>
                <li>Enkripsi pesan (simulasi enkripsi end-to-end)</li>
                <li>Update status dengan kontrol privasi</li>
            </ul>
            
            <p>Aplikasi ini dibangun menggunakan pengembangan Android native dengan Java, mengikuti panduan Material Design dan mengimplementasikan Firebase Realtime Database untuk sinkronisasi pesan. Proyek ini menekankan prinsip arsitektur bersih dengan fokus pada performa dan efisiensi baterai.</p>
        `,
        challenges: "Tantangan paling signifikan adalah mengimplementasikan sistem pesan real-time yang efisien yang dapat menangani pengiriman pesan, tanda terima baca, dan kemampuan offline. Saya memecahkan ini dengan membuat sistem antrian pesan yang robust menggunakan Firebase Realtime Database dengan manajemen listener yang hati-hati dan strategi caching lokal untuk memastikan pesan disinkronkan dengan benar bahkan ketika konektivitas jaringan terputus-putus.",
        images: [
            "./assets/images/project-images/whatsapp1.jpg", 
            "./assets/images/project-images/whatsapp2.jpg", 
            "./assets/images/project-images/whatsapp3.jpg"
        ],
        githubLink: "https://github.com/ReyRiz/tugas-final-mobile"
    },
    {
        id: 5,
        title: "ShopEase - Proyek E-commerce Modern",
        category: "webdev",
        tags: ["React", "Node.js", "MongoDB", "E-commerce"],
        description: "Platform e-commerce modern dengan teknologi MERN stack yang menawarkan pengalaman pengguna yang mulus dan desain responsif.",
        thumbnail: "./assets/images/shopease1.png",
        longDescription: `
            <p>ShopEase adalah platform e-commerce modern yang dibangun dengan MERN stack (MongoDB, Express, React, Node.js) yang berfokus pada penciptaan pengalaman berbelanja tanpa hambatan. Proyek ini dikembangkan sebagai bagian dari mata kuliah Pengembangan Web Lanjutan, dengan penekanan pada framework JavaScript modern dan pengalaman pengguna.</p>
            
            <p>Fitur utama ShopEase meliputi:</p>
            <ul>
                <li>Arsitektur Single Page Application (SPA) untuk navigasi yang mulus</li>
                <li>Sistem autentikasi dan otorisasi berbasis JWT</li>
                <li>Update inventori real-time menggunakan WebSockets</li>
                <li>Manajemen state client-side dengan Redux</li>
                <li>Desain RESTful API dengan Express.js</li>
                <li>UI responsif yang dibangun dengan komponen Material UI</li>
                <li>Validasi form client-side dan penanganan error</li>
                <li>Dashboard admin dengan analitik dan grafik</li>
                <li>Pipeline CI/CD untuk testing dan deployment otomatis</li>
            </ul>
            
            <p>Aplikasi ini dibangun menggunakan praktik JavaScript modern termasuk fitur ES6+, React Hooks untuk manajemen state, dan async/await untuk menangani operasi asinkron. Proyek ini mengimplementasikan praktik terbaik untuk keamanan dan optimasi performa.</p>
        `,
        challenges: "Tantangan signifikan adalah mengimplementasikan update inventori real-time untuk mencegah pengguna membeli barang yang sudah habis stok. Saya memecahkan ini dengan mengintegrasikan WebSockets melalui Socket.io untuk memberikan notifikasi instan tentang perubahan stok dan mengimplementasikan optimistic UI updates yang dikombinasikan dengan validasi server untuk menjaga integritas data.",
        images: [
            "./assets/images/project-images/shopease2.png", 
            "./assets/images/project-images/shopease3.png", 
            "./assets/images/project-images/shopease4.png"
        ],
        githubLink: "https://github.com/ReyRiz/shopease-project"
    },
    {
        id: 6,
        title: "AksiNyata - Platform Kampanye Sosial",
        category: "webdev",
        tags: ["React", "Vue", "REST API", "Flask", "Dampak Sosial"],
        description: "Platform web modern untuk membuat, mengelola, dan mempromosikan kampanye sosial serta inisiatif komunitas.",
        thumbnail: "./assets/images/project6.jpg",
        longDescription: `
            <p>AksiNyata adalah platform web komprehensif yang dirancang untuk memfasilitasi kampanye sosial dan inisiatif komunitas. Proyek yang sadar sosial ini menggabungkan teknologi web modern dengan antarmuka pengguna yang intuitif untuk memungkinkan manajemen kampanye yang efektif dan keterlibatan komunitas.</p>
            
            <p>Fitur utama platform meliputi:</p>
            <ul>
                <li>Wizard pembuatan kampanye interaktif dengan template yang dapat disesuaikan</li>
                <li>Alat berbagi dan promosi multi-channel</li>
                <li>Fungsi donasi dan penggalangan dana dengan pemrosesan pembayaran aman</li>
                <li>Pelacakan progres kampanye dan visualisasi milestone</li>
                <li>Sistem registrasi dan koordinasi relawan</li>
                <li>Manajemen acara untuk kegiatan terkait kampanye</li>
                <li>Dashboard metrik keterlibatan pengguna dan analitik</li>
                <li>Forum diskusi komunitas dan sistem pesan</li>
                <li>Integrasi media sosial dan penjadwalan konten</li>
            </ul>
            
            <p>AksiNyata dibangun dengan tech stack modern yang menampilkan frontend React dengan komponen Vue untuk elemen interaktif tertentu, arsitektur RESTful API untuk fungsionalitas inti, dan backend Flask API untuk pemrosesan data dan logika bisnis. Desain responsif memastikan fungsionalitas yang mulus di semua jenis perangkat.</p>
        `,
        challenges: "Tantangan utama adalah menciptakan integrasi yang mulus antara frontend React dan backend Flask sambil mempertahankan performa optimal dan pengalaman pengguna. Saya memecahkan ini dengan mengimplementasikan layer API yang terstruktur dengan baik dengan strategi caching data yang efisien dan manajemen state yang dioptimalkan menggunakan Redux. Tantangan lain adalah mengembangkan sistem pembuatan kampanye yang fleksibel yang dapat mengakomodasi berbagai jenis kampanye sambil tetap intuitif - diatasi melalui arsitektur komponen modular dengan generasi form dinamis.",
        images: [
            "./assets/images/project-images/project6-1.jpg", 
            "./assets/images/project-images/project6-2.jpg", 
            "./assets/images/project-images/project6-3.jpg"
        ],
        githubLink: "https://github.com/ReyRiz/AksiNyata"
    },
    {
        id: 4,
        title: "RedRide - Sistem Manajemen Transportasi",
        category: "webdev",
        tags: ["PHP", "Laravel", "MySQL", "JavaScript", "Transportasi"],
        description: "Sistem manajemen transportasi komprehensif untuk layanan ride-hailing dan pemesanan kendaraan.",
        thumbnail: "./assets/images/redride1.png",
        longDescription: `
            <p>RedRide adalah sistem manajemen transportasi berfitur lengkap yang menyediakan solusi komprehensif untuk layanan ride-hailing dan pemesanan kendaraan. Proyek ini dikembangkan untuk mendemonstrasikan kemahiran dalam pengembangan web menggunakan framework PHP modern dan manajemen database.</p>
            
            <p>Sistem ini mencakup fitur-fitur inti berikut:</p>
            <ul>
                <li>Registrasi peminjam</li>
                <li>Sistem pemesanan</li>
                <li>Kalkulasi tarif dinamis berdasarkan jarak dan waktu</li>
                <li>Verifikasi driver dan manajemen kendaraan</li>
                <li>Pemrosesan pembayaran dan riwayat transaksi</li>
                <li>Sistem rating dan review untuk jaminan kualitas</li>
                <li>Dashboard admin untuk monitoring dan manajemen sistem</li>
                <li>Riwayat perjalanan</li>
            </ul>
            
            <p>RedRide mengimplementasikan arsitektur backend yang robust menggunakan pola MVC Laravel, dengan fokus pada skalabilitas dan keamanan. Sistem ini menampilkan update real-time, endpoint API yang aman, dan validasi data komprehensif untuk memastikan operasi yang andal.</p>
        `,
        challenges: "Tidak ada tantangan yang terlalu signifikan dalam proyek ini, namun saya memastikan bahwa sistem dapat menangani beban tinggi dengan mengimplementasikan caching untuk data yang sering diakses dan optimasi query database. Saya juga mengembangkan sistem pemesanan yang fleksibel yang dapat menangani berbagai jenis kendaraan dan tarif dinamis berdasarkan kondisi lalu lintas.",
        images: [
            "./assets/images/project-images/redride1.png", 
            "./assets/images/project-images/redride2.png", 
            "./assets/images/project-images/redride3.png"
        ],
        githubLink: "https://github.com/khalikaa/RedRide"
    },
    {
        id: 7,
        title: "Data Mining Project - Web Scraping",
        category: "datamining",
        tags: ["Python", "Web Scraping", "BeautifulSoup4", "Selenium"],
        description: "Proyek kumpulan script Python untuk melakukan web scraping dari berbagai sumber data dengan fokus pada scrapethissite.com.",
        thumbnail: "./assets/images/scraping1.png",
        longDescription: `
            <p>Repository ini dikembangkan sebagai bagian dari mata kuliah Data Mining Semester 3. Proyek ini bertujuan untuk mempelajari dan menerapkan teknik-teknik web scraping untuk mengumpulkan data dari berbagai sumber web, kemudian menganalisis data tersebut menggunakan teknik data mining.</p>
            
            <p>Website Target: Scrapethissite.com adalah website yang dirancang khusus untuk pembelajaran web scraping. Website ini menyediakan berbagai tantangan scraping dengan tingkat kesulitan yang berbeda-beda, mulai dari scraping sederhana hingga yang memerlukan penanganan JavaScript dan AJAX.</p>
            
            <p>Jenis Data yang Di-scrape:</p>
            <ul>
                <li>Countries Data - Data negara-negara dengan informasi populasi, luas area, dan ibukota</li>
                <li>Hockey Teams - Data tim hockey dengan statistik menang, kalah, dan seri</li>
                <li>AJAX/JavaScript Content - Data yang dimuat secara dinamis menggunakan JavaScript</li>
                <li>Film Data - Data film dengan informasi tahun rilis, rating, dan detail lainnya</li>
            </ul>
            
            <p>Tools dan Library yang Digunakan:</p>
            <ul>
                <li>requests - Untuk HTTP requests sederhana</li>
                <li>BeautifulSoup4 - Untuk parsing HTML</li>
                <li>Selenium - Untuk scraping konten JavaScript/AJAX</li>
                <li>pandas - Untuk manipulasi dan analisis data</li>
                <li>csv - Untuk handling file CSV</li>
            </ul>
            
            <p>Proyek ini menghasilkan berbagai file CSV berisi data yang telah di-scrape, serta script analisis untuk memproses data tersebut. Struktur proyek terorganisir dengan baik, memisahkan script scraping, data hasil, analisis, dan output ke dalam folder-folder yang berbeda.</p>
        `,
        challenges: "Tantangan utama dalam proyek ini adalah menangani berbagai jenis konten web, mulai dari HTML statis hingga konten dinamis yang dimuat dengan JavaScript. Saya mengatasi ini dengan menggunakan kombinasi BeautifulSoup4 untuk scraping HTML sederhana dan Selenium untuk menangani konten AJAX/JavaScript. Tantangan lainnya adalah memastikan data yang di-scrape akurat dan terstruktur dengan baik untuk analisis lebih lanjut.",
        images: [
            "./assets/images/project-images/scraping1.png", 
            "./assets/images/project-images/scraping2.png", 
            "./assets/images/project-images/scraping3.png"
        ],
        githubLink: "https://github.com/ReyRiz/data-mining-project"
    },
    {
        id: 8,
        title: "MoodMate - Aplikasi Manajemen Mood",
        category: "mobile",
        tags: ["Java", "Android", "Firebase Auth", "Firestore", "Material Design"],
        description: "Aplikasi Android untuk membantu pengguna mengelola mood dan kesehatan mental melalui tracking mood harian dan mini games interaktif.",
        thumbnail: "./assets/images/moodmate1.jpg",
        longDescription: `
            <p>MoodMate adalah aplikasi Android yang dirancang untuk membantu pengguna dalam mengelola kesehatan mental dan mood harian mereka. Aplikasi ini menyediakan platform yang user-friendly untuk tracking mood, refleksi diri, dan aktivitas yang dapat meningkatkan mood positif.</p>
            
            <p>Fitur Utama:</p>
            <ul>
                <li><strong>Mood Tracking</strong> - Catat mood harian dengan berbagai opsi emoji dan level intensitas</li>
                <li><strong>Journal Pribadi</strong> - Tulis refleksi dan catatan personal untuk setiap hari</li>
                <li><strong>Mini Games</strong> - Koleksi permainan sederhana untuk relaksasi dan mood booster</li>
                <li><strong>Statistik Mood</strong> - Analisis pola mood dalam bentuk grafik dan insight mingguan/bulanan</li>
                <li><strong>Reminder Notifications</strong> - Pengingat untuk melakukan check-in mood harian</li>
                <li><strong>Tema Kustomisasi</strong> - Pilihan tema warna yang dapat disesuaikan dengan preferensi pengguna</li>
            </ul>
            
            <p>Teknologi yang Digunakan:</p>
            <ul>
                <li><strong>Java</strong> - Bahasa pemrograman utama untuk development Android</li>
                <li><strong>Android SDK</strong> - Framework pengembangan aplikasi Android native</li>
                <li><strong>Firebase Authentication</strong> - Sistem login dan registrasi pengguna yang aman</li>
                <li><strong>Cloud Firestore</strong> - Database NoSQL untuk menyimpan data mood dan journal pengguna</li>
                <li><strong>Material Design</strong> - Desain UI/UX yang mengikuti guidelines Google Material Design</li>
                <li><strong>MPAndroidChart</strong> - Library untuk menampilkan grafik statistik mood</li>
                <li><strong>Glide</strong> - Library untuk manajemen dan loading gambar</li>
            </ul>
            
            <p>MoodMate dikembangkan dengan fokus pada kemudahan penggunaan dan privasi pengguna. Semua data personal disimpan secara aman di cloud dengan enkripsi end-to-end, dan pengguna memiliki kontrol penuh terhadap data mereka.</p>
        `,
        challenges: "Tantangan utama dalam pengembangan MoodMate adalah merancang user experience yang intuitif untuk tracking mood sekaligus menjaga privasi pengguna. Saya mengatasi ini dengan implementasi Firebase Authentication untuk keamanan dan desain interface yang simpel namun informatif. Tantangan teknis lainnya adalah optimasi performa aplikasi agar tetap responsif saat menampilkan grafik dan statistik dari data historical yang besar.",
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
