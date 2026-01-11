'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { 
  Mail, 
  MessageCircle, 
  CheckCircle, 
  FileText
} from 'lucide-react';

const supportOptions = [
  {
    icon: Mail,
    title: 'Email Support',
    description: 'Get detailed help via email',
    action: 'Send Email',
    href: 'mailto:appointikteam@gmail.com',
    color: 'bg-blue-100 text-blue-600'
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp Support',
    description: 'Quick help via WhatsApp',
    action: 'WhatsApp Us',
    color: 'bg-green-100 text-green-600',
    href: 'https://wa.me/919663144725',
    isWhatsApp: true
  },
  {
    icon: FileText,
    title: 'Documentation',
    description: 'Browse our help articles',
    action: 'View Docs',
    href: 'https://appointik.blogspot.com/',
    color: 'bg-purple-100 text-purple-600'
  }
];

const faqs = [
  {
    question: 'How do I get started with Appointik?',
    answer: 'Download the app from Google Play Store, create your account, and follow the setup wizard. You can start with a free trial to explore all features.'
  },
  {
    question: 'Can I import my existing patient data?',
    answer: 'Yes! We provide data import tools and our support team can help you migrate your existing patient records and appointment history.'
  },
  {
    question: 'Is my data secure?',
    answer: 'Absolutely. We use bank-grade encryption, HIPAA-compliant infrastructure, and follow strict security protocols to protect your data.'
  },
  {
    question: 'Do you offer training for my staff?',
    answer: 'Yes, we provide comprehensive training including video tutorials, documentation, and one-on-one training sessions for your team.'
  }
];

export function SupportSection() {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    mobile: '',
    email: '',
    comments: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    const body = encodeURIComponent(
      `First Name: ${formData.firstname}
Last Name: ${formData.lastname}
Mobile: ${formData.mobile}
Email: ${formData.email}

Message:
${formData.comments}`
    );

    window.location.href = `mailto:appointikteam@gmail.com?subject=Support Request&body=${body}`;
  };

  const handleWhatsAppClick = () => {
    // Trigger the WhatsApp widget
    const whatsappWidget = document.querySelector('[data-whatsapp-widget]') as HTMLElement;
    if (whatsappWidget) {
      whatsappWidget.click();
    }
  };

  return (
    <section className="section-container bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <Badge className="bg-royal-100 text-royal-700 mb-4">Support Center</Badge>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          How can we help you?
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Get the support you need to make the most of Appointik. Our team is here to help you succeed.
        </p>
      </motion.div>

      {/* Support Options */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="grid md:grid-cols-3 gap-8 mb-16"
      >
        {supportOptions.map((option, index) => {
          const Icon = option.icon;
          return (
            <Card key={option.title} className="p-8 text-center bg-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-3xl border-0">
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 ${option.color}`}>
                <Icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {option.title}
              </h3>
              <p className="text-gray-600 mb-6">
                {option.description}
              </p>
              {option.isWhatsApp ? (
                <Button 
                  onClick={handleWhatsAppClick}
                  className="bg-green-500 hover:bg-green-600 text-white rounded-2xl px-6 py-2 font-medium"
                >
                  {option.action}
                </Button>
              ) : (
                <Button 
                  asChild
                  className="bg-royal-500 hover:bg-royal-600 text-white rounded-2xl px-6 py-2 font-medium"
                >
                  <a href={option.href} target={option.href?.startsWith('mailto:') ? '_self' : '_blank'}>
                    {option.action}
                  </a>
                </Button>
              )}
            </Card>
          );
        })}
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Card className="p-8 bg-white shadow-2xl rounded-3xl border-0">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Send us a message
            </h2>

            <div className="space-y-6">
              {/* Name Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstname" className="text-slate-700 font-medium">
                    First Name *
                  </Label>
                  <Input
                    id="firstname"
                    name="firstname"
                    placeholder="First name"
                    value={formData.firstname}
                    onChange={handleInputChange}
                    required
                    className="
                      bg-slate-50
                      text-slate-900
                      placeholder:text-slate-500
                      placeholder:opacity-100
                      border-slate-200
                      focus:border-royal-500
                      focus:ring-2
                      focus:ring-royal-500/20
                      rounded-xl
                    "
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="lastname" className="text-slate-700 font-medium">
                    Last Name *
                  </Label>
                  <Input
                    id="lastname"
                    name="lastname"
                    placeholder="Last name"
                    value={formData.lastname}
                    onChange={handleInputChange}
                    required
                    className="
                      bg-slate-50
                      text-slate-900
                      placeholder:text-slate-500
                      placeholder:opacity-100
                      border-slate-200
                      focus:border-royal-500
                      focus:ring-2
                      focus:ring-royal-500/20
                      rounded-xl
                    "
                  />
                </div>
              </div>

              {/* Contact Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="mobile" className="text-slate-700 font-medium">
                    Mobile *
                  </Label>
                  <Input
                    id="mobile"
                    name="mobile"
                    type="tel"
                    placeholder="Mobile number"
                    value={formData.mobile}
                    onChange={handleInputChange}
                    required
                    className="
                      bg-slate-50
                      text-slate-900
                      placeholder:text-slate-500
                      placeholder:opacity-100
                      border-slate-200
                      focus:border-royal-500
                      focus:ring-2
                      focus:ring-royal-500/20
                      rounded-xl
                    "
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-slate-700 font-medium">
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@email.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="
                      bg-slate-50
                      text-slate-900
                      placeholder:text-slate-500
                      placeholder:opacity-100
                      border-slate-200
                      focus:border-royal-500
                      focus:ring-2
                      focus:ring-royal-500/20
                      rounded-xl
                    "
                  />
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <Label htmlFor="comments" className="text-slate-700 font-medium">
                  Message
                </Label>
                <Textarea
                  id="comments"
                  name="comments"
                  placeholder="Tell us how we can help you…"
                  rows={5}
                  value={formData.comments}
                  onChange={handleInputChange}
                  className="
                    bg-slate-50
                    text-slate-900
                    placeholder:text-slate-500
                    placeholder:opacity-100
                    border-slate-200
                    focus:border-royal-500
                    focus:ring-2
                    focus:ring-royal-500/20
                    rounded-xl
                  "
                />
              </div>

              {/* Submit */}
              <Button
                onClick={handleSubmit}
                className="w-full bg-royal-500 hover:bg-royal-600 text-white rounded-xl py-3 font-semibold"
              >
                Send Message
              </Button>
            </div>

            {/* Divider */}
            <div className="my-8 border-t" />

            {/* Direct Contact */}
            <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-600">
              <div>
                <p className="font-medium text-gray-900 mb-1">Email us</p>
                <a
                  href="mailto:appointikteam@gmail.com"
                  className="hover:text-royal-600 transition-colors"
                >
                  appointikteam@gmail.com
                </a>
              </div>

              <div>
                <p className="font-medium text-gray-900 mb-1">WhatsApp</p>
                <a
                  href="https://wa.me/919663144725"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-600 transition-colors"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="space-y-8"
        >
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <Card key={index} className="p-6 bg-white shadow-lg rounded-2xl border-0">
                  <h3 className="font-semibold text-gray-900 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </Card>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <Card className="p-6 bg-white shadow-lg rounded-2xl border-0">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
            <div className="space-y-3">
              <a 
                href="https://play.google.com/store/apps/details?id=com.samrithtech.appointik"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-600 hover:text-royal-600 transition-colors"
              >
                <CheckCircle className="w-5 h-5" />
                <span>Download Appointik App</span>
              </a>
              <a 
                href="/features"
                className="flex items-center space-x-3 text-gray-600 hover:text-royal-600 transition-colors"
              >
                <CheckCircle className="w-5 h-5" />
                <span>View All Features</span>
              </a>
              <a 
                href="/pricing"
                className="flex items-center space-x-3 text-gray-600 hover:text-royal-600 transition-colors"
              >
                <CheckCircle className="w-5 h-5" />
                <span>See Pricing Plans</span>
              </a>
              <a 
                href="/success-stories"
                className="flex items-center space-x-3 text-gray-600 hover:text-royal-600 transition-colors"
              >
                <CheckCircle className="w-5 h-5" />
                <span>Read Success Stories</span>
              </a>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}