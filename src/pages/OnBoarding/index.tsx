import { View, FlatList, Image } from 'react-native';
import {
  Background,
  Container,
  Content,
  SlideContainer,
  Title,
} from './styles';
import { useRef, useState } from 'react';

interface SlideProps {
  id: number;
  text: string;
  image: any;
}

const slides = [
  {
    id: 1,
    text: 'Colabore com o desenvolvimento da sua cidade',
    image: require('@assets/images/onboard_01.png'),
  },
  {
    id: 2,
    text: 'Relate problemas encontrados no dia-a-dia',
    image: require('@assets/images/onboard_02.png'),
  },
  {
    id: 3,
    text: 'Compartilhe suas ideias de como melhorar sua cidade',
    image: require('@assets/images/onboard_03.png'),
  },
];

function Slide(data: { item: SlideProps }) {
  console.log(data);
  const { image, text } = data.item;

  return (
    <SlideContainer>
      <Background resizeMode="cover" source={image} alt="background" />
      <View>
        <Title>{text}</Title>
      </View>
    </SlideContainer>
  );
}

export default function OnBoarding() {
  return (
    <Container>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={slides}
        pagingEnabled
        keyExtractor={item => item.id}
        renderItem={({ item }) => <Slide item={item} />}
      />
    </Container>
  );
}
