import React, {useState} from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {ScrollView} from 'react-native';

const chips = [
  {
    name: 'finance',
    emoji: '💲',
  },
  {
    name: 'hot',
    emoji: '🔥',
  },
  {
    name: 'high reward',
    emoji: '🤑',
  },
];

const ChipListContainer = styled.View`
  display: flex;
  flex-direction: row;
`;

function TopicChips(): JSX.Element {
  const [selectedTopic, setSelectedTopic] = useState('finance');

  return (
    <ScrollView horizontal={true}>
      <ChipListContainer>
        {chips.map(({emoji, name}) => (
          <Chip
            key={name}
            name={name}
            emoji={emoji}
            isSelected={selectedTopic === name}
            setSelection={setSelectedTopic}
          />
        ))}
      </ChipListContainer>
    </ScrollView>
  );
}

interface ChipProps {
  name: string;
  emoji: string;
  isSelected: boolean;
  setSelection: Function;
}

const ChipContainer = styled.View<{isSelected: boolean}>`
  background-color: ${({isSelected}) => (isSelected ? '#ccb754' : '#232323')};
  display: flex;
  flex-direction: row;
  padding: 0px 16px;
  border-radius: 24px;
  margin-right: 12px;
  align-items: center;
  justify-content: center;
  height: 40px;
`;
const ChipText = styled.Text<{isSelected: boolean}>`
  font-family: 'Krona one';
  font-size: 10px;
  color: ${({isSelected}) => (isSelected ? '#1c1c1c' : 'white')};
`;

function Chip({name, emoji, isSelected}: ChipProps): JSX.Element {
  return (
    <ChipContainer isSelected={isSelected}>
      {isSelected ? (
        <Icon
          name={'cancel'}
          size={24}
          color={'white'}
          style={{paddingRight: 12}}
        />
      ) : null}
      <ChipText isSelected={isSelected}>
        {name}
        {isSelected ? '' : ' ' + emoji}
      </ChipText>
    </ChipContainer>
  );
}

export default TopicChips;
