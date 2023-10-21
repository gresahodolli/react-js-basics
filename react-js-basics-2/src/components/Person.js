import React, { Component } from 'react'

 function Person({person,key}) {
    return (
      <div>
        {key}I am {person.name}, I am {person.profession}. 
        </div>
    )

}

export default Person