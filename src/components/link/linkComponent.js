import React from 'react'
import {
  Button
} from 'react-native-elements'
import {LinkService, linkService} from '../../services/linkService/linkService'
export default function Link (props) {
  const localLinkService = props.linkService || linkService
  return (
    <Button
      style={props.style}
      title={props.text}
      onPress={() => localLinkService.openLink(props.url)} />
  )
}

Link.propTypes = {
  url: React.PropTypes.string,
  style: React.PropTypes.object,
  text: React.PropTypes.string,
  linkService: React.PropTypes.instanceOf(LinkService)
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF'
//   }
// })
