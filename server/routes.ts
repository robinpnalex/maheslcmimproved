import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import path from "path";
import fs from "fs";

export function registerRoutes(
  httpServer: Server,
  app: Express
): Server {
  // Dashboard data (combined endpoint for efficiency)
  app.get("/api/dashboard", async (_req, res) => {
    const [student, attendance, announcements, notices] = await Promise.all([
      storage.getStudent(),
      storage.getAttendance(),
      storage.getAnnouncements(),
      storage.getNotices(),
    ]);
    res.json({ student, attendance, announcements, notices });
  });

  // Individual endpoints
  app.get("/api/student", async (_req, res) => {
    const student = await storage.getStudent();
    res.json(student);
  });

  app.get("/api/attendance", async (_req, res) => {
    const attendance = await storage.getAttendance();
    res.json(attendance);
  });

  app.get("/api/announcements", async (_req, res) => {
    const announcements = await storage.getAnnouncements();
    res.json(announcements);
  });

  app.get("/api/notices", async (_req, res) => {
    const notices = await storage.getNotices();
    res.json(notices);
  });

  app.get("/api/courses", async (_req, res) => {
    const courses = await storage.getCourses();
    res.json(courses);
  });

  app.get("/api/assignments", async (_req, res) => {
    const assignments = await storage.getAssignments();
    res.json(assignments);
  });

  app.get("/api/schedule", async (_req, res) => {
    const schedule = await storage.getSchedule();
    res.json(schedule);
  });

  // Serve student photo from generated assets
  app.get("/api/student-photo", (_req, res) => {
    const photoPath = path.resolve(process.cwd(), "attached_assets/generated_images/college_student_id_photo.png");
    if (fs.existsSync(photoPath)) {
      res.sendFile(photoPath);
    } else {
      res.status(404).send("Photo not found");
    }
  });

  return httpServer;
}
