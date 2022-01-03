import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import Aboutus from './pages/Aboutus';
import Home from './pages/Home';
import NotFound from './pages/NotFound';


function App() {
  return (
    <div>
      {/* <Home></Home> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            {/* <Route index element={<Home />} /> */}



            {/* <Route path=":teamId" element={<Team />} />
              <Route path="new" element={<NewTeamForm />} />
              <Route index element={<LeagueStandings />} /> */}
          </Route>
          <Route path="about" element={<Aboutus />}></Route>
          <Route path="about" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
