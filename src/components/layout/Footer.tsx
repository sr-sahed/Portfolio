import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Youtube, Facebook, MessageCircle, Heart } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' }
  ];

  const socialLinks = [
    { icon: Youtube, href: 'https://youtube.com/@indistinctmist', label: 'YouTube' },
    { icon: Github, href: 'https://github.com/sr-sahed', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/sr-sahed', label: 'LinkedIn' },
    { icon: Facebook, href: 'https://facebook.com/sr.sahedur', label: 'Facebook' },
    { icon: MessageCircle, href: 'https://wa.me/8801766700792', label: 'WhatsApp' }
  ];

  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              S. R. Sahed
            </h3>
            <p className="text-lg font-semibold text-primary mb-2">
              "I don't dream small; I build for the world."
            </p>
            <p className="text-muted-foreground mb-4 max-w-md">
              Computer Science Student | AI Enthusiast | Future Tech Innovator
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <social.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Additional Links */}
          <div>
            <h4 className="font-semibold mb-4">Explore</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/playground" className="text-muted-foreground hover:text-primary transition-colors">
                  Coding Playground
                </Link>
              </li>
              <li>
                <Link to="/skill-test" className="text-muted-foreground hover:text-primary transition-colors">
                  Skill Test
                </Link>
              </li>
              <li>
                <Link to="/teachversex" className="text-muted-foreground hover:text-primary transition-colors">
                  S.R.TeachVerseX
                </Link>
              </li>
              <li>
                <a href="/sitemap.xml" className="text-muted-foreground hover:text-primary transition-colors">
                  Sitemap
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center">
          <p className="text-muted-foreground flex items-center justify-center">
            © 2025 S. R. Sahed. Made with <Heart className="h-4 w-4 mx-1 text-red-500" /> for the world.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;