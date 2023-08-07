import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";

function App() {
  return (
    <>
      <Navbar />
      <div className="container my-3">
        <TextForm heading="Enter text below" />
        {/* <About my-1 /> */}
      </div>
    </>
  );
}

export default App;
