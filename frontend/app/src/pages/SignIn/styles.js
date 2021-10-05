
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  background-color: #63C2D1;
  flex: 1;
  justify-content:center;
  align-items: center;
`;

export const Title = styled.Text`
    font-size: 20px;
    font-weight: 500;
    color: black;
    margin-top: 20%;
    text-align: center;
`;

export const LoadingIcon = styled.ActivityIndicator`
  margin-top: 20%;
`;

export const InputArea = styled.View`
  width: 100%;
  padding: 40px;  
`;

export const CustomButton = styled.TouchableOpacity`
  height: 60px;
  background-color: #268596;
  border-radius: 30px;
  justify-content: center;
  align-items: center;
`; 

export const CustomButtomText = styled.Text`
  font-size: 18px;
  color: #fff;
`; 

export const SignMessageButton = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  margin-top: 50px;
  margin-bottom: 20px;
`; 

export const SignMessageButtonText = styled.Text`
  font-size: 16px;
  color: #268596;
`;

export const SignMessageButtonBold = styled.Text`
  font-size: 16px;
  color: #268596;
  font-weight: bold;
`;