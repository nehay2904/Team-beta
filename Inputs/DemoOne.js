import React, { useState } from 'react'
import { Text, View , StyleSheet } from 'react-native'
import SelectBox from 'react-native-multi-selectbox'
import { xorBy } from 'lodash'
import Colors from 'react-native-multi-selectbox/src/constants/Colors'

// Options data must contain 'item' & 'id' keys

const C_OPTIONS = [
  {
    item: 'Casual',
    id:  'Casual',
  },
  {
    item: 'Short-term',
    id: 'Short-term',
  },
  {
    item: 'long-term',
    id: 'long-term',
  }
]

function DemoOne () {
  const [selectedTeam, setSelectedTeam] = useState({})

  return (
    <View>
  
      <SelectBox
        label={false}
        hideInputFilter={true}
        options={C_OPTIONS}
        value={selectedTeam}
        onChange={onChange()}
        arrowIconColor='white'
        containerStyle={styles.InputStyle}
        optionsLabelStyle={styles.styleinput}
        selectedItemStyle={styles.styleinput}
      
      />
     
    </View>
  )

  function onChange() {
    return (val) => setSelectedTeam(val)
  }
}

export default DemoOne 



const styles = StyleSheet.create({
    inputtext:{
      color:'red',
    },
    InputStyle: {
      borderColor: "#999999",
      borderWidth: 2,
      paddingHorizontal: 10,
      borderRadius: 6,
      color: 'white',
      paddingTop:10
    },
    styleinput:{
      color:'white'
    }
  })