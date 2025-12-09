import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, MapPin } from "lucide-react";

interface ScheduleItem {
  id: number;
  time: string;
  course: string;
  room: string;
  code: string;
}

interface ScheduleTimelineProps {
  items: ScheduleItem[];
  date?: string;
}

export default function ScheduleTimeline({ items, date = "Today" }: ScheduleTimelineProps) {
  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-lg flex items-center gap-2">
          <Clock className="h-5 w-5 text-primary" />
          {date}'s Schedule
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-1">
        {items.map((item, index) => (
          <div
            key={item.id}
            className="flex gap-4 py-3 border-l-2 border-primary/30 pl-4 relative hover-elevate rounded-r-md"
            data-testid={`item-schedule-${item.id}`}
          >
            <div className="absolute -left-1.5 top-4 h-3 w-3 rounded-full bg-primary" />
            <div className="flex-1">
              <div className="flex items-start justify-between gap-2 flex-wrap">
                <div>
                  <p className="font-medium text-sm">{item.course}</p>
                  <p className="text-xs text-muted-foreground">{item.code}</p>
                </div>
                <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-md">
                  {item.time}
                </span>
              </div>
              <div className="flex items-center gap-1.5 mt-2 text-xs text-muted-foreground">
                <MapPin className="h-3.5 w-3.5" />
                <span>{item.room}</span>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
