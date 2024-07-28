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
import addArtist, { AddArtistFormState } from "@/lib/server-actions/addArtist";
import { useFormState } from "react-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { addArtistSchema } from "@/lib/forms/schema";
import { Card, CardContent } from "./ui/card";

const initialState: AddArtistFormState = {
  code: undefined,
  message: "",
  errors: undefined,
  fieldValues: {
    artistName: "",
    managerEmail: "",
  },
};

export function ArtistForm() {
  const methods = useForm<z.infer<typeof addArtistSchema>>({
    resolver: zodResolver(addArtistSchema),
    defaultValues: {
      artistName: "",
      managerEmail: "",
    },
  });

  const [state, formAction] = useFormState(addArtist, initialState);

  return (
    <>
      <Form {...methods}>
        <form action={formAction} className="space-y-8">
          <FormField
            control={methods.control}
            name="artistName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Artist Name</FormLabel>
                <FormControl>
                  <Input placeholder="Artist Name" {...field} />
                </FormControl>
                <FormDescription />
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={methods.control}
            name="managerEmail"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Manager Email</FormLabel>
                <FormControl>
                  <Input placeholder="Manager Email" {...field} />
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
    </>
  );
}
