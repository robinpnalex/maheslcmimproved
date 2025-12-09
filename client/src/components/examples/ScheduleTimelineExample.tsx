import ScheduleTimeline from '../ScheduleTimeline';
import { schedule } from '@/lib/mockData';

export default function ScheduleTimelineExample() {
  return <ScheduleTimeline items={schedule} />;
}
