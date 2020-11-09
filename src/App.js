import logo from './logo.svg';
import './App.css';
import Card from "./cards/card";
import Cards from "./cards/cards";
import Form from "./cards/form";


function App() {
return (
  <div>
    <div>
  <h1 className="card-titlee"> My BEST CITY</h1>
  </div>
  <Cards/>
  <h1 className="form-title">CONTACT ME</h1>
  <Form/>
  </div>
  
)
    
  }

export default App;
