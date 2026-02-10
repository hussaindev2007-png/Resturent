import Sidebar from "@/component/sidebar";
import { Card, CardContent } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

export default function Dashboard() {
  const stats = [
    { title: "Users", value: "1,245" },
    { title: "Revenue", value: "$8,430" },
    { title: "Orders", value: "312" },
    { title: "Growth", value: "+12%" },
  ];

  const data = [
    { name: "Mon", sales: 120 },
    { name: "Tue", sales: 210 },
    { name: "Wed", sales: 180 },
    { name: "Thu", sales: 260 },
    { name: "Fri", sales: 200 },
  ];

  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <aside className="w-64 border-r hidden md:block">
        <Sidebar />
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 space-y-6">
        <h1 className="text-2xl font-bold">Dashboard</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((item, i) => (
            <Card key={i} className="rounded-2xl shadow-sm">
              <CardContent className="p-4">
                <p className="text-sm text-muted-foreground">{item.title}</p>
                <p className="text-2xl font-semibold">{item.value}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="rounded-2xl shadow-sm">
          <CardContent className="p-4 h-64">
            <p className="mb-2 font-medium">Weekly Sales</p>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="sales" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
