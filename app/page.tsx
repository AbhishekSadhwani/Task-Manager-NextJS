'use client'

import { useState } from "react";
import { TaskList } from "@/Components/TaskList";
import { Header } from "@/Components/Header";
import { Week } from "@/Components/Week";
import { TaskForm } from "@/Components/TaskForm";


const Home = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isAddingTask, setIsAddingTask] = useState(false);

  return (
    <div className="min-h-screen max-w-3xl mx-auto px-2 lg:px-8">
      <div className="my-10 shadow-lg">
        <Header />
        <Week selectedDate={selectedDate} onSelectDate={setSelectedDate} />
      </div>
      <div className="my-10 shadow-lg">
        <TaskList 
            selectedDate={selectedDate}
            onAddTask={() => setIsAddingTask(true)}
          />
          {isAddingTask && <TaskForm selectedDate={selectedDate} onOpenChange ={() => setIsAddingTask(!isAddingTask)} />}
      </div>
    </div>
  );
};

export default Home;