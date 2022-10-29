import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Animated, PanResponder, View, Text , StyleSheet} from 'react-native';
import { ACTION_OFFSET, CARD } from '../../utils/constants';

import Card from '../Card';
import Footer from '../Footer';
import { pets as petsObj } from './data';
import { Container } from './styles';

export default function Main() {
  const swipe = useRef(new Animated.ValueXY()).current;
  const tiltSign = useRef(new Animated.Value(1)).current;
  const [pets, setPets] = useState(petsObj);

  useEffect(() => {
    if (pets.length === 0) {
      setPets(petsObj);
    }
  }, [pets]);

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (e, { dx, dy, y0 }) => {
        // 1: sentido horário | -1: sentido anti-horário
        tiltSign.setValue(y0 > CARD.CARD_HEIGHT / 2 ? 1 : -1);
        swipe.setValue({ x: dx, y: dy });
      },
      onPanResponderRelease: (e, { dx, dy }) => {
        const direction = Math.sign(dx);
        const userAction = Math.abs(dx) > ACTION_OFFSET;

        if (userAction) {
          Animated.timing(swipe, {
            duration: 200,
            toValue: {
              x: direction * CARD.CARD_OUT_WIDTH,
              y: dy,
            },
            useNativeDriver: true,
          }).start(transitionNext);
        } else {
          Animated.spring(swipe, {
            friction: 5,
            toValue: {
              x: 0,
              y: 0,
            },
            useNativeDriver: true,
          }).start();
        }
      },
    })
  ).current;

  const transitionNext = useCallback(() => {
    setPets((prevState) => prevState.slice(1));
    swipe.setValue({ x: 0, y: 0 });
  }, [swipe]);

  const handleChoise = useCallback(
    (sign) => {
      Animated.timing(swipe.x, {
        duration: 500,
        toValue: sign * CARD.CARD_OUT_WIDTH,
        useNativeDriver: true,
      }).start(transitionNext);
    },
    [swipe.x, transitionNext]
  );

  return (
  
      <Container>
      <View style={styles.header}>
        <Text style={{fontSize:45, color:'white' , letterSpacing:2}}>Find Your </Text> 
       <View style={{ backgroundColor:"#AC4FC6" , padding:5, rotation:6, borderRadius:7}}>
       <Text  style={{fontSize:45, color:'white' , letterSpacing:2 , backgroundColor:"#AC4FC6"}}>Match</Text>
       </View>
      </View>
      {pets
        .map(({ name, source }, index) => {
          const isFirst = index === 0;
          const panHandlers = isFirst ? panResponder.panHandlers : {};

          return (
            <View style={{width:"105%", backgroundColor:"pink"}}>
             
              <Card
              key={name}
              name={name}
              source={source}
              isFirst={isFirst}
              swipe={swipe}
              tiltSign={tiltSign}
              {...panHandlers}
            />
            </View>
          );
        })
        .reverse()}

      <Footer
        handleLike={() => handleChoise(1)}
        handleNo={() => handleChoise(-1)}
      />
    </Container>

  );
}


const styles = StyleSheet.create({
   header:{
      display:"flex",
      flexDirection:"row",
      marginTop:50, 
      marginBottom:0
   }
})