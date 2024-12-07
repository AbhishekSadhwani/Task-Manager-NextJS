'use client';

import { Task } from '@/Store/taskStore';
import { format } from 'date-fns';
import { Trash2 } from 'lucide-react';

type TaskItemProps = {
  task: Task;
  onToggle: (id: string) => void;
  onTrashClick:(id:string) => void;
};

export function TaskItem({ task, onToggle, onTrashClick }: TaskItemProps) {
  return (
    <div className="bg-white flex items-start gap-4 py-4 px-4  group rounded-xl border-b">
        <input 
            className='w-4 h-4 accent-black'
            onChange={() => onToggle(task.id)} 
            type='checkbox' 
        />
        <div className="flex-1 space-y-1">
            <p className={`text-base font-medium leading-none ${task.completed && "line-through text-muted-foreground"}`}>
            {task.title}
            </p>
            {task.description && (
            <p className="text-sm text-muted-foreground">
                {task.description}
            </p>
            )}
            <div className="flex items-center gap-2 text-xs">
            <span className="text-muted-foreground">
                {format(new Date(task.date), 'h:mm a')}
            </span>
            </div>
        </div>
        <Trash2 onClick={() =>onTrashClick(task.id)} className='text-red-800 h-5 w-5' />
    </div>
  );
}