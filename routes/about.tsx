import { Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  async GET(req, ctx) {
    console.log("Before");
    const resp = await ctx.render();
    resp.headers.set("X-Custom-Header", "Hello");
    console.log("After", resp);
    return resp;
  },
};

export default function AboutPage() {
  return (
    <main>
      <h1>About</h1>
      <p>This is the about page.</p>
    </main>
  );
}
