import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import { 
  MessageCircle, 
  X, 
  Send, 
  Bot,
  User,
  Minimize2,
  Maximize2
} from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const AIChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hello! I\'m S.R.\'s AI assistant. I can help you navigate the portfolio, answer questions about his work, or even quiz you on programming concepts. How can I assist you today?',
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');

  const predefinedResponses = {
    'skills': 'S.R. Sahed specializes in AI/ML, Cybersecurity, Game Development, and Web Development. He\'s proficient in Python, JavaScript, C++, React, Unity, and many other technologies. Would you like to know more about any specific skill?',
    'projects': 'S.R. has worked on various projects including AI chatbots, cybersecurity tools, Unity games, and Arduino IoT systems. You can view all his projects in the Projects section. Which type of project interests you most?',
    'contact': 'You can reach S.R. at sahedurrahman611@gmail.com or +8801766700792. He\'s also available on WhatsApp, LinkedIn, and GitHub. Visit the Contact page for more details!',
    'experience': 'S.R. is currently working as an IT Intern at Fortune Zipper Limited and is pursuing his BSc in Computer Science at European University of Bangladesh. He has 2+ years of experience in various tech domains.',
    'quiz': 'Great! Let me ask you a programming question: What is the time complexity of bubble sort algorithm? A) O(n) B) O(n log n) C) O(n²) D) O(log n)',
    'services': 'S.R. offers Web Development, AI/ML Solutions, Cybersecurity Services, and Game Development. Pricing starts from $500-$1000 depending on the project complexity. Check the Services page for details!'
  };

  const getResponse = (input: string): string => {
    const lowerInput = input.toLowerCase();
    
    if (lowerInput.includes('skill') || lowerInput.includes('technology') || lowerInput.includes('programming')) {
      return predefinedResponses.skills;
    } else if (lowerInput.includes('project') || lowerInput.includes('work') || lowerInput.includes('portfolio')) {
      return predefinedResponses.projects;
    } else if (lowerInput.includes('contact') || lowerInput.includes('email') || lowerInput.includes('phone')) {
      return predefinedResponses.contact;
    } else if (lowerInput.includes('experience') || lowerInput.includes('job') || lowerInput.includes('intern')) {
      return predefinedResponses.experience;
    } else if (lowerInput.includes('quiz') || lowerInput.includes('test') || lowerInput.includes('question')) {
      return predefinedResponses.quiz;
    } else if (lowerInput.includes('service') || lowerInput.includes('hire') || lowerInput.includes('price')) {
      return predefinedResponses.services;
    } else if (lowerInput.includes('hello') || lowerInput.includes('hi') || lowerInput.includes('hey')) {
      return 'Hello! Nice to meet you! I can help you learn more about S.R. Sahed\'s skills, projects, experience, or even quiz you on programming. What would you like to know?';
    } else if (lowerInput.includes('thanks') || lowerInput.includes('thank you')) {
      return 'You\'re welcome! Is there anything else you\'d like to know about S.R.\'s work or skills?';
    } else {
      return 'I\'m here to help you learn about S.R. Sahed\'s portfolio! You can ask me about his skills, projects, experience, services, or I can quiz you on programming concepts. What interests you most?';
    }
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');

    // Simulate AI response delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getResponse(inputValue),
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          size="lg"
          className="rounded-full w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
        <Badge className="absolute -top-2 -left-2 bg-red-500 text-white animate-pulse">
          AI
        </Badge>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Card className={`w-80 transition-all duration-300 ${isMinimized ? 'h-14' : 'h-96'} shadow-xl`}>
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-t-lg">
          <div className="flex items-center space-x-2">
            <Bot className="h-5 w-5" />
            <span className="font-medium">AI Assistant</span>
            <Badge variant="secondary" className="text-xs">Online</Badge>
          </div>
          <div className="flex items-center space-x-1">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMinimized(!isMinimized)}
              className="text-white hover:bg-white/20 h-8 w-8 p-0"
            >
              {isMinimized ? <Maximize2 className="h-4 w-4" /> : <Minimize2 className="h-4 w-4" />}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-white/20 h-8 w-8 p-0"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {!isMinimized && (
          <>
            {/* Messages */}
            <ScrollArea className="h-64 p-4">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[75%] rounded-lg p-3 ${
                        message.sender === 'user'
                          ? 'bg-blue-600 text-white'
                          : 'bg-muted text-foreground'
                      }`}
                    >
                      <div className="flex items-start space-x-2">
                        {message.sender === 'bot' && <Bot className="h-4 w-4 mt-0.5 flex-shrink-0" />}
                        {message.sender === 'user' && <User className="h-4 w-4 mt-0.5 flex-shrink-0" />}
                        <p className="text-sm">{message.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>

            {/* Input */}
            <div className="p-4 border-t">
              <div className="flex space-x-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Ask me anything..."
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  className="flex-1"
                />
                <Button
                  onClick={handleSendMessage}
                  size="sm"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </>
        )}
      </Card>
    </div>
  );
};

export default AIChat;