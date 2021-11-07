import { Switch, Route } from "react-router-dom";
import NavBar from "components/NavBar";
import { subscribeToAuthChanges } from "firebaseApp/auth";
import { useActionsApp } from "state";
import HomeScreen from "screens/HomeScreen";
import LandingScreen from "screens/LandingScreen";

const App = () => {
  const { setUser } = useActionsApp();
  subscribeToAuthChanges(setUser);

  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/" component={LandingScreen} />
        <Route exact path="/home" component={HomeScreen} />
      </Switch>
    </>
  );
};

export default App;
