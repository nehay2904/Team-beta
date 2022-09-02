import React, { useState } from 'react'
import { Text, View , StyleSheet } from 'react-native'
import SelectBox from 'react-native-multi-selectbox'
import { xorBy } from 'lodash'

// Options data must contain 'item' & 'id' keys

const S_OPTIONS = [
  {
    item: '01',
    id:  '01',
  },
  {
    item: '02',
    id: '02',
  },
  {
    item: '03',
    id: '03',
  },
  {
    item: '04',
    id:  '04',
  },
  {
    item: '05',
    id: '05',
  },
  {
    item: '06',
    id: '06',
  },
  {
    item: '07',
    id:  '07',
  },
  {
    item: '08',
    id: '08',
  },
  {
    item: '09',
    id: '09',
  },
  {
    item: '10',
    id:  '10',
  },
  {
    item: '11',
    id: '11',
  },
  {
    item: '12',
    id: '12',
  },
  {
    item: '13',
    id:  '13',
  },
  {
    item: '14',
    id: '14',
  },
  {
    item: '15',
    id: '15',
  },
  {
    item: '16',
    id:  '16',
  },
  {
    item: '17',
    id: '17',
  },
  {
    item: '18',
    id: '18',
  },
  {
    item: '19',
    id:  '19',
  },
  {
    item: '20',
    id: 'Fe04',
  },
  {
    item: '21',
    id: '03',
  }
]

function DateInput() {
  const [selectedTeam, setSelectedTeam] = useState({})

  return (
    <View>
  
      <SelectBox
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

export default DateInput



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