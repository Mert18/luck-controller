import { BrowserRouter, Switch, Route } from "react-router-dom";
import FloatingBubbles from "./screens/FloatingBubbles";
import HomePage from "./screens/HomePage";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/floating-bubbles" component={FloatingBubbles} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
