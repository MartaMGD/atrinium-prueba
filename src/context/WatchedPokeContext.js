import React, { useEffect, useState } from 'react';
import { createContext } from 'react';

const WatchedPokeContext = createContext();

function WatchedPokeProvider({ children }) {

    const [watchedPokeIds, setWatchedPokeIds] = useState([]);
    const value = {watchedPokeIds, setWatchedPokeIds};

    useEffect(() => {
        console.log(watchedPokeIds);
    },[watchedPokeIds]);

    return (
        <WatchedPokeContext.Provider value={value}>
            {children}
        </WatchedPokeContext.Provider>
    )
}

// Exports
export {WatchedPokeContext, WatchedPokeProvider};
