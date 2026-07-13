import { Outlet } from 'react-router-dom';

import './App.scss';
import { Header } from './components/Header';
import { Footer } from './components/Footer/Footer';

export const App = () => {
  return (
    <div className="App">
      <Header />
      <h1 className="App__title">Product Catalog</h1>
      <main className="App__container">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
