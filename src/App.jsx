import Navbar from './sections/navbar/Navbar';
import Header from './sections/header/Header';
import About from './sections/about/About';
import Services from './sections/services/Services';
import Portfolio from './sections/portfolio/Portfolio';
import Contact from './sections/contact/Contact';
import Footer from './sections/footer/Footer';
import FloatingNav from './sections/floating-nav/FloatingNav';
import Theme from './theme/Theme';
import { useThemeContext } from './context/theme-context';
import {useRef, useState, useEffect} from 'react'

const App = () => {
  const {themeState} = useThemeContext();

  const mainRef = useRef();
  const [showFloatingNav, setShowFloatingNav] = useState(true);
  const [siteYPostion, setSiteYPosition] = useState(0)

  function showFloatingNavHandler() {
    setShowFloatingNav(true);
  }

  const hideFloatingNavHandler = () => {
    setShowFloatingNav(false);
  }

  // check if floating nav should be shown or hidden

  useEffect(() => {
    const checkYPosition = setInterval((() => {
        // check if we scrolled up or down at least 20px
        if (siteYPostion < (mainRef?.current?.getBoundingClientRect().y - 20) || siteYPostion > (mainRef?.current?.getBoundingClientRect().y + 20)) {
          showFloatingNavHandler();
        } else {
          hideFloatingNavHandler();
        }

        setSiteYPosition(mainRef?.current?.getBoundingClientRect().y);
      }), 2000);

    // cleanup function
    return () => clearInterval(checkYPosition);
  }, [siteYPostion]);

  

  return (
    <main className={`${themeState.primary} ${themeState.background}`} ref={mainRef}>
        <Navbar/>
        <Header/>
        <About/>
        <Services/>
        <Portfolio/>
        <Contact/>
        <Footer/>
        <Theme/>
        {showFloatingNav && <FloatingNav/>}
    </main>
  )
}

export default App