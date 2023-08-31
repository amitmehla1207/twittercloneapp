import { useDispatch, useSelector } from "react-redux";
import Articles from "./components/Articles";
import Header from "./components/Header";
import Rightbar from "./components/Rightbar";
import Titlebar from "./components/Titlebar";
import logo from "./logo.svg";
import "./media.css";
import "./utils.css";
import Modal from "./utils/Modal";
import NewPost from "./utils/NewPost";
import "./utils/modal.css";
import {
  Overlay,
  PostModalStatus,
  togglePostModal,
  userContolMenuStatus,
} from "./redux/slices/globalSlice";
import { DropDownMenu } from "./utils/DropDownMenu";


function Default() {
  const dispatch = useDispatch();
  const newPostModal = useSelector(PostModalStatus);

  const UserControlMenu = useSelector(userContolMenuStatus);
  function PostModalClose() {
    dispatch(togglePostModal());
    console.log("clicked");
  }

  const overlay = useSelector(Overlay);
  return (
    <>
    {overlay && <div class="transoverlay"></div>}
      {newPostModal && (
        <Modal closeHandler={PostModalClose}>
          <NewPost />
        </Modal>
      )}
  
      <div className="container">
        <div className="wrapper">
          <Header />
          <main id="center">
            <div className="content">
              <Titlebar />
              <div className="indexNewPost">
              <NewPost/>
              </div>
              <Articles />
            </div>
            <Rightbar />
          </main>
        </div>
      </div>
    </>
  );
}

export default Default;
