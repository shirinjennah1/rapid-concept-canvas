import { StatCard } from "@/components/StatCard";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, BookOpen, FileText, TrendingUp, Calendar } from "lucide-react";

const recentApplications = [
  { id: 1, student: "David Lee", course: "Cybersecurity", date: "2025-10-21", status: "Applied" },
  { id: 2, student: "Emily Davis", course: "UI/UX Design", date: "2025-10-20", status: "Inquiry" },
  { id: 3, student: "Anna Martinez", course: "Web Development", date: "2025-10-19", status: "Under Review" },
  { id: 4, student: "Michael Chen", course: "Data Science", date: "2025-10-18", status: "Under Review" },
];

const Index = () => {
  return (
    <div className="p-8 space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground mt-1">Welcome to EduTrack Institute Management System</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Students"
          value="156"
          icon={Users}
          trend="+12% from last month"
          trendUp
        />
        <StatCard
          title="Active Courses"
          value="12"
          icon={BookOpen}
          trend="2 new this semester"
          trendUp
        />
        <StatCard
          title="Applications"
          value="48"
          icon={FileText}
          trend="8 pending review"
        />
        <StatCard
          title="Admitted This Month"
          value="23"
          icon={TrendingUp}
          trend="+18% from last month"
          trendUp
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Recent Applications</CardTitle>
            <CardDescription>Latest student applications and inquiries</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentApplications.map((app) => (
                <div key={app.id} className="flex items-center justify-between p-3 rounded-lg border bg-card hover:bg-muted/50 transition-colors">
                  <div className="space-y-1">
                    <p className="font-medium text-foreground">{app.student}</p>
                    <p className="text-sm text-muted-foreground">{app.course}</p>
                  </div>
                  <div className="text-right space-y-1">
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      {new Date(app.date).toLocaleDateString()}
                    </div>
                    <div className="text-xs font-medium text-primary">{app.status}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Stats</CardTitle>
            <CardDescription>Application status breakdown</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Admitted</span>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-32 rounded-full bg-muted overflow-hidden">
                    <div className="h-full w-3/4 bg-success rounded-full" />
                  </div>
                  <span className="text-sm font-medium">23</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Under Review</span>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-32 rounded-full bg-muted overflow-hidden">
                    <div className="h-full w-1/2 bg-warning rounded-full" />
                  </div>
                  <span className="text-sm font-medium">15</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Applied</span>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-32 rounded-full bg-muted overflow-hidden">
                    <div className="h-full w-1/3 bg-info rounded-full" />
                  </div>
                  <span className="text-sm font-medium">8</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Inquiry</span>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-32 rounded-full bg-muted overflow-hidden">
                    <div className="h-full w-1/6 bg-muted-foreground rounded-full" />
                  </div>
                  <span className="text-sm font-medium">2</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
