"use client"

import { motion } from "framer-motion"
import { 
  Trophy, 
  Star, 
  Target, 
  Zap, 
  Award, 
  Crown, 
  Medal, 
  Flame,
  BookOpen,
  Mic,
  MessageSquare,
  TrendingUp,
  Clock,
  Users,
  CheckCircle2,
  Lock
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const achievements = [
  {
    id: 1,
    title: "First Steps",
    description: "Complete your first practice session",
    icon: Star,
    category: "beginner",
    points: 10,
    unlocked: true,
    unlockedDate: "2024-01-15",
    rarity: "common"
  },
  {
    id: 2,
    title: "Conversation Starter",
    description: "Complete 10 AI conversations",
    icon: MessageSquare,
    category: "practice",
    points: 25,
    unlocked: true,
    unlockedDate: "2024-01-20",
    rarity: "common"
  },
  {
    id: 3,
    title: "Voice Master",
    description: "Complete 20 voice training exercises",
    icon: Mic,
    category: "voice",
    points: 50,
    unlocked: true,
    unlockedDate: "2024-02-01",
    rarity: "uncommon"
  },
  {
    id: 4,
    title: "Speed Demon",
    description: "Complete a session in under 5 minutes with 90%+ score",
    icon: Zap,
    category: "challenge",
    points: 75,
    unlocked: true,
    unlockedDate: "2024-02-10",
    rarity: "rare"
  },
  {
    id: 5,
    title: "Bookworm",
    description: "Read all beginner resources",
    icon: BookOpen,
    category: "learning",
    points: 30,
    unlocked: true,
    unlockedDate: "2024-02-15",
    rarity: "common"
  },
  {
    id: 6,
    title: "Week Warrior",
    description: "Practice 7 days in a row",
    icon: Flame,
    category: "streak",
    points: 100,
    unlocked: true,
    unlockedDate: "2024-02-22",
    rarity: "rare"
  },
  {
    id: 7,
    title: "Perfect Score",
    description: "Achieve 100% in any practice session",
    icon: Target,
    category: "challenge",
    points: 150,
    unlocked: false,
    progress: 92,
    rarity: "epic"
  },
  {
    id: 8,
    title: "Interview Pro",
    description: "Complete 50 interview simulations",
    icon: Award,
    category: "practice",
    points: 200,
    unlocked: false,
    progress: 68,
    rarity: "epic"
  },
  {
    id: 9,
    title: "Month Master",
    description: "Practice 30 days in a row",
    icon: Crown,
    category: "streak",
    points: 500,
    unlocked: false,
    progress: 47,
    rarity: "legendary"
  },
  {
    id: 10,
    title: "Community Leader",
    description: "Help 10 other users with their practice",
    icon: Users,
    category: "social",
    points: 75,
    unlocked: false,
    progress: 30,
    rarity: "uncommon"
  },
  {
    id: 11,
    title: "Early Bird",
    description: "Complete 10 sessions before 8 AM",
    icon: Clock,
    category: "challenge",
    points: 50,
    unlocked: false,
    progress: 50,
    rarity: "uncommon"
  },
  {
    id: 12,
    title: "Rising Star",
    description: "Improve your score by 50% in any skill",
    icon: TrendingUp,
    category: "progress",
    points: 100,
    unlocked: false,
    progress: 76,
    rarity: "rare"
  }
]

const rarityColors: Record<string, { bg: string; text: string; border: string }> = {
  common: { bg: "bg-slate-100", text: "text-slate-700", border: "border-slate-300" },
  uncommon: { bg: "bg-green-100", text: "text-green-700", border: "border-green-300" },
  rare: { bg: "bg-blue-100", text: "text-blue-700", border: "border-blue-300" },
  epic: { bg: "bg-purple-100", text: "text-purple-700", border: "border-purple-300" },
  legendary: { bg: "bg-amber-100", text: "text-amber-700", border: "border-amber-300" }
}

const categories = [
  { value: "all", label: "All" },
  { value: "beginner", label: "Beginner" },
  { value: "practice", label: "Practice" },
  { value: "voice", label: "Voice" },
  { value: "challenge", label: "Challenge" },
  { value: "streak", label: "Streak" },
  { value: "learning", label: "Learning" },
  { value: "social", label: "Social" },
  { value: "progress", label: "Progress" }
]

export default function AchievementsPage() {
  const totalPoints = achievements.filter(a => a.unlocked).reduce((sum, a) => sum + a.points, 0)
  const unlockedCount = achievements.filter(a => a.unlocked).length
  const totalAchievements = achievements.length

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground">Achievements</h1>
        <p className="text-muted-foreground mt-1">Track your progress and unlock rewards</p>
      </div>

      {/* Stats Overview */}
      <div className="grid gap-4 md:grid-cols-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/20 rounded-xl">
                  <Trophy className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Total Points</p>
                  <p className="text-2xl font-bold text-foreground">{totalPoints}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-green-100 rounded-xl">
                  <CheckCircle2 className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Unlocked</p>
                  <p className="text-2xl font-bold text-foreground">{unlockedCount}/{totalAchievements}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-amber-100 rounded-xl">
                  <Flame className="h-6 w-6 text-amber-600" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Current Streak</p>
                  <p className="text-2xl font-bold text-foreground">14 days</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-purple-100 rounded-xl">
                  <Medal className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Rank</p>
                  <p className="text-2xl font-bold text-foreground">Silver</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Progress to Next Rank */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Crown className="h-5 w-5 text-amber-500" />
              Progress to Gold Rank
            </CardTitle>
            <CardDescription>Earn 210 more points to reach Gold rank</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Silver</span>
                <span className="font-medium">{totalPoints} / 500 points</span>
                <span className="text-muted-foreground">Gold</span>
              </div>
              <Progress value={(totalPoints / 500) * 100} className="h-3" />
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Achievements Grid */}
      <Tabs defaultValue="all" className="space-y-6">
        <TabsList className="flex flex-wrap h-auto gap-2 bg-transparent p-0">
          {categories.map((category) => (
            <TabsTrigger
              key={category.value}
              value={category.value}
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-full px-4"
            >
              {category.label}
            </TabsTrigger>
          ))}
        </TabsList>

        {categories.map((category) => (
          <TabsContent key={category.value} value={category.value} className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {achievements
                .filter(a => category.value === "all" || a.category === category.value)
                .map((achievement, index) => {
                  const Icon = achievement.icon
                  const rarity = rarityColors[achievement.rarity]
                  
                  return (
                    <motion.div
                      key={achievement.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Card className={`relative overflow-hidden transition-all duration-300 hover:shadow-md ${
                        achievement.unlocked 
                          ? "bg-card" 
                          : "bg-muted/50"
                      }`}>
                        {!achievement.unlocked && (
                          <div className="absolute inset-0 bg-background/60 backdrop-blur-[1px] z-10 flex items-center justify-center">
                            <Lock className="h-8 w-8 text-muted-foreground/50" />
                          </div>
                        )}
                        <CardContent className="pt-6">
                          <div className="flex items-start gap-4">
                            <div className={`p-3 rounded-xl ${
                              achievement.unlocked 
                                ? "bg-primary/20" 
                                : "bg-muted"
                            }`}>
                              <Icon className={`h-6 w-6 ${
                                achievement.unlocked 
                                  ? "text-primary" 
                                  : "text-muted-foreground"
                              }`} />
                            </div>
                            <div className="flex-1 space-y-1">
                              <div className="flex items-center justify-between">
                                <h3 className="font-semibold text-foreground">{achievement.title}</h3>
                                <Badge variant="outline" className={`${rarity.bg} ${rarity.text} ${rarity.border} capitalize text-xs`}>
                                  {achievement.rarity}
                                </Badge>
                              </div>
                              <p className="text-sm text-muted-foreground">{achievement.description}</p>
                              <div className="flex items-center justify-between pt-2">
                                <span className="text-xs font-medium text-primary">+{achievement.points} pts</span>
                                {achievement.unlocked ? (
                                  <span className="text-xs text-muted-foreground">
                                    Unlocked {new Date(achievement.unlockedDate!).toLocaleDateString()}
                                  </span>
                                ) : (
                                  <span className="text-xs text-muted-foreground">
                                    {achievement.progress}% complete
                                  </span>
                                )}
                              </div>
                              {!achievement.unlocked && achievement.progress && (
                                <Progress value={achievement.progress} className="h-1.5 mt-2" />
                              )}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  )
                })}
            </div>
          </TabsContent>
        ))}
      </Tabs>

      {/* Recent Achievements */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Recently Unlocked</CardTitle>
            <CardDescription>Your latest achievements</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {achievements
                .filter(a => a.unlocked)
                .sort((a, b) => new Date(b.unlockedDate!).getTime() - new Date(a.unlockedDate!).getTime())
                .slice(0, 3)
                .map((achievement) => {
                  const Icon = achievement.icon
                  return (
                    <div key={achievement.id} className="flex items-center gap-4 p-3 rounded-lg bg-muted/50">
                      <div className="p-2 bg-primary/20 rounded-lg">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-foreground">{achievement.title}</p>
                        <p className="text-sm text-muted-foreground">{achievement.description}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium text-primary">+{achievement.points} pts</p>
                        <p className="text-xs text-muted-foreground">
                          {new Date(achievement.unlockedDate!).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  )
                })}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
