import React from 'react'

const Titlebar = () => {
  return (
    <section id="titlebar">
    <div className="titlebar">
                        <span className="pagetitle">Home</span>

                        <div className="titletabs">
                            <div className="titletab-wrapper">
                                <a href="/" className="active">
                                    <div className="tab-label">For you</div>
                                </a>
                                <a href="/">
                                    <div className="tab-label">Following</div>
                                </a>
                            </div>
                        </div>
                    </div>
                    </section>
  )
}

export default Titlebar