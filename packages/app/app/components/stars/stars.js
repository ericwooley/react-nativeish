import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'

export default class Stars extends Component {
  render () {
    return (
      <View>
        <Text>
          {this.props.starCount < 0 ? '-' : this.props.starCount + ''}
        </Text>
        <Button title={'Get Stars'} onPress={this.props.onPress} />
      </View>
    )
  }
}

Stars.propTypes = {
  starCount: React.PropTypes.number.isRequired,
  onPress: React.PropTypes.func
}
