import React, {Component} from 'react';
import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'
import contentData from './contentData'

class App extends Component {
  // const { params } = props;
  render() {
    const { match } = this.props;
    const { params } = match;
    let id = params.id;

    if (!id) id = contentData[0].title.replace(/ /g, '-').toLowerCase()

    return (
      <div>
        <Header titles={contentData}/>
        <Content subjects={contentData} id={id}/>
        <Footer />
      </div>
    )
  }
}

export default App;
