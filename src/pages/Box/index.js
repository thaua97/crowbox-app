import React, { Component } from 'react'
import { View, Text, FlatList, TouchableOpacity } from 'react-native'

import styles from './styles'

import AsyncStorage from '@react-native-community/async-storage'
import api from '../../services/api'

export default class Box extends Component {
  state = { box: {} }

  async componentDidMount() {
    //this.subscribeToNewFiles()

    const box = await AsyncStorage.getItem('@CrowBox:box')
    const response = await api.get(`/boxes/${box}`)

    this.setState({ 
      box: response.data 
    })
  }

  renderItem = ({ item }) => (
    <TouchebleOpacity
      onPress={() => {}}
      style={styles.file}
    >
      <View></View>
    </TouchebleOpacity>
  )

  render() {
    return (
        <View style={styles.container}>
            <Text style={styles.boxTitle}>{this.state.box.title}</Text>

            <FlatList 
              style={styles.list}
              data={this.state.box.files}
              keyExtractor={file => file._id}
              ItemSeparatorComponent={() => <View style={styels.separator}/>}
              renderItem={this.renderItem}
            />
        </View>
    )
  }
}
