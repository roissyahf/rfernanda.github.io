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
    title: "Mengenal Pelanggan Lebih Dalam: Segmentasi Pelanggan untuk Meningkatkan Efektivitas Pemasaran",
    description:
        "This session unveils practical approaches to elevate marketing efficiency, moving from core concepts to actionable insights.",
    image: "/featured/event-SMKDEV.png?height=400&width=600",
    url: "https://www.canva.com/design/DAGYaiDv8wo/LDeZHOKVheeNslwF0_FWvw/edit?utm_content=DAGYaiDv8wo&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
    type: "Event",
    date: "Dec 2024",
    source: "SMKDEV Official",
  },
  {
    title: "Ukir Prestasi melalui Kuliah Online di UT, Keterbatasan Bukan Penghalang Raih Kesuksesan",
    description:
        "See the best moments from my university graduation, including university appreciation and my speech as the graduate representative.",
    image: "/featured/article-radarjember.jpg?height=400&width=600",
    url: "https://radarjember.jawapos.com/sinergi/795342102/ukir-prestasi-melalui-kuliah-online-di-ut-keterbatasan-bukan-penghalang-raih-kesuksesan#google_vignette",
    type: "Article",
    date: "Nov 2024",
    source: "Radar Jember JAWAPOS",
  },
  {
    title: "Perjuangan dan Dedikasi Nanda: Kampus Merdeka Kucapai, Panggung Google AI Kugapai",
    description:
        "Follow my journey after participating in the Bangkit Academy. Learn about my biggest lessons and my aspirations for the future.",
    image: "/featured/article-kemendikbuddikti.JPG?height=400&width=600",
    url: "https://dikti.kemdikbud.go.id/kabar-dikti/kampus-kita/perjuangan-dan-dedikasi-nanda-kampus-merdeka-kucapai-panggung-google-ai-kugapai/",
    type: "Article",
    date: "Aug 2024",
    source: "KEMENDIKBUD DIKTI",
  },
  {
    title: "Google AI untuk Indonesia Emas",
    description:
        "A discussion on the role of Google AI in supporting Indonesia's development, featuring insights from the Bangkit Academy program.",
    image: "/featured/event-googleai.jpg?height=400&width=600",
    url: "https://www.youtube.com/live/_R0vbfxcCL4?si=RIjDMfexhG1SS6mG&t=3576",
    type: "Event",
    date: "June 2024",
    source: "Google Indonesia",
  },
  {
    title: "How to Enhance Your Statistical Skills",
    description:
        "A sharing session on enhancing statistical skills for students, featuring the introduction to the world of Data Science.",
    image: "/featured/event-statistika.jpg?height=400&width=600",
    url: "https://youtu.be/hapPJgTc24w?si=SnMSfrwLsXVxS0aa&t=1389",
    type: "Event",
    date: "June 2024",
    source: "HIMA Statistika UT",
  },
  {
    title: "My Physical Condition Is Not a Barrier to My Ambition",
    description:
        "Thrilled to share my story on the Bangkit Blog about embracing lifelong learning and its impact on my growth.",
    image: "/featured/article-bangkitblog.jpg?height=400&width=600",
    url: "https://blog.bangkit.academy/2024/02/my-physical-condition-is-not-barrier-to.html",
    type: "Article",
    date: "Feb 2024",
    source: "Bangkit Academy Blog",
  },
]
