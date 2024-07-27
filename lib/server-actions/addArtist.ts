"use server"

import { artistTable } from "@/db/schema"
import { addArtistSchema } from "../forms/schema"
import { db } from "@/db"
import { ZodError } from "zod"

export type AddArtistFormState = {
  code: number | undefined;
  message?: string;
  errors?: any;
  fieldValues: {
    artistName: string,
    managerEmail: string
  }
};

export default async function addArtist(prevState: AddArtistFormState, formData: FormData): Promise<AddArtistFormState> {
  try { 
    const validatedFields = addArtistSchema.parse({
      artistName: formData.get('artistName'),
      managerEmail: formData.get('managerEmail')
    })

    await db.insert(artistTable).values({
      artistName: validatedFields.artistName,
      managerEmail: validatedFields.managerEmail
    })

    return {
      code: 200,
      message: "Artist successfully added",
      fieldValues: validatedFields
    }
  } catch (e) {
    const error = e as ZodError
    console.log('e', e)
    return {
      code: 400, 
      errors: error.format(),
      fieldValues: {
        artistName: formData.get('artistName') as string,
        managerEmail: formData.get('managerEmail') as string
      }
    }
  }
}