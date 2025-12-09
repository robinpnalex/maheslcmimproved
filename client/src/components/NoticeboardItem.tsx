import { Pin } from "lucide-react";

interface NoticeboardItemProps {
  title: string;
  message: string;
  date: string;
}

export default function NoticeboardItem({ title, message, date }: NoticeboardItemProps) {
  return (
    <div className="flex gap-3 py-3 border-b border-border last:border-0 hover-elevate rounded-md px-2 -mx-2" data-testid="item-notice">
      <Pin className="h-4 w-4 text-muted-foreground flex-shrink-0 mt-1" />
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2 flex-wrap">
          <h4 className="font-medium text-sm" data-testid="text-notice-title">{title}</h4>
          <span className="text-xs text-muted-foreground flex-shrink-0">{date}</span>
        </div>
        <p className="text-sm text-muted-foreground mt-0.5 truncate" data-testid="text-notice-message">{message}</p>
      </div>
    </div>
  );
}
