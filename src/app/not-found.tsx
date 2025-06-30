import Link from "next/link";

export const metadata = {
  title: "Page Not Found",
};
export default function NotFound() {
  return (
    <div className="px-2 w-full ">
      <div className="h-screen mx-auto flex flex-col justify-center items-center gap-4 py-4">
        <h2 className="text-2xl">Page Not Found!</h2>
        <p>Could not find the requested resource</p>
        <Link href="/" className="hover:text-gray-500">Return Home</Link>
      </div>
    </div>
  );
}
