import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { 
  Calendar, 
  Clock, 
  User, 
  Search,
  ArrowRight,
  BookOpen,
  TrendingUp,
  Heart,
  MessageCircle,
  Share2
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Education: Transforming Learning Experiences',
      excerpt: 'Exploring how artificial intelligence is revolutionizing the way we learn and teach, from personalized learning paths to intelligent tutoring systems.',
      content: 'Full article content would go here...',
      author: 'S. R. Sahed',
      date: '2024-12-15',
      readTime: '8 min read',
      category: 'AI & Technology',
      tags: ['AI', 'Education', 'Machine Learning', 'Future Tech'],
      image: '/api/placeholder/600/300',
      likes: 42,
      comments: 8,
      featured: true
    },
    {
      id: 2,
      title: 'Cybersecurity Best Practices for Modern Web Applications',
      excerpt: 'A comprehensive guide to securing web applications against common vulnerabilities and emerging threats in 2024.',
      content: 'Full article content would go here...',
      author: 'S. R. Sahed',
      date: '2024-12-10',
      readTime: '12 min read',
      category: 'Cybersecurity',
      tags: ['Security', 'Web Development', 'Best Practices', 'OWASP'],
      image: '/api/placeholder/600/300',
      likes: 38,
      comments: 12,
      featured: false
    },
    {
      id: 3,
      title: 'Building Scalable React Applications: Architecture and Best Practices',
      excerpt: 'Learn how to structure and organize large-scale React applications for maintainability and performance.',
      content: 'Full article content would go here...',
      author: 'S. R. Sahed',
      date: '2024-12-05',
      readTime: '10 min read',
      category: 'Web Development',
      tags: ['React', 'JavaScript', 'Architecture', 'Performance'],
      image: '/api/placeholder/600/300',
      likes: 29,
      comments: 6,
      featured: false
    },
    {
      id: 4,
      title: 'Game Development with Unity: From Concept to Reality',
      excerpt: 'A step-by-step journey through creating an indie game, covering design, development, and publishing processes.',
      content: 'Full article content would go here...',
      author: 'S. R. Sahed',
      date: '2024-11-28',
      readTime: '15 min read',
      category: 'Game Development',
      tags: ['Unity', 'Game Design', 'C#', 'Indie Development'],
      image: '/api/placeholder/600/300',
      likes: 51,
      comments: 15,
      featured: false
    },
    {
      id: 5,
      title: 'IoT and Arduino: Building Smart Solutions for Everyday Problems',
      excerpt: 'Discover how to create intelligent IoT devices using Arduino and modern sensors to solve real-world challenges.',
      content: 'Full article content would go here...',
      author: 'S. R. Sahed',
      date: '2024-11-20',
      readTime: '9 min read',
      category: 'IoT & Robotics',
      tags: ['Arduino', 'IoT', 'Sensors', 'Smart Home'],
      image: '/api/placeholder/600/300',
      likes: 33,
      comments: 9,
      featured: false
    },
    {
      id: 6,
      title: 'The Journey of a Computer Science Student: Lessons Learned',
      excerpt: 'Reflections on my academic journey, challenges faced, and insights gained while pursuing Computer Science.',
      content: 'Full article content would go here...',
      author: 'S. R. Sahed',
      date: '2024-11-15',
      readTime: '6 min read',
      category: 'Personal',
      tags: ['Education', 'Personal Growth', 'Computer Science', 'Student Life'],
      image: '/api/placeholder/600/300',
      likes: 67,
      comments: 23,
      featured: false
    }
  ];

  const categories = ['All', 'AI & Technology', 'Cybersecurity', 'Web Development', 'Game Development', 'IoT & Robotics', 'Personal'];

  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Blog & Insights
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Thoughts, tutorials, and insights on technology, development, and innovation
          </p>
        </section>

        {/* Search and Filter */}
        <section className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </section>

        {/* Featured Post */}
        {featuredPost && selectedCategory === 'All' && (
          <section className="mb-16">
            <div className="flex items-center mb-6">
              <TrendingUp className="h-6 w-6 text-primary mr-2" />
              <h2 className="text-2xl font-bold">Featured Article</h2>
            </div>
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="h-64 lg:h-auto bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 flex items-center justify-center">
                  <BookOpen className="h-24 w-24 text-primary opacity-50" />
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <Badge className="bg-gradient-to-r from-blue-600 to-purple-600">Featured</Badge>
                    <Badge variant="outline">{featuredPost.category}</Badge>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{featuredPost.title}</h3>
                  <p className="text-muted-foreground mb-6">{featuredPost.excerpt}</p>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        {featuredPost.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date(featuredPost.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {featuredPost.readTime}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Heart className="h-4 w-4 mr-1" />
                        {featuredPost.likes}
                      </div>
                      <div className="flex items-center">
                        <MessageCircle className="h-4 w-4 mr-1" />
                        {featuredPost.comments}
                      </div>
                    </div>
                    <Button>
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </section>
        )}

        {/* Blog Posts Grid */}
        <section>
          <h2 className="text-2xl font-bold mb-8">
            {selectedCategory === 'All' ? 'Latest Articles' : `${selectedCategory} Articles`}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 flex items-center justify-center">
                  <BookOpen className="h-16 w-16 text-primary opacity-50" />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="outline" className="text-xs">{post.category}</Badge>
                  </div>
                  
                  <h3 className="font-bold text-lg mb-3 line-clamp-2">{post.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                  
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                    <div className="flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3 text-xs text-muted-foreground">
                      <div className="flex items-center">
                        <Heart className="h-3 w-3 mr-1" />
                        {post.likes}
                      </div>
                      <div className="flex items-center">
                        <MessageCircle className="h-3 w-3 mr-1" />
                        {post.comments}
                      </div>
                    </div>
                    <Button size="sm" variant="outline">
                      <ArrowRight className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          
          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <BookOpen className="h-24 w-24 mx-auto mb-4 text-muted-foreground opacity-50" />
              <h3 className="text-xl font-semibold mb-2">No articles found</h3>
              <p className="text-muted-foreground">Try adjusting your search or filter criteria.</p>
            </div>
          )}
        </section>

        {/* Newsletter Signup */}
        <section className="mt-16 text-center bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Subscribe to my newsletter for the latest articles on technology, AI, and development insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Input placeholder="Enter your email" className="flex-1" />
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              Subscribe
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Blog;