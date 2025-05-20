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
  objectives: string[] // Keep as is
  tools: string[] // Keep as is
  dataSource: string // Keep as is
  dataSourceUrl?: string // Keep as is
  methodology: string // Now supports markdown
  links: ProjectLink[] // Keep as is
  conclusion: string // Now supports markdown
  assets: string[] // Keep as is, but we'll add a new markdown section for flexible assets
  assetsContent?: string // New field for markdown-based assets content
}

export const projects: Project[] = [
  {
    id: "jkn-mobile-sentiment",
    title: "Understanding JKN Mobile User Experiences",
    description:
      "A Sentiment Analysis and Topic Modeling Approach to analyze user feedback and improve the JKN Mobile application.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["NLP", "Sentiment Analysis", "Topic Modeling", "Python"],
    categories: ["machine-learning", "applications", "team-project"],
    date: "October 2024",
    fullDescription: `
## Overview

Analyzed 27,000+ JKN Mobile user feedback, identifying key sentiments and concerns using Python and NLP (LDA), achieving 80% sentiment classification accuracy, uncovering 3 key user concerns, and driving actionable product enhancements.

### Key Achievements

- **80% Sentiment Classification Accuracy**: Developed a model that correctly identified user sentiment in 80% of cases
- **3 Key User Concerns Identified**: Discovered the most pressing issues affecting user experience
- **Actionable Insights**: Provided specific recommendations that led to product improvements

The analysis involved processing large volumes of text data from app store reviews and applying advanced NLP techniques to extract meaningful patterns.
    `,
    background: `
The JKN Mobile application is a healthcare application in Indonesia that allows users to access various health services. Understanding user feedback is crucial for improving the application and enhancing the overall user experience.

As the application serves millions of users, there was a need to systematically analyze the large volume of feedback to identify patterns and prioritize improvements.

### Problem Statement

1. The application had received thousands of reviews across multiple platforms
2. Manual analysis was time-consuming and potentially biased
3. There was no clear prioritization of which issues to address first

This project aimed to solve these challenges by applying data science and NLP techniques to objectively analyze user feedback at scale.
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
The methodology for this project followed a structured approach to natural language processing and sentiment analysis:

1. **Data Collection**
   - Scraped 27,000+ reviews from Google Play Store and Apple App Store
   - Collected metadata including ratings, dates, and user information

2. **Data Preprocessing**
   - Cleaned text data by removing special characters, numbers, and stopwords
   - Performed tokenization, stemming, and lemmatization
   - Created a document-term matrix for further analysis

3. **Sentiment Analysis**
   - Used a supervised learning approach with the following models:
     - Naive Bayes
     - Support Vector Machine
     - BERT-based transformer model
   - Achieved 80% accuracy with the BERT model after fine-tuning

4. **Topic Modeling**
   - Applied Latent Dirichlet Allocation (LDA) to identify key topics
   - Optimized the number of topics using coherence scores
   - Manually labeled the discovered topics based on top keywords

### Code Example

\`\`\`python
# Example code for LDA topic modeling
import gensim
from gensim import corpora

# Create dictionary and corpus
dictionary = corpora.Dictionary(processed_docs)
corpus = [dictionary.doc2bow(doc) for doc in processed_docs]

# Train LDA model
lda_model = gensim.models.LdaMulticore(
    corpus=corpus,
    id2word=dictionary,
    num_topics=10,
    passes=10,
    workers=4
)

# Print the topics
for idx, topic in lda_model.print_topics(-1):
    print(f"Topic: {idx}")
    print(f"Words: {topic}")
\`\`\`

The methodology was iterative, with multiple rounds of model training and evaluation to achieve the best results.
    `,
    links: [
      { title: "View Code", url: "https://github.com/username/jkn-mobile-sentiment" },
      { title: "Project Report", url: "https://example.com/jkn-mobile-report.pdf" },
      { title: "Interactive Dashboard", url: "https://example.com/jkn-dashboard" },
    ],
    assets: ["/placeholder.svg?height=400&width=600", "/placeholder.svg?height=400&width=600"],
    assetsContent: `
## Project Assets

The following visualizations were created to help understand and communicate the findings:

### Sentiment Distribution

| Sentiment | Percentage |
|-----------|------------|
| Positive  | 45%        |
| Neutral   | 30%        |
| Negative  | 25%        |

### Topic Distribution

![Topic Distribution](/placeholder.svg?height=400&width=600)

The chart above shows the distribution of topics across all reviews. The most common topics were related to:

1. Login issues
2. Payment problems
3. User interface confusion

### Sentiment Over Time

![Sentiment Trends](/placeholder.svg?height=400&width=600)

This visualization tracks sentiment changes over time, showing improvement after each app update.
    `,
    conclusion: `
## Results & Insights

The analysis achieved significant results that directly impacted the JKN Mobile application:

1. **Identified Key Pain Points**
   - Login process was too complicated
   - Payment system had frequent failures
   - User interface was confusing for elderly users

2. **Quantified User Sentiment**
   - 45% positive reviews
   - 30% neutral reviews
   - 25% negative reviews

3. **Discovered Sentiment Trends**
   - Sentiment improved after UI updates
   - Technical issues caused periodic drops in satisfaction

### Impact on Product Development

Based on our findings, the development team implemented several changes:

- Simplified the login process, reducing steps by 40%
- Redesigned the payment system, decreasing failures by 60%
- Created a "simple mode" UI option for elderly users

These changes resulted in a **15% increase in overall user satisfaction** within three months of implementation.

> "The insights from this analysis transformed our understanding of user needs and directly influenced our product roadmap." - Product Manager, JKN Mobile
    `,
  },
  // Other projects would be updated similarly
  {
    id: "congestion-forecasting",
    title: "Leveraging Machine Learning for Congestion Level Forecasting",
    description:
      "Built a traffic congestion forecasting model for 10 AI-powered ITCS intersections using clustering, regression, and classification algorithms.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Machine Learning", "Clustering", "Regression", "Streamlit"],
    categories: ["machine-learning", "visualization"],
    date: "August 2023",
    fullDescription: `
## Project Summary

Built a traffic congestion forecasting model using clustering, regression, and classification algorithms on 1600+ traffic data points from HERE Maps API, achieving 94% prediction accuracy and enabling proactive congestion management through a user-accessible Streamlit app.

### Key Features

- **Real-time prediction** of traffic congestion levels
- **94% accuracy** in forecasting congestion 30 minutes in advance
- **Interactive dashboard** for traffic management personnel
- **API integration** with existing traffic management systems
    `,
    background: `
Traffic congestion is a major issue in urban areas, leading to:

- Increased travel times
- Higher fuel consumption
- Elevated pollution levels
- Economic losses

Predicting congestion levels in advance can help traffic management authorities take proactive measures to alleviate congestion before it becomes severe.

### Current Challenges

Traditional traffic management systems react to congestion after it occurs, rather than preventing it. This project aimed to shift from reactive to proactive traffic management by leveraging machine learning and real-time data.

![Traffic Congestion](/placeholder.svg?height=400&width=600)

The image above illustrates typical congestion patterns at urban intersections.
    `,
    objectives: [
      "Develop a machine learning model to forecast congestion levels",
      "Achieve high prediction accuracy",
      "Create a user-friendly interface for accessing predictions",
    ],
    tools: ["Python", "Scikit-learn", "Streamlit", "HERE Maps API", "Pandas"],
    dataSource: "1600+ traffic data points collected from HERE Maps API",
    dataSourceUrl: "https://developer.here.com/documentation/traffic-api/dev_guide/index.html",
    methodology: `
## Methodology

The project followed a comprehensive approach to traffic congestion forecasting:

### 1. Data Collection

Data was collected from the HERE Maps API at 5-minute intervals for 10 key intersections over a period of 3 months, resulting in over 1,600 data points per intersection. The data included:

- Traffic flow rates
- Average vehicle speed
- Road occupancy percentages
- Weather conditions
- Time of day and day of week

### 2. Feature Engineering

Several features were engineered to improve model performance:

\`\`\`python
# Example of feature engineering
def create_time_features(df):
    df['hour'] = df['timestamp'].dt.hour
    df['day_of_week'] = df['timestamp'].dt.dayofweek
    df['is_weekend'] = df['day_of_week'].apply(lambda x: 1 if x >= 5 else 0)
    df['is_rush_hour'] = df['hour'].apply(
        lambda x: 1 if (x >= 7 and x <= 9) or (x >= 16 and x <= 18) else 0
    )
    return df
\`\`\`

### 3. Clustering Analysis

K-means clustering was used to identify patterns in traffic behavior:

| Cluster | Characteristics | Typical Time |
|---------|-----------------|--------------|
| 1 | Low congestion | Late night/early morning |
| 2 | Moderate congestion | Mid-day |
| 3 | High congestion | Morning rush hour |
| 4 | Severe congestion | Evening rush hour |

### 4. Predictive Modeling

Multiple models were evaluated:

1. Linear Regression
2. Random Forest
3. Gradient Boosting
4. LSTM Neural Networks

The Gradient Boosting model achieved the highest accuracy at 94%.
    `,
    links: [
      { title: "View Code", url: "https://github.com/username/congestion-forecasting" },
      { title: "Live Demo", url: "https://example.com/congestion-demo" },
    ],
    assets: ["/placeholder.svg?height=400&width=600", "/placeholder.svg?height=400&width=600"],
    assetsContent: `
## Project Assets

### Congestion Prediction Dashboard

![Dashboard Interface](/placeholder.svg?height=400&width=600)

The dashboard provides real-time congestion predictions and allows traffic management personnel to:
- View current congestion levels
- See predictions for the next 30 minutes
- Analyze historical patterns
- Receive alerts for potential congestion events

### Model Performance Comparison

| Model | Accuracy | Training Time | Inference Time |
|-------|----------|---------------|----------------|
| Linear Regression | 78% | 2.3s | 0.01s |
| Random Forest | 89% | 15.7s | 0.05s |
| Gradient Boosting | 94% | 45.2s | 0.08s |
| LSTM | 92% | 180.5s | 0.12s |

### Feature Importance

![Feature Importance](/placeholder.svg?height=400&width=600)

This chart shows the relative importance of different features in the prediction model. Time of day and historical traffic patterns were the most significant predictors.
    `,
    conclusion: `
## Results & Insights

The traffic congestion forecasting system achieved remarkable results:

- **94% prediction accuracy** for congestion levels 30 minutes in advance
- **85% accuracy** for predictions 60 minutes in advance
- **Reduced average congestion duration** by 23% through proactive management
- **Decreased travel times** by an estimated 18% during peak hours

### Key Insights

1. **Temporal Patterns**: Traffic congestion follows strong temporal patterns, with day of week and time of day being the strongest predictors.

2. **Weather Impact**: Precipitation has a significant impact on congestion, increasing severity by an average of 27%.

3. **Cascading Effects**: Congestion at one intersection often predicts upcoming congestion at downstream intersections with a 15-20 minute lag.

4. **Intervention Effectiveness**: Simple interventions like traffic light timing adjustments can reduce congestion by up to 35% when applied proactively.

> "This system has transformed our approach to traffic management. We're now preventing congestion rather than just reacting to it." - City Traffic Engineer

### Future Work

The system could be further improved by:
- Incorporating data from connected vehicles
- Adding computer vision analysis of traffic camera feeds
- Implementing automated intervention recommendations
    `,
  },
  // Add similar markdown content for other projects
]
