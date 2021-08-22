import React from 'react';

import { 
    Container,
    Header,
    Icon,
    Photo,
    User,
    UserGreeting,
    UserInfo,
    UserName,
    UserWrapper
 } from './styles';

export default function Dashboard(){
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
        </Container>
    )
}