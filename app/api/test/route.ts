import { headers } from "next/headers";
import { NextResponse } from "next/server";

import { connectToDatabase } from "@/lib/database/mongoose";
import { createUser, deleteUser, updateUser } from "@/lib/actions/user.actions";

export async function POST(){
    // await connectToDatabase();
    const user = {  
        clerkId:  2 as any,
        email: "vinh@gmail",
        username: "Vinh",
        firstName: "VIng",
        lastName: "VInh",
        photo: "kasjbckajsbcbaco",
      };
      const newUser = await createUser(user);
      return NextResponse.json({ message: "OK", user: newUser });
     
   
}
export async function GET(){
  
      return NextResponse.json({ message: "OK", user: "snlkancsnsca"});
     
   
}