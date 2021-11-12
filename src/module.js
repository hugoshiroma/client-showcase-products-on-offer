import {View, Text} from 'react-native';
import React from 'react';

const TemplateScreen = () => (
  <View
    style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'cyan',
    }}>
    <Text>Olá, mundo!</Text>
  </View>
);

export default class TemplateModule {
  prefix() {
    return 'template';
  }

  tabs() {
    return [
      {
        id: 'template',
        label: 'Template',
        screen: 'template.templateScreen',
        icon: require('../tab.png'),
        selectedIcon: require('../tabSelected.png'),
      },
    ];
  }

  components() {
    return [
      {
        id: 'template.templateScreen',
        generator: () => TemplateScreen,
      },
    ];
  }

  methods() {
    return [];
  }
}
