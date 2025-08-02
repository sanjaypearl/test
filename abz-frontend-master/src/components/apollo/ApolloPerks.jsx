import { FiShare2, FiUser, FiGift } from "react-icons/fi";
import { BsLaptop } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import { MdWorkOutline } from "react-icons/md";
import { PiConfettiBold } from "react-icons/pi";

const perks = [
  {
    title: "Connect",
    description:
      "Meet, collaborate, and network with security specialists all across the world.",
    icon: <FiShare2 className="text-3xl text-black" />,
  },
  {
    title: "Learn",
    description: "Gain insights from experienced members in the community.",
    icon: <FiUser className="text-3xl text-black" />,
  },
  {
    title: "Exclusive Programs",
    description:
      "Access to exclusive bug bounty programs from major companies.",
    icon: <BsLaptop className="text-3xl text-black" />,
  },
  {
    title: "Rewards",
    description:
      "Receive monetary rewards and recognition for finding vulnerabilities.",
    icon: <FiGift className="text-3xl text-black" />,
  },
  {
    title: "Collaborate",
    description:
      "Opportunity to collaborate with a diverse group of bounty hunters.",
    icon: <FaUsers className="text-3xl text-black" />,
  },
  {
    title: "Job Opportunities",
    description: "Participate in Hiring challenges and competitions.",
    icon: <MdWorkOutline className="text-3xl text-black" />,
  },
  //   {
  //     title: "Events",
  //     description:
  //       "Participate in exclusive webinars, workshops, and get invitations to industry events.",
  //     icon: <PiConfettiBold className="text-3xl text-black" />,
  //   },
];

export default function ApolloPerks() {
  return (
    <section className="bg-[#ffffff] py-12 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-10">
          Perks From Joining The <br /> Apollo community
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {perks.map((perk, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="mb-4">{perk.icon}</div>
              <h3 className="font-bold text-gray-800 text-lg mb-1">
                {perk.title}
              </h3>
              <p className="text-sm text-gray-700">{perk.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
