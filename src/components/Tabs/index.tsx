import * as React from 'react';
import styles from './Tabs.module.scss'

//Components
import { Box, Tabs, Tab } from '@mui/material';
import About from '../Home/About';
import Experience from '../Home/Experience';
import Education from '../Home/Education';
import Skills from '../Home/Skills';
import Repositories from '../Home/Repositories';
import Projects from '../Home/Projects';
import Gist from '../Home/Gist';

//Icons
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';


interface IProps {
  name: string;
  data: any;
}

interface ITabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function chooseComponent({name, data}:IProps) {
  switch(name){
    case'about':
      return <About data={data}/>
    case'experience':
      return <Experience data={data}/>
    case'education':
      return <Education data={data}/>
    case'skill':
      return <Skills data={data}/>  
    case'repositories':
      return <Repositories data={data}/>
    case'project':
      return <Projects data={data}/>
    case'gist':
      return <Gist data={data}/>
  }
} 

function chooseIcon(name:string) {
  switch(name){
    case'about':
      return <AccountCircleOutlinedIcon />
    case'experience':
      return <WorkOutlineOutlinedIcon />
    case'education':
      return <SchoolOutlinedIcon />
    case'skill':
      return <CodeOutlinedIcon />  
    case'repositories':
      return <GitHubIcon />
    case'project':
      return <AccountTreeOutlinedIcon />
    case'gist':
      return <GitHubIcon />
  }
} 

function TabPanel(props: ITabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      key={`keypanel-${index}`}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number, name:string) {
  return {
    key: `key-${name}-${index}`,
    id: `tab-${name}-${index}`,
    'aria-controls': `tabpanel-${name}-${index}`
  };
}

export default function MyTabs({data}: { data: IProps[] }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          { data.map((item, index) => <Tab sx={{color:'white'}} label={item.name} icon={chooseIcon(item.name)}  iconPosition="start" {...a11yProps(index,item.name)}/>) }
        </Tabs>
      </Box>
      { data.map((item, index) => <TabPanel value={value} index={index} children={chooseComponent(item)} />) }
    </Box>
  );
}