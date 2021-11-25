import * as React from 'react';
import { useRouter } from 'next/router'
import Avatar, { AvatarProps } from '@mui/material/Avatar';
import NextLink from 'next/link'
import MuiLink, { LinkProps as MuiLinkProps } from '@mui/material/Link';
import AppBar, { AppBarProps } from '@mui/material/AppBar';
import Box, { BoxProps } from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar, { ToolbarProps } from '@mui/material/Toolbar';
import Drawer from '@mui/material/Drawer';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import { faSoundcloud } from '@fortawesome/free-brands-svg-icons';
import { styled } from '@mui/material/styles';

enum SocialLinks {
	TWITTER = "https://twitter.com/metehanglc",
	GITHUB = "https://github.com/mthnglac",
	LINKEDIN = "https://www.linkedin.com/in/metehan-g%C3%BCla%C3%A7-02b337104/",
	SOUNDCLOUD = "https://soundcloud.com/metehan-g-la",
};
enum DrawerListItemNames {
	HOME_PAGE = "Home",
	ABOUT_PAGE = "About",
	SKILLS_PAGE = "Skills",
	CONTACT_PAGE = "Contact",
};
type Anchor = 'top' | 'left' | 'bottom' | 'right';
const LOGO_PATH: string = "/images/logo_deer_no_shadow.png";
const DRAWER_WIDTH: number = 180;

const RootBox = styled(Box)<BoxProps>(({ theme }) => ({
	flexGrow: 1,

	[theme.breakpoints.up('md')]: {
		display: 'none',
	},
}));
const CustomizedAppBar = styled(AppBar)<AppBarProps>(() => ({
	height: 56,
	backgroundColor: '#181818',
	backgroundImage: 'none',
	boxShadow: '0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)',
}));
const CustomizedToolbar = styled(Toolbar)<ToolbarProps>(({ theme }) => ({
	[theme.breakpoints.up('sm')]: {
		minHeight: 56,
		padding: '4px 20px',
	},
}));
const CustomizedAvatarBox = styled(Box)<BoxProps>({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	position: 'relative',
	backgroundColor: 'transparent',
});
const CustomizedAvatar = styled(Avatar)<AvatarProps>({
	width: 42,
	height: 'unset',
	borderRadius: 0,
});
const CustomizedIconButton = styled(IconButton)<IconButtonProps>({
	justifyContent: 'center',
	color: "#4d4d4e",
	'&:hover': {
		backgroundColor: 'transparent',
		color: '#08fdd8'
	},
	'&.active': {
		backgroundColor: 'transparent',
		color: '#08fdd8'
	}
});
const CustomizedFontAwesomeIcon = styled(FontAwesomeIcon)<FontAwesomeIconProps>({
	width: '1em !important',
	height: '1em',
	fontSize: 15,
});
const CustomizedMuiLink = styled(MuiLink)<MuiLinkProps>({
	display: 'inline-flex',
	alignItems: 'center',
	justifyContent: 'center',
	position: 'relative',
	boxSizing: 'border-box',
	backgroundColor: 'transparent',
	outline: 0,
	border: 0,
	margin: 0,
	padding: 8,
	cursor: 'pointer',
	userSelect: 'none',
	textDecoration: 'none',
	textAlign: 'center',
	flex: '0 0 auto',
	fontSize: '1.5rem',
	overflow: 'visible',
	transition: 'background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
	borderRadius: '50%',
	color: "#4d4d4e",
	'&:hover': {
		backgroundColor: 'transparent',
		color: '#08fdd8'
	},
	'&.active': {
		backgroundColor: 'transparent',
		color: '#08fdd8'
	}
});

export default function WagonAppBar() {
	const router = useRouter();
	const [state, setState] = React.useState({
		top: false,
		left: false,
		bottom: false,
		right: false,
	});

	const toggleDrawer = (anchor: Anchor, open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
		if (
			event.type === 'keydown' &&
				((event as React.KeyboardEvent).key === 'Tab' ||
					(event as React.KeyboardEvent).key === 'Shift')
		) {
			return;
		}

		setState({ ...state, [anchor]: open });
	};

	const list = (anchor: Anchor) => (
		<Box
			role="presentation"
			onClick={toggleDrawer(anchor, false)}
			onKeyDown={toggleDrawer(anchor, false)}
		>
			<List>
				<NextLink href="/" passHref>
					<ListItem
						className={router.pathname === "/" ? "active" : ""}
						button
						disableRipple
						aria-label="go to Home page"
						data-testid="drawer-home-button"
						sx={{
							'&:hover': {
								backgroundColor: 'transparent',
								color: '#08fdd8'
							},
							'&.active': {
								backgroundColor: 'transparent',
								color: '#08fdd8'
							},
							marginBottom: 1,
						}}
					>
						<ListItemIcon
							className={router.pathname === "/" ? "active" : ""}
							sx={{
								'&:hover': {
									backgroundColor: 'transparent',
									color: '#08fdd8'
								},
								'&.active': {
									backgroundColor: 'transparent',
									color: '#08fdd8'
								},
							}}
						>
							<HomeOutlinedIcon sx={{ fontSize: 24 }} data-testid="home-icon" />
						</ListItemIcon>
						<ListItemText primary={DrawerListItemNames.HOME_PAGE} />
					</ListItem>
				</NextLink>
				<NextLink href="/about" passHref>
					<ListItem
						className={router.pathname === "/about" ? "active" : ""}
						button
						disableRipple
						aria-label="go to About page"
						data-testid="drawer-about-button"
						sx={{
							'&:hover': {
								backgroundColor: 'transparent',
								color: '#08fdd8'
							},
							'&.active': {
								backgroundColor: 'transparent',
								color: '#08fdd8'
							},
							marginBottom: 1,
						}}
					>
						<ListItemIcon
							className={router.pathname === "/about" ? "active" : ""}
							sx={{
								'&:hover': {
									backgroundColor: 'transparent',
									color: '#08fdd8'
								},
								'&.active': {
									backgroundColor: 'transparent',
									color: '#08fdd8'
								}
							}}
						>
							<AccountCircleOutlinedIcon sx={{ fontSize: 24 }} data-testid="about-icon" />
						</ListItemIcon>
						<ListItemText primary={DrawerListItemNames.ABOUT_PAGE} />
					</ListItem>
				</NextLink>
				<NextLink href="/skills" passHref>
					<ListItem
						className={router.pathname === "/skills" ? "active" : ""}
						button
						disableRipple
						aria-label="go to Skills page"
						data-testid="drawer-skills-button"
						sx={{
							'&:hover': {
								backgroundColor: 'transparent',
								color: '#08fdd8'
							},
							'&.active': {
								backgroundColor: 'transparent',
								color: '#08fdd8'
							},
							marginBottom: 1,
						}}
					>
						<ListItemIcon
							className={router.pathname === "/skills" ? "active" : ""}
							sx={{
								'&:hover': {
									backgroundColor: 'transparent',
									color: '#08fdd8'
								},
								'&.active': {
									backgroundColor: 'transparent',
									color: '#08fdd8'
								}
							}}
						>
							<SettingsOutlinedIcon sx={{ fontSize: 24 }} data-testid="skills-icon" />
						</ListItemIcon>
						<ListItemText primary={DrawerListItemNames.SKILLS_PAGE} />
					</ListItem>
				</NextLink>
				<NextLink href="/contact" passHref>
					<ListItem
						className={router.pathname === "/contact" ? "active" : ""}
						button
						disableRipple
						aria-label="go to Contact page"
						data-testid="drawer-contact-button"
						sx={{
							'&:hover': {
								backgroundColor: 'transparent',
								color: '#08fdd8'
							},
							'&.active': {
								backgroundColor: 'transparent',
								color: '#08fdd8'
							},
							marginBottom: 1,
						}}
					>
						<ListItemIcon
							className={router.pathname === "/contact" ? "active" : ""}
							sx={{
								'&:hover': {
									backgroundColor: 'transparent',
									color: '#08fdd8'
								},
								'&.active': {
									backgroundColor: 'transparent',
									color: '#08fdd8'
								}
							}}
						>
							<EmailOutlinedIcon sx={{ fontSize: 24 }} data-testid="contact-icon" />
						</ListItemIcon>
						<ListItemText primary={DrawerListItemNames.CONTACT_PAGE} />
					</ListItem>
				</NextLink>
			</List>
		</Box>
	);

  return (
		<RootBox data-testid="app-bar-root-box">
			<CustomizedAppBar position="static">
				<CustomizedToolbar>
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
					<Stack direction="row" spacing={4} sx={{ display: { xs: 'none', sm: 'flex' } }}>
						<NextLink href="/" passHref>
							<CustomizedIconButton
								className={router.pathname === "/" ? "active" : ""}
								disableRipple
								aria-label="go to Home page"
								data-testid="home-button"
							>
								<HomeOutlinedIcon sx={{ fontSize: 30 }} data-testid="home-icon" />
							</CustomizedIconButton>
						</NextLink>
						<NextLink href="/about" passHref>
							<CustomizedIconButton
								className={router.pathname === "/about" ? "active" : ""}
								disableRipple
								aria-label="go to About page"
								data-testid="about-button"
							>
								<AccountCircleOutlinedIcon sx={{ fontSize: 24 }} data-testid="about-icon" />
							</CustomizedIconButton>
						</NextLink>
						<NextLink href="/skills" passHref>
							<CustomizedIconButton
								className={router.pathname === "/skills" ? "active" : ""}
								disableRipple
								aria-label="go to Skills page"
								data-testid="skills-button"
							>
								<SettingsOutlinedIcon sx={{ fontSize: 24 }} data-testid="skills-icon" />
							</CustomizedIconButton>
						</NextLink>
						<NextLink href="/contact" passHref>
							<CustomizedIconButton
								className={router.pathname === "/contact" ? "active" : ""}
								disableRipple
								aria-label="go to Contact page"
								data-testid="contact-button"
							>
								<EmailOutlinedIcon sx={{ fontSize: 24 }} data-testid="contact-icon" />
							</CustomizedIconButton>
						</NextLink>
					</Stack>
					<Box sx={{ flexGrow: 0.5 }} />
					<Stack direction="row" spacing={2} sx={{ display: { xs: 'none', sm: 'flex' } }}>
						<CustomizedMuiLink
							href={SocialLinks.TWITTER}
							target="_blank"
							rel="noopener"
							aria-label="go to my Twitter page"
							data-testid="twitter-button"
						>
							<TwitterIcon sx={{ fontSize: 15 }} data-testid="twitter-icon" />
						</CustomizedMuiLink>
						<CustomizedMuiLink
							href={SocialLinks.GITHUB}
							target="_blank"
							rel="noopener"
							aria-label="go to my Github page"
							data-testid="github-button"
						>
							<GitHubIcon sx={{ fontSize: 15 }} data-testid="github-icon" />
						</CustomizedMuiLink>
						<CustomizedMuiLink
							href={SocialLinks.LINKEDIN}
							target="_blank"
							rel="noopener"
							aria-label="go to my LinkedIn page"
							data-testid="linkedin-button"
						>
							<LinkedInIcon sx={{ fontSize: 15 }} data-testid="linkedin-icon" />
						</CustomizedMuiLink>
						<CustomizedMuiLink
							href={SocialLinks.SOUNDCLOUD}
							target="_blank"
							rel="noopener"
							aria-label="go to my Soundcloud page"
							data-testid="soundcloud-button"
						>
							<CustomizedFontAwesomeIcon icon={faSoundcloud} data-testid="soundcloud-icon" />
						</CustomizedMuiLink>
					</Stack>
					<Box sx={{ display: { xs: 'flex', sm: 'none' } }}>
						<IconButton
							disableRipple
							edge="end"
							color="inherit"
							aria-label="open drawer"
							sx={{ color: "#08fdd8" }}
							onClick={toggleDrawer("right", true)}
							data-testid="menu-button"
						>
							<MenuIcon sx={{ fontSize: 35 }} data-testid="menu-icon" />
						</IconButton>
					</Box>
				</CustomizedToolbar>
			</CustomizedAppBar>
			<React.Fragment key={"right"}>
				<Drawer
					anchor={"right"}
					open={state["right"]}
					onClose={toggleDrawer("right", false)}
					sx={{
						'& .MuiDrawer-paper': {
							boxSizing: 'border-box',
							width: DRAWER_WIDTH,
							backgroundColor: '#181818',
							backgroundImage: 'none',
							borderLeft: '1px solid hsla(0,0%,100%,.12)',
						},
					}}
					data-testid="drawer"
				>
					{list("right")}
				</Drawer>
			</React.Fragment>
		</RootBox>
  );
}
