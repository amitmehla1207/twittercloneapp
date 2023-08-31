import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { featureBox, toggleFeatureBox } from '../redux/slices/globalSlice';
export default function Features() {

  
 const dispatch = useDispatch();
 
 const [showButton, setshowButton] = useState(false);

  let featureInner = useRef(null)

  useEffect(()=>{
    
    const handleScroll = () => {
      const scrollPosition = featureInner.current.scrollTop;
      const maxScroll = featureInner.current.scrollHeight - featureInner.current.clientHeight;
      
      scrollPosition >= (maxScroll - 40) ? setshowButton(true) : setshowButton(false)
    };

   featureInner.current.addEventListener('scroll', handleScroll);

   
    return () => {
      if(featureInner.current){
      featureInner.current.removeEventListener('scroll', handleScroll);
      }
    };
  
  },[])

  return (
    <>
    
    <div id="featureCanvas">
        <div className="feature-content">
<div className="feature-inner" ref={featureInner}>
        <p><span style={{fontSize:"24px"}}><strong>Welcome to my twitter clone.</strong></span></p>

<p><em><span style={{fontSize:"18px"}}><strong>(Version 1.0)</strong></span></em><strong><span style={{fontSize:"14px"}}><a href="https://github.com/amitmehla1207/twitterclone" target="_blank">- View on Github</a></span></strong></p>

<p><span style={{fontSize:"12px"}}><em><strong>I am regularly updating it to match exactly all features of twitter.</strong></em></span></p>

<p>This application is built using ReactJs, React-redux and Redux, Context API.</p>

<p><span style={{color:"#e74c3c"}}>This Clone is optimised for a desktop only (min view-port size must be &gt; 750px)</span></p>

<p>Some of the features includes:</p>

<ul>
	<li>Automatically fixed right-side bar.</li>
	<li>Twitter style pop-ups.</li>
	<li>Twitter style Drop downs.</li>
	<li>Fetching posts using redux.</li>
</ul>

<p>My biggest dream is to become a good web developer. I hope one day I will achieve it.&nbsp;</p>

<p>&nbsp;</p>

<p><span style={{fontSize:"14px"}}><strong>Disclaimer:</strong> Expecting the color codes, no other HTML or CSS code has been copied from original Twitter Website. Hence I declare that the work is solely mine.</span></p>

<p>&nbsp;</p>

<p><span style={{fontSize:"14px"}}>Amit Kumar</span></p>

<p><span style={{fontSize:"14px"}}>(Aspiring Web Developer)</span></p>

<br></br><br></br><br></br>

</div>

{ showButton ?
        (<div className="canvas-button" onClick={()=>dispatch(toggleFeatureBox())}>
        Close
            </div>)
            :
            ("")
}
        </div>
        
    </div>
    </>
  )
}
