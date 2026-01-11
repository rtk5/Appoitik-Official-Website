'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, TrendingUp, Users, Clock } from 'lucide-react';

const testimonials = [
  {
    name: 'Amit Agrawal',
    specialty: 'Clinic Owner',
    location: 'India',
    quote:
      'Very good app. I have been using it for the last 5 months. Communication and support are excellent, and most requested updates are already implemented. One of the best clinic management apps I have used.',
    rating: 5,
    metrics: [
      { label: 'Usage duration', value: '5+ months' },
      { label: 'Support quality', value: 'Excellent' },
      { label: 'Feature updates', value: 'Regular' }
    ]
  },
  {
    name: 'Dr Harsh',
    specialty: 'Medical Practitioner',
    location: 'India',
    quote:
      'They deserve 10 stars. Every suggestion is taken seriously and implemented in updates. Very affordable monthly plans and excellent service. Truly value for money.',
    rating: 5,
    metrics: [
      { label: 'Value for money', value: '★★★★★' },
      { label: 'Responsiveness', value: 'Very High' },
      { label: 'Feature adoption', value: 'Fast' }
    ]
  },
  {
    name: 'Samit',
    specialty: 'OPD Practitioner',
    location: 'India',
    quote:
      'After trying many OPD management apps for 1–2 years, I finally found Appointik. They listen to suggestions and fix problems. My search ends here.',
    rating: 5,
    metrics: [
      { label: 'Search duration', value: '2 years' },
      { label: 'Reliability', value: 'High' },
      { label: 'User satisfaction', value: '★★★★★' }
    ]
  },
  {
    name: 'Dr Fareed Rahman',
    specialty: 'Clinic Owner',
    location: 'India',
    quote:
      'User-friendly and very useful for daily clinic activities. Support is good and subscription plans are worth continuing. Waiting for upcoming feature updates.',
    rating: 5,
    metrics: [
      { label: 'Daily usability', value: 'High' },
      { label: 'Support quality', value: 'Good' },
      { label: 'Retention decision', value: 'Subscribed' }
    ]
  },
  {
    name: 'Dr Yogesh Mainkar',
    specialty: 'Medical Practitioner',
    location: 'India',
    quote:
      'Very useful and user-friendly. Plans are unbelievably economical. After thorough research and trials of similar apps, I decided to stick with Appointik.',
    rating: 5,
    metrics: [
      { label: 'Cost efficiency', value: 'Excellent' },
      { label: 'Comparison outcome', value: 'Best choice' },
      { label: 'Adoption confidence', value: 'High' }
    ]
  },
  {
    name: 'Ishu Solanki',
    specialty: 'Clinic Owner',
    location: 'India',
    quote:
      'Great app with the best pricing. The biggest strength is the technical support, which most apps lack. Used it for over a year and highly recommend taking the trial.',
    rating: 5,
    metrics: [
      { label: 'Usage duration', value: '1+ year' },
      { label: 'Tech support', value: 'Outstanding' },
      { label: 'Recommendation', value: 'Strong' }
    ]
  }
];


export function SuccessStoriesSection() {
  return (
    <section className="section-container bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <Badge className="bg-teal-100 text-teal-700 mb-4">Success Stories</Badge>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Real results from healthcare professionals
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Discover how 1,000+ doctors across India are transforming their clinics with Appointik
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <Card className="p-8 h-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-3xl border-0">
              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 text-lg mb-1">
                  {testimonial.name}
                </h3>
                <p className="text-gray-600">{testimonial.specialty}</p>
                <p className="text-sm text-gray-500">{testimonial.location}</p>
                <div className="flex items-center space-x-1 mt-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>

              <blockquote className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>

              <div className="grid grid-cols-3 gap-4">
                {testimonial.metrics.map((metric, metricIndex) => (
                  <div key={metricIndex} className="text-center p-3 bg-gray-50 rounded-xl">
                    <div className="font-bold text-royal-600 text-lg">
                      {metric.value}
                    </div>
                    <div className="text-xs text-gray-600">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}