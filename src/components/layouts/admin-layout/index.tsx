import Sidebar from "@/components/fragments/sidebar";
import styles from "./AdminLayout.module.scss";

type AdminLayoutProps = {
  children: React.ReactNode;
};

const listSidebarItem = [
  {
    title: "Dashboard",
    url: "/admin",
    icon: "bxs-dashboard",
  },
  {
    title: "Products",
    url: "/admin/products",
    icon: "bxs-box",
  },
];

export default function AdminLayout(props: AdminLayoutProps) {
  const { children } = props;
  return (
    <div className={styles.admin}>
      <Sidebar lists={listSidebarItem} />
      {children}
    </div>
  );
}
