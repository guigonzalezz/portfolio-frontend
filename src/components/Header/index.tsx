import HeaderDesktop from './HeaderDesktop'
import HeaderMobile from './HeaderMobile'
import useMediaQuery from '../../hooks/useMediaQuery';
import React, { SetStateAction } from 'react';


export default function Header ({setSectionByHFSelected}: any) {
  const isBreakpoint = useMediaQuery(950)
  return isBreakpoint ? <HeaderMobile setSectionByHFSelected={setSectionByHFSelected}/> : <HeaderDesktop setSectionByHFSelected={setSectionByHFSelected}/>
}


