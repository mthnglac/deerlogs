import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

const drawerWidth = 240;

export default function PermanentDrawerLeft() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <List>
					<ListItem disablePadding>
						<ListItemButton>
							<ListItemIcon>
								<InboxIcon />
							</ListItemIcon>
							<ListItemText primary={'blabla'} />
						</ListItemButton>
					</ListItem>
        </List>
        <Divider />
        <List>
					<ListItem disablePadding>
						<ListItemButton>
							<ListItemIcon>
								<MailIcon />
							</ListItemIcon>
							<ListItemText primary={'sadjfkl'} />
						</ListItemButton>
					</ListItem>
        </List>
      </Drawer>
    </Box>
  );
}
