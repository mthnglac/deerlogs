import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box, { BoxProps } from '@mui/material/Box';
import Grid, { GridProps } from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import theme from '../src/theme';
import WagonDartVader from '../src/components/WagonDartVader'

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
		marginLeft: '50px',
	},
	[theme.breakpoints.only('sm')]: {
		marginLeft: '50px',
	},
}));

export default function About() {
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
						About Me
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
						Professionally connected with the web development industry and information technology for many years.
					</Typography>
					<Typography
						variant="inherit"
						component="p"
						gutterBottom
						mt={0}
						mb={2}
					>
						Well-organised person, problem solver, independent employee with high attention to detail. Fan of outdoor activities, TV series and recently English literature. Therefore remote employment is preferred.
					</Typography>
					<Typography
						variant="inherit"
						component="p"
						gutterBottom
						mt={0}
						mb={0}
					>
						Interested in the entire frontend spectrum and working on ambitious projects with positive people.
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
						ml={4}
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
						ml={2}
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
				<WagonDartVader />
			</CustomizedRightSideGrid>
		</CustomizedRootGrid>
  );
}
