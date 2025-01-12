import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Calendar from "./Calendar";
import ClientInfoCard from "../components/ClientInfoCard";
import { clientData, productData, employeeData } from "../data";

function Information() {
  return (
    <div className="flex justify-center px-4 py-8 bg-gray-100 min-h-screen">
      <Tabs
        defaultValue="account"
        className="w-full max-w-6xl bg-white rounded-lg shadow-md"
      >
        <TabsList className="flex justify-between border-b border-gray-200 p-4">
          {[
            { value: "account", label: "Account" },
            { value: "password", label: "Password" },
            { value: "settings", label: "Settings" },
            { value: "notifications", label: "Notifications" },
            { value: "privacy", label: "Privacy" },
          ].map((tab) => (
            <TabsTrigger
              key={tab.value}
              value={tab.value}
              className="px-6 py-2 text-gray-600 transition-all duration-300 rounded hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 data-[state=active]:text-blue-600 data-[state=active]:font-semibold data-[state=active]:border-b-2 data-[state=active]:border-blue-500"
            >
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>

        <div className="p-6">
          {/* Account Tab */}
          <TabsContent
            className="rounded-lg shadow-md bg-gray-50 p-4"
            value="account"
          >
            <ClientInfoCard
             
            clientData={clientData} />
            <ClientInfoCard
             
            clientData={clientData} />
            
          </TabsContent>
          {/* Password Tab */}
          <TabsContent
            className="rounded-lg shadow-md bg-gray-50 p-4"
            value="password"
          >
            <ClientInfoCard clientData={productData} />
          </TabsContent>
          {/* Settings Tab */}
          <TabsContent
            className="rounded-lg shadow-md bg-gray-50 p-4"
            value="settings"
          >
            <ClientInfoCard clientData={employeeData} />
          </TabsContent>
          {/* Notifications Tab */}
          <TabsContent
            className="rounded-lg shadow-md bg-gray-50 p-4"
            value="notifications"
          >
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quidem.
            </p>
          </TabsContent>
          {/* Privacy Tab */}
          <TabsContent
            className="rounded-lg shadow-md bg-gray-50 p-4"
            value="privacy"
          >
            <Calendar />
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
}

export default Information;
