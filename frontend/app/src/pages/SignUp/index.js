import React, {useState, useContext} from 'react';
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
import PersonIcon from '../../assets/person.svg';

import SignInput from '../../components/SignInput';

import Api from '../../Api';

export default () => {
  const {dispatch: userDispatch} = useContext(UserContext);

  const navigation = useNavigation();

  const [nameField, setNameField] = useState('');
  const [emailField, setEmailField] = useState('');
  const [passwordField, setpasswordField] = useState('');

  const handleSignClick = async () => {
    if (nameField != '' && emailField !='' && passwordField != ''){
      let resp = await Api.signUp(nameField, emailField, passwordField);

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
        alert("Erro:" + resp.error);
    }
    else
      alert("Preencha os campos!");

  }

  const handleMessageButtonClick = () => {
    navigation.reset({
      routes: [{name: 'SignIn'}]
    });
  }

  return (
    <Container>
        <BarberLogo width="100%" height="160" />

        <InputArea>
          <SignInput 
            IconSvg={PersonIcon}
            placeholder="Digite seu nome" 
            value={nameField}
            onChangeText={t=> setNameField(t)}
          />

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
            <CustomButtomText>Cadastrar</CustomButtomText>
          </CustomButton>
        </InputArea>

        <SignMessageButton onPress={handleMessageButtonClick}>
          <SignMessageButtonText>Já possui uma conta?</SignMessageButtonText>
          <SignMessageButtonBold>Faça Login</SignMessageButtonBold>
        </SignMessageButton>
    </Container>
  );

};