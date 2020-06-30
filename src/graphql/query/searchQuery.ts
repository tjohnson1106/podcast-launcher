import { gql } from "graphql";

const searchQuery = gql`
  query SearchQuery($term: String!) {
    search(term: $term) {
      artist
      episodesCount
      feedUrl
      podcastName
      thumbnail
      genres
    }
  }
`;

export default searchQuery;
