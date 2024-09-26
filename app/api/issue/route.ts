import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import prisma from "@/prisma/client";

const createIssueSchema = z.object({
  title: z.string().min(1).max(255),
  description: z.string().min(1),
});

export async function POST(request: NextRequest) {
  // Parse the request body
  const body = await request.json();
  
  // Validate the request body
  const validation = createIssueSchema.safeParse(body);
  if (!validation.success) {
    // Return validation errors with a 400 status
    return NextResponse.json(validation.error.errors, { status: 400 });
  }

  // Create a new issue in the database
  const newIssue = await prisma.issue.create({
    data: {
      title: validation.data.title,
      description: validation.data.description,
    },
  });

  // Return the newly created issue with a 201 status
  return NextResponse.json(newIssue, { status: 201 });
}
