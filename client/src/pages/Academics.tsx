import GradesTable from "@/components/GradesTable";
import { courses, studentData } from "@/lib/mockData";

export default function Academics() {
  return (
    <div className="p-4 md:p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-semibold mb-1">Academics</h1>
        <p className="text-sm text-muted-foreground">View your grades and academic progress</p>
      </div>

      <GradesTable courses={courses} gpa={studentData.gpa} />
    </div>
  );
}
