import * as React from 'react';
import { useRouter } from 'next/router'
import Avatar, { AvatarProps } from '@mui/material/Avatar';
import NextLink from 'next/link'
import MuiLink, { LinkProps as MuiLinkProps } from '@mui/material/Link';
import AppBar from '@mui/material/AppBar';
import Box, { BoxProps } from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import MenuIcon from '@mui/icons-material/Menu';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import { styled } from '@mui/material/styles';

enum SocialLinks {
	TWITTER = "https://twitter.com/metehanglc",
	GITHUB = "https://github.com/mthnglac",
	LINKEDIN = "https://www.linkedin.com/in/metehan-g%C3%BCla%C3%A7-02b337104/",
	SOUNDCLOUD = "https://soundcloud.com/metehan-g-la",
};
const LOGO_PATH: string = "/images/logo_deer_no_shadow.png";

const RootBox = styled(Box)(({ theme }) => ({
	flexGrow: 1,

	[theme.breakpoints.up('md')]: {
		display: 'none',
	},
}));
const CustomizedAvatarBox = styled(Box)<BoxProps>({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	position: 'relative',
	backgroundColor: '#000000',
	width: 48,
	height: 48,
	minHeight: 48,
});
const CustomizedAvatar = styled(Avatar)<AvatarProps>({
	width: 55,
	height: 'unset',
	borderRadius: 0,
});

export default function WagonAppBar() {
  return (
    <RootBox sx={{ display: 'flex', flexGrow: 1 }}>
      <AppBar position="static" sx={{ height: 56 }}>
        <Toolbar>
					<NextLink href="/" passHref>
						<CustomizedAvatarBox>
							<CustomizedAvatar
								alt="logo"
								src={LOGO_PATH}
								imgProps={{
									style: {
										objectFit: 'fill',
									}
								}}
                data-testid="deer-image"
							/>
						</CustomizedAvatarBox>
					</NextLink>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="error">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
            >
              <MoreIcon />
            </IconButton>
          </Box>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </RootBox>
  );
}
