import Header from "./Components/Header/Header"
import './App.css'
import Content from "./Components/Content/Content"
import Bottom from "./Components/Bottom/Bottom"
const App = () => {
  return (
    <div className="App">
      <Header/>
      <Content/>
      <Bottom/>
    </div>
  )
}

export default App