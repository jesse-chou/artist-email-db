import { z } from "zod";

export const addArtistSchema = z.object({
  artistName: z.string().min(1, "Name cannot be blank"),
  managerEmail: z.string().email("Invalid email address"),
})

export const addFestivalSchema = z.object({
  festivalName: z.string().min(1, "Festival Name cannot be blank"),
  festivalStartDate: z.date({ invalid_type_error: "That's not a date!"}),
  festivalEndDate: z.date({ invalid_type_error: "That's not a date!"})
})