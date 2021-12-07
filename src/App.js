import React from 'react'
import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'
import { useLocalStorage } from 'use-hooks'
import VLibras from '@djpfs/react-vlibras'
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom'

import "./themes/default.css"
import "./themes/high-contrast.css"

const nextTheme = {
  "default": "high-contrast" ,
  "high-contrast" : "default"
};

function App() {
  const [theme , setTheme ] = useLocalStorage("theme", "default") //useLocalStorage("theme", "default")
  const [curFontScale, setFontScale] = React.useState(1);

  const toggleTheme = React.useMemo(() => () => setTheme(nextTheme[theme]), [theme, setTheme]);

  return (
    <div className={`${theme}`} style={{ fontSize: `${curFontScale}rem` }}>
      <HashRouter >
        <Header selector={toggleTheme} theme={theme} increaseFontSize={() => setFontScale(last => last + 0.2)} decreaseFontSize={() => setFontScale(last => Math.max(last - 0.2, 1))} />
        <VLibras />
        <Switch>
          <Route exact path='/topic/:id' component={Content} />
          <Route exact path='/' component={Content} />
          <Redirect to="/" />
        </Switch>
        <Footer />
      </HashRouter>
    </div>
  )
  
}

export default App;
