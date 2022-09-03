import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import styles from './Drawer.module.scss'

import PersonIcon from '@mui/icons-material/Person';
import DvrIcon from '@mui/icons-material/Dvr';
import SchoolIcon from '@mui/icons-material/School';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import { textFieldClasses } from '@mui/material';

export default function TemporaryDrawer() {
  const [state, setState] = React.useState(false);

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (event.type === 'keydown' && ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')) {
      return;
    }

    setState(open);
  };

  // eslint-disable-next-line react/jsx-key
  const icons = [ <PersonIcon />,<DvrIcon />, <BusinessCenterIcon />, <SchoolIcon />]

  return (
    <React.Fragment key={"menu-button"}  >
      <MenuIcon onClick={toggleDrawer(true)} />
      <Drawer
        anchor={"left"}
        open={state}
        onClose={toggleDrawer(false)}
        disableScrollLock={ true }
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
              <ListItem key={text} disablePadding component="a" href={`#${text.split(" ")[0].toLocaleLowerCase()}`}>
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