import React, { PropsWithChildren } from "react";
import {
  ScrollView,
  Keyboard,
  StyleSheet,
  TouchableOpacity
} from "react-native";

interface Props {
  withScrollView?: boolean;
}

const KeyboardDismissView: React.FC<Props> = (
  props: PropsWithChildren<Props>
) => {
  if (props.withScrollView) {
    return (
      <ScrollView
        keyboardShouldPersistTaps="never"
        contentContainerStyle={s.container}
      >
        {props.children}
      </ScrollView>
    );
  }

  return (
    <TouchableOpacity
      activeOpacity={1}
      style={s.container}
      onPress={Keyboard.dismiss}
    >
      {props.children}
    </TouchableOpacity>
  );
};

const s = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default KeyboardDismissView;
