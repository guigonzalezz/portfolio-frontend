import { useEffect, ReactNode, SyntheticEvent, useState } from 'react';
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
  children?: ReactNode;
  className: string;
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
        <Box>
          {children}
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number, name:string) {
  return {
    id: `tab-${name}-${index}`,
    'aria-controls': `tabpanel-${name}-${index}`,
  };
}

export default function MyTabs({id, data, sectionByHFSelected}: { id: string, data: IProps[],  sectionByHFSelected: string }) {
  const [value, setValue] = useState(0);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  
  useEffect(()=>{
    if(sectionByHFSelected) {
      data.map((item, index)  => {
        if(item.name == sectionByHFSelected) {
          setValue(index)
        }
      })
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[sectionByHFSelected])

  return (
    <Box id={id} className={styles['box']}>
      <Box className={styles['section-titles']} sx={{ maxWidth: { xs: 320, sm:440 ,md: 600  } }}>
        <Tabs 
          variant="scrollable" 
          scrollButtons="auto" 
          className={styles['tabs']} 
          value={value} 
          onChange={handleChange} 
          aria-label="tabs" 
          textColor="secondary" 
          indicatorColor="secondary" 
        >
          { data.map((item, index) => <Tab key={`key-${item.name}-${index}`} sx={{color:'white'}} label={item.name} icon={chooseIcon(item.name)}  iconPosition="start" {...a11yProps(index,item.name)}/>) }
        </Tabs>
      </Box>
      {
        // eslint-disable-next-line react/no-children-prop
        data.map((item, index) => <TabPanel key={index} value={value} index={index} className={styles['section-panel']} children={chooseComponent(item)} />)
      }
    </Box>
  );
}