import React, { Component } from 'react'

export default class ClassForm extends Component {
    constructor(props){
        super(props)

        this.state = {
            name : "",
            email: "",
            password: "",
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        
    }

    handleChange(e){
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e){
        e.preventDefault();
        const newUser = {
            name:this.state.name,
            email:this.state.email,
            password:this.state.password
        }
        this.setState({ name:"", email:"" , password:""})
        console.log(newUser)
    }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
            <h1>class form</h1>
            <label>
                name: <input type="text" name='name' value={this.state.name} onChange={this.handleChange}/>
            </label>
            <br />
            <label>
                email: <input type="email" name='email' value={this.state.email} onChange={this.handleChange}/>
            </label>
            <br />
            <label>
                password: <input type="password" name='password' value={this.state.password} onChange={this.handleChange}/>
            </label>
            <br />
            <button type='submit'>submit</button>
        </form>
      </div>
    )
  }
}
