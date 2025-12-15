import { inngest } from "@/inngest/client";


export async function POST(req: Request) {
  const body = await req.json();

  await inngest.send({
    name: "tamasha/roast.requested",
    data: {
      text: body.text,
      tier: body.tier,
    },
  });

  return Response.json({ status: "queued" });
}
