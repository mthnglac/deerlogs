import * as React from 'react';
import Box, { BoxProps } from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon, { ListItemIconProps } from '@mui/material/ListItemIcon';
import ListItemButton, { ListItemButtonProps } from '@mui/material/ListItemButton';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSoundcloud } from '@fortawesome/free-brands-svg-icons';
import { styled } from '@mui/material/styles';

const drawerWidth = 60;

const CustomizedBox = styled(Box)<BoxProps>({
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'space-between',
	height: '100%',
});

const CustomizedListItemButton = styled(ListItemButton)<ListItemButtonProps>({
	justifyContent: 'center',
});

const CustomizedListItemIcon = styled(ListItemIcon)<ListItemIconProps>({
	minWidth: 'unset',
});

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
				<CustomizedBox>
					<List>
						<ListItem disablePadding>
							<CustomizedListItemButton>
								<CustomizedListItemIcon>
									<HomeOutlinedIcon sx={{ fontSize: 27 }} />
								</CustomizedListItemIcon>
							</CustomizedListItemButton>
						</ListItem>
						<ListItem disablePadding>
							<CustomizedListItemButton>
								<CustomizedListItemIcon>
									<AccountCircleOutlinedIcon sx={{ fontSize: 27 }} />
								</CustomizedListItemIcon>
							</CustomizedListItemButton>
						</ListItem>
						<ListItem disablePadding>
							<CustomizedListItemButton>
								<CustomizedListItemIcon>
									<SettingsOutlinedIcon sx={{ fontSize: 27 }} />
								</CustomizedListItemIcon>
							</CustomizedListItemButton>
						</ListItem>
						<ListItem disablePadding>
							<CustomizedListItemButton>
								<CustomizedListItemIcon>
									<EmailOutlinedIcon sx={{ fontSize: 27 }} />
								</CustomizedListItemIcon>
							</CustomizedListItemButton>
						</ListItem>
					</List>
					<List>
						<ListItem disablePadding>
							<CustomizedListItemButton>
								<CustomizedListItemIcon>
									<TwitterIcon sx={{ fontSize: 17 }} />
								</CustomizedListItemIcon>
							</CustomizedListItemButton>
						</ListItem>
						<ListItem disablePadding>
							<CustomizedListItemButton>
								<CustomizedListItemIcon>
									<GitHubIcon sx={{ fontSize: 17 }} />
								</CustomizedListItemIcon>
							</CustomizedListItemButton>
						</ListItem>
						<ListItem disablePadding>
							<CustomizedListItemButton>
								<CustomizedListItemIcon>
									<LinkedInIcon sx={{ fontSize: 17 }} />
								</CustomizedListItemIcon>
							</CustomizedListItemButton>
						</ListItem>
						<ListItem disablePadding>
							<CustomizedListItemButton>
								<CustomizedListItemIcon>
									<FontAwesomeIcon icon={faSoundcloud} />
								</CustomizedListItemIcon>
							</CustomizedListItemButton>
						</ListItem>
					</List>
				</CustomizedBox>
      </Drawer>
    </Box>
  );
}
