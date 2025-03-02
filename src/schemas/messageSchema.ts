import { z} from "zod"

export const  MessageSchema = z.object({
    content:z
    .string()
    .min(10,{message:'Content must be atleast 10 charcaters '})
    .max(300,{message:'Content must be no longer than 300  charcaters '})
    
})