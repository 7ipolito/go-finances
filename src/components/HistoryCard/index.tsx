import React from 'react';

import {
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
>>>>>>> fork/main
}