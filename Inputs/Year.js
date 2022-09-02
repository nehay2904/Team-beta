import React, { useState } from 'react'
import { Text, View , StyleSheet } from 'react-native'
import SelectBox from 'react-native-multi-selectbox'
import { xorBy } from 'lodash'

// Options data must contain 'item' & 'id' keys

const S_OPTIONS = [
  {
    item: '2012',
    id:  'Male',
  },
  {
    item: '2011',
    id: 'Female',
  },
  {
    item: '2010',
    id: 'both',
  },
  {
   item: '2009',
    id:  'Male',
  },
  {
    item: '2008',
    id: 'Female',
  },
  {
    item: '2007',
    id: 'both',
  },
  {
    item: '2006',
    id:  'Male',
  },
  {
    item: '2005',
    id: 'Female',
  },
  {
    item: '2004',
    id: 'both',
  },
  {
    item: '2003',
    id:  'Male',
  },
  {
    item: '2002',
    id: 'Female',
  },
  {
    item: '2001',
    id: 'both',
  },
  {
    item: '2000',
    id:  'Male',
  },
  {
    item: '1999',
    id: 'Female',
  },
  {
    item: '1998',
    id: 'both',
  },
  {
    item: '1997',
    id: 'both',
  },  {
    item: '1996',
    id: 'both',
  },
  {
    item: '1995',
    id: 'both',
  }

]

function YearInput() {
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

export default YearInput



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