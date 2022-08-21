import React, { useState } from 'react'
import { Text, View } from 'react-native'
import SelectBox from 'react-native-multi-selectbox'
import { xorBy } from 'lodash'

// Options data must contain 'item' & 'id' keys

const K_OPTIONS = [
  {
    item: 'Casual',
    id: 'JUVE',
  },
  {
    item: 'Long-Term',
    id: 'JUVE',
  },
  {
    item: 'Short-Term',
    id: 'JUVE',
  },
  
]

function DatingTypeInput() {
  const [selectedTeam, setSelectedTeam] = useState({})

  return (
    <View >
     
     
      <SelectBox
        label="Select Dating Type"
        options={K_OPTIONS}
        value={selectedTeam}
        onChange={onChange()}
        hideInputFilter={true}
      />
     
    </View>
  )

  function onChange() {
    return (val) => setSelectedTeam(val)
  }
}

export default DatingTypeInput