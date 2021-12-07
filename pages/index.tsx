import * as React from "react";
import NextLink from "next/link";
import Typography from "@mui/material/Typography";
import Box, { BoxProps } from "@mui/material/Box";
import Grid, { GridProps } from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Avatar, { AvatarProps } from "@mui/material/Avatar";
import { styled } from "@mui/material/styles";
import theme from "../src/theme";

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    cyan: true;
  }
}
const LOGO_PATH: string = "/images/logo_main.png";

const CustomizedRootGrid = styled(Grid)<GridProps>(({ theme }) => ({
  alignItems: "stretch",
  height: "100%",

  [theme.breakpoints.down("lg")]: {
    justifyContent: "space-evenly",
  },
  [theme.breakpoints.up("lg")]: {
    justifyContent: "space-around",
  },
}));
const CustomizedLeftSideGrid = styled(Grid)<GridProps>(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "space-between",
  zIndex: 1,

  [theme.breakpoints.only("xs")]: {
    marginLeft: "10px",
    marginRight: "10px",
  },
}));
const CustomizedRightSideGrid = styled(Grid)<GridProps>(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 0,

  [theme.breakpoints.down("md")]: {
    position: "absolute",
    left: "auto",
    height: "90%",
    opacity: ".15",
  },
}));
const CustomizedResponsiveMarginedBox = styled(Box)<BoxProps>(({ theme }) => ({
  paddingLeft: "10px",
  paddingRight: "10px",
  marginLeft: "120px",

  [theme.breakpoints.only("xs")]: {
    marginLeft: "30px",
  },
  [theme.breakpoints.only("sm")]: {
    marginLeft: "30px",
  },
}));
const CustomizedAvatarBox = styled(Box)<BoxProps>({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  backgroundColor: "transparent",
});
const CustomizedAvatar = styled(Avatar)<AvatarProps>({
  width: "100%",
  maxWidth: 500,
  height: "unset",
  borderRadius: 0,
});

export default function Index() {
  return (
    <CustomizedRootGrid container direction="row" columns={12}>
      <CustomizedLeftSideGrid item xs={12} sm={12} md={5} lg={5} xl={5} my={3}>
        <Box>
          <Typography
            variant="inherit"
            component="p"
            gutterBottom
            mb={0}
            ml={2}
            sx={{
              fontFamily: "'URW Chancery L', cursive",
              fontStyle: "italic",
              color: "#515152",
              fontSize: ".9rem",
            }}
            data-testid="index-content-opening-html"
          >
            &lt;html&gt;
          </Typography>
          <Typography
            variant="inherit"
            component="p"
            gutterBottom
            mb={0}
            ml={4}
            sx={{
              fontFamily: "'URW Chancery L', cursive",
              fontStyle: "italic",
              color: "#515152",
              fontSize: ".9rem",
            }}
            data-testid="index-content-opening-body"
          >
            &lt;body&gt;
          </Typography>
        </Box>
        <CustomizedResponsiveMarginedBox>
          <Typography
            variant="inherit"
            component="p"
            gutterBottom
            mb={0}
            sx={{
              color: "#515152",
              fontFamily: "'URW Chancery L', cursive",
              fontSize: ".9rem",
              fontStyle: "italic",
            }}
            data-testid="index-content-opening-header"
          >
            &lt;h1&gt;
          </Typography>
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            mb={0}
            sx={{ fontWeight: 700 }}
            data-testid="index-content-header-part-one"
          >
            Hi,
          </Typography>
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            mb={0}
            sx={{ fontWeight: 700 }}
            data-testid="index-content-header-part-two"
          >
            {`I'm Metehan,`}
          </Typography>
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            mb={0}
            sx={{ fontWeight: 700 }}
            data-testid="index-content-header-part-three"
          >
            Web Developer
          </Typography>
          <Typography
            variant="inherit"
            component="p"
            gutterBottom
            mt={0}
            mb={0}
            sx={{
              color: "#515152",
              fontFamily: "'URW Chancery L', cursive",
              fontStyle: "italic",
              fontSize: ".9rem",
            }}
            data-testid="index-content-closing-header"
          >
            &lt;/h1&gt;
          </Typography>
          <Typography
            variant="inherit"
            component="p"
            gutterBottom
            mb={0}
            mt={2}
            sx={{
              display: "inline-flex",
              fontFamily: "'URW Chancery L', cursive",
              fontStyle: "italic",
              color: "#515152",
              fontSize: ".9rem",

              [theme.breakpoints.only("xs")]: {
                display: "flex",
              },
            }}
            data-testid="index-content-opening-paragraph"
          >
            &lt;p&gt;&nbsp;&nbsp;
          </Typography>
          <Typography
            variant="caption"
            gutterBottom
            mt={0}
            mb={0}
            sx={{
              fontWeight: 100,
              fontSize: 14,
              letterSpacing: ".4vw",
              opacity: 0.5,
            }}
            data-testid="index-content-job-title"
          >
            Full Stack Developer / Freelancer
          </Typography>
          <Typography
            variant="inherit"
            component="p"
            gutterBottom
            mb={0}
            sx={{
              display: "inline-flex",
              fontFamily: "'URW Chancery L', cursive",
              fontStyle: "italic",
              color: "#515152",
              fontSize: ".9rem",

              [theme.breakpoints.only("xs")]: {
                display: "flex",
              },
            }}
            data-testid="index-content-closing-paragraph"
          >
            &lt;/p&gt;
          </Typography>
          <NextLink href="/contact" passHref>
            <Button
              variant="outlined"
              aria-label="go to Contact page"
              color="cyan"
              sx={{
                display: "table",
                marginTop: "40px",
              }}
              data-testid="index-content-contact-button"
            >
              Contact Me
            </Button>
          </NextLink>
        </CustomizedResponsiveMarginedBox>
        <Box>
          <Typography
            variant="inherit"
            component="p"
            gutterBottom
            mb={0}
            ml={4}
            sx={{
              fontFamily: "'URW Chancery L', cursive",
              fontStyle: "italic",
              color: "#515152",
              fontSize: ".9rem",
            }}
            data-testid="index-content-closing-body"
          >
            &lt;/body&gt;
          </Typography>
          <Typography
            variant="inherit"
            component="p"
            gutterBottom
            mb={0}
            ml={2}
            sx={{
              fontFamily: "'URW Chancery L', cursive",
              fontStyle: "italic",
              color: "#515152",
              fontSize: ".9rem",
            }}
            data-testid="index-content-closing-html"
          >
            &lt;/html&gt;
          </Typography>
        </Box>
      </CustomizedLeftSideGrid>
      <CustomizedRightSideGrid item xs={12} sm={12} md={5} lg={5} xl={5} my={5}>
        <CustomizedAvatarBox>
          <CustomizedAvatar
            alt="logo"
            src={LOGO_PATH}
            imgProps={{
              style: {
                objectFit: "fill",
              },
            }}
            data-testid="index-content-deer-image"
          />
        </CustomizedAvatarBox>
      </CustomizedRightSideGrid>
    </CustomizedRootGrid>
  );
}
