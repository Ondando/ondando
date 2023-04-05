import { IUser } from "interface";

export default async function Home() {
  const res = await fetch("http://localhost:3001/user");
  const data: IUser[] = await res.json();
  return (
    <main>
      <h1 className="text-3xl font-bold underline">
        {data ? <>{data[0]._id}</> : "sei la"}
      </h1>
    </main>
  );
}
