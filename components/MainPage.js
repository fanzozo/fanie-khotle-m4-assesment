import React, { useState } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity,View } from "react-native";
import * as Speech from 'expo-speech';
const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Depressed",
    verse: "Psalm 34 verse 4, I sought the Lord, and He heard me, and deliverd me from all my fears.",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Anxious",
    verse: "First Peter 5 verse 5 to 6, Likewise you younger people, submit yourselves to your elders. Yes, all of you to be submissive to one another, and be clothed with humility, for God resists the proud, but gives grace to the humble. Therefore humble yourselves under the mighty hand of God, that he may exalt you in due time",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Discouraged",
    verse: "Matthew 5 verse 11 and 12, Blessed are you when they revile and persecute you, and say all kinds of evils against you falsely for my sake. Rejoice and be exceedingly glad, for great is your reward in heaven, for so they persecuted the prophets who were before you. ",
  },
];


const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Text style={[styles.title, textColor]}>{item.title}</Text>
  </TouchableOpacity>
);

const App = () => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#92823e" : "#c3ac7a";
    const color = item.id === selectedId ? 'white' : 'black';
const speak = () => {
    const thingToSay = item.verse;
    Speech.speak(thingToSay);
  };

    return (
     
      <Item 
        item={item}
        onPress={speak}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
      
    );
};

  return (
    <SafeAreaView style={styles.container}>
    <Text>Where to find Help when</Text>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.verse}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    
  },
  title: {
    fontSize: 32,
  },
  
});

export default App;