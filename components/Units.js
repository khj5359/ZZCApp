import React from "react";
import { StyleSheet, Text } from "react-native";

export default class Units extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Text style={styles.UnitsBox}>
        {this.props.unitresult}
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  UnitsBox: {
    flex: 1,
    paddingLeft: 8,
    paddingRight: 8,
    // backgroundColor: '#80cbc4',
    fontSize: 26,
    textAlign: "center",
    color: "#424242"
  }
});
