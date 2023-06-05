import React from 'react';
import styled from 'styled-components/native';
import Space from './space';
import Avatar from './avatar';
import Icon from 'react-native-vector-icons/MaterialIcons';

function QuestionList(): JSX.Element {
  return (
    <>
      <QuestionCard key={1} />
      <Space h={24} />
      <QuestionCard key={2} />
      <Space h={24} />
      <QuestionCard key={3} />
    </>
  );
}

const QuestionContainer = styled.View`
  display: flex;
  background-color: #ec4848;
  border-radius: 12px;
  padding-bottom: 48px;
  overflow: hidden;
`;

const ExpiryItem = styled.View`
  display: flex;
  width: 100%;
  align-items: flex-end;
`;

const ExpiryContainer = styled.View`
  border-bottom-left-radius: 12px;
  padding: 12px;
  background-color: white;
`;

const ExpiryText = styled.Text`
  font-family: 'Krona one';
  font-size: 10px;
  font-weight: 200;
  text-align: right;
`;

const Header = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
`;

const AuthorAndTimeContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const AuthorName = styled.Text`
  font-family: 'Krona one';
  font-size: 12px;
  color: white;
`;

const Dot = styled.View<{transparency?: number}>`
  height: 4px;
  width: 4px;
  border-radius: 2px;
  background-color: #e7e7e7;
`;

const TriDotContainer = styled.View`
  display: flex;
  flex-direction: row;
`;

const Question = styled.Text`
  padding: 0 24px;
  font-family: 'Krona one';
  color: white;
  width: 80%;
`;

const SubHeading = styled.Text`
  padding: 0 24px;
  color: #d2cbcb;
`;

const BottomBar = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 24px;
`;

const UpVoteContainer = styled.View`
  display: flex;
  flex-direction: row;
`;

const BottomBarText = styled.Text`
  font-family: 'Krona one';
  font-size: 10px;
  color: white;
`;

const KashContainer = styled.View`
  padding: 4px 8px;
  border-radius: 4px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #ef6767;
`;

const KashText = styled.Text`
  font-family: 'Krona one';
  font-size: 10px;
  color: #ffffff;
`;

function QuestionCard(): JSX.Element {
  return (
    <QuestionContainer>
      <ExpiryItem>
        <ExpiryContainer>
          <ExpiryText>expires in 20h</ExpiryText>
        </ExpiryContainer>
      </ExpiryItem>
      <Space h={12} />
      <Header>
        <AuthorAndTimeContainer>
          <Avatar />
          <Space w={12} />
          <AuthorName>Advait</AuthorName>
          <Space w={4} />
          <Dot />
          <Space w={4} />
          <AuthorName>1hr</AuthorName>
        </AuthorAndTimeContainer>
        <TriDotContainer>
          <Dot />
          <Space w={4} />
          <Dot />
          <Space w={4} />
          <Dot />
        </TriDotContainer>
      </Header>
      <Space h={48} />
      <Question>What is the best health insurance?</Question>
      <Space h={12} />
      <SubHeading>I need help I guess</SubHeading>
      <Space h={48} />
      <BottomBar>
        <UpVoteContainer>
          <Icon name={'mail'} size={12} color={'white'} />
          <Space w={4} />
          <BottomBarText>10</BottomBarText>
          <Space w={12} />
          <Icon name={'mail'} size={12} color={'white'} />
          <Space w={4} />
          <BottomBarText>12 answers</BottomBarText>
        </UpVoteContainer>
        <KashContainer>
          <KashText>200 kash</KashText>
        </KashContainer>
      </BottomBar>
    </QuestionContainer>
  );
}

export default QuestionList;
