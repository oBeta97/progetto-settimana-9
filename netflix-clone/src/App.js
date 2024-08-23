import './App.css';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.js'
import "../node_modules/bootstrap-icons/font/bootstrap-icons.min.css";

import MyNav from './components/MyNav';
import MyMain from './components/MyMain.jsx';
import MyFooter from './components/MyFooter.jsx';
import SettingsPage from './components/SettingsPage.jsx';

function App() {
  return (
    <div className='bg-black text-light p-0 m-0 vh-100 d-flex flex-column'>
      <header>
        <MyNav />
      </header>

      <main className='flex-grow-1'>
        <MyMain />
        {/* <SettingsPage /> */}
      </main>

      <footer className='bg-black text-secondary'>
        <MyFooter />
      </footer>
    </div>
  );
}

export default App;
