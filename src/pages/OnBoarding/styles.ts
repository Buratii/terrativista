import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

const { width, height } = Dimensions.get('window');

export const SlideContainer = styled.View`
  flex: 1;
`;

export const Content = styled.View`
  width: ${width}px;
`;

export const Background = styled.Image`
  position: absolute;
  height: 100%;
  width: 100%;
`;

export const Title = styled.Text`
  color: black;
`;
