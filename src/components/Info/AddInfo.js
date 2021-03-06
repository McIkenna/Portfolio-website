import React, { Component } from 'react'
import styles from "./Info.module.css"
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {createInfo} from "../../actions/InfoActions"

class AddInfo extends Component {

    constructor(){
        super();
        this.state={
            id:"",
            firstName: "",
            lastName: "",
            occupation: "",
            phone: "",
            email: "",
            summary: "",
            image_preview: "",
            errors: {}
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }


    static getDerivedStateFromProps(nextProps, prevState){
      if(nextProps.errors){
          return {errors: nextProps.errors};
      }
      else return null;
  }

  
 componentDidUpdate(prevProps, prevState){
  if(prevProps.error){
      this.setState({errors: prevProps.errors});
      
  }

}
    onChange(e){
      e.preventDefault();
        this.setState({
          [e.target.name]: e.target.value
        })
       
    }
    
    
    onSubmit(e){
        e.preventDefault();
        const newInfo = {
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          occupation: this.state.occupation,
          phone: this.state.phone,
          email: this.state.email,
          summary: this.state.summary         
      }

      this.props.createInfo(newInfo, this.props.history)
  
    }
  
    render() {
      const {errors} =this.state
        return (
            <div>
            <div className={styles.info}>
              <div className={styles.container}>
                <div className={styles.cover}>
                  <div className={styles.col}>
                    <h4>Create User Info</h4>
                    <hr />
                  <form onSubmit={this.onSubmit} >
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
                          placeholder="Occupation"
                          name="occupation"
                          value = {this.state.occupation}
                          onChange={this.onChange}
                      
                        />
                        <p className={styles.invalid}>{errors.occupation}</p>
                      </div>
                      <div className={styles.row}>
                        <textarea
                        type="text"
                          className={errors.summary ? styles.invalid : styles.input}
                          placeholder="Career Summary"
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

AddInfo.propTypes = {
  createInfo: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  errors: state.errors
})
export default connect(mapStateToProps, {createInfo})(AddInfo);