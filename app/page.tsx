import { ClientComponent } from "./client";

export default async function Page() {
  const d = new Date();

  return (
    <>
      <h1>Reproduction</h1>
      <ClientComponent d={d} data-superjson>
        <p>Client</p>
      </ClientComponent>
    </>
  );
}
