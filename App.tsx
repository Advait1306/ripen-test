import React from 'react';
import styled from 'styled-components/native';
import {SafeAreaView, ScrollView, Text} from 'react-native';
import Avatar from './src/components/avatar';
import Heading from './src/components/heading';
import Space from './src/components/space';
import KashComponent from './src/components/kashComponent';
import Divider from './src/components/divider';
import TopicChips from './src/components/topicChips';
import QuestionList from './src/components/questionList';

const Backdrop = styled.View`
  width: 100%;
  height: 100%;
  background-color: #151515;
`;

const PaddingContainer = styled.View`
  padding-left: 24px;
  padding-right: 24px;
`;

const Header = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const NameContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const QuestionCTA = styled.Text`
  font-family: 'Krona one';
  font-size: 28px;
  letter-spacing: -1.5px;
  color: gray;
`;

function App(): JSX.Element {
  return (
    <Backdrop>
      <SafeAreaView>
        <ScrollView>
          <PaddingContainer>
            <Header>
              <NameContainer>
                <Avatar />
                <Space w={12} />
                <Heading>Advait</Heading>
              </NameContainer>
              <KashComponent />
            </Header>
            <Space h={64} />
            <QuestionCTA>start typing your question</QuestionCTA>
            <Space h={64} />
            <Divider />
            <Space h={12} />
            <TopicChips />
            <Space h={24} />
            <QuestionList />
          </PaddingContainer>
        </ScrollView>
      </SafeAreaView>
    </Backdrop>
  );
}

export default App;
