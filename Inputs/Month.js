import React, { useState } from 'react'
import { Text, View , StyleSheet } from 'react-native'
import SelectBox from 'react-native-multi-selectbox'
import { xorBy } from 'lodash'

// Options data must contain 'item' & 'id' keys

const S_OPTIONS = [
  {
    item: 'Jan',
    id:  'Male',
  },
  {
    item: 'Feb',
    id: 'Female',
  },
  {
    item: 'Mar',
    id: 'both',
  },
  {
    item: 'Apr',
    id:  'Male',
  },
  {
    item: 'May',
    id: 'Female',
  },
  {
    item: 'Jun',
    id: 'both',
  },
  {
    item: 'Jul',
    id:  'Male',
  },
  {
    item: 'Aug',
    id: 'Female',
  },
  {
    item: 'Sep',
    id: 'both',
  },
  {
    item: 'Oct',
    id:  'Male',
  },
  {
    item: 'Nov',
    id: 'Female',
  },
  {
    item: 'Dec',
    id: 'both',
  }
]

function MonthInput() {
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

export default MonthInput



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