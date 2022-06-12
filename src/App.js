import { Routes, Route} from "react-router-dom";

import Home from "./routes/home/home.component";
import Navigtion from "./routes/navigation/navigation.component";
import Authentication from "./routes/authentication/authentication.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigtion />}>
        <Route index element={<Home />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
}

export default App;
