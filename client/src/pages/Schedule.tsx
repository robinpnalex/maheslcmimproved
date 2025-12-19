import { Skeleton } from "@/components/ui/skeleton";
import ScheduleTimeline from "@/components/ScheduleTimeline";
import { useQuery } from "@tanstack/react-query";
import type { ScheduleItem } from "@shared/schema";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

export default function Schedule() {
  const currentDay = new Date().toLocaleDateString('en-US', { weekday: 'long' });
  const [selectedDay, setSelectedDay] = useState(
    ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"].includes(currentDay)
      ? currentDay
      : "Monday"
  );

  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

  const { data: schedule, isLoading } = useQuery<ScheduleItem[]>({
    queryKey: ['/api/schedule'],
  });

  if (isLoading) {
    return (
      <div className="p-4 md:p-6 space-y-6">
        <div>
          <h1 className="text-2xl font-semibold mb-1">Schedule</h1>
          <p className="text-sm text-muted-foreground">Weekly Timetable</p>
        </div>
        <Skeleton className="h-64 w-full" />
      </div>
    );
  }

  if (!schedule) return null;

  return (
    <div className="p-4 md:p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-semibold mb-1">Schedule</h1>
        <p className="text-sm text-muted-foreground">Weekly Timetable</p>
      </div>

      <Tabs defaultValue={selectedDay} onValueChange={setSelectedDay} className="w-full">
        <TabsList className="w-full justify-start overflow-x-auto">
          {days.map((day) => (
            <TabsTrigger key={day} value={day} className="flex-1 min-w-[100px]">
              {day}
            </TabsTrigger>
          ))}
        </TabsList>

        {days.map((day) => {
          const daysClasses = schedule.filter(item => item.day === day);
          return (
            <TabsContent key={day} value={day} className="mt-4">
              {daysClasses.length > 0 ? (
                <ScheduleTimeline items={daysClasses} date={day} />
              ) : (
                <div className="flex flex-col items-center justify-center p-8 text-center border rounded-lg bg-card text-card-foreground">
                  <p className="text-muted-foreground">No classes scheduled for {day}</p>
                </div>
              )}
            </TabsContent>
          );
        })}
      </Tabs>
    </div>
  );
}
