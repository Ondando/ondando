import { IHello } from "interface";

export default async function Home() {
  const res = await fetch("http://localhost:3001/");
  const data: IHello = await res.json();
  return (
    <main>
      <h1 className="text-3xl font-bold underline">
        {data ? <>{data.hello}</> : "sei la"}
      </h1>
    </main>
  );
}
