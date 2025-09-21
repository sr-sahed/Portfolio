import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  ExternalLink, 
  Github, 
  Play,
  Bot,
  Shield,
  Gamepad2,
  Globe,
  Smartphone,
  Database,
  Filter
} from 'lucide-react';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'AI Chatbot Assistant',
      description: 'Intelligent conversational AI with natural language processing capabilities and context awareness.',
      image: '/api/placeholder/400/250',
      category: 'ai',
      technologies: ['Python', 'TensorFlow', 'NLP', 'Flask', 'React'],
      features: ['Natural Language Understanding', 'Context Awareness', 'Multi-language Support', 'Voice Integration'],
      github: 'https://github.com/srsahed/ai-chatbot',
      demo: 'https://ai-chatbot-demo.com',
      status: 'completed'
    },
    {
      id: 2,
      title: 'Cybersecurity Vulnerability Scanner',
      description: 'Advanced security tool for identifying and assessing vulnerabilities in web applications.',
      image: '/api/placeholder/400/250',
      category: 'security',
      technologies: ['Python', 'Nmap', 'SQLMap', 'BeautifulSoup', 'Django'],
      features: ['Port Scanning', 'SQL Injection Detection', 'XSS Testing', 'Security Reporting'],
      github: 'https://github.com/srsahed/vuln-scanner',
      demo: 'https://security-scanner-demo.com',
      status: 'completed'
    },
    {
      id: 3,
      title: 'Unity 3D Adventure Game',
      description: 'Immersive 3D adventure game with complex mechanics, AI enemies, and multiplayer support.',
      image: '/api/placeholder/400/250',
      category: 'game',
      technologies: ['Unity', 'C#', 'Blender', 'Photon', 'Firebase'],
      features: ['3D Graphics', 'AI Enemies', 'Multiplayer', 'Quest System'],
      github: 'https://github.com/srsahed/unity-adventure',
      demo: 'https://game-demo.com',
      status: 'in-progress'
    },
    {
      id: 4,
      title: 'Arduino Smart Home System',
      description: 'IoT-based home automation system with sensors, actuators, and mobile app control.',
      image: '/api/placeholder/400/250',
      category: 'robotics',
      technologies: ['Arduino', 'C++', 'ESP32', 'React Native', 'Firebase'],
      features: ['Remote Control', 'Sensor Integration', 'Automation Rules', 'Mobile App'],
      github: 'https://github.com/srsahed/smart-home',
      demo: 'https://smarthome-demo.com',
      status: 'completed'
    },
    {
      id: 5,
      title: 'E-commerce Platform',
      description: 'Full-stack e-commerce solution with payment integration, inventory management, and analytics.',
      image: '/api/placeholder/400/250',
      category: 'web',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redis'],
      features: ['Payment Processing', 'Inventory Management', 'Order Tracking', 'Analytics Dashboard'],
      github: 'https://github.com/srsahed/ecommerce-platform',
      demo: 'https://ecommerce-demo.com',
      status: 'completed'
    },
    {
      id: 6,
      title: 'Machine Learning Image Classifier',
      description: 'Deep learning model for image classification with real-time processing capabilities.',
      image: '/api/placeholder/400/250',
      category: 'ai',
      technologies: ['Python', 'PyTorch', 'OpenCV', 'FastAPI', 'Docker'],
      features: ['Real-time Classification', 'Multiple Categories', 'API Integration', 'Model Training'],
      github: 'https://github.com/srsahed/ml-classifier',
      demo: 'https://classifier-demo.com',
      status: 'completed'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects', icon: Filter },
    { id: 'ai', name: 'AI & ML', icon: Bot },
    { id: 'security', name: 'Cybersecurity', icon: Shield },
    { id: 'game', name: 'Game Dev', icon: Gamepad2 },
    { id: 'web', name: 'Web Dev', icon: Globe },
    { id: 'robotics', name: 'Robotics', icon: Database }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-500';
      case 'in-progress': return 'bg-yellow-500';
      case 'planned': return 'bg-blue-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Projects Portfolio
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my technical projects across AI, Cybersecurity, Game Development, and Web Technologies
          </p>
        </section>

        {/* Category Filter */}
        <section className="mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className="flex items-center space-x-2"
              >
                <category.icon className="h-4 w-4" />
                <span>{category.name}</span>
              </Button>
            ))}
          </div>
        </section>

        {/* Projects Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl opacity-50">
                    {project.category === 'ai' && '🤖'}
                    {project.category === 'security' && '🛡️'}
                    {project.category === 'game' && '🎮'}
                    {project.category === 'web' && '🌐'}
                    {project.category === 'robotics' && '🤖'}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge className={`${getStatusColor(project.status)} text-white`}>
                    {project.status.replace('-', ' ')}
                  </Badge>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                
                {/* Technologies */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-sm mb-2">Key Features:</h4>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    {project.features.slice(0, 3).map((feature, featureIndex) => (
                      <li key={featureIndex}>• {feature}</li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-2">
                  <Button size="sm" variant="outline" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-1" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Demo
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </section>

        {/* Featured Project Showcase */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Featured Project</h2>
          <Card className="p-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <Badge className="mb-4 bg-gradient-to-r from-blue-600 to-purple-600">Featured</Badge>
                <h3 className="text-2xl font-bold mb-4">S.R. Portfolio Website</h3>
                <p className="text-muted-foreground mb-6">
                  This very website you're viewing! A modern, responsive portfolio built with React, 
                  TypeScript, and Tailwind CSS. Features include AI chatbot integration, interactive 
                  components, dark/light themes, and comprehensive sections showcasing my work and skills.
                </p>
                <div className="mb-6">
                  <h4 className="font-semibold mb-2">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {['React', 'TypeScript', 'Tailwind CSS', 'Shadcn/ui', 'Framer Motion', 'Vite'].map((tech) => (
                      <Badge key={tech} variant="secondary">{tech}</Badge>
                    ))}
                  </div>
                </div>
                <div className="flex space-x-4">
                  <Button asChild>
                    <a href="https://github.com/sr-sahed/portfolio" target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      View Code
                    </a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href="/" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Site
                    </a>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="w-full h-64 bg-gradient-to-br from-blue-200 to-purple-200 dark:from-blue-800 dark:to-purple-800 rounded-lg flex items-center justify-center">
                  <span className="text-8xl">💻</span>
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* Live Demos Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-8">Interactive Demos</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Experience some of my projects through live, interactive demonstrations
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Bot className="h-12 w-12 mx-auto mb-4 text-blue-600" />
              <h3 className="font-semibold mb-2">AI Chatbot Demo</h3>
              <p className="text-sm text-muted-foreground mb-4">Try the AI assistant integrated in this site</p>
              <Button size="sm" variant="outline">
                <Play className="h-4 w-4 mr-2" />
                Try Now
              </Button>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Database className="h-12 w-12 mx-auto mb-4 text-green-600" />
              <h3 className="font-semibold mb-2">Algorithm Visualizer</h3>
              <p className="text-sm text-muted-foreground mb-4">Interactive sorting algorithms</p>
              <Button size="sm" variant="outline" asChild>
                <a href="/playground">
                  <Play className="h-4 w-4 mr-2" />
                  Explore
                </a>
              </Button>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Shield className="h-12 w-12 mx-auto mb-4 text-red-600" />
              <h3 className="font-semibold mb-2">Security Scanner</h3>
              <p className="text-sm text-muted-foreground mb-4">Web vulnerability assessment tool</p>
              <Button size="sm" variant="outline">
                <Play className="h-4 w-4 mr-2" />
                Demo
              </Button>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Projects;