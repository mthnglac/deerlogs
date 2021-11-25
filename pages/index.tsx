import * as React from 'react';
import NextLink from 'next/link'
import Typography from '@mui/material/Typography';
import Box, { BoxProps } from '@mui/material/Box';
import Grid, { GridProps } from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Avatar, { AvatarProps } from '@mui/material/Avatar';
import { styled } from '@mui/material/styles';

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    cyan: true;
  }
}
const LOGO_PATH: string = "/images/logo_main.png";
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

	[theme.breakpoints.only('xs')]: {
		position: 'absolute',
		left: 'auto',
		height: '90%',
		opacity: '.15',
	},
}));
const CustomizedResponsiveMarginedBox = styled(Box)<BoxProps>(({ theme }) => ({
	marginLeft: '120px',

	[theme.breakpoints.only('xs')]: {
		marginLeft: '50px',
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
	width: '100%',
	maxWidth: 500,
	height: 'unset',
	borderRadius: 0,
});

export default function Index() {
  return (
		<Grid
			container
			direction="row"
			justifyContent="space-around"
			alignItems="stretch"
			sx={{
				height: '100%',
			}}
			columns={12}
		>
			<CustomizedLeftSideGrid
				item
				xs={12}
				sm={6}
				md={5}
				lg={5}
				xl={5}
				my={3}
				sx={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'flex-start',
					justifyContent: 'space-between',
				}}
			>
				<Box>
					<Typography
						variant="inherit"
						component="p"
						gutterBottom
						mb={0}
						sx={{
							fontFamily: "'URW Chancery L', cursive",
							fontStyle: 'italic',
							color: '#515152',
						}}
					>
						&lt;html&gt;
					</Typography>
					<Typography
						variant="inherit"
						component="p"
						gutterBottom
						mb={0}
						ml={3}
						sx={{
							fontFamily: "'URW Chancery L', cursive",
							fontStyle: 'italic',
							color: '#515152',
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
						variant="h3"
						component="h1"
						gutterBottom
						mb={0}
						sx={{ fontWeight: 700 }}
					>
						Hi,
					</Typography>
					<Typography
						variant="h3"
						component="h1"
						gutterBottom
						mb={0}
						sx={{ fontWeight: 700 }}
					>
						{`I'm Metehan,`}
					</Typography>
					<Typography
						variant="h3"
						component="h1"
						gutterBottom
						mb={0}
						sx={{ fontWeight: 700 }}
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
							color: '#515152',
							fontFamily: "'URW Chancery L', cursive",
							fontSize: 16,
							fontStyle: 'italic',
						}}
					>
						&lt;/h1&gt;
					</Typography>
					<Typography
						variant="inherit"
						component="p"
						gutterBottom
						mb={0}
						sx={{
							display: 'inline-flex',
							fontFamily: "'URW Chancery L', cursive",
							fontStyle: 'italic',
							color: '#515152',
						}}
					>
						&lt;p&gt;
					</Typography>
					<Typography
						variant="caption"
						gutterBottom
						mt={0}
						mb={0}
						sx={{
							fontWeight: 100,
							fontSize: 14,
							letterSpacing: '.4vw',
							opacity: .5,
						}}
					>
						Full Stack Developer / Freelancer
					</Typography>
					<Typography
						variant="inherit"
						component="p"
						gutterBottom
						mb={0}
						sx={{
							display: 'inline-flex',
							fontFamily: "'URW Chancery L', cursive",
							fontStyle: 'italic',
							color: '#515152',
						}}
					>
						&lt;/p&gt;
					</Typography>
					<NextLink href="/contact" passHref>
						<Button
							variant="outlined"
							aria-label="go to Contact page"
							data-testid="index-content-contact-button"
							color="cyan"
							sx={{
								display: 'table',
								marginTop: '40px',
							}}
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
						ml={3}
						sx={{
							fontFamily: "'URW Chancery L', cursive",
							fontStyle: 'italic',
							color: '#515152',
						}}
					>
						&lt;/body&gt;
					</Typography>
					<Typography
						variant="inherit"
						component="p"
						gutterBottom
						mb={0}
						sx={{
							fontFamily: "'URW Chancery L', cursive",
							fontStyle: 'italic',
							color: '#515152',
						}}
					>
						&lt;/html&gt;
					</Typography>
				</Box>
			</CustomizedLeftSideGrid>
			<CustomizedRightSideGrid
				item
				xs={12}
				sm={6}
				md={5}
				lg={5}
				xl={5}
				my={5}
			>
				<CustomizedAvatarBox>
					<CustomizedAvatar
						alt="logo"
						src={LOGO_PATH}
						imgProps={{
							style: {
								objectFit: 'fill',
							}
						}}
						data-testid="index-content-deer-image"
						/>
				</CustomizedAvatarBox>
			</CustomizedRightSideGrid>
		</Grid>
  );
}
