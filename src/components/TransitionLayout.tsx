import * as React from 'react';
import WagonSideBar from './WagonSideBar';

interface LayoutProps {
   children: React.ReactNode;
}

export default function TransitionLayout({ children }: LayoutProps) {
  return (
    <div>
			<WagonSideBar />
      <div>
        {children}
      </div>
    </div>
  );
}

