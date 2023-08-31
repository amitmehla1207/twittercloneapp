import React from 'react'

export function UserControlMenu(props) {
  

  const {top,left,animation,arrow} = props;
  return (
    <>
    
    <div className={`ddfade ddtooltip`} style={{transform:"translate(-10%,-80%)"}}>
      <div className="menu-inner">
        <div className="menu-item">
          
          <div className="menu-label">
           Add Existing Account
          </div>
        </div>

        <div className="menu-item">
          
          <div className="menu-label">
           Sign Out
          </div>
        </div>

       
    </div>
    <div className="ddarrow">
    <svg viewBox="0 0 24 24" aria-hidden="true" class="ddarrowsvg"><g><path d="M22 17H2L12 6l10 11z"></path></g></svg>
    </div>
    </div>
    
    </>
  )
}
