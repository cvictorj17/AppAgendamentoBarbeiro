import React, {useState , useContext} from 'react';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';

import { UserContext } from '../../contexts/UserContext';

import { Container, 
         InputArea, 
         CustomButton, 
         CustomButtomText, 
         SignMessageButton, 
         SignMessageButtonText,
         SignMessageButtonBold } from './styles';

import BarberLogo from '../../assets/barber.svg';
import EmailIcon from '../../assets/email.svg';
import LockIcon from '../../assets/lock.svg';

import Api from '../../Api';

import SignInput from '../../components/SignInput';

export default () => {
  const {dispatch: userDispatch} = useContext(UserContext);

  const navigation = useNavigation();

  const [emailField, setEmailField] = useState('suporte@b7web.com.br');
  const [passwordField, setpasswordField] = useState('1234');

  const handleSignClick = async () => {
    if (emailField != '' && passwordField != '') {
      let resp = await Api.signIn(emailField, passwordField);

      if (resp.token){
        await AsyncStorage.setItem('token',resp.token);

        userDispatch({
          type: 'setAvatar',
          payload: {
            avatar: resp.data.avatar
          }
        });

        navigation.reset({
          routes: [{name:'MainTab'}]
        });
      }
      else 
        alert("E-mail e/ou senha inválidos!");
    }
    else
      alert("Preencha os campos!");

  }

  const handleMessageButtonClick = () => {
    navigation.reset({
      routes: [{name: 'SignUp'}]
    });
  }

  return (
    <Container>
        <BarberLogo width="100%" height="160" />

        <InputArea>
          <SignInput 
            IconSvg={EmailIcon}
            placeholder="Digite seu e-mail" 
            value={emailField}
            onChangeText={t=> setEmailField(t)}
          />
          <SignInput 
            IconSvg={LockIcon}
            placeholder="Digite sua senha" 
            value={passwordField}
            onChangeText={t=> setpasswordField(t)}
            password={true}
          /> 

          <CustomButton onPress={handleSignClick}>
            <CustomButtomText>Login</CustomButtomText>
          </CustomButton>
        </InputArea>

        <SignMessageButton onPress={handleMessageButtonClick}>
          <SignMessageButtonText>Ainda não possui uma conta?</SignMessageButtonText>
          <SignMessageButtonBold>Cdastra-se</SignMessageButtonBold>
        </SignMessageButton>
    </Container>
  );

};