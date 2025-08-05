"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { UserCircle2 } from "lucide-react";

const formSchema = z.object({
  playerId: z.string().min(8, {
    message: "Player ID must be at least 8 characters.",
  }).max(16, {
    message: "Player ID must not be longer than 16 characters.",
  }).regex(/^\d+$/, {
    message: "Player ID must contain only numbers."
  }),
});

export function FreeFireForm() {
  const { toast } = useToast()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      playerId: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast({
      title: "ID Submitted for Verification",
      description: (
        <div className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <p className="text-white">Player ID: {values.playerId}</p>
        </div>
      ),
    });
  }

  return (
    <Card className="shadow-lg border-2 border-primary/20">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-2xl font-headline">
          <UserCircle2 className="h-7 w-7 text-primary" />
          Player Information
        </CardTitle>
        <CardDescription>Enter your Free Fire Player ID to continue.</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="playerId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Player ID</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your Player ID" {...field} />
                  </FormControl>
                  <FormDescription>
                    Your game ID is used to credit the diamonds.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">Verify ID</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
