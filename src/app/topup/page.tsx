"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { HomeIcon, Compass, Send, Phone, Facebook, Youtube, User, ShoppingCart, UserCircle, ShoppingBag, Code } from "lucide-react";
import Link from "next/link";

const topUpOptions = [
  { id: 1, name: "Free Fire TopUp (BD)", hint: "gaming character", image: "https://admin.topupbuzz.com/products/1735123003.jpg", slug: "free-fire-topup-bd" },
  { id: 2, name: "E-Badge/Evo Access (BD)", hint: "gaming badge", image: "https://admin.topupbuzz.com/products/1753710252.png", slug: "e-badge-evo-access-bd" },
  { id: 3, name: "Airdrop (ID Code)", hint: "gaming loot", image: "https://placehold.co/100x100.png", slug: "airdrop-id-code" },
  { id: 4, name: "Weekly Lite (BD Server)", hint: "gaming currency", image: "https://admin.topupbuzz.com/products/1735123183.png", slug: "weekly-lite-bd-server" },
  { id: 5, name: "Weekly/Monthly Offer", hint: "gaming offer", image: "https://admin.topupbuzz.com/products/1735123209.jpg", slug: "weekly-monthly-offer" },
  { id: 6, name: "Indonesia Server (UID)", hint: "gaming character", image: "https://admin.topupbuzz.com/products/1735123357.jpg", slug: "indonesia-server-uid" },
  { id: 7, name: "FF ID Like (Daily 100 Max)", hint: "gaming social", image: "https://admin.topupbuzz.com/products/1742654820.jpg", slug: "ff-id-like" },
  { id: 8, name: "Level Up Pass", hint: "gaming pass", image: "https://admin.topupbuzz.com/products/1748197834.jpg", slug: "level-up-pass" },
  { id: 9, name: "Unipin Voucher (BD)", hint: "gaming voucher", image: "https://admin.topupbuzz.com/products/1735123065.jpg", slug: "unipin-voucher-bd" },
];

export default function TopUpOnlyPage() {
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
      
      <footer className="bg-secondary text-secondary-foreground pt-12 pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <h3 className="text-lg font-bold mb-4">SUPPORT</h3>
                    <a href="#" className="flex items-center gap-4 p-4 border border-border rounded-lg hover:bg-muted transition-colors">
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
                        <a href="#" className="p-2 border border-border rounded-md hover:bg-muted transition-colors">
                            <Facebook className="w-6 h-6" />
                        </a>
                        <a href="#" className="p-2 border border-border rounded-md hover:bg-muted transition-colors">
                            <Youtube className="w-6 h-6" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="border-t border-border mt-8 pt-6 text-center text-sm">
                <p>&copy; Copyright 2022. All Rights Reserved. Developed by Shozon Roy</p>
            </div>
        </div>
      </footer>

      <div className="fixed bottom-0 left-0 right-0 bg-background/90 backdrop-blur-sm border-t border-border z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-around items-center h-16">
            <Link href="/" className="flex flex-col items-center text-muted-foreground hover:text-primary">
              <HomeIcon className="w-6 h-6" />
              <span className="text-xs">Home</span>
            </Link>
            <a href="#" className="flex flex-col items-center text-muted-foreground hover:text-primary">
              <ShoppingBag className="w-6 h-6" />
              <span className="text-xs">Add Money</span>
            </a>
            <a href="#" className="flex flex-col items-center text-muted-foreground hover:text-primary">
              <ShoppingCart className="w-6 h-6" />
              <span className="text-xs">My Orders</span>
            </a>
            <Link href="/topup" className="flex flex-col items-center text-red-600 dark:text-red-500">
              <Compass className="w-6 h-6" />
              <span className="text-xs">TopUp</span>
            </Link>
            <a href="#" className="flex flex-col items-center text-muted-foreground hover:text-primary">
              <UserCircle className="w-6 h-6" />
              <span className="text-xs">Account</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
