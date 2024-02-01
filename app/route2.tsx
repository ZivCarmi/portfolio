import { NextApiResponse } from "next";
import { NextRequest, userAgent } from "next/server";

export const GET = (request: NextRequest, response: NextApiResponse) => {
  const { device } = userAgent(request);

  return Response.json(device);
};
