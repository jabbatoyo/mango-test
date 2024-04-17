import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-1">
      <Link
        href={`/exercise1`}
        className="relative transition-all before:w-0 before:h-0 before:absolute before:top-[50%] before:left-[50%] before:translate-y-[-50%] before:translate-x-[-50%] before:bg-[rgba(18,19,20,.16)] before:transition-all before:duration-500
          hover:before:w-full hover:before:h-full"
      >
        <Image
          className="h-full object-cover"
          src="https://staticpages.mngbcn.com/visual/localhost/images/2024/04/she_landings_vestidos_1404.jpg"
          alt="normalRange"
          width={1000}
          height={700}
        />
        <h2 className="absolute text-xl text-white font-bold top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]">
          Normal Range
        </h2>
      </Link>
      <Link
        href={`/exercise2`}
        className="relative transition-all before:w-0 before:h-0 before:absolute before:top-[50%] before:left-[50%] before:translate-y-[-50%] before:translate-x-[-50%] before:bg-[rgba(18,19,20,.16)] before:transition-all before:duration-500
          hover:before:w-full hover:before:h-full"
      >
        <Image
          className="h-full object-cover text-white"
          src="https://staticpages.mngbcn.com/visual/localhost/images/2024/04/man_TRAJES_boglioli.jpg"
          alt="normalRange"
          width={1000}
          height={700}
        />
        <h2 className="absolute text-xl text-white font-bold top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]">
          Fixed Range
        </h2>
      </Link>
    </div>
  );
}
