import AnnouncementCard from '../AnnouncementCard';

export default function AnnouncementCardExample() {
  return (
    <div className="space-y-3">
      <AnnouncementCard
        title="Campus Closed - Weather Alert"
        message="Due to severe weather conditions, all classes are cancelled tomorrow."
        priority="high"
        date="Dec 9, 2024"
      />
      <AnnouncementCard
        title="Spring Registration Open"
        message="Registration for Spring 2025 courses is now open."
        priority="medium"
        date="Dec 8, 2024"
      />
    </div>
  );
}
