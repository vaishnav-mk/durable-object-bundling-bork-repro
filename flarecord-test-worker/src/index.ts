import { BrokenDurableObject } from "./broken-do";


export default {
  async fetch(): Promise<Response> {
    return new Response("Test worker", {
      headers: { "Content-Type": "text/plain" }
    });
  }
};

export { BrokenDurableObject };
