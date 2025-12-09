import ScheduleTimeline from "@/components/ScheduleTimeline";
import { schedule } from "@/lib/mockData";

export default function Schedule() {
  const today = new Date().toLocaleDateString('en-US', { 
    weekday: 'long', 
    month: 'long', 
    day: 'numeric' 
  });

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
