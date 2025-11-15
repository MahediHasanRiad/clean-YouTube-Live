import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "styled-components";
import NavBar from "./components/UI/nav/navbar";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Favourite from "./Pages/favourite";
import History from "./Pages/history";
import Playlist from "./Pages/playlist";

function App() {
  return (
    <section>
      <BrowserRouter>
        <CssBaseline />
        <NavBar>

          <section style={{ col: '8' }}>
            <Routes>
            <Route path="/home" element={<Favourite/>} />
            <Route path="/history" element={<History/>} />
            <Route path="/playlist" element={<Playlist/>} />
          </Routes>
          </section>

        </NavBar>
      </BrowserRouter>
    </section>
  );
}

export default App;
