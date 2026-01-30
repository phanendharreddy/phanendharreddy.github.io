import SarcasamDetection from "../assets/SarcasamDetection.jpg"
import sde from "../assets/sde.jpeg"
import CyberBullyingDetection from "../assets/cyberbullyingDetection.png"
import WeatherAppPic from "../assets/weatherapp.png"
import PortfolioPic from "../assets/portfoliopic.png"
import BackendAPIpic from "../assets/backendapi.png"
import OwnBrowser from "../assets/ownbrowser.png"
const ProjectCardData = [
    {
        imgsrc: CyberBullyingDetection,
        title: "Cyberbullying Detection System with Deep Learning",
        text:"Developed a production-ready character-level Convolutional Neural Network (CNN) to identify abusive language in social media posts. The model successfully handles noisy text, misspellings, and deliberate obfuscation patterns. Achieved 88% classification accuracy on 50,000+ test samples with precision/recall optimization for real-world content moderation applications. Implemented data augmentation and cross-validation for robust performance.",
        techstack:"Python • TensorFlow • Keras • NumPy • Pandas • Scikit-learn",
        source:"https://www.github.com/phanendharreddy/"
        
    },
    {
        imgsrc: SarcasamDetection,
        title: "Lexicon-Enhanced Sarcasm Detection Engine",
        text:"Engineered a hybrid NLP system combining lexicon-based sentiment analysis with contextual pattern recognition to detect sarcasm in text data. The system processes sentiment polarity and linguistic markers to identify sarcastic intent with 15% higher accuracy than baseline approaches. Implemented feature extraction pipelines and trained classification models on 10,000+ labeled samples. Achieved F1-score of 0.82 on test dataset.",
        techstack:"Python • NLTK • Scikit-learn • Sentiment Analysis • Machine Learning",
        source:"https://www.github.com/phanendharreddy/sarcasamDetection"
        
    },
    {
        imgsrc: BackendAPIpic,
        title: "Secure Authentication & Authorization API Service",
        text:"Built a production-grade RESTful authentication service in Golang using the Gin framework. Implemented JWT-based stateless authentication, role-based access control (RBAC), and bcrypt password hashing for enterprise security standards. Integrated MongoDB for user data persistence with connection pooling and query optimization. Achieved sub-100ms response times under 100+ concurrent requests with comprehensive Postman test coverage (95+ tests). Includes rate limiting, CORS configuration, and detailed API documentation.",
        techstack:"Golang • Gin • JWT • MongoDB • Bcrypt • REST API • Postman",
        source:"https://www.github.com/phanendharreddy/backendapi"
        
    },
    {
        imgsrc: WeatherAppPic,
        title: "Real-Time Weather Dashboard Application",
        text:"Developed a responsive, single-page weather application with real-time data fetching from OpenWeatherMap API. Features include city search with autocomplete, multi-city comparison views, hourly/weekly forecasts, and dynamic background themes based on weather conditions. Optimized for performance with debounced API calls, local caching, and lazy loading \u2014 achieving sub-2-second initial load times. Fully responsive design adapts seamlessly across desktop, tablet, and mobile viewports with accessibility (WCAG 2.1) compliance.",
        techstack:"HTML5 • CSS3 • JavaScript (ES6+) • REST APIs • LocalStorage • Responsive Design",
        source:"https://www.github.com/phanendharreddy/weatherApp"
        
    },
    {
        imgsrc: OwnBrowser,
        title: "Custom Desktop Web Browser",
        text:"Architected a feature-rich desktop web browser using PyQt5 and QtWebEngine with full tabbed navigation, bookmark management, history tracking, and custom URL bar with search suggestions. Implemented efficient memory management for concurrent tabs, session persistence, and keyboard shortcuts for enhanced UX. Designed with modular architecture supporting future extensions like ad-blocking and custom themes. Handles 10+ simultaneous tabs with optimized resource allocation and smooth navigation.",
        techstack:"Python • PyQt5 • QtWebEngine • Threading • Event-Driven Architecture",
        source:"https://www.github.com/phanendharreddy/ownBrowser"
        
    },
    {
        imgsrc: PortfolioPic,
        title: "Professional Portfolio Website (This Site)",
        text:"Designed and developed a modern, fully responsive portfolio website using React and React Router for seamless multi-page navigation. Features include dynamic project cards, interactive experience timeline, skills grid, and integrated contact form with validation. Implemented performance optimizations including code splitting, lazy loading, and image optimization achieving 95+ Lighthouse scores. Deployed on GitHub Pages with CI/CD automation for continuous updates. Showcases technical expertise through clean code architecture and responsive design principles.",
        techstack:"React • React Router • JavaScript • HTML5 • CSS3 • GitHub Pages",
        source:"https://www.github.com/phanendharreddy/phanendharreddy.github.io"
        
    },
];
export default ProjectCardData;