// Backup of original paths - uncomment if dynamic paths don't work
const BACKUP_PATHS = {
    1: "./assets/images/electricity1.jpg",
    2: "./assets/images/project2.jpg", 
    3: "./assets/images/whatsapp1.jpg",
    5: "./assets/images/shopease1.png",
    6: "./assets/images/project6.jpg",
    4: "./assets/images/redride1.png",
    7: "./assets/images/scraping1.png",
    8: "./assets/images/moodmate1.jpg"
};

// Use this function if dynamic paths fail
function fixImagePaths() {
    projectsData.forEach(project => {
        if (BACKUP_PATHS[project.id]) {
            project.thumbnail = BACKUP_PATHS[project.id];
        }
    });
}
