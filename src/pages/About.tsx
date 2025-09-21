import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Download, Award, Users, Briefcase, Target } from 'lucide-react';
import img from '../img.jpg';

const About = () => {
  const stats = [
    { icon: Briefcase, label: 'Experience', value: '2+ Years' },
    { icon: Target, label: 'Projects', value: '15+' },
    { icon: Users, label: 'Clients', value: '10+' },
    { icon: Award, label: 'Awards', value: '5+' }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Creative Developer, AI Enthusiast, Future Tech Innovator
          </p>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="w-80 h-80 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 p-1">
                <div className="w-full h-full rounded-2xl bg-background flex items-center justify-center">
                    <img src={img} alt="SR" className="w-full h-full rounded-2xl object-cover"/>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4">
                <Badge className="bg-green-500 text-white text-lg py-2 px-4">
                  Available for Work
                </Badge>
              </div>
            </div>
          </div>

          {/* About Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold mb-4">Hello, I'm S. R. Sahed</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  I'm a passionate Computer Science student at European University of Bangladesh, 
                  deeply fascinated by the endless possibilities of artificial intelligence and 
                  emerging technologies. My journey in tech began with a curiosity about how 
                  machines can think and learn, which has evolved into a mission to create 
                  innovative solutions that impact the world.
                </p>
                <p>
                  With expertise spanning AI/ML, Cybersecurity, Game Development, and Robotics, 
                  I'm constantly pushing the boundaries of what's possible. I believe in building 
                  not just for today, but for a future where technology serves humanity's greatest needs.
                </p>
                <p>
                  Currently working as an IT Intern at Fortune Zipper Limited, I'm gaining 
                  real-world experience while continuing to develop cutting-edge projects that 
                  showcase the power of modern technology.
                </p>
              </div>
            </div>

            {/* Vision Statement */}
            <Card className="p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 border-none">
              <h3 className="text-xl font-semibold mb-3 text-primary">My Vision</h3>
              <p className="text-muted-foreground">
                "To leverage artificial intelligence and emerging technologies to solve complex 
                real-world problems, creating solutions that not only advance technology but 
                also contribute to a better, more connected world."
              </p>
            </Card>

            {/* Download CV Button */}
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </Button>
          </div>
        </div>

        {/* Stats Section */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
              <stat.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="text-2xl font-bold mb-1">{stat.value}</h3>
              <p className="text-muted-foreground">{stat.label}</p>
            </Card>
          ))}
        </section>

        {/* Skills Preview */}
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-8">Core Competencies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center">
                <span className="text-2xl">🤖</span>
              </div>
              <h3 className="font-semibold mb-2">AI & Machine Learning</h3>
              <p className="text-sm text-muted-foreground">Deep Learning, NLP, Computer Vision</p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="font-semibold mb-2">Cybersecurity</h3>
              <p className="text-sm text-muted-foreground">Ethical Hacking, Security Analysis</p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center">
                <span className="text-2xl">🎮</span>
              </div>
              <h3 className="font-semibold mb-2">Game Development</h3>
              <p className="text-sm text-muted-foreground">Unity, Interactive Experiences</p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 bg-orange-100 dark:bg-orange-900/20 rounded-full flex items-center justify-center">
                <span className="text-2xl">🤖</span>
              </div>
              <h3 className="font-semibold mb-2">Robotics</h3>
              <p className="text-sm text-muted-foreground">Arduino, IoT, Automation</p>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;