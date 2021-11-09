import React from 'react';
import './customer.css'
import TableHeader from './th';
import TableBody from './tb';
const Table= (props)=> {
    
    const{characterData,removeCharacter} =props
      
      return (
        <table>
        <TableHeader />
        <TableBody characterData={characterData} removeCharacter={removeCharacter} />
      </table>
      )
    
  }

export default Table;