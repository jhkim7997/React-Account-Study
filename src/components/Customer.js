//Customer.js
import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

const Customer = (customer) => {

    return (
        <TableRow>
            <TableCell>{customer.id}</TableCell>
            <TableCell><img src={customer.image} alt="profile"/></TableCell>
            <TableCell>{customer.name}</TableCell>
            <TableCell>{customer.birthday}</TableCell>
            <TableCell>{customer.gender}</TableCell>
            <TableCell>{customer.job}</TableCell>
        </TableRow>
        
    );

};


export default Customer;
