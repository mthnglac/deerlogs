import * as React from 'react';
import Container, { ContainerProps } from '@mui/material/Container';
import WagonSideBar from './WagonSideBar';
import WagonAppBar from './WagonAppBar';
import { styled } from '@mui/material/styles';

const CustomizedContainer = styled(Container)<ContainerProps>(({ theme }) => ({
	[theme.breakpoints.up('lg')]: {
		maxWidth: 'unset',
	},
}));

interface LayoutProps {
   children: React.ReactNode;
}

export default function TransitionLayout({ children }: LayoutProps) {
  return (
		<>
			<WagonSideBar />
			<WagonAppBar />
			<CustomizedContainer disableGutters>
				{children}
			</CustomizedContainer>
		</>
  );
}

