import { Card } from "@/components/ui/card";
import { UserCheck } from "lucide-react";

interface AttendanceCardProps {
  percentage: number;
}

export default function AttendanceCard({ percentage }: AttendanceCardProps) {
  const getStatusConfig = (value: number) => {
    if (value < 75) {
      return {
        bg: "bg-destructive/10 border-destructive/30",
        textColor: "text-destructive",
        label: "Detained",
        labelBg: "bg-destructive/20 text-destructive"
      };
    }
    if (value < 85) {
      return {
        bg: "bg-yellow-500/10 border-yellow-500/30 dark:bg-yellow-600/10 dark:border-yellow-600/30",
        textColor: "text-yellow-600 dark:text-yellow-500",
        label: "Warning",
        labelBg: "bg-yellow-500/20 text-yellow-700 dark:text-yellow-400"
      };
    }
    return {
      bg: "bg-green-500/10 border-green-500/30 dark:bg-green-600/10 dark:border-green-600/30",
      textColor: "text-green-600 dark:text-green-500",
      label: "Safe",
      labelBg: "bg-green-500/20 text-green-700 dark:text-green-400"
    };
  };

  const config = getStatusConfig(percentage);

  return (
    <Card className={`p-4 ${config.bg}`} data-testid="card-attendance">
      <div className="flex flex-col items-center text-center space-y-2">
        <div className="flex items-center gap-2">
          <UserCheck className={`h-5 w-5 ${config.textColor}`} />
          <span className="text-xs text-muted-foreground uppercase tracking-wider">Attendance Overview</span>
        </div>
        <p className={`text-4xl font-bold ${config.textColor}`} data-testid="text-attendance-percentage">
          {percentage}%
        </p>
        <span className={`text-xs font-medium px-2 py-1 rounded-md ${config.labelBg}`}>
          {config.label}
        </span>
      </div>
    </Card>
  );
}
