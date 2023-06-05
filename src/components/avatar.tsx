import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
  border: 1px solid white;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  overflow: hidden;
`;

const Image = styled.Image`
  height: 50px;
  width: 50px;
`;

function Avatar(): JSX.Element {
  return (
    <Container>
      <Image
        source={{
          uri: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80',
        }}
      />
    </Container>
  );
}

export default Avatar;
