import React, { useState } from 'react'
import { Text, View } from 'react-native'
import SelectBox from 'react-native-multi-selectbox'
import { xorBy } from 'lodash'

// Options data must contain 'item' & 'id' keys

const K_OPTIONS = [
  {
    item: '1',
    id: '1',
  },
  {
    item: '2',
    id: '2',
  },
  {
    item: '3',
    id: 'BR',
  },
  {
    item: '4',
    id: 'PSG',
  },
  {
    item: '5',
    id: 'FBM',
  },
  {
    item: '6',
    id: 'MUN',
  },
  {
    item: '7',
    id: '1',
  },
  {
    item: '8',
    id: '2',
  },
  {
    item: '9',
    id: 'BR',
  },
  {
    item: '10',
    id: 'PSG',
  },
  {
    item: '11',
    id: 'FBM',
  },
  {
    item: '12',
    id: 'MUN',
  }
]
const M_OPTIONS = [
    {
      item: 'January',
      id: 'JUVE',
    },
    {
      item: 'February',
      id: 'RM',
    },
    {
      item: 'Barcelona',
      id: 'BR',
    },
    {
      item: 'March',
      id: 'PSG',
    },
    {
      item: 'April',
      id: 'FBM',
    },
    {
      item: 'May',
      id: 'MUN',
    },
    {
      item: 'June',
      id: 'MCI',
    },
    {
      item: 'July',
      id: 'EVE',
    },
    {
      item: 'August',
      id: 'TOT',
    },
    {
      item: 'September',
      id: 'CHE',
    },
    {
      item: 'October',
      id: 'LIV',
    },
    {
      item: 'November',
      id: 'ARS',
    },
  
    {
      item: 'December',
      id: 'LEI',
    },
  ]
  const Y_OPTIONS = [
    {
      item:"2008"
    },
    {
        item:"2007"
      },
      {
        item:"2006"
      },
      {
        item:"2005"
      },
      {
        item:"2004"
      },
      {
        item:"2003"
      },
      {
        item:"2002"
      },
      {
        item:"2001"
      },
  ]

function DateInput() {
 const [selectedDate, setselectedDate] = useState('')
 const [selectedMonth, setselectedMonth] = useState('')
 const [selectedYear, setselectedTYear] = useState('')
 
  return (
    <View style={{ top:30, display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
      
    <View style={{marginHorizontal:4}}>
         <SelectBox
        label="Date"
        options={K_OPTIONS}
        value={selectedDate}
        onChange={onChange()}
        hideInputFilter={true}
        
      />
    </View>
       
    <View style={{marginHorizontal:4}}>
         <SelectBox
        label="Month"
        options={M_OPTIONS}
        value={selectedMonth}
        onChange={onChangeClick()}
        hideInputFilter={true}
      />
    </View>
       
    <View style={{marginHorizontal:4}}>
         <SelectBox
        label="Year"
        options={Y_OPTIONS}
        value={selectedYear}
        onChange={onChangeEvent()}
        hideInputFilter={true}
      />
    </View>
    
    </View>
  )
  function onChange() {
    return (val) => setselectedDate(val)
  }
  function onChangeClick() {
    return (val) => setselectedMonth(val)
  }
  function onChangeEvent() {
    return (val) => setselectedTYear(val)
  }
  
 
}

export default DateInput