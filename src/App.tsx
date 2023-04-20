import React from 'react';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
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
    </QueryClientProvider>
  );
}

export default App;
