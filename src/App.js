import './App.css';
import Faq from './components/Faq/Faq';
import Features from './components/Features/Features';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Subscribe from './components/Subscribe/Subscribe';
import Download from './components/download/Download';

function App() {
  return (
    <main >
     <header className='header-bg'>
    
     <Navbar />
     <Header />
    </header>
    <Features/>
    <Download/>
    <Subscribe/>
    <Faq/>
    <Footer/>
    </main>
  );
}

export default App;
