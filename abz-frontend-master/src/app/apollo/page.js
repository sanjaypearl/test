import ApolloHero from "@/components/apollo/ApolloHero";
import ApolloPerks from "@/components/apollo/ApolloPerks";
import ApplicationProcess from "@/components/apollo/ApplicationProcess";
import Security from "@/components/HomeComponents/Security";

const page = () => {
  return (
    <div>
      <ApolloHero />
      <ApplicationProcess />
      <ApolloPerks />
      <Security />
    </div>
  );
};

export default page;
