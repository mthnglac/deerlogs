import * as React from 'react';
import Stack, { StackProps } from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Box, { BoxProps } from '@mui/material/Box';
import Grid, { GridProps } from '@mui/material/Grid';
import Link from '../src/Link';
import { styled } from '@mui/material/styles';
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import { faTwitter, faGithub, faLinkedin, faSoundcloud } from '@fortawesome/free-brands-svg-icons';
import theme from '../src/theme';
import WagonDartVader from '../src/components/WagonDartVader'

enum SocialLinks {
	TWITTER = "https://twitter.com/metehanglc",
	GITHUB = "https://github.com/mthnglac",
	LINKEDIN = "https://www.linkedin.com/in/metehan-g%C3%BCla%C3%A7-02b337104/",
	SOUNDCLOUD = "https://soundcloud.com/metehan-g-la",
};

const CustomizedRootGrid = styled(Grid)<GridProps>(({ theme }) => ({
	alignItems: 'stretch',
	height: '100%',

	[theme.breakpoints.down('lg')]: {
		justifyContent: 'space-evenly',
	},
	[theme.breakpoints.up('lg')]: {
		justifyContent: 'space-around',
	},
}));
const CustomizedLeftSideGrid = styled(Grid)<GridProps>(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'flex-start',
	justifyContent: 'space-between',
	zIndex: 1,

	[theme.breakpoints.only('xs')]: {
		marginLeft: '10px',
		marginRight: '10px',
	},
}));
const CustomizedRightSideGrid = styled(Grid)<GridProps>(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'center',
	position: 'relative',
	zIndex: 0,

	[theme.breakpoints.down('md')]: {
		position: 'absolute',
		left: 'auto',
		height: '90%',
		opacity: '.15',
	},
}));
const CustomizedResponsiveMarginedBox = styled(Box)<BoxProps>(({ theme }) => ({
	paddingLeft: '10px',
	paddingRight: '10px',
	marginLeft: '120px',

	[theme.breakpoints.only('xs')]: {
		marginLeft: '30px',
	},
	[theme.breakpoints.only('sm')]: {
		marginLeft: '30px',
	},
}));
const CustomizedSkillsIconStack = styled(Stack)<StackProps>({
	marginBottom: '20px',
})
const CustomizedFontAwesomeIcon = styled(FontAwesomeIcon)<FontAwesomeIconProps>({
	padding: '5%',
	fontSize: 30,
});

export default function Contact() {
  return (
		<CustomizedRootGrid
			container
			direction="row"
			columns={12}
		>
			<CustomizedLeftSideGrid
				item
				xs={12}
				sm={12}
				md={5}
				lg={5}
				xl={5}
				my={3}
			>
				<Box>
					<Typography
						variant="inherit"
						component="p"
						gutterBottom
						mb={0}
						ml={2}
						sx={{
							fontFamily: "'URW Chancery L', cursive",
							fontStyle: 'italic',
							color: '#515152',
							fontSize: '.9rem',
						}}
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
							fontStyle: 'italic',
							color: '#515152',
							fontSize: '.9rem',
						}}
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
							color: '#515152',
							fontFamily: "'URW Chancery L', cursive",
							fontSize: 16,
							fontStyle: 'italic',
						}}
					>
						&lt;h1&gt;
					</Typography>
					<Typography
						variant="h2"
						component="h1"
						gutterBottom
						mb={0}
						color={theme.palette.cyan.main}
						sx={{
							fontWeight: 700,
							fontSize: '1.8rem',
						}}
						data-testid="contact-content-header"
					>
						Contact Me
					</Typography>
					<Typography
						variant="inherit"
						component="p"
						gutterBottom
						mt={0}
						mb={0}
						sx={{
							color: '#515152',
							fontFamily: "'URW Chancery L', cursive",
							fontStyle: 'italic',
							fontSize: '.9rem',
						}}
					>
						&lt;/h1&gt;
					</Typography>
					<Typography
						variant="inherit"
						component="p"
						gutterBottom
						mt={2}
						mb={0}
						sx={{
							fontFamily: "'URW Chancery L', cursive",
							fontStyle: 'italic',
							color: '#515152',
							fontSize: '.9rem',
						}}
					>
						&lt;p&gt;
					</Typography>
					<Typography
						variant="inherit"
						component="p"
						gutterBottom
						mt={0}
						mb={0}
						sx={{
							fontSize: '.9rem',
						}}
					>
						{`I am interested in freelance opportunities - especially ambitious or large projects. However, if you have other request or question, don't hesitate to contact me using below links either.`}
					</Typography>
					<Typography
						variant="inherit"
						component="p"
						gutterBottom
						mt={0}
						mb={2}
						sx={{
							fontFamily: "'URW Chancery L', cursive",
							fontStyle: 'italic',
							color: '#515152',
							fontSize: '.9rem',
						}}
					>
						&lt;/p&gt;
					</Typography>
					<CustomizedSkillsIconStack direction="row">
						<IconButton
							component={Link}
							href={SocialLinks.TWITTER}
							target="_blank"
							sx={{
								width: '50px',
								height: '50px',
								marginRight: '1rem',
								backgroundColor: '#272727',

								'&:hover': {
									backgroundColor: '#272727',
								},

								'&.active': {
									backgroundColor: '#272727',
								}
							}}
						>
							<CustomizedFontAwesomeIcon icon={faTwitter} data-testid="react-icon" />
						</IconButton>
						<IconButton
							component={Link}
							href={SocialLinks.GITHUB}
							target="_blank"
							sx={{
								width: '50px',
								height: '50px',
								marginRight: '1rem',
								backgroundColor: '#272727',

								'&:hover': {
									backgroundColor: '#272727',
								},

								'&.active': {
									backgroundColor: '#272727',
								}
							}}
						>
							<CustomizedFontAwesomeIcon icon={faGithub} data-testid="react-icon" />
						</IconButton>
						<IconButton
							component={Link}
							href={SocialLinks.LINKEDIN}
							target="_blank"
							sx={{
								width: '50px',
								height: '50px',
								marginRight: '1rem',
								backgroundColor: '#272727',

								'&:hover': {
									backgroundColor: '#272727',
								},

								'&.active': {
									backgroundColor: '#272727',
								}
							}}
						>
							<CustomizedFontAwesomeIcon icon={faLinkedin} data-testid="react-icon" />
						</IconButton>
						<IconButton
							component={Link}
							href={SocialLinks.SOUNDCLOUD}
							target="_blank"
							sx={{
								width: '50px',
								height: '50px',
								marginRight: '1rem',
								backgroundColor: '#272727',

								'&:hover': {
									backgroundColor: '#272727',
								},

								'&.active': {
									backgroundColor: '#272727',
								}
							}}
						>
							<CustomizedFontAwesomeIcon icon={faSoundcloud} data-testid="react-icon" />
						</IconButton>
					</CustomizedSkillsIconStack>
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
							fontStyle: 'italic',
							color: '#515152',
							fontSize: '.9rem',
						}}
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
							fontStyle: 'italic',
							color: '#515152',
							fontSize: '.9rem',
						}}
					>
						&lt;/html&gt;
					</Typography>
				</Box>
			</CustomizedLeftSideGrid>
			<CustomizedRightSideGrid
				item
				xs={12}
				sm={12}
				md={5}
				lg={5}
				xl={5}
				my={5}
			>
				<WagonDartVader />
			</CustomizedRightSideGrid>
		</CustomizedRootGrid>
  );
}
