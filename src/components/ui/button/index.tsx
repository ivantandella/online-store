import styles from "./Button.module.scss";

type ButtonProps = {
  type: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: string;
  className?: string;
};

export default function Button(props: ButtonProps) {
  const { type, onClick, children, variant = "primary", className } = props;
  return (
    <button
      className={`${styles.button} ${styles[variant]} ${className}`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
