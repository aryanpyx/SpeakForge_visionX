"use client"

import { motion } from "framer-motion"
import {
  BookOpen,
  Video,
  FileText,
  Headphones,
  Download,
  ExternalLink,
  Play,
  Clock,
  Star,
  Filter,
  Search,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useState } from "react"

const categories = [
  { id: "all", label: "All Resources" },
  { id: "guides", label: "Guides" },
  { id: "videos", label: "Videos" },
  { id: "templates", label: "Templates" },
  { id: "podcasts", label: "Podcasts" },
]

const resources = [
  {
    id: 1,
    title: "Mastering the STAR Method",
    description: "Learn how to structure your answers using the Situation, Task, Action, Result framework.",
    type: "guide",
    duration: "15 min read",
    rating: 4.9,
    featured: true,
    icon: FileText,
  },
  {
    id: 2,
    title: "Body Language Fundamentals",
    description: "Video course on non-verbal communication and its impact on your interview presence.",
    type: "video",
    duration: "45 min",
    rating: 4.8,
    featured: true,
    icon: Video,
  },
  {
    id: 3,
    title: "Technical Interview Prep Guide",
    description: "Comprehensive guide covering system design, coding interviews, and behavioral questions.",
    type: "guide",
    duration: "30 min read",
    rating: 4.7,
    featured: false,
    icon: FileText,
  },
  {
    id: 4,
    title: "Executive Presence Podcast",
    description: "Weekly podcast featuring industry leaders sharing communication strategies.",
    type: "podcast",
    duration: "8 episodes",
    rating: 4.6,
    featured: false,
    icon: Headphones,
  },
  {
    id: 5,
    title: "Resume & Cover Letter Templates",
    description: "Professional templates optimized for ATS systems and human reviewers.",
    type: "template",
    duration: "5 templates",
    rating: 4.8,
    featured: true,
    icon: Download,
  },
  {
    id: 6,
    title: "Salary Negotiation Masterclass",
    description: "Step-by-step video guide on negotiating your compensation package.",
    type: "video",
    duration: "1 hour",
    rating: 4.9,
    featured: false,
    icon: Video,
  },
  {
    id: 7,
    title: "Common Interview Questions Bank",
    description: "Database of 200+ questions with sample answers for various industries.",
    type: "template",
    duration: "200+ questions",
    rating: 4.7,
    featured: false,
    icon: FileText,
  },
  {
    id: 8,
    title: "Public Speaking Fundamentals",
    description: "Audio course on voice projection, pacing, and confident delivery.",
    type: "podcast",
    duration: "6 episodes",
    rating: 4.5,
    featured: false,
    icon: Headphones,
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export default function ResourcesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredResources = resources.filter((resource) => {
    const matchesSearch =
      resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = activeCategory === "all" || resource.type === activeCategory.slice(0, -1)
    return matchesSearch && matchesCategory
  })

  const featuredResources = resources.filter((r) => r.featured)

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between"
      >
        <div>
          <h1 className="text-3xl font-bold text-foreground">Learning Resources</h1>
          <p className="text-muted-foreground mt-1">
            Guides, videos, and templates to accelerate your communication skills
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search resources..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9 w-64"
            />
          </div>
          <Button variant="outline" size="icon">
            <Filter className="w-4 h-4" />
          </Button>
        </div>
      </motion.div>

      {/* Featured Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <div className="flex items-center gap-2 mb-4">
          <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
          <h2 className="text-xl font-semibold text-foreground">Featured Resources</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {featuredResources.map((resource, index) => (
            <motion.div
              key={resource.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 + index * 0.1 }}
            >
              <Card className="h-full border-primary/20 bg-gradient-to-br from-primary/5 to-transparent hover:shadow-md transition-all cursor-pointer group">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <resource.icon className="w-5 h-5 text-primary" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {resource.type}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg mt-3 group-hover:text-primary transition-colors">
                    {resource.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-2">{resource.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>{resource.duration}</span>
                    </div>
                    <div className="flex items-center gap-1 text-sm">
                      <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      <span className="font-medium">{resource.rating}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* All Resources */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="mb-6">
            {categories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.label}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value={activeCategory} className="mt-0">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
            >
              {filteredResources.map((resource) => (
                <motion.div key={resource.id} variants={itemVariants}>
                  <Card className="h-full hover:shadow-md transition-all cursor-pointer group">
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between">
                        <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center">
                          <resource.icon className="w-5 h-5 text-muted-foreground" />
                        </div>
                        <Badge variant="outline" className="text-xs capitalize">
                          {resource.type}
                        </Badge>
                      </div>
                      <CardTitle className="text-base mt-3 group-hover:text-primary transition-colors">
                        {resource.title}
                      </CardTitle>
                      <CardDescription className="text-sm line-clamp-2">
                        {resource.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Clock className="w-4 h-4" />
                          <span>{resource.duration}</span>
                        </div>
                        <Button variant="ghost" size="sm" className="gap-1.5">
                          {resource.type === "video" ? (
                            <>
                              <Play className="w-3.5 h-3.5" />
                              Watch
                            </>
                          ) : resource.type === "template" ? (
                            <>
                              <Download className="w-3.5 h-3.5" />
                              Download
                            </>
                          ) : resource.type === "podcast" ? (
                            <>
                              <Headphones className="w-3.5 h-3.5" />
                              Listen
                            </>
                          ) : (
                            <>
                              <ExternalLink className="w-3.5 h-3.5" />
                              Read
                            </>
                          )}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>
        </Tabs>

        {filteredResources.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <BookOpen className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-medium text-foreground">No resources found</h3>
            <p className="text-muted-foreground mt-1">Try adjusting your search or filters</p>
          </motion.div>
        )}
      </motion.section>

      {/* Quick Tips */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <Card className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-primary" />
              Quick Learning Tips
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                  <span className="text-primary font-bold">1</span>
                </div>
                <div>
                  <h4 className="font-medium text-foreground">Start with Guides</h4>
                  <p className="text-sm text-muted-foreground">Build a foundation with our comprehensive written guides</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-lg bg-secondary/20 flex items-center justify-center shrink-0">
                  <span className="text-secondary font-bold">2</span>
                </div>
                <div>
                  <h4 className="font-medium text-foreground">Watch & Learn</h4>
                  <p className="text-sm text-muted-foreground">Reinforce concepts with video demonstrations</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center shrink-0">
                  <span className="text-accent font-bold">3</span>
                </div>
                <div>
                  <h4 className="font-medium text-foreground">Practice Daily</h4>
                  <p className="text-sm text-muted-foreground">Use templates and tools to practice regularly</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.section>
    </div>
  )
}
