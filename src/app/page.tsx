import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Diamond, Facebook, Instagram, Twitter, Youtube, Gamepad2, Users } from "lucide-react";
import Image from "next/image";
import { FreeFireForm } from "@/components/free-fire-form";

const topUpOptions = [
  { id: 1, diamonds: 100, price: "$1.00", hint: "diamond gem" },
  { id: 2, diamonds: 310, price: "$3.00", hint: "diamond gem" },
  { id: 3, diamonds: 520, price: "$5.00", hint: "diamond gem" },
  { id: 4, diamonds: 1060, price: "$10.00", hint: "diamond gem" },
  { id: 5, diamonds: 2180, price: "$20.00", hint: "diamond gem" },
  { id: 6, diamonds: 5600, price: "$50.00", hint: "diamond gem" },
];

const socialServices = [
  { id: 1, name: "Facebook Page Likes", quantity: "1,000", price: "$10.00", hint: "social media facebook" },
  { id: 2, name: "Instagram Followers", quantity: "1,000", price: "$12.00", hint: "social media instagram" },
  { id: 3, name: "Twitter Followers", quantity: "1,000", price: "$15.00", hint: "social media twitter" },
  { id: 4, name: "YouTube Subscribers", quantity: "500", price: "$25.00", hint: "social media youtube" },
];


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-primary/95 text-primary-foreground shadow-md backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <Diamond className="h-8 w-8 text-accent" />
              <h1 className="text-2xl font-bold font-headline">TopUp Ace</h1>
            </div>
            <Button variant="ghost">Login / Register</Button>
          </div>
        </div>
      </header>

      <main className="flex-grow container mx-auto p-4 sm:p-6 lg:p-8">
        <Tabs defaultValue="free-fire" className="w-full max-w-5xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 bg-primary/10 p-1 h-auto">
            <TabsTrigger value="free-fire" className="gap-2 py-2">
              <Gamepad2 className="h-5 w-5" /> Free Fire Top-Up
            </TabsTrigger>
            <TabsTrigger value="social-media" className="gap-2 py-2">
               <Users className="h-5 w-5" />
              Social Services
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="free-fire" className="mt-6 space-y-10">
            <FreeFireForm />

            <div>
                <h2 className="text-3xl font-bold text-center mb-6 font-headline">Select Top-Up Amount</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {topUpOptions.map((option) => (
                    <Card key={option.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col group">
                      <CardHeader className="p-0">
                          <div className="aspect-[16/10] overflow-hidden">
                            <Image
                                src={`https://placehold.co/400x250.png`}
                                alt={`${option.diamonds} Diamonds`}
                                width={400}
                                height={250}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                data-ai-hint={option.hint}
                            />
                          </div>
                      </CardHeader>
                      <CardContent className="p-4 flex-grow">
                          <CardTitle className="text-xl font-headline">{option.diamonds} Diamonds</CardTitle>
                          <p className="text-2xl font-bold text-primary mt-2">{option.price}</p>
                      </CardContent>
                      <CardFooter className="p-4 pt-0">
                          <Button className="w-full bg-primary hover:bg-primary/90">Select</Button>
                      </CardFooter>
                    </Card>
                ))}
                </div>
            </div>
          </TabsContent>

          <TabsContent value="social-media" className="mt-6">
             <h2 className="text-3xl font-bold text-center mb-6 font-headline">Grow Your Social Presence</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {socialServices.map((service) => (
                <Card key={service.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col group">
                   <CardHeader className="p-0">
                    <div className="aspect-[16/10] overflow-hidden">
                        <Image
                          src={`https://placehold.co/400x250.png`}
                          alt={service.name}
                          width={400}
                          height={250}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          data-ai-hint={service.hint}
                        />
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 flex-grow">
                    <CardTitle className="text-xl font-headline">{service.name}</CardTitle>
                    <p className="text-lg text-muted-foreground">{service.quantity}</p>
                    <p className="text-2xl font-bold text-primary mt-2">{service.price}</p>
                  </CardContent>
                  <CardFooter className="p-4 pt-0">
                    <Button className="w-full bg-primary hover:bg-primary/90">Purchase</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>

      <footer className="bg-primary/95 text-primary-foreground mt-auto py-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center space-x-6 mb-4">
            <a href="#" aria-label="Facebook" className="hover:text-accent transition-colors"><Facebook className="h-6 w-6" /></a>
            <a href="#" aria-label="Instagram" className="hover:text-accent transition-colors"><Instagram className="h-6 w-6" /></a>
            <a href="#" aria-label="Twitter" className="hover:text-accent transition-colors"><Twitter className="h-6 w-6" /></a>
            <a href="#" aria-label="Youtube" className="hover:text-accent transition-colors"><Youtube className="h-6 w-6" /></a>
          </div>
          <p className="text-sm text-primary-foreground/80">&copy; {new Date().getFullYear()} TopUp Ace. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
