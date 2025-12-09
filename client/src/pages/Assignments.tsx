import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import AssignmentCard from "@/components/AssignmentCard";
import { useQuery } from "@tanstack/react-query";
import { FileText } from "lucide-react";
import type { Assignment } from "@shared/schema";

type FilterType = "all" | "pending" | "completed";

export default function Assignments() {
  const [filter, setFilter] = useState<FilterType>("all");

  const { data: assignments, isLoading } = useQuery<Assignment[]>({
    queryKey: ['/api/assignments'],
  });

  if (isLoading) {
    return (
      <div className="p-4 md:p-6 space-y-6">
        <div>
          <h1 className="text-2xl font-semibold mb-1">Assignments</h1>
          <p className="text-sm text-muted-foreground">Track your coursework and submissions</p>
        </div>
        <Skeleton className="h-96 w-full" />
      </div>
    );
  }

  if (!assignments) return null;

  const filteredAssignments = assignments.filter((assignment) => {
    if (filter === "all") return true;
    if (filter === "pending") return assignment.status !== "submitted";
    if (filter === "completed") return assignment.status === "submitted";
    return true;
  });

  const pendingCount = assignments.filter(a => a.status !== "submitted").length;
  const completedCount = assignments.filter(a => a.status === "submitted").length;

  return (
    <div className="p-4 md:p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-semibold mb-1">Assignments</h1>
        <p className="text-sm text-muted-foreground">Track your coursework and submissions</p>
      </div>

      <Card>
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <CardTitle className="text-lg flex items-center gap-2">
              <FileText className="h-5 w-5 text-primary" />
              All Assignments
            </CardTitle>
            <div className="flex gap-2 flex-wrap">
              <Button
                size="sm"
                variant={filter === "all" ? "default" : "outline"}
                onClick={() => setFilter("all")}
                data-testid="button-filter-all"
              >
                All ({assignments.length})
              </Button>
              <Button
                size="sm"
                variant={filter === "pending" ? "default" : "outline"}
                onClick={() => setFilter("pending")}
                data-testid="button-filter-pending"
              >
                Pending ({pendingCount})
              </Button>
              <Button
                size="sm"
                variant={filter === "completed" ? "default" : "outline"}
                onClick={() => setFilter("completed")}
                data-testid="button-filter-completed"
              >
                Completed ({completedCount})
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-3">
          {filteredAssignments.length === 0 ? (
            <p className="text-center text-muted-foreground py-8">No assignments found</p>
          ) : (
            filteredAssignments.map((assignment) => (
              <AssignmentCard
                key={assignment.id}
                title={assignment.title}
                course={assignment.course}
                dueDate={assignment.dueDate}
                status={assignment.status}
              />
            ))
          )}
        </CardContent>
      </Card>
    </div>
  );
}
