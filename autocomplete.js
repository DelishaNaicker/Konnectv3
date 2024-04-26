const resultBox = document.querySelector(".resultbox");
const inputBox = document.getElementById("inputbox");
const searchBtn = document.getElementsByTagName("button");
const currentUrl = window.location.href;

const webDevelopment = [
    "CSS (Cascading Style Sheets)",
    "JavaScript",
    "Frontend development",
    "Backend development",
    "Full-stack development",
    "Responsive web design",
    "Web accessibility",
    "User experience (UX) design",
    "User interface (UI) design",
    "Web frameworks (e.g., React, Angular, Vue.js)",
    "Web development tools (e.g., Git, npm, Webpack)",
    "Version control systems",
    "Cross-browser compatibility",
    "Search Engine Optimization (SEO)",
    "Performance optimization",
    "Web security (e.g., HTTPS, CSRF protection)",
    "Progressive Web Apps (PWAs)",
    "APIs (Application Programming Interfaces)",
    "RESTful APIs",
    "GraphQL",
    "Server-side rendering (SSR)",
    "Client-side rendering (CSR)",
    "Content Management Systems (CMS)",
    "Web hosting",
    "Domain management",
    "DevOps (Development Operations)",
    "Continuous Integration and Continuous Deployment (CI/CD)",
    "Microservices architecture",
    "Web sockets",
    "Web design principles",
    "Mobile-first development",
    "Single Page Applications (SPAs)",
    "Frontend frameworks (e.g., Bootstrap, Foundation)",
    "Code quality and testing (e.g., unit testing, integration testing)",
    "Performance monitoring and analytics",
    "Web animations and effects",
    "Responsive images and media",
    "Web typography",
    "Grid systems and layout frameworks"];

let cloudComputing = [
    "Cloud computing models (Public, Private, Hybrid)",
    "Infrastructure as a Service (IaaS)",
    "Platform as a Service (PaaS)",
    "Software as a Service (SaaS)",
    "Cloud service providers (e.g., AWS, Azure, Google Cloud Platform)",
    "Virtualization",
    "Containers (e.g., Docker, Kubernetes)",
    "Serverless computing",
    "Microservices architecture",
    "Cloud storage (e.g., Amazon S3, Google Cloud Storage)",
    "Cloud databases (e.g., Amazon RDS, Azure SQL Database)",
    "Cloud networking (e.g., VPC, Azure Virtual Network)",
    "Cloud security",
    "Identity and Access Management (IAM)",
    "Encryption and data protection in the cloud",
    "Compliance and regulatory considerations",
    "Cloud monitoring and management tools",
    "Cost management and optimization",
    "High availability and disaster recovery in the cloud",
    "Cloud-native development",
    "Serverless architecture patterns",
    "Cloud migration strategies",
    "Multi-cloud and hybrid cloud environments",
    "Cloud APIs and SDKs",
    "DevOps in the cloud",
    "Continuous Integration and Continuous Deployment (CI/CD) pipelines",
    "Auto-scaling and elasticity",
    "Cloud computing economics",
    "Edge computing",
    "Internet of Things (IoT) and cloud integration",
    "Cloud networking technologies (e.g., VPN, Direct Connect)",
    "Cloud-based analytics and big data processing",
    "Machine learning and artificial intelligence in the cloud",
    "Cloud governance and compliance frameworks",
    "Cloud-based development environments",
    "Cloud-based collaboration tools",
    "Cloud security best practices",
    "Cloud-native storage solutions",
    "Serverless application architectures",
    "Cloud automation and orchestration"
];

let dataScience = [
    "Data analysis",
    "Data visualization",
    "Statistical analysis",
    "Machine learning",
    "Deep learning",
    "Artificial Intelligence (AI)",
    "Predictive modeling",
    "Data preprocessing",
    "Exploratory data analysis (EDA)",
    "Feature engineering",
    "Model evaluation and selection",
    "Supervised learning",
    "Unsupervised learning",
    "Reinforcement learning",
    "Natural Language Processing (NLP)",
    "Computer Vision",
    "Time series analysis",
    "Anomaly detection",
    "Clustering algorithms",
    "Classification algorithms",
    "Regression analysis",
    "Ensemble learning",
    "Dimensionality reduction",
    "Big data analytics",
    "Data mining",
    "Data cleaning",
    "Data wrangling",
    "Data integration",
    "Data warehousing",
    "Data architecture",
    "Data governance",
    "Data ethics and privacy",
    "Experimental design",
    "A/B testing",
    "Hypothesis testing",
    "Feature selection",
    "Model interpretation and explainability",
    "Model deployment and productionization",
    "Cloud-based data science platforms",
    "Reproducible research and version control"
]

let availableKeywords = webDevelopment.concat(cloudComputing).concat(dataScience);

inputBox.onkeyup = function() {
    let result = [];
    let input = inputBox.value;
    if (input.length) {
        // searchRow.style.borderRadius="30px 30px 0px 0px";
        result = availableKeywords.filter((keyword)=> {
            return keyword.toLowerCase().includes(input.toLowerCase());
        });
        console.log(result);
    }
    display(result);

    if (!result.length) {
        resultBox.innerHTML = "";
    }
}

function display(result) {
    const content = result.map((list)=>{
        return "<li onclick=selectInput(this)>" +list+ "</li>";
    });
    resultBox.innerHTML = "<ul>" + content.join('') + "<ul/>";
}

function selectInput(list) {
    inputBox.value = list.innerHTML;
    resultBox.innerHTML = '';
    let urlStart = currentUrl.substring(0, currentUrl.lastIndexOf('/'));
    if (webDevelopment.includes(inputBox.value)) {            
        let newTabUrl = urlStart.toString() + "/web-development-group.html"
        window.open(newTabUrl)
        };
    if (cloudComputing.includes(inputBox.value)) {
        console.log(currentUrl);
        let urlStart = currentUrl.substring(0, currentUrl.lastIndexOf('/'));    
        let newTabUrl = urlStart.toString() + "/cloud-computing-group.html"
        window.open(newTabUrl)
        };
    if (dataScience.includes(inputBox.value)) {
        console.log(currentUrl);
        let urlStart = currentUrl.substring(0, currentUrl.lastIndexOf('/'));    
        let newTabUrl = urlStart.toString() + "/data-science-group.html"
        window.open(newTabUrl)
        };
}
