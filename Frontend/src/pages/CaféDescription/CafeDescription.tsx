import cafe from "../../assets/café.png";
import DescriptionCafe from "../../components/DescriptionCafe/DescriptionCafe";

import cafeDescriptions from "../../data/cafeDescriptionData";

const CafeDescription = () => {
  return (
    <div className="min-h-screen pt-48 animationPage">
      <div className="flex pr-20 pl-20 ">
        <div className="flex flex-col w-2/4">
          <h2 className="text-6xl">OlliePollie&Co</h2>
          <h3 className="text-3xl mt-10 mb-5">Adresse : </h3>
          <span>
            123 Rue des Chiens Heureux <br /> Ville de Caninville, CP 12345{" "}
            <br /> Téléphone : +1 (123) 456-7890
          </span>
          <h3 className="text-3xl mt-10 mb-5">Horaires d'ouverture : </h3>
          <span>
            Lundi à Vendredi : 10h00 - 17h00 <br />
            Samedi et Dimanche : 9h00 - 19h00
          </span>
          <h3 className="text-3xl mt-10 mb-5">Concept : </h3>
          <span>
            Le OlliePollie&Co est bien plus qu'un simple café pour chiens ;
            c'est un paradis canin où nos amis à quatre pattes sont les stars du
            spectacle. Notre café a été créé avec une passion incommensurable
            pour les chiens et l'amour de la convivialité. Voici ce que vous
            pouvez attendre lorsque vous visitez notre établissement unique :
          </span>
        </div>
        <div className="w-3/4 max-h-fit flex justify-center">
          <img src={cafe} className="w-3/4 rounded-full h-full object-cover" />
        </div>
      </div>
      <div className="text-justify mt-20">
        {cafeDescriptions.map((description, index: number) => (
          <DescriptionCafe
            description={description}
            key={index}
            className={`${
              index % 2 === 1
                ? "flex-row-reverse"
                : "bg-slate-200 bg-opacity-50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default CafeDescription;
