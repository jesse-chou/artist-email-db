"use client";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { AddFestivalFormState } from "@/lib/server-actions/addFestival";
import addFestival from "@/lib/server-actions/addFestival";
import { useFormState } from "react-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { addFestivalSchema } from "@/lib/forms/schema";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "./ui/calendar";
import { Card, CardContent } from "./ui/card";

const initialState: AddFestivalFormState = {
  code: undefined,
  message: "",
  errors: undefined,
  fieldValues: {
    festivalName: "",
    festivalStartDate: new Date(),
    festivalEndDate: new Date(),
  },
};

export function FestivalForm() {
  const methods = useForm<z.infer<typeof addFestivalSchema>>({
    resolver: zodResolver(addFestivalSchema),
    defaultValues: {
      festivalName: "",
      festivalStartDate: new Date(0),
      festivalEndDate: new Date(0),
    },
  });

  const [state, formAction] = useFormState(addFestival, initialState);

  return (
    <Card>
      <CardContent>
        <Form {...methods}>
          <form action={formAction} className="space-y-8">
            <FormField
              control={methods.control}
              name="festivalName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Festival Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Festival Name" {...field} />
                  </FormControl>
                  <FormDescription />
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={methods.control}
              name="festivalStartDate"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Festival Start Date</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-[240px] pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        required
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) => date > new Date()}
                        initialFocus
                        fromMonth={new Date()}
                        toMonth={new Date()}
                      />
                    </PopoverContent>
                  </Popover>
                  <FormDescription />
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={methods.control}
              name="festivalEndDate"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Festival End Date</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-[240px] pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        required
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) =>
                          date > new Date() || date < new Date("1900-01-01")
                        }
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormDescription />
                  <FormMessage />
                </FormItem>
              )}
            />

            {state.message}

            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
