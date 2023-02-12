//Customer.js
import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import CustomerDelete from './CustomerDelete';

const Customer = (customer) => {

    return (
        <TableRow>
            <TableCell>{customer.id}</TableCell>
            <TableCell><img src={customer.image} alt="profile"/></TableCell>
            <TableCell>{customer.name}</TableCell>
            <TableCell>{customer.birthday}</TableCell>
            <TableCell>{customer.gender}</TableCell>
            <TableCell>{customer.job}</TableCell>
            <TableCell><CustomerDelete delId={customer.id} onChangelist={customer.onChangelist}/></TableCell>
        </TableRow>
        
    );

};


export default Customer;
