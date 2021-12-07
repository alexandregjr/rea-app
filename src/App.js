import React from 'react'
import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'
import { useLocalStorage } from 'use-hooks'
import VLibras from '@djpfs/react-vlibras'
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'

import "./themes/default.css"
import "./themes/high-contrast.css"

const nextTheme = {
  "default": "high-contrast" ,
  "high-contrast" : "default"
};

function App() {
  const [theme , setTheme ] = useLocalStorage("theme", "default") //useLocalStorage("theme", "default")
  const [curSize, setCurSize] = React.useState(1);

  const toggleTheme = React.useMemo(() => () => setTheme(nextTheme[theme]), [theme, setTheme]);

  return (
    <div className={`${theme}`} style={{ fontSize: `${curSize}rem` }}>
      <BrowserRouter>
        <Header selector={toggleTheme} theme={theme} increaseFontSize={() => setCurSize(last => last + 0.2)} decreaseFontSize={() => setCurSize(last => last - 0.2)} />
        <VLibras />
        <Switch>
          <Route exact path='/rea-app/topic/:id' component={Content} />
          <Route exact path='/rea-app/' component={Content} />
          <Redirect to="/rea-app/" />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  )
  
}

export default App;
