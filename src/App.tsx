import { Toaster } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@/contexts/ThemeContext';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Resume from '@/pages/Resume';
import Services from '@/pages/Services';
import Skills from '@/pages/Skills';
import Projects from '@/pages/Projects';
import TeachVerseX from '@/pages/TeachVerseX';
import Blog from '@/pages/Blog';
import Contact from '@/pages/Contact';
import CodingPlayground from '@/pages/CodingPlayground';
import SkillTest from '@/pages/SkillTest';
import NotFound from '@/pages/NotFound';
import AIChat from '@/components/ai/AIChat';
import ScrollToTop from '@/components/common/ScrollToTop';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <BrowserRouter>
          <div className="min-h-screen bg-background text-foreground">
            <Navbar />
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/services" element={<Services />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/teachversex" element={<TeachVerseX />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/playground" element={<CodingPlayground />} />
                <Route path="/skill-test" element={<SkillTest />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
            <AIChat />
            <ScrollToTop />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;