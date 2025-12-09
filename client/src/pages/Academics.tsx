import { Skeleton } from "@/components/ui/skeleton";
import GradesTable from "@/components/GradesTable";
import { useQuery } from "@tanstack/react-query";
import type { Course, Student } from "@shared/schema";

export default function Academics() {
  const { data: courses, isLoading: coursesLoading } = useQuery<Course[]>({
    queryKey: ['/api/courses'],
  });

  const { data: student, isLoading: studentLoading } = useQuery<Student>({
    queryKey: ['/api/student'],
  });

  const isLoading = coursesLoading || studentLoading;

  if (isLoading) {
    return (
      <div className="p-4 md:p-6 space-y-6">
        <div>
          <h1 className="text-2xl font-semibold mb-1">Academics</h1>
          <p className="text-sm text-muted-foreground">View your grades and academic progress</p>
        </div>
        <Skeleton className="h-64 w-full" />
      </div>
    );
  }

  if (!courses || !student) return null;

  return (
    <div className="p-4 md:p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-semibold mb-1">Academics</h1>
        <p className="text-sm text-muted-foreground">View your grades and academic progress</p>
      </div>

      <GradesTable courses={courses} gpa={student.gpa} />
    </div>
  );
}
