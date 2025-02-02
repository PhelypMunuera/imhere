import { styles } from './styles';
import React, { useState } from 'react';
import { Participant } from '../../components/Participant';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  FlatList,
} from 'react-native';

export function Home() {
  const [technologys, setTechnologys] = useState<string[]>([]);
  const [technologyNew, setTechnologyNew] = useState('');

  function handleParticipanAdd() {
    if (technologys.includes(technologyNew)) {
      return Alert.alert('Tecnologia já aprendida');
    }

    setTechnologys((prevState) => [...prevState, technologyNew]);
    setTechnologyNew('');
  }

  function handleTechnologyRemove(technology: string) {
    //
    Alert.alert(
      'Remover Tecnologia',
      `Deseja remover a tecnologia ${technology}?`,
      [
        {
          text: 'Sim',
          onPress: () =>
            setTechnologys((prevState) =>
              prevState.filter((technologys) => technologys !== technology)
            ),
        },
        {
          text: 'Não',
          style: 'cancel',
        },
      ]
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>React Native</Text>
      <Text style={styles.eventDate}>Tecnologias estudadas</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Adicione uma tecnologia"
          placeholderTextColor={'#6b6b6b'}
          onChangeText={setTechnologyNew}
          //onChangeText={(text) => setTechnologyNew(text)} -> poderia escrever assim
          value={technologyNew}
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipanAdd}>
          <Text style={styles.buttonText}> + </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={technologys}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participant
            key={item}
            technology={item}
            onRemove={() => handleTechnologyRemove(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

// import { Fragment } from "react";

// <Fragment>
//    <View>
//       <Text>React Native</Text>
//       <Text>Phelyp Munuera</Text>
//       <Text>Phelyp Munuera</Text>
//       <Text>Phelyp Munuera</Text>
//       <Text>Phelyp Munuera</Text>
//       <Text>Phelyp Munuera</Text>
//       <Text>Phelyp Munuera</Text>
//    </View>
// </Fragment>

// 'Texto',
//     'Estilização',
//     'Input',
//     'Butão',
//     'Alert',
//     'Componentização',
//     'Tipagens de elementos com TS',
//     'Propriedades',
//     'ScrolView',
//     'FlatListe',
//     'StatusBar',
//     'useState',
//     'Imutabilidade de Componentes',
