import { Game } from "../hooks/useGames";
import { Card, CardBody, HStack, Heading, Img } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticStore from "./CriticStore";
import getCroppedImageUrl from "../services/image-url";

interface GameCardProps {
  game: Game;
}

const GameCard = ({ game }: GameCardProps) => {
  return (
    <Card>
      <Img src={getCroppedImageUrl(game.background_image)} alt={game.name} />
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={4}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticStore metacritic={game.metacritic} />
        </HStack>
        <Heading fontSize="2xl">{game.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
