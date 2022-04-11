import { useState, useCallback } from "react";
import Pet from "../data/pet";

interface Props {
  onClickSubmit: (pet: Pet) => void;
}
// remember we can write components as functions that return JSX.Element
const SubmitForm: React.FC<Props> = ({ onClickSubmit }) => {
  const [type, setType] = useState("cat");
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
      <form
        onSubmit={(e) => {
          e.preventDefault();
          returnFormData({
            type: type,
            name: name,
            species: species,
            favFoods: favFoods,
            birthYear: birthYear,
          });
        }}
      >
        <div className="submitForm__titleContainer">
          <label className="submitForm__font submitForm__title">
            Add your pets to our page!
          </label>
        </div>
        <div className="submitForm__div submitForm__font">
          <label className="submitForm__label">Type:</label>
          <select
            id="dropdown"
            onChange={(e) => setType(e.target.value)}
            defaultValue="cat"
            className="submitForm__input submitForm__font"
          >
            <option value="cat">Cat</option>
            <option value="dog">Dog</option>
          </select>
        </div>
        <div className="submitForm__div submitForm__font">
          <label className="submitForm__label">Name:</label>
          <input
            className="submitForm__input submitForm__font"
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="submitForm__div submitForm__font">
          <label className="submitForm__label">Species:</label>
          <input
            className="submitForm__input submitForm__font"
            type="text"
            name="species"
            value={species}
            onChange={(e) => setSpecies(e.target.value)}
          />
        </div>
        <div className="submitForm__div submitForm__font">
          <label className="submitForm__label">FavFoods:</label>
          <input
            className="submitForm__input submitForm__font"
            type="text"
            name="favFoods"
            value={favFoods}
            onChange={(e) => setFavFoods(e.target.value)}
          />
        </div>
        <div className="submitForm__div submitForm__font">
          <label className="submitForm__label">BirthYear:</label>
          <input
            className="submitForm__input submitForm__font submitForm__font"
            type="text"
            name="birthYear"
            value={birthYear}
            onChange={(e) => setBirthYear(e.target.value)}
          />
        </div>
        <div className="submitForm__buttonContainer">
          <input type="submit" value="Submit" className="submitForm__font" />
        </div>
      </form>
    </div>
  );
};

export default SubmitForm;
