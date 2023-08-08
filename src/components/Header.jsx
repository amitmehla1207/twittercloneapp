import React from 'react'
import { Navlinks } from './Navlinks'
import { useDispatch } from 'react-redux';
import { testClick } from '../redux/slices/tweetsSlice';

const Header = () => {

    const dispatch = useDispatch();

  return (
    <div id="left">
                <div className="left-bar">
                    <div className="leftuppr">
                        <div className="logo">
                            <h1>twitter clone</h1><span>by Amit</span>
                        </div>

            <Navlinks/>

            <div className="post-btn-wrapper">
                            <button className="btn btn-main post-btn"  onClick={()=> dispatch(testClick())}>
                                <div className="button-icon">

                                    <svg viewBox="0 0 24 24" aria-hidden="true"
                                        className="posticon">
                                        <g>
                                            <path
                                                d="M23 3c-6.62-.1-10.38 2.421-13.05 6.03C7.29 12.61 6 17.331 6 22h2c0-1.007.07-2.012.19-3H12c4.1 0 7.48-3.082 7.94-7.054C22.79 10.147 23.17 6.359 23 3zm-7 8h-1.5v2H16c.63-.016 1.2-.08 1.72-.188C16.95 15.24 14.68 17 12 17H8.55c.57-2.512 1.57-4.851 3-6.78 2.16-2.912 5.29-4.911 9.45-5.187C20.95 8.079 19.9 11 16 11zM4 9V6H1V4h3V1h2v3h3v2H6v3H4z">
                                            </path>
                                        </g>
                                    </svg>
                                </div>

                                <span className="button-label">Post</span>
                            </button>
                        </div>
                    </div>


                    <div className="leftbottom">
                        <div className="user-conrol-wrapper">
                            <div className="user-control">
                                <div className="user-meta">
                                    <div className="user-avatar-wrapper">
                                        <div className="user-avatar">

                                        </div>
                                    </div>
                                    <div className="user-details">
                                        <span className="user-name">
                                            Amit Kumar
                                        </span>
                                        <span className="user-handle">
                                            @amitmehla1207
                                        </span>
                                    </div>
                                </div>
                                <div className="menu-icon">
                                    <svg viewBox="0 0 24 24" aria-hidden="true" className="usermenuicon">
                                        <g>
                                            <path
                                                d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z">
                                            </path>
                                        </g>
                                    </svg>
                                </div>

                            </div>
                        </div>
                    </div>

        </div>
        </div>
        
  )
}

export default Header