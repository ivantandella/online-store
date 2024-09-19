import { useRouter } from "next/router";
import styles from "./Sidebar.module.scss";
import Link from "next/link";
import Button from "@/components/ui/button";
import { signOut } from "next-auth/react";

type SidebarProps = {
  lists: {
    title: string;
    url: string;
    icon: string;
  }[];
};

export default function Sidebar(props: SidebarProps) {
  const { lists } = props;
  const { pathname } = useRouter();

  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebar__top}>
        <h1 className={styles.sidebar__top__title}>Admin Panel</h1>
        <div className={styles.sidebar__top__list}>
          {lists.map((list, index) => (
            <Link
              key={index}
              href={list.url}
              className={`${styles.sidebar__top__list__item} ${
                pathname === list.url && styles.sidebar__top__list__item__active
              }`}
            >
              <i
                className={`bx ${list.icon} ${styles.sidebar__top__list__item__icon}`}
              />
              <h4 className={styles.sidebar__top__list__item__title}>
                {list.title}
              </h4>
            </Link>
          ))}
        </div>
      </div>
      <div className={styles.sidebar__bottom}>
        <Button
          type="button"
          variant="secondary"
          onClick={() => signOut()}
          className={styles.sidebar__bottom__button}
        >
          Logout
        </Button>
      </div>
    </div>
  );
}
