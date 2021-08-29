import React from 'react';
import { HightlightCard } from '../../components/HightlightCard';
import { TransactionCard,TransactionCardProps } from '../../components/TransactionCard';

import { 
    Container,
    Header,
    Icon,
    Photo,
    User,
    UserGreeting,
    UserInfo,
    UserName,
    UserWrapper,
    HightlightCards,
    Transactions,
    Title,
    TransactionList
 } from './styles';

 export interface DataListProps extends TransactionCardProps{
     id: string;
 }

export default function Dashboard(){
    const data:DataListProps[] =[
        {
            id:'1',
            type:'positive',
            title:'Desenvolvimento Mobile',
            amount:'R$ 12.000,00',
            category:{
                name:'Vendas',
                icon:'dollar-sign'
            },
            date:'13/04/2021'
        },
        {   
            id:'2',
            type:'negative',
            title:'Restaurante Rodrigues',
            amount:'R$ 59,00',
            category:{
                 name:'Alimentação',
                 icon:'coffee'
             },
            date:'10/04/2021'
        },
        {   
            id:'3',
            type:'negative',
            title:'Aluguel do apartamento',
            amount:'R$ 1.200,00',
            category:{
                 name:'Casa',
                 icon:'shopping-bag'
             },
            date:'27/04/2021'
        },
          
];


    return(
        <Container>
          <Header>
          <UserWrapper>
             <UserInfo>
                 <Photo
                  source={{uri:'https://media-exp1.licdn.com/dms/image/C4E03AQEmxvqSNl565Q/profile-displayphoto-shrink_800_800/0/1629309995504?e=1635379200&v=beta&t=jFX1GhKjO54e5-YQs_l5MQ00bmMXH6ECT-akxnolf0k'}}/>
                 <User>
                     <UserGreeting>Olá, </UserGreeting>
                     <UserName>Hipólito</UserName>
                 </User>
             </UserInfo>
             <Icon name="power"/>
             </UserWrapper>

          </Header>
          <HightlightCards>
            <HightlightCard 
                type='up'
                title="Entradas"
                amount="R$ 17.400,00"
                lastTransaction="Última entrada dia 13 de abril"
            />
            <HightlightCard 
                type="down"
                title="Saídas"
                amount="R$ 1.259,00"
                lastTransaction="Última saída dia 03 de abril"
            />
            <HightlightCard 
                type="total"
                title="Total"
                amount="R$ 16.141,00"
                lastTransaction="01 a 16 de abril"
            />
            </HightlightCards>

            <Transactions>
                <Title>Listagem</Title>

                <TransactionList
                    data={data}
                    keyExtractor={item => item.id}
                    renderItem={({item})=> <TransactionCard data={item}
                    
                     />}
                />
               
                

            </Transactions>
        </Container>
    )
}