import { Badge } from "@chakra-ui/react";

interface CriticStoreProps {
  metacritic: number;
}

const CriticStore = ({ metacritic }: CriticStoreProps) => {
  const colorScheme =
    metacritic > 75 ? "teal" : metacritic > 50 ? "yellow" : "red";

  return (
    <Badge colorScheme={colorScheme} paddingX={3} paddingY={1} borderRadius={3}>
      {metacritic}{" "}
    </Badge>
  );
};

export default CriticStore;
