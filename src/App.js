//import logo from './logo.svg';
//import './App.css';
import BellaDiallo from'./BellaDiallo.jpeg'
import About from './components/About';
function App() {
  return (

     <div className="App">
     <header className="App-header">
     <img src={BellaDiallo} className="Bella Diallo" alt="logo"/>
      </header>
      {About}
      </div>
  )
    
    }

export default App;

