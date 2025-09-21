import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Code2, 
  Brain, 
  Shield, 
  Gamepad2, 
  Database, 
  Globe,
  Users,
  Target,
  MessageSquare,
  Lightbulb,
  Play,
  ChevronRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Skills = () => {
  const [activeDemo, setActiveDemo] = useState<string | null>(null);

  const programmingSkills = [
    { name: 'Python', level: 90, color: 'bg-blue-500', description: 'AI/ML, Backend Development' },
    { name: 'JavaScript', level: 85, color: 'bg-yellow-500', description: 'Frontend & Backend' },
    { name: 'C++', level: 80, color: 'bg-purple-500', description: 'Competitive Programming' },
    { name: 'Java', level: 75, color: 'bg-red-500', description: 'Object-Oriented Programming' },
    { name: 'C', level: 70, color: 'bg-gray-500', description: 'System Programming' },
    { name: 'HTML/CSS', level: 95, color: 'bg-orange-500', description: 'Web Development' }
  ];

  const frameworks = [
    { name: 'React.js', level: 90, icon: '⚛️' },
    { name: 'Node.js', level: 85, icon: '🟢' },
    { name: 'Django', level: 80, icon: '🐍' },
    { name: 'Flask', level: 85, icon: '🌶️' },
    { name: 'TensorFlow', level: 75, icon: '🧠' },
    { name: 'PyTorch', level: 70, icon: '🔥' },
    { name: 'OpenCV', level: 80, icon: '👁️' },
    { name: 'Unity', level: 75, icon: '🎮' }
  ];

  const tools = [
    { name: 'Git', level: 90, category: 'Version Control' },
    { name: 'Docker', level: 75, category: 'DevOps' },
    { name: 'Linux', level: 85, category: 'Operating System' },
    { name: 'MySQL', level: 80, category: 'Database' },
    { name: 'MongoDB', level: 85, category: 'Database' },
    { name: 'AWS', level: 70, category: 'Cloud' },
    { name: 'Figma', level: 75, category: 'Design' },
    { name: 'Postman', level: 85, category: 'API Testing' }
  ];

  const specializations = [
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      skills: ['Deep Learning', 'Natural Language Processing', 'Computer Vision', 'Neural Networks'],
      level: 85,
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      skills: ['Ethical Hacking', 'Penetration Testing', 'Security Analysis', 'Incident Response'],
      level: 80,
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: Gamepad2,
      title: 'Game Development',
      skills: ['Unity Development', '2D/3D Games', 'Game Mechanics', 'Player Experience'],
      level: 75,
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Database,
      title: 'Robotics & IoT',
      skills: ['Arduino Programming', 'Sensor Integration', 'IoT Systems', 'Automation'],
      level: 70,
      color: 'from-blue-500 to-indigo-500'
    }
  ];

  const softSkills = [
    { icon: Lightbulb, name: 'Problem Solving', description: 'Creative solutions to complex challenges' },
    { icon: Users, name: 'Leadership', description: 'Leading teams and projects effectively' },
    { icon: MessageSquare, name: 'Communication', description: 'Clear technical and non-technical communication' },
    { icon: Target, name: 'self-Motivation', description: 'Driven to continuously learn and improve' }
  ];

  const demos = [
    {
      id: 'sorting',
      title: 'Sorting Algorithm Visualizer',
      description: 'Interactive bubble sort demonstration',
      code: `function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}`
    },
    {
      id: 'ai',
      title: 'Simple AI Prediction',
      description: 'Basic machine learning concept',
      code: `function linearRegression(x, y) {
  const n = x.length;
  const sumX = x.reduce((a, b) => a + b, 0);
  const sumY = y.reduce((a, b) => a + b, 0);
  const sumXY = x.reduce((sum, xi, i) => sum + xi * y[i], 0);
  const sumXX = x.reduce((sum, xi) => sum + xi * xi, 0);
  
  const slope = (n * sumXY - sumX * sumY) / (n * sumXX - sumX * sumX);
  const intercept = (sumY - slope * sumX) / n;
  
  return { slope, intercept };
}`
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Skills & Expertise
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical abilities and professional competencies
          </p>
        </section>

        <Tabs defaultValue="programming" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-12">
            <TabsTrigger value="programming">Programming</TabsTrigger>
            <TabsTrigger value="frameworks">Frameworks</TabsTrigger>
            <TabsTrigger value="specializations">Specializations</TabsTrigger>
            <TabsTrigger value="soft-skills">Soft Skills</TabsTrigger>
          </TabsList>

          <TabsContent value="programming" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {programmingSkills.map((skill, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="font-semibold text-lg">{skill.name}</h3>
                    <Badge variant="outline">{skill.level}%</Badge>
                  </div>
                  <Progress value={skill.level} className="mb-2" />
                  <p className="text-sm text-muted-foreground">{skill.description}</p>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="frameworks" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {frameworks.map((framework, index) => (
                <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="text-4xl mb-3">{framework.icon}</div>
                  <h3 className="font-semibold mb-2">{framework.name}</h3>
                  <Progress value={framework.level} className="mb-2" />
                  <Badge variant="secondary">{framework.level}%</Badge>
                </Card>
              ))}
            </div>

            <div className="mt-12">
              <h3 className="text-2xl font-bold mb-6">Tools & Technologies</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {tools.map((tool, index) => (
                  <Card key={index} className="p-4 hover:shadow-lg transition-shadow">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-medium">{tool.name}</h4>
                      <Badge variant="outline" className="text-xs">{tool.level}%</Badge>
                    </div>
                    <Progress value={tool.level} className="mb-2" />
                    <p className="text-xs text-muted-foreground">{tool.category}</p>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="specializations" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {specializations.map((spec, index) => (
                <Card key={index} className="p-8 hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="flex items-center mb-6">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${spec.color} p-1`}>
                      <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                        <spec.icon className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-bold">{spec.title}</h3>
                      <Badge variant="outline">{spec.level}% Proficiency</Badge>
                    </div>
                  </div>
                  <Progress value={spec.level} className="mb-4" />
                  <div className="flex flex-wrap gap-2">
                    {spec.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary">{skill}</Badge>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="soft-skills" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {softSkills.map((skill, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <skill.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">{skill.name}</h3>
                      <p className="text-muted-foreground">{skill.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Interactive Demos Section */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-8">Interactive Demos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {demos.map((demo) => (
              <Card key={demo.id} className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-semibold text-lg mb-2">{demo.title}</h3>
                <p className="text-muted-foreground mb-4">{demo.description}</p>
                <Button 
                  onClick={() => setActiveDemo(activeDemo === demo.id ? null : demo.id)}
                  variant="outline" 
                  className="mb-4"
                >
                  <Play className="mr-2 h-4 w-4" />
                  {activeDemo === demo.id ? 'Hide Code' : 'Show Code'}
                </Button>
                {activeDemo === demo.id && (
                  <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
                    <code>{demo.code}</code>
                  </pre>
                )}
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-16 text-center bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">Want to Test My Skills?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Try out my coding playground or test your own programming skills with interactive challenges.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              <Link to="/playground">
                Coding Playground <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/skill-test">
                Take Skill Test
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Skills;