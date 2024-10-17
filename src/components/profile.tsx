import { auth } from "@/auth";
import { useSession } from "next-auth/react";

export default async function Profile() {
  const session = await auth();
  console.log(session);
  if (session?.user) {
    return <div>From client: {JSON.stringify(session.user)} is signed in</div>;
  }
  return <div>From client: user is NOT signed in</div>;
}
