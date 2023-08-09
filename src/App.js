import { useDispatch, useSelector } from 'react-redux';
import Articles from './components/Articles';
import Header from './components/Header';
import Rightbar from './components/Rightbar';
import Titlebar from './components/Titlebar';
import logo from './logo.svg';
import './media.css';
import './utils.css'
import Modal from './utils/Modal';
import NewPost from './utils/NewPost';
import './utils/modal.css'
import { PostModalStatus, togglePostModal } from './redux/slices/globalSlice';




function App() {
const dispatch = useDispatch();
  const newPostModal = useSelector(PostModalStatus);
function PostModalClose(){
  dispatch(togglePostModal());
  console.log('clicked')
}
  return (
    <>
   {newPostModal && (<Modal closeHandler={PostModalClose}><NewPost/></Modal>)}
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
