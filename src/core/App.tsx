import { Switch, Route } from "react-router-dom";
import HomeScreen from "screens/HomeScreen";
import NavBar from "components/NavBar";
import { subscribeToAuthChanges } from "firebaseApp/auth";
import { useActionsApp } from "state";

const App = () => {
  const { setUser } = useActionsApp();
  subscribeToAuthChanges(setUser);

  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/" component={HomeScreen} />
      </Switch>
    </>
  );
};

export default App;
