import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, User } from "lucide-react";

const students = [
  { id: 1, name: "Sarah Johnson", email: "sarah.j@email.com", phone: "+1 234-567-8901", status: "Admitted", course: "Web Development" },
  { id: 2, name: "Michael Chen", email: "m.chen@email.com", phone: "+1 234-567-8902", status: "Applied", course: "Data Science" },
  { id: 3, name: "Emily Davis", email: "emily.d@email.com", phone: "+1 234-567-8903", status: "Inquiry", course: "UI/UX Design" },
  { id: 4, name: "James Wilson", email: "j.wilson@email.com", phone: "+1 234-567-8904", status: "Admitted", course: "Mobile Development" },
  { id: 5, name: "Anna Martinez", email: "anna.m@email.com", phone: "+1 234-567-8905", status: "Under Review", course: "Web Development" },
  { id: 6, name: "David Lee", email: "d.lee@email.com", phone: "+1 234-567-8906", status: "Applied", course: "Cybersecurity" },
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
    default:
      return "bg-muted text-muted-foreground border-border";
  }
};

export default function Students() {
  return (
    <div className="p-8 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Students</h1>
          <p className="text-muted-foreground mt-1">Manage student information and applications</p>
        </div>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search students by name, email, or course..."
          className="pl-10 max-w-md"
        />
      </div>

      <div className="grid gap-4">
        {students.map((student) => (
          <Card key={student.id} className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <User className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">{student.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">{student.email}</p>
                  </div>
                </div>
                <Badge variant="outline" className={getStatusColor(student.status)}>
                  {student.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="flex gap-6 text-sm">
                <div>
                  <span className="text-muted-foreground">Phone:</span>{" "}
                  <span className="text-foreground font-medium">{student.phone}</span>
                </div>
                <div>
                  <span className="text-muted-foreground">Course:</span>{" "}
                  <span className="text-foreground font-medium">{student.course}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
