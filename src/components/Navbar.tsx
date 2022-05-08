import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { ButtonGroup, styled } from "@mui/material";
import Link from "../Link";
import iLogo from "../../public/Logo.png";
import Image from "next/image";
import { useUser } from "@auth0/nextjs-auth0";

const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);

export default function Navbar() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  if (user) {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed">
          <Toolbar>
            <Link href={{ pathname: "/" }} sx={{ flexGrow: 1, ml: 16 }}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Image src={iLogo} height={"40"} width={"60"} />
                <Typography variant="h6" color="black" sx={{ ml: 2 }}>
                  VISIOT
                </Typography>
              </Box>
            </Link>
            <h3 >Wellcome {user.nickname}</h3>
            <Button
              href="/console"
              color="secondary"
              variant="contained"
              sx={{ ml: 4 }}
            >
              Console
            </Button>
            <Button
              href="/api/auth/logout"
              color="inherit"
              variant="contained"
              sx={{ mx: 4 }}
            >
              Logout
            </Button>
          </Toolbar>
        </AppBar>
        <Offset />
      </Box>
    );
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <Link href={{ pathname: "/" }} sx={{ flexGrow: 1, ml: 16 }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Image src={iLogo} height={"25"} width={"40"} />
              <Typography variant="h6" color="black" sx={{ ml: 2 }}>
                VISIOT
              </Typography>
            </Box>
          </Link>

          <Button
            href="/api/auth/login"
            color="secondary"
            variant="contained"
            sx={{ mr: 2 }}
          >
            Entry
          </Button>
        </Toolbar>
      </AppBar>
      <Offset />
    </Box>
  );
}
