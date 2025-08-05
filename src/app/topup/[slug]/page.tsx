"use client";

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { ChevronLeft, HomeIcon, ShoppingCart, Code, UserCircle, Phone, Wallet, User, ShoppingBag, Info, RefreshCw, AlertCircle, Facebook, Youtube } from "lucide-react";
import Link from 'next/link';

const productData: { [key: string]: any } = {
  'free-fire-topup-bd': {
    name: 'Free Fire TopUp (BD)',
    image: 'https://admin.topupbuzz.com/products/1735123003.jpg',
    category: 'Game / Top up',
    rechargeOptions: [
      { id: 'weekly', name: 'Weekly', price: '155 TK' },
      { id: 'monthly', name: 'Monthly', price: '770 TK' },
      { id: '25-diamond', name: '25 Diamond', price: '22 TK' },
      { id: '50-diamond', name: '50 Diamond', price: '38 TK' },
      { id: '115-diamond', name: '115 Diamond', price: '80 TK' },
      { id: '240-diamond', name: '240 Diamond', price: '160 TK' },
      { id: '355-diamond', name: '355 Diamond', price: '240 TK' },
      { id: '505-diamond', name: '505 Diamond', price: '340 TK' },
      { id: '610-diamond', name: '610 Diamond', price: '400 TK' },
      { id: '850-diamond', name: '850 Diamond', price: '560 TK' },
      { id: '1090-diamond', name: '1090 Diamond', price: '720 TK' },
      { id: '1240-diamond', name: '1240 Diamond', price: '800 TK' },
      { id: '2530-diamond', name: '2530 Diamond', price: '1620 TK' },
      { id: '5060-diamond', name: '5060 Diamond', price: '3240 TK' },
      { id: '7590-diamond', name: '7590 Diamond', price: '4850 TK' },
      { id: '10120-diamond', name: '10120 Diamond', price: '6450 TK' },
    ]
  }
};

export default function TopUpPage({ params }: { params: { slug: string } }) {
  const [selectedOption, setSelectedOption] = useState<string | undefined>(undefined);
  const [selectedPayment, setSelectedPayment] = useState('wallet');

  const slug = params.slug;
  const product = productData[slug] || {
    name: decodeURIComponent(slug).replace(/-/g, ' '),
    image: 'https://placehold.co/80x80.png',
    category: 'Game / Top up',
    rechargeOptions: []
  };

  const selectedPrice = product.rechargeOptions.find((opt:any) => opt.id === selectedOption)?.price.split(' ')[0] || 0;

  return (
    <div className="flex flex-col min-h-screen bg-[#f0f2f5] dark:bg-[#040d1c]">
       <header className="bg-white/90 dark:bg-[#0f1b2a]/90 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="text-gray-800 dark:text-gray-200">
              <ChevronLeft className="w-6 h-6" />
            </Link>
            <div className="flex items-center space-x-2">
              <h1 className="text-xl font-bold text-gray-900 dark:text-white">
                 <span className="text-blue-600">TOPUP</span><span className="text-red-600">BUZZ</span>
              </h1>
            </div>
            <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" className="dark:bg-slate-800 dark:border-slate-700">
                    <Wallet className="mr-2 h-4 w-4"/> 0৳
                </Button>
                <Image src="https://placehold.co/32x32.png" alt="User" width={32} height={32} className="rounded-full" data-ai-hint="user avatar" />
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow container mx-auto p-4 space-y-4 pb-32">
        <Card className="overflow-hidden bg-white dark:bg-[#0f1b2a] dark:border-gray-800">
          <CardContent className="p-4 flex items-center gap-4">
            <Image
              src={product.image}
              alt={product.name}
              width={80}
              height={80}
              className="rounded-lg"
            />
            <div>
              <h2 className="text-lg font-bold text-gray-900 dark:text-white">{product.name}</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">{product.category}</p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white dark:bg-[#0f1b2a] dark:border-gray-800">
          <CardHeader>
            <CardTitle className="flex items-center">
              <span className="bg-[#0f1b2a] dark:bg-slate-700 text-white rounded-full h-6 w-6 flex items-center justify-center text-sm mr-2">1</span>
              <span className="text-gray-900 dark:text-white">Select Recharge</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <RadioGroup value={selectedOption} onValueChange={setSelectedOption} className="grid grid-cols-2 gap-3">
              {product.rechargeOptions.map((option: any) => (
                <Label
                  key={option.id}
                  htmlFor={option.id}
                  className={`flex justify-between items-center p-3 rounded-lg border cursor-pointer transition-colors ${
                    selectedOption === option.id
                      ? 'border-red-500 bg-red-50 dark:bg-red-900/20 dark:border-red-700'
                      : 'border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800/50'
                  }`}
                >
                  <span className="text-sm text-gray-800 dark:text-gray-300">{option.name}</span>
                  <span className="font-semibold text-red-600 dark:text-red-500">{option.price}</span>
                  <RadioGroupItem value={option.id} id={option.id} className="sr-only" />
                </Label>
              ))}
            </RadioGroup>
            <div className="text-left mt-4">
              <a href="#" className="text-sm text-red-600 font-bangla hover:underline">
                কিভাবে অর্ডার করবেন ?
              </a>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white dark:bg-[#0f1b2a] dark:border-gray-800">
           <CardHeader>
            <CardTitle className="flex items-center">
               <span className="bg-[#0f1b2a] dark:bg-slate-700 text-white rounded-full h-6 w-6 flex items-center justify-center text-sm mr-2">2</span>
               <span className="text-gray-900 dark:text-white">Account Info</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="font-bangla space-y-4">
             <div>
                <Label htmlFor="game-id" className="text-gray-800 dark:text-gray-300">এখানে গেমের আইডি কোড দিন</Label>
                <Input type="text" id="game-id" placeholder="এখানে গেমের আইডি কোড দিন" className="mt-1 bg-gray-100 dark:bg-gray-800 border-gray-200 dark:border-gray-700 focus:bg-white dark:focus:bg-black" />
             </div>
             <Button className="w-full bg-[#0f1b2a] dark:bg-slate-800 text-white hover:bg-slate-700 dark:hover:bg-slate-700">
                আপনার গেম আইডির নাম চেক
                <span className="ml-2 bg-red-600 text-white text-xs px-2 py-0.5 rounded-md">সাহায্য লাগবে ?</span>
             </Button>
          </CardContent>
        </Card>

        <Card className="bg-white dark:bg-[#0f1b2a] dark:border-gray-800">
            <CardHeader>
                <CardTitle className="flex items-center">
                <span className="bg-[#0f1b2a] dark:bg-slate-700 text-white rounded-full h-6 w-6 flex items-center justify-center text-sm mr-2">3</span>
                <span className="text-gray-900 dark:text-white">Select one option</span>
                </CardTitle>
            </CardHeader>
            <CardContent>
                <RadioGroup value={selectedPayment} onValueChange={setSelectedPayment} className="grid grid-cols-2 gap-4">
                    <Label htmlFor="wallet" className={`flex flex-col items-center justify-center rounded-md border-2 p-4 cursor-pointer relative transition-colors ${ selectedPayment === 'wallet' ? 'border-primary' : 'border-muted'}`}>
                        <RadioGroupItem value="wallet" id="wallet" className="peer sr-only" />
                        <div className={`absolute top-2 right-2 w-6 h-6 flex items-center justify-center rounded-full transition-colors ${ selectedPayment === 'wallet' ? 'bg-red-500' : 'bg-gray-300'}`}>
                           {selectedPayment === 'wallet' && <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check"><path d="M20 6 9 17l-5-5"/></svg>}
                        </div>
                        <Image src="https://placehold.co/120x40.png" width={120} height={40} alt="Wallet" data-ai-hint="topupbuzz wallet logo" />
                        <span className="block w-full p-2 text-center bg-gray-200 dark:bg-gray-700 mt-2 rounded-b-md text-sm">Wallet Pay</span>
                    </Label>

                    <Label htmlFor="instant" className={`flex flex-col items-center justify-center rounded-md border-2 p-4 cursor-pointer transition-colors ${ selectedPayment === 'instant' ? 'border-primary' : 'border-muted'}`}>
                         <RadioGroupItem value="instant" id="instant" className="peer sr-only" />
                        <div className={`absolute top-2 right-2 w-6 h-6 flex items-center justify-center rounded-full transition-colors ${ selectedPayment === 'instant' ? 'bg-red-500' : 'bg-gray-300'}`}>
                           {selectedPayment === 'instant' && <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check"><path d="M20 6 9 17l-5-5"/></svg>}
                        </div>
                        <div className="flex gap-2">
                            <Image src="https://placehold.co/40x40.png" width={40} height={40} alt="bKash" data-ai-hint="bkash logo" />
                            <Image src="https://placehold.co/40x40.png" width={40} height={40} alt="Nagad" data-ai-hint="nagad logo" />
                            <Image src="https://placehold.co/40x40.png" width={40} height={40} alt="Rocket" data-ai-hint="rocket logo" />
                        </div>
                        <span className="block w-full p-2 text-center bg-gray-200 dark:bg-gray-700 mt-2 rounded-b-md text-sm">Instant Pay</span>
                    </Label>
                </RadioGroup>
                <div className="font-bangla space-y-2 mt-4 text-sm text-gray-800 dark:text-gray-300">
                    <div className="flex items-center gap-2">
                        <Info className="w-4 h-4" />
                        <span>আপনার অ্যাকাউন্ট ব্যালেন্স ৳ 0.00</span>
                        <RefreshCw className="w-4 h-4 cursor-pointer" />
                    </div>
                    <div className="flex items-center gap-2">
                        <Info className="w-4 h-4" />
                        <span>প্রোডাক্ট কিনতে আপনার প্রয়োজন ৳ {selectedPrice}</span>
                    </div>
                </div>
                <Button className="w-full mt-4 bg-[#0f1b2a] dark:bg-slate-800 text-white hover:bg-slate-700 dark:hover:bg-slate-700">Buy Now</Button>
            </CardContent>
        </Card>

        <Card className="bg-white dark:bg-[#0f1b2a] dark:border-gray-800 font-bangla">
            <CardHeader>
                <CardTitle className="text-gray-900 dark:text-white">Rules & Conditions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-gray-800 dark:text-gray-300">
                <p>⦿ শুধুমাত্র Bangladesh সার্ভারে ID Code দিয়ে টপ আপ হবে</p>
                <p>⦿ Player ID ভুল দিয়ে Diamond না পেলে TopUp Buzz কর্তৃপক্ষ দায়ী নয়</p>
                <p>⦿ Order কমপ্লিট হওয়ার পরেও আইডিতে ডাইমন্ড না গেলে চেক করার জন্য ID Pass দিতে হবে</p>
                <p>⦿ অর্ডার Cancel হলে কি কারণে তা Cancel হয়েছে তা অর্ডার হিস্টোরিতে দেওয়া থাকে অনুগ্রহ পূর্বক দেখে পুনরায় সঠিক তথ্য দিয়ে অর্ডার করবেন।</p>
            </CardContent>
        </Card>

      </main>

       <div className="fixed bottom-24 right-4 z-50">
          <Button size="icon" className="rounded-full bg-red-600 hover:bg-red-700 w-14 h-14">
              <Phone className="w-6 h-6" />
          </Button>
      </div>

      <footer className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm border-t border-gray-200 z-50 dark:bg-[#0f1b2a]/90 dark:border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-around items-center h-16">
            <Link href="/" className="flex flex-col items-center text-gray-600 hover:text-red-600 dark:text-gray-400 dark:hover:text-red-500">
              <HomeIcon className="w-6 h-6" />
              <span className="text-xs">Home</span>
            </Link>
            <a href="#" className="flex flex-col items-center text-gray-600 hover:text-red-600 dark:text-gray-400 dark:hover:text-red-500">
              <ShoppingBag className="w-6 h-6" />
              <span className="text-xs">Add Money</span>
            </a>
            <a href="#" className="flex flex-col items-center text-gray-600 hover:text-red-600 dark:text-gray-400 dark:hover:text-red-500">
              <ShoppingCart className="w-6 h-6" />
              <span className="text-xs">My Orders</span>
            </a>
            <a href="#" className="flex flex-col items-center text-gray-600 hover:text-red-600 dark:text-gray-400 dark:hover:text-red-500">
              <Code className="w-6 h-6" />
              <span className="text-xs">My Codes</span>
            </a>
            <a href="#" className="flex flex-col items-center text-gray-600 hover:text-red-600 dark:text-gray-400 dark:hover:text-red-500">
              <UserCircle className="w-6 h-6" />
              <span className="text-xs">My Account</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}