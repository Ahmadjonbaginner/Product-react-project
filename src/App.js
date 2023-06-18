import './App.css';
import About from './components/about/about';
import Clients from './components/clients/clients';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Prices from './components/prices/prices';
import Strategies from './components/strategies/strategies';

function App() {
  return (
    <>
     <Header />
     <main>
      <About />
      <Strategies />
      <Prices />
      <Clients />
     </main>
     <Footer />
    </>
  );
}

export default App;
