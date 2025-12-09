import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, User, Hash, BookOpen } from "lucide-react";

interface StudentIdCardProps {
  name: string;
  studentId: string;
  photo: string;
  major: string;
  semester: string;
}

export default function StudentIdCard({ name, studentId, photo, major, semester }: StudentIdCardProps) {
  return (
    <Card className="p-4 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
      <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start">
        <div className="relative">
          <Avatar className="h-24 w-24 border-4 border-primary/30">
            <AvatarImage src={photo} alt={name} />
            <AvatarFallback className="text-2xl bg-primary text-primary-foreground">
              {name.split(' ').map(n => n[0]).join('')}
            </AvatarFallback>
          </Avatar>
          <Badge className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground">
            Active
          </Badge>
        </div>
        <div className="flex-1 text-center sm:text-left space-y-2">
          <div className="flex items-center justify-center sm:justify-start gap-2">
            <GraduationCap className="h-5 w-5 text-primary" />
            <span className="text-xs text-muted-foreground uppercase tracking-wider">University Student ID</span>
          </div>
          <h2 className="text-xl font-semibold" data-testid="text-student-name">{name}</h2>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-sm text-muted-foreground">
            <div className="flex items-center justify-center sm:justify-start gap-1.5">
              <Hash className="h-4 w-4" />
              <span data-testid="text-student-id">{studentId}</span>
            </div>
            <div className="flex items-center justify-center sm:justify-start gap-1.5">
              <BookOpen className="h-4 w-4" />
              <span data-testid="text-student-major">{major}</span>
            </div>
          </div>
          <div className="flex items-center justify-center sm:justify-start gap-1.5 text-sm">
            <User className="h-4 w-4 text-muted-foreground" />
            <span className="text-muted-foreground" data-testid="text-student-semester">{semester}</span>
          </div>
        </div>
      </div>
    </Card>
  );
}
