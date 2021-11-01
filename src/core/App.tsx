import { Switch, Route } from "react-router-dom";
import HomeScreen from "screens/HomeScreen";
import NavBar from "components/NavBar";
import { subscribeToAuthChanges } from "firebaseApp/auth";
import { useActionsApp, useStateSelector } from "state";
import LandingScreen from "screens/LandingScreen";

const App = () => {
  const user = useStateSelector(({ app }) => app.user);
  const { setUser } = useActionsApp();
  subscribeToAuthChanges(setUser);

  return (
    <>
      <NavBar />
      {user ? (
        <Switch>
          <Route exact path="/" component={HomeScreen} />
        </Switch>
      ) : (
        <LandingScreen />
      )}
    </>
  );
};

export default App;
