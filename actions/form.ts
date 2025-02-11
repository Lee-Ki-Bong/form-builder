"use server"

import prisma from "@/lib/prisma"
import { currentUser } from "@clerk/nextjs/server"

class UserNotFoundError extends Error {
  constructor() {
    super("User not found")
  }
}

// 사용자의 폼 통계를 가져오는 함수
export async function GetFormStats() {
  const user = await currentUser()
  if (!user) {
    throw new UserNotFoundError() // 사용자를 찾을 수 없을 때 에러 발생
  }

  const stats = await prisma.form.aggregate({
    where: {
      userId: user.id
    },
    _sum: {
      visits: true,
      submissions: true
    }
  })

  const visits = stats._sum.visits || 0 // 방문 수
  const submissions = stats._sum.submissions || 0 // 제출 수
  const submissionRate = visits > 0 ? (submissions / visits) * 100 : 0 // 제출 비율
  const bounceRate = visits > 0 ? 100 - submissionRate : 0 // 이탈률

  return {
    visits,
    submissions,
    submissionRate,
    bounceRate
  }
}
