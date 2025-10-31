document.addEventListener('DOMContentLoaded', function() {
    // Update image paths first
    if (typeof updateProjectImagePaths === 'function') {
        updateProjectImagePaths();
    }
    
    // Get project ID from URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = parseInt(urlParams.get('id'));
    
    // Find the project in the data
    const project = projectsData.find(p => p.id === projectId);
    
    // Update the page with project details
    if (project) {
        document.title = `${project.title} | Your Portfolio`;
        
        const projectDetailContainer = document.getElementById('project-detail');
        
        // Create project detail HTML
        const projectDetailHTML = `
            <div class="project-header">
                <div class="project-category-badge">${project.category}</div>
                <h1>${project.title}</h1>
            </div>
            
            <div class="project-gallery">
                ${project.images.map(img => `
                    <div class="gallery-item">
                        <img src="${img}" alt="${project.title}">
                    </div>
                `).join('')}
            </div>
            
            <div class="project-content">
                <div class="project-description">
                    <h2>Project Overview</h2>
                    <div class="description-content">
                        ${project.longDescription}
                    </div>
                    
                    <h2>Challenges & Solutions</h2>
                    <p>${project.challenges}</p>
                </div>
                
                <div class="project-sidebar">
                    <div class="sidebar-section">
                        <h3>Project Links</h3>
                        <div class="project-links">
                            ${project.githubLink ? `
                                <a href="${project.githubLink}" target="_blank" class="github-link">
                                    <i class="fab fa-github"></i> View on GitHub
                                </a>
                            ` : ''}
                            ${project.downloadLink ? `
                                <a href="${project.downloadLink}" target="_blank" class="download-link">
                                    <i class="fas fa-download"></i> Download PDF
                                </a>
                            ` : ''}
                        </div>
                    </div>
                    
                    <div class="sidebar-section">
                        <h3>Tags</h3>
                        <div class="project-tags detail-tags">
                            ${project.tags.map(tag => `<span>${tag}</span>`).join('')}
                        </div>
                    </div>
                    
                    <div class="sidebar-section">
                        <h3>Share Project</h3>
                        <div class="share-buttons">
                            <a href="https://twitter.com/intent/tweet?text=${encodeURIComponent(project.title)}&url=${encodeURIComponent(window.location.href)}" target="_blank" class="twitter-share">
                                <i class="fab fa-twitter"></i>
                            </a>
                            <a href="https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}" target="_blank" class="linkedin-share">
                                <i class="fab fa-linkedin-in"></i>
                            </a>
                            <a href="mailto:?subject=${encodeURIComponent(project.title)}&body=${encodeURIComponent(`Check out this project: ${window.location.href}`)}" class="email-share">
                                <i class="fas fa-envelope"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        projectDetailContainer.innerHTML = projectDetailHTML;
        
        // Initialize gallery if needed
        initializeGallery();
    } else {
        // Project not found
        const projectDetailContainer = document.getElementById('project-detail');
        projectDetailContainer.innerHTML = `
            <div class="error-message">
                <h2>Project Not Found</h2>
                <p>Sorry, the project you're looking for doesn't exist or has been removed.</p>
                <a href="projects.html" class="btn primary-btn">Back to Projects</a>
            </div>
        `;
    }
    
    function initializeGallery() {
        // Simple gallery functionality - expand when clicked
        const galleryItems = document.querySelectorAll('.gallery-item img');
        
        galleryItems.forEach(item => {
            item.addEventListener('click', function() {
                const overlay = document.createElement('div');
                overlay.className = 'gallery-overlay';
                
                const enlargedImg = document.createElement('img');
                enlargedImg.src = this.src;
                
                const closeBtn = document.createElement('button');
                closeBtn.innerHTML = '<i class="fas fa-times"></i>';
                closeBtn.className = 'close-gallery';
                
                overlay.appendChild(enlargedImg);
                overlay.appendChild(closeBtn);
                document.body.appendChild(overlay);
                
                closeBtn.addEventListener('click', function() {
                    document.body.removeChild(overlay);
                });
                
                overlay.addEventListener('click', function(e) {
                    if (e.target === overlay) {
                        document.body.removeChild(overlay);
                    }
                });
            });
        });
    }
});
