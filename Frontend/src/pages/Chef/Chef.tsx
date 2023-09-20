import chef2 from "../../assets/chef2.png";
import infirmiere from "../../assets/infirmiere.png";
import educatrice from "../../assets/educatrice.png"

const Chef = () => {
  return (
    <div className="min-h-screen pt-20 text-justify animationPage">
      <div className="p-20 flex gap-40">
        <div className="w-2/4">
          <img
            src={chef2}
            className="w-full h-full rounded-full object-cover max-w-lg"
          />
        </div>
        <div className="w-2/4 p-20">
          <h3 className="text-6xl mb-10">Maelle Dumange</h3>
          <span className="leading-10 ">
            Maëlle Dumange est une femme passionnée par le bien-être des chiens
            et leur éducation. Elle est le fier propriétaire et gérante d'un
            Café pour Chiens unique en son genre, un endroit chaleureux où les
            amoureux des chiens et leurs compagnons à quatre pattes peuvent se
            détendre, socialiser et savourer des friandises spécialement conçues
            pour nos amis canins.
          </span>
        </div>
      </div>
      <section className="bg-slate-200 bg-opacity-25 flex p-20 gap-40">
        <div className="w-2/4">
          <h3 className="text-3xl mb-10">Infirmière vétérinaire</h3>
          <span className="leading-10">
            Maëlle ne se contente pas d'être une entrepreneuse dévouée, mais
            elle possède également une riche expérience dans le domaine de la
            santé animale. Avant de devenir cheffe de café pour chiens, elle a
            travaillé pendant de nombreuses années en tant qu'infirmière
            vétérinaire dans une clinique renommée. Cette expérience lui a
            permis d'acquérir une connaissance approfondie de la santé et du
            bien-être des animaux, ce qui est un atout inestimable dans son rôle
            actuel.
          </span>
        </div>
        <div className="w-1/4">
          <img src={infirmiere} className="w-full h-full" />
        </div>
      </section>
      <section className="flex p-20 gap-40">
        <div className="w-1/4">
          <img src={educatrice} className="w-full h-full" />
        </div>
        <div className="w-2/4">
          <h3 className="text-3xl mb-10">Educatrice canin</h3>
          <span className="leading-10">
            En plus de son passé en tant qu'infirmière vétérinaire, Maëlle est
            titulaire d'un diplôme d'éducateur canin certifié. Cette formation
            spécialisée lui permet d'offrir des cours d'éducation canine de
            haute qualité, aidant les propriétaires de chiens à établir des
            relations positives avec leurs compagnons à quatre pattes. Grâce à
            ses compétences en éducation canine, elle peut organiser des séances
            de socialisation pour les chiens dans son café, créant ainsi un
            environnement convivial et sécurisé pour les rencontres canines.
          </span>
        </div>
      </section>
    </div>
  );
};

export default Chef;
