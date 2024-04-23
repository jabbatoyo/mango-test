"use client";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
//Components
import Range from "../RangeComponent";
import Sizes from "../Sizes";
import RangeComponent from "../RangeComponent";

function Header() {
  const pathName = usePathname();
  const rangeNormal = pathName === "/exercise1";

  return (
    <div className="bg-white sticky w-full top-0 left-0 z-10">
      <div className="flex items-center justify-center p-[5px] border-solid border-[#d7d7d8] border-b-[1px]">
        <p className="text-black leading-5 normal-case text-xs">
          Envío gratis desde 30 € - Paga en 3 meses 0% TAE
        </p>
      </div>
      <div className="flex justify-center items-center p-[10px]">
        <Link href={"/"} className="outline-none">
          <Image
            className="w-full h-[26px]"
            src="https://st.mngbcn.com/images/headerNew/logos/mango.svg"
            alt="mango-logo"
            width={100}
            height={100}
          />
        </Link>
      </div>
      {pathName !== "/" &&
        (pathName === "/exercise1" || pathName === "/exercise2") && (
          <>
            {rangeNormal && (
              <RangeComponent type="normal" minRange={0} maxRange={500} />
            )}
            {!rangeNormal && (
              <RangeComponent
                type="fixed"
                rangeValues={[
                  10.99, 30.99, 40.99, 50.99, 90.99, 100.99, 200.99, 300.99,
                  400.99, 500.99,
                ]}
              />
            )}
            <Sizes />
          </>
        )}
    </div>
  );
}

export default Header;
