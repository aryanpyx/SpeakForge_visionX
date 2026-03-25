"use client"

import { motion } from "framer-motion"
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Briefcase, 
  Calendar,
  Edit3,
  Camera,
  Trophy,
  Target,
  Flame,
  Clock,
  MessageSquare,
  Mic,
  TrendingUp,
  Award,
  Star,
  Shield,
  Bell,
  Lock,
  Eye,
  Globe,
  Linkedin,
  Twitter
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { useState } from "react"

const userProfile = {
  name: "Alex Johnson",
  email: "alex.johnson@example.com",
  phone: "+1 (555) 123-4567",
  location: "San Francisco, CA",
  title: "Product Manager",
  company: "TechCorp Inc.",
  joinDate: "January 2024",
  bio: "Passionate about effective communication and continuous learning. Currently focused on improving my presentation and negotiation skills to advance my career in product management.",
  avatar: "/placeholder.svg?height=120&width=120",
  level: 12,
  xp: 2450,
  xpToNextLevel: 3000,
  rank: "Communication Pro",
  socialLinks: {
    linkedin: "linkedin.com/in/alexjohnson",
    twitter: "@alexj_speaks"
  }
}

const stats = [
  { label: "Sessions Completed", value: 47, icon: MessageSquare, color: "text-primary" },
  { label: "Hours Practiced", value: 23, icon: Clock, color: "text-secondary" },
  { label: "Current Streak", value: 12, icon: Flame, color: "text-orange-500" },
  { label: "Achievements", value: 18, icon: Trophy, color: "text-yellow-500" }
]

const recentAchievements = [
  { name: "Week Warrior", description: "7-day practice streak", icon: Flame, date: "2 days ago", rarity: "rare" },
  { name: "Voice Master", description: "Complete 10 voice sessions", icon: Mic, date: "5 days ago", rarity: "uncommon" },
  { name: "Quick Learner", description: "Finish 5 sessions in one day", icon: TrendingUp, date: "1 week ago", rarity: "common" }
]

const skillLevels = [
  { name: "Public Speaking", level: 75, color: "bg-primary" },
  { name: "Interview Skills", level: 68, color: "bg-secondary" },
  { name: "Negotiation", level: 52, color: "bg-accent" },
  { name: "Active Listening", level: 81, color: "bg-green-500" },
  { name: "Body Language", level: 45, color: "bg-purple-500" }
]

const getRarityColor = (rarity: string) => {
  switch (rarity) {
    case "legendary": return "bg-yellow-500/20 text-yellow-600 border-yellow-500/30"
    case "epic": return "bg-purple-500/20 text-purple-600 border-purple-500/30"
    case "rare": return "bg-blue-500/20 text-blue-600 border-blue-500/30"
    case "uncommon": return "bg-green-500/20 text-green-600 border-green-500/30"
    default: return "bg-muted text-muted-foreground border-border"
  }
}

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false)
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
      >
        <div>
          <h1 className="text-3xl font-bold text-foreground">My Profile</h1>
          <p className="text-muted-foreground mt-1">
            Manage your account settings and view your progress
          </p>
        </div>
        <Button 
          onClick={() => setIsEditing(!isEditing)}
          variant={isEditing ? "default" : "outline"}
          className="gap-2"
        >
          <Edit3 className="h-4 w-4" />
          {isEditing ? "Save Changes" : "Edit Profile"}
        </Button>
      </motion.div>

      {/* Profile Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Card className="glass-card overflow-hidden">
          {/* Cover Image */}
          <div className="h-32 bg-gradient-to-r from-primary/30 via-secondary/30 to-accent/30 relative">
            <div className="absolute inset-0 bg-grid-pattern opacity-10" />
          </div>
          
          <CardContent className="relative pt-0">
            {/* Avatar */}
            <div className="flex flex-col sm:flex-row gap-6 -mt-16">
              <div className="relative">
                <Avatar className="h-32 w-32 border-4 border-background shadow-xl">
                  <AvatarImage src={userProfile.avatar} alt={userProfile.name} />
                  <AvatarFallback className="text-2xl bg-primary/10 text-primary">
                    {userProfile.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                {isEditing && (
                  <Button 
                    size="icon" 
                    className="absolute bottom-0 right-0 h-8 w-8 rounded-full"
                  >
                    <Camera className="h-4 w-4" />
                  </Button>
                )}
                <div className="absolute -bottom-1 -right-1 bg-primary text-primary-foreground text-xs font-bold px-2 py-0.5 rounded-full">
                  Lv.{userProfile.level}
                </div>
              </div>
              
              <div className="flex-1 pt-4 sm:pt-16">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div>
                    <h2 className="text-2xl font-bold text-foreground">{userProfile.name}</h2>
                    <p className="text-muted-foreground">{userProfile.title} at {userProfile.company}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <Badge variant="secondary" className="gap-1">
                        <Award className="h-3 w-3" />
                        {userProfile.rank}
                      </Badge>
                      <Badge variant="outline" className="gap-1">
                        <MapPin className="h-3 w-3" />
                        {userProfile.location}
                      </Badge>
                    </div>
                  </div>
                  
                  {/* XP Progress */}
                  <div className="w-full sm:w-48">
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-muted-foreground">XP Progress</span>
                      <span className="font-medium text-primary">{userProfile.xp}/{userProfile.xpToNextLevel}</span>
                    </div>
                    <Progress value={(userProfile.xp / userProfile.xpToNextLevel) * 100} className="h-2" />
                    <p className="text-xs text-muted-foreground mt-1 text-right">
                      {userProfile.xpToNextLevel - userProfile.xp} XP to Level {userProfile.level + 1}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-2 lg:grid-cols-4 gap-4"
      >
        {stats.map((stat, index) => (
          <Card key={stat.label} className="glass-card">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-lg bg-primary/10 ${stat.color}`}>
                  <stat.icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </motion.div>

      {/* Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 lg:w-auto lg:inline-grid">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
            <TabsTrigger value="privacy">Privacy</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid gap-6 lg:grid-cols-2">
              {/* About */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <User className="h-5 w-5 text-primary" />
                    About
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {isEditing ? (
                    <Textarea 
                      defaultValue={userProfile.bio}
                      className="min-h-[100px]"
                    />
                  ) : (
                    <p className="text-muted-foreground">{userProfile.bio}</p>
                  )}
                  
                  <div className="space-y-3 pt-4 border-t">
                    <div className="flex items-center gap-3">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      {isEditing ? (
                        <Input defaultValue={userProfile.email} className="h-8" />
                      ) : (
                        <span className="text-sm">{userProfile.email}</span>
                      )}
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="h-4 w-4 text-muted-foreground" />
                      {isEditing ? (
                        <Input defaultValue={userProfile.phone} className="h-8" />
                      ) : (
                        <span className="text-sm">{userProfile.phone}</span>
                      )}
                    </div>
                    <div className="flex items-center gap-3">
                      <Briefcase className="h-4 w-4 text-muted-foreground" />
                      {isEditing ? (
                        <Input defaultValue={`${userProfile.title} at ${userProfile.company}`} className="h-8" />
                      ) : (
                        <span className="text-sm">{userProfile.title} at {userProfile.company}</span>
                      )}
                    </div>
                    <div className="flex items-center gap-3">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">Member since {userProfile.joinDate}</span>
                    </div>
                  </div>
                  
                  {/* Social Links */}
                  <div className="flex gap-2 pt-4 border-t">
                    <Button variant="outline" size="sm" className="gap-2">
                      <Linkedin className="h-4 w-4" />
                      LinkedIn
                    </Button>
                    <Button variant="outline" size="sm" className="gap-2">
                      <Twitter className="h-4 w-4" />
                      Twitter
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Recent Achievements */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Trophy className="h-5 w-5 text-yellow-500" />
                    Recent Achievements
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {recentAchievements.map((achievement, index) => (
                    <motion.div
                      key={achievement.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-4 p-3 rounded-lg bg-muted/50"
                    >
                      <div className={`p-2 rounded-lg ${getRarityColor(achievement.rarity)}`}>
                        <achievement.icon className="h-5 w-5" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <p className="font-medium text-foreground">{achievement.name}</p>
                          <Badge variant="outline" className={`text-xs ${getRarityColor(achievement.rarity)}`}>
                            {achievement.rarity}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{achievement.description}</p>
                      </div>
                      <span className="text-xs text-muted-foreground">{achievement.date}</span>
                    </motion.div>
                  ))}
                  <Button variant="outline" className="w-full mt-2">
                    View All Achievements
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Skills Tab */}
          <TabsContent value="skills" className="space-y-6">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-primary" />
                  Skill Levels
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {skillLevels.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-foreground">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-3 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className={`h-full ${skill.color} rounded-full`}
                      />
                    </div>
                  </motion.div>
                ))}
              </CardContent>
            </Card>

            <div className="grid gap-6 md:grid-cols-2">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Star className="h-5 w-5 text-yellow-500" />
                    Top Strengths
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-green-500" />
                      <span className="text-foreground">Clear articulation</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-green-500" />
                      <span className="text-foreground">Confident tone</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-green-500" />
                      <span className="text-foreground">Active listening</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-primary" />
                    Areas to Improve
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-orange-500" />
                      <span className="text-foreground">Reduce filler words</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-orange-500" />
                      <span className="text-foreground">Pace control</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-orange-500" />
                      <span className="text-foreground">Eye contact awareness</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Settings Tab */}
          <TabsContent value="settings" className="space-y-6">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bell className="h-5 w-5 text-primary" />
                  Notifications
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-foreground">Email Notifications</p>
                    <p className="text-sm text-muted-foreground">Receive updates about your progress</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-foreground">Practice Reminders</p>
                    <p className="text-sm text-muted-foreground">Get reminded to practice daily</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-foreground">Achievement Alerts</p>
                    <p className="text-sm text-muted-foreground">Be notified when you unlock achievements</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-foreground">Weekly Summary</p>
                    <p className="text-sm text-muted-foreground">Receive a weekly progress report</p>
                  </div>
                  <Switch />
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="h-5 w-5 text-primary" />
                  Preferences
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label>Language</Label>
                    <Input defaultValue="English (US)" />
                  </div>
                  <div className="space-y-2">
                    <Label>Timezone</Label>
                    <Input defaultValue="Pacific Time (PT)" />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-foreground">Dark Mode</p>
                    <p className="text-sm text-muted-foreground">Switch between light and dark themes</p>
                  </div>
                  <Switch />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Privacy Tab */}
          <TabsContent value="privacy" className="space-y-6">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary" />
                  Privacy Settings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-foreground">Profile Visibility</p>
                    <p className="text-sm text-muted-foreground">Make your profile visible to other users</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-foreground">Show Activity Status</p>
                    <p className="text-sm text-muted-foreground">Let others see when youre online</p>
                  </div>
                  <Switch />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-foreground">Share Progress</p>
                    <p className="text-sm text-muted-foreground">Allow your progress to appear on leaderboards</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lock className="h-5 w-5 text-primary" />
                  Security
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-foreground">Two-Factor Authentication</p>
                    <p className="text-sm text-muted-foreground">Add an extra layer of security</p>
                  </div>
                  <Button variant="outline" size="sm">Enable</Button>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-foreground">Change Password</p>
                    <p className="text-sm text-muted-foreground">Update your account password</p>
                  </div>
                  <Button variant="outline" size="sm">Change</Button>
                </div>
                <div className="pt-4 border-t">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-destructive">Delete Account</p>
                      <p className="text-sm text-muted-foreground">Permanently delete your account and data</p>
                    </div>
                    <Button variant="destructive" size="sm">Delete</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  )
}
