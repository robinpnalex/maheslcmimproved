import { useQuery } from "@tanstack/react-query";
import { Skeleton } from "@/components/ui/skeleton";
import FeeCard from "@/components/FeeCard";
import type { Fee } from "@shared/schema";

export default function Fees() {
    const { data: fees, isLoading } = useQuery<Fee[]>({
        queryKey: ['/api/fees'],
    });

    if (isLoading) {
        return (
            <div className="p-4 md:p-6 space-y-6">
                <div>
                    <h1 className="text-2xl font-semibold mb-1">Fees & Payments</h1>
                    <p className="text-sm text-muted-foreground">Manage your semester fee payments</p>
                </div>
                <div className="space-y-4">
                    <Skeleton className="h-32 w-full" />
                    <Skeleton className="h-32 w-full" />
                    <Skeleton className="h-32 w-full" />
                </div>
            </div>
        );
    }

    return (
        <div className="p-4 md:p-6 space-y-6">
            <div>
                <h1 className="text-2xl font-semibold mb-1">Fees & Payments</h1>
                <p className="text-sm text-muted-foreground">Manage your semester fee payments</p>
            </div>

            <div className="grid gap-4">
                {fees?.map((fee) => (
                    <FeeCard
                        key={fee.id}
                        semester={fee.semester}
                        amount={fee.amount}
                        dueDate={fee.dueDate}
                        status={fee.status}
                        receiptUrl={fee.receiptUrl}
                    />
                ))}
            </div>
        </div>
    );
}
