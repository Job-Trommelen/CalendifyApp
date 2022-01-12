import EventViewer from "./components/Events/EventViewer";
import Header from "./components/Layout/Header";

const App = () => {
  return (
    <div className="container">
      <Header title="Calendify"/>
      <EventViewer />
    </div>
  );
}

export default App;
