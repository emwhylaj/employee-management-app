import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import { Button, ButtonToolbar } from "react-bootstrap";
import { AddDepModals } from "./AddDepModals";

export class Department extends Component {
  constructor(props) {
    super(props);
    this.state = { deps: [], addModalShow: false };
  }
  componentDidMount() {
    this.refreshList();
  }

  refreshList() {
    fetch('https://localhost:44378/api/department').then(response => response.json()
      .then(data => {
        this.setState({ deps: data });
      }))
  }
  render() {
    const { deps } = this.state;
    let addModalClose = () => this.setState({ addModalShow: false });
    return (
      <div>
        <Table className="mt-4" striped bordered hover size="sm">
          <thead>
            <tr>
              <th>DepartmentID</th>
              <th>DepartmentName</th>
            </tr>
          </thead>
          <tbody>
            {deps.map(dep => (
              <tr key={dep.DepartmentID}>
                <td>{dep.DepartmentID}</td>
                <td>{dep.DepartmentName}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <ButtonToolbar>
          <Button variant="primary" onClick={() => this.setState({ addModalShow: true })}>
            Add Department
          </Button>
          <AddDepModals show={this.state.addModalShow} onHide={addModalClose} />
        </ButtonToolbar>
      </div>
    );
  }
}
