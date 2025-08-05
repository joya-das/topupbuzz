import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from "next/image";
import { DismissibleAlert } from "@/components/dismissible-alert";
import { HomeIcon, Briefcase, MessageSquareHeart, User } from "lucide-react";

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
    <div className="flex flex-col min-h-screen bg-gray-50 pb-20">
      <header className="bg-white/70 backdrop-blur-sm text-gray-800 shadow-md sticky top-0 z-50">
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

      <footer className="fixed bottom-0 left-0 right-0 bg-white/70 backdrop-blur-sm border-t border-gray-200 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-around items-center h-16">
            <a href="#" className="flex flex-col items-center text-gray-600 hover:text-blue-600">
              <HomeIcon className="w-6 h-6" />
              <span className="text-xs">Home</span>
            </a>
            <a href="#" className="flex flex-col items-center text-gray-600 hover:text-blue-600">
              <Briefcase className="w-6 h-6" />
              <span className="text-xs">Products</span>
            </a>
            <a href="#" className="flex flex-col items-center text-gray-600 hover:text-blue-600">
              <MessageSquareHeart className="w-6 h-6" />
              <span className="text-xs">Support</span>
            </a>
            <a href="#" className="flex flex-col items-center text-gray-600 hover:text-blue-600">
              <User className="w-6 h-6" />
              <span className="text-xs">Profile</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
