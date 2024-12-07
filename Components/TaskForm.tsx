'use client';

import { useTaskStore } from '@/Store/taskStore';
import { X } from "lucide-react";
import { FormEvent, useState } from 'react';


type TaskFormProps = {
    selectedDate: Date;
    onOpenChange?: () => void;
  };
  
export function TaskForm({ selectedDate, onOpenChange }: TaskFormProps) {
    const { tasks, addTask, toggleTask, deleteTask } = useTaskStore();
    const [taskTitle, setTaskTitle] = useState('');
    const [taskDescription, setTaskDescription] = useState('');

    const handleAddTask = (e: FormEvent) => {
        e.preventDefault();
        const generateId = Math.floor(Math.random()*1000);

        if (taskTitle.trim() && taskDescription.trim()) {
        const newTask = {
            id: generateId.toString(),
            title: taskTitle,
            description: taskDescription,
            completed: false,
            date: selectedDate,
        };
        addTask(newTask);
        setTaskTitle('');
        setTaskDescription('');
        }
    };

    return (
        <div className='w-full h-full fixed top-0 left-0 bg-black bg-opacity-70'>
            <div className="mt-5 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-modal md:h-full md:inset-0">
                <div className='relative p-4 w-full max-w-xl h-full md:h-auto overflow-y-auto'>
                    <div className='bg-white flex flex-col p-5 rounded-xl'>
                        <div className="flex justify-between"> 
                            <h1 className='text-xl mb-5 font-medium'>Add New Task</h1>
                            <X className="h-6 w-6 cursor-pointer" onClick={onOpenChange} />
                        </div>
                        <form onSubmit={handleAddTask} className='flex flex-col gap-5' action="">
                            <input 
                                onChange={(e) => setTaskTitle(e.target.value)}
                                className='border-2 text-lg text-gray-700 p-2 rounded-lg' 
                                type="text" 
                                name="" 
                                value={taskTitle} 
                                placeholder='Task Title'
                            />
                            <textarea 
                                onChange={(e) => setTaskDescription(e.target.value)}
                                className='border-2 text-lg text-gray-700 p-2 rounded-lg resize-none' 
                                name="taskDescription" 
                                value={taskDescription} 
                                placeholder='Description'
                            ></textarea>
                            <div className='flex gap-2 items-center'>
                                <div className='border-2 rounded-lg p-2 flex-1'>
                                    <select className='w-full' name="Priority" id="">
                                        <option value="">Medium Priorty</option>
                                        <option value="">High Priority</option>
                                        <option value="">Low Priority</option>
                                    </select>
                                </div>
                                <div className='flex-1 border-2 rounded-lg text-center p-1.5'>
                                    <span className='text-lg text-gray-700'></span>
                                </div>
                            </div>    
                            <button className='w-full bg-black text-white p-2 rounded-lg'>Add Task</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}