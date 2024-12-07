import { create } from 'zustand';

export type Task = {
    id: string;
    title: string;
    description: string;
    completed: boolean;
    date: Date; // ISO string for the task date
  };
  
type TaskStore = {
    tasks: Task[];
    addTask: (task:Task) => void;
    toggleTask: (id: string) => void;
    deleteTask: (id: string) => void;
    setTasks: (tasks: Task[]) => void;
};
  
export const useTaskStore = create<TaskStore>((set) => ({
    tasks: [],
    addTask: (task) => {
        set((state) => ({
        tasks: [...state.tasks, task],
        }));
    },
    toggleTask: (id) => {
        set((state) => ({
        tasks: state.tasks.map((task) =>
            task.id === id ? { ...task, completed: !task.completed } : task
        ),
        }));
    },
    deleteTask: (id) => {
        set((state) => ({
        tasks: state.tasks.filter((task) => task.id !== id),
        }));
    },
    setTasks: (tasks) => set({ tasks }),
}));

