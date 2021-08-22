import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import {Feather} from '@expo/vector-icons'
export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    background-color: blue;
    
`

export const Header2 = styled.View`
   
   width: 100%;
   padding: 0 24px;
   
   
   
    
`

export const UserInfo2 = styled.View`
    margin-right: ${RFValue(100)}px;
    
`
export const Wrapper = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const UserImage = styled.Image`
    width: ${RFValue(60)}px;
    height: ${RFValue(60)}px;
    border-radius: 10px;
`
export const UserGreetings= styled.Text`
    font-size: ${RFValue(24)}px;
    font-family: ${({theme})=>theme.fonts.regular};
`

export const UserText= styled.Text`
  font-size: ${RFValue(24)}px;
    font-family: ${({theme})=>theme.fonts.bold};
`

export const ExitIcon = styled(Feather)`
    font-size: ${RFValue(24)}px;
    color: ${({theme})=>theme.colors.secondary};
`