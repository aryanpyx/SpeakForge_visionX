"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Play, ArrowRight, Mic, Brain, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium text-primary">AI-Powered Training Platform</span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
              Master Your{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Communication
              </span>{" "}
              Skills with AI
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Practice interviews, receive instant AI feedback, and track your progress. 
              Build confidence and land your dream opportunities.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/signup">
                <Button 
                  size="lg" 
                  className="gradient-primary text-primary-foreground rounded-xl text-lg px-8 h-14 hover:brightness-110 transition-all blue-glow group"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Button 
                size="lg" 
                variant="outline" 
                className="rounded-xl text-lg px-8 h-14 border-border hover:bg-muted/50"
              >
                <Play className="mr-2 w-5 h-5" />
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-6">
              {[
                { value: "50K+", label: "Active Users" },
                { value: "1M+", label: "Sessions Completed" },
                { value: "95%", label: "Success Rate" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="text-center lg:text-left"
                >
                  <div className="text-2xl sm:text-3xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Interactive Demo Preview */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative glass-card rounded-3xl p-6 sm:p-8 blue-glow">
              {/* Mock AI Chat Interface */}
              <div className="space-y-4">
                {/* AI Message */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="flex gap-3"
                >
                  <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center shrink-0">
                    <Brain className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div className="bg-card rounded-2xl rounded-tl-sm p-4 border border-border max-w-xs">
                    <p className="text-sm text-foreground">
                      Tell me about a time you demonstrated leadership in a challenging situation.
                    </p>
                  </div>
                </motion.div>

                {/* User Message */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="flex gap-3 justify-end"
                >
                  <div className="bg-primary/10 rounded-2xl rounded-tr-sm p-4 max-w-xs">
                    <p className="text-sm text-foreground">
                      During my internship, I led a team of 5 to redesign our customer onboarding...
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-secondary/20 flex items-center justify-center shrink-0">
                    <span className="text-sm font-semibold text-primary">JD</span>
                  </div>
                </motion.div>

                {/* Voice Analysis Bar */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                  className="flex items-center gap-3 p-4 bg-muted/50 rounded-xl"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                    <Mic className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium text-foreground">Voice Analysis</span>
                      <span className="text-sm text-primary font-semibold">87%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "87%" }}
                        transition={{ delay: 1.2, duration: 1 }}
                        className="h-full gradient-primary rounded-full"
                      />
                    </div>
                  </div>
                </motion.div>

                {/* Feedback Preview */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.4 }}
                  className="flex items-center gap-3 p-4 bg-card rounded-xl border border-border"
                >
                  <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Great progress!</p>
                    <p className="text-xs text-muted-foreground">Confidence improved by 23%</p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="absolute -top-6 -right-6 w-20 h-20 glass-card rounded-2xl flex items-center justify-center shadow-lg"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">A+</div>
                <div className="text-xs text-muted-foreground">Score</div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 3, delay: 1 }}
              className="absolute -bottom-4 -left-4 w-16 h-16 glass-card rounded-2xl flex items-center justify-center shadow-lg"
            >
              <Brain className="w-8 h-8 text-primary" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
