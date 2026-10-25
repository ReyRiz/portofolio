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

    window.addEventListener('languageChanged', () => {
        autoRenderPageContent();
    });
});

// Localization data helper
function getField(obj, field) {
    if (!obj) return '';
    const isId = typeof getCurrentLang === 'function' && getCurrentLang() === 'id';
    if (isId && obj[field + '_id'] !== undefined) {
        return obj[field + '_id'];
    }
    return obj[field] !== undefined ? obj[field] : '';
}

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
                showToast("Sound Effects: Enabled 🔊", "fas fa-volume-up");
            } else {
                showToast("Sound Effects: Muted 🔇", "fas fa-volume-mute");
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
                        <span class="log-cyan">Available commands:</span><br>
                        ▹ <strong class="log-purple">about</strong>    : Quick bio & introduction<br>
                        ▹ <strong class="log-purple">skills</strong>   : Core tech stack & tools<br>
                        ▹ <strong class="log-purple">projects</strong> : Featured engineering projects<br>
                        ▹ <strong class="log-purple">exp</strong>      : Work history & career roles<br>
                        ▹ <strong class="log-purple">contact</strong>  : Email & social media channels<br>
                        ▹ <strong class="log-purple">clear</strong>    : Clear terminal screen<br>
                        ▹ <strong class="log-purple">github</strong>   : Open ReyRiz's GitHub profile
                    </div>
                `);
                break;
            case 'about':
                printOutput(`
                    <span class="log-success">👤 Fariz Idham Ramdhani (ReyRiz)</span><br>
                    B.S. Information Systems student at Universitas Hasanuddin (UNHAS).<br>
                    Focus: Full-Stack Web Development, Data Science/AI, & Creative Multimedia.
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
                    1. <a href="projects.html" style="color:#ffffff; text-decoration:underline; font-weight:600;">EnergyPulse</a> - AI Electricity Demand Forecasting<br>
                    2. <a href="projects.html" style="color:#ffffff; text-decoration:underline; font-weight:600;">TokoLingu</a> - Language Learning E-Commerce (Laravel)<br>
                    3. <a href="projects.html" style="color:#ffffff; text-decoration:underline; font-weight:600;">WhatsApp Clone</a> - Real-time Android Chat<br>
                    4. <a href="projects.html" style="color:#ffffff; text-decoration:underline; font-weight:600;">STQA Automation Suite</a> - Selenium & Cypress<br>
                    <span class="log-muted">Click 'Projects' in navbar to explore the full gallery.</span>
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
                printOutput(`Opening GitHub: https://github.com/ReyRiz...`, 'log-cyan');
                window.open('https://github.com/ReyRiz', '_blank');
                break;
            case 'sudo':
            case 'sudo su':
                printOutput(`Access granted. Welcome, Commander Fariz! ⚡`, 'log-success');
                break;
            case '':
                break;
            default:
                printOutput(`Command not recognized: "<strong>${cmd}</strong>". Type <span class="log-cyan">'help'</span> for assistance.`, 'log-purple');
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
                <button class="modal-close-btn" aria-label="Close Modal" title="Close (Esc)"><i class="fas fa-times"></i></button>
                <div class="modal-content-target"></div>
            </div>
        `;
        document.body.appendChild(overlay);
    }

    const closeBtn = overlay.querySelector('.modal-close-btn');
    const closeAction = () => {
        overlay.classList.remove('active');
        document.body.style.overflow = '';
        document.documentElement.style.overflow = '';
        playSciFiSound(450, 0.05);
    };

    if (closeBtn) {
        closeBtn.onclick = (e) => {
            e.stopPropagation();
            closeAction();
        };
    }

    overlay.onclick = (e) => {
        if (e.target === overlay) {
            closeAction();
        }
    };

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
    const rawHighlights = getField(project, 'highlights') || project.highlights || [];
    const highlightsHtml = rawHighlights.map(h => `<li>▹ ${h}</li>`).join('');

    const modalTech = typeof t === 'function' ? t('modal_tech') : 'Technologies & Tools';
    const modalHighlights = typeof t === 'function' ? t('modal_highlights') : 'Key Highlights';
    const modalOverview = typeof t === 'function' ? t('modal_overview') : 'Project Overview';
    const modalChallenges = typeof t === 'function' ? t('modal_challenges') : 'Engineering Challenges & Solutions';
    const modalRepo = typeof t === 'function' ? t('modal_repo') : 'View Repository';
    const modalDemo = typeof t === 'function' ? t('modal_demo') : 'Live Demo';
    const modalPdf = typeof t === 'function' ? t('modal_pdf') : 'Download PDF Document';

    target.innerHTML = `
        <img src="${heroImg}" alt="${getField(project, 'title')}" class="modal-hero-image" onerror="this.src='https://placehold.co/800x400/10172a/6366f1?text=${encodeURIComponent(project.title)}'">
        <div class="modal-content-body">
            <div class="modal-tag-row">
                <span class="project-category-badge">${getField(project, 'categoryName') || project.category}</span>
                ${project.year ? `<span class="cert-year-badge">${project.year}</span>` : ''}
            </div>
            <h3 class="modal-title">${getField(project, 'title')}</h3>
            <p class="section-subtitle">${getField(project, 'description')}</p>
            
            <div class="modal-section-block">
                <h4><i class="fas fa-layer-group"></i> ${modalTech}</h4>
                <div class="project-tags-wrap" style="margin-top: 8px;">${tagsHtml}</div>
            </div>

            ${rawHighlights && rawHighlights.length ? `
                <div class="modal-section-block">
                    <h4><i class="fas fa-star"></i> ${modalHighlights}</h4>
                    <ul style="display:flex; flex-direction:column; gap:8px; color:var(--text-highlight); font-size:0.92rem; margin-top:8px;">
                        ${highlightsHtml}
                    </ul>
                </div>
            ` : ''}

            ${getField(project, 'fullOverview') ? `
                <div class="modal-section-block">
                    <h4><i class="fas fa-file-alt"></i> ${modalOverview}</h4>
                    <div style="color:var(--text-secondary); line-height:1.7; font-size:0.92rem; margin-top:8px;">
                        ${getField(project, 'fullOverview')}
                    </div>
                </div>
            ` : ''}

            ${getField(project, 'challenges') ? `
                <div class="modal-section-block">
                    <h4><i class="fas fa-lightbulb"></i> ${modalChallenges}</h4>
                    <p style="color:var(--text-secondary); line-height:1.7; font-size:0.92rem; margin-top:8px;">
                        ${getField(project, 'challenges')}
                    </p>
                </div>
            ` : ''}

            <div class="modal-actions-bar">
                ${project.githubLink ? `
                    <a href="${project.githubLink}" target="_blank" class="btn btn-primary">
                        <i class="fab fa-github"></i> ${modalRepo}
                    </a>
                ` : ''}
                ${project.demoLink ? `
                    <a href="${project.demoLink}" target="_blank" class="btn btn-secondary">
                        <i class="fas fa-external-link-alt"></i> ${modalDemo}
                    </a>
                ` : ''}
                ${project.downloadLink ? `
                    <a href="${resolveAssetPath(project.downloadLink)}" target="_blank" class="btn btn-secondary">
                        <i class="fas fa-file-pdf"></i> ${modalPdf}
                    </a>
                ` : ''}
            </div>
        </div>
    `;

    // Reset scroll positions so the modal always opens cleanly from the top
    const modalWindow = overlay.querySelector('.modal-window');
    if (modalWindow) modalWindow.scrollTop = 0;
    overlay.scrollTop = 0;

    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
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
                showToast(`Email ${email} copied to clipboard! 📋`, 'fas fa-copy');
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

            const content = document.querySelector('main') || document.body;
            content.style.transition = 'opacity 0.25s ease';
            content.style.opacity = '0';

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
    const viewDetailsText = typeof t === 'function' ? t('view_details') : 'View Details';
    const featuredBadgeText = typeof t === 'function' ? t('featured_tag') : 'Featured';

    container.innerHTML = featured.map(project => `
        <div class="project-card spotlight-card" onclick="openProjectModal('${project.id}')">
            <div class="project-thumb-container">
                <img src="${resolveAssetPath(project.thumbnail)}" alt="${getField(project, 'title')}" class="project-thumb" onerror="this.src='https://placehold.co/600x350/10172a/6366f1?text=${encodeURIComponent(project.title)}'">
                <span class="project-category-badge">${getField(project, 'categoryName') || project.category}</span>
                <span class="project-featured-badge"><i class="fas fa-bolt"></i> ${featuredBadgeText}</span>
            </div>
            <div class="project-body">
                <div>
                    <h3 class="project-title">${getField(project, 'title')}</h3>
                    <p class="project-desc">${getField(project, 'description')}</p>
                </div>
                <div>
                    <div class="project-tags-wrap">
                        ${(project.tags || []).slice(0, 4).map(t => `<span class="project-tag-mini">${t}</span>`).join('')}
                    </div>
                    <div class="project-card-footer">
                        <span class="project-view-cta">${viewDetailsText} <i class="fas fa-arrow-right"></i></span>
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
        const viewDetailsText = typeof t === 'function' ? t('view_details') : 'View Details';
        const featuredBadgeText = typeof t === 'function' ? t('featured_tag') : 'Featured';

        const filtered = projectsData.filter(project => {
            const matchCategory = currentCategory === 'all' || project.category === currentCategory;
            const title = getField(project, 'title').toLowerCase();
            const desc = getField(project, 'description').toLowerCase();
            const matchSearch = searchQuery === '' || 
                title.includes(searchQuery) ||
                desc.includes(searchQuery) ||
                (project.tags && project.tags.some(t => t.toLowerCase().includes(searchQuery)));
            return matchCategory && matchSearch;
        });

        if (filtered.length === 0) {
            const emptyTitle = typeof t === 'function' ? t('search_empty_title') : 'No matching projects found';
            const emptyDesc = typeof t === 'function' ? t('search_empty_desc') : 'Try adjusting your search terms or selecting a different category.';
            container.innerHTML = `
                <div style="grid-column: 1/-1; text-align: center; padding: 60px 20px; color: var(--text-muted);">
                    <i class="fas fa-search" style="font-size: 2.5rem; margin-bottom: 16px; color: var(--secondary);"></i>
                    <h3>${emptyTitle}</h3>
                    <p style="margin-top: 8px;">${emptyDesc}</p>
                </div>
            `;
            return;
        }

        container.innerHTML = filtered.map(project => `
            <div class="project-card spotlight-card" onclick="openProjectModal('${project.id}')">
                <div class="project-thumb-container">
                    <img src="${resolveAssetPath(project.thumbnail)}" alt="${getField(project, 'title')}" class="project-thumb" onerror="this.src='https://placehold.co/600x350/10172a/6366f1?text=${encodeURIComponent(project.title)}'">
                    <span class="project-category-badge">${getField(project, 'categoryName') || project.category}</span>
                    ${project.featured ? `<span class="project-featured-badge"><i class="fas fa-bolt"></i> ${featuredBadgeText}</span>` : ''}
                </div>
                <div class="project-body">
                    <div>
                        <h3 class="project-title">${getField(project, 'title')}</h3>
                        <p class="project-desc">${getField(project, 'description')}</p>
                    </div>
                    <div>
                        <div class="project-tags-wrap">
                            ${(project.tags || []).slice(0, 4).map(t => `<span class="project-tag-mini">${t}</span>`).join('')}
                        </div>
                        <div class="project-card-footer">
                            <span class="project-view-cta">${viewDetailsText} <i class="fas fa-arrow-right"></i></span>
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
        if (!btn.dataset.filterBound) {
            btn.dataset.filterBound = 'true';
            btn.addEventListener('click', () => {
                document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                currentCategory = btn.dataset.category || 'all';
                playSciFiSound(620, 0.05);
                render();
            });
        }
    });

    // Search Input
    const searchInput = document.getElementById('project-search-input');
    if (searchInput && !searchInput.dataset.searchBound) {
        searchInput.dataset.searchBound = 'true';
        searchInput.addEventListener('input', (e) => {
            searchQuery = e.target.value.trim().toLowerCase();
            render();
        });
    }
}

// ------------------------------------------------------------------------------
// EXPERIENCE GALLERY & LIGHTBOX CONTROLLER
// ------------------------------------------------------------------------------
let currentLightboxGallery = [];
let currentLightboxIndex = 0;
let currentLightboxCompany = '';

function ensureLightboxModal() {
    let modal = document.getElementById('gallery-lightbox-modal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'gallery-lightbox-modal';
        modal.className = 'lightbox-modal';
        modal.innerHTML = `
            <div class="lightbox-dialog" role="dialog" aria-modal="true">
                <div class="lightbox-topbar">
                    <div class="lightbox-meta-wrap">
                        <span class="lightbox-company-tag" id="lightbox-company-badge">Company</span>
                        <span class="lightbox-counter" id="lightbox-counter-text">Photo 1 of 3</span>
                    </div>
                    <button class="lightbox-close-btn" id="lightbox-close-button" aria-label="Close" title="Close (Esc)">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <div class="lightbox-media-container">
                    <button class="lightbox-arrow prev" id="lightbox-prev-btn" aria-label="Previous">
                        <i class="fas fa-chevron-left"></i>
                    </button>
                    <img src="" alt="" class="lightbox-img" id="lightbox-active-img">
                    <button class="lightbox-arrow next" id="lightbox-next-btn" aria-label="Next">
                        <i class="fas fa-chevron-right"></i>
                    </button>
                </div>
                <div class="lightbox-caption-bar" id="lightbox-caption-text"></div>
            </div>
        `;
        document.body.appendChild(modal);

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeGalleryLightbox();
            }
        });

        const closeBtn = document.getElementById('lightbox-close-button');
        if (closeBtn) closeBtn.addEventListener('click', closeGalleryLightbox);

        const prevBtn = document.getElementById('lightbox-prev-btn');
        if (prevBtn) prevBtn.addEventListener('click', prevLightboxImage);

        const nextBtn = document.getElementById('lightbox-next-btn');
        if (nextBtn) nextBtn.addEventListener('click', nextLightboxImage);

        window.addEventListener('keydown', (e) => {
            const activeModal = document.getElementById('gallery-lightbox-modal');
            if (!activeModal || !activeModal.classList.contains('active')) return;
            if (e.key === 'Escape') {
                closeGalleryLightbox();
            } else if (e.key === 'ArrowLeft') {
                prevLightboxImage();
            } else if (e.key === 'ArrowRight') {
                nextLightboxImage();
            }
        });
    }
    return modal;
}

function updateLightboxContent() {
    if (!currentLightboxGallery.length) return;
    const item = currentLightboxGallery[currentLightboxIndex];
    const isId = typeof getCurrentLang === 'function' && getCurrentLang() === 'id';
    const counterLabel = isId ? 'Foto' : 'Photo';
    const ofLabel = isId ? 'dari' : 'of';

    const imgEl = document.getElementById('lightbox-active-img');
    const badgeEl = document.getElementById('lightbox-company-badge');
    const counterEl = document.getElementById('lightbox-counter-text');
    const captionEl = document.getElementById('lightbox-caption-text');

    if (imgEl) {
        imgEl.src = resolveAssetPath(item.url);
        imgEl.alt = getField(item, 'caption');
    }
    if (badgeEl) badgeEl.textContent = currentLightboxCompany;
    if (counterEl) {
        counterEl.textContent = `${counterLabel} ${currentLightboxIndex + 1} ${ofLabel} ${currentLightboxGallery.length}`;
    }
    if (captionEl) {
        captionEl.textContent = getField(item, 'caption');
    }
}

function openGalleryLightbox(companyName, photoIndex) {
    const exp = (typeof experiencesData !== 'undefined') 
        ? experiencesData.find(e => e.company === companyName || e.id === companyName) 
        : null;
    if (!exp || !exp.gallery || !exp.gallery.length) return;

    currentLightboxGallery = exp.gallery;
    currentLightboxCompany = exp.company;
    currentLightboxIndex = (photoIndex >= 0 && photoIndex < exp.gallery.length) ? photoIndex : 0;

    ensureLightboxModal();
    updateLightboxContent();

    const modal = document.getElementById('gallery-lightbox-modal');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';

    if (typeof playSciFiSound === 'function') {
        playSciFiSound(880, 0.08);
    }
}

function prevLightboxImage() {
    if (!currentLightboxGallery.length) return;
    currentLightboxIndex = (currentLightboxIndex - 1 + currentLightboxGallery.length) % currentLightboxGallery.length;
    updateLightboxContent();
    if (typeof playSciFiSound === 'function') {
        playSciFiSound(640, 0.05);
    }
}

function nextLightboxImage() {
    if (!currentLightboxGallery.length) return;
    currentLightboxIndex = (currentLightboxIndex + 1) % currentLightboxGallery.length;
    updateLightboxContent();
    if (typeof playSciFiSound === 'function') {
        playSciFiSound(760, 0.05);
    }
}

function closeGalleryLightbox() {
    const modal = document.getElementById('gallery-lightbox-modal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
        if (typeof playSciFiSound === 'function') {
            playSciFiSound(520, 0.06);
        }
    }
}

// Render Experience Timeline from LinkedIn Data
function renderExperienceTimeline(container) {
    const isId = typeof getCurrentLang === 'function' && getCurrentLang() === 'id';
    const galleryTitle = typeof t === 'function' ? t('exp_gallery_title') : (isId ? 'Dokumentasi & Galeri Kegiatan' : 'Visual Highlights & Documentation');
    const galleryHint = typeof t === 'function' ? t('exp_gallery_hint') : (isId ? 'Klik foto untuk memperbesar' : 'Click photo to enlarge');

    container.innerHTML = experiencesData.map(exp => {
        const hasGallery = exp.gallery && Array.isArray(exp.gallery) && exp.gallery.length > 0;

        return `
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
                    <span class="company-badge-duration"><i class="far fa-clock"></i> ${isId ? 'Total ' + (exp.totalDuration_id || exp.totalDuration) : (exp.totalDuration || '') + ' total'}</span>
                </div>

                <div class="company-roles-list">
                    ${exp.roles.map(role => `
                        <div class="role-item">
                            <div class="role-dot"></div>
                            <h4 class="role-title">${getField(role, 'roleTitle')}</h4>
                            <div class="role-sub-meta">
                                <span class="role-type-badge">${getField(role, 'employmentType')}</span>
                                <span><i class="far fa-calendar-alt"></i> ${getField(role, 'period')} · ${getField(role, 'duration')}</span>
                                <span><i class="fas fa-building"></i> ${getField(role, 'workModel')}</span>
                            </div>
                            <p class="role-desc">${getField(role, 'description')}</p>

                            ${(getField(role, 'keyAchievements') && getField(role, 'keyAchievements').length) ? `
                                <ul class="role-achievements-list">
                                    ${getField(role, 'keyAchievements').map(ach => `<li>${ach}</li>`).join('')}
                                </ul>
                            ` : ''}

                            <div class="role-skills-wrap">
                                ${(role.skills || []).map(s => `<span class="skill-tag-pill">${s}</span>`).join('')}
                            </div>
                        </div>
                    `).join('')}
                </div>

                ${hasGallery ? `
                    <div class="exp-gallery-section">
                        <div class="exp-gallery-header">
                            <span class="exp-gallery-label">
                                <i class="fas fa-camera"></i> <span>${galleryTitle}</span>
                            </span>
                            <span class="exp-gallery-hint">
                                <i class="fas fa-search-plus"></i> <span>${galleryHint}</span>
                            </span>
                        </div>
                        <div class="exp-gallery-grid">
                            ${exp.gallery.map((img, idx) => `
                                <div class="exp-gallery-item" onclick="openGalleryLightbox('${exp.company.replace(/'/g, "\\'")}', ${idx})" title="${getField(img, 'caption')}">
                                    <div class="exp-gallery-img-wrap">
                                        <img src="${resolveAssetPath(img.url)}" alt="${getField(img, 'caption')}" loading="lazy">
                                        <div class="exp-gallery-overlay">
                                            <div class="exp-gallery-zoom-badge"><i class="fas fa-expand"></i></div>
                                            <div class="exp-gallery-caption-overlay">${getField(img, 'caption')}</div>
                                        </div>
                                    </div>
                                    <div class="exp-gallery-caption-text">
                                        <i class="fas fa-image"></i> <span>${getField(img, 'caption')}</span>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                ` : ''}
            </div>
        </div>
    `;
    }).join('');
}

// Render Certificates Grid
function renderCertificates(container) {
    const verifyText = typeof t === 'function' ? t('verify_cert') : 'Verify Credential';
    container.innerHTML = certificatesData.map(cert => `
        <div class="cert-card spotlight-card">
            <div>
                <div class="cert-header">
                    <div class="cert-icon-wrap">
                        <i class="fas fa-certificate"></i>
                    </div>
                    <span class="cert-year-badge">${cert.issueDate}</span>
                </div>
                <h3 class="cert-title">${getField(cert, 'title')}</h3>
                <div class="cert-issuer">${cert.issuer}</div>
                <p class="cert-desc">${getField(cert, 'description')}</p>
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
                        ${verifyText} <i class="fas fa-external-link-alt"></i>
                    </a>
                ` : ''}
            </div>
        </div>
    `).join('');
}
