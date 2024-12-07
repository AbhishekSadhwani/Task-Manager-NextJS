'use client';

import { addDays, format, startOfWeek } from 'date-fns';
import { chownSync } from 'fs';

type WeekProps = {
  selectedDate: Date;
  onSelectDate: (date: Date) => void;
};

export function Week({ selectedDate, onSelectDate }: WeekProps) {
    const currMonth = new Date().toLocaleString('default',{month:'long'});
    console.log(currMonth);
    const startOfCurrentWeek = startOfWeek(new Date(), { weekStartsOn: 1 });
    const weekDays = Array.from({ length: 7 }, (_, i) => addDays(startOfCurrentWeek, i));

    return (
        <div className='bg-border p-4 bg-white rounded-b-xl'>
            <p className='text-center font-bold mb-5 text-lg'>{currMonth}</p>
            <div className="grid grid-cols-7 gap-px">
                {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => (
                    <div key={i} className="text-center text-sm text-muted-foreground py-2">
                    {day}
                    </div>
                ))}
                {weekDays.map((date) => {
                    const isSelected = format(date, 'yyyy-MM-dd') === format(selectedDate, 'yyyy-MM-dd');
                    const isToday = format(date, 'yyyy-MM-dd') === format(new Date(), 'yyyy-MM-dd');

                    return (
                    <button
                        key={date.toISOString()}
                        onClick={() => onSelectDate(date)}
                        className={`h-14 text-center relative transition-colors hover:bg-accent rounded-md mx-1 ${isSelected && "bg-black text-white hover:bg-primary/90"} ${isToday && !isSelected && "font-bold"}`}
                        >
                        <span className="text-lg">{format(date, 'd')}</span>
                    </button>
                    );
                })}
            </div>
        </div>
    );
}