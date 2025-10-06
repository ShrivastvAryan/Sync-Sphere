import { supabaseAdmin } from "@/lib/supabaseAdmin";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function SignIn(req: Request) {
  try {
    const {
      user_id,
      name,
      age,
      country,
      state,
      city,
      interest,
      hobbies,
      password,
    } = (await req.json()) as {
      user_id: string;
      name: string;
      age: number;
      country: string;
      state: string;
      city: string;
      interest: string;
      hobbies: string;
      password: string;
    };

    // Check for missing fields
    if (!user_id || !name || !age || !country || !state || !city || !interest || !hobbies || !password) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    // Check if user already exists
    const { data: existingUser, error: fetchError } = await supabaseAdmin
      .from("User-Data")
      .select("user_id")
      .eq("user_id", user_id)
      .limit(1)
      .single();

    if (fetchError && fetchError.code !== "PGRST116") {
      // PGRST116 = no rows found, safe to ignore
      throw fetchError;
    }

    if (existingUser) {
      return NextResponse.json({ error: "User ID already exists" }, { status: 400 });
    }

    // Hash the password
    const hashedPassword = bcrypt.hashSync(password, 10);

    // Insert new user
    const { data, error: insertError } = await supabaseAdmin
      .from("User-Data")
      .insert([
        { user_id, name, age, country, state, city, interest, hobbies, password: hashedPassword },
      ]);

    if (insertError) throw insertError;

    return NextResponse.json({
      success: true,
      data: { user_id, name, age, country, state, city, interest, hobbies },
    });

  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}


