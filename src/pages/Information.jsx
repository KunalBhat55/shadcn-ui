import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Calendar from "./Calendar";
import ClientInfoCard from "../components/Account";

function Information() {


  return (
    <div className="flex justify-center pr-4 space-x-16">
      <Tabs defaultValue="account" className="w-[65rem]">
        <TabsList className="flex space-x-24 ">
          <TabsTrigger value="account" className="px-4 py-2">
            Account
          </TabsTrigger>
          <TabsTrigger value="password" className="px-4 py-2">
            Password
          </TabsTrigger>
          <TabsTrigger value="settings" className="px-4 py-2">
            Settings
          </TabsTrigger>
          <TabsTrigger value="notifications" className="px-4 py-2">
            Notifications
          </TabsTrigger>
          <TabsTrigger value="privacy" className="px-4 py-2">
            Privacy
          </TabsTrigger>
        </TabsList>
        <TabsContent className="mt-12 mr-64 min-h-80" value="account">
          
            <ClientInfoCard />
            
        </TabsContent>
        <TabsContent value="password" className="p-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis,
          magni cum hic assumenda officiis temporibus qui nobis harum eius
          tempora incidunt ullam sed facilis quasi quibusdam ex voluptas quas?
          Laudantium.
        </TabsContent>
        <TabsContent value="settings" className="p-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quidem.
        </TabsContent>
        <TabsContent value="notifications" className="p-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quidem.
        </TabsContent>
        <TabsContent value="privacy" className="p-4">
          <Calendar />
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default Information;
