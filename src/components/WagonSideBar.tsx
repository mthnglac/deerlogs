import * as React from 'react';
import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'
import Box, { BoxProps } from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import ListItem, { ListItemProps } from '@mui/material/ListItem';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
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
const DRAWER_WIDTH: number = 60;
const LOGO_PATH: string = "/images/logo_deer_no_shadow.png";

const CustomizedBox = styled(Box)<BoxProps>({
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'space-between',
	height: '100%',
	backgroundColor: '#181818',
});
const CustomizedAvatarBox = styled(Box)<BoxProps>({
	display: 'flex',
	position: 'relative',
	width: 60,
	height: 104,
	backgroundColor: '#000000',
});
const CustomizedListItem = styled(ListItem)<ListItemProps>({
	justifyContent: 'center',
	margin: '10px 0',
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
	fontSize: 13,
});

export default function PermanentDrawerLeft() {
	const router = useRouter();

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
			<Drawer
				sx={{
					width: DRAWER_WIDTH,
					flexShrink: 0,
					'& .MuiDrawer-paper': {
						width: DRAWER_WIDTH,
						boxSizing: 'border-box',
					},
				}}
				variant="permanent"
				anchor="left"
				PaperProps={{
					sx: {
						borderRight: "none",
					}
				}}
			>
				<CustomizedBox>
					<Link href="/" passHref>
						<CustomizedAvatarBox>
							<Image
								alt="logo"
								src={LOGO_PATH}
								layout="fill"
								objectFit="contain"
								data-testid="deer-image"
							/>
						</CustomizedAvatarBox>
					</Link>
					<List>
						<CustomizedListItem disablePadding>
							<Link href="/" passHref>
								<CustomizedIconButton
									className={router.pathname === "/" ? "active" : ""}
									disableRipple
									aria-label="go to Home page"
									data-testid="home-button"
								>
									<HomeOutlinedIcon sx={{ fontSize: 24 }} data-testid="home-icon" />
								</CustomizedIconButton>
							</Link>
						</CustomizedListItem>
						<CustomizedListItem disablePadding>
							<Link href="/about" passHref>
								<CustomizedIconButton
									className={router.pathname === "/about" ? "active" : ""}
									disableRipple
									aria-label="go to About page"
									data-testid="about-button"
								>
									<AccountCircleOutlinedIcon sx={{ fontSize: 24 }} data-testid="about-icon" />
								</CustomizedIconButton>
							</Link>
						</CustomizedListItem>
						<CustomizedListItem disablePadding>
							<Link href="/skills" passHref>
								<CustomizedIconButton
									className={router.pathname === "/skills" ? "active" : ""}
									disableRipple
									aria-label="go to Skills page"
									data-testid="skills-button"
								>
									<SettingsOutlinedIcon sx={{ fontSize: 24 }} data-testid="skills-icon" />
								</CustomizedIconButton>
							</Link>
						</CustomizedListItem>
						<CustomizedListItem disablePadding>
							<Link href="/contact" passHref>
								<CustomizedIconButton
									className={router.pathname === "/contact" ? "active" : ""}
									disableRipple
									aria-label="go to Contact page"
									data-testid="contact-button"
								>
									<EmailOutlinedIcon sx={{ fontSize: 24 }} data-testid="contact-icon" />
								</CustomizedIconButton>
							</Link>
						</CustomizedListItem>
					</List>
					<List>
						<CustomizedListItem disablePadding>
							<CustomizedIconButton
								href={SocialLinks.TWITTER}
								target="_blank"
								disableRipple
								aria-label="go to my Twitter page"
								data-testid="twitter-button"
							>
								<TwitterIcon sx={{ fontSize: 13 }} data-testid="twitter-icon" />
							</CustomizedIconButton>
						</CustomizedListItem>
						<CustomizedListItem disablePadding>
							<CustomizedIconButton
								href={SocialLinks.GITHUB}
								target="_blank"
								disableRipple
								aria-label="go to my Github page"
								data-testid="github-button"
							>
								<GitHubIcon sx={{ fontSize: 13 }} data-testid="github-icon" />
							</CustomizedIconButton>
						</CustomizedListItem>
						<CustomizedListItem disablePadding>
							<CustomizedIconButton
								href={SocialLinks.LINKEDIN}
								target="_blank"
								disableRipple
								aria-label="go to my LinkedIn page"
								data-testid="linkedin-button"
							>
								<LinkedInIcon sx={{ fontSize: 13 }} data-testid="linkedin-icon" />
							</CustomizedIconButton>
						</CustomizedListItem>
						<CustomizedListItem disablePadding>
							<CustomizedIconButton
								href={SocialLinks.SOUNDCLOUD}
								target="_blank"
								disableRipple
								aria-label="go to my Soundcloud page"
								data-testid="soundcloud-button"
							>
								<CustomizedFontAwesomeIcon icon={faSoundcloud} data-testid="soundcloud-icon" />
							</CustomizedIconButton>
						</CustomizedListItem>
					</List>
				</CustomizedBox>
			</Drawer>
    </Box>
  );
}
