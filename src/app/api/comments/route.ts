



// app/api/comments/route.ts
import { NextResponse } from 'next/server'
import { prisma } from "@/app/lib/prisma";



export async function POST(req: Request) {
  try {
    const { content, authorId, postId, parentId } = await req.json()
    
    const comment = await prisma.contentComment.create({
      data: {
        content,
        authorId,
        postId,
        parentId: parentId || null
      },
      include: {
        author: true
      }
    })

    // Update user's comment count
    await prisma.user.update({
      where: { id: authorId },
      data: { totalCommentsPosted: { increment: 1 } }
    })

    return NextResponse.json(comment)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to post comment' }, { status: 500 })
  }
}