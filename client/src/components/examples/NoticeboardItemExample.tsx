import NoticeboardItem from '../NoticeboardItem';
import { notices } from '@/lib/mockData';

export default function NoticeboardItemExample() {
  return (
    <div>
      {notices.slice(0, 3).map(notice => (
        <NoticeboardItem
          key={notice.id}
          title={notice.title}
          message={notice.message}
          date={notice.date}
        />
      ))}
    </div>
  );
}
