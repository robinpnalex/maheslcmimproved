import { Skeleton } from "@/components/ui/skeleton";
import ScheduleTimeline from "@/components/ScheduleTimeline";
import { useQuery } from "@tanstack/react-query";
import type { ScheduleItem } from "@shared/schema";

export default function Schedule() {
  const today = new Date().toLocaleDateString('en-US', { 
    weekday: 'long', 
    month: 'long', 
    day: 'numeric' 
  });

  const { data: schedule, isLoading } = useQuery<ScheduleItem[]>({
    queryKey: ['/api/schedule'],
  });

  if (isLoading) {
    return (
      <div className="p-4 md:p-6 space-y-6">
        <div>
          <h1 className="text-2xl font-semibold mb-1">Schedule</h1>
          <p className="text-sm text-muted-foreground">{today}</p>
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
        <p className="text-sm text-muted-foreground">{today}</p>
      </div>

      <ScheduleTimeline items={schedule} date="Today" />
    </div>
  );
}
