//Customer.js
import React from 'react';

const Customer = (customer) => {

    return (
        <div>
            <CustomerProfile id={customer.id} image={customer.image} name={customer.name}/>
            <CustomerInfo birthday={customer.birthday} gender={customer.gender} job={customer.job}/>
        </div>
    );

};

const CustomerProfile = (customerProfile) => {

    return (
        <div>
            <img src={customerProfile.image} alt="profile"/>
            <h2>{customerProfile.name}({customerProfile.id})</h2>
        </div>
    );

};

const CustomerInfo = (customerInfo) => {

    return (
        <div>
            <p>{customerInfo.birthday}</p>
            <p>{customerInfo.gender}</p>
            <p>{customerInfo.job}</p>

        </div>
    );

};


export default Customer;
