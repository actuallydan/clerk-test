import { auth, currentUser } from "@clerk/nextjs/app-beta";

export default async function Dashboard() {
  //   const { userId } = auth();
  const user = await currentUser();

  return <div>Welcome, {user?.firstName}</div>;
}
