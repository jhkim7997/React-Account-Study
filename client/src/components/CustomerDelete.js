//CustomerDelete.js
import React  from 'react';

function CustomerDelete({onChangelist,delId}){
    
    const deleteCustomer = (id) => {
        const url = '/api/customers/'+id;
        fetch(url,{
            method: 'DELETE'
        });
        //console.log("delId:",delId);
        onChangelist(); //App.js의 부모 함수 호출
    }

    return (
            <button onClick={(e) => {deleteCustomer(delId)}}>삭제하기</button>
    );

};

export default CustomerDelete;