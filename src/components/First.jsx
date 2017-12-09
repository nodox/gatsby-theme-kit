import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import image_0 from '../images/pic01.jpg';

export default function First(props) {
 return (
   <section id="one" className="main style1">
     <div className="container">
       <div className="row 150%">
         <div className="6u 12u$(medium) custom-medium">
           <header className="major">
             <h2>Lorem ipsum dolor adipiscing<br />
             amet dolor consequat</h2>
           </header>
           <p>Adipiscing a commodo ante nunc accumsan et interdum mi ante adipiscing. A nunc lobortis non nisl amet vis sed volutpat aclacus nascetur ac non. Lorem curae et ante amet sapien sed tempus adipiscing id accumsan.</p>
         </div>
         <div className="6u 12u$(medium) important(medium) custom-medium">
           <span className="image fit"><img src={image_0} alt="" /></span>
         </div>
       </div>
     </div>
   </section>
 )
}
