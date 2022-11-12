// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { getAuth } from "@clerk/nextjs/server";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { userId } = getAuth(req);

  console.log(userId);
  res.status(200).json({ name: userId })
}
