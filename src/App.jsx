import Accordion from "./components/Accordion";
import data from "./components/data";

function App() {
  return (
    <div className="App">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center my-4 md:my-6 lg:my-8">
        Accordion Example
      </h1>
      <Accordion data={data} />
    </div>
  );
}

export default App;
