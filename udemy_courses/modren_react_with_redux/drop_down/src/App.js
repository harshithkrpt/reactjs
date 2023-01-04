import Translate from './components/Translate'
import Page1 from './components/Page1'
import Page2 from './components/Page2'
import Page3 from './components/Page3'

function App(props) {

  const showTranslate = () => {
    if(window.location.pathname === '/') {
      return <Translate />
    }

    if(window.location.pathname === '/page1') {
      return <Page1 />
    }

    if(window.location.pathname === '/page2') {
      return <Page2 />
    }

    if(window.location.pathname === '/page3') {
      return <Page3 />
    }
  }

  return (
    <div className="App ui container">
      <link href='/page1' title='Page1'/>
      {showTranslate()}
    </div>
  );
}

export default App;
