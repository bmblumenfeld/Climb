import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import {faBolt,faCircle,faCloud,faLemon,faMoon,faTree} from '@fortawesome/fontawesome-free-solid'
import Modal from 'react-modal';
import React from 'react';


class Login extends React.Component {
  constructor(props){
    super(props)

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.getLoginFirst = this.getLoginFirst.bind(this);
    this.getLoginLast = this.getLoginLast.bind(this);
    this.state = {modalIsOpen: false};
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#505763';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  getLoginFirst (e) {
    this.setState({
      first:e.target.value  
    })
  }
  getLoginLast (e) {
    console.log(e.target.value)
    this.setState({
      last:e.target.value
    })
  }
  

  render() {
		return (
		  <div className="buy-main"> 
        <h1>Hope you are having a great climb!</h1>
        <div>Here are a few quick things before we get started!</div>

		    <button 
		    className="buy-now-button"
		    onClick={this.openModal}
		    >Have an account?</button>	
        <button 
        className="buy-now-button"
        onClick={this.openModal}
        >New?</button> 

		  <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          className="buy-modal"
          overlayClassName="overlay"
          contentLabel="Example Modal"
          ariaHideApp={false}
        >
         <div className="forms">
            <div className="modal-header">
		          <button className="close-modal" onClick={this.closeModal}>x</button>
		          <h2 ref={subtitle => this.subtitle = subtitle}>Sign up and start Climbing!</h2>
		        </div>
	          <form className="modal-form"> 
					    <input type="text" placeholder="First Name" className="info-input name" onChange={this.getLoginFirst}></input>
				    </form> 
				    <form className="modal-form">  
					    <input type="text" placeholder="Last Name" className="info-input mail" onChange={this.getLoginLast}></input>
				    </form> 
				    
            <div className="icon-pass">
              <FontAwesomeIcon className="icons" icon={faBolt} />
              <FontAwesomeIcon className="icons" icon={faCircle} />
              <FontAwesomeIcon className="icons" icon={faCloud} />
              <FontAwesomeIcon className="icons" icon={faLemon} />
              <FontAwesomeIcon className="icons" icon={faMoon} />
              <FontAwesomeIcon className="icons" icon={faTree} />
            </div>
      

	           <button className="modal-submit" onClick={this.closeModal} onClick={()=>{this.props.login(this.state.first, this.state.last)}}>Sign In</button>
	           <div className="privacy">Please make sure to be aware of your surroundings at all times.</div>
	           <div className="modal-footer">You are the safest person in the room. High-five!</div>
          </div>
        </Modal>
      </div>
		)

  }


}



export default Login


