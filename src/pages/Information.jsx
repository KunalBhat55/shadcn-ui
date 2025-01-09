import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Calendar from "./Calendar";

function Information() {
return (
    <div className="flex justify-center pr-4">
        <Tabs defaultValue="account" className="w-[400px]">
            <TabsList className="">
                <TabsTrigger value="account">Account</TabsTrigger>
                <TabsTrigger value="password">Password</TabsTrigger>
                <TabsTrigger value="settings">Settings</TabsTrigger>
                <TabsTrigger value="notifications">Notifications</TabsTrigger>
                <TabsTrigger value="privacy">Privacy</TabsTrigger>
            </TabsList>
            <TabsContent value="account">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ullam
                laudantium excepturi inventore eos vel impedit explicabo aperiam odio
                laborum, adipisci eius pariatur ad distinctio quam officiis error qui
                unde.
            </TabsContent>
            <TabsContent value="password">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis,
                magni cum hic assumenda officiis temporibus qui nobis harum eius
                tempora incidunt ullam sed facilis quasi quibusdam ex voluptas quas?
                Laudantium.
            </TabsContent>
            <TabsContent value="settings">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
                quidem.
            </TabsContent>
            <TabsContent value="notifications">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
                quidem.
            </TabsContent>
            <TabsContent value="privacy">
                <Calendar />
            </TabsContent>
        </Tabs>
    </div>
);
}

export default Information;
