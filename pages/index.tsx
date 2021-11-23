import * as React from 'react';
import NextLink from 'next/link'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import ProTip from '../src/ProTip';
import Copyright from '../src/Copyright';

// Update the Button's color prop options
declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    cyan: true;
  }
}
const metok = "<h1>"
const metok2 = "</h1>"
//<Stack direction="row" sx={{ m: 0, p: 0, height: '100vh' }}>
export default function Index() {
  return (
		<Grid
			container
			direction="row"
			justifyContent="space-around"
			alignItems="stretch"
			sx={{
				height: '100vh',
			}}
			columns={12}
		>
			<Grid
				item
				xs={12}
				sm={5}
				md={5}
				lg={5}
				xl={5}
				my={5}
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
							fontSize: 20,
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
							fontSize: 20,
							fontStyle: 'italic',
							color: '#515152',
						}}
					>
						&lt;body&gt;
					</Typography>
				</Box>
				<Box ml={15}>
					<Typography
						variant="h3"
						component="h1"
						gutterBottom
						mb={0}
						sx={{
							color: '#515152',
							fontFamily: "'URW Chancery L', cursive",
							fontSize: 16,
							fontStyle: 'italic',
						}}
					>
						{metok}
					</Typography>
					<Typography
						variant="h3"
						component="h1"
						gutterBottom
						mb={0}
						sx={{
							fontSize: 56,
							fontWeight: 700,
						}}
					>
						Hi,
					</Typography>
					<Typography
						variant="h3"
						component="h1"
						gutterBottom
						mb={0}
						sx={{ fontSize: 56, fontWeight: 700 }}
					>
						I'm Metehan,
					</Typography>
					<Typography
						variant="h3"
						component="h1"
						gutterBottom
						mb={0}
						sx={{ fontSize: 56, fontWeight: 700 }}
					>
						Web Developer
					</Typography>
					<Typography
						variant="h3"
						component="h1"
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
						{metok2}
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
				</Box>
				<Box>
					<Typography
						variant="inherit"
						component="p"
						gutterBottom
						mb={0}
						ml={3}
						sx={{
							fontFamily: "'URW Chancery L', cursive",
							fontSize: 20,
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
							fontSize: 20,
							fontStyle: 'italic',
							color: '#515152',
						}}
					>
						&lt;/html&gt;
					</Typography>
				</Box>
			</Grid>
			<Grid
				item
				xs={12}
				sm={5}
				md={5}
				lg={5}
				xl={5}
				my={5}
			>
				<Typography variant="h4" component="h1" gutterBottom>
				Next.js v5-beta with TypeScript example
				</Typography>
				<NextLink href="/about">
				Go to the about page
				</NextLink>
				<ProTip />
				<Copyright />
			</Grid>
		</Grid>
  );
}
