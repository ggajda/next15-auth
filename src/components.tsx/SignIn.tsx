import { signIn } from "@/auth";

export function SignIn() {
  return (
    <form
      action={async () => {
        "use server";
        //await signIn("github", { redirectTo: "/posts" });
        await signIn("github");
      }}
    >
      <button style={{ padding: 20 }} type="submit">
        Signin with GitHub
      </button>
    </form>
  );
}
