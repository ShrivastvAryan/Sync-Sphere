import { supabaseAdmin } from "@/lib/supabaseAdmin";
import { NextResponse } from "next/server";
import { AxiosError } from "axios";


export async function POST (req:Request){
    try {
        const{user_id,name,age,country,state,city,interest,hobbies}=await req.json() as 
        {user_id:string, name:string, age:number, country:string, state:string, city:string, interest:string, hobbies:string}

        if(!user_id||!name|| !age|| !country|| !state || !city|| !interest|| !hobbies){
             return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
        }

        const {data,error}=await supabaseAdmin
        .from('User-Data')
        .insert([{user_id,name,age,country,state,city,interest,hobbies}])

        if (error) throw error

      return NextResponse.json({
  success: true,
  data: {
    user_id,
    name,
    age,
    country,
    state,
    city,
    interest,
    hobbies,
  },
})

    } catch (error:AxiosError|any) {
        return NextResponse.json({error:error.message},{status:500})
    }
}