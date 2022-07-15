import './styles/index.scss'
import Header from './components/Header.jsx'

function App() {
  return (
    <div className="App">
      
      <Header />

      <div>
        <h4>
          Hi, my name is
        </h4>
        <h2>
          Thomas Devasia
        </h2>
        <h5>i do bla bla something (not heading but bit bold)</h5> 

        <p>
          maybe a small para? or should be abouy the same?
        </p>
      </div>
    </div>
  );
}

export default App;