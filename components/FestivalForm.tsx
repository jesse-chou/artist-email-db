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

const initialState: AddFestivalFormState = {
  code: undefined,
  message: "",
  errors: undefined,
  fieldValues: {
    festivalName: "",
    festivalStartDate: new Date(0),
    festivalEndDate: new Date(0),
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

        {state.message}

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
