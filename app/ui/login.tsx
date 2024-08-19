"use client"
import Link from "next/link";
import styles from "./ui.module.css";
import { useSession } from "next-auth/react";

export default function Login() {

  const session = useSession();

  return (
    <div className={styles.login}>
      <Link href="/usuario/forms/lgn">
        {session.data ? "☺ " + session.data.user!.name : "☻ Login"}
      </Link>
    </div>
  );

}

