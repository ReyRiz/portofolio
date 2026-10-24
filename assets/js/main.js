/**
 * ==============================================================================
 * PORTFOLIO MASTER INTERACTIVITY & ANIMATION ENGINE
 * ==============================================================================
 * Fariz Idham Ramdhani (ReyRiz)
 * Features: Mouse Spotlight, Terminal CLI, Web Audio FX, Modals, Filters, Toast
 * ==============================================================================
 */

// Permanent Light Theme: Clean any legacy dark mode from browser storage
localStorage.removeItem('fariz_theme');
document.documentElement.removeAttribute('data-theme');

document.addEventListener('DOMContentLoaded', () => {
    initScrollProgress();
    initSpotlightCards();
    initNavbarAndMobileMenu();
    initAudioEngine();
    initTerminalEngine();
    initModalDrawer();
    initCopyEmailButtons();
    initReelCards();
    initPageTransitions();
    autoRenderPageContent();
});

// ------------------------------------------------------------------------------
// 1. SCROLL PROGRESS BAR & NAVBAR SCROLL BEHAVIOR
// ------------------------------------------------------------------------------
function initScrollProgress() {
    let progressBar = document.querySelector('.scroll-progress-bar');
    if (!progressBar) {
        progressBar = document.createElement('div');
        progressBar.className = 'scroll-progress-bar';
        document.body.prepend(progressBar);
    }

    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
        progressBar.style.width = `${progress}%`;
    }, { passive: true });
}

// ------------------------------------------------------------------------------
// 2. MOUSE SPOTLIGHT GLOW EFFECT (CARDS)
// ------------------------------------------------------------------------------
function initSpotlightCards() {
    const updateSpotlight = (card, e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
    };

    document.querySelectorAll('.spotlight-card').forEach(card => {
        card.addEventListener('mousemove', (e) => updateSpotlight(card, e));
    });

    // Also observe dynamically added cards
    const observer = new MutationObserver(() => {
        document.querySelectorAll('.spotlight-card').forEach(card => {
            if (!card.dataset.spotlightInit) {
                card.dataset.spotlightInit = 'true';
                card.addEventListener('mousemove', (e) => updateSpotlight(card, e));
            }
        });
    });

    observer.observe(document.body, { childList: true, subtree: true });
}

// ------------------------------------------------------------------------------
// 3. FLOATING GLASS NAVBAR & MOBILE DRAWER
// ------------------------------------------------------------------------------
function initNavbarAndMobileMenu() {
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const mobileDrawer = document.querySelector('.mobile-nav-drawer');

    if (mobileBtn && mobileDrawer) {
        mobileBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            mobileDrawer.classList.toggle('open');
            const icon = mobileBtn.querySelector('i');
            if (icon) {
                icon.className = mobileDrawer.classList.contains('open') ? 'fas fa-times' : 'fas fa-bars';
            }
            playSciFiSound(600, 0.05);
        });

        document.addEventListener('click', (e) => {
            if (!mobileDrawer.contains(e.target) && !mobileBtn.contains(e.target)) {
                mobileDrawer.classList.remove('open');
                const icon = mobileBtn.querySelector('i');
                if (icon) icon.className = 'fas fa-bars';
            }
        });
    }

    // Set Active Link indicator based on current page
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-link').forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPath || (currentPath === '' && href === 'index.html')) {
            link.classList.add('active');
        } else if (href && !href.includes('#') && href !== currentPath) {
            link.classList.remove('active');
        }
    });
}

// ------------------------------------------------------------------------------
// 4. FUTURISTIC WEB AUDIO SYNTHESIZER (NO EXTERNAL FILES NEEDED)
// ------------------------------------------------------------------------------
let audioCtx = null;
let soundEnabled = localStorage.getItem('portfolio_sound_fx') !== 'false';

function initAudioEngine() {
    const soundToggleBtn = document.querySelector('.sound-toggle-btn');
    if (soundToggleBtn) {
        updateSoundIcon(soundToggleBtn);
        soundToggleBtn.addEventListener('click', () => {
            soundEnabled = !soundEnabled;
            localStorage.setItem('portfolio_sound_fx', soundEnabled);
            updateSoundIcon(soundToggleBtn);
            if (soundEnabled) {
                playSciFiSound(880, 0.08);
                showToast("Sound Effects: Aktif 🔊", "fas fa-volume-up");
            } else {
                showToast("Sound Effects: Senyap 🔇", "fas fa-volume-mute");
            }
        });
    }
}

function updateSoundIcon(btn) {
    const icon = btn.querySelector('i');
    if (icon) {
        icon.className = soundEnabled ? 'fas fa-volume-up' : 'fas fa-volume-mute';
    }
}

function playSciFiSound(freq = 600, duration = 0.06, type = 'sine') {
    if (!soundEnabled) return;
    try {
        if (!audioCtx) {
            audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        }
        if (audioCtx.state === 'suspended') {
            audioCtx.resume();
        }
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();

        osc.type = type;
        osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(freq * 1.5, audioCtx.currentTime + duration);

        gain.gain.setValueAtTime(0.05, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);

        osc.connect(gain);
        gain.connect(audioCtx.destination);

        osc.start();
        osc.stop(audioCtx.currentTime + duration);
    } catch (err) {
        // AudioContext restricted before gesture - silently ignore
    }
}

// ------------------------------------------------------------------------------
// 5. INTERACTIVE DEVELOPER TERMINAL / CLI
// ------------------------------------------------------------------------------
function initTerminalEngine() {
    const terminalInput = document.getElementById('terminal-input');
    const terminalBody = document.getElementById('terminal-body');
    const hintSpans = document.querySelectorAll('.terminal-commands-hint span');

    if (!terminalInput || !terminalBody) return;

    const printOutput = (html, className = 'terminal-log') => {
        const div = document.createElement('div');
        div.className = className;
        div.innerHTML = html;
        terminalBody.insertBefore(div, terminalInput.parentElement);
        terminalBody.scrollTop = terminalBody.scrollHeight;
    };

    const processCommand = (rawCmd) => {
        const cmd = rawCmd.trim().toLowerCase();
        playSciFiSound(750, 0.05);

        // Echo command
        printOutput(`<span class="terminal-prompt">guest@reyriz:~$</span> ${rawCmd}`, 'terminal-log log-muted');

        switch (cmd) {
            case 'help':
                printOutput(`
                    <div style="margin: 4px 0;">
                        <span class="log-cyan">Perintah yang tersedia:</span><br>
                        ▹ <strong class="log-purple">about</strong>    : Informasi singkat Fariz Idham<br>
                        ▹ <strong class="log-purple">skills</strong>   : Core tech stack & tools<br>
                        ▹ <strong class="log-purple">projects</strong> : Proyek unggulan terkini<br>
                        ▹ <strong class="log-purple">exp</strong>      : Riwayat karir & pekerjaan<br>
                        ▹ <strong class="log-purple">contact</strong>  : Info email & sosial media<br>
                        ▹ <strong class="log-purple">clear</strong>    : Bersihkan layar terminal<br>
                        ▹ <strong class="log-purple">github</strong>   : Buka profil GitHub ReyRiz
                    </div>
                `);
                break;
            case 'about':
                printOutput(`
                    <span class="log-success">👤 Fariz Idham Ramdhani (ReyRiz)</span><br>
                    Mahasiswa S1 Sistem Informasi Universitas Hasanuddin (UNHAS).<br>
                    Fokus: Full-Stack Web Development, Data Science/AI, & Creative Multimedia.
                `);
                break;
            case 'skills':
                printOutput(`
                    <span class="log-cyan">⚡ Core Stack:</span><br>
                    • Web: React, Laravel, Node.js, PHP, HTML5/CSS3<br>
                    • Data/AI: Python, Pandas, Time Series Machine Learning, Web Scraping<br>
                    • Testing: Selenium, Cypress, Postman, JUnit<br>
                    • Creative: Adobe Premiere Pro, UI/UX (Figma)
                `);
                break;
            case 'projects':
                printOutput(`
                    <span class="log-cyan">🚀 Featured Projects:</span><br>
                    1. <a href="projects.html" style="color:#ffffff; text-decoration:underline; font-weight:600;">EnergyPulse</a> - Sistem Prediksi Konsumsi Listrik AI<br>
                    2. <a href="projects.html" style="color:#ffffff; text-decoration:underline; font-weight:600;">TokoLingu</a> - E-Commerce Pembelajaran Bahasa (Laravel)<br>
                    3. <a href="projects.html" style="color:#ffffff; text-decoration:underline; font-weight:600;">WhatsApp Clone</a> - Real-time Android Chat<br>
                    4. <a href="projects.html" style="color:#ffffff; text-decoration:underline; font-weight:600;">STQA Automation Suite</a> - Selenium & Cypress<br>
                    <span class="log-muted">Ketik 'projects' di navbar untuk melihat galeri lengkap.</span>
                `);
                break;
            case 'exp':
                printOutput(`
                    <span class="log-cyan">💼 Career Highlights:</span><br>
                    • <strong>BRRADS Industries</strong> - Editor & IT Staff | Web Dev (WMS)<br>
                    • <strong>Reza Auditore</strong> - Lead Video Editor<br>
                    • <strong>UNHAS</strong> - Computer Lab Assistant (OOP Java) & IT Support
                `);
                break;
            case 'contact':
                printOutput(`
                    <span class="log-cyan">📬 Get in Touch:</span><br>
                    • Email: <a href="mailto:farizidhamr@gmail.com" class="log-purple">farizidhamr@gmail.com</a><br>
                    • LinkedIn: <a href="https://linkedin.com/in/farizidham" target="_blank" class="log-purple">linkedin.com/in/farizidham</a><br>
                    • GitHub: <a href="https://github.com/ReyRiz" target="_blank" class="log-purple">github.com/ReyRiz</a>
                `);
                break;
            case 'clear':
                const logs = terminalBody.querySelectorAll('.terminal-log');
                logs.forEach(l => l.remove());
                break;
            case 'github':
                printOutput(`Membuka GitHub: https://github.com/ReyRiz...`, 'log-cyan');
                window.open('https://github.com/ReyRiz', '_blank');
                break;
            case 'sudo':
            case 'sudo su':
                printOutput(`Access granted. Welcome, Commander Fariz! ⚡`, 'log-success');
                break;
            case '':
                break;
            default:
                printOutput(`Perintah tidak dikenal: "<strong>${cmd}</strong>". Ketik <span class="log-cyan">'help'</span> untuk bantuan.`, 'log-purple');
                break;
        }
    };

    terminalInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            const val = terminalInput.value;
            processCommand(val);
            terminalInput.value = '';
        }
    });

    hintSpans.forEach(span => {
        span.addEventListener('click', () => {
            const cmd = span.textContent.trim();
            terminalInput.value = cmd;
            processCommand(cmd);
            terminalInput.value = '';
        });
    });
}

// ------------------------------------------------------------------------------
// 6. GLOBAL PROJECT & CERTIFICATE MODAL DRAWER
// ------------------------------------------------------------------------------
function initModalDrawer() {
    let overlay = document.querySelector('.modal-overlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.className = 'modal-overlay';
        overlay.innerHTML = `
            <div class="modal-window">
                <button class="modal-close-btn" aria-label="Tutup Modal"><i class="fas fa-times"></i></button>
                <div class="modal-content-target"></div>
            </div>
        `;
        document.body.appendChild(overlay);
    }

    const closeBtn = overlay.querySelector('.modal-close-btn');
    const closeAction = () => {
        overlay.classList.remove('active');
        document.body.style.overflow = '';
        playSciFiSound(450, 0.05);
    };

    if (closeBtn) closeBtn.addEventListener('click', closeAction);
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) closeAction();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && overlay.classList.contains('active')) {
            closeAction();
        }
    });
}

function openProjectModal(projectId) {
    if (typeof projectsData === 'undefined') return;
    const project = projectsData.find(p => p.id === projectId);
    if (!project) return;

    playSciFiSound(700, 0.08);

    const overlay = document.querySelector('.modal-overlay');
    const target = overlay.querySelector('.modal-content-target');

    const heroImg = resolveAssetPath(project.thumbnail || (project.images && project.images[0]));
    const tagsHtml = (project.tags || []).map(t => `<span class="project-tag-mini">${t}</span>`).join('');
    const highlightsHtml = (project.highlights || []).map(h => `<li>▹ ${h}</li>`).join('');

    target.innerHTML = `
        <img src="${heroImg}" alt="${project.title}" class="modal-hero-image" onerror="this.src='https://placehold.co/800x400/10172a/6366f1?text=${encodeURIComponent(project.title)}'">
        <div class="modal-content-body">
            <div class="modal-tag-row">
                <span class="project-category-badge">${project.categoryName || project.category}</span>
                ${project.year ? `<span class="cert-year-badge">${project.year}</span>` : ''}
            </div>
            <h3 class="modal-title">${project.title}</h3>
            <p class="section-subtitle">${project.description}</p>
            
            <div class="modal-section-block">
                <h4><i class="fas fa-layer-group"></i> Teknologi & Tools</h4>
                <div class="project-tags-wrap" style="margin-top: 8px;">${tagsHtml}</div>
            </div>

            ${project.highlights && project.highlights.length ? `
                <div class="modal-section-block">
                    <h4><i class="fas fa-star"></i> Poin Unggulan</h4>
                    <ul style="display:flex; flex-direction:column; gap:8px; color:var(--text-highlight); font-size:0.92rem; margin-top:8px;">
                        ${highlightsHtml}
                    </ul>
                </div>
            ` : ''}

            ${project.fullOverview ? `
                <div class="modal-section-block">
                    <h4><i class="fas fa-file-alt"></i> Deskripsi Proyek</h4>
                    <div style="color:var(--text-secondary); line-height:1.7; font-size:0.92rem; margin-top:8px;">
                        ${project.fullOverview}
                    </div>
                </div>
            ` : ''}

            ${project.challenges ? `
                <div class="modal-section-block">
                    <h4><i class="fas fa-lightbulb"></i> Tantangan & Solusi Rekayasa</h4>
                    <p style="color:var(--text-secondary); line-height:1.7; font-size:0.92rem; margin-top:8px;">
                        ${project.challenges}
                    </p>
                </div>
            ` : ''}

            <div class="modal-actions-bar">
                ${project.githubLink ? `
                    <a href="${project.githubLink}" target="_blank" class="btn btn-primary">
                        <i class="fab fa-github"></i> Buka Repository
                    </a>
                ` : ''}
                ${project.demoLink ? `
                    <a href="${project.demoLink}" target="_blank" class="btn btn-secondary">
                        <i class="fas fa-external-link-alt"></i> Live Demo
                    </a>
                ` : ''}
                ${project.downloadLink ? `
                    <a href="${resolveAssetPath(project.downloadLink)}" target="_blank" class="btn btn-secondary">
                        <i class="fas fa-file-pdf"></i> Unduh Dokumen (PDF)
                    </a>
                ` : ''}
            </div>
        </div>
    `;

    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// ------------------------------------------------------------------------------
// 7. TOAST NOTIFICATIONS & 1-CLICK EMAIL COPY
// ------------------------------------------------------------------------------
function showToast(message, iconClass = 'fas fa-check-circle') {
    let container = document.querySelector('.toast-container');
    if (!container) {
        container = document.createElement('div');
        container.className = 'toast-container';
        document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = 'toast-message';
    toast.innerHTML = `<i class="${iconClass}"></i><span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
        toast.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(15px)';
        setTimeout(() => toast.remove(), 400);
    }, 3200);
}

function initCopyEmailButtons() {
    document.querySelectorAll('.copy-email-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const email = (typeof personalInfo !== 'undefined' && personalInfo.email) ? personalInfo.email : 'farizidhamr@gmail.com';
            navigator.clipboard.writeText(email).then(() => {
                playSciFiSound(800, 0.08);
                showToast(`Email ${email} tersalin ke clipboard! 📋`, 'fas fa-copy');
            }).catch(() => {
                showToast(`Email: ${email}`, 'fas fa-envelope');
            });
        });
    });
}

function initReelCards() {
    document.querySelectorAll('.reel-card').forEach(card => {
        card.addEventListener('click', () => {
            playSciFiSound(700, 0.08);
            const title = card.querySelector('.reel-title')?.textContent?.trim() || 'Video Reel';
            const client = card.querySelector('.reel-tag-client')?.textContent?.trim() || 'Showreel';
            showToast(`🎬 ${client} — "${title}"`, 'fas fa-play-circle');
        });
    });
}

// ------------------------------------------------------------------------------
// 8. SMOOTH PAGE TRANSITIONS
// ------------------------------------------------------------------------------
function initPageTransitions() {
    document.querySelectorAll('a').forEach(anchor => {
        const href = anchor.getAttribute('href');
        if (!href) return;

        // Skip anchors, mailto, external, target=_blank
        if (href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('javascript:') || anchor.target === '_blank' || href.startsWith('http')) {
            return;
        }

        anchor.addEventListener('click', (e) => {
            // Check if same page
            const current = window.location.pathname.split('/').pop() || 'index.html';
            if (href === current) return;

            e.preventDefault();
            playSciFiSound(500, 0.05);

            const wrapper = document.querySelector('.page-wrapper') || document.body;
            wrapper.style.transition = 'opacity 0.25s ease, transform 0.25s ease';
            wrapper.style.opacity = '0';
            wrapper.style.transform = 'translateY(-10px)';

            setTimeout(() => {
                window.location.href = href;
            }, 260);
        });
    });
}

// ------------------------------------------------------------------------------
// 9. DYNAMIC CONTENT AUTO-RENDERERS
// ------------------------------------------------------------------------------
function autoRenderPageContent() {
    // 1. Featured Projects on Home Page
    const featuredProjectsContainer = document.getElementById('home-featured-projects');
    if (featuredProjectsContainer && typeof projectsData !== 'undefined') {
        renderFeaturedProjects(featuredProjectsContainer);
    }

    // 2. Full Projects Page Gallery & Filters
    const fullProjectsContainer = document.getElementById('full-projects-container');
    if (fullProjectsContainer && typeof projectsData !== 'undefined') {
        setupFullProjectsGallery(fullProjectsContainer);
    }

    // 3. Experience Timeline on experience.html
    const experienceTimelineContainer = document.getElementById('experience-timeline-container');
    if (experienceTimelineContainer && typeof experiencesData !== 'undefined') {
        renderExperienceTimeline(experienceTimelineContainer);
    }

    // 4. Certificates Grid on certificates.html
    const certificatesGridContainer = document.getElementById('certificates-grid-container');
    if (certificatesGridContainer && typeof certificatesData !== 'undefined') {
        renderCertificates(certificatesGridContainer);
    }

    // 5. Open Project Modal if ?id= is in URL query
    if (typeof projectsData !== 'undefined') {
        const urlParams = new URLSearchParams(window.location.search);
        const queryId = urlParams.get('id');
        if (queryId) {
            const matched = projectsData.find(p => String(p.id).toLowerCase() === String(queryId).toLowerCase());
            if (matched) {
                setTimeout(() => openProjectModal(matched.id), 300);
            }
        }
    }
}

// Render Featured Projects on Home Page
function renderFeaturedProjects(container) {
    const featured = projectsData.filter(p => p.featured).slice(0, 3);
    container.innerHTML = featured.map(project => `
        <div class="project-card spotlight-card" onclick="openProjectModal('${project.id}')">
            <div class="project-thumb-container">
                <img src="${resolveAssetPath(project.thumbnail)}" alt="${project.title}" class="project-thumb" onerror="this.src='https://placehold.co/600x350/10172a/6366f1?text=${encodeURIComponent(project.title)}'">
                <span class="project-category-badge">${project.categoryName || project.category}</span>
                <span class="project-featured-badge"><i class="fas fa-bolt"></i> Featured</span>
            </div>
            <div class="project-body">
                <div>
                    <h3 class="project-title">${project.title}</h3>
                    <p class="project-desc">${project.description}</p>
                </div>
                <div>
                    <div class="project-tags-wrap">
                        ${(project.tags || []).slice(0, 4).map(t => `<span class="project-tag-mini">${t}</span>`).join('')}
                    </div>
                    <div class="project-card-footer">
                        <span class="project-view-cta">Lihat Detail <i class="fas fa-arrow-right"></i></span>
                        ${project.githubLink ? `<i class="fab fa-github" style="color:var(--text-muted);"></i>` : ''}
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

// Render Full Projects Page with Live Filter & Search
function setupFullProjectsGallery(container) {
    let currentCategory = 'all';
    let searchQuery = '';

    const render = () => {
        const filtered = projectsData.filter(project => {
            const matchCategory = currentCategory === 'all' || project.category === currentCategory;
            const matchSearch = searchQuery === '' || 
                project.title.toLowerCase().includes(searchQuery) ||
                project.description.toLowerCase().includes(searchQuery) ||
                (project.tags && project.tags.some(t => t.toLowerCase().includes(searchQuery)));
            return matchCategory && matchSearch;
        });

        if (filtered.length === 0) {
            container.innerHTML = `
                <div style="grid-column: 1/-1; text-align: center; padding: 60px 20px; color: var(--text-muted);">
                    <i class="fas fa-search" style="font-size: 2.5rem; margin-bottom: 16px; color: var(--secondary);"></i>
                    <h3>Tidak ada proyek yang sesuai</h3>
                    <p style="margin-top: 8px;">Coba gunakan kata kunci pencarian atau kategori lain.</p>
                </div>
            `;
            return;
        }

        container.innerHTML = filtered.map(project => `
            <div class="project-card spotlight-card" onclick="openProjectModal('${project.id}')">
                <div class="project-thumb-container">
                    <img src="${resolveAssetPath(project.thumbnail)}" alt="${project.title}" class="project-thumb" onerror="this.src='https://placehold.co/600x350/10172a/6366f1?text=${encodeURIComponent(project.title)}'">
                    <span class="project-category-badge">${project.categoryName || project.category}</span>
                    ${project.featured ? `<span class="project-featured-badge"><i class="fas fa-bolt"></i> Featured</span>` : ''}
                </div>
                <div class="project-body">
                    <div>
                        <h3 class="project-title">${project.title}</h3>
                        <p class="project-desc">${project.description}</p>
                    </div>
                    <div>
                        <div class="project-tags-wrap">
                            ${(project.tags || []).slice(0, 4).map(t => `<span class="project-tag-mini">${t}</span>`).join('')}
                        </div>
                        <div class="project-card-footer">
                            <span class="project-view-cta">Buka Detail <i class="fas fa-arrow-right"></i></span>
                            ${project.githubLink ? `<i class="fab fa-github" style="color:var(--text-muted);" title="GitHub Available"></i>` : ''}
                        </div>
                    </div>
                </div>
            </div>
        `).join('');
    };

    render();

    // Category Buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentCategory = btn.dataset.category || 'all';
            playSciFiSound(620, 0.05);
            render();
        });
    });

    // Search Input
    const searchInput = document.getElementById('project-search-input');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            searchQuery = e.target.value.trim().toLowerCase();
            render();
        });
    }
}

// Render Experience Timeline from LinkedIn Data
function renderExperienceTimeline(container) {
    container.innerHTML = experiencesData.map(exp => `
        <div class="timeline-company-block">
            <div class="timeline-node"></div>
            <div class="timeline-card spotlight-card">
                <div class="company-header">
                    <div class="company-title-wrap">
                        <div class="company-icon-box">
                            <i class="${exp.companyLogo || 'fas fa-briefcase'}"></i>
                        </div>
                        <div>
                            <h3 class="company-name">${exp.company}</h3>
                            <div class="company-meta">
                                <i class="fas fa-map-marker-alt"></i> ${exp.location}
                            </div>
                        </div>
                    </div>
                    <span class="company-badge-duration"><i class="far fa-clock"></i> Total ${exp.totalDuration}</span>
                </div>

                <div class="company-roles-list">
                    ${exp.roles.map(role => `
                        <div class="role-item">
                            <div class="role-dot"></div>
                            <h4 class="role-title">${role.roleTitle}</h4>
                            <div class="role-sub-meta">
                                <span class="role-type-badge">${role.employmentType}</span>
                                <span><i class="far fa-calendar-alt"></i> ${role.period} · ${role.duration}</span>
                                <span><i class="fas fa-building"></i> ${role.workModel}</span>
                            </div>
                            <p class="role-desc">${role.description}</p>

                            ${role.keyAchievements && role.keyAchievements.length ? `
                                <ul class="role-achievements-list">
                                    ${role.keyAchievements.map(ach => `<li>${ach}</li>`).join('')}
                                </ul>
                            ` : ''}

                            <div class="role-skills-wrap">
                                ${(role.skills || []).map(s => `<span class="skill-tag-pill">${s}</span>`).join('')}
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `).join('');
}

// Render Certificates Grid
function renderCertificates(container) {
    container.innerHTML = certificatesData.map(cert => `
        <div class="cert-card spotlight-card">
            <div>
                <div class="cert-header">
                    <div class="cert-icon-wrap">
                        <i class="fas fa-certificate"></i>
                    </div>
                    <span class="cert-year-badge">${cert.issueDate}</span>
                </div>
                <h3 class="cert-title">${cert.title}</h3>
                <div class="cert-issuer">${cert.issuer}</div>
                <p class="cert-desc">${cert.description}</p>
                <div class="project-tags-wrap" style="margin-bottom: 16px;">
                    ${(cert.skills || []).map(s => `<span class="project-tag-mini">${s}</span>`).join('')}
                </div>
            </div>
            <div class="cert-footer">
                <span style="font-family: var(--font-mono); font-size: 0.78rem; color: var(--text-muted);">
                    ID: ${cert.credentialId || 'Verified'}
                </span>
                ${cert.credentialUrl ? `
                    <a href="${cert.credentialUrl}" target="_blank" class="cert-verify-btn">
                        Verifikasi <i class="fas fa-external-link-alt"></i>
                    </a>
                ` : ''}
            </div>
        </div>
    `).join('');
}
