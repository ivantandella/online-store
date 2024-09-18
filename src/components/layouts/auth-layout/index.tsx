import styles from "./AuthLayout.module.scss";
import Link from "next/link";

type AuthLayoutProps = {
  error?: string;
  title?: string;
  children: React.ReactNode;
  link: string;
  linkText?: string;
};

export default function AuthLayout(props: AuthLayoutProps) {
  const { error, title, children, link, linkText } = props;
  return (
    <div className={styles.auth}>
      <h1 className={styles.auth__title}>{title}</h1>
      {error && <p className={styles.auth__error}>{error}</p>}
      <div className={styles.auth__form}>{children}</div>
      <p className={styles.auth__link}>
        {linkText}
        <Link href={link}>here</Link>
      </p>
    </div>
  );
}
