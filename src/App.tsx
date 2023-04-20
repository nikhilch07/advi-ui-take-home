import React from 'react';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import './App.css';
import Navbar from './NavBar/Navbar';
import Footer from './Footer/Footer';
import { MoviesListPage } from './components/MoviesListPage';
const queryClient = new QueryClient()
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
    <div className="App">
      <Navbar />
      <header className="App-header">
      <MoviesListPage />
      </header>
      <Footer />
    </div>
    <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
