import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { TrendingUp } from "lucide-react";

interface Course {
  id: number;
  name: string;
  instructor: string;
  credits: number;
  grade: string;
  code: string;
}

interface GradesTableProps {
  courses: Course[];
  gpa: number;
}

function getGradeColor(grade: string) {
  if (grade.startsWith('A')) return 'bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/30';
  if (grade.startsWith('B')) return 'bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/30';
  if (grade.startsWith('C')) return 'bg-yellow-500/10 text-yellow-700 dark:text-yellow-400 border-yellow-500/30';
  return 'bg-muted text-muted-foreground';
}

export default function GradesTable({ courses, gpa }: GradesTableProps) {
  const totalCredits = courses.reduce((sum, c) => sum + c.credits, 0);

  return (
    <div className="space-y-6">
      <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
        <CardContent className="p-6">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <div>
              <p className="text-sm text-muted-foreground">Current Semester GPA</p>
              <p className="text-4xl font-bold text-primary" data-testid="text-gpa">{gpa.toFixed(2)}</p>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <TrendingUp className="h-4 w-4 text-green-600 dark:text-green-400" />
              <span>{totalCredits} Total Credits</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg">Course Grades</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Course</TableHead>
                  <TableHead className="hidden sm:table-cell">Instructor</TableHead>
                  <TableHead className="text-center">Credits</TableHead>
                  <TableHead className="text-center">Grade</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {courses.map((course) => (
                  <TableRow key={course.id} data-testid={`row-course-${course.id}`}>
                    <TableCell>
                      <div>
                        <p className="font-medium">{course.name}</p>
                        <p className="text-xs text-muted-foreground">{course.code}</p>
                      </div>
                    </TableCell>
                    <TableCell className="hidden sm:table-cell text-muted-foreground">
                      {course.instructor}
                    </TableCell>
                    <TableCell className="text-center">{course.credits}</TableCell>
                    <TableCell className="text-center">
                      <Badge variant="outline" className={getGradeColor(course.grade)}>
                        {course.grade}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
