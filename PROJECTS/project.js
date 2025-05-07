document.addEventListener('DOMContentLoaded', function() {
    // Project data
    const projects = {
        ecommerce: {
            title: "E-Commerce Platform",
            description: "A full-featured e-commerce platform built with modern web technologies. This project includes a complete shopping experience with product listings, cart functionality, user authentication, and payment processing.",
            features: [
                "User authentication and authorization",
                "Product catalog with categories and filters",
                "Shopping cart and checkout process",
                "Payment integration with Stripe",
                "Admin dashboard for product management",
                "Order tracking system",
                "Responsive design for all devices"
            ],
            technical: "Built with React for the frontend, Node.js with Express for the backend, and MongoDB for data storage. Utilizes Redux for state management and JWT for authentication. The payment system integrates with Stripe API for secure transactions.",
            techStack: ["React", "Node.js", "MongoDB", "Express", "Redux", "Stripe"],
            githubUrl: "https://github.com/yourusername/ecommerce-platform",
            images: [
                "/HOME/assets/e-commerce/image.png",
                "assets/e-commerce/screen1.png",
                "assets/e-commerce/screen2.png",
                "assets/e-commerce/screen3.png"
            ]
        },
        taskmanager: {
            title: "Task Management App",
            description: "A collaborative task management application designed for teams to organize and track their work efficiently. Features real-time updates and drag-and-drop functionality.",
            features: [
                "Real-time task updates with WebSockets",
                "Drag-and-drop interface for task organization",
                "Team collaboration with role-based permissions",
                "Task assignment and progress tracking",
                "Due date reminders and notifications",
                "File attachments and comments"
            ],
            technical: "Developed using Vue.js for the frontend with a Firebase backend for real-time data synchronization. Implements Firestore for database needs and Firebase Authentication for user management. The drag-and-drop interface is powered by Vue.Draggable.",
            techStack: ["Vue.js", "Firebase", "Firestore", "WebSockets", "Vue.Draggable"],
            githubUrl: "https://github.com/yourusername/task-manager",
            images: [
                "/HOME/assets/task management/image.png",
                "assets/task-management/screen1.png",
                "assets/task-management/screen2.png",
                "assets/task-management/screen3.png"
            ]
        },
        portfolio: {
            title: "Portfolio Website",
            description: "An interactive portfolio website showcasing my work with engaging animations and 3D elements. Designed to provide an immersive experience for visitors.",
            features: [
                "3D model integration with Three.js",
                "Smooth page transitions and animations",
                "Project showcase with detailed case studies",
                "Responsive design for all screen sizes",
                "Dark/light mode toggle",
                "Contact form with email integration"
            ],
            technical: "Built with HTML5, CSS3, and vanilla JavaScript for optimal performance. Three.js handles the 3D elements and animations. GSAP is used for smooth scrolling and transitions. The site is optimized for performance with lazy loading and efficient asset management.",
            techStack: ["HTML5", "CSS3", "JavaScript", "Three.js", "GSAP"],
            githubUrl: "https://github.com/yourusername/portfolio-website",
            images: [
               "/HOME/assets/portfolio website/image.png", 
                "assets/portfolio-website/screen1.png",
                "assets/portfolio-website/screen2.png",
                "assets/portfolio-website/screen3.png"
            ]
        },
        weather: {
            title: "Weather Dashboard",
            description: "A comprehensive weather application providing current conditions and forecasts with interactive maps and historical data visualization.",
            features: [
                "Current weather conditions with icons",
                "5-day forecast with detailed metrics",
                "Interactive map with weather layers",
                "Location search with autocomplete",
                "Historical weather data visualization",
                "Customizable dashboard layout"
            ],
            technical: "Utilizes the OpenWeatherMap API for weather data and Mapbox GL JS for interactive maps. Built with React and Chart.js for data visualization. The application implements service workers for offline functionality and IndexedDB for caching weather data.",
            techStack: ["React", "OpenWeatherMap API", "Mapbox GL JS", "Chart.js", "Service Workers"],
            githubUrl: "https://github.com/yourusername/weather-dashboard",
            images: [
               "/HOME/assets/weather dashboard/image.png",
                "assets/weather-dashboard/screen1.png",
                "assets/weather-dashboard/screen2.png",
                "assets/weather-dashboard/screen3.png"
            ]
        },
        fitness: {
            title: "Fitness Tracker",
            description: "A mobile-first fitness application that helps users track workouts, nutrition, and progress toward their health goals.",
            features: [
                "Workout tracking with exercise database",
                "Nutrition logging with barcode scanning",
                "Progress charts and statistics",
                "Custom workout plan creation",
                "Social features for motivation",
                "Integration with wearable devices"
            ],
            technical: "Developed as a Progressive Web App (PWA) using React Native for cross-platform compatibility. Backend powered by Node.js with a PostgreSQL database. Implements JWT for authentication and integrates with HealthKit/Google Fit for wearable data.",
            techStack: ["React Native", "Node.js", "PostgreSQL", "PWA", "JWT"],
            githubUrl: "https://github.com/yourusername/fitness-tracker",
            images: [
               "/HOME/assets/health tracker/image.png",
                "assets/health-tracker/screen1.png",
                "assets/health-tracker/screen2.png",
                "assets/health-tracker/screen3.png"
            ]
        },
        chatbot: {
            title: "AI Chatbot",
            description: "An intelligent conversational agent capable of understanding natural language and providing contextual responses.",
            features: [
                "Natural language processing",
                "Contextual conversation memory",
                "Multi-language support",
                "Integration with knowledge bases",
                "Sentiment analysis",
                "Admin dashboard for training"
            ],
            technical: "Built with Python using the Transformers library for NLP capabilities. The frontend is a React application that communicates with the Python backend via a REST API. Implements a custom training pipeline for domain-specific knowledge.",
            techStack: ["Python", "Transformers", "React", "REST API", "NLTK"],
            githubUrl: "https://github.com/yourusername/ai-chatbot",
            images: [
               "/HOME/assets/AI chatbot/image.png",
                "assets/AI-chatbot/screen1.png",
                "assets/AI-chatbot/screen2.png",
                "assets/AI-chatbot/screen3.png"
            ]
        }
    };

    // DOM elements
    const projectCards = document.querySelectorAll('.project-card');
    const detailOverlay = document.querySelector('.project-detail-overlay');
    const closeDetail = document.querySelector('.close-detail');
    const detailTitle = document.querySelector('.detail-title');
    const techStack = document.querySelector('.tech-stack');
    const descriptionContent = document.querySelector('.description-content');
    const featuresList = document.querySelector('.features-list');
    const technicalDetails = document.querySelector('.technical-details');
    const githubBtn = document.querySelector('.github-btn');
    const detailMainImage = document.querySelector('.detail-main-image');
    const detailGallery = document.querySelector('.detail-gallery');

    // Show project detail
    function showProjectDetail(projectId) {
        const project = projects[projectId];
        
        // Set project data
        detailTitle.textContent = project.title;
        
        // Set tech stack
        techStack.innerHTML = '';
        project.techStack.forEach(tech => {
            const span = document.createElement('span');
            span.textContent = tech;
            techStack.appendChild(span);
        });
        
        // Set description
        descriptionContent.textContent = project.description;
        
        // Set features
        featuresList.innerHTML = '';
        project.features.forEach(feature => {
            const li = document.createElement('li');
            li.textContent = feature;
            featuresList.appendChild(li);
        });
        
        // Set technical details
        technicalDetails.textContent = project.technical;
        
        // Set GitHub link
        githubBtn.href = project.githubUrl;
        
        // Set images
        detailMainImage.innerHTML = '';
        const mainImg = document.createElement('img');
        mainImg.src = project.images[0];
        mainImg.alt = project.title;
        detailMainImage.appendChild(mainImg);
        
        detailGallery.innerHTML = '';
        project.images.forEach((img, index) => {
            const galleryImg = document.createElement('img');
            galleryImg.src = img;
            galleryImg.alt = `${project.title} screenshot ${index + 1}`;
            galleryImg.addEventListener('click', () => {
                mainImg.src = img;
            });
            detailGallery.appendChild(galleryImg);
        });
        
        // Show overlay
        detailOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    // Close project detail
    function closeProjectDetail() {
        detailOverlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    }

    // Event listeners
    projectCards.forEach(card => {
        card.addEventListener('click', function(e) {
            // Only proceed if clicked element is the card or its children (not the explore button)
            if (!e.target.classList.contains('explore-btn') && 
                !e.target.closest('.explore-btn')) {
                const projectId = this.getAttribute('data-project');
                showProjectDetail(projectId);
            }
        });
        
        const exploreBtn = card.querySelector('.explore-btn');
        exploreBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            const projectId = card.getAttribute('data-project');
            showProjectDetail(projectId);
        });
    });

    closeDetail.addEventListener('click', closeProjectDetail);
    detailOverlay.addEventListener('click', function(e) {
        if (e.target === this) {
            closeProjectDetail();
        }
    });

    // Close with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeProjectDetail();
        }
    });
});