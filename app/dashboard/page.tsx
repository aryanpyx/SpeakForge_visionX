"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import {
  MessageSquare,
  Mic,
  TrendingUp,
  Clock,
  Target,
  Trophy,
  ArrowRight,
  Play,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

const stats = [
  {
    title: "Practice Sessions",
    value: "24",
    change: "+3 this week",
    icon: MessageSquare,
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    title: "Voice Score",
    value: "87%",
    change: "+5% improvement",
    icon: Mic,
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
  {
    title: "Confidence Level",
    value: "92%",
    change: "+8% this month",
    icon: TrendingUp,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
  {
    title: "Practice Time",
    value: "12.5h",
    change: "+2h this week",
    icon: Clock,
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
]

const recentSessions = [
  {
    title: "Behavioral Interview",
    type: "Leadership Questions",
    score: 88,
    date: "2 hours ago",
  },
  {
    title: "Technical Interview",
    type: "System Design",
    score: 75,
    date: "Yesterday",
  },
  {
    title: "Sales Pitch",
    type: "Product Presentation",
    score: 92,
    date: "2 days ago",
  },
]

const quickActions = [
  {
    title: "Start Interview",
    description: "Practice with AI coach",
    icon: MessageSquare,
    href: "/dashboard/practice",
    gradient: "gradient-primary",
  },
  {
    title: "Voice Training",
    description: "Improve your delivery",
    icon: Mic,
    href: "/dashboard/voice",
    gradient: "bg-secondary",
  },
  {
    title: "View Analytics",
    description: "Track your progress",
    icon: TrendingUp,
    href: "/dashboard/analytics",
    gradient: "bg-accent",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export default function DashboardPage() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-8"
    >
      {/* Welcome Section */}
      <motion.div variants={itemVariants}>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-foreground">
              Welcome back, John!
            </h1>
            <p className="text-muted-foreground mt-1">
              {"Ready to practice? You're on a 5-day streak!"}
            </p>
          </div>
          <Link href="/dashboard/practice">
            <Button className="gradient-primary text-primary-foreground rounded-xl hover:brightness-110 transition-all group">
              <Play className="w-4 h-4 mr-2" />
              Start Practice
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </motion.div>

      {/* Stats Grid */}
      <motion.div variants={itemVariants} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <Card key={stat.title} className="border-border hover:border-primary/30 transition-colors">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{stat.title}</p>
                  <p className="text-2xl font-bold text-foreground mt-1">{stat.value}</p>
                  <p className="text-xs text-primary mt-1">{stat.change}</p>
                </div>
                <div className={`w-10 h-10 rounded-xl ${stat.bgColor} flex items-center justify-center`}>
                  <stat.icon className={`w-5 h-5 ${stat.color}`} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </motion.div>

      {/* Main Content Grid */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Quick Actions */}
        <motion.div variants={itemVariants} className="lg:col-span-2">
          <Card className="border-border">
            <CardHeader>
              <CardTitle className="text-lg">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid sm:grid-cols-3 gap-4">
                {quickActions.map((action) => (
                  <Link key={action.title} href={action.href}>
                    <div className="group p-6 rounded-2xl border border-border hover:border-primary/30 hover:shadow-md transition-all cursor-pointer">
                      <div className={`w-12 h-12 rounded-xl ${action.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                        <action.icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <h3 className="font-semibold text-foreground">{action.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{action.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Goals */}
        <motion.div variants={itemVariants}>
          <Card className="border-border h-full">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Target className="w-5 h-5 text-primary" />
                Weekly Goals
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-foreground">Practice Sessions</span>
                  <span className="text-sm font-medium text-primary">5/7</span>
                </div>
                <Progress value={71} className="h-2" />
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-foreground">Voice Score</span>
                  <span className="text-sm font-medium text-primary">87/90</span>
                </div>
                <Progress value={96} className="h-2" />
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-foreground">Confidence</span>
                  <span className="text-sm font-medium text-primary">92/95</span>
                </div>
                <Progress value={96} className="h-2" />
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Recent Sessions & Achievements */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Recent Sessions */}
        <motion.div variants={itemVariants}>
          <Card className="border-border">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-lg">Recent Sessions</CardTitle>
              <Link href="/dashboard/practice">
                <Button variant="ghost" size="sm" className="text-primary">
                  View All
                </Button>
              </Link>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentSessions.map((session, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <MessageSquare className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-foreground truncate">{session.title}</p>
                      <p className="text-sm text-muted-foreground">{session.type}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-primary">{session.score}%</p>
                      <p className="text-xs text-muted-foreground">{session.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Achievements */}
        <motion.div variants={itemVariants}>
          <Card className="border-border">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-lg flex items-center gap-2">
                <Trophy className="w-5 h-5 text-primary" />
                Recent Achievements
              </CardTitle>
              <Link href="/dashboard/achievements">
                <Button variant="ghost" size="sm" className="text-primary">
                  View All
                </Button>
              </Link>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { title: "5-Day Streak", description: "Practiced for 5 consecutive days", icon: "flame" },
                  { title: "Voice Master", description: "Achieved 90%+ voice score", icon: "mic" },
                  { title: "Quick Learner", description: "Completed 10 sessions", icon: "zap" },
                ].map((achievement, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 rounded-xl border border-border hover:border-primary/30 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center">
                      <Trophy className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{achievement.title}</p>
                      <p className="text-sm text-muted-foreground">{achievement.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  )
}
