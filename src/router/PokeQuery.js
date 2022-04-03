import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import PokeBrowser from '../views/PokeBrowser';

const queryClient = new QueryClient();

export default function PokeQuery() {
    return (
        <QueryClientProvider client={queryClient}>
            <PokeBrowser />
        </QueryClientProvider>
    )
}
