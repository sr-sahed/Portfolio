import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send,
  Github,
  Linkedin,
  Youtube,
  Facebook,
  MessageCircle,
  Clock,
  CheckCircle
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'sahedurrahman611@gmail.com',
      href: 'mailto:sahedurrahman611@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+8801766700792',
      href: 'tel:+8801766700792'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Dhaka, Bangladesh',
      href: '#'
    }
  ];

  const socialLinks = [
    { icon: Youtube, href: 'https://youtube.com/@indistinctmist', label: 'YouTube', color: 'text-red-600' },
    { icon: Github, href: 'https://github.com/sr-sahed', label: 'GitHub', color: 'text-gray-800 dark:text-gray-200' },
    { icon: Linkedin, href: 'https://linkedin.com/in/sr-sahed', label: 'LinkedIn', color: 'text-blue-600' },
    { icon: Facebook, href: 'https://facebook.com/sr.sahedur', label: 'Facebook', color: 'text-blue-800' },
    { icon: MessageCircle, href: 'https://wa.me/8801766700792', label: 'WhatsApp', color: 'text-green-600' }
  ];

  const workingHours = [
    { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM' },
    { day: 'Saturday', hours: '10:00 AM - 4:00 PM' },
    { day: 'Sunday', hours: 'By Appointment' }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Get In Touch
          </h1>
          <p className="text-2xl text-muted-foreground mb-4">Let's work together</p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you. 
            Drop me a message and let's create something amazing together.
          </p>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <div>
            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-6">Send Message</h2>
              
              {isSubmitted && (
                <div className="mb-6 p-4 bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                  <span className="text-green-700 dark:text-green-300">
                    Thank you! Your message has been sent successfully.
                  </span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email address"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project or how I can help you..."
                    rows={6}
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <info.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">{info.label}</p>
                      <a 
                        href={info.href}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Social Links */}
            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-6">Follow Me</h2>
              <div className="grid grid-cols-3 gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center p-4 rounded-lg hover:bg-muted/50 transition-colors group"
                  >
                    <social.icon className={`h-8 w-8 mb-2 ${social.color} group-hover:scale-110 transition-transform`} />
                    <span className="text-sm font-medium">{social.label}</span>
                  </a>
                ))}
              </div>
            </Card>

            {/* Working Hours */}
            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <Clock className="h-6 w-6 mr-2 text-primary" />
                Availability
              </h2>
              <div className="space-y-3">
                {workingHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="font-medium">{schedule.day}</span>
                    <span className="text-muted-foreground">{schedule.hours}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                <p className="text-sm text-blue-700 dark:text-blue-300">
                  <strong>Note:</strong> Response time is typically within 24 hours during business days.
                </p>
              </div>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Whether it's AI development, web applications, cybersecurity solutions, or game development, 
            I'm here to bring your ideas to life with cutting-edge technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              <Mail className="mr-2 h-5 w-5" />
              Email Me
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="https://wa.me/8801766700792" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp
              </a>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;