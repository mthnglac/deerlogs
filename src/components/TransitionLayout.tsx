import * as React from 'react';
import Container from '@mui/material/Container';
import WagonSideBar from './WagonSideBar';
import WagonAppBar from './WagonAppBar';

interface LayoutProps {
   children: React.ReactNode;
}

export default function TransitionLayout({ children }: LayoutProps) {
  return (
    <Container disableGutters>
			<WagonSideBar />
			<WagonAppBar />
			{children}
    </Container>
  );
}

