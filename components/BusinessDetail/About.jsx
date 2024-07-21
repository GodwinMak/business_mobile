import { View, Text } from 'react-native'
import React from 'react'

const About = ({business}) => {
  return (
    <View
        style={{
            padding: 20,
            backgroundColor: "#fff",
        }}
    >
      <Text style={{fontFamily: "spaceMono", fontSize: 20, fontWeight: 800}}>About</Text>
      <Text
        style={{
          fontFamily: "spaceMono",
          lineHeight: 20,
        }}
      >{business?.about}</Text>
    </View>
  )
}

const MemoizedAbout = React.memo(About);
export default MemoizedAbout;