import { PageProps } from "$fresh/server.ts";

export default function GreetPage(props: PageProps) {
  const { name } = props.params;
  console.log({ params: props });
  return (
    <main>
      <p>Greetings to you, {name}!</p>
    </main>
  );
}
