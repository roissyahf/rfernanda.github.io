export interface ProjectLink {
  title: string
  url: string
}

export interface Project {
  id: string
  title: string
  description: string
  image: string
  tags: string[]
  categories: ("machine-deep-learning" | "generative-ai" | "data-analysis" | "end-to-end" | "team-project")[]
  date: string // Month, Year format
  fullDescription: string // Now supports markdown
  background: string // Now supports markdown
  objectives: string[] 
  tools: string[] 
  dataSource: string 
  dataSourceUrl?: string 
  methodology: string // Now supports markdown
  links: ProjectLink[] 
  conclusion: string // Now supports markdown
  assetsContent?: string // New field for markdown-based assets content
}

export const projects: Project[] = [
  // JKN Mobile Project
  {
    id: "jkn-mobile-sentiment",
    title: "Understanding JKN Mobile User Experiences: A Sentiment Analysis and Topic Modeling Approach",
    description:
      "A Sentiment Analysis and Topic Modeling Approach to analyze user feedback and improve the JKN Mobile application.",
    image: "/projects/mixed-jknm/cover-jknmobile.jpg?height=400&width=600",
    tags: ["Sentiment Analysis", "Topic Modeling", "JKN Mobile App", "User Experience"],
    categories: ["machine-deep-learning", "data-analysis"],
    date: "October 2024",
    fullDescription: `
## Overview

Analyzed 27,000+ JKN Mobile user feedback, identifying key sentiments and concerns using Python and NLP (LDA), uncovering 3 key user concerns, and driving actionable product enhancements.

### Key Achievements
- **3 Key User Concerns Identified**: Discovered the most pressing issues affecting user experience
- **Actionable Insights**: Provided specific recommendations that led to product improvements

    `,
    background: `

## Background
The JKN Mobile app is a digital platform designed to facilitate access to National Health Insurance (BPJS Kesehatan) services. It offers various features, including checking insurance status, finding healthcare providers, and managing claims.

Despite the JKN Mobile app's 4.3 rating on the Play Store, there are anecdotal reports of user dissatisfaction and challenges, such as difficulties in creating accounts and receiving OTP codes. This project seeks to systematically investigate these issues and identify areas for improvement.

    `,
    objectives: [
      "Analyze user sentiments towards the JKN Mobile application",
      "Identify key topics and concerns from user feedback",
      "Provide actionable insights for application improvement",
    ],
    tools: ["Python", "NLTK", "Scikit-learn", "LDA", "Pandas"],
    dataSource: "27,000+ user reviews from Google Play Store and App Store",
    dataSourceUrl: "https://play.google.com/store/apps/details?id=app.bpjs.mobile",
    methodology: `

## Methodology
1. Data Collection: Scraping user reviews from Google Playstore using 'google-play-scraper' library.
2. Data Cleaning: Remove duplicate reviews, handle missing value.
3. Text Cleansing: Remove punctuations, emoji, stopwords, handle slang words, ensuring the text is clean to proceed further.
4. Exploratory Data Analysis: The data was thoroughly examined to understand its characteristics and identify potential patterns.
5. Sentiment Analysis Labeling: Labeling the reviews using the [Indonesia-bert-sentiment-classification](https://huggingface.co/mdhugol/indonesia-bert-sentiment-classification) model available in Hugging Face.
6. Text Analysis: Drawing bigrams, trigrams, word clouds from each sentiment category to unleash pattern.
7. Topic Modeling: Employing LDA to identify the main themes and topics discussed in the reviews.
8. Dashboard creation: For interactive visualization and easy customization, Streamlit was used to create dashboard.
9. Create narrative report: Present the findings and comprehensive analysis in a narrative format, published in medium.
`,
    links: [
      { title: "Repository", url: "https://github.com/roissyahf/JKN-Mobile-2024" },
      { title: "Project Report", url: "https://medium.com/@roissyahfernanda/understanding-jkn-mobile-user-experiences-a-sentiment-analysis-and-topic-modeling-approach-9f0b6d9f8177"},
      { title: "Streamlit Dashboard", url: "https://jkn-mobile-reviews-2024.streamlit.app/" },
    ],
    conclusion: `
## Results & Insights

![Topic Distribution](/projects/mixed-jknm/topic_dist.png?height=400&width=600)

The most frequently discussed topic among JKN Mobile users was the difficulty of registering and logging in due to OTP code errors. This issue was prevalent in negative reviews, indicating a poor user experience. Bigrams and trigrams also supported this finding, with users mentioning the challenges of waiting for OTP codes and attempting multiple registrations without success.

Neutral and negative sentiments were evenly balanced, with 37.5% of users expressing neutral feelings and 37.4% expressing negative sentiments. The word cloud analysis of neutral sentiment revealed that users often discussed registration, login, OTP codes, and verification processes, suggesting a need for assistance or improvements in these areas.

Users expressed frustration with three main functionalities:
- Registration and login: Difficulties with OTP codes, long wait times, and multiple failed attempts were common complaints.
- Captcha errors: Some users encountered issues with the captcha code during registration and login.
- Health facility registration: Users found it challenging to register for a health facility.

On the positive side, users appreciated the app’s ability to access JKN services and its ease of switching health services. The following areas require improvement:
- Registration and login function: Investigate the reasons for difficulties with OTP codes, captcha errors, and multiple failed attempts and implement solutions to address these issues.
- Online registration feature: Investigate the reason for the difficulties in registering for a health facility.

## Recommendations
To enhance user satisfaction and address the identified issues, the following recommendations are proposed:
- **Streamline the registration and login process**: Simplify the verification process, reduce wait times for OTP codes, and implement more robust error-handling mechanisms.
- **Improve OTP delivery reliability**: Explore alternative methods for OTP delivery, such as email, or in-app notifications, to ensure timely and reliable receipt.
- **Enhance captcha functionality**: Implement a more user-friendly and accurate captcha system to reduce errors and improve the login experience.
- **Provide clear instructions and guidance**: Offer detailed instructions and guidance on the registration and login process, including troubleshooting tips and FAQs.
- **Consider implementing biometric authentication**: Explore the use of biometric features (e.g., fingerprint, facial recognition) as an additional or alternative authentication method to improve security and convenience.
    `,
  },

  // HR Analytics
{
    id: "hr-analytics-dashboard",
    title: "Solving High Attrition Rate Problem",
    description:
      "A dashboard built to visualize employee engagement within a fictional company called Vidtribe.",
    image: "/projects/viz-hranalytic/cover-hranalytics.png?height=400&width=600",
    tags: ["HR Analytics", "Attrition Rate", "People Management"],
    categories: ["data-analysis"],
    date: "July 2024",
    fullDescription: `
## Overview

This project aims to find the cause of the high attrition rate in a fictional company called Vidtribe via dashboard building and recommend action items to solve the problem.

    `,
    background: `

## Background
Vidtribe has more than 1000 employees, spearheaded across Indonesia. Even though it has become a fairly large company, Vidtribe still has quite a lot of difficulties in managing employees. This has an impact on the high attrition rate (the ratio of the number of employees who leave to the total number of employees) up to more than 10%.

To prevent this from getting worse, HR department managers need help in identifying the various factors that affect the high attrition rate. In addition, it also need to monitor the respective factor by creating a dashboard. After insights found, recommend action item so that the company can lowering the attrition rate by paying attention to the root factor found.
    `,
    objectives: [
      "Extract insights from the given dataset to draw action item so that the company can reduce the high attrition rate",
"Build a machine learning model to predict whether the employee will be stayed or resigned"
],
    tools: ["Scikit-learn", "Tableau"],
    dataSource: "HR Analytics dataset",
    dataSourceUrl: "https://github.com/dicodingacademy/dicoding_dataset/tree/main/employee",
    methodology: `

## Methodology
- Data Understanding
- Defining Key Business Questions (KBQs)
- Data Preparation
- Data Visualization
- Dashboard Sketching
- Analyzing Trend & Pattern
- Suggest Recommendation

`,
    links: [
	{ title: "Repository", url: "https://github.com/roissyahf/Employee-Turnover.git" },
	{ title: "Tableau Dashboard", url: "https://public.tableau.com/views/HRAttritionDashboard_17205009591570/Dashboard1?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link"},
    ],
    conclusion: `
## Conclusion
Vidtribe faces a significant challenge in employee retention, particularly within the first five years of service. A consistent trend shows higher attrition rates for employees with less than five years of tenure across all departments, suggesting potential issues with onboarding, training, or initial compensation. This problem is compounded by the fact that the age group with the highest number of hires (26-35 years old) also exhibits the highest resignation rates, especially among men.

Surprisingly, high-performing employees with excellent job satisfaction and work-life balance are also resigning. This challenges conventional wisdom and suggests that factors beyond typical workplace satisfaction, such as compensation, career advancement opportunities, or personal reasons, might be driving these departures. Similarly, the data indicates that neither extensive business travel nor excessive overtime are primary drivers of attrition, as the majority of resigned employees rarely traveled and a higher percentage of those who didn't work overtime resigned.

## Recommendation
Based on these insights, Vidtribe should prioritize the following actions to reduce employee turnover:

1. **Strengthen Early-Career Retention**: Focus on improving the experience for new hires, particularly sales representatives and male employees aged 26-35. This involves optimizing the onboarding process, providing robust training, and ensuring competitive compensation and benefits packages during the crucial first five years.
2. **Understand High-Performer Departures**: Implement exit interviews for all resigning employees, especially high-performers and those reporting high job satisfaction and work-life balance. This will uncover specific, underlying reasons for their departures, which may include compensation, limited growth opportunities, or personal factors.
3. **Implement Stay Interview Programs**: Proactively gather feedback from employees who have been with the company for a while. Stay interviews can identify potential issues and areas for improvement before employees decide to leave, helping to retain more tenured staff.
4. **Investigate Non-Overtime Resignations**: Explore why a higher percentage of employees who didn't work overtime are resigning. This could indicate issues like underutilization of skills, boredom, or a lack of engagement, even without excessive hours.

`,
  },

// RFM Project
  {
    id: "ecommerce-rfm",
    title: "Leveraging RFM Analysis for Customer Segmentation to Boost Customer Engagement within Olist Brazilian E-Commerce Platform",
    description:
      "Segment customers using RFM analysis to enhance marketing strategies and improve customer retention.",
    image: "/projects/mixed-rfm/cover-rfmanalysis.jpg?height=400&width=600",
    tags: ["RFM Analysis", "Customer Segmentation", "Customer Retention", "E-Commerce"],
    categories: ["data-analysis"],
    date: "May 2024",
    fullDescription: `
    `,
    background: `

## Background
Under the period of February 2017 to August 2018, 96.648% of Olist customers didn’t make a second purchase. Olist Brazilian E-Commerce businesses must modernize their marketing and customer strategies by personalizing them to improve their services, retain customers, and attract new ones.

    `,
    objectives: [
      "Conduct customer segmentation according to their recency, frequency, and monetary value",
"Better understand the characteristics of each segment, then provide a personalized marketing strategy to retain their customers"
    ],
    tools: ["Python", "Pandas",  "Tableau"],
    dataSource: "90,000+ customer purchasing log from Brazilian E-Commerce",
    dataSourceUrl: "https://www.kaggle.com/datasets/olistbr/brazilian-ecommerce",
    methodology: `

## Methodology
1. Define the research questions.
2. Collect the data.
3. Clean the data.
4. Perform Exploratory Data Analysis (EDA).
5. Perform Feature Preprocessing to create recency, frequency, and monetary value columns.
6. Create RFM segments using quantiles.
7. Define RFM segments.
8. Group RFM segments.
9. Analyzing RFM segments.
10. Build a Tableau dashboard.
`,
    links: [
      { title: "Repository", url: "https://github.com/roissyahf/Olist-RFM-Analysis" },
      { title: "Slide", url: "https://docs.google.com/presentation/d/1nTQDBNtG4U9ZFvQjM8gk6ObrvQitTbaadlBpkZizszo/edit?usp=sharing"},
      { title: "Tableau Dashboard", url: "https://public.tableau.com/views/RFM_Analysis_17065090987710/story?:language=en-US&:display_count=n&:origin=viz_share_link" },
    ],
    conclusion: `
## Conclusion
![RFM Segments](/projects/mixed-rfm/rfm-segment.png?height=400&width=600)

- An analysis of 75,389 Olist customers revealed that 35.99% are "lost customers," characterized by long purchase intervals and low order volume. Additionally, 23.5% are classified as "high risk to churn" due to their recent purchase inactivity. In total, a concerning 59.49% of our customers exhibit low engagement with the platform. Given the substantial size of this segment, regaining their interest is crucial.
- Conversely, 12.40% of customers are identified as "potential customers," signifying recent purchases but minimal spending.
- The remaining customers are distributed across categories including "new customers," "potential loyalists," "very loyal," and "VIPs," with respective percentages of 9.19%, 8.98%, 6.80%, and 3.12%.
- While attention should be paid to all segments, prioritizing strategies to retain "lost customers" and those at "high risk to churn" is most pressing.
    `,
  },

  // BOLD WEB APP
{
    id: "bold-web-app",
    title: "Implementation of Shallow Neural Network to Detect Political News on Web App Bold",
    description:
      "A Web App developed to predict whether the political news is hoax or valid.",
    image: "/projects/mixed-hoaxvalid/cover-hoaxvalid.png?height=400&width=600",
    tags: ["Hoax Prediction", "Web App", "Media & Information"],
    categories: ["team-project", "machine-deep-learning", "end-to-end"],
    date: "October 2023",
    fullDescription: `
## Overview

BOLD helps manage election hoax news by predicting the veracity of news articles and offering educational resources on news verification and combating hoaxes. Users can also report suspected hoaxes and provide feedback on the prediction model's accuracy.

    `,
    background: `

## Background
Between 2020 and 2021, the spread of hoaxes increased from 11.2% to 11.9%. The most common type of hoax news was about health. In 2019, which was an election year, the number of hoax news reached its highest point with 928 cases. In 2022, the number of hoax news rose again. It is expected that more and more hoax news will appear before the 2024 elections. Hoax news can cause problems like threatening the quality of democratic events, damaging voters' ability to think clearly, making the election process seem less valid, and harming community harmony, which can lead to the country falling apart. Because of these impacts, it is important to deal with hoax news.
 
    `,
    objectives: [
  "Provide a web application that predicts the veracity of news articles to help users identify and mitigate election hoax news",
	"Offer educational resources on news authentication methods and strategies for addressing misinformation, empowering users to critically evaluate information",
	"Enable users to report suspected hoax news and submit feedback on model inaccuracies, facilitating continuous improvement and community-driven verification efforts"
],
    tools: ["Tensorflow", "Flask", "Docker", "Firebase", "ReactJS", "HTML", "CSS"],
    dataSource: "Indonesian Fact & Hoax Political News dataset",
    dataSourceUrl: "https://www.kaggle.com/datasets/linkgish/indonesian-fact-and-hoax-political-news",
    methodology: `

## Methodology
Our team comprises technology enthusiasts with expertise in Data and AI, and Full Stack Development.

- **The Data and AI division** is responsible for developing classification algorithms to predict the validity of news.
- **The Back End division** is accountable for constructing endpoint APIs, establishing web application infrastructure, and utilizing Firebase hosting for web application deployment.
- **The Front End division** is responsible for designing the web application interface using Figma, and subsequently implementing the design using HTML, CSS, and ReactJS.
`,
    links: [
	{ title: "Repository", url: "https://github.com/roissyahf/hoax-news-flask-api.git" },
  { title: "Slide", url: "https://docs.google.com/presentation/d/177iMJd2fkr2V_-keBqEoDMqqalBHLEpR/edit?usp=sharing&ouid=101324279168720809850&rtpof=true&sd=true"},
  { title: "Web App", url: "https://tsdn23-bold.web.app/"}
    ],
    conclusion: ``,
  },

  // Congestion Forecasting Project
  {
    id: "congestion-forecasting",
    title: "Leveraging Machine Learning for Congestion Level Prediction at 10 AI-Powered ITCS Intersections",
    description:
      "Built a traffic congestion forecasting model for 10 AI-powered ITCS intersections using Machine Learning.",
    image: "/projects/mixed-trafficc/cover-trafficcongestion.jpg?height=400&width=600",
    tags: ["Clustering", "Regression", "Classification", "Streamlit", "Transportation"],
    categories: ["team-project", "machine-deep-learning", "end-to-end"],
    date: "August 2023",
    fullDescription: `
## Overview

Built a traffic congestion forecasting model using ML algorithms on 1600+ traffic data points from HERE Maps API, achieving 94% prediction accuracy and enabling proactive congestion management through a user-accessible Streamlit app.
    `,
    background: `

## Background
Since May 2023, Jakarta has consistently featured among the top 10 most polluted cities globally according to the Air Quality Index, even peaking at number one in August.

In response to chronic traffic congestion, the Jakarta Provincial Government has implemented several initiatives, the most recent being an AI-driven Intelligent Traffic Control System (ITCS) developed in collaboration with Google under the Greenlight project. This system adjusts traffic light durations dynamically based on real-time traffic volume at intersections.
    `,
    objectives: [
      "Building upon ITCS, we propose enhancing the ITCS by constructing a machine-learning model that empowers road users at ITCS-equipped intersections to predict future traffic congestion",
      "As a pilot phase, we will focus on 10 of the 20 initially equipped intersections, leveraging a case clustering, regression, and classification approach on traffic data acquired via the Here Maps API"
    ],
    tools: ["Python", "Scikit-learn", "Streamlit", "HERE Maps API"],
    dataSource: "1600+ traffic data points collected from HERE Maps API",
    dataSourceUrl: "https://www.here.com/platform/map-data",
    methodology: `
## Methodology
![Workflow](/projects/mixed-trafficc/workflow.png?height=400&width=600)

1. Scrap data from HERE MAPS API
2. Data Preprocessing
3. Exploratory Data Analysis
4. Feature Engineering
5. KMeans clustering for making label classification
6. Random Forest and XGBoost Regressor to predict travel time seconds
7. Random Forest and XGBoost Classifier to classify congestion level
8. Model Tuning and Evaluation
9. Streamlit for deployment
    `,
    links: [
      { title: "Repository", url: "https://github.com/roissyahf/RISTEK-DATATHON-2023" },
      {title: "Slide", url: "https://docs.google.com/presentation/d/1ThTUvI5wI1SNfdvVmsAxPVwwkUXCU8yiWnPdQEraCy8/edit?usp=sharing"},
      { title: "Streamlit App", url: "https://predict-cluster-lalu-lintas-h4xargbrrbqhfuugi9tebb.streamlit.app/" },
    ],
    conclusion: `
## Results
The following visualization and tables were created to help understand and communicate the findings:
    
**Travel Time Boxplot by Clusters**
![Cluster-Interpretation](/projects/mixed-trafficc/cluster-formed.png?height=400&width=600)

**Regression Model Performance**
| Model | CV SMAPE | CV MSE |
|---------|-----------------|--------------|
| Random Forest | 1.727 | 4.217 |
| Random Forest Tuning | 1.719 | 4.212 |
| XGBoost | 1.729 | 4.268 |
| XGBoost Tuning | 1.714 | 4.121 |

**Classification Model Performance**
| Model | Accuracy | Recall | Precision | F1-Score |
|-------|-------|-------|-------|-------|
| Random Forest | 94.59% | 94.59% | 94.63% | 94.57% |
| Random Forest Tuning | 95.65% | 95.65% | 95.65% | 95.63% |
| XGBoost | 94.76% | 94.76% | 94.81% | 94.74% |
| XGBoost Tuning | 95.59% | 95.59% | 95.66% | 95.57% |


## Conclusion
KMeans clustering with a silhouette score of 0.596 effectively categorizes travel times into four groups. Furthermore, XGBoost Regressor Tuning yielded the lowest SMAPE score at 1.714, while XGBoost Classifier Tuning delivered the best performance in congestion level prediction with a precision score of 95.66%.

The most important features in regression and classification models are normal speed, base duration, intersections, and sin hours. The Streamlit app provided an accessible interface for users to access predictions.
    `,
  },

  // OPET
{
    id: "opet-android-app",
    title: "OPet - Online Diagnosis for Your Pets Disease",
    description:
      "An Android App developed to predict pets diseases based on symptoms.",
    image: "/projects/mixed-opet/cover-opet.jpg?height=400&width=600",
    tags: ["Disease Prediction", "Android App", "Healthcare"],
    categories: ["team-project", "machine-deep-learning", "end-to-end"],
    date: "June 2023",
    fullDescription: `
## Overview

Developed an Android application for canine disease diagnosis, leveraging an Artificial Neural Network (ANN) with 80+ symptoms and achieving 95% prediction accuracy, accessible via a Flask API with <300ms response time, improving diagnosis speed by 30%.
    `,
    background: `

## Background
In a 2022 survey by the Rakuten Insight Center, 67% of 10,422 respondents in Indonesia
owned pets, with cats, fish, birds, and dogs being the dominant choices. Rabies is a disease
in pets that poses a threat to human health, causing 100-156 deaths per year in Indonesia
(source: https://bkd.sultengprov.go.id/).

The uneven distribution of veterinarians contributes to difficulties in treating cat diseases,
resulting in 60.9% of cat deaths in Surabaya (Chazar et al., 2019). Indonesia has less than
half of the required number of veterinarians, with only 20,000 available instead of the
needed 70,000 (Azaliarahma, 2022).

Based on the problem statement, we utilize machine learning classification algorithms and
the native Kotlin programming language to develop an application to detect early signs of
diseases in pets based on their symptoms. The goal of this application is to assist pet
owners in taking care of their pets, addressing the limited availability of veterinarians in
certain areas, and the high cost of treatment at animal clinics.
    `,
    objectives: [
      "Develop a highly accurate pet disease detection system based on symptom analysis, providing reliable and timely insights for pet owners",
	"Implement robust technical integration across all system components to ensure seamless functionality and optimal application performance upon deployment"
],
    tools: ["Tensorflow", "Google Cloud", "Kotlin"],
    dataSource: "Canine's disease and symptoms tabular dataset",
    dataSourceUrl: "https://github.com/OPet-OnlineDiagnosisforYourPet-sDisease/MachineLearning/tree/main/dataset",
    methodology: `

## Methodology
**1. Machine Learning:**
Our machine learning efforts involved developing two distinct TensorFlow models. The first, an Artificial Neural Network (ANN), was trained on a one-hot encoded tabular dataset to classify dog diseases based on symptoms and deployed via Flask. The second model, a Convolutional Neural Network (CNN), addressed dog skin disease classification, leveraging data augmentation during preprocessing and deployed efficiently with FastAPI.

**2. Mobile Development:**
For mobile development, we integrated with existing APIs via Retrofit, implementing a ViewModel and LiveData architecture to effectively separate UI and business logic. This approach provides real-time feedback on data loading status, displaying buffers and error messages as needed, and seamlessly integrates Google Maps API for enhanced location-based functionalities.

**3. Cloud Computing:** Our cloud computing strategy focused on deploying robust APIs on Google Cloud Run to support our machine learning models. We developed Node.js and Flask APIs for symptom-based diagnoses and a FastAPI for image-based diagnostics. User-uploaded images and profile pictures are securely stored in Cloud Storage buckets, linked directly within the application for efficient access.

`,
    links: [
	{ title: "Repository", url: "https://github.com/OPet-OnlineDiagnosisforYourPet-sDisease" },
  { title: "Slide", url: "https://docs.google.com/presentation/d/1mDMR53GSlRN2zSmOy2UADmQ0YRJDD_cp/edit?usp=sharing&ouid=101324279168720809850&rtpof=true&sd=true"},
	{ title: "Demo Video", url: "https://drive.google.com/file/d/1lXz7_3klDRVMWrzm0zurpmWOxxD5O_Wg/view?usp=drive_link"},
    ],
    conclusion: ``,
  },

  // Atliqo Dashboard
  {
    id: "atliqo-comparison-dashboard",
    title: "Comparison Dashboard of Pre vs. Post 5G Launch in Atliqo Telecom Company",
    description:
      "Comparison Dashboard of Pre vs. Post 5G Launch in Atliqo Telecom Company.",
    image: "/projects/viz-atliqo/cover-atliqo.png?height=400&width=600",
    tags: ["Comparison Performance", "Dashboard", "Telecommunication"],
    categories: ["data-analysis"],
    date: "December 2022",
    fullDescription: `
## Overview

Built a Tableau report comparing 7 KPIs pre- and post-5G launch, revealing an 8.3% decrease in active user rate and enabling data-driven optimization of internet plans.

    `,
    background: `

## Background
Following the launch of 5G in May 2022, Atliqo Telecom Company experienced a noticeable decline in both active users and revenue growth. In response to these concerns, the business director requested the analytics team to conduct a comprehensive evaluation of the situation. This included preparing a comparison report of key performance indicators (KPIs) before and after the 5G rollout to understand the impact of the new technology on user engagement and business performance.
    `,
    objectives: [
      "Generate actionable insights to help management make informed, data-driven decisions",
	    "Identify key areas affecting the decline in active users and performance metrics",
	    "Propose recommendations to optimize internet plans and increase user acquisition and retention"
    ],
    tools: ["Tableau"],
    dataSource: "Atliqo's internet package sales data from Code Basic",
    dataSourceUrl: "https://codebasics.io/event/codebasics-resume-project-challenge",
    methodology: `

## Methodology
1. **Data Exploration**

- Conduct initial exploration of the dataset to understand its structure, contents, and quality.
- Identify key variables and assess data completeness and consistency.

2. **KPI Definition**

- Define key performance indicators (KPIs) to measure performance changes before and after the 5G launch.
- Establish baseline metrics for pre-launch and compare them with post-launch performance.

3. **Question Formulation**

- Develop a set of analytical questions to guide the investigation and derive meaningful insights.
- Align questions with business objectives and stakeholder interests.

4. **Data Visualization**

- Create visual representations of key metrics and trends to facilitate understanding and highlight patterns.
- Use charts, graphs, and comparative visuals to support the analysis.

5. **Dashboard Design**

- Sketch the layout and structure of an interactive dashboard.
- Plan components to effectively display KPIs, trends, and critical findings.

6. **Insight Extraction and Recommendations**

- Analyze visual and statistical findings to extract actionable insights.
- Provide relevant, data-driven recommendations to support strategic decisions post-5G launch.

`,
    links: [
      { title: "Project Report", url: "https://medium.com/@roissyahfernanda/detailed-performance-analysis-of-the-pre-and-post-5g-launch-in-atliqo-telecom-company-5c7604a5309f"},
      { title: "Tableau Dashboard", url: "https://public.tableau.com/views/DashboardChallenge_16705794560470/story?:language=en-US&:display_count=n&:origin=viz_share_link" },
    ],
    conclusion: `
## Conclusion

Loss of active users affects company revenue growth, a thorough investigation of what happened and identification of the root cause should be conducted as soon as possible. Key metrics measure the success of business activities that support KPIs. Analyzing KPIs’ performance over a period of time could help decision-makers identify areas for improvement, as well as suggest relevant recommendations.

## Recommendations
1. Users are attracted to purchase internet plan with daily data limit ranging from 1–3 GB. Hence selling more internet plan: p1, p11, p2, p3, and p12 could be a good choice, moreover these plans are profitable both before and after 5G launch.
2. Reduce stock for internet plan: p8, p9, p10 for sales after 5G because users aren’t interested in purchasing it. These plans have shorter validity time and smaller internet quota. It is suggested to create more internet plan variation with minimum daily data limit of 1 GB and minimum validity period of 3 days.
3. Ahmedabad, Delhi, Raipur, Patna, Mumbai were the top 5 cities with the highest % of active users lost, we need to identify the characteristic of users in each city to offer relevant internet plans.
4. Analyze competitor recharge plans may assist the company in creating more innovative internet plans.
    `,
  },

  // More project to be added
]
