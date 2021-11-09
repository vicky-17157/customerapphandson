import React from 'react';
import './customer.css';

const TableHeader = () => {
    return (
      <thead className="th" > 
        <tr>
          <th>Customer-Name</th>
          <th>City</th>
          <th>Phone</th>
          <th>Email</th>
          <th>Remove</th>
        </tr>
      </thead>
    )
  }

export default TableHeader;

