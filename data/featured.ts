export interface Featured {
  title: string
  description: string
  image: string
  url: string
  type: "Article" | "Event"
  date: string // Month, Year format
  source: string // Source of the article or event
}

export const featuredItems: Featured[] = [
  {
    title: "Google AI for the Golden Generation of Indonesia",
    description:
      "Delivered a speech at the Google AI for the Golden Generation of Indonesia event, sharing insights on AI applications and opportunities in Indonesia.",
    image: "/placeholder.svg?height=400&width=600",
    url: "https://example.com/google-ai-event",
    type: "Event",
    date: "June 2024",
    source: "Google Indonesia",
  },
  {
    title: "International Women's Day 2024 with Google Indonesia",
    description:
      "Collaborated with Google Indonesia on the International Women's Day 2024 initiative, promoting women in technology and data science.",
    image: "/placeholder.svg?height=400&width=600",
    url: "https://example.com/iwd-2024",
    type: "Event",
    date: "March 2024",
    source: "Google Indonesia",
  },
  {
    title: "The Future of Data Science in Indonesia",
    description:
      "An article discussing the growing importance of data science in Indonesia and future opportunities in the field.",
    image: "/placeholder.svg?height=400&width=600",
    url: "https://example.com/data-science-indonesia",
    type: "Article",
    date: "April 2024",
    source: "Medium",
  },
  {
    title: "Machine Learning for Healthcare: A Case Study",
    description:
      "An article exploring the application of machine learning techniques in healthcare, with a focus on the JKN Mobile application.",
    image: "/placeholder.svg?height=400&width=600",
    url: "https://example.com/ml-healthcare",
    type: "Article",
    date: "February 2024",
    source: "Towards Data Science",
  },
]
