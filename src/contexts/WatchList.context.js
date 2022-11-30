import React from "react";

const WatchListContext = React.createContext({
    watchLists: [], 
    addWatchList: () => {}
})

export default WatchListContext