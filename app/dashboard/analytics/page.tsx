"use client"

import { motion } from "framer-motion"
import {
  TrendingUp,
  TrendingDown,
  Mic,
  MessageSquare,
  Clock,
  Target,
  Calendar,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  RadialBarChart,
  RadialBar,
  Legend,
} from "recharts"

const performanceData = [
  { week: "Week 1", confidence: 65, clarity: 70, pace: 60 },
  { week: "Week 2", confidence: 72, clarity: 75, pace: 68 },
  { week: "Week 3", confidence: 78, clarity: 80, pace: 72 },
  { week: "Week 4", confidence: 82, clarity: 85, pace: 78 },
  { week: "Week 5", confidence: 87, clarity: 88, pace: 82 },
  { week: "Week 6", confidence: 92, clarity: 90, pace: 88 },
]

const sessionsData = [
  { day: "Mon", sessions: 3 },
  { day: "Tue", sessions: 2 },
  { day: "Wed", sessions: 4 },
  { day: "Thu", sessions: 2 },
  { day: "Fri", sessions: 5 },
  { day: "Sat", sessions: 1 },
  { day: "Sun", sessions: 3 },
]

const skillsData = [
  { name: "Confidence", value: 92, fill: "#3B82F6" },
  { name: "Clarity", value: 88, fill: "#60A5FA" },
  { name: "Structure", value: 85, fill: "#93C5FD" },
  { name: "Pace", value: 82, fill: "#BFDBFE" },
]

const stats = [
  {
    title: "Overall Score",
    value: "87%",
    change: "+12%",
    trend: "up",
    icon: Target,
  },
  {
    title: "Total Sessions",
    value: "48",
    change: "+8",
    trend: "up",
    icon: MessageSquare,
  },
  {
    title: "Practice Time",
    value: "24.5h",
    change: "+3.2h",
    trend: "up",
    icon: Clock,
  },
  {
    title: "Voice Score",
    value: "92%",
    change: "+5%",
    trend: "up",
    icon: Mic,
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

export default function AnalyticsPage() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-8"
    >
      {/* Header */}
      <motion.div variants={itemVariants} className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground">
            Analytics
          </h1>
          <p className="text-muted-foreground mt-1">
            Track your progress and identify areas for improvement
          </p>
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-muted">
          <Calendar className="w-4 h-4 text-primary" />
          <span className="text-sm text-foreground">Last 30 days</span>
        </div>
      </motion.div>

      {/* Stats Grid */}
      <motion.div variants={itemVariants} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <Card key={stat.title} className="border-border">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{stat.title}</p>
                  <p className="text-2xl font-bold text-foreground mt-1">{stat.value}</p>
                  <div className="flex items-center gap-1 mt-1">
                    {stat.trend === "up" ? (
                      <TrendingUp className="w-4 h-4 text-green-500" />
                    ) : (
                      <TrendingDown className="w-4 h-4 text-red-500" />
                    )}
                    <span className={`text-xs font-medium ${
                      stat.trend === "up" ? "text-green-500" : "text-red-500"
                    }`}>
                      {stat.change} this month
                    </span>
                  </div>
                </div>
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <stat.icon className="w-5 h-5 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </motion.div>

      {/* Charts Row 1 */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Performance Over Time */}
        <motion.div variants={itemVariants} className="lg:col-span-2">
          <Card className="border-border">
            <CardHeader>
              <CardTitle className="text-lg">Performance Over Time</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={performanceData}>
                    <defs>
                      <linearGradient id="colorConfidence" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
                      </linearGradient>
                      <linearGradient id="colorClarity" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#60A5FA" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="#60A5FA" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#E0ECFF" />
                    <XAxis dataKey="week" stroke="#475569" fontSize={12} />
                    <YAxis stroke="#475569" fontSize={12} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#fff",
                        border: "1px solid #E0ECFF",
                        borderRadius: "12px",
                      }}
                    />
                    <Area
                      type="monotone"
                      dataKey="confidence"
                      stroke="#3B82F6"
                      strokeWidth={2}
                      fillOpacity={1}
                      fill="url(#colorConfidence)"
                    />
                    <Area
                      type="monotone"
                      dataKey="clarity"
                      stroke="#60A5FA"
                      strokeWidth={2}
                      fillOpacity={1}
                      fill="url(#colorClarity)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
              <div className="flex items-center justify-center gap-6 mt-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-primary" />
                  <span className="text-sm text-muted-foreground">Confidence</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-secondary" />
                  <span className="text-sm text-muted-foreground">Clarity</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Skills Breakdown */}
        <motion.div variants={itemVariants}>
          <Card className="border-border h-full">
            <CardHeader>
              <CardTitle className="text-lg">Skills Breakdown</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <RadialBarChart
                    cx="50%"
                    cy="50%"
                    innerRadius="20%"
                    outerRadius="90%"
                    barSize={12}
                    data={skillsData}
                    startAngle={90}
                    endAngle={-270}
                  >
                    <RadialBar
                      background
                      dataKey="value"
                      cornerRadius={6}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#fff",
                        border: "1px solid #E0ECFF",
                        borderRadius: "12px",
                      }}
                    />
                  </RadialBarChart>
                </ResponsiveContainer>
              </div>
              <div className="grid grid-cols-2 gap-3 mt-4">
                {skillsData.map((skill) => (
                  <div key={skill.name} className="flex items-center gap-2">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: skill.fill }}
                    />
                    <span className="text-sm text-muted-foreground">{skill.name}</span>
                    <span className="text-sm font-medium text-foreground ml-auto">
                      {skill.value}%
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Charts Row 2 */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Weekly Sessions */}
        <motion.div variants={itemVariants}>
          <Card className="border-border">
            <CardHeader>
              <CardTitle className="text-lg">Weekly Sessions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={sessionsData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#E0ECFF" />
                    <XAxis dataKey="day" stroke="#475569" fontSize={12} />
                    <YAxis stroke="#475569" fontSize={12} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#fff",
                        border: "1px solid #E0ECFF",
                        borderRadius: "12px",
                      }}
                    />
                    <Bar
                      dataKey="sessions"
                      fill="#3B82F6"
                      radius={[6, 6, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Areas for Improvement */}
        <motion.div variants={itemVariants}>
          <Card className="border-border">
            <CardHeader>
              <CardTitle className="text-lg">Areas for Improvement</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {[
                { area: "Filler Words", current: 15, target: 5, unit: "per session" },
                { area: "Speaking Pace", current: 145, target: 130, unit: "words/min" },
                { area: "Eye Contact", current: 72, target: 90, unit: "%" },
                { area: "Response Length", current: 85, target: 100, unit: "seconds avg" },
              ].map((item) => (
                <div key={item.area}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-foreground">{item.area}</span>
                    <span className="text-xs text-muted-foreground">
                      {item.current} / {item.target} {item.unit}
                    </span>
                  </div>
                  <Progress
                    value={Math.min((item.current / item.target) * 100, 100)}
                    className="h-2"
                  />
                </div>
              ))}
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Insights */}
      <motion.div variants={itemVariants}>
        <Card className="border-primary bg-primary/5">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center shrink-0">
                <TrendingUp className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">AI Insights</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Great progress this month! Your confidence scores have improved by 27% since you started.
                  Focus on reducing filler words and maintaining a steady pace to reach your goals faster.
                  Consider practicing with technical interview scenarios to round out your skills.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  )
}
