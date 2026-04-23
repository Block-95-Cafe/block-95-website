import process from "process";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const response = await fetch(`${process.env.API_URL}/menu`);

  if (!response.ok) {
    return res.status(response.status).json({ error: "Failed to fetch menu" });
  }

  const data = await response.json();
  return res.status(200).json(data);
}
