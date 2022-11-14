import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: 'red',
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  

const SlipFruit = ({rows,infomation}) => {

    const Total = () => {
      let totalprice = 0
      let totalAmount = 0
      rows.map((item)=>{
        totalprice += item['value'] * infomation[item['name']]['price']
        totalAmount += item['value']
      })

      return [totalAmount,totalprice]
    } 

    
    return (
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell sx={{width:'10px'}}>Req</StyledTableCell>
            <StyledTableCell>Fruit Name</StyledTableCell>
            <StyledTableCell align="right">Amount</StyledTableCell>
            <StyledTableCell align="right">Price</StyledTableCell>
            <StyledTableCell align="right">Amount X Price</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((record) => (
            <StyledTableRow >
                <StyledTableCell sx={{width:'10px'}}>{record.req}</StyledTableCell>
              <StyledTableCell component="th" scope="row">
                {record.name}
              </StyledTableCell>
              <StyledTableCell sx={{width:'100px'}} align="right">{record.value}</StyledTableCell>
              <StyledTableCell sx={{width:'100px'}} align="right">{infomation[record.name].price}</StyledTableCell>
              <StyledTableCell sx={{width:'200px'}} align="right">{record.value * infomation[record.name].price}</StyledTableCell>
            </StyledTableRow>
          ))}
          <StyledTableRow >
                <StyledTableCell sx={{width:'10px'}}>{}</StyledTableCell>
              <StyledTableCell component="th" scope="row">
                {"total"}
              </StyledTableCell>
              <StyledTableCell sx={{width:'100px'}} align="right">{Total()[0]}</StyledTableCell>
              <StyledTableCell sx={{width:'100px'}} align="right">{}</StyledTableCell>
              <StyledTableCell sx={{width:'200px'}} align="right">{Total()[1] + " Baht"}</StyledTableCell>
            </StyledTableRow>
        </TableBody>
      </Table>
    </TableContainer>
    )
}


export default SlipFruit;