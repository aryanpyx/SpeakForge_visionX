"use client"

import { motion } from "framer-motion"
import { 
  Mic, 
  Brain, 
  BarChart3, 
  MessageSquare, 
  Video, 
  Target,
  Zap,
  Shield
} from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "AI Interview Coach",
    description: "Practice with our intelligent AI that adapts to your skill level and provides real-time guidance.",
  },
  {
    icon: Mic,
    title: "Voice Analysis",
    description: "Get detailed feedback on your tone, pace, clarity, and confidence through advanced voice recognition.",
  },
  {
    icon: BarChart3,
    title: "Progress Analytics",
    description: "Track your improvement over time with comprehensive dashboards and performance insights.",
  },
  {
    icon: MessageSquare,
    title: "Instant Feedback",
    description: "Receive personalized suggestions immediately after each practice session to improve faster.",
  },
  {
    icon: Video,
    title: "Video Practice",
    description: "Record and review your responses with AI-powered body language and facial expression analysis.",
  },
  {
    icon: Target,
    title: "Custom Scenarios",
    description: "Practice with industry-specific interview questions tailored to your target role.",
  },
  {
    icon: Zap,
    title: "Quick Sessions",
    description: "Fit practice into your busy schedule with focused 5-15 minute training sessions.",
  },
  {
    icon: Shield,
    title: "Private & Secure",
    description: "Your practice sessions are encrypted and never shared. Your data belongs to you.",
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

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Features
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Everything You Need to{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Excel
            </span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Our comprehensive platform combines cutting-edge AI with proven communication techniques
            to help you become a confident communicator.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="group relative"
            >
              <div className="h-full p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg hover:blue-glow-sm transition-all duration-300">
                <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
