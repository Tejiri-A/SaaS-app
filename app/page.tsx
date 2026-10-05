import CompanionCard from "@/components/CompanionCard";
import CompanionsList from "@/components/CompanionsList";
import Cta from "@/components/CTA";
import { recentSessions } from "@/constants";

const Page = () => {
  return (
    <main>
      <h1>Popular Companions</h1>
      <section className={"home-section"}>
        <CompanionCard
          id={"123"}
          name={"Neura the Brainy Explorer"}
          topic={"Neural Network of the Brain"}
          duration={45}
          color={"#ffda6e"}
          subject={"science"}
        />
        <CompanionCard
          id={"456"}
          name={"Countsy the number Wizard"}
          topic={"Derivatives & Integrals"}
          duration={30}
          color={"#e5d0ff"}
          subject={"science"}
        />
        <CompanionCard
          id={"789"}
          name={"Verba the vocabulary builder"}
          topic={"English Literature"}
          duration={30}
          color={"#bde7ff"}
          subject={"language"}
        />
      </section>

      <section className={"home-section"}>
        <CompanionsList title={"Recently completed sessions"} companions={recentSessions} classNames={"w-2/3 max-lg:w-full"} />
        <Cta />
      </section>
    </main>
  );
};

export default Page;
