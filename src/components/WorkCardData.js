import SarcasamDetection from "../assets/SarcasamDetection.jpg"
import sde from "../assets/sde.jpeg"
import CyberBullyingDetection from "../assets/cyberbullyingDetection.png"

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
        imgsrc: sde,
        title: "Weather Web application",
        text:"This weather web application project aims to provide real-time weather information for different cities. The application is built using HTML, CSS, and JavaScript, with Bootstrap for styling. Users can search for a specific city using the search input field and retrieve weather data for that location. The application fetches weather data from the Rapid API hub using a RapidAPI key. The retrieved data includes temperature, humidity, wind speed, sunrise and sunset times, and other relevant weather information. The application dynamically updates the displayed weather details for the searched city. Additionally, the project includes a comparison table that showcases weather data for multiple cities. Overall, this web application enables users to stay informed about current weather conditions and make comparisons between different cities.",
        techstack:"HTML, CSS and JavaScript",
        source:"https://www.github.com/phanendharreddy/weatherApp"
        
    },
    {
        imgsrc: sde,
        title: "Private Browser",
        text:"project description",
        techstack:"Python and PyQt5 Library",
        source:"https://www.github.com/phanendharreddy/ownBrowser"
        
    },
    {
        imgsrc: sde,
        title: "Backend API Service for Authorization and Authentication in Golang",
        text:"I've applied for GitHub Octernship program and then I received an assignment to be completed for the program. This assignment was focused on building a backend API service in Golang with the help of the Gin web framework. The goal was to handle the authentication and authorization functionalities of a web app, such as user login, logout, adding and deleting user accounts, and listing all users in the organization. To ensure the security of user data, I used tools like JWT for tokenization and bcrypt for hashing the password. For database management, I opted for MongoDB, a NoSQL database that offers high scalability and flexibility. The project was tested using Postman, a popular tool for API testing, and once it was complete, I uploaded it to a repository. Throughout this project, I gained valuable experience in Golang development, API design, and database management, which will prove useful in future Open-source projects.",
        techstack:"Golang and Postman",
        source:"https://www.github.com/phanendharreddy/backendapi"
        
    },
    {
        imgsrc: sde,
        title: "My Portfolio Repository",
        text:"project description",
        techstack:"HTML, CSS, JavaScript and React Framework",
        source:"https://www.github.com/phanendharreddy/phanendharreddy.github.io"
        
    },
];
export default ProjectCardData;