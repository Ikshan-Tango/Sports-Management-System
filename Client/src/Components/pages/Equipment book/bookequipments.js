import * as React from 'react'
import {Component} from 'react'
import Navigation from '../Navigation/Navigation'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios'

class IssueEquipments extends Component {
  constructor(props){
    super(props)

    this.state={
      equipments: [],
      errorMsg: ""
    }
  }

  componentDidMount(){
    axios.get("http://localhost:8000/api/equipments/")
    .then(response => {
      console.log(response)
      this.setState({
        equipments: response.data
      })
    })
    .catch(error => {
      console.log(error)
      this.setState({
        errorMsg: "Error retrieving data"
      })
    })
  }
  render(){
  const {equipments, errorMsg} = this.state
  return (
    <>
    <Navigation />
    <div className="card" style={{marginTop:50}}>
    <center><h1 style={{marginTop:60}}>Equipments availability for use</h1></center>
    <center><h6>(Don't forget to bring your Thapar ID Cards/ Faculty IDs while you come to issue equipments)</h6></center>
    <div>
<TableContainer component={Paper}>
      <Table stickyHeader sx={{ minWidth: 650 }} aria-label="sticky table">
        <TableHead>
          <TableRow>
            <TableCell>Equipment Name</TableCell>
            <TableCell align="center">Quantity Available</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {equipments.map((equipments) => (
            <TableRow
              key={equipments.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {equipments.name}
              </TableCell>
              <TableCell align="center">{equipments.number}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    </div>
    </>
  )
}
}
export default IssueEquipments
