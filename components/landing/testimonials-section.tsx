"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Software Engineer at Google",
    avatar: "SC",
    content: "SpeakForge helped me prepare for my technical interviews. The AI feedback on my communication style was incredibly detailed and helped me land my dream job.",
    rating: 5,
  },
  {
    name: "Michael Torres",
    role: "Product Manager at Meta",
    avatar: "MT",
    content: "The voice analysis feature is game-changing. I never realized how much I was using filler words until SpeakForge pointed it out. My interview performance improved dramatically.",
    rating: 5,
  },
  {
    name: "Emily Watson",
    role: "MBA Student at Harvard",
    avatar: "EW",
    content: "As an international student, I struggled with interview confidence. This platform gave me the practice I needed to feel prepared and articulate my thoughts clearly.",
    rating: 5,
  },
  {
    name: "David Park",
    role: "Sales Director at Salesforce",
    avatar: "DP",
    content: "I recommend SpeakForge to everyone on my team. The personalized scenarios for sales presentations have significantly improved our pitch delivery.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Medical Resident",
    avatar: "PS",
    content: "Practicing patient communication scenarios helped me become more empathetic and clear. My attending physicians noticed the improvement immediately.",
    rating: 5,
  },
  {
    name: "James Miller",
    role: "Startup Founder",
    avatar: "JM",
    content: "Preparing for investor pitches was stressful until I found SpeakForge. The instant feedback helped me refine my delivery and successfully close our Series A.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
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
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Loved by{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Thousands
            </span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            See how professionals and students have transformed their communication skills with SpeakForge.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                {/* Quote Icon */}
                <Quote className="w-8 h-8 text-primary/20 mb-4" />

                {/* Content */}
                <p className="text-foreground leading-relaxed mb-6">
                  {`"${testimonial.content}"`}
                </p>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center">
                    <span className="text-sm font-semibold text-primary-foreground">
                      {testimonial.avatar}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
