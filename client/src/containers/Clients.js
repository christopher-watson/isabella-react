import React, { Component } from "react";
import API from "../utils/API";
import moment from "moment";

const Mailto = require('react-mailto');

class Clients extends Component {

  state = {
    responses: []
  }

  componentDidMount() {
    this.getClientResponses();
  }

  getClientResponses = () => {
    API.responseRetrieve()
      .then(res => this.setState({responses: res.data}))
      .catch(err => console.log(err))
  }

  deleteResponse = id => {
    API.responseDelete(id)
      .then(() => this.getClientResponses())
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        <div className="jumbotron jumbotron-fluid py-5">
          <div className="row align-items-center justify-content-center my-5">
            <h1>Client Responses!</h1>
          </div>
        </div>

        <div className="container-fluid">
          <div className="row justify-content-center">

            {/* Response result container */}
            <div className="col-8">
              <h2>{this.state.responses.length
                ? "Client Response Results"
                : "No Client Responses to Display"}
              </h2>

              <ul className="list-group list-group-flush">
                {this
                  .state
                  .responses
                  .map(response => (
                    <li key={response._id} className="list-group-item d-flex justify-content-between align-items-center">
                      <h3>{response.name}</h3>
                      <h6>{moment(response.date).format("Do MMMM YYYY hh:mm:ss a")}</h6>
                      <p>{response.message}</p>
                      {/* <a href={response.email}>{response.email}</a> */}
                      <Mailto email={response.email} obfuscate={true}>{response.email}</Mailto>
                      <span
                        className="badge badge-primary badge-pill"
                        onClick={() => this.deleteResponse(response._id)}>Delete Response</span>
                    </li>
                  ))}
              </ul>
            </div>

          </div>
        </div>

      </div>
    )
  }
}

export default Clients;