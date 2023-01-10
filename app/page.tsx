import { cache } from "react";

const getDataFromSomewhere = cache(async (page: number) => {
  await new Promise((resolve) => setTimeout(resolve, 100));
  return { page };
});

export default async function Page({
  searchParams: { page = "0" } = {},
}: {
  searchParams?: { page?: string };
}) {
  const result = await getDataFromSomewhere(Number(page));
  return (
    <>
      <h1>Reproduction</h1>
      <p>Page: {result.page}</p>
    </>
  );
}
