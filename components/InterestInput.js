import React, { useState } from 'react'
import { Text, View } from 'react-native'
import SelectBox from 'react-native-multi-selectbox'
import { xorBy } from 'lodash'

// Options data must contain 'item' & 'id' keys

const K_OPTIONS = [
  {
    item: 'Painting',
    id: 'JUVE',
  },
  {
    item: 'Singing',
    id: 'RM',
  },
  {
    item: 'Dancing',
    id: 'BR',
  },
  {
    item: 'Drawing',
    id: 'PSG',
  },
  {
    item: 'Cooking',
    id: 'FBM',
  },
  {
    item: 'Gardening',
    id: 'MUN',
  },
  {
    item: 'Manchester City FC',
    id: 'MCI',
  },
  {
    item: 'Reading Books',
    id: 'EVE',
  },
  {
    item: 'Movies',
    id: 'TOT',
  },
  {
    item: 'Coding',
    id: 'CHE',
  },
  {
    item: 'Sports',
    id: 'LIV',
  },
  {
    item: 'Travelling',
    id: 'ARS',
  },

  {
    item: ' Vloging',
    id: 'LEI',
  },
]

function InterestInput() {

  const [selectedTeams, setSelectedTeams] = useState([])
  return (
    <View style={{ margin: 30 }}>
     
      <View style={{ height: 40 }} />
     <SelectBox
        label="Select your Interest"
        options={K_OPTIONS}
        selectedValues={selectedTeams}
        onMultiSelect={onMultiChange()}
        onTapClose={onMultiChange()}
        isMulti
      />
    </View>
  )

  function onMultiChange() {
    return (item) => setSelectedTeams(xorBy(selectedTeams, [item], 'id'))
  }

}

export default InterestInput