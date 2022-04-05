// cat_card.tsx
import CatImage from "./cat_image";
import { CatImageProps } from "../data/cat";

interface CatCardProps {
  name: string;
  species: string;
  favFoods: Array<string>;
  birthYear: number;
  image?: CatImageProps;
}

const CatCard: React.FC<CatCardProps> = ({
  name,
  species,
  favFoods,
  birthYear,
  image,
}) => {
  return (
    <div className="card">
      {image !== undefined && (
        <CatImage
          image={image.image}
          altText={image.altText}
          licenceType={image.licenceType}
          licenceUrl={image.licenceUrl}
          attributionName={image.attributionName}
          attributionUrl={image.attributionUrl}
        />
      )}
      <h3 className="card__text card__header">{name}</h3>
      <p className="card__text">Species: {species}</p>
      <p className="card__text">Favourite Food(s): {favFoods.join(", ")}</p>
      <p className="card__text">Birth Year: {birthYear}</p>
    </div>
  );
};

export default CatCard;
