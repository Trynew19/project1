import mongoose,{Schema,Document} from "mongoose";



export interface Message extends Document{
    content:string
    createdAt:Date
}

const MessageSchema:Schema<Message> = new Schema({
       content:{
        type:String,
        required:true
       },
       createdAt:{
        type:Date,
        required:true,
        default:Date.now
       }
})



export interface User extends Document{
    username:string,
    email:string,
    password:string,
    verifyCode:string,
    isverified:boolean,
    verifyCodeExpiry:Date,
    isAcceptingMessage:true,
    messages:Message[]
}


const UserSchema:Schema<User> = new Schema({
    username:{
     type:String,
     required:[true,"Please enter username is required !"],
     unique:true,
     trim:true,
     
    },
    email:{
     type:String,
     required:[true,"Please enter email is required !"],
     unique:true,
     match:[/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,"Please enter  valid email Addres !"]
    },
    password:{
     type:String,
     required:[true,"Please enter Password is required !"],
    },
    verifyCode:{
    type:String,
    required:[true,"Please enter VerifyCode is required !"],  
    },
    isverified:{
        type:Boolean,
        default:false
    },
    verifyCodeExpiry:{
        type:Date,
        required:[true,"Please enter Verify Code Expiry is required !"],  
 
    },
    isAcceptingMessage:{
      type:Boolean,
      default:true
    },
    messages:[MessageSchema]
})


const UserModel = (mongoose.models.User as mongoose.Model<User>) || mongoose.model<User>("User",UserSchema)

export default UserModel;