import React from "react";
import { SiHiveBlockchain, SiFsecure, SiStrapi } from "react-icons/si";
import { VscServerProcess } from "react-icons/vsc";
import AboutCard from "./AboutCard";

const About = () => {
  return (
    <div className="bg-black">
      <div className="max-w-[1240px] mx-auto p-6">
        <h2 className="text-3xl text-center font-bold text-white">
          A Growing Protocol Ecosystem
        </h2>
        <p className="py-4 text-center text-xl text-white leading-10">
          The Defi protocol system empowers developers, liquidity providers, and
          traders to participate in a financial marketplace that is open and
          accessible to all.
        </p>
        <div className="grid cols gap-3 my-4">
          <AboutCard
            Icon={SiHiveBlockchain}
            heading="Reliable, tamper-proof network"
            text="Use decentralization, trusted nodes, premium data, and
            cryptographic proofs to connect highly accurate and available
            data/APIs to any smart contract."
          />
          <AboutCard
            Icon={SiFsecure}
            heading="Seamless connection to any API"
            text="Build on a flexible framework that can retrieve data from any API, connect with existing systems, and integrate with any current or future blockchain."
          />
          <AboutCard
            Icon={SiStrapi}
            heading="Proven, ready-made solutions"
            text="Integrate pre-built, time-tested oracle solutions that already secure tens of billions in smart contract value for market-leading decentralized applications."
          />
          <AboutCard
            Icon={VscServerProcess}
            text="Use a decentralized network of DeFi Keeper nodes to automate contracts, mitigating risk of manual interventions and centralized servers."
            heading="Secure off-chain computation"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
