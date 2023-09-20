import Shopfront from "../../assets/Shopfront.png";
import dogsAdoptions from "../../data/dogAdoptionData";
import menus from "../../data/menuData";
import chef from "../../assets/chef.png";

import { useState } from "react";
import { Link } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../Home/home.css";

const Home = () => {
  const [openAdoption, setOpenAdoption] = useState(false);
  const handleAdoptionClick = () => {
    window.scrollTo(0, 0);
    setOpenAdoption(false);
  };

  return (
    <div className="pt-20 animationPage">
      <section className="flex p-20">
        <div className="w-2/4 ">
          <img
            src={Shopfront}
            className="w-full h-full rounded-full object-cover max-w-lg"
          />
        </div>
        <div className="w-2/4 p-20">
          <h1 className="text-6xl mb-5 font-light"> OlliePollie&Co</h1>
          <div className="lineContainer">
            <figure className="line mt-5"></figure>
            <Link
              to="/cafeDescription"
              className="mt-20 font-bold mb-10"
              onClick={handleAdoptionClick}
            >
              En savoir plus
            </Link>
          </div>
          <article className="leading-10 mt-10">
            Le Café Canin est un endroit unique où les amis à quatre pattes sont
            les bienvenus ! Notre café offre une atmosphère chaleureuse et
            conviviale pour les chiens et leurs propriétaires. Vous pouvez
            savourer une tasse de café tout en laissant votre fidèle compagnon
            socialiser avec d'autres toutous. Notre menu propose une sélection
            de friandises pour chiens et de rafraîchissements spécialement
            conçus pour nos amis à quatre pattes. Venez passer un moment
            agréable avec votre meilleur ami au Café Canin, l'endroit préféré
            des amoureux des chiens !
          </article>
        </div>
      </section>
      <section className="bg-slate-200 bg-opacity-25 p-20">
        <h2 className="text-6xl font-light">Les chiens à l'adoption</h2>
        <div className="lineContainer">
          <figure className="line mt-10"></figure>
          <Link
            to="/adoption"
            className="mt-20 font-bold border-b-10 border-transparent hover:border-black"
            onClick={handleAdoptionClick}
          >
            En savoir plus
          </Link>
        </div>

        <div className="mt-20">
          <Swiper
            navigation={true}
            modules={[Navigation]}
            loop={true}
            slidesPerView={2}
            className="mySwiper"
          >
            {dogsAdoptions.map((dog, index) => (
              <SwiperSlide key={index}>
                <Link
                  to="/dogadoption"
                  onClick={handleAdoptionClick}
                  state={{ some: dog }}
                  className="w-4/5"
                >
                  <img src={dog.picture} alt={dog.name} />
                  <h3 className="mt-10 text-3xl">{dog.name}</h3>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      <section className="flex p-20">
        <div className="w-2/4 p-20">
          <h2 className="text-6xl mb-5 font-light"> La chef</h2>
          <div className="lineContainer">
            <figure className="line mt-5"></figure>
            <Link
              to="/chef"
              className="mt-20 font-bold "
              onClick={handleAdoptionClick}
            >
              En savoir plus
            </Link>
          </div>
          <article className="leading-10 mt-10">
            Notre chef, Maelle, est la passion incarnée pour les chiens et la
            cuisine. Avec une formation culinaire exceptionnelle et une profonde
            affection pour nos amis à quatre pattes, elle a créé un menu unique
            et délicieux pour nos visiteurs canins. Emma travaille avec
            dévouement pour garantir que chaque plat servi est sûr, sain et
            irrésistible pour nos amis à fourrure. Sa créativité et son amour
            pour les chiens font d'elle l'âme du Café Canin, un endroit où la
            cuisine rencontre la convivialité canine.
          </article>
        </div>
        <div className="w-2/4 ">
          <img
            src={chef}
            className="w-full h-full rounded-full object-cover max-w-lg"
          />
        </div>
      </section>
      <section className="bg-slate-200 bg-opacity-25 p-20">
        <h2 className="text-6xl font-light">Au menu</h2>
        <div className="lineContainer">
          <figure className=" mt-10 line"></figure>
          <Link
            to=""
            className="mt-20 font-bold border-b-10 border-transparent hover:border-black"
            onClick={handleAdoptionClick}
          >
            En savoir plus
          </Link>
        </div>
        <div className="mt-20">
          <Swiper
            navigation={true}
            modules={[Navigation, Autoplay]}
            loop={true}
            slidesPerView={1}
            className="mySwiper"
            autoplay={{
              delay: 2500,
              disableOnInteraction: true,
            }}
          >
            {menus.map((menu, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col w-2/5 h-full">
                  <img src={menu.image} alt={menu.name} />
                  <h3 className="mt-10 text-3xl">{menu.name}</h3>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </div>
  );
};

export default Home;
