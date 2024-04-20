import React from 'react';
<<<<<<< HEAD
import { RectButtonProps } from 'react-native-gesture-handler';
import { SvgProps } from 'react-native-svg';
import{
    Button,
    ImageContainer,
    Text
} from './styles'
interface Props extends RectButtonProps{
    title:string;
    svg: React.FC<SvgProps>
}

export function SignInSocialButton({
    title,
    svg:Svg,
    ...rest
}:Props){
    return(
        <Button {...rest}>
            <ImageContainer>
                <Svg/>
            </ImageContainer>
            <Text>{title}</Text>
        </Button>
    )   
=======

import { RectButtonProps } from 'react-native-gesture-handler';
import { SvgProps } from 'react-native-svg';

import {
  Button,
  ImageContainer,
  Text,
} from './styles';

interface Props extends RectButtonProps {
  title: string;
  svg: React.FC<SvgProps>;
  onPress(): void;
}

export function SignInSocialButton({
  title,
  svg: Svg,
  onPress
}: Props) {
  return (
    <Button 
      onPress={onPress}
    >
      <ImageContainer>
        <Svg />
      </ImageContainer>

      <Text>{ title }</Text>
    </Button>
  )
>>>>>>> fork/main
}