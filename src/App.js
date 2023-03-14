import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Form from './components/Form';
import Display from './components/Display';

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Form />
      <Display />
    </div>
  );
}

export default App;
