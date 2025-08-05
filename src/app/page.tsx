import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from "next/image";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { X, Phone } from "lucide-react";
import { DismissibleAlert } from "@/components/dismissible-alert";

const topUpOptions = [
  { id: 1, name: "Free Fire TopUp (BD)", hint: "gaming character" },
  { id: 2, name: "E-Badge/Evo Access (BD)", hint: "gaming badge" },
  { id: 3, name: "Airdrop (ID Code)", hint: "gaming loot" },
  { id: 4, name: "Weekly Lite (BD Server)", hint: "gaming currency" },
  { id: 5, name: "Weekly/Monthly Offer", hint: "gaming offer" },
  { id: 6, name: "Indonesia Server (UID)", hint: "gaming character" },
  { id: 7, name: "FF ID Like (Daily 100 Max)", hint: "gaming social" },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <header className="bg-white text-gray-800 shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <h1 className="text-2xl font-bold text-gray-900">
                <span className="text-blue-600">TOPUP</span>
                <span className="text-red-600">BUZZ</span>
              </h1>
            </div>
            <Button variant="outline">Login</Button>
          </div>
        </div>
      </header>

      <main className="flex-grow container mx-auto p-4 sm:p-6 lg:p-8 space-y-8">
        <DismissibleAlert />

        <Carousel className="w-full max-w-4xl mx-auto" opts={{ loop: true }}>
          <CarouselContent>
            {Array.from({ length: 3 }).map((_, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-[2/1] items-center justify-center p-0 overflow-hidden rounded-lg">
                       <Image
                          src="https://placehold.co/800x400.png"
                          alt={`Slider image ${index + 1}`}
                          width={800}
                          height={400}
                          className="w-full h-full object-cover"
                          data-ai-hint="abstract background"
                       />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2" />
          <CarouselNext className="right-2" />
        </Carousel>

        <div>
            <h2 className="text-2xl font-bold text-center mb-6">Free Fire</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4">
            {topUpOptions.map((option) => (
                <Card key={option.id} className="overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col group items-center text-center cursor-pointer">
                  <CardContent className="p-4 flex-grow flex flex-col items-center justify-center">
                      <div className="w-[100px] h-[100px] mb-2 overflow-hidden rounded-lg">
                        <Image
                            src={`https://placehold.co/100x100.png`}
                            alt={option.name}
                            width={100}
                            height={100}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            data-ai-hint={option.hint}
                        />
                      </div>
                      <p className="text-sm font-medium">{option.name}</p>
                  </CardContent>
                </Card>
            ))}
            </div>
        </div>

      </main>

      <div className="fixed bottom-6 right-6 flex flex-col items-center space-y-2">
        <Button variant="destructive" className="rounded-full shadow-lg">SUPPORT!</Button>
        <Button size="icon" className="bg-red-600 hover:bg-red-700 text-white rounded-full w-14 h-14 shadow-lg">
          <Phone className="h-7 w-7" />
        </Button>
      </div>

    </div>
  );
}
