import React from 'react'
import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'
import { useLocalStorage } from 'use-hooks'
import VLibras from '@djpfs/react-vlibras'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import "./themes/default.css"
import "./themes/high-contrast.css"

const nextTheme = {
  "default": "high-contrast" ,
  "high-contrast" : "default"
};

function App() {
  const [theme , setTheme ] = useLocalStorage("theme", "default") //useLocalStorage("theme", "default")

  const toggleTheme = React.useMemo(() => () => setTheme(nextTheme[theme]), [theme, setTheme]);

  return (
    <div className={`${theme}`}>
      <BrowserRouter>
        <Header selector={toggleTheme} theme={theme} />
        <VLibras />
        <Switch>
          <Route exact path='/topic/:id' component={Content} />
          <Route path='/' component={Content} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  )
  
}

export default App;
