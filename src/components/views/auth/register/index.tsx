import Link from "next/link";
import styles from "./Register.module.scss";
import { useRouter } from "next/router";
import { FormEvent, useState } from "react";
import Input from "@/components/ui/input";
import Button from "@/components/ui/button";
import authServices from "@/sevices/auth";
import AuthLayout from "@/components/layouts/auth-layout";

export default function RegisterView() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const { push } = useRouter();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);
    setError("");
    const form = event.target as HTMLFormElement;
    const data = {
      email: form.email.value,
      fullname: form.fullname.value,
      phone: form.phone.value,
      password: form.password.value,
    };

    const result = await authServices.registerAccount(data);

    if (result.status === 200) {
      form.reset();
      setIsLoading(false);
      push("/auth/login");
    } else {
      setIsLoading(false);
      setError("Email is already registered");
    }
  }

  return (
    <AuthLayout
      title="Register"
      link="/auth/login"
      linkText="Already have an account? Sign in "
      error={error}
    >
      <form onSubmit={handleSubmit}>
        <Input type="email" label="Email" name="email" />
        <Input type="text" label="Fullname" name="fullname" />
        <Input type="number" label="Phone" name="phone" />
        <Input type="password" label="Password" name="password" />
        <Button type="submit" className={styles.register__button}>
          {isLoading ? "Loading..." : "Register"}
        </Button>
      </form>
    </AuthLayout>
  );
}
