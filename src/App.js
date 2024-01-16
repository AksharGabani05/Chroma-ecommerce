import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { Outlet } from "react-router-dom"

function App() {
  return (
    <>
      <Header />
      <main className='bg-backgroundColor'>
        <Outlet />
      </main>


    </>
  );
}

export default App;
