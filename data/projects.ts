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
  categories: ("machine-learning" | "deep-learning" | "visualization" | "applications" | "team-project")[]
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
    categories: ["deep-learning", "visualization"],
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


  // Congestion Forecasting Project
  {
    id: "congestion-forecasting",
    title: "Leveraging Machine Learning for Congestion Level Prediction at 10 AI-Powered ITCS Intersections",
    description:
      "Built a traffic congestion forecasting model for 10 AI-powered ITCS intersections using clustering, regression, and classification algorithms.",
    image: "/projects/mixed-trafficc/cover-trafficcongestion.jpg?height=400&width=600",
    tags: ["Clustering", "Regression", "Classification", "Streamlit"],
    categories: ["machine-learning", "team-project", "applications"],
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

// RFM Project
  {
    id: "ecommerce-rfm",
    title: "Leveraging RFM Analysis for Customer Segmentation to Boost Customer Engagement within Olist Brazilian E-Commerce Platform",
    description:
      "Segment customers using RFM analysis to enhance marketing strategies and improve customer retention.",
    image: "/projects/mixed-rfm/cover-rfmanalysis.jpg?height=400&width=600",
    tags: ["RFM Analysis", "Customer Segmentation", "E-Commerce", "Customer Retention"],
    categories: ["machine-learning", "visualization"],
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

  // More project to be added
]
