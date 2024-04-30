import './App.css';
import Header from './pages/comp/header';
import Index from './pages/index';
import Footer from './pages/comp/footer';

function App() {
  return (
    <>
      <Header/>
      <main>
          <Index/>
      </main>
      <Footer/>
    </>
  );
}

export default App;
