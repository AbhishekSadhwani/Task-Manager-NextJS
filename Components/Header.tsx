'use client';
import { Calendar } from 'lucide-react';
import { format } from 'date-fns';

export function Header() {
  return (
    <div className="p-6 border-b bg-white rounded-t-xl">
      <div className="flex items-center gap-4">
        <Calendar className="h-5 w-5 text-primary" />
        <div className='flex flex-col gap-1'>
          <h1 className="text-xl font-semibold">Today</h1>
          <div className="text-sm text-gray-600 text-muted-foreground">
              {format(new Date(), 'dd MMMM yyyy')}
          </div>
        </div>
      </div>
    </div>
  );
}