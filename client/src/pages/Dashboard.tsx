import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Skeleton } from "@/components/ui/skeleton";
import StudentIdCard from "@/components/StudentIdCard";
import AnnouncementCard from "@/components/AnnouncementCard";
import NoticeboardItem from "@/components/NoticeboardItem";
import AttendanceSection from "@/components/AttendanceSection";
import { useQuery } from "@tanstack/react-query";
import { Megaphone, Pin } from "lucide-react";
import type { Student, Announcement, Notice, SubjectAttendance } from "@shared/schema";

interface DashboardData {
  student: Student;
  announcements: Announcement[];
  notices: Notice[];
  attendance: SubjectAttendance[];
}

export default function Dashboard() {
  const { data, isLoading } = useQuery<DashboardData>({
    queryKey: ['/api/dashboard'],
  });

  if (isLoading) {
    return (
      <div className="p-4 md:p-6 space-y-6">
        <div>
          <h1 className="text-2xl font-semibold mb-1">Dashboard</h1>
          <p className="text-sm text-muted-foreground">Welcome to your student portal</p>
        </div>
        <Skeleton className="h-40 w-full" />
        <Skeleton className="h-32 w-full" />
        <div className="grid gap-6 lg:grid-cols-2">
          <Skeleton className="h-64" />
          <Skeleton className="h-64" />
        </div>
      </div>
    );
  }

  if (!data) return null;

  return (
    <div className="p-4 md:p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-semibold mb-1">Dashboard</h1>
        <p className="text-sm text-muted-foreground">Welcome to your student portal</p>
      </div>

      <StudentIdCard
        name={data.student.name}
        studentId={data.student.id}
        photo={data.student.photo}
        major={data.student.major}
        semester={data.student.semester}
      />

      <AttendanceSection subjects={data.attendance} />

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center gap-2">
              <Megaphone className="h-5 w-5 text-primary" />
              Important Announcements
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {data.announcements.map((announcement) => (
              <AnnouncementCard
                key={announcement.id}
                title={announcement.title}
                message={announcement.message}
                priority={announcement.priority}
                date={announcement.date}
              />
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center gap-2">
              <Pin className="h-5 w-5 text-primary" />
              Noticeboard
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[280px] pr-4">
              {data.notices.map((notice) => (
                <NoticeboardItem
                  key={notice.id}
                  title={notice.title}
                  message={notice.message}
                  date={notice.date}
                />
              ))}
            </ScrollArea>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
