/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import Link from "next/link";

export default function Index() {
  return (
    <div className="flex justify-center items-center bg-teal-800">
      <div className=" relative items-center flex h-screen  max-h-860-px max-w-screen-2xl">
        <img
          className=""
          src="/img/logoBlanc.png"
          alt="..."
        />

      </div>
      <Link href="/indexSecond">
          <img src="/img/flech2.png" alt="logo" className="h-8  absolute " style={{
            right:'0',
          }} />
        </Link>
    </div>
  );
}
