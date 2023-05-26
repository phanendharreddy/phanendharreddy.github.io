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
        title: "Cyberbulling Detection using Deep Learning",
        text:"This project focuses on the detection of cyberbullying in social media text using a Char-CNN (Character-level Convolutional Neural Network) model. With the increasing prevalence of cyberbullying on social networks, it has become crucial to develop machine learning methods to address this social problem. Textual cyberbullying detection poses challenges due to the short, noisy, and unstructured nature of social media content, including spelling errors and intentional obfuscation. The proposed Char-CNN model overcomes these challenges by learning at the character level, enabling it to capture character-level features and handle spelling errors and obfuscation. The project aims to develop an automated method for identifying cyberbullying occurrences in social media, utilizing the most common form of communication, text. By leveraging the power of deep learning and character-level analysis, the model strives to improve the accuracy of cyberbullying detection, contributing to the development of effective measures against this harmful online behavior.                                                                      ",
        techstack:"Spyder and Python",
        source:"https://www.github.com/phanendharreddy/"
        
    },
    {
        imgsrc: SarcasamDetection,
        title: "Extension of Lexicon Algoritm for Sarcasm Detection",
        text:"This project proposes the extension of the lexicon algorithm to improve sarcasm detection in textual content with positive or neutral sentiment. Existing sentiment analysis algorithms can determine sentiment as negative, neutral, or positive, but they are insufficient for detecting sarcasm. The proposed systems combine the lexicon algorithm with either a pure sarcasm analysis algorithm or a sentiment prediction algorithm. The first system analyzes textual content using both algorithms, while the second system predicts sentiment based on a specific environment and compares it with the lexicon algorithm's results. If the results differ, the text is classified as sarcastic; otherwise, it is classified as non-sarcastic. By addressing the limitations of existing systems, these proposed systems aim to enhance sarcasm analysis accuracy and contribute to improved sentiment analysis and opinion mining in online communication platforms.",
        techstack:"Golang and Postman",
        source:"https://www.github.com/phanendharreddy/sarcasamDetection"
        
    },
    {
        imgsrc: WeatherAppPic,
        title: "Weather Web application",
        text:"This weather web application project aims to provide real-time weather information for different cities. The application is built using HTML, CSS, and JavaScript, with Bootstrap for styling. Users can search for a specific city using the search input field and retrieve weather data for that location. The application fetches weather data from the Rapid API hub using a RapidAPI key. The retrieved data includes temperature, humidity, wind speed, sunrise and sunset times, and other relevant weather information. The application dynamically updates the displayed weather details for the searched city. Additionally, the project includes a comparison table that showcases weather data for multiple cities. Overall, this web application enables users to stay informed about current weather conditions and make comparisons between different cities.",
        techstack:"HTML, CSS and JavaScript",
        source:"https://www.github.com/phanendharreddy/weatherApp"
        
    },
    {
        imgsrc: OwnBrowser,
        title: "Private Browser",
        text:"This project is a custom web browser application built using PyQt5, a Python library for creating desktop applications with a web browsing functionality. The browser features a main window with a tabbed interface, allowing users to open multiple web pages simultaneously. It provides basic web browsing functionalities such as navigating backward and forward, refreshing the page, and loading a specific URL. The application also includes a navigation bar with an address bar for entering URLs, as well as buttons for common navigation actions. Users can create new tabs to open additional web pages and close tabs as needed. The browser utilizes the QWebEngineView class to display web content and QWebEngineProfile to manage browser settings. Overall, this project offers a simple and customizable web browsing experience within a PyQt5-based desktop application.",
        techstack:"Python and PyQt5 Library",
        source:"https://www.github.com/phanendharreddy/ownBrowser"
        
    },
    {
        imgsrc: BackendAPIpic,
        title: "Backend API Service for Authorization and Authentication in Golang",
        text:"I've applied for GitHub Octernship program and then I received an assignment to be completed for the program. This assignment was focused on building a backend API service in Golang with the help of the Gin web framework. The goal was to handle the authentication and authorization functionalities of a web app, such as user login, logout, adding and deleting user accounts, and listing all users in the organization. To ensure the security of user data, I used tools like JWT for tokenization and bcrypt for hashing the password. For database management, I opted for MongoDB, a NoSQL database that offers high scalability and flexibility. The project was tested using Postman, a popular tool for API testing, and once it was complete, I uploaded it to a repository. Throughout this project, I gained valuable experience in Golang development, API design, and database management, which will prove useful in future Open-source projects.",
        techstack:"Golang and Postman",
        source:"https://www.github.com/phanendharreddy/backendapi"
        
    },
    {
        imgsrc: PortfolioPic,
        title: "My Portfolio Repository",
        text:"This project is a React-based web application that consists of multiple routes and components. It utilizes JavaScript and CSS files to create a responsive portfolio website. The main entry point is the App.js file, which sets up the router and defines the routes for the different pages. The Home.js file renders the homepage, including components such as the Navbar, Hero Image, Work section, Resume section, and Footer. The About.js file displays the about page, featuring the Navbar, Hero Image with the About heading, About Content section, Resume section, and Footer. The Projects.js file showcases the projects page, including the Navbar, Hero Image with the Projects heading, Work section, Resume section, and Footer. Lastly, the Contact.js file presents the contact page with the Navbar, Hero Image with the Contact heading, a contact form, Resume section, and Footer. Overall, this project allows users to navigate through different sections of the portfolio, including the home, projects, about, and contact pages, providing a comprehensive overview of my skills and experience.",
        techstack:"HTML, CSS, JavaScript and React Framework",
        source:"https://www.github.com/phanendharreddy/phanendharreddy.github.io"
        
    },
];
export default ProjectCardData;