import React, { useState } from 'react'
import { Text, View , StyleSheet } from 'react-native'
import SelectBox from 'react-native-multi-selectbox'
import { xorBy } from 'lodash'
import Colors from 'react-native-multi-selectbox/src/constants/Colors'

// Options data must contain 'item' & 'id' keys

const K_OPTIONS = [
  {
    item: 'Male',
    id: 'Male',
  },
  {
    item: 'Female',
    id: 'Female',
  },
  {
    item: 'Other',
    id: 'other',
  }
]

function Stack () {
  const [selectedTeam, setSelectedTeam] = useState({})

  return (
    <View>
  
      <SelectBox
        label={false}
        hideInputFilter={true}
        options={K_OPTIONS}
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

export default Stack 



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