import "./App.css";
import { Provider } from "react-redux";
import { Landing } from "./components/Landing";
import { configStore } from "./state/store/configStore";

function App() {
  const myStore = configStore();
  return (
    <div className="main">
      <Provider store={myStore}>
        <Landing />
      </Provider>
    </div>
  );
}
export default App;
