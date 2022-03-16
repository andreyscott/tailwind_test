import './App.css';
import CtaSection from './components/Cta';
import Footer from './components/footer';
import DropDownMenu from './components/menu';

function App() {
  return (
    <div className="App">
     <DropDownMenu />
     <CtaSection />
     <Footer />
    </div>
  );
}

export default App;
