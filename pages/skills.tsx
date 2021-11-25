import * as React from 'react';
import Typography from '@mui/material/Typography';
import Stack, { StackProps } from '@mui/material/Stack';
import Box, { BoxProps } from '@mui/material/Box';
import Grid, { GridProps } from '@mui/material/Grid';
import Link from '../src/Link';
import WagonSkills from '../src/components/WagonSkills'
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import { faPython, faJsSquare, faReact, faVuejs } from '@fortawesome/free-brands-svg-icons';
import { styled } from '@mui/material/styles';
import theme from '../src/theme';

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
	zIndex: 0,

	[theme.breakpoints.down('md')]: {
		display: 'none',
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
const CustomizedAvatarBox = styled(Box)<BoxProps>({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
});
const CustomizedSkillsIconStack = styled(Stack)<StackProps>({
	marginBottom: '20px',
})
const CustomizedFontAwesomeIcon = styled(FontAwesomeIcon)<FontAwesomeIconProps>({
	marginRight: '2rem',
	fontSize: 45,
});

export default function Skills() {
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
							fontSize: '.9rem',
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
					>
						Skills & Experience
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
							fontSize: '.9rem',
							fontStyle: 'italic',
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
							fontSize: '.9rem',
							color: '#515152',
						}}
					>
						&lt;p&gt;
					</Typography>
					<Typography
						variant="inherit"
						component="p"
						gutterBottom
						mt={0}
						mb={2}
						sx={{
							fontSize: '.9rem',
						}}
					>
						The main area of my expertise is frontend development (client side).
					</Typography>
					<Typography
						variant="inherit"
						component="p"
						gutterBottom
						mt={0}
						mb={2}
						sx={{
							fontSize: '.90rem',
						}}
					>
						HTML, CSS, Javascript, building small and medium web apps with ReactJS, ReactNative, NextJS, EmberJS, VueJS, NuxtJS, custom plugins, features, animations and coding interactive layouts.
					</Typography>
					<Typography
						variant="inherit"
						component="p"
						gutterBottom
						mt={0}
						mb={2}
						sx={{
							fontSize: '.9rem',
						}}
					>
					</Typography>
					<Typography
						variant="inherit"
						component="p"
						gutterBottom
						mt={0}
						mb={2}
						sx={{
							fontSize: '.9rem',
						}}
					>
						I have also advanced-level backend developer experience with Django, DRF, RestAPI.
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
						Visit my
						<Typography
							variant="inherit"
							component={Link}
							target="_blank"
							href={SocialLinks.LINKEDIN}
							gutterBottom
							mt={0}
							mb={0}
							sx={{
								fontSize: '.9rem',
								color: theme.palette.cyan.main,
							}}
						>
							&nbsp;LinkedIn&nbsp;
						</Typography>
						profile for more details or just
						<Typography
							variant="inherit"
							component={Link}
							href="/contact"
							gutterBottom
							mt={0}
							mb={0}
							sx={{
								fontSize: '.9rem',
								color: theme.palette.cyan.main,
							}}
						>
							&nbsp;contact&nbsp;
						</Typography>
						me. You can also visit my
						<Typography
							variant="inherit"
							component={Link}
							target="_blank"
							href={SocialLinks.GITHUB}
							gutterBottom
							mt={0}
							mb={0}
							sx={{
								fontSize: '.9rem',
								color: theme.palette.cyan.main,
							}}
						>
							&nbsp;GitHub&nbsp;
						</Typography>
						profile and contribute my projects.
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
						<CustomizedFontAwesomeIcon icon={faPython} data-testid="python-icon" />
						<CustomizedFontAwesomeIcon icon={faJsSquare} data-testid="javascript-icon" />
						<CustomizedFontAwesomeIcon icon={faVuejs} data-testid="vuejs-icon" />
						<CustomizedFontAwesomeIcon icon={faReact} data-testid="react-icon" />
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
				<CustomizedAvatarBox>
					<WagonSkills />
				</CustomizedAvatarBox>
			</CustomizedRightSideGrid>
		</CustomizedRootGrid>
  );
}
