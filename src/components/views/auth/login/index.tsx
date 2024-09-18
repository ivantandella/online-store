import Link from "next/link";
import styles from "./Login.module.scss";
import { useRouter } from "next/router";
import { FormEvent, useState } from "react";
import { signIn } from "next-auth/react";
import Input from "@/components/ui/input";
import Button from "@/components/ui/button";

export default function LoginView() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const { push, query } = useRouter();

  const callbackUrl: any = query.callbackUrl || "/";

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);
    setError("");
    const form = event.target as HTMLFormElement;

    try {
      const res = await signIn("credentials", {
        redirect: false,
        email: form.email.value,
        password: form.password.value,
        callbackUrl,
      });

      if (!res?.error) {
        setIsLoading(false);
        form.reset();
        push(callbackUrl);
      } else {
        setIsLoading(false);
        setError("Email or password is incorrect");
      }
    } catch (error) {
      setIsLoading(false);
      setError("Email or password is incorrect");
    }
  }

  return (
    <div className={styles.login}>
      <h1 className={styles.login__title}>Login</h1>
      {error && <p className={styles.login__error}>{error}</p>}
      <div className={styles.login__form}>
        <form onSubmit={handleSubmit}>
          <Input name="email" label="Email" type="email" />
          <Input name="password" label="Password" type="password" />
          <Button type="submit" className={styles.login__form__button}>
            {isLoading ? "Loading..." : "Login"}
          </Button>
        </form>
        <hr className={styles.login__form__divider} />
        <div className={styles.login__form__other}>
          <Button
            type="button"
            className={styles.login__form__other__button}
            onClick={() => signIn("google", { callbackUrl, redirect: false })}
          >
            <i className="bx bxl-google" />
            Login with Google
          </Button>
        </div>
      </div>
      <p className={styles.login__link}>
        Don&apos;t have an account? Sign up{" "}
        <Link href={"/auth/register"}>here</Link>
      </p>
    </div>
  );
}
