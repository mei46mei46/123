import { Outlet, Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

const Layout = () => {
  return (
    <>
      <Container maxWidth="sm">
        <div class="navbar">
          <Link to="/">Home</Link>
          <Link to="/contact">About Us</Link>
          <Link to="/NoPage">Register</Link>
          <Link to="/NoPage">Full Table</Link>
        </div>
      </Container>
      <Outlet />
    </>
  );
};

export default Layout;
