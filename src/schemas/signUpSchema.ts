import {z} from "zod"


export const usernameValidation = z

.string()
.min(5,"Username must be 5 charcters")
.max(15,"Username must be no more than  15 charcters")
.regex(/^[a-zA-Z][a-zA-Z0-9_-]{2,15}$/, "Username must start with a letter and contain only letters, numbers, underscores, or hyphens");


export const signUpSchema = z.object({
    username:usernameValidation,
    email:z.string().email({message:"invalid Email Address"}),
    password:z.string().min(5,{message:"Password must be 5 charcters"})
})