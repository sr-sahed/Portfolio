import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { 
  Brain, 
  Clock, 
  CheckCircle, 
  XCircle,
  Trophy,
  Star,
  RotateCcw,
  Play
} from 'lucide-react';

interface Question {
  id: number;
  question: string;
  options: string[];
  correct: number;
  category: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  explanation: string;
}

interface TestResult {
  score: number;
  totalQuestions: number;
  timeSpent: number;
  feedback: string;
  grade: string;
}

const SkillTest = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string>('');
  const [userAnswers, setUserAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [testStarted, setTestStarted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes
  const [testResult, setTestResult] = useState<TestResult | null>(null);

  const questions: Question[] = [
    {
      id: 1,
      question: "What is the time complexity of binary search?",
      options: ["O(n)", "O(log n)", "O(n²)", "O(1)"],
      correct: 1,
      category: "Algorithms",
      difficulty: "Medium",
      explanation: "Binary search divides the search space in half with each step, resulting in O(log n) complexity."
    },
    {
      id: 2,
      question: "Which of the following is NOT a principle of Object-Oriented Programming?",
      options: ["Encapsulation", "Inheritance", "Polymorphism", "Compilation"],
      correct: 3,
      category: "OOP",
      difficulty: "Easy",
      explanation: "Compilation is a process of converting code to machine language, not an OOP principle."
    },
    {
      id: 3,
      question: "In React, what is the purpose of the useEffect hook?",
      options: ["State management", "Side effects", "Component rendering", "Event handling"],
      correct: 1,
      category: "React",
      difficulty: "Medium",
      explanation: "useEffect is used to perform side effects in functional components, like API calls or subscriptions."
    },
    {
      id: 4,
      question: "What does SQL stand for?",
      options: ["Structured Query Language", "Standard Query Language", "Simple Query Language", "System Query Language"],
      correct: 0,
      category: "Database",
      difficulty: "Easy",
      explanation: "SQL stands for Structured Query Language, used for managing relational databases."
    },
    {
      id: 5,
      question: "Which sorting algorithm has the best average-case time complexity?",
      options: ["Bubble Sort", "Quick Sort", "Insertion Sort", "Selection Sort"],
      correct: 1,
      category: "Algorithms",
      difficulty: "Hard",
      explanation: "Quick Sort has an average-case time complexity of O(n log n), making it very efficient."
    }
  ];

  const startTest = () => {
    setTestStarted(true);
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          finishTest();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const handleAnswerSelect = (value: string) => {
    setSelectedAnswer(value);
  };

  const nextQuestion = () => {
    const answerIndex = parseInt(selectedAnswer);
    setUserAnswers([...userAnswers, answerIndex]);
    setSelectedAnswer('');

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      finishTest();
    }
  };

  const finishTest = () => {
    const finalAnswers = selectedAnswer ? [...userAnswers, parseInt(selectedAnswer)] : userAnswers;
    const correctAnswers = finalAnswers.filter((answer, index) => answer === questions[index]?.correct).length;
    const score = Math.round((correctAnswers / questions.length) * 100);
    const timeSpent = 300 - timeLeft;

    let grade = 'F';
    let feedback = 'Keep practicing! ';

    if (score >= 90) {
      grade = 'A+';
      feedback = 'Excellent! You have outstanding knowledge. ';
    } else if (score >= 80) {
      grade = 'A';
      feedback = 'Great job! You have solid understanding. ';
    } else if (score >= 70) {
      grade = 'B';
      feedback = 'Good work! You have good fundamentals. ';
    } else if (score >= 60) {
      grade = 'C';
      feedback = 'Decent performance. Room for improvement. ';
    } else if (score >= 50) {
      grade = 'D';
      feedback = 'Below average. Consider more study. ';
    }

    feedback += `You scored ${correctAnswers} out of ${questions.length} questions correctly.`;

    setTestResult({
      score,
      totalQuestions: questions.length,
      timeSpent,
      feedback,
      grade
    });
    setShowResult(true);
  };

  const restartTest = () => {
    setCurrentQuestion(0);
    setSelectedAnswer('');
    setUserAnswers([]);
    setShowResult(false);
    setTestStarted(false);
    setTimeLeft(300);
    setTestResult(null);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-500';
      case 'Medium': return 'bg-yellow-500';
      case 'Hard': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  if (!testStarted) {
    return (
      <div className="min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-4">
          <section className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Programming Skill Test
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Test your programming knowledge with this interactive quiz
            </p>
          </section>

          <div className="max-w-2xl mx-auto">
            <Card className="p-8">
              <div className="text-center mb-8">
                <Brain className="h-16 w-16 mx-auto mb-4 text-primary" />
                <h2 className="text-2xl font-bold mb-4">Ready to Test Your Skills?</h2>
                <p className="text-muted-foreground mb-6">
                  This test contains {questions.length} questions covering algorithms, programming concepts, 
                  and web development. You'll have 5 minutes to complete it.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">{questions.length}</div>
                  <div className="text-sm text-muted-foreground">Questions</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">5</div>
                  <div className="text-sm text-muted-foreground">Minutes</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">Mixed</div>
                  <div className="text-sm text-muted-foreground">Difficulty</div>
                </div>
              </div>

              <Button 
                onClick={startTest}
                size="lg" 
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                <Play className="mr-2 h-5 w-5" />
                Start Test
              </Button>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  if (showResult) {
    return (
      <div className="min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="p-8 text-center">
              <Trophy className="h-16 w-16 mx-auto mb-4 text-yellow-500" />
              <h1 className="text-3xl font-bold mb-4">Test Complete!</h1>
              
              <div className="mb-8">
                <div className="text-6xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {testResult?.score}%
                </div>
                <Badge className={`text-lg py-2 px-4 ${
                  testResult?.grade === 'A+' || testResult?.grade === 'A' ? 'bg-green-500' :
                  testResult?.grade === 'B' || testResult?.grade === 'C' ? 'bg-yellow-500' : 'bg-red-500'
                }`}>
                  Grade: {testResult?.grade}
                </Badge>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-xl font-bold">{testResult?.totalQuestions}</div>
                  <div className="text-sm text-muted-foreground">Total Questions</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold">{formatTime(testResult?.timeSpent || 0)}</div>
                  <div className="text-sm text-muted-foreground">Time Spent</div>
                </div>
              </div>

              <p className="text-muted-foreground mb-8">{testResult?.feedback}</p>

              <div className="flex space-x-4 justify-center">
                <Button 
                  onClick={restartTest}
                  variant="outline"
                >
                  <RotateCcw className="mr-2 h-4 w-4" />
                  Try Again
                </Button>
                <Button asChild>
                  <a href="/skills">
                    <Star className="mr-2 h-4 w-4" />
                    View Skills
                  </a>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  const currentQ = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <Badge variant="outline">
                Question {currentQuestion + 1} of {questions.length}
              </Badge>
              <Badge variant="outline" className={getDifficultyColor(currentQ.difficulty)}>
                {currentQ.difficulty}
              </Badge>
            </div>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Clock className="h-4 w-4" />
              {formatTime(timeLeft)}
            </div>
          </div>

          <Progress value={progress} className="mb-8" />

          <Card className="p-8">
            <div className="mb-6">
              <Badge variant="secondary" className="mb-4">{currentQ.category}</Badge>
              <h2 className="text-xl font-semibold mb-6">{currentQ.question}</h2>
            </div>

            <RadioGroup value={selectedAnswer} onValueChange={handleAnswerSelect}>
              <div className="space-y-4">
                {currentQ.options.map((option, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                    <Label htmlFor={`option-${index}`} className="cursor-pointer flex-1 p-3 rounded border hover:bg-muted/50">
                      {option}
                    </Label>
                  </div>
                ))}
              </div>
            </RadioGroup>

            <div className="mt-8 flex justify-between">
              <div className="text-sm text-muted-foreground">
                Progress: {currentQuestion + 1}/{questions.length}
              </div>
              <Button 
                onClick={nextQuestion}
                disabled={!selectedAnswer}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                {currentQuestion === questions.length - 1 ? 'Finish Test' : 'Next Question'}
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SkillTest;