import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import MainPage from "./pages/MainPage";
import Detail from "./pages/Detail";
import WatchList from "./pages/WatchList";
import WatchListContext from "./contexts/WatchList.context";

function App() {
  const [watchLists, setWatchLists] = useState([]);
  const addWatchList = (movie) => {
    const cloned = [...watchLists];
    if (!watchLists.find((wl) => wl.id === movie.id)) {
      cloned.push(movie);
      setWatchLists(cloned);
    } else {
      const index = watchLists.findIndex((wl) => wl.id === movie.id)
      cloned.splice(index, 1)
      setWatchLists(cloned)
    }
  };

  return (
    <WatchListContext.Provider value={{ watchLists, addWatchList }}>
      <Router>
        <div className="App mt-5">
          <Header />
          <Routes>
            <Route exact path="/" element={<MainPage />} />
            <Route exact path="/my-watch-list" element={<WatchList />} />
            <Route path="/:id" element={<Detail />} />
          </Routes>
        </div>
      </Router>
    </WatchListContext.Provider>
  );
}

export default App;
