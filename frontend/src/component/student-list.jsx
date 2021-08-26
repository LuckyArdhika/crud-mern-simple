import React, { Component } from "react";
import Table from 'react-bootstrap/Table';
import StudentTableRow from './StudentTableRow';


export default class StudentList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      students: []
    };
    this.componentDidMount = this.componentDidMount.bind(this);
  }
  
  componentDidMount() {
    const getapi = async () => {
      // Storing response
      await fetch("http://localhost:4000/students")
      .then((response) => response.json())
      .then(StudentList => {
        console.log(StudentList);
        this.setState({ students: StudentList }) //how to setState after edit? or you should reload the page automatically after update data?
      })
  }
  // Calling that async function
  getapi();
  }

  DataTable() {
    return this.state.students.map((res, i) => {
      return <StudentTableRow obj={res} key={i} />;
    });
  }


  render() {
    return (<div className="table-wrapper">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Roll No</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {this.DataTable()}
        </tbody>
      </Table>
    </div>);
  }
}