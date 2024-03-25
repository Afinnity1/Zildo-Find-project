import ParticlesBg from "particles-bg";
import Register from "./Register";


function App() {
  return (
      <div className="App">
          <div className="content">
            <Register />
            <ParticlesBg type="cobweb" bg={true} />
          </div>
      </div>
  );
}

export default App;
