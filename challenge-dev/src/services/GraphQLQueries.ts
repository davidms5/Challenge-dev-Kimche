import { gql } from "@apollo/client";
//usar lazy loading en la pagina
//all, human, alien, robot
export const GET_CHARACTERS = gql`
query GetCharacters($page: Int, $status: String, $species: String, $name: String, $gender: String) {
  characters(page: $page, filter: { status: $status, species: $species, gender: $gender, name: $name }) {
    info {
      pages
      next
      prev
    }
    results {
      id
      name
      status
      species
      image
      gender
      origin {
        name
      }
    }
  }
}

`;

