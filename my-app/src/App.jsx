import Card from "./Card"; // Adjust the path based on your project structure
import "./App.css"; // You can add styling in a separate CSS file

const App = () => {
  return (
    <div className="app">
      <Card
        title="React Card Component"
        content="This is a simple card component in React."
      />
      <Card title="React Card 2" content="Another simple card component" />
    </div>
  );
};

export default App;
