const Adoption = () => {
  return (
    <div className="min-h-screen pt-20 text-justify animationPage">
      <div className="p-20">
        <h3 className="text-6xl mb-10">Adoption</h3>
        <span>
          Comme vous le savez, vous avez toujours la possibilité de venir voir 1
          à 3 chiens à l’adoption au sein du Waf ! Mais, où adopter si on ne
          trouve pas de chien qui nous corresponde au Waf ? La réponse dans cet
          article !
        </span>
      </div>
      <div>
        <section className="p-20">
          <h3 className="text-3xl mb-10">Privilégiez les refuges !</h3>
          <span>
            En effet, les chiens en refuges sont ceux qui sont le plus en
            détresse et sont malheureusement trop nombreux ! En fonction de
            votre département, retrouvez-les dans la liste suivante
            <a href="http://www.lejpa.com/structures-refuge">
              http://www.lejpa.com/structures-refuge
            </a>
            . Il est important de se rendre directement sur place afin de
            découvrir les chiens qui sont compatibles à votre vie, les bénévoles
            seront toujours là pour vous renseigner afin de vous conseiller !
          </span>
        </section>
        <section className="p-20">
          <h3 className="text-3xl mb-10">Au sein d’associations de familles d’accueil !</h3>
          <span>
            Nombreuses sont les associations qui recueillent directement les
            chiens en famille d’accueil. C’est d’ailleurs notre cas lorsque nous
            recueillons des chiens des associations telles que : Action
            Adoption, etc. ! La procédure est, en général, la suivante : vous
            réalisez un formulaire afin de rencontrer le chien que vous
            souhaiteriez adopter, la famille d’accueil rentre en contact avec
            vous afin de réaliser une rencontre ! Retrouvez ci-dessous la liste
            des associations de protection animales en fonction de votre
            département ; si vous ne trouvez pas leur site web, n’hésitez pas à
            consulter leurs réseaux sociaux ; c’est souvent le meilleur moyen de
            communication pour les associations !
          </span>
        </section>
      </div>
    </div>
  );
};

export default Adoption;
