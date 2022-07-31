import HeaderDesktop from './HeaderDesktop'
import HeaderMobile from './HeaderMobile'
import useMediaQuery from '../../hooks/useMediaQuery';

export default function Header () {
  const isBreakpoint = useMediaQuery(950)
  return isBreakpoint ? <HeaderMobile /> : <HeaderDesktop />
}


