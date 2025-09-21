import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Code, 
  Bot, 
  Shield, 
  Gamepad2, 
  ArrowRight, 
  Check,
  Globe,
  Smartphone,
  Database,
  Cloud
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Full-stack web applications with modern technologies and responsive design.',
      features: [
        'React.js & Next.js Development',
        'Node.js & Express.js Backend',
        'Database Design & Integration',
        'API Development & Integration',
        'Responsive UI/UX Design',
        'Performance Optimization'
      ],
      technologies: ['React', 'Next.js', 'Node.js', 'MongoDB', 'PostgreSQL', 'Tailwind CSS'],
      pricing: 'Starting from $500',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Bot,
      title: 'AI/ML Solutions',
      description: 'Intelligent systems powered by machine learning and artificial intelligence.',
      features: [
        'Custom AI Model Development',
        'Natural Language Processing',
        'Computer Vision Solutions',
        'Chatbot Development',
        'Data Analysis & Insights',
        'ML Model Deployment'
      ],
      technologies: ['Python', 'TensorFlow', 'PyTorch', 'OpenCV', 'Scikit-learn', 'FastAPI'],
      pricing: 'Starting from $800',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Shield,
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security assessments and protection strategies.',
      features: [
        'Security Auditing & Testing',
        'Penetration Testing',
        'Vulnerability Assessment',
        'Security Architecture Design',
        'Incident Response Planning',
        'Security Training & Consultation'
      ],
      technologies: ['Python', 'Kali Linux', 'Metasploit', 'Wireshark', 'Nmap', 'Burp Suite'],
      pricing: 'Starting from $600',
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: Gamepad2,
      title: 'Game Development',
      description: 'Interactive gaming experiences with engaging mechanics and stunning visuals.',
      features: [
        '2D & 3D Game Development',
        'Unity & Unreal Engine',
        'Mobile Game Development',
        'Game Mechanics Design',
        'Multiplayer Integration',
        'Performance Optimization'
      ],
      technologies: ['Unity', 'C#', 'Unreal Engine', 'Blender', 'Photoshop', 'Firebase'],
      pricing: 'Starting from $1000',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const additionalServices = [
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Cross-platform mobile applications for iOS and Android.',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Database,
      title: 'Database Solutions',
      description: 'Database design, optimization, and management services.',
      color: 'from-teal-500 to-green-500'
    },
    {
      icon: Cloud,
      title: 'Cloud Integration',
      description: 'Cloud deployment, scaling, and infrastructure management.',
      color: 'from-blue-500 to-indigo-500'
    },
    {
      icon: Globe,
      title: 'Digital Transformation',
      description: 'Complete digital transformation consulting and implementation.',
      color: 'from-pink-500 to-rose-500'
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive technology solutions tailored to your needs
          </p>
        </section>

        {/* Main Services */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="p-8 hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${service.color} p-1`}>
                    <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                      <service.icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-2xl font-bold">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </div>
                </div>

                <div className="space-y-6">
                  {/* Features */}
                  <div>
                    <h4 className="font-semibold mb-3">What's Included:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm">
                          <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold mb-3">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary">{tech}</Badge>
                      ))}
                    </div>
                  </div>

                  {/* Pricing */}
                  <div className="flex items-center justify-between pt-4 border-t">
                    <span className="text-lg font-semibold text-primary">{service.pricing}</span>
                    <Button asChild>
                      <Link to="/contact">
                        Get Quote <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Additional Services */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Additional Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${service.color} p-1`}>
                  <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="font-semibold mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss your requirements and create something amazing together. 
            I'm here to turn your ideas into reality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              <Link to="/contact">
                Start a Project <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/projects">
                View Portfolio
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Services;