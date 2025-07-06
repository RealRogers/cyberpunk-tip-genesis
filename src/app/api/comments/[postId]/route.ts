
// app/api/comments/route.ts
import { NextResponse } from 'next/server'
import { prisma } from "@/app/lib/prisma";


// app/api/comments/[postId]/route.ts
export async function GET(req: Request, { params }: { params: { postId: string } }) {
  try {
    const comments = await prisma.contentComment.findMany({
      where: { postId: params.postId },
      include: {
        author: true,
        likes: true
      },
      orderBy: { createdAt: 'desc' }
    })
    return NextResponse.json(comments)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch comments' }, { status: 500 })
  }
}