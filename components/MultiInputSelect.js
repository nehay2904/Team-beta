import React, { useState } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import SelectBox from 'react-native-multi-selectbox'
import { xorBy } from 'lodash'

// Options data must contain 'item' & 'id' keys

const K_OPTIONS = [
    {
        item: 'Music',
        id: 'JUVE',
    },
    {
        item: 'Dancing',
        id: 'RM',
    },
    {
        item: 'Travelling',
        id: 'BR',
    },
    {
        item: 'Coding',
        id: 'PSG',
    },
    {
        item: 'Cooking',
        id: 'FBM',
    },
    {
        item: 'Reading',
        id: 'MUN',
    },
    {
        item: 'Fashion',
        id: 'MCI',
    },
    {
        item: 'Gardening',
        id: 'EVE',
    },
    {
        item: 'Movies',
        id: 'TOT',
    },
    {
        item: 'History',
        id: 'CHE',
    },
    {
        item: 'Memes',
        id: 'LIV',
    },
    {
        item: 'Party',
        id: 'ARS',
    },

    {
        item: 'Cleaning',
        id: 'LEI',
    },
]
const SubmitHandler = (event) => {
    event.preventDefault();
    navigation.navigate('ComNav', { name: 'cancel' })

    const user = {
     interest:interest
    };

    const data = JSON.stringify(user);

    axios.post(`https://dwibe-backend-dev.herokuapp.com/profile`, { data })
  
  }

function MultiSelectInput({navigation}) {

    const [selectedTeams, setSelectedTeams] = useState([])
    const SubmitHandler = (event) => {
        event.preventDefault();
    
        const user = {
         interest:interest
        };
    
        navigation.navigate('ComNav', { name: 'cancel' })
        const data = JSON.stringify(user);
    
        axios.post(`https://dwibe-backend-dev.herokuapp.com/profile`, { data })
      
      }
    return (
        <View style={{ backgroundColor: 'black', height: '100%', width: "100%", padding: 30 , display:"flex", flexDirection:'column'}}>


            <View style={{ marginLeft: 30, height: 40 }} />
            <Text style={styles.Title} >Pick Your Interest </Text>
            <Text style={styles.Subtitle}>* You can choose only 6</Text>
            <SelectBox
                label="Select multiple"
                options={K_OPTIONS}
                selectedValues={selectedTeams}
                onMultiSelect={onMultiChange()}
                onTapClose={onMultiChange()}
                isMulti
                arrowIconColor='white'
                containerStyle={styles.InputStyle}
                optionsLabelStyle={styles.styleinput}
                selectedItemStyle={styles.styleinput}
                inputFilterContainerStyle={styles.style}
            />
            <View style={{ justifyContent: "flex-end", alignItems: "center" }}>
                <TouchableOpacity activeOpacity={0.5}>
                    <Text style={styles.SubmitBtn}  onPress={SubmitHandler}   >
                        Done
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )

    function onMultiChange() {
        return (item) => setSelectedTeams(xorBy(selectedTeams, [item], 'id'))
    }

}

export default MultiSelectInput;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        justifyContent: "center",
        alignItems: "center"
    },
    subcontainer: {
        width: "85%"
    },
    Title: {
        color: '#CFC5C5',
        letterSpacing: 2.5,
        fontSize: 40,
        textAlign: 'center',
        marginTop: 40,
        marginBottom: 40
    },
    Subtitle: {
        color: "#FF3333",
        fontSize: 15,
        letterSpacing: 1,
        textAlign: 'center',
        marginVertical: 10
    },
    options: {
        color: '#660000',
        backgroundColor: 'white',
        paddingVertical: 8,
        paddingHorizontal: 15,
        borderRadius: 50,
        marginHorizontal: 5,
        display: 'flex',
        flexDirection: "row",
        marginVertical: 0
    },
    style: {
        display: "none"
    },
    optionsDown: {
        color: '#660000',
        backgroundColor: 'white',
        paddingVertical: 8,
        paddingHorizontal: 15,
        borderRadius: 50,
        marginHorizontal: 5,
        display: 'flex',
        flexDirection: "row",
        width: "40%",
        justifyContent: 'space-between'
    },
    SubmitBtn: {
        color: '#33BBFF',
        textAlign: 'center',
        marginTop: 20,
        fontSize: 31.49,
        padding: 10,
        borderWidth: 2,
        borderColor: '#4D4D4D',
        borderRadius: 8.4902,
        justifyContent: 'flex-end',
        alignItems: "flex-end"

    },
    InterestInput: {
        width: "100%",
        height: 170,
        borderWidth: 3,
        borderColor: "#999997",
        marginTop: 10,
        marginBottom: 40,
        borderRadius: 20
    },
    selectedoptions: {
        color: '#660000',
        backgroundColor: 'white',
        paddingVertical: 8,
        paddingHorizontal: 15,
        borderRadius: 50,
        marginHorizontal: 5,
        display: 'flex',
        flexDirection: "row",
        marginVertical: 0,
        marginTop: 8,
        width: 100
    },
    inputtext: {
        color: 'red',
    },
    InputStyle: {
        borderColor: "#999999",
        borderWidth: 2,
        paddingHorizontal: 10,
        borderRadius: 6,
        color: 'white',
        paddingTop: 10
    },
    styleinput: {
        color: 'white'
    }

})