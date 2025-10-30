import Navbar from './components/Navbar';
import Header from './components/Header';
import Programas from './components/Programas';
import Contacto from './components/Contacto';
import './styles/global.css';

export default function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Programas />
      <Contacto />
    </>
  );
}