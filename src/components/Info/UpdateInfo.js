import React, { Component } from 'react'
import styles from "./Info.module.css"
import {getStoredInfo, createInfo} from "../../actions/InfoActions"
import PropTypes from "prop-types"
import {connect} from "react-redux"



class UpdateInfo extends Component {

  constructor(){
    super()
      this.state = { 
        id: "",
        firstName: "",
        lastName: "",
        occupation: "",
        email: "",
        phone: "",
        summary: "",
        errors: {}
}
this.onChange = this.onChange.bind(this)
this.onSubmit = this.onSubmit.bind(this)
}

componentWillReceiveProps(nextProps){
if(nextProps.errors){
    this.setState({errors:nextProps.errors})
}
const { 
  id,
firstName,
lastName,
occupation,
phone,
email,
summary,

} = nextProps.info;

this.setState({
  id,
firstName,
lastName,
occupation,
phone,
email,
summary
})
}


componentDidMount(){
    const {id} = this.props.match.params;
    this.props.getStoredInfo(id, this.props.history);
}

onChange(e){
    this.setState({[e.target.name]: e.target.value})
}



onSubmit(e){
    e.preventDefault()

    const newInfo = {
      id: this.state.id,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      occupation: this.state.occupation,
      phone: this.state.phone,
      email: this.state.email,
      summary: this.state.summary         
  }
    this.props.createInfo(newInfo , this.props.history)
}
render() {
    const {errors} =this.state
    return (
        <div>
           <div className={styles.info}>
          <div className={styles.container}>
            <div className={styles.cover}>
              <div className={styles.col}>
                <h4>Update User Info</h4>
                <hr />
                <form onSubmit={this.onSubmit}>        
                  <div className={styles.row}>
                    <input
                      type="text"
                      className={errors.firstName ? styles.invalid : styles.input}
                      placeholder="First Name"
                      name="firstName"
                      value = {this.state.firstName}
                      onChange={this.onChange}
                     
                    />
                     <p className={styles.invalid}>{errors.firstName}</p>
                  </div>

                  <div className={styles.row}>
                    <input
                      type="text"
                      className={errors.lastName ? styles.invalid : styles.input}
                      placeholder="Last Name"
                      name="lastName"
                      value = {this.state.lastName}
                      onChange={this.onChange}
                    />
                    <p  className={styles.invalid}>{errors.lastName}</p>
                  </div>
               <div className={styles.row}>
                    <input
                      type="text"
                      className={errors.phone ? styles.invalid : styles.input}
                      placeholder="Phone Number"
                      name="phone"
                      value = {this.state.phone}
                      onChange={this.onChange}

                    />
                    <p className={styles.invalid}>{errors.phone}</p>

                  </div>
                  <div className={styles.row}>
                    <input
                      type="text"
                      className={errors.email ? styles.invalid : styles.input}
                      placeholder="Email"
                      name="email"
                      value = {this.state.email}
                      onChange={this.onChange}
                    />
                     <p className={styles.invalid}>{errors.email}</p>
                  </div>
                  <div className={styles.row}>
                    <input
                      type="text"
                      className={errors.occupation ? styles.invalid : styles.input}
                      placeholder="Job Title"
                      name="occupation"
                      value = {this.state.occupation}
                      onChange={this.onChange}
                  
                    />
                    <p className={styles.invalid}>{errors.occupation}</p>
                  </div>
                  <div className={styles.row}>
                    <textarea
                    type="textarea"
                      className={errors.summary ? styles.invalid : styles.input}
                      placeholder="Job Description"
                      name="summary"
                      value = {this.state.summary}
                      onChange={this.onChange}
                    />
                    <p className={styles.invalid}>{errors.summary}</p>
                  </div>
                  
                  <input
                    type="submit"
                    className={styles.button}
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
        </div>
    )
}
}

UpdateInfo.propTypes = {
  getStoredInfo: PropTypes.func.isRequired,
    info: PropTypes.object.isRequired,
    createInfo: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired

}

const mapStateToProps = state => ({
    info: state.info.info,
    errors: state.errors
})

export default connect(mapStateToProps, {getStoredInfo, createInfo}) (UpdateInfo)