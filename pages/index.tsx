import * as React from 'react';
import Typography, { TypographyProps } from '@mui/material/Typography';
import Box, { BoxProps } from '@mui/material/Box';
import Stack, { StackProps } from '@mui/material/Stack';
import ProTip from '../src/ProTip';
import Link from 'next/link'
import Copyright from '../src/Copyright';
import { styled } from '@mui/material/styles';

const CustomizedBox = styled(Box)<BoxProps>({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'flex-start',
	justifyContent: 'space-between',
});

export default function Index() {
  return (
		<Stack direction="row" sx={{ m: 0, p: 0, height: '100vh' }}>
			<CustomizedBox>
				<Box>
					<Typography
						variant="inherit"
						component="p"
						gutterBottom
						sx={{
							fontFamily: "'URW Chancery L', cursive",
							fontSize: 20,
							fontStyle: 'italic',
							color: '#515152',
						}}
					>
						&nbsp;&nbsp;&nbsp;&lt;body&gt;
					</Typography>
				</Box>
				<Box
					sx={{
						'&::before': {
							color: '#515152',
							fontFamily: "'URW Chancery L', cursive",
							fontSize: 16,
							fontStyle: 'italic',
							content: "'<h1>'",
						},
						'&::after': {
							color: '#515152',
							fontFamily: "'URW Chancery L', cursive",
							fontSize: 16,
							fontStyle: 'italic',
							content: "'</h1>'",
						}
					}}
				>
					<Typography
						variant="h3"
						component="h1"
						gutterBottom
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
						sx={{ fontSize: 56, fontWeight: 700 }}
					>
						I'm Metehan,
					</Typography>
					<Typography
						variant="h3"
						component="h1"
						gutterBottom
						sx={{ fontSize: 56, fontWeight: 700 }}
					>
						Web Developer
					</Typography>
				</Box>
				<Box>
					<Typography
						variant="inherit"
						component="p"
						gutterBottom
						sx={{
							fontFamily: "'URW Chancery L', cursive",
							fontSize: 20,
							fontStyle: 'italic',
							color: '#515152',
						}}
					>
						&nbsp;&nbsp;&nbsp;&lt;/body&gt;<br />
						&lt;/html&gt;
					</Typography>
				</Box>
			</CustomizedBox>
			<Box sx={{ height: '100%' }}>
				<Typography variant="h4" component="h1" gutterBottom>
				Next.js v5-beta with TypeScript example
				</Typography>
				<Link href="/about">
				Go to the about page
				</Link>
				<ProTip />
				<Copyright />
			</Box>
		</Stack>
  );
}
