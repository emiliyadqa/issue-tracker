import prisma from "@/prisma/client";
import { error } from "console";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const createIssueSchema = z.object({
  title: z.string().min(3, "Title is required").max(255),
  description: z.string().min(1, "Description is required"),
});

export async function POST(response: NextRequest) {
  const body = await response.json();
  const validation = createIssueSchema.safeParse(body);

  if (!validation.success)
    return NextResponse.json(validation.error.format(), { status: 400 });

  const newIssue = await prisma.issue.create({
    data: { title: body.title, description: body.description },
  });

  return NextResponse.json(newIssue, { status: 201 });
}
