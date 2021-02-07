import React, { Component } from "react";
import Table from 'react-bootstrap/Table';

export class Department extends Component {
  constructor(prop) {
    super(prop);
    this.state = { deps : [] };
  }
  componentDidMount() {
    this.refreshList();
  }

  refreshList() {
    this.setState({
      deps: [
        { DepartmentID: 1, Department: "IT" },
        { DepartmentID: 2, DepartmentName: "Account" },
      ],
    });
  }
  render() {
    return (
      <Table className="mt-4" striped bordered hover size="sm">
        <thead>
          <tr>
            <th>DepartmentID</th>
            <th>DepartmentName</th>
          </tr>
        </thead>
        <tbody>
          {this.state.deps.map((dep) => (
            <tr key={dep.DepartmentID}>
              <td>{dep.DepartmentID}</td>
            </tr>
          ))}
          ;
        </tbody>
      </Table>
    );
  }
}
