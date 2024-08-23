import './App.css';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.js'
import "../node_modules/bootstrap-icons/font/bootstrap-icons.min.css";

import MyNav from './components/MyNav';
import MyMain from './components/MyMain.jsx';
import MyFooter from './components/MyFooter.jsx';

function App() {
  return (
    <div className='bg-black text-light p-0 m-0'>
      <header>
        <MyNav />
      </header>

      <main>
        <MyMain />
      </main>

      <footer className='bg-black text-secondary'>
        <MyFooter />
      </footer>
    </div>
  );
}

export default App;
