import { signIn, signOut, useSession } from "next-auth/react";
import styles from "./Navbar.module.scss";

export default function Navbar() {
  const { data } = useSession();
  return (
    <div className={styles.navbar}>
      <button
        className={styles.navbar__button}
        onClick={() => (data ? signOut() : signIn())}
      >
        {data ? "Logout" : "Login"}
      </button>
    </div>
  );
}
