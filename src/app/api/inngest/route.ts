
import { inngest } from "@/inngest/client";
import { generateRoast } from "@/lib/generateRoast";

export const roastFunction = inngest.createFunction(
  { id: "tamasha-generate-roast" },
  { event: "tamasha/roast.requested" },

  async ({ event, step }) => {
    const { text, tier } = event.data;

    const roast = await step.run("generate roast", async () => {
      return await generateRoast(text, tier);
    });

    return { roast };
  }
);