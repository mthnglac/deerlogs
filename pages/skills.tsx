import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box, { BoxProps } from '@mui/material/Box';
import Grid, { GridProps } from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import theme from '../src/theme';

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
						variant="h2"
						component="h1"
						gutterBottom
						mb={0}
						color={theme.palette.cyan.main}
						sx={{
							fontWeight: 700,
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
						mt={2}
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
						variant="inherit"
						component="p"
						gutterBottom
						mt={0}
						mb={2}
					>
						The main area of my expertise is frontend development (client side).
					</Typography>
					<Typography
						variant="inherit"
						component="p"
						gutterBottom
						mt={0}
						mb={2}
					>
						HTML, CSS, Javascript, building small and medium web apps with React,
					</Typography>
					<Typography
						variant="inherit"
						component="p"
						gutterBottom
						mt={0}
						mb={2}
					>
					<Typography
						variant="inherit"
						component="p"
						gutterBottom
						mt={0}
						mb={2}
					>
						ReactNative, Vue, Nuxt, custom plugins, features, animations and coding interactive layouts.
					</Typography>
					</Typography>
					<Typography
						variant="inherit"
						component="p"
						gutterBottom
						mt={0}
						mb={0}
					>
						I have also advanced-level backend developer experience with Django, DRF, RestAPI.
					</Typography>
					<Typography
						variant="inherit"
						component="p"
						gutterBottom
						mt={0}
						mb={0}
					>
						Visit my [LinkedIn][LinkedIn] profile for more details or just [contact][contact] me.
					</Typography>
					<Typography
						variant="inherit"
						component="p"
						gutterBottom
						mt={0}
						mb={0}
					>
						You can also visit my [GitHub][GitHub] profile and contribute my projects.
					</Typography>
					<Typography
						variant="inherit"
						component="p"
						gutterBottom
						mt={0}
						mb={2}
						sx={{
							display: 'inline-flex',
							fontFamily: "'URW Chancery L', cursive",
							fontStyle: 'italic',
							color: '#515152',
						}}
					>
						&lt;/p&gt;
					</Typography>
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
				sm={12}
				md={5}
				lg={5}
				xl={5}
				my={5}
			>
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
			</CustomizedRightSideGrid>
		</CustomizedRootGrid>
  );
}
