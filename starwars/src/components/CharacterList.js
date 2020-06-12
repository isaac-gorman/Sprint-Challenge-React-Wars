// Write your Character component here
import React, {useState, useEffect} from 'react';
import Character from './Character';
import CardGird from './styles/CardGrid'
import axios from 'axios';


function CharacterList(){
  const [people, setPeople] = useState([])
 
  useEffect(()=>{
    axios
      .get('https://swapi.dev/api/people')
      .then(res => {
        console.log(res.data.results)
        setPeople(res.data.results)
      })
      .catch(err => console.log(`There was an error: ${err}`))

  }, []);

  return (

   <CardGird>
     {people.map(crrV => {
       return(
         <Character
          name={crrV.name}
          birthYear={crrV['birth_year']}
          gender={crrV.gender}
         />
       )
     })

     }

   </CardGird>
  )
}

export default CharacterList;