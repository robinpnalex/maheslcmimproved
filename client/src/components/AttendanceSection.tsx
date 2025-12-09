import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UserCheck } from "lucide-react";

interface SubjectAttendance {
  id: number;
  name: string;
  code: string;
  classesHeld: number;
  classesAttended: number;
}

interface AttendanceSectionProps {
  subjects: SubjectAttendance[];
}

function getPercentage(attended: number, held: number): number {
  if (held === 0) return 0;
  return Math.round((attended / held) * 100);
}

function getStatusConfig(percentage: number) {
  if (percentage < 75) {
    return {
      border: "border-destructive/50",
      bg: "bg-destructive/5",
      textColor: "text-destructive",
      label: "Low"
    };
  }
  if (percentage < 85) {
    return {
      border: "border-yellow-500/50 dark:border-yellow-600/50",
      bg: "bg-yellow-500/5 dark:bg-yellow-600/5",
      textColor: "text-yellow-600 dark:text-yellow-500",
      label: "Warning"
    };
  }
  return {
    border: "border-green-500/50 dark:border-green-600/50",
    bg: "bg-green-500/5 dark:bg-green-600/5",
    textColor: "text-green-600 dark:text-green-500",
    label: "Good"
  };
}

export default function AttendanceSection({ subjects }: AttendanceSectionProps) {
  const totalHeld = subjects.reduce((sum, s) => sum + s.classesHeld, 0);
  const totalAttended = subjects.reduce((sum, s) => sum + s.classesAttended, 0);
  const overallPercentage = getPercentage(totalAttended, totalHeld);
  const overallConfig = getStatusConfig(overallPercentage);

  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <CardTitle className="text-lg flex items-center gap-2">
            <UserCheck className="h-5 w-5 text-primary" />
            Attendance Overview
          </CardTitle>
          <div className={`flex items-center gap-2 px-3 py-1.5 rounded-md ${overallConfig.bg} border ${overallConfig.border}`}>
            <span className="text-sm text-muted-foreground">Overall:</span>
            <span className={`text-lg font-bold ${overallConfig.textColor}`} data-testid="text-overall-attendance">
              {overallPercentage}%
            </span>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {subjects.map((subject) => {
            const percentage = getPercentage(subject.classesAttended, subject.classesHeld);
            const config = getStatusConfig(percentage);
            
            return (
              <div
                key={subject.id}
                className={`p-3 rounded-md border ${config.border} ${config.bg}`}
                data-testid={`card-attendance-${subject.id}`}
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="min-w-0">
                    <p className="font-medium text-sm truncate">{subject.name}</p>
                    <p className="text-xs text-muted-foreground">{subject.code}</p>
                  </div>
                  <span className={`text-lg font-bold ${config.textColor} flex-shrink-0`}>
                    {percentage}%
                  </span>
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  {subject.classesAttended} / {subject.classesHeld} classes
                </p>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
