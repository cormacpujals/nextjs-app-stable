import {NextRequest} from 'next/server';

export async function GET(req: NextRequest) {
  console.log("get request")
  return new Response("200 OK")
}
export async function POST() {
  console.log("post request")
}