"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  Mic,
  MicOff,
  Volume2,
  PlayCircle,
  PauseCircle,
  RotateCcw,
  Zap,
  TrendingUp,
  Clock,
  Target,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

const voiceMetrics = [
  { name: "Pace", value: 145, target: "130-150 wpm", status: "optimal" },
  { name: "Clarity", value: 88, target: "85%+", status: "good" },
  { name: "Volume", value: 72, target: "70-80 dB", status: "optimal" },
  { name: "Filler Words", value: 3, target: "<5", status: "optimal" },
]

const practiceExercises = [
  {
    title: "Pace Control",
    description: "Practice speaking at an optimal 130-150 words per minute",
    duration: "5 min",
    difficulty: "Beginner",
  },
  {
    title: "Articulation Drills",
    description: "Tongue twisters and clarity exercises",
    duration: "3 min",
    difficulty: "Intermediate",
  },
  {
    title: "Breathing Techniques",
    description: "Improve breath control for longer sentences",
    duration: "4 min",
    difficulty: "Beginner",
  },
  {
    title: "Pitch Variation",
    description: "Add expressiveness to your speech",
    duration: "6 min",
    difficulty: "Advanced",
  },
]

export default function VoiceTrainingPage() {
  const [isRecording, setIsRecording] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [recordingTime, setRecordingTime] = useState(0)

  const toggleRecording = () => {
    setIsRecording(!isRecording)
    if (!isRecording) {
      setRecordingTime(0)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8"
    >
      {/* Header */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-foreground">
          Voice Training
        </h1>
        <p className="text-muted-foreground mt-1">
          Improve your vocal delivery with AI-powered analysis
        </p>
      </div>

      {/* Main Recording Area */}
      <Card className="border-border">
        <CardContent className="p-8">
          <div className="flex flex-col items-center">
            {/* Visualizer */}
            <div className="relative w-48 h-48 mb-8">
              <div className={`absolute inset-0 rounded-full ${isRecording ? "animate-pulse" : ""}`}>
                <div className="absolute inset-0 rounded-full bg-primary/10" />
                <div className="absolute inset-4 rounded-full bg-primary/20" />
                <div className="absolute inset-8 rounded-full bg-primary/30" />
              </div>
              <button
                onClick={toggleRecording}
                className={`absolute inset-12 rounded-full flex items-center justify-center transition-all ${
                  isRecording
                    ? "bg-destructive hover:bg-destructive/90"
                    : "gradient-primary hover:brightness-110"
                } blue-glow`}
              >
                {isRecording ? (
                  <MicOff className="w-12 h-12 text-primary-foreground" />
                ) : (
                  <Mic className="w-12 h-12 text-primary-foreground" />
                )}
              </button>
            </div>

            {/* Recording Status */}
            <div className="text-center mb-6">
              <p className="text-lg font-semibold text-foreground">
                {isRecording ? "Recording..." : "Click to Start Recording"}
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                {isRecording
                  ? `${Math.floor(recordingTime / 60)}:${(recordingTime % 60).toString().padStart(2, "0")}`
                  : "Speak naturally and we'll analyze your voice"}
              </p>
            </div>

            {/* Playback Controls */}
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                size="lg"
                className="rounded-xl"
                disabled={isRecording}
              >
                <RotateCcw className="w-5 h-5 mr-2" />
                Reset
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-xl"
                disabled={isRecording}
                onClick={() => setIsPlaying(!isPlaying)}
              >
                {isPlaying ? (
                  <>
                    <PauseCircle className="w-5 h-5 mr-2" />
                    Pause
                  </>
                ) : (
                  <>
                    <PlayCircle className="w-5 h-5 mr-2" />
                    Playback
                  </>
                )}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Metrics Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {voiceMetrics.map((metric) => (
          <Card key={metric.name} className="border-border">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-sm text-muted-foreground">{metric.name}</p>
                  <p className="text-2xl font-bold text-foreground mt-1">
                    {metric.value}
                    {metric.name === "Clarity" || metric.name === "Volume" ? "%" : ""}
                    {metric.name === "Pace" ? " wpm" : ""}
                  </p>
                </div>
                <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                  metric.status === "optimal"
                    ? "bg-green-100 text-green-700"
                    : metric.status === "good"
                    ? "bg-primary/10 text-primary"
                    : "bg-orange-100 text-orange-700"
                }`}>
                  {metric.status}
                </div>
              </div>
              <p className="text-xs text-muted-foreground">Target: {metric.target}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Practice Exercises */}
      <Card className="border-border">
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <Zap className="w-5 h-5 text-primary" />
            Practice Exercises
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid sm:grid-cols-2 gap-4">
            {practiceExercises.map((exercise) => (
              <div
                key={exercise.title}
                className="p-4 rounded-xl border border-border hover:border-primary/30 hover:shadow-sm transition-all cursor-pointer group"
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {exercise.title}
                  </h3>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${
                    exercise.difficulty === "Beginner"
                      ? "bg-green-100 text-green-700"
                      : exercise.difficulty === "Intermediate"
                      ? "bg-primary/10 text-primary"
                      : "bg-orange-100 text-orange-700"
                  }`}>
                    {exercise.difficulty}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  {exercise.description}
                </p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Clock className="w-3 h-3" />
                  {exercise.duration}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Voice Analysis Tips */}
      <Card className="border-primary bg-primary/5">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center shrink-0">
              <Volume2 className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Voice Analysis Tips</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  Speak in a quiet environment for accurate analysis
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  Position yourself 6-12 inches from your microphone
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  Practice the same passage multiple times to track improvement
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  Focus on one metric at a time for better results
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
