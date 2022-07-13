import HeaderDesktop from './HeaderDesktop'
import HeaderMobile from './HeaderMobile'
import useMediaQuery from '../../hooks/useMediaQuery';

const Header = () => {
  const isBreakpoint = useMediaQuery(881)
  return isBreakpoint ? <HeaderMobile /> : <HeaderDesktop />
}


export default Header