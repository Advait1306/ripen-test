import styled from 'styled-components/native';

const Space = styled.View<{h?: number; w?: number}>`
  height: ${({h}) => (h ? h : 0)}px;
  width: ${({w}) => (w ? w : 0)}px;
`;

export default Space;
