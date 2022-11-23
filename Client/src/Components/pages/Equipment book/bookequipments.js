import * as React from 'react'
import Navigation from '../Navigation/Navigation'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from 'react-bootstrap'

function IssueEquipments() {
  const [equipmentName, setEquipmentName] = React.useState();
  const [quantity, setQuantity] = React.useState();
  const formSubmitHandler = async(e) => {
}

function createData(
  name: string,
  quantity: number,
) {
  return { name, quantity};
}

const rows = [
  createData('Tennis', 15),
  createData('Basketball', 237),
  createData('Cricket Bat', 262),
  createData('Football', 305),
  createData('My feelings for her :(', 3000),
];
  return (
    <>
    <Navigation />
    <div className="card" style={{marginTop:50}}>
    <center><h1 style={{marginTop:60}}>Issue equipments for use</h1></center>
    <div>
<TableContainer component={Paper}>
      <Table stickyHeader sx={{ minWidth: 650 }} aria-label="sticky table">
        <TableHead>
          <TableRow>
            <TableCell >Equipment Name</TableCell>
            <TableCell align="center">Quantity Available</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="center">{row.quantity}</TableCell>
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

export default IssueEquipments
