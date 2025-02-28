import { RegisterFormSchema } from "@/lib/types";
import { NextResponse } from "next/server";

export async function post(req: Request, res: Response) {
  // get the form data from the request
  const body: unknown = req.json();

  // validate the form data
    const result = RegisterFormSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(result.error, { status: 400 });
    }
  return NextResponse.json(body);
}