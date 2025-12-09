import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, CheckCircle2, AlertTriangle, Calendar } from "lucide-react";

interface AssignmentCardProps {
  title: string;
  course: string;
  dueDate: string;
  status: "due_soon" | "submitted" | "missing";
}

export default function AssignmentCard({ title, course, dueDate, status }: AssignmentCardProps) {
  const statusConfig = {
    due_soon: {
      label: "Due Soon",
      icon: Clock,
      badgeClass: "bg-yellow-500/10 text-yellow-700 dark:text-yellow-400 border-yellow-500/30"
    },
    submitted: {
      label: "Submitted",
      icon: CheckCircle2,
      badgeClass: "bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/30"
    },
    missing: {
      label: "Missing",
      icon: AlertTriangle,
      badgeClass: "bg-destructive/10 text-destructive border-destructive/30"
    }
  };

  const config = statusConfig[status];
  const Icon = config.icon;

  return (
    <Card className="p-4 hover-elevate" data-testid={`card-assignment-${status}`}>
      <div className="flex items-start justify-between gap-3 flex-wrap">
        <div className="flex-1 min-w-0">
          <h3 className="font-medium text-sm" data-testid="text-assignment-title">{title}</h3>
          <p className="text-xs text-muted-foreground mt-1">{course}</p>
          <div className="flex items-center gap-1.5 mt-2 text-xs text-muted-foreground">
            <Calendar className="h-3.5 w-3.5" />
            <span>Due: {dueDate}</span>
          </div>
        </div>
        <Badge variant="outline" className={`flex items-center gap-1.5 ${config.badgeClass}`}>
          <Icon className="h-3.5 w-3.5" />
          {config.label}
        </Badge>
      </div>
    </Card>
  );
}
