"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  MessageSquare,
  Code,
  Briefcase,
  Users,
  Presentation,
  ArrowRight,
  Clock,
  Target,
  Star,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { AIChatInterface } from "@/components/dashboard/ai-chat-interface"

const interviewTypes = [
  {
    id: "behavioral",
    title: "Behavioral Interview",
    description: "Practice STAR method answers for common behavioral questions",
    icon: Users,
    difficulty: "Beginner",
    duration: "15-20 min",
    questions: 8,
  },
  {
    id: "technical",
    title: "Technical Interview",
    description: "System design and problem-solving discussions",
    icon: Code,
    difficulty: "Intermediate",
    duration: "30-45 min",
    questions: 5,
  },
  {
    id: "case",
    title: "Case Study",
    description: "Business case analysis and strategic thinking",
    icon: Briefcase,
    difficulty: "Advanced",
    duration: "25-35 min",
    questions: 3,
  },
  {
    id: "presentation",
    title: "Sales Pitch",
    description: "Practice delivering compelling presentations",
    icon: Presentation,
    difficulty: "Intermediate",
    duration: "10-15 min",
    questions: 4,
  },
]

export default function PracticePage() {
  const [selectedType, setSelectedType] = useState<string | null>(null)
  const [sessionStarted, setSessionStarted] = useState(false)

  if (sessionStarted && selectedType) {
    return (
      <AIChatInterface
        interviewType={selectedType}
        onEnd={() => {
          setSessionStarted(false)
          setSelectedType(null)
        }}
      />
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-4xl mx-auto space-y-8"
    >
      {/* Header */}
      <div className="text-center">
        <h1 className="text-2xl sm:text-3xl font-bold text-foreground">
          Start a Practice Session
        </h1>
        <p className="text-muted-foreground mt-2">
          Choose your interview type and practice with our AI coach
        </p>
      </div>

      {/* Interview Types */}
      <div className="grid sm:grid-cols-2 gap-4">
        {interviewTypes.map((type) => {
          const isSelected = selectedType === type.id
          return (
            <Card
              key={type.id}
              className={`cursor-pointer transition-all duration-300 ${
                isSelected
                  ? "border-primary blue-glow-sm"
                  : "border-border hover:border-primary/30"
              }`}
              onClick={() => setSelectedType(type.id)}
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    isSelected ? "gradient-primary" : "bg-primary/10"
                  }`}>
                    <type.icon className={`w-6 h-6 ${
                      isSelected ? "text-primary-foreground" : "text-primary"
                    }`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground">{type.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {type.description}
                    </p>
                    <div className="flex flex-wrap items-center gap-3 mt-3">
                      <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock className="w-3 h-3" />
                        {type.duration}
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                        <Target className="w-3 h-3" />
                        {type.questions} questions
                      </span>
                      <span className={`inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full ${
                        type.difficulty === "Beginner"
                          ? "bg-green-100 text-green-700"
                          : type.difficulty === "Intermediate"
                          ? "bg-primary/10 text-primary"
                          : "bg-orange-100 text-orange-700"
                      }`}>
                        <Star className="w-3 h-3" />
                        {type.difficulty}
                      </span>
                    </div>
                  </div>
                </div>
                {isSelected && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="mt-4 pt-4 border-t border-border"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-primary font-medium">Selected</span>
                      <div className="w-5 h-5 rounded-full gradient-primary flex items-center justify-center">
                        <svg className="w-3 h-3 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                  </motion.div>
                )}
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Start Button */}
      <div className="flex justify-center">
        <Button
          size="lg"
          disabled={!selectedType}
          onClick={() => setSessionStarted(true)}
          className="gradient-primary text-primary-foreground rounded-xl text-lg px-12 h-14 hover:brightness-110 transition-all disabled:opacity-50 disabled:cursor-not-allowed group"
        >
          <MessageSquare className="w-5 h-5 mr-2" />
          Start Practice Session
          <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>

      {/* Tips */}
      <Card className="border-border bg-primary/5">
        <CardContent className="p-6">
          <h3 className="font-semibold text-foreground mb-3">Tips for a Great Session</h3>
          <ul className="space-y-2">
            {[
              "Find a quiet place with minimal distractions",
              "Speak clearly and at a moderate pace",
              "Use the STAR method for behavioral questions",
              "Take a moment to think before responding",
            ].map((tip, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="w-5 h-5 rounded-full bg-primary/20 text-primary text-xs flex items-center justify-center shrink-0 mt-0.5">
                  {index + 1}
                </span>
                {tip}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </motion.div>
  )
}
