// This file contains data for all projects
const projectsData = [
    {
        id: 1,
        title: "Sentiment Analysis Tool",
        category: "Data Mining",
        tags: ["Python", "Machine Learning", "NLP"],
        description: "A machine learning project that analyzes customer reviews and classifies sentiment with high accuracy.",
        longDescription: `
            <p>This sentiment analysis tool was developed as part of my Data Mining course. It uses natural language processing techniques to analyze customer reviews and classify them as positive, negative, or neutral.</p>
            
            <p>The project involved several key steps:</p>
            <ul>
                <li>Data collection from multiple e-commerce websites</li>
                <li>Text preprocessing including tokenization, stop word removal, and lemmatization</li>
                <li>Feature extraction using TF-IDF</li>
                <li>Model training using various algorithms (Naive Bayes, SVM, and LSTM)</li>
                <li>Model evaluation and hyperparameter tuning</li>
                <li>Deployment as a web service</li>
            </ul>
            
            <p>The final model achieved an accuracy of 89% on the test dataset, which is significantly better than the baseline models. The tool is now being used by a local business to monitor customer feedback.</p>
        `,
        technologies: ["Python", "Scikit-learn", "NLTK", "Pandas", "Flask", "Docker"],
        challenges: "One of the main challenges was handling the imbalanced dataset, where positive reviews significantly outnumbered negative ones. I addressed this using SMOTE for oversampling and also applied ensemble methods to improve performance.",
        images: [
            "../assets/images/project1-1.jpg", 
            "../assets/images/project1-2.jpg", 
            "../assets/images/project1-3.jpg"
        ],
        githubLink: "https://github.com/yourusername/sentiment-analysis",
        liveLink: "https://sentiment-demo.yourdomain.com",
        date: "October 2024",
        course: "Data Mining (CSE4587)"
    },
    {
        id: 2,
        title: "E-commerce Platform",
        category: "Web Development",
        tags: ["React", "Node.js", "MongoDB"],
        description: "A fully functional online store with user authentication and payment processing capabilities.",
        longDescription: `
            <p>This e-commerce platform was developed as my final project for the Web Development course. It's a complete online shopping solution with user authentication, product catalog, shopping cart, and payment processing.</p>
            
            <p>Key features of the platform include:</p>
            <ul>
                <li>User registration and authentication with JWT</li>
                <li>Product catalog with categories and search functionality</li>
                <li>Shopping cart and wishlist</li>
                <li>Secure checkout process with Stripe integration</li>
                <li>Order history and tracking</li>
                <li>Admin dashboard for product and order management</li>
                <li>Responsive design for mobile and desktop</li>
            </ul>
            
            <p>The project follows a microservices architecture, with separate services for authentication, product management, cart management, and order processing.</p>
        `,
        technologies: ["React", "Redux", "Node.js", "Express", "MongoDB", "JWT", "Stripe API", "Docker", "AWS"],
        challenges: "The most challenging aspect was implementing the real-time inventory management system that had to handle concurrent transactions without conflicts. I solved this by implementing optimistic concurrency control in MongoDB.",
        images: [
            "../assets/images/project2-1.jpg", 
            "../assets/images/project2-2.jpg", 
            "../assets/images/project2-3.jpg"
        ],
        githubLink: "https://github.com/yourusername/ecommerce-platform",
        liveLink: "https://shop-demo.yourdomain.com",
        date: "December 2024",
        course: "Web Development (CSE3456)"
    },
    // Add more projects here
];
