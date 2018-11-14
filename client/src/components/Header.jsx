import React, { Component } from 'react';
class Header extends Component {
    state = {  }
    render() { 
        return ( 
            <div id="header">
                <img src={require("../images/headerlogo.png")} id="logo" alt={""}/>
            </div>
         );
    }
}
 
export default Header;