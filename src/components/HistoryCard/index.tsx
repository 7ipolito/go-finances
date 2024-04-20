import React from 'react';

import {
<<<<<<< HEAD
<<<<<<< HEAD
     Container,
     Title,
     Amount
} from './styles';

interface Props{
    title:string;
    amount:string;
    color:string;
} 
export function HistoryCard({
    title,
    amount,
    color
}:Props){
    return(
        <Container color={color}>
            <Title>{title}</Title>
            <Amount>{amount}</Amount>
        </Container>
    )
=======
=======
>>>>>>> fork/main
  Container,
  Title,
  Amount
} from './styles';

interface Props {
  title: string;
  amount: string;
  color: string;
}

export function HistoryCard({
  title,
  amount,
  color
}: Props) {
  return(
    <Container color={color}>
      <Title>{ title }</Title>
      <Amount>{ amount }</Amount>
    </Container>
  )
<<<<<<< HEAD
>>>>>>> fork/main
=======
>>>>>>> fork/main
}