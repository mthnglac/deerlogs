import * as React from 'react';
import WagonSideBar from './WagonSideBar';
import WagonAppBar from './WagonAppBar';

interface LayoutProps {
   children: React.ReactNode;
}

export default function TransitionLayout({ children }: LayoutProps) {
  return (
    <div>
			<WagonSideBar />
			<WagonAppBar />
      <div>
        {children}
      </div>
    </div>
  );
}

