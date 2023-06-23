
import './App.css'
import About from './components/About/About';
import Content from './components/content/Content';

import Header from './components/header/header';
function App() {
  return (
    <div className='app'>
      <Header/>
      <Content/>
      <About/>
    </div>
  );
}

export default App
