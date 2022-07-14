import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import styles from './Drawer.module.scss'

import PersonIcon from '@mui/icons-material/Person';
import DvrIcon from '@mui/icons-material/Dvr';
import SchoolIcon from '@mui/icons-material/School';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';

export default function TemporaryDrawer() {
  const [state, setState] = React.useState(false);

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (event.type === 'keydown' && ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')) {
      return;
    }

    setState(open);
  };

  const icons = [ <PersonIcon />,<DvrIcon />, <BusinessCenterIcon />, <SchoolIcon />]

  return (
    <React.Fragment key={"menu-button"} >
      <MenuIcon onClick={toggleDrawer(true)}/>
      <Drawer
        anchor={"left"}
        open={state}
        onClose={toggleDrawer(false)}
        
      >
        <Box
          sx={{ width: 250, height: '100%'}}
          className={styles.background}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {['About me', 'Projects', 'Experience', 'Education'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton className={styles.option}>
                  <ListItemIcon className={styles.optionIcon}>
                    {icons[index]}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          
        </Box>
      </Drawer>
    </React.Fragment>
  );
}