import { SectionHeading } from "@/components/section-heading"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { InteractiveSkills } from "@/components/interactive-skills"
import { AchievementAwardCard } from "@/components/achievement-award-card"
import { CertificationCard } from "@/components/certification-card"
import { Code, Database, FileCode, Layers } from "lucide-react"

// Define the skills data
const skills = [
  // Techniques
  { name: "Machine Learning", category: "techniques" },
  { name: "Deep Learning", category: "techniques" },
  { name: "NLP", category: "techniques" },
  { name: "Feature Selection", category: "techniques" },
  { name: "Data Preprocessing", category: "techniques" },
  { name: "ETL", category: "techniques" },
  { name: "Data Analysis", category: "techniques" },

  // Programming Languages/Libary
  { name: "Python", category: "programming" },
  { name: "SQL", category: "programming" },
  { name: "Scikit-learn", category: "programming" },
  { name: "TensorFlow", category: "programming" },
  { name: "PyTorch", category: "programming" },
  { name: "Flask", category: "programming" },

  // Tools
  { name: "Microsoft Excel", category: "tools" },
  { name: "Tableau", category: "tools" },
  { name: "Streamlit", category: "tools" },
  { name: "Git", category: "tools" },
  { name: "MLflow", category: "tools" },
  { name: "Docker", category: "tools" },
  { name: "Prometheus", category: "tools" },
  { name: "Grafana", category: "tools" }
] as const

// Define the achievements data
const achievements = [
  {
    title: "Inspiring Alumni",
    organization: "Bangkit Academy led by Google, Tokopedia, Gojek, & Traveloka",
    date: "Feb & June 2024",
    description:
      "Recognized as an Inspiring Alumni. Collaborated with Google Indonesia on the International Women's Day 2024 initiative and delivered a speech at the Google AI for the Golden Generation of Indonesia event.",
  },
  {
    title: "Third Runner-up",
    organization: "Intelligo Data Competition 2023",
    date: "Oct 2023",
    description: "Secured a top position among 70 teams by synthesizing customer insights through sentiment analysis and topic modeling, visualized via an interactive Streamlit dashboard.",
  },
  {
    title: "Top 10 Finalist",
    organization: "RISTEK Datathon 2023",
    date: "Aug 2023",
    description: "Achieved a top ranking among 88 teams by optimizing traffic flow management through machine learning-based congestion forecasting at ten Al-powered intersections.",
  },
  {
    title: "Distinction Graduate",
    organization: "Bangkit Academy led by Google, Tokopedia, Gojek, & Traveloka",
    date: "Jun 2023",
    description: "Recognized as a top 10% graduate out of 4709, demonstrating a strong academic foundation and proactive skill development for a successful career.",
  },
  {
    title: "Top 3 Best Projects",
    organization: "Data Science Academy Information Systems Expo 2022",
    date: "Nov 2022",
    description:
      "Segmenting Indonesian provinces by COVID-19 caseloads using K-Means clustering and visualizing insights in Tableau.",
  },
]

// Define the certifications data
const certifications = [
  {
    title: "Microsoft Certified: Azure Data Scientist Associate",
    issuer: "Microsoft",
    date: "June 2024 - present",
    url: "https://learn.microsoft.com/api/credentials/share/en-us/RoissyahFernanda-1870/1F00FCD0E4125409?sharingId=6E78F0C8F14683A1",
    icon: <Code className="h-6 w-6" />,
  },
  {
    title: "Google Certified TensorFlow Developer",
    issuer: "Google",
    date: "Oct 2023 - present",
    url: "https://www.credential.net/18ca281c-e4f3-488a-876b-fa279fa7319b?record_view=true",
    icon: <Code className="h-6 w-6" />,
  },
  {
    title: "Google Business Intellegence",
    issuer: "Google",
    date: "2024",
    url: "https://www.coursera.org/account/accomplishments/professional-cert/TEM2UT7UU684?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=prof",
    icon: <Layers className="h-6 w-6" />,
  },
  {
    title: "Microsoft Certified: Azure Data Fundamentals",
    issuer: "Microsoft",
    date: "2023",
    url: "https://learn.microsoft.com/api/credentials/share/en-us/RoissyahFernanda-1870/6F4F548BC703426D?sharingId=6E78F0C8F14683A1",
    icon: <Database className="h-6 w-6" />,
  },
  {
    title: "DeepLearning.AI Natural Language Processing Specialization",
    issuer: "DeepLearning.AI",
    date: "2023",
    url: "https://coursera.org/share/81a4d80a4cbe2acbd8716306df99c717",
    icon: <FileCode className="h-6 w-6" />,
  },
  {
    title: "DeepLearning.AI Machine Learning Specialization",
    issuer: "DeepLearning.AI",
    date: "2023",
    url: "https://www.coursera.org/account/accomplishments/specialization/4LV3TZZVR4ZT",
    icon: <FileCode className="h-6 w-6" />,
  },
  {
    title: "Google Data Analytics",
    issuer: "Google",
    date: "2023",
    url: "https://www.coursera.org/account/accomplishments/professional-cert/B76TUGSEVMPR?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=prof",
    icon: <Layers className="h-6 w-6" />,
  },
]

export default function ResumePage() {
  return (
    <div className="container py-12">
      <div className="mb-8 space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">Resume</h1>
        <p className="text-xl text-muted-foreground">My professional experience and qualifications</p>
      </div>

      {/* Education Section */}
      <section className="mb-12">
        <SectionHeading title="Education" />
        <Card>
          <CardHeader>
            <div className="flex flex-col justify-between gap-2 sm:flex-row">
              <CardTitle>Bachelor of Statistics</CardTitle>
              <div className="text-sm text-muted-foreground">Feb 2020 - April 2024</div>
            </div>
            <p className="text-muted-foreground">Universitas Terbuka Jember, East Java</p>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="font-medium">Cumulative GPA: 3.89 out of 4.0</p>
            </div>
            <div>
              <p className="font-medium">Undergraduate research project:</p>
              <p className="text-muted-foreground">
                Titled "Evaluating the Efficacy of ARIMA and Double Exponential Smoothing for Forecasting Fishermen's
                Exchange Rate in East Java"
              </p>
            </div>
            <div>
              <p className="font-medium">Activity:</p>
              <ul className="ml-6 list-disc text-muted-foreground">
                <li>Speaker at the 36th Knowledge Sharing Forum Universitas Terbuka</li>
                <li>Speaker at Statistics Student Talk Series One</li>
                <li>Speaker at Radio UT</li>
              </ul>
            </div>
            <div>
              <p className="font-medium">Relevant Coursework:</p>
              <p className="text-muted-foreground">
                Statistical Inference; R; SPSS; Linear Algebra; Multivariate Calculus; Operational Research
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Professional Experience Section */}
      <section className="mb-12">
        <SectionHeading title="Professional Experience" />
        <div className="space-y-6">
          {/* Bangkit Academy */}
          <Card>
            <CardHeader>
              <div className="flex flex-col justify-between gap-2 sm:flex-row">
                <CardTitle>Machine Learning Mentor - Part-time</CardTitle>
                <div className="text-sm text-muted-foreground">Feb – Dec 2024</div>
              </div>
              <p className="text-muted-foreground">
                Bangkit Academy led by Google, Tokopedia, Gojek, & Traveloka, Remote
              </p>
            </CardHeader>
            <CardContent>
              <ul className="ml-6 list-disc text-muted-foreground">
                <li>
                  Empowered 47 students through a structured mentorship program and a strategic learning approach;
                  fostering collaboration that boosted participation by 70%.
                </li>
                <li>
                  Drove student progress and successful coursework completion by facilitating weekly consultations
                  and providing expert guidance on machine learning projects.
                </li>
                <li>
                  Achieved a 92% graduation rate across two mentored batches, with average student ratings of 4.9/5.0
                  and instructor ratings of 4.8/5.0, reflecting impactful and highly satisfying mentoring.
                </li>
              </ul>
              <div className="mt-4">
                <p className="font-medium">Skills:</p>
                <p className="text-muted-foreground">
                Machine Learning Concepts; Mentorship & Coaching; Collaboration; Conflict Management; Leadership; Active Listening; Student Development; Performance Tracking
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Braincore.id */}
          <Card>
            <CardHeader>
              <div className="flex flex-col justify-between gap-2 sm:flex-row">
                <CardTitle>Research and Development Assistant - Part-time</CardTitle>
                <div className="text-sm text-muted-foreground">Jan – Dec 2024</div>
              </div>
              <p className="text-muted-foreground">Braincore.id, Remote</p>
            </CardHeader>
            <CardContent>
              <ul className="ml-6 list-disc text-muted-foreground">
                <li>
                  Conducted a comprehensive narrative review to identify relevant prior work,
                  significantly contributing to a groundbreaking AI/ML paper expected in top journals.
                </li>
                <li>
                  Reinforced a thesis student in the field of tourism, computer vision, and business intelligence by
                  providing guidance and resources; resulting in a 25% increase in productivity and timely completion of
                  the thesis.
                </li>
              </ul>
              <div className="mt-4">
                <p className="font-medium">Skills:</p>
                <p className="text-muted-foreground">
                Research & Literature Review; AI/ML Research; Scientific Writing; Computer Vision Concepts; Business Intelligence Concepts; Guidance & Support; Productivity Enhancement; Analytical Thinking
                </p>
              </div>
            </CardContent>
          </Card>
          
          {/* OMDENA */}
          <Card>
            <CardHeader>
              <div className="flex flex-col justify-between gap-2 sm:flex-row">
                <CardTitle>Data Analyst Open Source Project - Project-based</CardTitle>
                <div className="text-sm text-muted-foreground">Feb – March 2024</div>
              </div>
              <p className="text-muted-foreground">OMDENA India Local Chapter Challenge, Remote</p>
            </CardHeader>
            <CardContent>
              <ul className="ml-6 list-disc text-muted-foreground">
                <li>
                  Executed literature review of 5+ research papers on social media's impact on mental health, guiding chatbot development toward the most prevalent disorders.
                </li>
                <li>
                  Preprocessed 330.000 social media posts and built a sentiment model using fine-tuned XGBoost; improved accuracy by 10% compared to baseline models.
                </li>
                <li>
                  Integrated the best sentiment model; enabling the chatbot to prioritize negative inputs, reducing conversation time by 5%, leading to more focused and supportive interactions.
                </li>
              </ul>
              <div className="mt-4">
                <p className="font-medium">Skills:</p>
                <p className="text-muted-foreground">
                Data Preprocessing; Sentiment Analysis; Machine Learning (XGBoost, Model Tuning); Qualitative Research; Research & Literature Review; Data Quality
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Livingston Research */}
          <Card>
            <CardHeader>
              <div className="flex flex-col justify-between gap-2 sm:flex-row">
                <CardTitle>Statistics Tutor - Freelance</CardTitle>
                <div className="text-sm text-muted-foreground">Apr 2022 – Dec 2023</div>
              </div>
              <p className="text-muted-foreground">Livingston Research, Remote</p>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Guided students in mastering the intricacies of Mathematics, Statistics, and Data Analytics; garnered
                reviews with an average rating of 4 out of 5 stars based on student feedback.
              </p>
              <div className="mt-4">
                <p className="font-medium">Skills:</p>
                <p className="text-muted-foreground">
                Statistics; Mathematics; Data Analytics; Microsoft Excel; Concept Simplification; Student Engagement; Feedback Provision
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Skills Section - Now Interactive */}
      <section className="mb-12">
        <SectionHeading title="Skills" />
        <InteractiveSkills skills={skills} />
      </section>

      {/* Awards & Achievements Section - Now with Cards */}
      <section className="mb-12">
        <SectionHeading title="Awards & Achievements" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((achievement, index) => (
            <AchievementAwardCard
              key={index}
              title={achievement.title}
              organization={achievement.organization}
              date={achievement.date}
              description={achievement.description}
            />
          ))}
        </div>
      </section>

      {/* Certifications & Trainings Section - Now with Cards */}
      <section>
        <SectionHeading title="Certifications & Trainings" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((certification, index) => (
            <CertificationCard
              key={index}
              title={certification.title}
              issuer={certification.issuer}
              date={certification.date}
              url={certification.url}
              icon={certification.icon}
            />
          ))}
        </div>
      </section>
    </div>
  )
}
