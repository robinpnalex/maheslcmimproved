import { Card } from "@/components/ui/card";
import { AlertTriangle, Info, AlertCircle } from "lucide-react";

interface AnnouncementCardProps {
  title: string;
  message: string;
  priority: "high" | "medium" | "low";
  date: string;
}

export default function AnnouncementCard({ title, message, priority, date }: AnnouncementCardProps) {
  const priorityStyles = {
    high: {
      bg: "bg-destructive/10 border-destructive/30",
      icon: AlertTriangle,
      iconColor: "text-destructive"
    },
    medium: {
      bg: "bg-yellow-500/10 border-yellow-500/30 dark:bg-yellow-600/10 dark:border-yellow-600/30",
      icon: AlertCircle,
      iconColor: "text-yellow-600 dark:text-yellow-500"
    },
    low: {
      bg: "bg-primary/5 border-primary/20",
      icon: Info,
      iconColor: "text-primary"
    }
  };

  const style = priorityStyles[priority];
  const Icon = style.icon;

  return (
    <Card className={`p-4 ${style.bg}`} data-testid={`card-announcement-${priority}`}>
      <div className="flex gap-3">
        <Icon className={`h-5 w-5 ${style.iconColor} flex-shrink-0 mt-0.5`} />
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2 flex-wrap">
            <h3 className="font-semibold text-sm" data-testid="text-announcement-title">{title}</h3>
            <span className="text-xs text-muted-foreground flex-shrink-0">{date}</span>
          </div>
          <p className="text-sm text-muted-foreground mt-1" data-testid="text-announcement-message">{message}</p>
        </div>
      </div>
    </Card>
  );
}
