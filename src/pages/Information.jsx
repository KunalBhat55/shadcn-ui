import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Calendar from "./Calendar";
import ClientInfoCard from "../components/ClientInfoCard";
import { clientData, productData, employeeData, notesData } from "../data";

function Information() {
  return (
    <div className="flex justify-center px-4 py-8 bg-gray-100 min-h-screen">
      <Tabs
        defaultValue="account"
        className="w-full max-w-6xl rounded-lg shadow-md"
      >
        {/* Tabs List */}
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

        {/* Tabs Content */}
        
        <div className="">
          {[
            {
              value: "account",
              content: (
                <>
                  <ClientInfoCard clientData={clientData} />
                  <ClientInfoCard clientData={productData} />
                </>
              ),
              className: "grid grid-cols-1 gap-4 md:grid-cols-2",
            },
            {
              value: "password",
              content: <ClientInfoCard clientData={productData} />,
            },
            {
              value: "settings",
              content: <ClientInfoCard clientData={employeeData} />,
            },
            {
              value: "notifications",
              content: (
                <>
                  <h2>Notes & Events</h2>
                  <ClientInfoCard clientData={notesData} inputType={"textArea"} />
                </>
              ),
            },
            {
              value: "privacy",
              content: <Calendar />,
            },
          ].map((tab) => (
            <TabsContent
              key={tab.value}
              className={`rounded-lg shadow-md bg-gray-50 p-4 ${tab.className || ""}`}
              value={tab.value}
            >
              {tab.content}
            </TabsContent>
          ))}
        </div>
      </Tabs>
    </div>
  );
}

export default Information;
