import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Play, 
  RotateCcw, 
  Code, 
  Brain,
  TrendingUp,
  GitBranch,
  Shuffle,
  Timer
} from 'lucide-react';

const CodingPlayground = () => {
  const [sortingArray, setSortingArray] = useState<number[]>([64, 34, 25, 12, 22, 11, 90]);
  const [sortingStep, setSortingStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [selectedAlgorithm, setSelectedAlgorithm] = useState('bubble');

  const algorithms = [
    { id: 'bubble', name: 'Bubble Sort', complexity: 'O(n²)' },
    { id: 'quick', name: 'Quick Sort', complexity: 'O(n log n)' },
    { id: 'merge', name: 'Merge Sort', complexity: 'O(n log n)' },
    { id: 'insertion', name: 'Insertion Sort', complexity: 'O(n²)' }
  ];

  const pathfindingGrid = Array(10).fill(null).map(() => Array(10).fill(0));
  const [grid, setGrid] = useState(pathfindingGrid);
  const [startNode, setStartNode] = useState({ row: 0, col: 0 });
  const [endNode, setEndNode] = useState({ row: 9, col: 9 });

  const generateRandomArray = () => {
    const newArray = Array.from({ length: 8 }, () => Math.floor(Math.random() * 100) + 1);
    setSortingArray(newArray);
    setSortingStep(0);
  };

  const bubbleSort = async () => {
    setIsAnimating(true);
    const arr = [...sortingArray];
    const n = arr.length;
    
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          setSortingArray([...arr]);
          await new Promise(resolve => setTimeout(resolve, 500));
        }
      }
    }
    setIsAnimating(false);
  };

  const quickSort = async (arr: number[], low = 0, high = arr.length - 1) => {
    if (low < high) {
      const pi = await partition(arr, low, high);
      await quickSort(arr, low, pi - 1);
      await quickSort(arr, pi + 1, high);
    }
  };

  const partition = async (arr: number[], low: number, high: number) => {
    const pivot = arr[high];
    let i = low - 1;

    for (let j = low; j < high; j++) {
      if (arr[j] < pivot) {
        i++;
        [arr[i], arr[j]] = [arr[j], arr[i]];
        setSortingArray([...arr]);
        await new Promise(resolve => setTimeout(resolve, 300));
      }
    }
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    setSortingArray([...arr]);
    await new Promise(resolve => setTimeout(resolve, 300));
    return i + 1;
  };

  const runSorting = async () => {
    if (selectedAlgorithm === 'bubble') {
      await bubbleSort();
    } else if (selectedAlgorithm === 'quick') {
      setIsAnimating(true);
      const arr = [...sortingArray];
      await quickSort(arr);
      setIsAnimating(false);
    }
  };

  const resetArray = () => {
    setSortingArray([64, 34, 25, 12, 22, 11, 90]);
    setSortingStep(0);
  };

  const codeExamples = {
    bubble: `function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}`,
    quick: `function quickSort(arr, low = 0, high = arr.length - 1) {
  if (low < high) {
    const pi = partition(arr, low, high);
    quickSort(arr, low, pi - 1);
    quickSort(arr, pi + 1, high);
  }
  return arr;
}

function partition(arr, low, high) {
  const pivot = arr[high];
  let i = low - 1;
  
  for (let j = low; j < high; j++) {
    if (arr[j] < pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
  return i + 1;
}`
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Coding Playground
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Interactive algorithm visualizations and programming demonstrations
          </p>
        </section>

        <Tabs defaultValue="sorting" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-12">
            <TabsTrigger value="sorting">Sorting Algorithms</TabsTrigger>
            <TabsTrigger value="pathfinding">Graph Algorithms</TabsTrigger>
            <TabsTrigger value="data-structures">Data Structures</TabsTrigger>
          </TabsList>

          <TabsContent value="sorting" className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Visualization */}
              <Card className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold">Algorithm Visualizer</h3>
                  <div className="flex items-center space-x-2">
                    {algorithms.map((algo) => (
                      <Button
                        key={algo.id}
                        variant={selectedAlgorithm === algo.id ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedAlgorithm(algo.id)}
                      >
                        {algo.name}
                      </Button>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex items-end justify-center space-x-2 h-64 border-b border-muted">
                    {sortingArray.map((value, index) => (
                      <div
                        key={index}
                        className="bg-gradient-to-t from-blue-600 to-purple-600 transition-all duration-300 flex items-end justify-center text-white text-sm font-medium rounded-t"
                        style={{
                          height: `${(value / Math.max(...sortingArray)) * 200}px`,
                          width: '40px'
                        }}
                      >
                        {value}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-center space-x-4">
                  <Button
                    onClick={runSorting}
                    disabled={isAnimating}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  >
                    <Play className="mr-2 h-4 w-4" />
                    {isAnimating ? 'Sorting...' : 'Start Sorting'}
                  </Button>
                  <Button variant="outline" onClick={resetArray}>
                    <RotateCcw className="mr-2 h-4 w-4" />
                    Reset
                  </Button>
                  <Button variant="outline" onClick={generateRandomArray}>
                    <Shuffle className="mr-2 h-4 w-4" />
                    Random
                  </Button>
                </div>

                <div className="mt-4 flex items-center justify-center">
                  <Badge variant="outline">
                    <Timer className="mr-1 h-3 w-3" />
                    Complexity: {algorithms.find(a => a.id === selectedAlgorithm)?.complexity}
                  </Badge>
                </div>
              </Card>

              {/* Code */}
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Code className="mr-2 h-5 w-5" />
                  Implementation
                </h3>
                <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
                  <code>{codeExamples[selectedAlgorithm as keyof typeof codeExamples]}</code>
                </pre>
                
                <div className="mt-6 space-y-3">
                  <h4 className="font-semibold">Algorithm Details:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {selectedAlgorithm === 'bubble' && (
                      <>
                        <li>• Compares adjacent elements and swaps if needed</li>
                        <li>• Simple but inefficient for large datasets</li>
                        <li>• Best case: O(n), Worst case: O(n²)</li>
                      </>
                    )}
                    {selectedAlgorithm === 'quick' && (
                      <>
                        <li>• Divide-and-conquer algorithm</li>
                        <li>• Picks a pivot and partitions around it</li>
                        <li>• Average case: O(n log n), Worst case: O(n²)</li>
                      </>
                    )}
                  </ul>
                </div>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="pathfinding" className="space-y-8">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-6 flex items-center">
                <GitBranch className="mr-2 h-5 w-5" />
                Pathfinding Algorithms
              </h3>
              <div className="text-center py-12">
                <Brain className="h-24 w-24 mx-auto mb-4 text-muted-foreground opacity-50" />
                <h4 className="text-lg font-semibold mb-2">Coming Soon</h4>
                <p className="text-muted-foreground">
                  Interactive visualization of DFS, BFS, Dijkstra's, and A* algorithms
                </p>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="data-structures" className="space-y-8">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-6 flex items-center">
                <TrendingUp className="mr-2 h-5 w-5" />
                Data Structure Visualizations
              </h3>
              <div className="text-center py-12">
                <Code className="h-24 w-24 mx-auto mb-4 text-muted-foreground opacity-50" />
                <h4 className="text-lg font-semibold mb-2">Coming Soon</h4>
                <p className="text-muted-foreground">
                  Interactive demonstrations of stacks, queues, trees, and graphs
                </p>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default CodingPlayground;