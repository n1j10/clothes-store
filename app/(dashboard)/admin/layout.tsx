import { Separator } from "@/components/ui/separator";
import SidebarComponent from "./Sidebar";
import { getAdminUser } from '@/utils/api';

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Redirects to "/" unless GET /users/me returns role ADMIN
  await getAdminUser();
  return (
    <main>
      <h2 >DashBoard</h2>
      <Separator className='mt-2'/>
      <section className="grid lg:grid-cols-12 gap-1 mt-12">
        <div className="lg: col-span-2">
          <SidebarComponent />
        </div>
        <div className=" lg:col-4 px-4">
          {children}
        </div>
      </section>



    </main>
  );
}
