<<<<<<< HEAD
import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
=======
import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
>>>>>>> fork/main

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  width: 100%;
  height: 70%;
<<<<<<< HEAD
  background-color: ${({ theme }) => theme.colors.primary};
=======

  background-color: ${({theme}) => theme.colors.primary};

>>>>>>> fork/main
  justify-content: flex-end;
  align-items: center;
`;

export const TitleWrapper = styled.View`
  align-items: center;
`;

export const Title = styled.Text`
<<<<<<< HEAD
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(30)}px;
  text-align: center;
=======
  font-family: ${({theme}) => theme.fonts.medium};
  color: ${({theme}) => theme.colors.shape};
  font-size: ${RFValue(30)}px;

  text-align: center;

>>>>>>> fork/main
  margin-top: 45px;
`;

export const SignInTitle = styled.Text`
<<<<<<< HEAD
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(16)}px;
  text-align: center;
  margin-top: 80px;
  margin-bottom: 67px;
=======
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.shape};
  font-size: ${RFValue(16)}px;

  text-align: center;

  margin-top: 50px;
  margin-bottom: 50px;
>>>>>>> fork/main
`;

export const Footer = styled.View`
  width: 100%;
  height: 30%;
<<<<<<< HEAD
  background-color: ${({ theme }) => theme.colors.secondary};
`;

export const FooterWrapper = styled.View`
    margin-top: ${RFPercentage(-4)}px;

    padding: 0 32px;

    justify-content: space-between;
`
=======

  background-color: ${({theme}) => theme.colors.secondary};
`;

export const FooterWrapper = styled.View`
  margin-top: ${RFValue(-4)}px;
  padding: 0 32px;

  justify-content: space-between;
`;

>>>>>>> fork/main
