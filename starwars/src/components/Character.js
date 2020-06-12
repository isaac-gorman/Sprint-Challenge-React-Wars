import React, {useState, useEffect} from 'react';
import CardGrid from "./styles/CardGrid";
import CardContainer from "./styles/CardContainer";
import Card from "./styles/Card";
import Name from "./styles/Name";
import Details from "./styles/Details";

function Character(props){

  return (
   
      <CardContainer>
        <Card>
          <Name>{props.name}</Name>
          <Details>
            {props.birthYear}
            {props.gender}
          </Details>
        </Card>
      </CardContainer>

  )
}



export default Character;