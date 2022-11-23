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
  // fat: number,
  // carbs: number,
  // protein: number,
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

    {/* <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{display:"flex", flexDirection:"column", marginLeft:50, marginRight:50}}><h5>Equipment Name</h5>
            <input
              type="text"
              htmlFor="text"
              className="mb-3 field"
              onChange={(e) => setEquipmentName(e.target.value)}
              required
            /></div>
            <div style={{display:"flex", flexDirection:"column", marginLeft:50, marginRight:50}}>
            <h5>Quantity</h5>
            <input
              type="number"
              htmlFor="number"
              onChange={(e) => setQuantity(e.target.value)}
              required
              className="mb-3 field"
            /></div>
            <center><Button variant="info" style={{color: "white", width:100, marginBottom:30}} onClick={formSubmitHandler}>Issue</Button></center>
    </div> */}

<TableContainer component={Paper}>
      <Table stickyHeader sx={{ minWidth: 650 }} aria-label="sticky table">
        <TableHead>
          <TableRow>
            <TableCell >Equipment Name</TableCell>
            <TableCell align="center">Quantity Available</TableCell>
            {/* <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
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
              {/* <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell> */}
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
