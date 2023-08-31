import React, { useRef } from "react";

const Rightbar = () => {
  const RightBarRef = useRef();

  const FixTheSideBar = () => {
    let Ele = document.getElementById("rightbarContent");
    let EleSibling = document.getElementById("searchCon");

    let EleHeight = Ele.offsetHeight;

    let EleSiblingHeight = EleSibling.clientHeight;


    if (window.innerHeight < EleHeight) {
      if (window.scrollY > EleHeight / 2) {
        Ele.style.setProperty("position", "fixed");

        Ele.style.setProperty("top", -((EleHeight / 2) - EleSiblingHeight) + "px");
      } else {
        Ele.style.setProperty("position", "absolute");

        Ele.style.setProperty("top", "auto");
      }
    } else {
      Ele.style.setProperty("position", "fixed");
    }
  };

  window.addEventListener("scroll", FixTheSideBar);
  window.addEventListener("load", FixTheSideBar);
  window.addEventListener("resize", FixTheSideBar);

  return (
    <aside id="right">
      <div className="searchcontainer" id="searchCon">
        <div className="searchwrapper">
          <div className="searchbox">
            <form>
              <div className="searchinput">
                <div className="serachicon">
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="searchsvg"
                  >
                    <g>
                      <path d="M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z"></path>
                    </g>
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Search Twitter Clone"
                  className="search-input-box"
                />
              </div>
            </form>
          </div>
        </div>
      </div>

      <div id="rightbarContent" style={{ width: "inherit" }}>
        <div className="box sp12tb sp16lr">
          <h1 className="title">Get Verified</h1>
          <h2 className="subtitle">Subscribe to unlock new features.</h2>
          <button className="btn black">Get Verified</button>
        </div>

        <div className="box sp12tb sp16lr">
          <h1 className="title">Get Verified</h1>
          <h2 className="subtitle">Subscribe to unlock new features.</h2>
          <button className="btn black">Get Verified</button>
        </div>

        <div className="box sp12tb sp16lr">
          <h1 className="title">Get Verified</h1>
          <h2 className="subtitle">Subscribe to unlock new features.</h2>
          <button className="btn black">Get Verified</button>
        </div>

        <div className="box sp12tb sp16lr">
          <h1 className="title">Get Verified</h1>
          <h2 className="subtitle">Subscribe to unlock new features.</h2>
          <button className="btn black">Get Verified</button>
        </div>

        <div className="box sp12tb sp16lr">
          <h1 className="title">Get Verified</h1>
          <h2 className="subtitle">Subscribe to unlock new features.</h2>
          <button className="btn black">Get Verified</button>
        </div>

        <div className="box">
          <h1 className="title">What's happening</h1>
          <h2 className="subtitle">Subscribe to unlock new features.</h2>
          <button className="btn black">Get Verified</button>
        </div>

        <div className="box">
          <h1 className="title sp16lr">Who to follow</h1>
          <div className="list">
            <div className="rec-list">
              <div className="rec-avatar">
                <div className="user-avatar"></div>
              </div>
              <div className="rec-list-right">
                <div className="rec-details">
                  <a href="/" className="user-name">
                    Amit Kumar
                  </a>
                  <span className="user-handle">@amitmehla1207</span>
                </div>
                <div>
                  <button className="btn black">Follow</button>
                </div>
              </div>
            </div>
          </div>

          <div className="list">
            <div className="rec-list">
              <div className="rec-avatar">
                <div className="user-avatar"></div>
              </div>
              <div className="rec-list-right">
                <div className="rec-details">
                  <a href="/" className="user-name">
                    John Smith
                  </a>
                  <span className="user-handle">@john_smith</span>
                </div>
                <div>
                  <button className="btn black">Follow</button>
                </div>
              </div>
            </div>
          </div>

          <div className="list">
            <div className="rec-list">
              <div className="rec-avatar">
                <div className="user-avatar"></div>
              </div>
              <div className="rec-list-right">
                <div className="rec-details">
                  <a href="/" className="user-name">
                    Elon Musk
                  </a>
                  <span className="user-handle">@elonmusk</span>
                </div>
                <div>
                  <button className="btn black">Follow</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <nav className="footer">
          <a href="/">Terms of Service</a>
          <a href="/">Privacy Policy</a>
          <a href="/">Cookie Policy</a>
          <a href="/">Accessibility</a>
          <a href="/">Ads info</a>
          <a href="/">More ...</a>
          <span>&#169; 2023 TWC AK</span>
        </nav>
      </div>
    </aside>
  );
};

export default Rightbar;
