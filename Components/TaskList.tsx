'use client';

import { useEffect } from 'react';
import { useTaskStore } from '@/Store/taskStore';
import { isSameDay,format } from 'date-fns';
import { Plus } from 'lucide-react';
import { TaskItem } from './TaskItem';

type TaskListProps = {
  selectedDate: Date;
  onAddTask: () => void;
};

export function TaskList({ selectedDate, onAddTask }: TaskListProps) {
    // accessing tasks and methods from store
    const { tasks, setTasks,toggleTask,deleteTask } = useTaskStore();

    // useEffect for accessing the tasks from localStorage
    useEffect(() => {
        const storedTasks = localStorage.getItem('tasks');
        if (storedTasks) {
            setTasks(JSON.parse(storedTasks));
        }
    }, [setTasks]);

    // useEffect to update the task to localStorage when new tasks are added
    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);


    // filtering task based on dates
    const filteredTasks = tasks.filter(task => 
        isSameDay(new Date(task.date), selectedDate)
    );

    return (
        <div className="bg-white rounded-xl">
            <div className="flex items-center border-b justify-between py-4 px-4">
                <h2 className="text-xl font-semibold">Tasks</h2>
                <button onClick={onAddTask} className="flex items-center rounded p-2 h-8 bg-black text-white">
                <Plus className="h-4 w-4 mr-2" />
                Add Task
                </button>
            </div>
            <div className="flex flex-col gap-4 px-4 py-2 bg-gray-300 rounded-b-xl">
                {filteredTasks.map((task) => (
                    <TaskItem
                        key={task.id}
                        task={task}
                        onToggle={toggleTask}
                        onTrashClick={deleteTask}
                    />
                ))}
            </div>
        </div>
    );
}