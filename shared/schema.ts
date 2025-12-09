import { z } from "zod";

// Student
export const studentSchema = z.object({
  id: z.string(),
  name: z.string(),
  photo: z.string(),
  major: z.string(),
  semester: z.string(),
  gpa: z.number(),
  email: z.string(),
});
export type Student = z.infer<typeof studentSchema>;

// Subject Attendance
export const subjectAttendanceSchema = z.object({
  id: z.number(),
  name: z.string(),
  code: z.string(),
  classesHeld: z.number(),
  classesAttended: z.number(),
});
export type SubjectAttendance = z.infer<typeof subjectAttendanceSchema>;

// Announcement
export const announcementSchema = z.object({
  id: z.number(),
  title: z.string(),
  message: z.string(),
  priority: z.enum(["high", "medium", "low"]),
  date: z.string(),
});
export type Announcement = z.infer<typeof announcementSchema>;

// Notice
export const noticeSchema = z.object({
  id: z.number(),
  title: z.string(),
  message: z.string(),
  date: z.string(),
});
export type Notice = z.infer<typeof noticeSchema>;

// Course
export const courseSchema = z.object({
  id: z.number(),
  name: z.string(),
  instructor: z.string(),
  credits: z.number(),
  grade: z.string(),
  code: z.string(),
});
export type Course = z.infer<typeof courseSchema>;

// Assignment
export const assignmentSchema = z.object({
  id: z.number(),
  title: z.string(),
  course: z.string(),
  dueDate: z.string(),
  status: z.enum(["due_soon", "submitted", "missing"]),
});
export type Assignment = z.infer<typeof assignmentSchema>;

// Schedule Item
export const scheduleItemSchema = z.object({
  id: z.number(),
  time: z.string(),
  course: z.string(),
  room: z.string(),
  code: z.string(),
});
export type ScheduleItem = z.infer<typeof scheduleItemSchema>;

// Dashboard Data (combined response)
export const dashboardDataSchema = z.object({
  student: studentSchema,
  attendance: z.array(subjectAttendanceSchema),
  announcements: z.array(announcementSchema),
  notices: z.array(noticeSchema),
});
export type DashboardData = z.infer<typeof dashboardDataSchema>;
