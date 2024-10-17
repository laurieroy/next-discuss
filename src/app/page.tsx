import { Button } from "@nextui-org/react";
import * as action from "@/actions";
import { auth } from "@/auth";
import Profile from "@/components/profile";

export default async function Home() {
  const session = await auth();

  if (session) {
    // return <div>signed in</div>;
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <form action={action.signIn}>
        <Button type="submit">Sign In</Button>
      </form>

      <form action={action.signOut}>
        <Button type="submit">Sign Out</Button>
      </form>
      {session?.user ? <div>{JSON.stringify(session.user)}</div> : <div>signed out</div>}
      <Profile />
    </main>
  );
}
