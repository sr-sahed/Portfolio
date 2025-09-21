import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  ExternalLink, 
  Play, 
  Rocket, 
  Users, 
  BookOpen, 
  Globe,
  Lightbulb,
  Target,
  TrendingUp,
  Star
} from 'lucide-react';

const TeachVerseX = () => {
  const features = [
    {
      icon: BookOpen,
      title: 'Interactive Learning',
      description: 'Engaging educational content with hands-on experiences'
    },
    {
      icon: Users,
      title: 'Community Driven',
      description: 'Connect with learners and educators worldwide'
    },
    {
      icon: Lightbulb,
      title: 'AI-Powered',
      description: 'Personalized learning paths with AI recommendations'
    },
    {
      icon: Globe,
      title: 'Global Access',
      description: 'Learn from anywhere, anytime, in multiple languages'
    }
  ];

  const milestones = [
    {
      phase: 'Phase 1',
      title: 'Foundation & Research',
      status: 'completed',
      description: 'Market research, technology stack selection, and initial prototyping'
    },
    {
      phase: 'Phase 2',
      title: 'MVP Development',
      status: 'in-progress',
      description: 'Core platform development with essential features'
    },
    {
      phase: 'Phase 3',
      title: 'Beta Testing',
      status: 'upcoming',
      description: 'User testing, feedback collection, and platform refinement'
    },
    {
      phase: 'Phase 4',
      title: 'Public Launch',
      status: 'planned',
      description: 'Full platform launch with marketing and user acquisition'
    }
  ];

  const stats = [
    { label: 'Planned Users', value: '10K+', icon: Users },
    { label: 'Course Categories', value: '50+', icon: BookOpen },
    { label: 'Countries', value: '25+', icon: Globe },
    { label: 'Features', value: '100+', icon: Star }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-500';
      case 'in-progress': return 'bg-blue-500';
      case 'upcoming': return 'bg-yellow-500';
      case 'planned': return 'bg-gray-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="mb-8">
            <Badge className="mb-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-lg py-2 px-6">
              <Rocket className="h-5 w-5 mr-2" />
              Startup Project
            </Badge>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            S.R.TeachVerseX
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Revolutionizing education through AI-powered interactive learning experiences. 
            Building the future of online education with cutting-edge technology and innovative teaching methods.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
              <ExternalLink className="mr-2 h-5 w-5" />
              Visit Website
            </Button>
            <Button variant="outline" size="lg">
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="p-8 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 border-none">
              <Target className="h-12 w-12 text-purple-600 mb-4" />
              <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-muted-foreground">
                To create a world where quality education is accessible to everyone, everywhere. 
                We envision a future where AI-powered personalized learning helps every individual 
                reach their full potential, regardless of their background or location.
              </p>
            </Card>
            <Card className="p-8 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-none">
              <Lightbulb className="h-12 w-12 text-blue-600 mb-4" />
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-muted-foreground">
                To democratize education by leveraging cutting-edge technology, creating interactive 
                learning experiences, and building a global community of learners and educators who 
                support each other's growth and success.
              </p>
            </Card>
          </div>
        </section>

        {/* Key Features */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20 rounded-full flex items-center justify-center">
                  <feature.icon className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Development Timeline */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Development Roadmap</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((milestone, index) => (
              <Card key={index} className="p-6 relative">
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="outline">{milestone.phase}</Badge>
                  <Badge className={`${getStatusColor(milestone.status)} text-white text-xs`}>
                    {milestone.status.replace('-', ' ')}
                  </Badge>
                </div>
                <h3 className="font-semibold text-lg mb-2">{milestone.title}</h3>
                <p className="text-sm text-muted-foreground">{milestone.description}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Stats Preview */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Project Goals</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <stat.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="text-2xl font-bold mb-1">{stat.value}</h3>
                <p className="text-muted-foreground text-sm">{stat.label}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Technology Stack */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Technology Stack</h2>
          <Card className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-semibold text-lg mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'].map((tech) => (
                    <Badge key={tech} variant="secondary">{tech}</Badge>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-4">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {['Node.js', 'Python', 'FastAPI', 'PostgreSQL', 'Redis'].map((tech) => (
                    <Badge key={tech} variant="secondary">{tech}</Badge>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-4">AI & Cloud</h3>
                <div className="flex flex-wrap gap-2">
                  {['OpenAI', 'TensorFlow', 'AWS', 'Docker', 'Kubernetes'].map((tech) => (
                    <Badge key={tech} variant="secondary">{tech}</Badge>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 rounded-2xl p-12">
          <TrendingUp className="h-16 w-16 mx-auto mb-6 text-purple-600" />
          <h2 className="text-3xl font-bold mb-4">Join the Revolution</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Be part of the future of education. Whether you're an investor, educator, or learner, 
            there's a place for you in the S.R.TeachVerseX community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
              <ExternalLink className="mr-2 h-5 w-5" />
              Learn More
            </Button>
            <Button variant="outline" size="lg">
              <Users className="mr-2 h-5 w-5" />
              Join Community
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TeachVerseX;