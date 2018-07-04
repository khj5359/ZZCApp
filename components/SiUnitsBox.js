import React, { Component } from "react";
import { Text, StyleSheet } from "react-native";

export default class SiUnitsBox extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Text style={styles.siunitbox}>
        {this.props.siunit}
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  siunitbox: {
    flex: 1,
    paddingLeft: 8,
    paddingRight: 8,
    backgroundColor: "#fff",
    fontSize: 32,
    textAlign: "center",
    color: "#2f95dc"
  }
});
