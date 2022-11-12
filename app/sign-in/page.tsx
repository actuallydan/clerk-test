import { RedirectToSignIn } from "@clerk/nextjs/app-beta/client";

export default async function SignInPage() {
  return <RedirectToSignIn redirectUrl={"/dashboard"} />;
}
