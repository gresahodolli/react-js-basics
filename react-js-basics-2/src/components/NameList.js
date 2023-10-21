import React from 'react'

import Person from './Person';


function NameList() {

    const persons = [{

        id: 0,

        name: 'Creola Katherine Johnson',

        profession: 'mathematician',

      }, {

        id: 1,

        name: 'Mario José Molina-Pasquel Henríquez',

        profession: 'chemist',

      }, {

        id: 2,

        name: 'Mohammad Abdus Salam',

        profession: 'physicist',

      }, {

        name: 'Percy Lavon Julian',

        profession: 'chemist',  

      }, {

        name: 'Subrahmanyan Chandrasekhar',

        profession: 'astrophysicist',

      }];

    const personList = persons.map(person => (<Person person={person}/>) )

  return (

    <div>

       {

      personList

       }

    </div>

  )

}

export default NameList