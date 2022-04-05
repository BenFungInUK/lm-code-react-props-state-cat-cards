import { useState, useCallback } from "react";
import Pet from "../data/pet";

interface Props {
  onClickSubmit: (pet: Pet) => void;
}
// remember we can write components as functions that return JSX.Element
const SubmitForm: React.FC<Props> = ({ onClickSubmit }) => {
  const [type, setType] = useState("");
  const [name, setName] = useState("");
  const [species, setSpecies] = useState("");
  const [favFoods, setFavFoods] = useState("");
  const [birthYear, setBirthYear] = useState("");

  const returnFormData = useCallback(
    (pet: Pet) => {
      onClickSubmit(pet);
    },
    [onClickSubmit]
  );

  return (
    <div className="submitForm">
      <form>
        <label>
          Type:
          <select
            id="dropdown"
            onChange={(e) => setType(e.target.value)}
            value={type}
          >
            <option value="cat">Cat</option>
            <option value="dog">Dog</option>
          </select>
        </label>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Species:
          <input
            type="text"
            name="species"
            value={species}
            onChange={(e) => setSpecies(e.target.value)}
          />
        </label>
        <label>
          FavFoods:
          <input
            type="text"
            name="favFoods"
            value={favFoods}
            onChange={(e) => setFavFoods(e.target.value)}
          />
        </label>
        <label>
          BirthYear:
          <input
            type="text"
            name="birthYear"
            value={birthYear}
            onChange={(e) => setBirthYear(e.target.value)}
          />
        </label>
        <input
          type="submit"
          value="Submit"
          onClick={() =>
            returnFormData({
              type: type,
              name: name,
              species: species,
              favFoods: favFoods,
              birthYear: birthYear,
            })
          }
        />
      </form>
    </div>
  );
};

export default SubmitForm;
