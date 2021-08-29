import React, {Component} from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';

export default class CreateStudent extends Component {

  constructor(props) {
    super(props)

    // Setting up functions
    this.onChangeStudentName = this.onChangeStudentName.bind(this);
    this.onChangeStudentEmail = this.onChangeStudentEmail.bind(this);
    this.onChangeStudentRollno = this.onChangeStudentRollno.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state
    this.state = {
      name: '',
      email: '',
      rollno: ''
    }
  }

  onChangeStudentName(e) {
    this.setState({name: e.target.value})
  }

  onChangeStudentEmail(e) {
    this.setState({email: e.target.value})
  }

  onChangeStudentRollno(e) {
    this.setState({rollno: e.target.value})
  }

  onSubmit(e, req) {
    e.preventDefault()
    console.log(`Student successfully created!`);
    console.log(`Name: ${this.state.name}`);
    console.log(`Email: ${this.state.email}`);
    console.log(`Roll no: ${this.state.rollno}`);

    let studentObject = {
      name: this.state.name,
      email: this.state.email,
      rollno: this.state.rollno
    };

    let host = window.location.hostname; //getting hostname, only can using inside componentDidMount!
    console.log("Host terdeteksi: "+host)
    const createLink = "https://"+host+"/students/create-student";
    async function postData(url = '', data = {}) {
      // Default options are marked with *
      const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data) // body data type must match "Content-Type" header
      });
      return response.json(); // parses JSON response into native JavaScript objects
    }
    postData(createLink, studentObject)
      .then(res => console.log(res.data))
      .catch((error) => {
        console.error('Error:', error);
      })
      
      // set back to default after storing to rest API
    this.setState({ name: '', email: '', rollno: '' })
  }

  render() {
    return (<div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>
        <Form.Group controlId="Name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" value={this.state.name} onChange={this.onChangeStudentName}/>
        </Form.Group>

        <Form.Group controlId="Email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" value={this.state.email} onChange={this.onChangeStudentEmail}/>
        </Form.Group>

        <Form.Group controlId="Name">
          <Form.Label>Roll No</Form.Label>
          <Form.Control type="text" value={this.state.rollno} onChange={this.onChangeStudentRollno}/>
        </Form.Group>

        <Button variant="danger" size="lg" block="block" type="submit">
          Create Student
        </Button>
      </Form>
    </div>);
  }
}