
import About from './components/About';
import Footer from './components/Footer';
import Header from './components/Header';
import Shop from './components/Shop';

function App() {
  return (
    <div className='body'>
      <Header />
      <main className='main'>
        <About />
        <Shop />
      </main>
      <Footer />
    </div>
  );
}

export default App;
