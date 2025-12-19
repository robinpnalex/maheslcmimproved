import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download, Calendar, IndianRupee } from "lucide-react";

interface FeeCardProps {
    semester: string;
    amount: number;
    dueDate: string;
    status: "paid" | "pending" | "overdue";
    receiptUrl?: string;
}

export default function FeeCard({ semester, amount, dueDate, status, receiptUrl }: FeeCardProps) {
    const getStatusColor = (status: string) => {
        switch (status) {
            case "paid":
                return "bg-green-100 text-green-700 hover:bg-green-100";
            case "pending":
                return "bg-yellow-100 text-yellow-700 hover:bg-yellow-100";
            case "overdue":
                return "bg-red-100 text-red-700 hover:bg-red-100";
            default:
                return "bg-gray-100 text-gray-700";
        }
    };

    return (
        <Card className="hover-elevate transition-all duration-200">
            <CardContent className="p-4 sm:p-5">
                <div className="flex flex-col sm:flex-row justify-between gap-4">
                    <div className="space-y-3">
                        <div className="flex items-start justify-between sm:justify-start gap-3">
                            <h3 className="font-semibold text-lg">{semester}</h3>
                            <Badge className={getStatusColor(status)} variant="secondary">
                                {status.charAt(0).toUpperCase() + status.slice(1)}
                            </Badge>
                        </div>

                        <div className="space-y-1">
                            <div className="flex items-center text-2xl font-bold text-primary">
                                <IndianRupee className="h-5 w-5 mr-1" />
                                {amount.toLocaleString('en-IN')}
                            </div>
                            <div className="flex items-center text-sm text-muted-foreground">
                                <Calendar className="h-4 w-4 mr-2" />
                                Due: {dueDate}
                            </div>
                        </div>
                    </div>

                    <div className="flex items-end justify-start sm:justify-end">
                        {status === "paid" && receiptUrl ? (
                            <Button variant="outline" size="sm" className="w-full sm:w-auto gap-2">
                                <Download className="h-4 w-4" />
                                Download Receipt
                            </Button>
                        ) : status !== "paid" ? (
                            <Button className="w-full sm:w-auto">
                                Pay Now
                            </Button>
                        ) : null}
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
