import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import "./App.css";
import Navbar from "./components/navbar";
import Header from "./components/header";
import Footer from "./components/footer";
import CatCard from "./components/cat_card";
import Cat from "./data/cat";
import catData from "./data/cat-data";
import images from "./data/cat-image";
import Dog from "./data/dog";
import Pet from "./data/pet";
import { dogData } from "./data/dog-data";
import SubmitForm from "./components/submitForm";

function App() {
  // JavaScript code can be inserted here!
  catData.forEach((cat, index) => {
    const id = uuidv4();
    cat.id = id;
    if (images[index]) images[index].id = id;
  });

  const [cats, setCats] = useState<Array<Cat>>(catData);
  const [dogs, setDogs] = useState<Array<Dog>>(dogData);

  function addNewPet(pet: Pet) {
    console.log(pet);
    pet.type === "cat"
      ? setCats([
          ...cats,
          {
            name: pet.name,
            species: pet.species,
            favFoods: pet.favFoods.split(","),
            birthYear: parseInt(pet.birthYear),
            id: (cats.length + 1).toString(),
          },
        ])
      : setDogs([
          ...dogs,
          {
            name: pet.name,
            species: pet.species,
            favFoods: pet.favFoods.split(","),
            birthYear: parseInt(pet.birthYear),
          },
        ]);
  }

  return (
    <>
      <Navbar />
      <Header catCount={cats.length} dogCount={dogs.length} />

      <main>
        <div className="cards__wrapper">
          {cats.map((cat) => (
            <CatCard
              key={cat.id}
              image={images.find((image) => image.id === cat.id)}
              name={cat.name}
              species={cat.species}
              favFoods={cat.favFoods}
              birthYear={cat.birthYear}
            />
          ))}
          {dogs.map((dog, index) => (
            <CatCard
              key={index}
              name={dog.name}
              species={dog.species}
              favFoods={dog.favFoods}
              birthYear={dog.birthYear}
            />
          ))}
        </div>
        <SubmitForm onClickSubmit={(pet) => addNewPet(pet)} />
      </main>

      <Footer />
    </>
  );
}

export default App;
