import { View, Text } from "react-native";
import React from "react";

const TemplateScreen = () => (
  <View
    style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "cyan",
    }}
  >
    <Text>Olá, mundo!</Text>
  </View>
);

export default class TemplateModule {
  prefix() {
    return "client-showcase-products-on-offer";
  }

  tabs() {
    return [
      {
        id: "client-showcase-products-on-offer",
        label: "Ofertas",
        screen: "client-showcase-products-on-offer.templateScreen",
        icon: require("../tab.png"),
        selectedIcon: require("../tabSelected.png"),
      },
    ];
  }

  components() {
    return [
      {
        id: "client-showcase-products-on-offer.templateScreen",
        generator: () => TemplateScreen,
      },
    ];
  }

  methods() {
    return [];
  }
}
