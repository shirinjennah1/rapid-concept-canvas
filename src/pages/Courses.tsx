import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, DollarSign } from "lucide-react";

const courses = [
  {
    id: 1,
    name: "Web Development Bootcamp",
    description: "Learn full-stack web development with modern technologies including React, Node.js, and databases.",
    duration: "12 weeks",
    students: 45,
    fees: "$2,999",
    available: true,
  },
  {
    id: 2,
    name: "Data Science & Machine Learning",
    description: "Master data analysis, visualization, and machine learning algorithms with Python.",
    duration: "16 weeks",
    students: 32,
    fees: "$3,499",
    available: true,
  },
  {
    id: 3,
    name: "UI/UX Design Masterclass",
    description: "Create beautiful, user-friendly interfaces with modern design principles and tools.",
    duration: "10 weeks",
    students: 28,
    fees: "$2,499",
    available: true,
  },
  {
    id: 4,
    name: "Mobile App Development",
    description: "Build cross-platform mobile applications using React Native and Flutter.",
    duration: "14 weeks",
    students: 38,
    fees: "$3,199",
    available: true,
  },
  {
    id: 5,
    name: "Cybersecurity Fundamentals",
    description: "Learn essential cybersecurity concepts, ethical hacking, and network security.",
    duration: "12 weeks",
    students: 25,
    fees: "$2,799",
    available: true,
  },
  {
    id: 6,
    name: "Cloud Computing & DevOps",
    description: "Master cloud platforms (AWS, Azure) and modern DevOps practices.",
    duration: "10 weeks",
    students: 30,
    fees: "$2,899",
    available: false,
  },
];

export default function Courses() {
  return (
    <div className="p-8 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Courses</h1>
        <p className="text-muted-foreground mt-1">Browse our comprehensive course offerings</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <Card key={course.id} className="flex flex-col hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between gap-2">
                <CardTitle className="text-xl leading-tight">{course.name}</CardTitle>
                {course.available ? (
                  <Badge className="bg-success/10 text-success border-success/20 shrink-0">
                    Available
                  </Badge>
                ) : (
                  <Badge variant="outline" className="shrink-0">Full</Badge>
                )}
              </div>
              <CardDescription className="mt-2 line-clamp-2">
                {course.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col justify-end gap-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="h-4 w-4 text-primary" />
                  <span className="text-muted-foreground">Duration:</span>
                  <span className="font-medium text-foreground">{course.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Users className="h-4 w-4 text-primary" />
                  <span className="text-muted-foreground">Students:</span>
                  <span className="font-medium text-foreground">{course.students}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <DollarSign className="h-4 w-4 text-primary" />
                  <span className="text-muted-foreground">Fees:</span>
                  <span className="font-medium text-foreground">{course.fees}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
