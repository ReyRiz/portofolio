/**
 * ==============================================================================
 * PORTFOLIO INTERNATIONALIZATION (i18n) ENGINE
 * ==============================================================================
 * Fariz Idham Ramdhani (ReyRiz)
 * Seamless English (EN) and Indonesian (ID) dual-language switching & persistence.
 * ==============================================================================
 */

const I18N_STORAGE_KEY = 'portfolio_lang';

const I18N_DICT = {
    en: {
        // Nav Links
        nav_home: "Home",
        nav_experience: "Experience",
        nav_projects: "Projects",
        nav_certificates: "Certificates",
        nav_about: "About",
        nav_contact: "Contact",
        nav_copy_email: "Copy Email",
        open_menu: "Open Menu",
        close_menu: "Close Menu",
        sound_toggle_title: "Toggle Sci-Fi Sound Effects",
        lang_toggle_title: "Switch Language (EN / ID)",

        // Hero Section
        hero_status: "Available for Roles, Internships & Collaborations",
        hero_subtitle: "ReyRiz • Full-Stack Developer, AI Enthusiast & Video Editor",
        hero_quote: "\"Crafting modern web apps, intelligent AI models, and dynamic visual media that bridge technological innovation with measurable real-world impact.\"",
        stat_projects_label: "Completed Projects",
        stat_roles_label: "Career Roles",
        stat_years_label: "Years Coding",
        btn_explore_projects: "Explore Projects",
        btn_copy_email: "Copy Email",
        btn_about_me: "About Me",
        badge_unhas: "B.S. Information Systems UNHAS",
        badge_dev: "Full-Stack & AI Dev",
        badge_brrads: "BRRADS • WMS Dev",
        badge_reza: "Reza Auditore • Editor",

        // Terminal CLI
        term_title: "bash - guest@reyriz:~",
        term_sys_init: "System Initialized & Ready:",
        term_affiliation: "Affiliation:",
        term_unhas_si: "Universitas Hasanuddin — Information Systems",
        term_prompt_hint: "Type <span style=\"color:var(--accent-red); font-weight:600;\">'help'</span> or click the command badges below to explore:",
        term_placeholder: "type a command (e.g. help)",
        term_hint_help: "Help",
        term_hint_about: "About Me",
        term_hint_skills: "Skills Matrix",
        term_hint_projects: "Projects Catalog",
        term_hint_exp: "Career Experience",
        term_hint_contact: "Contact Info",
        term_hint_clear: "Clear Output",

        // Bento Grid Overview
        bento_tag: "Overview",
        bento_title: "Core Capabilities & Highlights",
        bento_subtitle: "The technical pillars and academic background shaping my software engineering approach.",
        bento_bio: "Information Systems student at Hasanuddin University specializing in high-performance web applications, machine learning analytics, and test automation (QA).",
        bento_read_profile: "Read Full Biography & Education",
        bento_stat_projects_label: "Academic & Industry Projects",
        bento_stat_roles_val: "5+ Roles",
        bento_stat_roles_label: "BRRADS, UNHAS, Reza Auditore",
        bento_stat_unhas_val: "UNHAS",
        bento_stat_unhas_label: "B.S. Information Systems (2023 - 2027)",
        bento_stat_cert_val: "Certified",
        bento_stat_cert_label: "Web, AI, STQA & Lab Assistant",
        bento_stack_title: "Core Tech Stack",
        bento_view_matrix: "View Full Matrix →",
        bento_focus_title: "Current Focus",
        bento_focus_desc: "• Engineering enterprise web systems (WMS & E-Commerce)<br>• Exploring Machine Learning & Predictive AI models<br>• Automated Testing & Software Quality Assurance",

        // Video Showreel
        video_tag: "Creative Direction & Post-Production",
        video_title: "Videography & High-Retention Short-Form",
        video_subtitle: "Fast-paced vertical (9:16) video production built on strong 3-second hooks, dynamic sound design, and sharp pacing for creators and commercial brands.",
        metric_videos_label: "Short-Form Videos Produced",
        metric_hook_label: "First 3s Hook Optimization",
        metric_retention_label: "Average Retention Boost",
        metric_color_label: "Cinematic Color Grading",
        reel1_retention: "+38% Retention",
        philosophy_title: "Editing Philosophy: Hook in First 3 Seconds & Sound-Driven Flow",
        philosophy_desc: "Layered sound design, cinematic color grading, and precise rhythm matching keep viewers glued from the first second across YouTube Shorts, Instagram Reels, and TikTok.",

        // Projects Showcase
        featured_tag: "Showcase",
        featured_title: "Featured Projects & Case Studies",
        featured_subtitle: "A curated selection of software systems, machine learning research, and enterprise web solutions.",
        btn_explore_all_projects: "Explore All 12+ Projects",
        projects_page_tag: "Portfolio Catalog",
        projects_page_title: "Featured Projects & Innovations",
        projects_page_subtitle: "Browse my collection of web applications, AI research models, automated test suites, and mobile solutions.",
        filter_all: "All Projects",
        filter_web: "Web Dev",
        filter_mobile: "Mobile App",
        filter_ai: "Data & AI",
        filter_qa: "QA & Testing",
        search_placeholder: "Search projects by title, technology, or keywords...",
        search_info: "Showing selected projects from single source of truth",
        projects_modal_hint: "Click any project card to view technical specs, engineering challenges, live demos, and source code.",
        search_empty_title: "No matching projects found",
        search_empty_desc: "Try searching with different keywords or switch categories.",
        view_details: "View Details",
        back_to_projects: "Back to Projects",

        // Project Modal
        modal_tech: "Technologies & Tools",
        modal_highlights: "Key Highlights",
        modal_overview: "Project Overview",
        modal_challenges: "Engineering Challenges & Solutions",
        modal_repo: "View Repository",
        modal_demo: "Live Demo",
        modal_pdf: "Download PDF Document",

        // Career / Experience
        exp_tag: "Career & Experience",
        exp_title: "Professional Track Record",
        exp_subtitle: "Hands-on experience spanning enterprise web applications, multimedia leadership, and academic university laboratories.",
        btn_view_full_exp: "View Full Career Journey & UNHAS Lab Assistantships",
        exp_page_tag: "Career Journey",
        exp_page_title: "Experience & Academic Roles",
        exp_page_subtitle: "A timeline of industry software development, video production, campus IT infrastructure, and university lab assistantships.",
        bento_lead_title: "Lead Editor & IT",
        bento_lead_desc: "BRRADS & Reza Auditore: Directing video pipelines and internal IT workflows.",
        bento_lab_title: "UNHAS Lab Assistant",
        bento_lab_desc: "Object-Oriented Programming (OOP Java): Mentoring and evaluating undergraduate students.",
        bento_fullstack_title: "Full-Stack Dev",
        bento_fullstack_desc: "Warehouse Management System (WMS) & scalable web platforms with PHP/Laravel.",
        bento_academic_title: "Information Systems",
        bento_academic_desc: "UNHAS MIPA (2023 - 2027): Software Engineering, Data Science, and STQA.",
        linkedin_cta_title: "Want to see complete recommendations and endorsements?",
        linkedin_cta_desc: "Visit my LinkedIn profile for detailed professional recommendations and career updates.",
        btn_visit_linkedin: "Visit LinkedIn Profile",

        // Experience Gallery
        exp_gallery_title: "Visual Documentation & Work Highlights",
        exp_gallery_hint: "Click photo to enlarge",
        lightbox_close: "Close Preview",
        lightbox_counter: "Photo",

        // Certificates Page
        cert_page_tag: "Licenses & Credentials",
        cert_page_title: "Certifications & Credentials",
        cert_page_subtitle: "Verified certifications and professional credentials in software development, machine learning, QA automation, and university laboratory mentorship.",
        edu_badge: "Formal Education",
        edu_status: "2023 - 2027 (Expected)",
        edu_degree: "Bachelor of Science (B.S.) in Information Systems",
        edu_dept: "Universitas Hasanuddin (UNHAS) • Faculty of Mathematics and Natural Sciences",
        edu_desc: "Key coursework in Software Engineering, Advanced Database Systems, Object-Oriented Programming (Java), AI & Data Mining, and Software Quality Assurance (STQA).",
        cert_note: "<strong>Dynamic Architecture:</strong> New credentials from Dicoding, Coursera, or professional certifying bodies can be added seamlessly via <code style=\"color: var(--secondary); font-family: var(--font-mono);\">portfolio-data.js</code> without modifying this page template.",
        verify_cert: "Verify Credential",

        // About Page
        about_page_tag: "Biography & Vision",
        about_page_title: "About Me & Philosophy",
        about_page_subtitle: "Academic journey, engineering vision, and technical skill set.",
        about_core_principle_label: "Core Philosophy",
        about_core_principle_text: "\"Blending clean code logic with intuitive design sensibility to build fast, dependable, and genuinely useful digital solutions.\"",
        about_story_badge: "Background",
        about_story_sub: "Information Systems UNHAS",
        about_story_h3: "Bridging Academic Foundations with High-Impact Solutions",
        about_story_p1: "Hello! I am Fariz Idham Ramdhani, a software developer pursuing my Bachelor of Science (B.S.) in <strong>Information Systems at Hasanuddin University</strong>.",
        about_story_p2: "To me, programming is about solving tangible problems. From building an efficient <strong>Warehouse Management System (WMS)</strong> in industry to guiding fellow students as an <strong>OOP Java Lab Assistant</strong> at UNHAS and editing videos reaching millions of views—I bring dedication, curiosity, and high standards to every project.",
        about_edu_dept: "Bachelor of Science (B.S.) • Faculty of Mathematics & Natural Sciences - Information Systems",
        about_matrix_tag: "Technical Arsenal",
        about_matrix_title: "Skills Matrix & Technologies",
        about_matrix_subtitle: "Core languages, modern frameworks, and engineering tools in my daily workflow.",
        skills_grp1: "Programming Languages",
        skills_grp2: "Web & Mobile Stack",
        skills_grp3: "QA, AI & Creative Tools",

        // Contact Section & Footer
        contact_tag: "Let's Connect",
        contact_title: "Interested in Collaborating?",
        contact_subtitle: "I am always open to internship opportunities, software engineering roles, freelance projects, or discussions around modern tech and AI. Let's build something remarkable together!",
        btn_copy_email_long: "Copy Email (farizidhamr@gmail.com)",
        btn_open_email: "Open Email App",
        btn_connect_linkedin: "Connect on LinkedIn",
        footer_brand_desc: "Information Systems undergraduate at Hasanuddin University, Full-Stack Developer, AI Enthusiast, and Digital Multimedia Specialist.",
        footer_quick_links: "Quick Links",
        footer_connect: "Connect",
        footer_location: "Makassar, South Sulawesi, Indonesia",
        footer_copyright: "&copy; 2026 Fariz Idham Ramdhani (ReyRiz). All rights reserved.",

        // Toast Messages
        toast_sound_on: "Sound Effects: Enabled 🔊",
        toast_sound_off: "Sound Effects: Muted 🔇",
        toast_email_copied: "Email copied to clipboard! 📋",
        toast_lang_switched: "Language switched to English 🇬🇧"
    },

    id: {
        // Nav Links
        nav_home: "Beranda",
        nav_experience: "Pengalaman",
        nav_projects: "Proyek",
        nav_certificates: "Sertifikat",
        nav_about: "Tentang",
        nav_contact: "Kontak",
        nav_copy_email: "Salin Email",
        open_menu: "Buka Menu",
        close_menu: "Tutup Menu",
        sound_toggle_title: "Nyalakan / Matikan Efek Suara",
        lang_toggle_title: "Ganti Bahasa (ID / EN)",

        // Hero Section
        hero_status: "Terbuka untuk Karir, Magang & Kolaborasi Proyek",
        hero_subtitle: "ReyRiz • Full-Stack Developer, AI Enthusiast & Video Editor",
        hero_quote: "\"Fokus merancang aplikasi web modern, sistem cerdas, dan konten visual kreatif yang tidak hanya fungsional, tapi juga memberi dampak nyata.\"",
        stat_projects_label: "Proyek Selesai",
        stat_roles_label: "Peran Karir",
        stat_years_label: "Tahun Pengalaman",
        btn_explore_projects: "Jelajahi Proyek",
        btn_copy_email: "Salin Email",
        btn_about_me: "Tentang Saya",
        badge_unhas: "S1 Sistem Informasi UNHAS",
        badge_dev: "Full-Stack & AI Dev",
        badge_brrads: "BRRADS • WMS Dev",
        badge_reza: "Reza Auditore • Editor",

        // Terminal CLI
        term_title: "bash - guest@reyriz:~",
        term_sys_init: "Sistem Siap Digunakan:",
        term_affiliation: "Afiliasi:",
        term_unhas_si: "Universitas Hasanuddin — Sistem Informasi",
        term_prompt_hint: "Ketik <span style=\"color:var(--accent-red); font-weight:600;\">'help'</span> atau klik pintasan perintah di bawah untuk menjelajah:",
        term_placeholder: "ketik perintah (contoh: help)",
        term_hint_help: "Bantuan",
        term_hint_about: "Profil Saya",
        term_hint_skills: "Keahlian",
        term_hint_projects: "Katalog Proyek",
        term_hint_exp: "Pengalaman",
        term_hint_contact: "Kontak",
        term_hint_clear: "Bersihkan Layar",

        // Bento Grid Overview
        bento_tag: "Sekilas Profil",
        bento_title: "Keahlian & Rekam Jejak Utama",
        bento_subtitle: "Pilar keahlian teknis dan latar belakang akademik yang mendukung setiap solusi yang saya bangun.",
        bento_bio: "Mahasiswa Sistem Informasi Universitas Hasanuddin yang aktif mengembangkan web modern, riset kecerdasan buatan (AI), dan automasi pengujian kualitas software (QA).",
        bento_read_profile: "Baca Biografi Lengkap & Pendidikan",
        bento_stat_projects_label: "Proyek Akademik & Industri",
        bento_stat_roles_val: "5+ Peran",
        bento_stat_roles_label: "BRRADS, UNHAS, Reza Auditore",
        bento_stat_unhas_val: "UNHAS",
        bento_stat_unhas_label: "S1 Sistem Informasi (2023 - 2027)",
        bento_stat_cert_val: "Bersertifikat",
        bento_stat_cert_label: "Web, AI, STQA & Asisten Lab",
        bento_stack_title: "Tech Stack Andalan",
        bento_view_matrix: "Lihat Semua Matriks →",
        bento_focus_title: "Fokus Saat Ini",
        bento_focus_desc: "• Membangun platform web skala bisnis (WMS & E-Commerce)<br>• Riset model Machine Learning & Predictive AI<br>• Automasi & Pengujian Kualitas Perangkat Lunak (QA)",

        // Video Showreel
        video_tag: "Kreativitas & Produksi Video",
        video_title: "Videografi & Konten Pendek Beretensi Tinggi",
        video_subtitle: "Produksi video vertikal (9:16) berkecepatan tinggi dengan hook 3 detik pertama yang memikat, ritme audio dinamis, dan visual yang memancing interaksi.",
        metric_videos_label: "Video Pendek Diproduksi",
        metric_hook_label: "Optimasi Hook 3 Detik Pertama",
        metric_retention_label: "Peningkatan Retensi Rata-rata",
        metric_color_label: "Color Grading Sinematik",
        reel1_retention: "+38% Retensi",
        philosophy_title: "Prinsip Editing: Hook Kuat di 3 Detik Pertama & Ritme Audio yang Pas",
        philosophy_desc: "Memadukan sound design berlapis, grading warna sinematik, dan perpindahan adegan yang presisi agar penonton betah menonton sampai habis di YouTube Shorts, TikTok, maupun Reels.",

        // Projects Showcase
        featured_tag: "Karya Pilihan",
        featured_title: "Proyek & Studi Kasus Pilihan",
        featured_subtitle: "Koleksi proyek mulai dari aplikasi web skala industri, riset machine learning, hingga sistem otomatisasi yang pernah saya buat.",
        btn_explore_all_projects: "Lihat Seluruh 12+ Proyek",
        projects_page_tag: "Katalog Portofolio",
        projects_page_title: "Galeri Proyek & Inovasi",
        projects_page_subtitle: "Koleksi lengkap aplikasi web, riset machine learning, arsitektur automated testing, dan aplikasi mobile yang telah saya kembangkan.",
        filter_all: "Semua Proyek",
        filter_web: "Web Dev",
        filter_mobile: "Aplikasi Mobile",
        filter_ai: "Data & AI",
        filter_qa: "QA & Testing",
        search_placeholder: "Cari proyek berdasarkan nama, teknologi, atau kata kunci...",
        search_info: "Menampilkan proyek langsung dari data terverifikasi",
        projects_modal_hint: "Klik kartu proyek untuk melihat spesifikasi teknis, tantangan rekayasa, demo langsung, dan repositori kode.",
        search_empty_title: "Proyek tidak ditemukan",
        search_empty_desc: "Coba gunakan kata kunci lain atau pilih kategori yang berbeda.",
        view_details: "Lihat Detail",
        back_to_projects: "Kembali ke Proyek",

        // Project Modal
        modal_tech: "Teknologi & Tools",
        modal_highlights: "Sorotan Utama",
        modal_overview: "Ringkasan Proyek",
        modal_challenges: "Tantangan Teknis & Solusi",
        modal_repo: "Lihat Repositori",
        modal_demo: "Demo Langsung",
        modal_pdf: "Unduh Dokumen PDF",

        // Career / Experience
        exp_tag: "Karir & Pengalaman",
        exp_title: "Perjalanan & Pengalaman Kerja",
        exp_subtitle: "Rekam jejak nyata mulai dari pengembangan software industri, produksi multimedia, hingga asistensi laboratorium di kampus.",
        btn_view_full_exp: "Lihat Semua Riwayat Pekerjaan & Asisten Lab UNHAS",
        exp_page_tag: "Perjalanan Karir",
        exp_page_title: "Pengalaman Kerja & Akademik",
        exp_page_subtitle: "Perjalanan dari rekayasa perangkat lunak industri, arahan multimedia kreatif, hingga asistensi akademik di Universitas Hasanuddin.",
        bento_lead_title: "Lead Editor & IT",
        bento_lead_desc: "BRRADS & Reza Auditore: Mengelola produksi video dan dukungan sistem operasional.",
        bento_lab_title: "Asisten Lab UNHAS",
        bento_lab_desc: "Pemrograman Berorientasi Objek (OOP Java): Membimbing praktikum dan mengevaluasi tugas mahasiswa.",
        bento_fullstack_title: "Full-Stack Dev",
        bento_fullstack_desc: "Membangun Warehouse Management System (WMS) & platform web terukur berbasis Laravel.",
        bento_academic_title: "Sistem Informasi",
        bento_academic_desc: "UNHAS MIPA (2023 - 2027): Software Engineering, Sains Data, dan STQA.",
        linkedin_cta_title: "Ingin melihat rekomendasi dan rekam jejak lengkap?",
        linkedin_cta_desc: "Kunjungi profil LinkedIn saya untuk melihat rekomendasi profesional serta pembaruan karir terbaru.",
        btn_visit_linkedin: "Kunjungi Profil LinkedIn",

        // Experience Gallery
        exp_gallery_title: "Dokumentasi & Galeri Kegiatan",
        exp_gallery_hint: "Klik foto untuk memperbesar",
        lightbox_close: "Tutup Pratinjau",
        lightbox_counter: "Foto",

        // Certificates Page
        cert_page_tag: "Lisensi & Kredensial",
        cert_page_title: "Sertifikasi & Kredensial",
        cert_page_subtitle: "Kumpulan sertifikasi resmi dan pengakuan kompetensi di bidang software development, AI, software quality assurance, dan pengalaman asistensi lab UNHAS.",
        edu_badge: "Pendidikan Formal",
        edu_status: "2023 - 2027 (Aktif)",
        edu_degree: "Sarjana Komputer (S.Kom / B.S.) - Sistem Informasi",
        edu_dept: "Universitas Hasanuddin (UNHAS) • Fakultas MIPA, Departemen Matematika",
        edu_desc: "Fokus pada Software Engineering, Basis Data Lanjutan, Pemrograman Berorientasi Objek (Java), Kecerdasan Buatan & Data Mining, serta Kualitas & Pengujian Perangkat Lunak.",
        cert_note: "<strong>Sistem Fleksibel:</strong> Sertifikat baru dari Dicoding, Coursera, atau BNSP dapat ditambahkan kapan saja melalui <code style=\"color: var(--secondary); font-family: var(--font-mono);\">portfolio-data.js</code> tanpa perlu mengubah file HTML ini.",
        verify_cert: "Verifikasi Kredensial",

        // About Page
        about_page_tag: "Biografi & Visi",
        about_page_title: "Tentang Saya & Filosofi",
        about_page_subtitle: "Perjalanan belajar, prinsip berkarya, serta keterampilan teknis yang saya kuasai.",
        about_core_principle_label: "Prinsip Utama",
        about_core_principle_text: "\"Memadukan logika kode yang bersih dengan rasa desain yang intuitif untuk menghasilkan sistem yang cepat, stabil, dan solutif bagi pengguna.\"",
        about_story_badge: "Latar Belakang",
        about_story_sub: "Sistem Informasi UNHAS",
        about_story_h3: "Menghubungkan Teori Akademik dengan Solusi Nyata",
        about_story_p1: "Halo! Saya Fariz Idham Ramdhani, seorang developer dan mahasiswa Sistem Informasi di <strong>Fakultas MIPA, Universitas Hasanuddin</strong>.",
        about_story_p2: "Bagi saya, coding bukan sekadar menulis sintaks, melainkan seni memecahkan masalah. Mulai dari merancang <strong>Warehouse Management System (WMS)</strong> di industri, membimbing rekan mahasiswa sebagai <strong>Asisten Lab OOP Java</strong> di UNHAS, hingga mengedit video kreator yang ditonton jutaan orang—saya selalu berupaya memberikan hasil yang rapi, bermanfaat, dan berstandar tinggi.",
        about_edu_dept: "Sarjana Komputer (S.Kom / B.S.) • FMIPA Departemen Matematika - Sistem Informasi",
        about_matrix_tag: "Matriks Keahlian",
        about_matrix_title: "Matriks Keahlian & Teknologi",
        about_matrix_subtitle: "Bahasa pemrograman, framework, dan tools yang saya gunakan dalam pengembangan harian.",
        skills_grp1: "Bahasa Pemrograman",
        skills_grp2: "Web & Mobile Stack",
        skills_grp3: "QA, AI & Creative Tools",

        // Contact Section & Footer
        contact_tag: "Mari Terhubung",
        contact_title: "Tertarik untuk Berkolaborasi?",
        contact_subtitle: "Saya selalu terbuka untuk peluang magang, posisi software engineer, proyek freelance, atau diskusi santai seputar teknologi dan AI. Mari wujudkan ide Anda bersama!",
        btn_copy_email_long: "Salin Email (farizidhamr@gmail.com)",
        btn_open_email: "Buka Aplikasi Email",
        btn_connect_linkedin: "Terhubung di LinkedIn",
        footer_brand_desc: "Mahasiswa Sistem Informasi Universitas Hasanuddin, Full-Stack Developer, AI Enthusiast, dan Editor Multimedia.",
        footer_quick_links: "Navigasi Cepat",
        footer_connect: "Terhubung",
        footer_location: "Makassar, Sulawesi Selatan, Indonesia",
        footer_copyright: "&copy; 2026 Fariz Idham Ramdhani (ReyRiz). Hak cipta dilindungi.",

        // Toast Messages
        toast_sound_on: "Efek Suara: Aktif 🔊",
        toast_sound_off: "Efek Suara: Dibisukan 🔇",
        toast_email_copied: "Email berhasil disalin ke clipboard! 📋",
        toast_lang_switched: "Bahasa diubah ke Bahasa Indonesia 🇮🇩"
    }
};

/**
 * Get current active language ('en' | 'id')
 */
function getCurrentLang() {
    return localStorage.getItem(I18N_STORAGE_KEY) || 'en';
}

/**
 * Get localized string by key
 */
function t(key) {
    const lang = getCurrentLang();
    if (I18N_DICT[lang] && I18N_DICT[lang][key] !== undefined) {
        return I18N_DICT[lang][key];
    }
    // Fallback to EN if missing in current lang
    if (I18N_DICT.en && I18N_DICT.en[key] !== undefined) {
        return I18N_DICT.en[key];
    }
    return key;
}

/**
 * Update all DOM elements with data-i18n attributes
 */
function applyTranslations(lang) {
    if (!I18N_DICT[lang]) lang = 'en';

    // 1. Update HTML lang attribute
    document.documentElement.lang = lang;

    // 2. Translate text/HTML contents
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (I18N_DICT[lang] && I18N_DICT[lang][key] !== undefined) {
            el.innerHTML = I18N_DICT[lang][key];
        }
    });

    // 3. Translate placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (I18N_DICT[lang] && I18N_DICT[lang][key] !== undefined) {
            el.setAttribute('placeholder', I18N_DICT[lang][key]);
        }
    });

    // 4. Translate title attributes
    document.querySelectorAll('[data-i18n-title]').forEach(el => {
        const key = el.getAttribute('data-i18n-title');
        if (I18N_DICT[lang] && I18N_DICT[lang][key] !== undefined) {
            el.setAttribute('title', I18N_DICT[lang][key]);
        }
    });

    // 5. Update Desktop Language Buttons
    document.querySelectorAll('.lang-toggle-btn').forEach(btn => {
        const enSpan = btn.querySelector('.lang-opt-en');
        const idSpan = btn.querySelector('.lang-opt-id');
        if (enSpan && idSpan) {
            if (lang === 'id') {
                enSpan.classList.remove('active');
                idSpan.classList.add('active');
            } else {
                enSpan.classList.add('active');
                idSpan.classList.remove('active');
            }
        }
    });

    // 6. Update Mobile Drawer Language Buttons
    document.querySelectorAll('.mobile-lang-btn').forEach(btn => {
        const btnLang = btn.getAttribute('data-lang');
        if (btnLang === lang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

/**
 * Set and switch active language
 */
function setLanguage(lang, triggerToast = true) {
    if (lang !== 'en' && lang !== 'id') lang = 'en';
    localStorage.setItem(I18N_STORAGE_KEY, lang);
    applyTranslations(lang);

    // Dispatch global event for components (terminal, dynamic cards, main.js) to re-render
    window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));

    if (triggerToast && typeof showToast === 'function') {
        const msg = lang === 'id' ? I18N_DICT.id.toast_lang_switched : I18N_DICT.en.toast_lang_switched;
        showToast(msg, 'fas fa-globe');
    }
}

/**
 * Toggle between 'en' and 'id'
 */
function toggleLanguage() {
    const nextLang = getCurrentLang() === 'en' ? 'id' : 'en';
    if (typeof playSciFiSound === 'function') {
        playSciFiSound(720, 0.06);
    }
    setLanguage(nextLang, true);
}

// Automatically apply saved language upon DOM load
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = getCurrentLang();
    applyTranslations(savedLang);

    // Bind click events on desktop toggles
    document.querySelectorAll('.lang-toggle-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            toggleLanguage();
        });
    });

    // Bind click events on mobile drawer language buttons
    document.querySelectorAll('.mobile-lang-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const targetLang = btn.getAttribute('data-lang');
            if (targetLang && targetLang !== getCurrentLang()) {
                if (typeof playSciFiSound === 'function') {
                    playSciFiSound(720, 0.06);
                }
                setLanguage(targetLang, true);
            }
        });
    });
});
