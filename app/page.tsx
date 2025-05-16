import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit, consectetur explicabo repellat ab nemo sapiente incidunt accusantium pariatur sed ipsa consequatur laboriosam quam amet quisquam voluptas architecto reiciendis optio repudiandae?</h1>
<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum, minus iste ad ipsam possimus nisi laborum et. Et at soluta quasi, ullam perspiciatis delectus voluptate possimus quis ratione, maiores ab.</p>
   sfdghjkl;djkl;
      </main>
   
    </div>
  );
}
