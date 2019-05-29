import React, {Component} from 'react';
import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'
import contentData from './contentData'

class App extends Component {
  render() {
    let id = this.props.match.params.id;
    if (!id) id = contentData[0].title.replace(/ /g, '-').toLowerCase()

    const topicTitles = contentData.map((topic) => (
      {title: topic.title}
    ))
    
    return (
      <div>
        <Header topics={topicTitles}/>
        <Content topics={contentData} id={id}/>
        <Footer />
      </div>
    )
  }
}

export default App;
