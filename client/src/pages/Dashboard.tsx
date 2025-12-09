import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import StudentIdCard from "@/components/StudentIdCard";
import AnnouncementCard from "@/components/AnnouncementCard";
import NoticeboardItem from "@/components/NoticeboardItem";
import AttendanceCard from "@/components/AttendanceCard";
import { studentData, announcements, notices, attendancePercentage } from "@/lib/mockData";
import { Megaphone, Pin } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="p-4 md:p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-semibold mb-1">Dashboard</h1>
        <p className="text-sm text-muted-foreground">Welcome to your student portal</p>
      </div>

      <div className="grid gap-4 md:grid-cols-[1fr_auto]">
        <StudentIdCard
          name={studentData.name}
          studentId={studentData.id}
          photo={studentData.photo}
          major={studentData.major}
          semester={studentData.semester}
        />
        <AttendanceCard percentage={attendancePercentage} />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center gap-2">
              <Megaphone className="h-5 w-5 text-primary" />
              Important Announcements
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {announcements.map((announcement) => (
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
              {notices.map((notice) => (
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
