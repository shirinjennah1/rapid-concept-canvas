import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, Calendar } from "lucide-react";

const applications = [
  {
    id: 1,
    studentName: "Sarah Johnson",
    course: "Web Development",
    appliedDate: "2025-10-15",
    status: "Admitted",
    notes: "Strong portfolio and experience",
  },
  {
    id: 2,
    studentName: "Michael Chen",
    course: "Data Science",
    appliedDate: "2025-10-18",
    status: "Under Review",
    notes: "Pending technical assessment",
  },
  {
    id: 3,
    studentName: "Emily Davis",
    course: "UI/UX Design",
    appliedDate: "2025-10-20",
    status: "Inquiry",
    notes: "Requested course information",
  },
  {
    id: 4,
    studentName: "James Wilson",
    course: "Mobile Development",
    appliedDate: "2025-10-12",
    status: "Admitted",
    notes: "Previous development experience",
  },
  {
    id: 5,
    studentName: "Anna Martinez",
    course: "Web Development",
    appliedDate: "2025-10-19",
    status: "Under Review",
    notes: "Completing application documents",
  },
  {
    id: 6,
    studentName: "David Lee",
    course: "Cybersecurity",
    appliedDate: "2025-10-21",
    status: "Applied",
    notes: "All documents submitted",
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "Admitted":
      return "bg-success/10 text-success border-success/20";
    case "Applied":
      return "bg-info/10 text-info border-info/20";
    case "Under Review":
      return "bg-warning/10 text-warning border-warning/20";
    case "Inquiry":
      return "bg-muted text-muted-foreground border-border";
    case "Rejected":
      return "bg-destructive/10 text-destructive border-destructive/20";
    default:
      return "bg-muted text-muted-foreground border-border";
  }
};

export default function Applications() {
  return (
    <div className="p-8 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Applications</h1>
          <p className="text-muted-foreground mt-1">Track and manage student applications</p>
        </div>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search applications by student name or course..."
          className="pl-10 max-w-md"
        />
      </div>

      <div className="grid gap-4">
        {applications.map((application) => (
          <Card key={application.id} className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <CardTitle className="text-lg">{application.studentName}</CardTitle>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>Applied: {new Date(application.appliedDate).toLocaleDateString()}</span>
                  </div>
                </div>
                <Badge variant="outline" className={getStatusColor(application.status)}>
                  {application.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="pt-0 space-y-2">
              <div className="flex gap-6 text-sm">
                <div>
                  <span className="text-muted-foreground">Course:</span>{" "}
                  <span className="text-foreground font-medium">{application.course}</span>
                </div>
              </div>
              <div className="text-sm">
                <span className="text-muted-foreground">Notes:</span>{" "}
                <span className="text-foreground">{application.notes}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
