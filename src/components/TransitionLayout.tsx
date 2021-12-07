import * as React from "react";
import Container, { ContainerProps } from "@mui/material/Container";
import WagonSideBar from "./WagonSideBar";
import WagonAppBar from "./WagonAppBar";
import { styled } from "@mui/material/styles";

const CustomizedContainer = styled(Container)<ContainerProps>(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  height: "100vh",

  [theme.breakpoints.up("lg")]: {
    maxWidth: "unset",
  },
}));

interface LayoutProps {
  children: React.ReactNode;
}

export default function TransitionLayout({ children }: LayoutProps) {
  return (
    <>
      <CustomizedContainer disableGutters>
        <WagonSideBar />
        <WagonAppBar />
        {children}
      </CustomizedContainer>
    </>
  );
}
