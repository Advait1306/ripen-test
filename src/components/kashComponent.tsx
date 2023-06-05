import React from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Space from './space';

const Container = styled.View`
  border: 1px solid gray;
  padding: 4px 8px;
  border-radius: 4px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const KashText = styled.Text`
  font-family: 'Krona one';
  color: #ccb754;
`;

function KashComponent(): JSX.Element {
  return (
    <Container>
      <Icon name={'lens'} size={24} color={'#ccb754'} />
      <Space w={12} />
      <KashText>560 kash</KashText>
    </Container>
  );
}

export default KashComponent;
