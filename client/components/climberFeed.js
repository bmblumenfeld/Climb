// import React from 'react';
// import Axios from 'axios';
// import Login from './login';
// import Nav from './climberNav'

// class Climber extends React.Component { 
// 	constructor (props) {
// 	  super(props);
//     this.state = { loggedIn: false, } 
// 	}

// 	componentDidMount () {
//     var context = this;
// 	  Axios.get('/climb' + id)
//     .then(function (response){
//       context.setState({courseToPurchase: response.data[0]})  
//     })
//     .catch(function(err){
//       console.error(err) 
//     })
//     //get preview videos for preview component
//     getYoutubeVideos('hackreactor bootcamp',(data)=> {
//       this.setState({previewVideo:data[1], courseToPurchase:this.state.courseToPurchase})  
//     })    	
// 	}



//   handleLogin (first, last, login) {
//     var context = this;
//     // var id = window.location.search || '?id=75'; 
//     Axios.get('http://localhost:3003/climb/login')
//     .then(function (response){
//       var verify = function (response) {
//         var match = false;
//         response.forEach(function(element) {
//           if (element.name_first === first && element.name_last === last) {
//             match = true; 
//           }
//         })
//         return match;  
//       }

//       if (!response.data.length) {
//         Axios.post('http://localhost:3003/climb/login', {
//           firstName: `${first}`,
//           lastName: `${last}`,
//           login:1
//         })  
//       }
//       if (!verify(response.data)) {
//         alert('try again!')
//       } else {
//         context.setState({loggedIn:true})   
//       }
//     })
//     .catch(function(err){
//       console.error(err) 
//     })

//   }

//   render () {
//     if(!this.state.loggedIn) {
//       return (<Login
//         login={this.handleLogin.bind(this)}

//       />)  
//     } else {
//       return (
//       	<div className="payment-main">
//       	 <Nav/>
//       	</div>
//       );
//     }
//   }
// }

// export default Climber