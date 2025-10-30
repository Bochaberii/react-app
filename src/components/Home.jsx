import React from 'react';
import TaskManager from './TaskManager';
import ApiData from './ApiData';

const Home = () => {
  return (
    <div className="py-8">
      <div className="max-w-4xl mx-auto px-4">
        <TaskManager />
        <ApiData />
      </div>
    </div>
  );
};

export default Home;