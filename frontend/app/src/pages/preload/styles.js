
import React from 'react';
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