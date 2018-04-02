import React from 'react';
import Log from './log';


class Nav extends React.Component {
  constructor(props){
    super(props)

    
  }
 

  render() {
		return (
			<div>
				<h1>Welcome Back Benjamin</h1>
				<h2>Climb On!</h2>
				<Log/>
			</div>
		)

  }
}



export default Nav
