import GradesTable from '../GradesTable';
import { courses, studentData } from '@/lib/mockData';

export default function GradesTableExample() {
  return <GradesTable courses={courses} gpa={studentData.gpa} />;
}
