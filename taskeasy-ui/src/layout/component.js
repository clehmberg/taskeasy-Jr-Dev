import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import axios from 'axios'
import { Table } from 'reactstrap'

import './container.css'

export class Layout extends Component {
  state = {
    actresses: []
  }

  componentWillMount() {
    axios.get('http://localhost:3000/converter')
      .then((resp) => {
        this.setState({actresses: resp.data})
      }).catch((e) => {
      console.log(e.message)
    })
  }

  render() {
    return (
      <div>
        <h1>Academy Award Winning Actresses</h1>
        <Table bordered={true} hover={true} striped={true}>
          <thead>
          <tr>
            <th>Year</th>
            <th>Actress</th>
            <th>Movie</th>
          </tr>
          </thead>
          <tbody>
          {this.state.actresses.map((actress) => {
            return (
              <tr id='tableBody' onClick={() => alert(actress.Year + ' ' + actress.Actress + ', ' + actress.Movie)}>
                <td>{actress.Year}</td>
                <td>{actress.Actress}</td>
                <td>{actress.Movie}</td>
              </tr>
            )
          })}
          </tbody>
        </Table>
      </div>
    )
  }
}

export default (Layout)

