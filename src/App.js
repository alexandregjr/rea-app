import React, {Component} from 'react'
import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'
import VLibras from '@djpfs/react-vlibras'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import './App.css'

class App extends Component {
  render() { 
    return (
      <BrowserRouter>
        <Header/>
        <VLibras />
        <Switch>
            <Route exact path='/topic/:id' component={Content} />
            <Route path='/' component={Content} />
        </Switch>
        <Footer />
      </BrowserRouter>
        

    )
  }
}

export default App;
