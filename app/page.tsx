import Image from "next/image";
import Link from "next/link";
//import styles from "./page.module.css";

export default function Home() {

  const v = ["HTML", "CSS", "JS"];

  return (
    <>
      <h1>Olá, Matheus!</h1>
      {
        v.map(e => (<p>{e}</p>))
      }
      <Link href="/teste">
        <Image
          src="/ufsj.jpg"
          alt="UFSJ LOGO"
          height={200}
          width={300}
        />
      </Link>
    </>
  );
}
