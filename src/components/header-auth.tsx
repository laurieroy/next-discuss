"use client";

import { useSession, signOut as nextAuthSignOut } from "next-auth/react";
import * as actions from "@/actions";
import {
  Avatar,
  Button,
  NavbarItem,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@nextui-org/react";

export default function HeaderAuth() {
  const session = useSession();

  let authContent: React.ReactNode;
  if (session.status === "loading") {
    authContent = null;
  } else if (session.data?.user) {
    authContent = (
      <Popover placement="left">
        <PopoverTrigger>
          <Avatar src={session.data.user.image || ""} size="lg" />
        </PopoverTrigger>
        <PopoverContent>
          <div className="p-4">
            {/* work around for https://github.com/nextauthjs/next-auth/issues/11125 */}
            <form
              action={async () => {
                await actions.signOut();
                await nextAuthSignOut({ redirect: false });
              }}
            >
              <Button type="submit">Sign Out</Button>
            </form>
            {/* <form action={actions.signOut}>
              <Button type="submit">Sign Out</Button>
            </form> */}
          </div>
        </PopoverContent>
      </Popover>
    );
  } else {
    authContent = (
      <>
        <NavbarItem>
          <form action={actions.signIn}>
            <Button type="submit" color="secondary" variant="bordered">
              Sign In
            </Button>
          </form>
        </NavbarItem>

        <NavbarItem>
          <form action={actions.signIn}>
            <Button type="submit" color="primary" variant="flat">
              Sign Up
            </Button>
          </form>
        </NavbarItem>
      </>
    );
  }

  return authContent;
}
