import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 15000);
  });

  return (
    // <div className='not-found'>
    //     <h1>404</h1>
    //     <Link href='/'>←</Link>
    // </div>
    <>
      <h1 className="h1404">404</h1>

      <div className="frame">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="caps">
        <img src="http://ademilter.com/caps.png" alt="" />
      </div>
      <canvas id="canvas"></canvas>
    </>
  );
};

export default NotFound;
