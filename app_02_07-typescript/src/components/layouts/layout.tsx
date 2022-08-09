import MainNav from "./main-nav";
import classes from "./Layout.module.css";

const Layout = (props: any) => {
  return (
    <div>
      <MainNav />
      <main className={classes.main}>{props.children}</main>
    </div>
  );
};

export default Layout;
