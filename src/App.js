import React from 'react'
import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'
import { useLocalStorage } from 'use-hooks'
import VLibras from '@djpfs/react-vlibras'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import "./themes/default.css"
import "./themes/high-contrast.css"

function App() {
  const toggleTheme = () => {
    if (theme === "high-contrast") {
        setTheme("default")
    } else if (theme === "default") {
        setTheme("high-contrast")
    }
  }

  const [theme , setTheme ] = useLocalStorage("theme", "default") //useLocalStorage("theme", "default")
  
  return (
    <div className={`${theme}`}>
      <BrowserRouter>
        <Header selector={toggleTheme} />
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
