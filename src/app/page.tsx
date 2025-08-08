"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from "next/image";
import { DismissibleAlert } from "@/components/dismissible-alert";
import { HomeIcon, Compass, MessageCircle, Send, Phone, Facebook, Youtube, User, ShoppingCart, UserCircle, ShoppingBag, Code, PlayCircle, Blocks } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";

const topUpOptions = [
  { id: 1, name: "Free Fire TopUp (BD)", hint: "gaming character", image: "https://admin.topupbuzz.com/products/1735123003.jpg", slug: "free-fire-topup-bd" },
  { id: 2, name: "E-Badge/Evo Access (BD)", hint: "gaming badge", image: "https://admin.topupbuzz.com/products/1753710252.png", slug: "e-badge-evo-access-bd" },
  { id: 3, name: "Airdrop (ID Code)", hint: "gaming loot", image: "https://admin.topupbuzz.com/products/1735123003.jpg", slug: "airdrop-id-code" },
  { id: 4, name: "Weekly Lite (BD Server)", hint: "gaming currency", image: "https://admin.topupbuzz.com/products/1735123183.png", slug: "weekly-lite-bd-server" },
  { id: 5, name: "Weekly/Monthly Offer", hint: "gaming offer", image: "https://admin.topupbuzz.com/products/1735123209.jpg", slug: "weekly-monthly-offer" },
  { id: 6, name: "Indonesia Server (UID)", hint: "gaming character", image: "https://admin.topupbuzz.com/products/1735123357.jpg", slug: "indonesia-server-uid" },
  { id: 7, name: "FF ID Like (Daily 100 Max)", hint: "gaming social", image: "https://admin.topupbuzz.com/products/1742654820.jpg", slug: "ff-id-like" },
  { id: 8, name: "Level Up Pass", hint: "gaming pass", image: "https://admin.topupbuzz.com/products/1748197834.jpg", slug: "level-up-pass" },
  { id: 9, name: "Unipin Voucher (BD)", hint: "gaming voucher", image: "https://admin.topupbuzz.com/products/1735123065.jpg", slug: "unipin-voucher-bd" },
];

const socialMediaServices = [
  { id: 1, name: "Facebook Page Like/Followers", hint: "social facebook", slug: "fb-page-like-followers" },
  { id: 2, name: "Facebook React Post/Photos", hint: "social facebook", slug: "fb-react-post-photos" },
  { id: 3, name: "Facebook ID Followers", hint: "social facebook", slug: "fb-id-followers" },
  { id: 4, name: "TikTok Account Followers", hint: "social tiktok", slug: "tiktok-followers" },
  { id: 5, name: "TikTok Video Views", hint: "social tiktok", slug: "tiktok-views" },
  { id: 6, name: "TikTok Video Likes", hint: "social tiktok", slug: "tiktok-likes" },
  { id: 7, name: "Youtube Subscribe", hint: "social youtube", slug: "youtube-subscribe" },
  { id: 8, name: "Youtube Video Views", hint: "social youtube", slug: "youtube-views" },
  { id: 9, name: "Youtube Video Likes", hint: "social youtube", slug: "youtube-likes" },
];

const moreGames = [
    { id: 1, name: "PUBG MOBILE", hint: "gaming pubg", image: "https://admin.topupbuzz.com/products/1736493511.jpg", slug: "pubg-mobile" },
    { id: 2, name: "FC MOBILE (EA SPORTS)", hint: "gaming fifa", image: "https://admin.topupbuzz.com/products/1736493505.jpg", slug: "fc-mobile" },
];


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <header className="bg-background/90 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <h1 className="text-2xl font-bold text-foreground">
                <span className="text-blue-600">TOPUP</span>
                <span className="text-red-600">BUZZ</span>
              </h1>
            </div>
            <Link href="/login">
              <Button variant="outline">
                <User className="mr-2 h-4 w-4" />
                Login
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-grow container mx-auto p-4 sm:p-6 lg:p-8 space-y-8">
        <DismissibleAlert />

        <Carousel 
          className="w-full max-w-4xl mx-auto" 
          opts={{ loop: true }}
          plugins={[
            Autoplay({
              delay: 2000,
              stopOnInteraction: false,
            }),
          ]}
        >
          <CarouselContent>
            {Array.from({ length: 3 }).map((_, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card className="border-0">
                    <CardContent className="flex aspect-[2/1] items-center justify-center p-0 overflow-hidden rounded-lg">
                       <Image
                          src="https://admin.topupbuzz.com/banners/1752316763.jpg"
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
            <h2 className="text-2xl font-bold text-center mb-6 text-foreground">Free Fire</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4">
            {topUpOptions.map((option) => (
              <Link href={`/topup/${option.slug}`} key={option.id}>
                <Card className="overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col group items-center text-center cursor-pointer h-full bg-card">
                  <CardContent className="p-4 flex-grow flex flex-col items-center justify-center">
                      <div className="w-[100px] h-[100px] mb-2 overflow-hidden rounded-lg">
                        <Image
                            src={option.image}
                            alt={option.name}
                            width={100}
                            height={100}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            data-ai-hint={option.hint}
                        />
                      </div>
                      <p className="text-sm font-medium text-card-foreground">{option.name}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
            </div>
        </div>

        <div>
            <h2 className="text-2xl font-bold text-center mb-6 mt-8 text-foreground">Social Media Service</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4">
            {socialMediaServices.map((service) => (
              <Link href={`/topup/${service.slug}`} key={service.id}>
                <Card className="overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col group items-center text-center cursor-pointer h-full bg-card">
                  <CardContent className="p-4 flex-grow flex flex-col items-center justify-center">
                      <div className="w-[100px] h-[100px] mb-2 overflow-hidden rounded-lg bg-muted">
                        <Image
                            src={`https://placehold.co/100x100.png`}
                            alt={service.name}
                            width={100}
                            height={100}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            data-ai-hint={service.hint}
                        />
                      </div>
                      <p className="text-sm font-medium text-card-foreground">{service.name}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
            </div>
        </div>

        <div>
            <h2 className="text-2xl font-bold text-center mb-6 mt-8 text-foreground">More Games</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4 justify-center">
            {moreGames.map((game) => (
              <Link href={`/topup/${game.slug}`} key={game.id}>
                <Card className="overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col group items-center text-center cursor-pointer h-full bg-card">
                  <CardContent className="p-4 flex-grow flex flex-col items-center justify-center">
                      <div className="w-[100px] h-[100px] mb-2 overflow-hidden rounded-lg bg-muted">
                        <Image
                            src={game.image || `https://placehold.co/100x100.png`}
                            alt={game.name}
                            width={100}
                            height={100}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            data-ai-hint={game.hint}
                        />
                      </div>
                      <p className="text-sm font-medium text-card-foreground">{game.name}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          <a href="#" className="flex items-center gap-2 p-3 border border-border rounded-lg hover:bg-muted transition-colors">
            <Image src="https://placehold.co/40x40.png" width={40} height={40} alt="Google Play" data-ai-hint="google play logo" />
            <div>
                <p className="font-bold">Download Our Mobile App</p>
                <p className="text-sm text-primary">Click Here →</p>
            </div>
          </a>
          <a href="#" className="flex items-center gap-2 p-3 border border-border rounded-lg hover:bg-muted transition-colors">
            <Image src="https://placehold.co/40x40.png" width={40} height={40} alt="Telegram" data-ai-hint="telegram logo" />
            <div>
                <p className="font-bold">Giveway & Offer Update</p>
                <p className="text-sm text-primary">Join Telegram</p>
            </div>
          </a>
        </div>
        
        <div className="mt-8 p-4 h-32 rounded-lg bg-muted/50">
            {/* Placeholder for ad */}
        </div>

      </main>

      <div className="fixed bottom-24 right-4 z-50">
          <div className="relative group">
              <div className="absolute -left-24 bottom-1/2 translate-y-1/2 bg-red-600 text-white text-xs font-bold py-1 px-3 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  SUPPORT!
              </div>
              <Button size="icon" className="rounded-full bg-red-600 hover:bg-red-700 w-14 h-14">
                  <Phone className="w-6 h-6" />
              </Button>
          </div>
      </div>
      
      <footer style={{background: '#1c2538', color: 'white'}} className="pt-12 pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <h3 className="text-lg font-bold mb-4">SUPPORT</h3>
                    <a href="#" className="flex items-center gap-4 p-3 border border-white/20 rounded-lg hover:bg-white/10 transition-colors">
                        <Send className="w-6 h-6" />
                        <div>
                            <p className="text-sm">8AM - 12.00PM</p>
                            <p className="font-semibold">Telegram HelpLine</p>
                        </div>
                    </a>
                </div>
                <div>
                    <h3 className="text-lg font-bold mb-4">STAY CONNECTED</h3>
                    <p className="font-bold">TopUp Buzz</p>
                    <p className="text-sm">House #80 (13rd Floor) Road # 17, Nikanjia-5 Dhaka</p>
                    <div className="flex gap-4 mt-4">
                        <a href="#" className="p-2 border border-white/20 rounded-md hover:bg-white/10 transition-colors">
                            <Facebook className="w-6 h-6" />
                        </a>
                        <a href="#" className="p-2 border border-white/20 rounded-md hover:bg-white/10 transition-colors">
                            <Youtube className="w-6 h-6" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="border-t border-white/20 mt-8 pt-6 text-center text-sm">
                <p>&copy; Copyright 2022. All Rights Reserved. Developed by Tec Mahal</p>
            </div>
        </div>
      </footer>

      <div className="fixed bottom-0 left-0 right-0 bg-background/90 backdrop-blur-sm border-t border-border z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-around items-center h-16">
            <Link href="/" className="flex flex-col items-center text-primary">
              <HomeIcon className="w-6 h-6" />
              <span className="text-xs">Home</span>
            </Link>
            <a href="#" className="flex flex-col items-center text-muted-foreground hover:text-primary">
              <PlayCircle className="w-6 h-6" />
              <span className="text-xs">Tutorial</span>
            </a>
            <Link href="/topup" className="flex flex-col items-center text-muted-foreground hover:text-primary">
              <Compass className="w-6 h-6" />
              <span className="text-xs">TopUp</span>
            </Link>
            <a href="#" className="flex flex-col items-center text-muted-foreground hover:text-primary">
              <Blocks className="w-6 h-6" />
              <span className="text-xs">Contact Us</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
