import React, { PropsWithChildren } from "react";
import { ScrollView, Keyboard } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

interface Props {
  withScrollView?: boolean;
}

const KeyboardDismissView: React.FC<Props> = (
  props: PropsWithChildren<Props>
) => {
  if (props.withScrollView) {
    return (
      <ScrollView keyboardShouldPersistTaps="never">
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
