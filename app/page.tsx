"use client"

import Image from "next/image"
import Link from "next/link"
import { Award, GraduationCap, Mail, Linkedin, BarChart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { SectionHeading } from "@/components/section-heading"
import { AchievementCard } from "@/components/achievement-card"
import { TypingAnimation } from "@/components/typing-animation"

export default function Home() {
  return (
    <div className="container py-12">
      {/* Hero Section */}
      <section className="mb-16 flex flex-col items-center gap-8 md:flex-row">
        <div className="flex-1 space-y-4">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Roissyah Fernanda Khoiroh</h1>
          <TypingAnimation
            phrases={["Data Scientist", "Uncovering Insights, Elevating Impact", "Solving Problems with Algorithms"]}
            className="text-lg text-muted-foreground"
            typingSpeed={80}
          />
          <p className="max-w-[600px] text-muted-foreground">
            Statistics graduate with hands-on experience in building predictive models, developing interactive
            dashboards, and automating data-driven processes.
          </p>
          <div className="flex flex-col gap-3 pt-4 sm:flex-row">
            <Button asChild>
              <Link href="/projects">View Projects</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/resume">View Resume</Link>
            </Button>
          </div>
        </div>
        <div className="relative h-60 w-60 overflow-hidden rounded-full border-4 border-primary md:h-80 md:w-80">
          <Image
            src="/myself-opt1.jpg?height=320&width=320"
            alt="Roissyah Fernanda Khoiroh"
            fill
            className="object-cover"
            priority
            unoptimized={true}
          />
        </div>
      </section>

      {/* Achievements Section */}
      <section className="mb-16">
        <SectionHeading title="Key Achievements" description="Highlights of my academic and professional journey" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <AchievementCard title="GPA" value="3.89/4.0" icon={<GraduationCap />} />
          <AchievementCard title="Awards" value="4+" icon={<Award />} />
          <AchievementCard title="Projects" value="10+" icon={<BarChart />} />
        </div>
      </section>

      {/* About Section */}
      <section className="mb-16">
        <SectionHeading title="About Me" />
        <Card>
          <CardContent className="p-6">
            <p className="mb-4 text-justify">
              Nanda's career path took an unexpected turn. Initially, Nanda aimed to be a chemist, but a challenging surgical experience led her to pursue statistics.
              This shift sparked Nanda's interest in Data and AI, with the ambition of becoming a Data Scientist.
            </p>
            <p className="mb-4 text-justify">
              From 2022 onwards, Nanda has dedicated herself to mastering Data Science.
              Her learning journey includes formal training, self-study with open-source resources, developing personal projects, and participating in competitions.
              Through consistent effort and staying updated with new developments, Nanda has gained skills in clustering, regression, classification, text analysis, and statistical modeling.
              She is proficient in using Python, SQL, and Tableau to extract valuable insights from both structured and unstructured data, including text.
            </p>
            <p className="mb-4 text-justify">
              Nanda spent a year as a machine learning mentor, successfully guiding students through a training program.
              Her strategic guidance resulted in an average graduation rate of 92% across the two classes she mentored.
              Additionally, Nanda worked at a consulting firm, gaining practical experience in optimizing business processes through data science and data analytics within a team environment.
            </p>
            <p className="mb-4 text-justify">
              Former colleagues describe Nanda as highly passionate about learning, demonstrating a "can-do" attitude and a commitment to excellence in all assignments.
              Throughout her experiences, Nanda has developed a strong understanding of problem-solving, data processing, model building, evaluation, deployment, and dashboard creation.
            </p>
            <p className="mb-4 text-justify">
              Nanda maintains a blog where she shares her learning experiences.
              Her current areas of interest include MLOps, Generative AI, Supply Chain management, and puts special attention to Diversity, Equity, and Inclusion (DEI) issues. Nanda is actively seeking opportunities in the Data and AI field.
              For those seeking a data-driven, inquisitive, and collaborative team member, Nanda welcomes contact.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Contact Section */}
      <section>
        <SectionHeading title="Contact" />
        <div className="grid gap-4 sm:grid-cols-2">
          <Card>
            <CardContent className="flex items-center gap-4 p-6">
              <Mail className="h-6 w-6 text-primary" />
              <div>
                <h3 className="font-medium">Email</h3>
                <p className="text-sm text-muted-foreground">
                  <a href="mailto:roissyahfk@gmail.com" className="hover:text-primary">
                    roissyahfk@gmail.com
                  </a>
                </p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-center gap-4 p-6">
              <Linkedin className="h-6 w-6 text-primary" />
              <div>
                <h3 className="font-medium">LinkedIn</h3>
                <p className="text-sm text-muted-foreground">
                  <a
                    href="https://linkedin.com/in/roissyahfernanda"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary"
                  >
                    linkedin.com/in/roissyahfernanda
                  </a>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
