import React from "react";
import { Box, Text } from "react-native-design-utility";
import { TextInput, StyleSheet } from "react-native-gesture-handler";

import { theme } from "../../constants/theme";

const SearchScreen = () => {
  return (
    <KeyboardDismissView>
      <Box f={1} bg="white">
        <Box h={50} w="100%" px="sm" mt="sm">
          <TextInput
            placeholder="Search Podcast"
            selectionColor={theme.color.blueLight}
            style={{
              height: 40,
              flex: 1,
              backgroundColor: theme.color.greyLightest,
              borderRadius: 10,
              paddingHorizontal: theme.space.sm,
              fontSize: theme.text.size.md
            }}
          />
        </Box>
      </Box>
    </KeyboardDismissView>
  );
};

export default SearchScreen;
