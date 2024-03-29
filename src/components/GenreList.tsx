import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  onSelectedGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}
const GenreList = ({ onSelectedGenre, selectedGenre }: Props) => {
  const { data, isLoading, error } = useGenres();

  if (isLoading) return <Spinner />;
  if (error) return null;

  return (
    <>
      <Heading as="h2" size="lg" marginY="20px">
        Genres
      </Heading>
      <ul>
        {data.map((genre) => (
          <List key={genre.id} paddingY="10px">
            <ListItem>
              <HStack>
                <Image
                  src={getCroppedImageUrl(genre.image_background)}
                  alt={genre.name}
                  boxSize="32px"
                  borderRadius={8}
                  objectFit="cover"
                />
                <Button
                  onClick={() => onSelectedGenre(genre)}
                  fontSize="lg"
                  fontWeight={
                    selectedGenre?.id === genre.id ? "bold" : "normal"
                  }
                  whiteSpace="normal"
                  textAlign="left"
                  variant="link"
                >
                  {genre.name}
                </Button>
              </HStack>
            </ListItem>
          </List>
        ))}
      </ul>
    </>
  );
};

export default GenreList;
