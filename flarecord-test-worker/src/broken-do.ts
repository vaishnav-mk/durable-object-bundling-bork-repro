import { DurableObject } from "cloudflare:workers";
import { EmbedBuilder } from "discord.js";

export class BrokenDurableObject extends DurableObject<void> {
  constructor(state: DurableObjectState<void>) {
    super(state);
    // Just referencing the import ensures it's bundled
    console.log("EmbedBuilder:", EmbedBuilder);
  }
}

