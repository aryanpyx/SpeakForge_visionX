"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Brain,
  Send,
  Mic,
  MicOff,
  Square,
  Volume2,
  RotateCcw,
  X,
  Timer,
  TrendingUp,
  CheckCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

interface Message {
  id: string
  role: "ai" | "user"
  content: string
  timestamp: Date
}

interface AIChatInterfaceProps {
  interviewType: string
  onEnd: () => void
}

const interviewQuestions: Record<string, string[]> = {
  behavioral: [
    "Tell me about a time when you had to lead a team through a challenging project.",
    "Describe a situation where you had to deal with a difficult coworker. How did you handle it?",
    "Give me an example of a goal you set and how you achieved it.",
    "Tell me about a time you failed. What did you learn from it?",
    "Describe a situation where you had to make a quick decision under pressure.",
  ],
  technical: [
    "How would you design a URL shortening service like bit.ly?",
    "Explain how you would approach scaling a real-time messaging system.",
    "What are the trade-offs between SQL and NoSQL databases?",
    "How would you optimize a slow database query?",
    "Describe your approach to handling high-traffic scenarios.",
  ],
  case: [
    "A retail company's profits have declined by 20% over the past year. How would you investigate this?",
    "How would you enter a new market for a food delivery startup?",
    "A tech company wants to launch a new product. How would you assess market viability?",
  ],
  presentation: [
    "Introduce yourself and tell me about a product you're passionate about.",
    "Pitch a solution to improve remote team collaboration.",
    "Present a strategy for entering the enterprise market.",
    "Deliver a 2-minute pitch for a sustainable energy solution.",
  ],
}

export function AIChatInterface({ interviewType, onEnd }: AIChatInterfaceProps) {
  const [messages, setMessages] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState("")
  const [isRecording, setIsRecording] = useState(false)
  const [isTyping, setIsTyping] = useState(false)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [sessionTime, setSessionTime] = useState(0)
  const [showFeedback, setShowFeedback] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLTextAreaElement>(null)

  const questions = interviewQuestions[interviewType] || interviewQuestions.behavioral

  // Initialize with first question
  useEffect(() => {
    const initialMessage: Message = {
      id: "1",
      role: "ai",
      content: `Great! Let's begin your ${interviewType} interview practice. I'll ask you a series of questions, and you can respond naturally. Take your time to think before answering.\n\nHere's your first question:\n\n${questions[0]}`,
      timestamp: new Date(),
    }
    setMessages([initialMessage])
  }, [interviewType, questions])

  // Timer
  useEffect(() => {
    const timer = setInterval(() => {
      setSessionTime((prev) => prev + 1)
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }

  const handleSend = async () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: inputValue,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsTyping(true)

    // Simulate AI response
    await new Promise((resolve) => setTimeout(resolve, 1500 + Math.random() * 1000))

    const nextQuestion = currentQuestion + 1
    let aiResponse: string

    if (nextQuestion < questions.length) {
      aiResponse = `Thank you for your response. That's a good example of ${
        interviewType === "behavioral" ? "using the STAR method" : "structured thinking"
      }.\n\nHere's your next question:\n\n${questions[nextQuestion]}`
      setCurrentQuestion(nextQuestion)
    } else {
      aiResponse = `Excellent! You've completed all the questions in this practice session. Great job!\n\nWould you like to see your feedback summary?`
      setShowFeedback(true)
    }

    const aiMessage: Message = {
      id: (Date.now() + 1).toString(),
      role: "ai",
      content: aiResponse,
      timestamp: new Date(),
    }

    setIsTyping(false)
    setMessages((prev) => [...prev, aiMessage])
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  const toggleRecording = () => {
    setIsRecording(!isRecording)
    // In a real implementation, this would use the Web Speech API
  }

  return (
    <div className="h-[calc(100vh-8rem)] flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between pb-4 border-b border-border">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
            <Brain className="w-5 h-5 text-primary-foreground" />
          </div>
          <div>
            <h2 className="font-semibold text-foreground capitalize">{interviewType} Interview</h2>
            <p className="text-sm text-muted-foreground">AI Coach Session</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-muted">
            <Timer className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground">{formatTime(sessionTime)}</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-muted">
            <span className="text-sm text-muted-foreground">
              Q {currentQuestion + 1}/{questions.length}
            </span>
          </div>
          <Button variant="outline" size="sm" onClick={onEnd} className="rounded-lg">
            <X className="w-4 h-4 mr-2" />
            End Session
          </Button>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="py-3">
        <Progress value={((currentQuestion + 1) / questions.length) * 100} className="h-2" />
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto py-4 space-y-6">
        <AnimatePresence>
          {messages.map((message) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className={`flex gap-3 ${message.role === "user" ? "justify-end" : ""}`}
            >
              {message.role === "ai" && (
                <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center shrink-0">
                  <Brain className="w-5 h-5 text-primary-foreground" />
                </div>
              )}
              <div
                className={`max-w-[80%] sm:max-w-[70%] p-4 rounded-2xl ${
                  message.role === "user"
                    ? "bg-primary/10 rounded-tr-sm"
                    : "bg-card border border-border rounded-tl-sm"
                }`}
              >
                <p className="text-foreground whitespace-pre-wrap leading-relaxed">
                  {message.content}
                </p>
                <p className="text-xs text-muted-foreground mt-2">
                  {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                </p>
              </div>
              {message.role === "user" && (
                <div className="w-10 h-10 rounded-xl bg-secondary/20 flex items-center justify-center shrink-0">
                  <span className="text-sm font-semibold text-primary">JD</span>
                </div>
              )}
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Typing Indicator */}
        {isTyping && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex gap-3"
          >
            <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center shrink-0">
              <Brain className="w-5 h-5 text-primary-foreground" />
            </div>
            <div className="bg-card border border-border rounded-2xl rounded-tl-sm p-4">
              <div className="flex gap-1">
                <span className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                <span className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                <span className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
              </div>
            </div>
          </motion.div>
        )}

        {/* Feedback Card */}
        {showFeedback && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <Card className="border-primary blue-glow-sm">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Session Complete!</h3>
                    <p className="text-sm text-muted-foreground">Here's your performance summary</p>
                  </div>
                </div>

                <div className="grid sm:grid-cols-3 gap-4 mt-6">
                  <div className="p-4 rounded-xl bg-primary/5">
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingUp className="w-4 h-4 text-primary" />
                      <span className="text-sm text-muted-foreground">Confidence</span>
                    </div>
                    <p className="text-2xl font-bold text-foreground">87%</p>
                  </div>
                  <div className="p-4 rounded-xl bg-primary/5">
                    <div className="flex items-center gap-2 mb-2">
                      <Volume2 className="w-4 h-4 text-primary" />
                      <span className="text-sm text-muted-foreground">Clarity</span>
                    </div>
                    <p className="text-2xl font-bold text-foreground">92%</p>
                  </div>
                  <div className="p-4 rounded-xl bg-primary/5">
                    <div className="flex items-center gap-2 mb-2">
                      <Timer className="w-4 h-4 text-primary" />
                      <span className="text-sm text-muted-foreground">Duration</span>
                    </div>
                    <p className="text-2xl font-bold text-foreground">{formatTime(sessionTime)}</p>
                  </div>
                </div>

                <div className="flex gap-3 mt-6">
                  <Button
                    className="flex-1 gradient-primary text-primary-foreground rounded-xl"
                    onClick={() => {
                      setMessages([])
                      setCurrentQuestion(0)
                      setShowFeedback(false)
                      setSessionTime(0)
                    }}
                  >
                    <RotateCcw className="w-4 h-4 mr-2" />
                    Practice Again
                  </Button>
                  <Button variant="outline" className="flex-1 rounded-xl" onClick={onEnd}>
                    View Analytics
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      {!showFeedback && (
        <div className="pt-4 border-t border-border">
          <div className="flex gap-3">
            <div className="flex-1 relative">
              <textarea
                ref={inputRef}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type your response..."
                rows={2}
                className="w-full px-4 py-3 pr-24 rounded-xl bg-muted/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary resize-none"
              />
              <div className="absolute right-2 bottom-2 flex gap-2">
                <Button
                  size="icon"
                  variant="ghost"
                  onClick={toggleRecording}
                  className={`rounded-lg ${isRecording ? "text-destructive" : "text-muted-foreground"}`}
                >
                  {isRecording ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
                </Button>
                <Button
                  size="icon"
                  onClick={handleSend}
                  disabled={!inputValue.trim()}
                  className="gradient-primary text-primary-foreground rounded-lg disabled:opacity-50"
                >
                  <Send className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-2 text-center">
            Press Enter to send, Shift+Enter for new line
          </p>
        </div>
      )}
    </div>
  )
}
