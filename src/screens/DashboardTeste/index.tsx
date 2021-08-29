import React from "react";
import { View, Text } from "react-native";
import { Container, ExitIcon, Header2, UserGreetings, UserImage, UserInfo2, UserText, Wrapper } from "./styles";


export default function DashboardTeste(){
    return(
        <Container>
            <Header2>
                <Wrapper>
           <UserImage source={{uri:'https://media-exp1.licdn.com/dms/image/C4E03AQEmxvqSNl565Q/profile-displayphoto-shrink_800_800/0/1629309995504?e=1635379200&v=beta&t=jFX1GhKjO54e5-YQs_l5MQ00bmMXH6ECT-akxnolf0k'}}/>
            <UserInfo2>
                <UserGreetings>Olá,</UserGreetings>
                <UserText>Hipólito</UserText>
            </UserInfo2>
            <ExitIcon name="power"/>
            </Wrapper>
            </Header2>
        </Container>
    )
}