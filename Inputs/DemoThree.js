import React, { useState } from 'react'
import { Text, View , StyleSheet } from 'react-native'
import SelectBox from 'react-native-multi-selectbox'
import { xorBy } from 'lodash'

// Options data must contain 'item' & 'id' keys

const S_OPTIONS = [
  {
    item: 'Male',
    id:  'Male',
  },
  {
    item: 'Female',
    id: 'Female',
  },
  {
    item: 'both',
    id: 'both',
  }
]

function DemoTwo() {
  const [selectedTeam, setSelectedTeam] = useState({})

  return (
    <View>
  
      <SelectBox
        label={false}
        hideInputFilter={true}
        options={S_OPTIONS}
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

export default DemoTwo



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