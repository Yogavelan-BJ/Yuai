import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex justify-center self-center h-screen p-10">
      <SignIn />
    </div>
  );
}
