"use server"

import { festivalTable } from "@/db/schema"
import { addFestivalSchema } from "../forms/schema"
import { db } from "@/db"
import { ZodError } from "zod"

export type AddFestivalFormState = {
  code: number | undefined;
  message?: string;
  errors?: any;
  fieldValues: {
    festivalName: string,
    festivalStartDate: Date | null,
    festivalEndDate: Date | null 
  }
}

export default async function addFestival(prevState: AddFestivalFormState, formData: FormData): Promise<AddFestivalFormState> {
  try {
    const festivalData = addFestivalSchema.parse({
      festivalName: formData.get('festivalName'),
      festivalStartDate: formData.get('festivalStartDate'),
      festivalEndDate: formData.get('festivalEndDate')
    })

    await db.insert(festivalTable).values({
      festivalName: festivalData.festivalName,
      festivalStartDate: festivalData.festivalStartDate,
      festivalEndDate: festivalData.festivalEndDate
    })

    return {
      code: 200,
      message: 'Festival successfully added',
      fieldValues: festivalData
    }

  } catch (e) {
    const error = e as ZodError
    console.log('e', e)
    return {
      code: 400, 
      errors: error.format(),
      fieldValues: {
        festivalName: formData.get('festivalName') as string,
        festivalStartDate: formData.get('festivalStartDate'),
        festivalEndDate: formData.get('festivalEndDate')
      }
    }
  }
}