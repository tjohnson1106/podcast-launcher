import React, { useState } from "react";
import { useLazyQuery } from "@apollo/react-hooks";
import { StyleSheet, TextInput, FlatList } from "react-native";
import { Box, Text } from "react-native-design-utility";

import KeyboardDismissView from "../../components/KeyboardDismissView";

import { theme } from "../../constants/theme";
import { SearchQueryVariables } from "../../types/graphql";
import searchQuery from "../../graphql/query/searchQuery";

const SearchScreen = () => {
  const [term, setTerm] = useState<string>("");

  const [, { data, loading, error }] = useLazyQuery<
    SearchQuery,
    SearchQueryVariables
  >(searchQuery);

  const onSearch = async () => {
    try {
      await search({
        variables: {
          term
        }
      });
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <Box f={1} bg="white">
      <Box h={50} w="100%" px="sm" my="sm">
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
          onChangeText={setTerm}
          autoCorrect={false}
          onSubmitEditing={onSearch}
          value={term}
        />
      </Box>

      <FlatList<searchQuery_search>
        keyboardShouldPersistTaps="never"
        style={{
          minHeight: "100%"
        }}
        data={data?.search ?? []}
        renderItem={({ item }) => (
          <Box h={90} dir="row" align="center">
            <Box h={70} w={70} bg="blueLight" radius={10} mr={10} />
            <Box>
              <Text bold>Podcast</Text>
              <Text size="xs" color="grey">
                Subtitle
              </Text>
              <Text size="xs" color="blueLight">
                275 Episodes
              </Text>
            </Box>
          </Box>
        )}
        keyExtractor={(item) => String(item.id)}
      />
    </Box>
  );
};

export default SearchScreen;
