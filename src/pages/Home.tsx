import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Download, Sparkles, Code, Shield, Gamepad2, Bot } from 'lucide-react';
import { Link } from 'react-router-dom';
import img from '../img.jpg';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-pink-50/50 dark:from-blue-950/20 dark:via-purple-950/10 dark:to-pink-950/20"></div>
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-300/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-10 left-1/2 w-72 h-72 bg-pink-300/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
        </div>

        <div className="container mx-auto text-center max-w-4xl">
          {/* Profile Image */}
          <div className="relative mb-8 inline-block">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1 animate-pulse">
              <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                <img src={img} alt="SR" className="w-full h-full rounded-full object-cover"/>
              </div>
            </div>
            <div className="absolute -top-2 -right-2">
              <Badge className="bg-green-500 text-white animate-bounce">
                <Sparkles className="w-3 h-3 mr-1" />
                Available
              </Badge>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 dark:from-white dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent animate-in fade-in slide-in-from-bottom-8 duration-1000">
            S. R. Sahed
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-6 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
            Computer Science Student | AI Enthusiast | Future Tech Innovator
          </p>

          {/* Bio */}
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
            Passionate about revolutionizing technology through AI, Cybersecurity, Robotics, and Game Development. 
            Building innovative solutions that make a difference in the world.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
            <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              <Link to="/contact">
                Hire Me <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/resume">
                <Download className="mr-2 h-5 w-5" />
                View Resume
              </Link>
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-700">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <Code className="h-8 w-8 mx-auto mb-2 text-blue-600" />
              <h3 className="font-semibold text-2xl">15+</h3>
              <p className="text-sm text-muted-foreground">Projects</p>
            </Card>
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <Bot className="h-8 w-8 mx-auto mb-2 text-purple-600" />
              <h3 className="font-semibold text-2xl">AI/ML</h3>
              <p className="text-sm text-muted-foreground">Specialization</p>
            </Card>
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <Shield className="h-8 w-8 mx-auto mb-2 text-green-600" />
              <h3 className="font-semibold text-2xl">Security</h3>
              <p className="text-sm text-muted-foreground">Focus</p>
            </Card>
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <Gamepad2 className="h-8 w-8 mx-auto mb-2 text-red-600" />
              <h3 className="font-semibold text-2xl">Games</h3>
              <p className="text-sm text-muted-foreground">Developed</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Work Preview */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Featured Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Bot className="h-12 w-12 mx-auto mb-4 text-blue-600" />
              <h3 className="font-semibold mb-2">AI Chatbot</h3>
              <p className="text-sm text-muted-foreground">Intelligent conversational AI with natural language processing</p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Shield className="h-12 w-12 mx-auto mb-4 text-green-600" />
              <h3 className="font-semibold mb-2">Cybersecurity Tools</h3>
              <p className="text-sm text-muted-foreground">Advanced security solutions for modern threats</p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Gamepad2 className="h-12 w-12 mx-auto mb-4 text-purple-600" />
              <h3 className="font-semibold mb-2">Unity Games</h3>
              <p className="text-sm text-muted-foreground">Interactive gaming experiences with cutting-edge mechanics</p>
            </Card>
          </div>
          <Button asChild variant="outline">
            <Link to="/projects">
              View All Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;