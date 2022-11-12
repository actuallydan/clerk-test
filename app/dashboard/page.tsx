import { auth, currentUser } from "@clerk/nextjs/app-beta";
import SignOutButton from "../../components/Logout";

export default async function Dashboard() {
    // const { userId } = auth();
  const user = await currentUser();

  return <div>
    <p>Welcome, {user?.firstName}</p>
    <SignOutButton />
  </div>;
}
