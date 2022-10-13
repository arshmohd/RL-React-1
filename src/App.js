import reactlogo from "./assets/react-logo.svg";
import "./App.css";
import SayHello from "./components/SayHello";
import Card from "./components/Card";
import Reactlogo from "./components/Reactlogo";

function App() {
  return (
    <div className="App">
      <header className="App-header static">
        {/* <img src={reactlogo} className="App-logo" alt="logo" /> */}
        <SayHello />
      </header>
      <div>
        <Card />
      </div>
      <div className="App-logo absolute -top-6 left-[60rem]">
        <Reactlogo />
        </div>
        <div className="App-logo w-[20rem] h-[20rem] absolute bottom-80 left-[68rem]">
        <Reactlogo />
        </div>
        <div className="App-logo w-[20rem] h-[20rem] absolute -bottom-8 left-[60rem]">
        <Reactlogo />
        </div>
        <div className="w-[15rem] App-logo absolute -top-6 right-[10rem]">
        <Reactlogo />
        </div>
        <div className="App-logo w-[15rem] h-[20rem] absolute bottom-80 right-[7rem]">
        <Reactlogo />
        </div>
        <div className="App-logo w-[15rem] h-[20rem] absolute -bottom-8 right-[14rem]">
        <Reactlogo />
        </div>
    </div>
  );
}

export default App;
