import StudentIdCard from '../StudentIdCard';
import { studentData } from '@/lib/mockData';

export default function StudentIdCardExample() {
  return (
    <StudentIdCard
      name={studentData.name}
      studentId={studentData.id}
      photo={studentData.photo}
      major={studentData.major}
      semester={studentData.semester}
    />
  );
}
