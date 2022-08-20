import React, { useState } from 'react'
import { Text, View } from 'react-native'
import SelectBox from 'react-native-multi-selectbox'
import { xorBy } from 'lodash'

// Options data must contain 'item' & 'id' keys

const K_OPTIONS = [
  {
    item: 'Male',
    id: 'JUVE',
  },
  {
    item: 'Female',
    id: 'JUVE',
  },
  {
    item: 'Both',
    id: 'JUVE',
  },
  {
    item: 'All',
    id: 'JUVE',
  },
  
]

function SexualPreferenceInput() {
  const [selectedTeam, setSelectedTeam] = useState({})

  return (
    <View style={{ margin: 30 }}>
     
     
      <SelectBox
        label="Select single"
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

export default SexualPreferenceInput