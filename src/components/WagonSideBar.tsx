import * as React from "react";
import { useRouter } from "next/router";
import Avatar, { AvatarProps } from "@mui/material/Avatar";
import NextLink from "next/link";
import MuiLink, { LinkProps as MuiLinkProps } from "@mui/material/Link";
import Box, { BoxProps } from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem, { ListItemProps } from "@mui/material/ListItem";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";
import { faSoundcloud } from "@fortawesome/free-brands-svg-icons";
import { styled } from "@mui/material/styles";

enum SocialLinks {
  TWITTER = "https://twitter.com/metehanglc",
  GITHUB = "https://github.com/mthnglac",
  LINKEDIN = "https://www.linkedin.com/in/metehanglc",
  SOUNDCLOUD = "https://soundcloud.com/metehan-g-la",
}
const DRAWER_WIDTH: number = 60;
const LOGO_PATH: string = "/images/logo_deer_no_shadow.png";

const RootBox = styled(Box)<BoxProps>(({ theme }) => ({
  display: "flex",

  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));
const CustomizedBox = styled(Box)<BoxProps>({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  height: "100%",
  backgroundColor: "#181818",
  overflowY: "hidden",
});
const CustomizedAvatarBox = styled(Box)<BoxProps>({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  width: 60,
  height: 104,
  minHeight: 104,
  backgroundColor: "#000000",
});
const CustomizedAvatar = styled(Avatar)<AvatarProps>({
  width: 60,
  height: "unset",
  borderRadius: 0,
});
const CustomizedListItem = styled(ListItem)<ListItemProps>({
  justifyContent: "center",
  margin: "12px 0",
});
const CustomizedIconButton = styled(IconButton)<IconButtonProps>({
  justifyContent: "center",
  color: "#4d4d4e",
  "&:hover": {
    backgroundColor: "transparent",
    color: "#08fdd8",
  },
  "&.active": {
    backgroundColor: "transparent",
    color: "#08fdd8",
  },
});
const CustomizedFontAwesomeIcon = styled(FontAwesomeIcon)<FontAwesomeIconProps>(
  {
    width: "1em !important",
    height: "1em",
    fontSize: 17,
  }
);
const CustomizedMuiLink = styled(MuiLink)<MuiLinkProps>({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  boxSizing: "border-box",
  backgroundColor: "transparent",
  outline: 0,
  border: 0,
  margin: 0,
  padding: 8,
  cursor: "pointer",
  userSelect: "none",
  textDecoration: "none",
  textAlign: "center",
  flex: "0 0 auto",
  fontSize: "1.5rem",
  overflow: "visible",
  transition: "background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
  borderRadius: "50%",
  color: "#4d4d4e",
  "&:hover": {
    backgroundColor: "transparent",
    color: "#08fdd8",
  },
  "&.active": {
    backgroundColor: "transparent",
    color: "#08fdd8",
  },
});

export default function PermanentDrawerLeft() {
  const router = useRouter();

  return (
    <RootBox data-testid="side-bar-root-box">
      <Drawer
        sx={{
          width: DRAWER_WIDTH,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: DRAWER_WIDTH,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
        PaperProps={{
          sx: {
            borderRight: "none",
          },
        }}
      >
        <CustomizedBox>
          <NextLink href="/" passHref>
            <CustomizedAvatarBox>
              <CustomizedAvatar
                alt="logo"
                src={LOGO_PATH}
                imgProps={{
                  style: {
                    objectFit: "fill",
                  },
                }}
                data-testid="deer-image"
              />
            </CustomizedAvatarBox>
          </NextLink>
          <List>
            <CustomizedListItem disablePadding>
              <NextLink href="/" passHref>
                <CustomizedIconButton
                  className={router.pathname === "/" ? "active" : ""}
                  disableRipple
                  aria-label="go to Home page"
                  data-testid="home-button"
                >
                  <HomeOutlinedIcon
                    sx={{ fontSize: 27 }}
                    data-testid="home-icon"
                  />
                </CustomizedIconButton>
              </NextLink>
            </CustomizedListItem>
            <CustomizedListItem disablePadding>
              <NextLink href="/about" passHref>
                <CustomizedIconButton
                  className={router.pathname === "/about" ? "active" : ""}
                  disableRipple
                  aria-label="go to About page"
                  data-testid="about-button"
                >
                  <AccountCircleOutlinedIcon
                    sx={{ fontSize: 27 }}
                    data-testid="about-icon"
                  />
                </CustomizedIconButton>
              </NextLink>
            </CustomizedListItem>
            <CustomizedListItem disablePadding>
              <NextLink href="/skills" passHref>
                <CustomizedIconButton
                  className={router.pathname === "/skills" ? "active" : ""}
                  disableRipple
                  aria-label="go to Skills page"
                  data-testid="skills-button"
                >
                  <SettingsOutlinedIcon
                    sx={{ fontSize: 27 }}
                    data-testid="skills-icon"
                  />
                </CustomizedIconButton>
              </NextLink>
            </CustomizedListItem>
            <CustomizedListItem disablePadding>
              <NextLink href="/contact" passHref>
                <CustomizedIconButton
                  className={router.pathname === "/contact" ? "active" : ""}
                  disableRipple
                  aria-label="go to Contact page"
                  data-testid="contact-button"
                >
                  <EmailOutlinedIcon
                    sx={{ fontSize: 27 }}
                    data-testid="contact-icon"
                  />
                </CustomizedIconButton>
              </NextLink>
            </CustomizedListItem>
          </List>
          <List>
            <CustomizedListItem disablePadding>
              <CustomizedMuiLink
                href={SocialLinks.TWITTER}
                target="_blank"
                rel="noopener"
                aria-label="go to my Twitter page"
                data-testid="twitter-button"
              >
                <TwitterIcon sx={{ fontSize: 17 }} data-testid="twitter-icon" />
              </CustomizedMuiLink>
            </CustomizedListItem>
            <CustomizedListItem disablePadding>
              <CustomizedMuiLink
                href={SocialLinks.GITHUB}
                target="_blank"
                rel="noopener"
                aria-label="go to my Github page"
                data-testid="github-button"
              >
                <GitHubIcon sx={{ fontSize: 17 }} data-testid="github-icon" />
              </CustomizedMuiLink>
            </CustomizedListItem>
            <CustomizedListItem disablePadding>
              <CustomizedMuiLink
                href={SocialLinks.LINKEDIN}
                target="_blank"
                rel="noopener"
                aria-label="go to my LinkedIn page"
                data-testid="linkedin-button"
              >
                <LinkedInIcon
                  sx={{ fontSize: 17 }}
                  data-testid="linkedin-icon"
                />
              </CustomizedMuiLink>
            </CustomizedListItem>
            <CustomizedListItem disablePadding>
              <CustomizedMuiLink
                href={SocialLinks.SOUNDCLOUD}
                target="_blank"
                rel="noopener"
                aria-label="go to my Soundcloud page"
                data-testid="soundcloud-button"
              >
                <CustomizedFontAwesomeIcon
                  icon={faSoundcloud}
                  data-testid="soundcloud-icon"
                />
              </CustomizedMuiLink>
            </CustomizedListItem>
          </List>
        </CustomizedBox>
      </Drawer>
    </RootBox>
  );
}
