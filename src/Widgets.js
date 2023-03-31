import React from 'react';
import "./Widgets.css";

function Widgets() {
  return (
    <div className='widgets'>
      {/* <div>{ eslint-disable-next-line}</div> */}
      <iframe 
      title="This is a unique title"
      src="https://www.facebook.com/plugins/page.php?
      href=https%3A%2F%2Fwww.facebook.com%2FWrters-Networkexpilot-152812875271725%2F&tabs=timeline&
      width=340&height=500&small_header=true&adapt_container_
      width=true&hide_cover=false&show_facepile=true&appId=6174936105873975" 
      width="340" 
      height="100" 
      style={{border:"none", overflow:"hidden" }}
    //  scrolling"no" 
      frameborder="0" 
      allowfullscreen="true" 
      allow="autoplay;
      clipboard-write; 
      encrypted-media; 
      picture-in-picture; 
      web-share">

      </iframe>
    </div>
  )
}

export default Widgets
