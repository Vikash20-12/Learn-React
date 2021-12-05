import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
      <Navbar title="LearnReact" about="About" />
      <div className="container my-4">
        <TextForm heading="Enter the text:" />
      </div>

    </>
  );
}

export default App;
