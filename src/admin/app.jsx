import { BrowserRouter as Router } from "react-router-dom";
import Aside from "./components/aside";
import Header from "./components/header";
import Content from "./components/content";

function adminApp() {
  return (
    <div className="App">
      <Aside />
      <div id="right-panel" class="right-panel">
        <Header />
        <Content />
      </div>
    </div>
  );
}

export default adminApp;
