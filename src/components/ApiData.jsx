import React, { useState, useEffect } from 'react';
import Card from './Card';
import Button from './Button';

/**
 * Component for displaying curated programming-related content
 */
const ApiData = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  // Curated programming-related posts (instead of fetching from API)
  const programmingPosts = [
    {
      id: 1,
      title: "Getting Started with React Hooks",
      body: "React Hooks allow you to use state and other React features without writing a class. Learn useState, useEffect, and custom hooks to build powerful components.",
      category: "React",
      difficulty: "Beginner",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "CSS Grid vs Flexbox: When to Use What",
      body: "Understanding the differences between CSS Grid and Flexbox helps you choose the right layout method. Grid excels at 2D layouts while Flexbox is perfect for 1D layouts.",
      category: "CSS",
      difficulty: "Intermediate",
      readTime: "7 min read"
    },
    {
      id: 3,
      title: "JavaScript ES6+ Features You Should Know",
      body: "Modern JavaScript includes powerful features like arrow functions, destructuring, template literals, and async/await that make your code cleaner and more efficient.",
      category: "JavaScript",
      difficulty: "Intermediate",
      readTime: "8 min read"
    },
    {
      id: 4,
      title: "Building Responsive Websites with Tailwind CSS",
      body: "Tailwind CSS provides utility-first classes that make responsive design simple. Learn how to create mobile-first designs with breakpoint prefixes.",
      category: "Tailwind",
      difficulty: "Beginner",
      readTime: "6 min read"
    }
  ];

  // Simulate API loading
  const fetchPosts = async () => {
    setLoading(true);
    setError(null);
    try {
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      setPosts(programmingPosts);
    } catch (err) {
      setError('Failed to load programming articles');
    } finally {
      setLoading(false);
    }
  };

  // Load posts on component mount
  useEffect(() => {
    fetchPosts();
  }, []);

  // Filter posts based on search term
  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.body.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle search
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // Get difficulty color
  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Beginner':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'Intermediate':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'Advanced':
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  if (loading) {
    return (
      <Card title="Programming Articles">
        <div className="flex items-center justify-center py-12">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          <span className="ml-3 text-gray-600 dark:text-gray-400">Loading articles...</span>
        </div>
      </Card>
    );
  }

  if (error) {
    return (
      <Card title="Programming Articles">
        <div className="text-center py-8">
          <p className="text-red-600 dark:text-red-400 mb-4">Error: {error}</p>
          <Button onClick={fetchPosts} variant="primary">
            Retry
          </Button>
        </div>
      </Card>
    );
  }

  return (
    <Card title="Latest Programming Articles">
      {/* Search Input */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search articles by title, content, or category..."
          value={searchTerm}
          onChange={handleSearch}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100 dark:placeholder-gray-400"
        />
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {filteredPosts.length === 0 ? (
          <div className="col-span-full text-center py-8">
            <p className="text-gray-500 dark:text-gray-400">
              No articles found matching your search.
            </p>
          </div>
        ) : (
          filteredPosts.map((post) => (
            <article
              key={post.id}
              className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg transition-all duration-200 bg-white dark:bg-gray-800"
            >
              {/* Category and Difficulty Tags */}
              <div className="flex items-center gap-2 mb-3">
                <span className="px-3 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full dark:bg-blue-900 dark:text-blue-200">
                  {post.category}
                </span>
                <span className={`px-3 py-1 text-xs font-medium rounded-full ${getDifficultyColor(post.difficulty)}`}>
                  {post.difficulty}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100 leading-tight">
                {post.title}
              </h3>

              {/* Content */}
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
                {post.body}
              </p>

              {/* Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                <span className="text-xs text-gray-500 dark:text-gray-500">
                  📖 {post.readTime}
                </span>
                <Button variant="primary" size="sm">
                  Read More
                </Button>
              </div>
            </article>
          ))
        )}
      </div>

      {/* Stats */}
      <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
        <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
          📚 Showing {filteredPosts.length} of {posts.length} programming articles
        </p>
      </div>
    </Card>
  );
};

export default ApiData;