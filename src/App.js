import routes from "./routes";
import { useRoutes } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "./state/appStateManagement";

function App() {
   const { state } = useContext(AppContext);
   const routing = useRoutes(routes(state.isAuthenticated));
   return <>{routing}</>;
}

export default App;
