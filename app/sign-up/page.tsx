import { RedirectToSignUp } from "@clerk/nextjs/app-beta/client";

export default function SignUpPage() {
  return <RedirectToSignUp redirectUrl={"/dashboard"} />;
}
