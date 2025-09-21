import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Download, Calendar, MapPin, Award, GraduationCap, Briefcase } from 'lucide-react';

const Resume = () => {
  const experiences = [
    {
      title: 'IT Intern',
      company: 'Fortune Zipper Limited',
      period: 'April 2025 - Present',
      location: 'Dhaka, Bangladesh',
      description: 'Working on IT infrastructure management, system optimization, and tech support solutions.',
      skills: ['System Administration', 'Network Management', 'Technical Support']
    }
  ];

  const education = [
    {
      degree: 'BSc in Computer Science & Engineering',
      institution: 'European University of Bangladesh',
      period: '2022 - Present',
      location: 'Dhaka, Bangladesh',
      description: 'Specializing in AI/ML, Software Engineering, and Computer Systems.',
      gpa: 'CGPA: 3.7/4.0'
    },
    {
      degree: 'Higher Secondary Certificate (HSC)',
      institution: 'Local College',
      period: '2022',
      location: 'Bangladesh',
      description: 'Science Group with focus on Mathematics and Physics.',
      gpa: 'GPA: 3.33/5.0'
    },
    {
      degree: 'Secondary School Certificate (SSC)',
      institution: 'Local High School',
      period: '2020',
      location: 'Bangladesh',
      description: 'Science Group with excellent academic performance.',
      gpa: 'GPA: 4.44/5.0'
    }
  ];

  const achievements = [
    {
      title: 'AI/ML Certification',
      organization: 'Coursera',
      date: '2024',
      description: 'Completed comprehensive Machine Learning specialization'
    },
    {
      title: 'Hackathon Winner',
      organization: 'TechFest 2024',
      date: '2024',
      description: '1st place in AI Innovation category'
    },
    {
      title: 'Programming Contest',
      organization: 'University Programming Contest',
      date: '2023',
      description: 'Top 10 finalist in competitive programming'
    },
    {
      title: 'Cybersecurity Workshop',
      organization: 'CyberSec BD',
      date: '2023',
      description: 'Completed advanced ethical hacking workshop'
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Resume
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            My journey through education, experience, and achievements in technology
          </p>
          <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
            <Download className="mr-2 h-5 w-5" />
            Download Resume
          </Button>
        </section>

        {/* Experience Section */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <Briefcase className="h-8 w-8 text-primary mr-3" />
            <h2 className="text-3xl font-bold">Experience</h2>
          </div>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-primary">{exp.title}</h3>
                    <h4 className="text-lg font-medium text-muted-foreground">{exp.company}</h4>
                  </div>
                  <div className="flex flex-col md:text-right mt-2 md:mt-0">
                    <div className="flex items-center text-sm text-muted-foreground mb-1">
                      <Calendar className="h-4 w-4 mr-1" />
                      {exp.period}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-1" />
                      {exp.location}
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary">{skill}</Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <GraduationCap className="h-8 w-8 text-primary mr-3" />
            <h2 className="text-3xl font-bold">Education</h2>
          </div>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-primary">{edu.degree}</h3>
                    <h4 className="text-lg font-medium text-muted-foreground">{edu.institution}</h4>
                  </div>
                  <div className="flex flex-col md:text-right mt-2 md:mt-0">
                    <div className="flex items-center text-sm text-muted-foreground mb-1">
                      <Calendar className="h-4 w-4 mr-1" />
                      {edu.period}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-1" />
                      {edu.location}
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground mb-2">{edu.description}</p>
                <Badge variant="outline" className="text-primary border-primary">{edu.gpa}</Badge>
              </Card>
            ))}
          </div>
        </section>

        {/* Achievements Section */}
        <section>
          <div className="flex items-center mb-8">
            <Award className="h-8 w-8 text-primary mr-3" />
            <h2 className="text-3xl font-bold">Achievements & Certifications</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-semibold text-primary">{achievement.title}</h3>
                  <Badge variant="outline">{achievement.date}</Badge>
                </div>
                <h4 className="font-medium text-muted-foreground mb-2">{achievement.organization}</h4>
                <p className="text-sm text-muted-foreground">{achievement.description}</p>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Resume;