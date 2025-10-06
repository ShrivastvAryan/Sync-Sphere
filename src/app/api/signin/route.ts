// app/api/auth/login/route.ts
import { supabaseAdmin } from "@/lib/supabaseAdmin";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  try {
    // Get user_id and password from request
    const { user_id, password } = (await req.json()) as { user_id: string; password: string };

    if (!user_id || !password) {
      return NextResponse.json({ error: "Missing user_id or password" }, { status: 400 });
    }

    // Fetch user from Supabase
    const { data: user, error } = await supabaseAdmin
      .from("User-Data")
      .select("*")
      .eq("user_id", user_id)
      .single();

    if (error || !user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Compare password
    const isValid = bcrypt.compareSync(password, user.password);

    if (!isValid) {
      return NextResponse.json({ error: "Invalid password" }, { status: 401 });
    }

    // Success response
    return NextResponse.json({
      success: true,
      user: {
        user_id: user.user_id,
        name: user.name,
        age: user.age,
        country: user.country,
        state: user.state,
        city: user.city,
        interest: user.interest,
        hobbies: user.hobbies,
      },
    });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
