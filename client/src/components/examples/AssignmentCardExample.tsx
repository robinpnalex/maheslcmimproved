import AssignmentCard from '../AssignmentCard';

export default function AssignmentCardExample() {
  return (
    <div className="space-y-3">
      <AssignmentCard
        title="Algorithm Analysis Report"
        course="CS301 - Data Structures"
        dueDate="Dec 10, 2024"
        status="due_soon"
      />
      <AssignmentCard
        title="Sprint 3 Deliverables"
        course="CS380 - Software Engineering"
        dueDate="Dec 5, 2024"
        status="submitted"
      />
      <AssignmentCard
        title="Network Protocol Lab"
        course="CS350 - Computer Networks"
        dueDate="Dec 8, 2024"
        status="missing"
      />
    </div>
  );
}
