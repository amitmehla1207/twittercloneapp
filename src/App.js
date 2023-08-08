import Articles from './components/Articles';
import Header from './components/Header';
import Rightbar from './components/Rightbar';
import Titlebar from './components/Titlebar';
import logo from './logo.svg';
import './media.css';
import './utils.css'
import Modal from './utils/Modal';
import './utils/modal.css'

function App() {
  return (
    <>
    
    <div className="container">
        <div className="wrapper">
        <Header/>
        <main id="center">
                <div className="content">
                  <Titlebar/>
                  <Articles/>
                  </div>
                  <Rightbar/>
                  </main>
        </div>
        </div>
        </>
  );
}

export default App;
