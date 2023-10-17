import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="w-full flex justify-around py-4 gap-12 items-center sticky">
      <div className="flex gap-2 place-items-center">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZdd6ifFOYNjId6us4wE71Hq81Ga8Cu5swt4cZvI2BOw9YB6ZRmV86lJwflaDTEyYfTQs&usqp=CAU"
          alt="logo"
          className="h-14 w-14 rounded-full"
        />
        <h1 className="text-3xl">AgroTech Rents</h1>
      </div>
      <div className="rounded-full flex place-items-center gap-6">
        <Link href={"/sign-in"} className="btn btn-accent">
          Sign in
        </Link>
        <Link href={"/sign-up"} className="btn btn-ghost">
          Sign Up
        </Link>
      </div>
    </nav>
  );
}
