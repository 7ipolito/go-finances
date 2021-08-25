import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

interface TransactionProps{
    type: 'positive' | 'negative';
}


export const Container = styled.View`
    background-color: ${({theme})=>theme.colors.shape};
    border-radius: 5px;
    margin-bottom: 16px;
`
export const Title = styled.Text`
    padding:0 24px;
    padding-top: 17px;
    font-family: ${({theme})=>theme.fonts.medium};
    font-size: ${RFValue(14)}px;
    color: ${({theme})=>theme.colors.text};
`
export const Amount = styled.Text<TransactionProps>`
    padding:0 24px;
    color: ${({theme,type})=>
    type === 'positive'?theme.colors.success:theme.colors.attention};
    font-family: ${({theme})=>theme.fonts.regular};
    font-size: ${RFValue(20)}px;
`
export const Footer = styled.View`
    padding:19px 24px;
    flex-direction: row;
    justify-content: space-between;
    
`
export const Category = styled.View`
    flex-direction: row;
    align-items: center;
`
export const Icon = styled(Feather)`
    font-size: ${RFValue(20)}px;
    color: ${({theme})=>theme.colors.text};
`
export const CategoryName = styled.Text`
    padding:0 17px;
    font-size: ${RFValue(14)}px;
    font-family: ${({theme})=>theme.fonts.regular};
    color: ${({theme})=>theme.colors.text};

`
export const Date = styled.Text`
     
    font-size: ${RFValue(14)}px;
    font-family: ${({theme})=>theme.fonts.regular};
    color: ${({theme})=>theme.colors.text};
`