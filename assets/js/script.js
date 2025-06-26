document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded');
    console.log('projectsData available:', typeof projectsData !== 'undefined');
    console.log('categories available:', typeof categories !== 'undefined');
    
    if (typeof projectsData !== 'undefined') {
        console.log('Projects count:', projectsData.length);
    }
    
    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('show');
            this.classList.toggle('active');
        });
    }
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (navLinks.classList.contains('show') && 
            !event.target.closest('.nav-links') && 
            !event.target.closest('.menu-toggle')) {
            navLinks.classList.remove('show');
            menuToggle.classList.remove('active');
        }
    });
    
    // Load featured projects on home page
    const featuredProjectsContainer = document.getElementById('featured-projects-container');
    
    if (featuredProjectsContainer) {
        // Wait for projectsData to be available
        if (typeof projectsData !== 'undefined') {
            if (typeof updateProjectImagePaths === 'function') {
                updateProjectImagePaths(); // Update paths first
            }
            loadFeaturedProjects(featuredProjectsContainer, projectsData);
        } else {
            console.error('projectsData is not defined');
        }
    }
    
    // Load projects from project-data.js
    const projectsContainer = document.getElementById('projects-container');
    
    if (projectsContainer) {
        if (typeof projectsData !== 'undefined') {
            if (typeof updateProjectImagePaths === 'function') {
                updateProjectImagePaths(); // Update paths first
            }
            loadProjects(projectsContainer, projectsData);
        } else {
            console.error('projectsData is not defined for projects container');
        }
    }
    
    function loadProjects(container, projects) {
        projects.forEach(project => {
            // Create project element
            const projectItem = document.createElement('div');
            projectItem.className = 'project-item';
            projectItem.dataset.category = project.category;
            projectItem.dataset.tags = project.tags.join(', ').toLowerCase();
            
            // Get category display name
            const categoryDisplayName = getCategoryDisplayName(project.category);
            
            // Create project HTML structure
            projectItem.innerHTML = `
                <div class="project-card">
                    <div class="project-img" style="background-image: url('${project.thumbnail}');"></div>
                    <div class="project-category">${categoryDisplayName}</div>
                    <div class="project-info">
                        <h3>${project.title}</h3>
                        <p>${project.description}</p>
                        <div class="project-tags">
                            ${project.tags.slice(0, 3).map(tag => `<span>${tag}</span>`).join('')}
                        </div>
                        <a href="projects/project-detail.html?id=${project.id}" class="project-link">Lihat Detail</a>
                    </div>
                </div>
            `;
            
            // Add to container
            container.appendChild(projectItem);
        });
    }
    
    function getCategoryDisplayName(category) {
        const categoryMap = {
            'webdev': 'Pengembangan Web',
            'mobiledev': 'Pengembangan Mobile',
            'mobile': 'Pengembangan Mobile',
            'datamining': 'Data Mining',
            'ai': 'Kecerdasan Buatan',
            'database': 'Sistem Database'
        };
        
        return categoryMap[category] || category;
    }
    
    function loadFeaturedProjects(container, projects) {
        // Select featured projects from different categories for variety
        const featuredProjects = [];
        const categories = ['datamining', 'webdev', 'mobile', 'mobiledev'];
        
        // Try to get one project from each category, up to 3 projects
        categories.forEach(category => {
            if (featuredProjects.length < 3) {
                const projectFromCategory = projects.find(p => p.category === category);
                if (projectFromCategory && !featuredProjects.includes(projectFromCategory)) {
                    featuredProjects.push(projectFromCategory);
                }
            }
        });
        
        // If we still need more projects, add from remaining projects
        if (featuredProjects.length < 3) {
            const remainingProjects = projects.filter(p => !featuredProjects.includes(p));
            featuredProjects.push(...remainingProjects.slice(0, 3 - featuredProjects.length));
        }
        
        featuredProjects.forEach(project => {
            // Get category display name
            const categoryDisplayName = getCategoryDisplayName(project.category);
            
            // Create project card HTML
            const projectCard = document.createElement('div');
            projectCard.className = 'project-card';
            projectCard.innerHTML = `
                <div class="project-img" style="background-image: url('${project.thumbnail}');"></div>
                <div class="project-category">${categoryDisplayName}</div>
                <div class="project-info">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <a href="projects/project-detail.html?id=${project.id}" class="btn small-btn">Lihat Detail</a>
                </div>
            `;
            
            container.appendChild(projectCard);
        });
    }
    
    // Project filtering functionality
    function setupProjectFilters() {
        const categoryBtns = document.querySelectorAll('.category-btn');
        const projectItems = document.querySelectorAll('.project-item');
        
        if (categoryBtns.length > 0 && projectItems.length > 0) {
            categoryBtns.forEach(btn => {
                btn.addEventListener('click', function() {
                    const category = this.dataset.category;
                    
                    // Update active button
                    categoryBtns.forEach(b => b.classList.remove('active'));
                    this.classList.add('active');
                    
                    // Filter projects
                    projectItems.forEach(item => {
                        if (category === 'all' || item.dataset.category === category) {
                            item.style.display = 'block';
                        } else {
                            item.style.display = 'none';
                        }
                    });
                });
            });
            
            // Project search functionality
            const searchInput = document.getElementById('project-search');
            const searchBtn = document.getElementById('search-btn');
            
            if (searchInput && searchBtn) {
                searchBtn.addEventListener('click', searchProjects);
                searchInput.addEventListener('keyup', function(e) {
                    if (e.key === 'Enter') {
                        searchProjects();
                    }
                });
                
                function searchProjects() {
                    const searchTerm = searchInput.value.toLowerCase();
                    
                    projectItems.forEach(item => {
                        const tags = item.dataset.tags.toLowerCase();
                        const title = item.querySelector('h3').textContent.toLowerCase();
                        const description = item.querySelector('p').textContent.toLowerCase();
                        
                        if (tags.includes(searchTerm) || title.includes(searchTerm) || description.includes(searchTerm)) {
                            item.style.display = 'block';
                        } else {
                            item.style.display = 'none';
                        }
                    });
                    
                    // Reset category buttons
                    categoryBtns.forEach(b => b.classList.remove('active'));
                    categoryBtns[0].classList.add('active');
                }
            }
        }
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                navLinks.classList.remove('show');
            }
        });
    });
    
    // Call setupProjectFilters after projects are loaded
    setTimeout(() => {
        setupProjectFilters();
    }, 100);
    
    // Add animation on scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.project-card, .timeline-item, .skills-category');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (elementPosition < screenPosition) {
                element.classList.add('animate');
            }
        });
    };
    
    // Run on load and scroll
    animateOnScroll();
    window.addEventListener('scroll', animateOnScroll);
});