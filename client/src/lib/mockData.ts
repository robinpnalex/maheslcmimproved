// todo: remove mock functionality - Replace with real API data
import studentPhoto from '@assets/generated_images/college_student_id_photo.png';

export const studentData = {
  id: "STU-2024-78432",
  name: "Sarah Mitchell",
  photo: studentPhoto,
  major: "Computer Science",
  semester: "Fall 2024 - Semester 5",
  gpa: 3.78,
  email: "s.mitchell@university.edu"
};

export const announcements = [
  {
    id: 1,
    title: "Campus Closed - Weather Alert",
    message: "Due to severe weather conditions, all classes are cancelled on Friday, December 13th.",
    priority: "high" as const,
    date: "Dec 9, 2024"
  },
  {
    id: 2,
    title: "Spring Semester Registration Open",
    message: "Registration for Spring 2025 courses is now open. Priority registration ends December 20th.",
    priority: "high" as const,
    date: "Dec 8, 2024"
  },
  {
    id: 3,
    title: "Final Exam Schedule Posted",
    message: "The final examination schedule has been published. Check your student portal for your exam times.",
    priority: "medium" as const,
    date: "Dec 7, 2024"
  }
];

export const notices = [
  { id: 1, title: "Library Hours Extended", message: "Library will remain open until midnight during finals week.", date: "Dec 9" },
  { id: 2, title: "Chess Club Meeting", message: "Weekly meeting moved to Thursday 5PM in Room 204.", date: "Dec 9" },
  { id: 3, title: "Career Fair Registration", message: "Sign up for the Spring Career Fair by January 15th.", date: "Dec 8" },
  { id: 4, title: "Study Group Formation", message: "Looking for study partners for Data Structures final.", date: "Dec 8" },
  { id: 5, title: "Parking Lot B Closure", message: "Lot B will be closed Dec 14-16 for maintenance.", date: "Dec 7" }
];

export const courses = [
  { id: 1, name: "Data Structures & Algorithms", instructor: "Dr. James Chen", credits: 4, grade: "A", code: "CS301" },
  { id: 2, name: "Database Systems", instructor: "Prof. Maria Santos", credits: 3, grade: "A-", code: "CS340" },
  { id: 3, name: "Computer Networks", instructor: "Dr. Robert Kim", credits: 3, grade: "B+", code: "CS350" },
  { id: 4, name: "Software Engineering", instructor: "Prof. Lisa Park", credits: 4, grade: "A", code: "CS380" },
  { id: 5, name: "Linear Algebra", instructor: "Dr. Michael Brown", credits: 3, grade: "B+", code: "MATH240" }
];

export const assignments = [
  { id: 1, title: "Algorithm Analysis Report", course: "CS301", dueDate: "Dec 10, 2024", status: "due_soon" as const },
  { id: 2, title: "Database Design Project", course: "CS340", dueDate: "Dec 12, 2024", status: "due_soon" as const },
  { id: 3, title: "Network Protocol Lab", course: "CS350", dueDate: "Dec 8, 2024", status: "missing" as const },
  { id: 4, title: "Sprint 3 Deliverables", course: "CS380", dueDate: "Dec 5, 2024", status: "submitted" as const },
  { id: 5, title: "Matrix Operations Worksheet", course: "MATH240", dueDate: "Dec 3, 2024", status: "submitted" as const },
  { id: 6, title: "Sorting Algorithm Implementation", course: "CS301", dueDate: "Nov 28, 2024", status: "submitted" as const }
];

export const schedule = [
  { id: 1, time: "8:00 AM - 9:30 AM", course: "Data Structures & Algorithms", room: "Science Hall 301", code: "CS301" },
  { id: 2, time: "10:00 AM - 11:30 AM", course: "Database Systems", room: "Tech Center 205", code: "CS340" },
  { id: 3, time: "1:00 PM - 2:30 PM", course: "Computer Networks", room: "Engineering 410", code: "CS350" },
  { id: 4, time: "3:00 PM - 4:30 PM", course: "Software Engineering", room: "Tech Center 101", code: "CS380" }
];
