import { Dialog } from "@headlessui/react";
import { FaTimesCircle, FaBars } from "react-icons/fa";
import Image from "next/image";
import {
  FaMusic,
  FaVideo,
  FaMoneyBill,
  FaSubscript,
  FaOpencart,
  FaCrown,
  FaMoneyBillWave,
  FaThumbsUp,
  FaWrench,
  FaCaretDown,
} from "react-icons/fa";
const navigation = [
  { name: "Home", href: "#" },
  { name: "Vision", href: "#" },
  { name: "Team", href: "#" },
  { name: "Documentation", href: "#" },
  { name: "FAQ", href: "#" },
];

const aims = [
  {
    name: "Selective Subscription",
    description: "Listeners don’t have to pay for music they don’t listen to.",
    icon: FaThumbsUp,
  },
  {
    name: "Transparency",
    description:
      "With the organized calculation and financial summary, artists know how much royalty they get and how it’s calculated through the shared ledger system.",
    icon: FaOpencart,
  },
  {
    name: "More Royalties",
    description:
      "Artists get up to 100% of the royalties made off streaming the music and videos to the customers.",
    icon: FaCrown,
  },
  {
    name: "Instant Compensations",
    description:
      "The music smart contract executes the transactions and immediately credits the artists.",
    icon: FaMoneyBillWave,
  },
  {
    name: "Data Security",
    description: "Artists’ contents are protected from copyright infringement.",
    icon: FaWrench,
  },
  {
    name: "Pre-set royalties for collaborations",
    description:
      "Artists can automatically divide the earnings for a particular song among band members or collaborating artists.",
    icon: FaCaretDown,
  },
];

const features = [
  {
    name: "Join DrameBase as an Artist:",
    description:
      "Upload Music and Videos for streaming. Mint your content as NFT’s. Have Exclusive EP releases. Get funding and donations on projects. Host Virtual Events",
    icon: FaMusic,
  },
  {
    name: "Join DrameBase as a Fan:",
    description:
      "Video Streaming.Music Streaming.Exclusive EP Access. Earn rewards for listening. Pay for Tickets to shows. Buy NFT’s and order in a physical copy",
    icon: FaVideo,
  },
  {
    name: "Token.",
    description: "DrameBase Token (DB)",
    icon: FaMoneyBill,
  },
];

const people = [
  {
    name: "Leslie Alexander",
    role: "Co-Founder / CEO",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  // More people...
];
export default function Home() {

  return (
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </a>
          </div>
        
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
         
            <a
              href="#"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Get Quoted <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
      </header>

      <div className="relative isolate px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-blackring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Read our whitepaper.{" "}
              <a href="#" className="font-semibold text-indigo-600">
                <span className="absolute inset-0" aria-hidden="true" />
                Here <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Welcome to QAI
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              AI tool for quotation based on real time and market insights
            </p>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>

        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h1 className="font-semibold leading-7 text-indigo-600 text-3xl">
                Vision
              </h1>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                {aims.map((aim) => (
                  <div key={aim.name} className="relative pl-16">
                    <dt className="text-base font-semibold leading-7 text-gray-900">
                      <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                        <aim.icon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </div>
                      {aim.name}
                    </dt>
                    <dd className="mt-2 text-base leading-7 text-gray-600">
                      {aim.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>

        {/* <div className="overflow-hidden bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              <div className="lg:pr-8 lg:pt-4">
                <div className="lg:max-w-lg">
                  <h1 className="text-3xl font-semibold leading-7 text-indigo-600">
                    Features
                  </h1>
                  <p className="mt-6 text-lg leading-8 text-gray-600">
                    Here is what you get to enjoy as a DrameBase user
                  </p>
                  <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                    {features.map((feature) => (
                      <div key={feature.name} className="relative pl-9">
                        <dt className="inline font-semibold text-gray-900">
                          <feature.icon
                            className="absolute left-1 top-1 h-5 w-5 text-indigo-600"
                            aria-hidden="true"
                          />
                          {feature.name}
                        </dt>{" "}
                        <dd className="inline">{feature.description}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>

              <Image
                src="/DBTriplets.png"
                alt="Product screenshot"
                className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
                width={2432}
                height={1442}
              />
            </div>
          </div>
        </div> */}

        <div className="container px-6 py-8 mx-auto">
          <h2 className="text-2xl font-semibold text-center text-indigo-600 capitalize lg:text-3xl">
            Our Team
          </h2>

          <div className="grid gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <div className="w-full max-w-xs text-center">
              <img
                className="object-cover object-center w-full h-48 mx-auto rounded-lg"
                src="https://images.unsplash.com/photo-1493863641943-9b68992a8d07?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=739&q=80"
                alt="avatar"
              />

              <div className="mt-2">
                <h3 className="text-lg font-medium text-black">Ahmed Omer</h3>
                <span className="mt-1 font-medium text-black">CEO</span>
              </div>
            </div>

            <div className="w-full max-w-xs text-center">
              <img
                className="object-cover object-center w-full h-48 mx-auto rounded-lg"
                src="https://images.unsplash.com/photo-1516756587022-7891ad56a8cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                alt="avatar"
              />

              <div className="mt-2">
                <h3 className="text-lg font-medium text-black">Jane Doe</h3>
                <span className="mt-1 font-medium text-black">Co-founder</span>
              </div>
            </div>

            <div className="w-full max-w-xs text-center">
              <img
                className="object-cover object-center w-full h-48 mx-auto rounded-lg"
                src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=731&q=80"
                alt="avatar"
              />

              <div className="mt-2">
                <h3 className="text-lg font-medium text-black">Steve Ben</h3>
                <span className="mt-1 font-medium text-black">UI/UX</span>
              </div>
            </div>

            <div className="w-full max-w-xs text-center">
              <img
                className="object-cover object-center w-full h-48 mx-auto rounded-lg"
                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                alt="avatar"
              />

              <div className="mt-2">
                <h3 className="text-lg font-medium text-black ">
                  Patterson Johnson
                </h3>
                <span className="mt-1 font-medium text-black">
                  Software Engineer
                </span>
              </div>
            </div>
          </div>
        </div>

        <section className="bg-white">
          <div className="container px-6 py-12 mx-auto">
            <h1 className="text-2xl font-semibold lg:text-3xl text-indigo-600">
              Frequently asked questions
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We have answered some questions for you
            </p>
            <div className="grid grid-cols-1 gap-8 mt-8 lg:mt-16 md:grid-cols-2 xl:grid-cols-3">
              <div>
                <div className="inline-block p-3 text-white bg-indigo-600 rounded-lg">
                  <FaMusic />
                </div>

                <div className="mt-2">
                  <h1 className="text-xl font-semibold text-gray-700 text-indigo-600">
                    What is QAI?
                  </h1>

                  <p className="mt-2 text-sm text-black">
                    {/* DrameBase is a decentralized media streaming platform. It
                    uses blockchain InterPlanetary File Systems (IPFS)
                    technology to distribute media content. */}
                  </p>
                </div>
              </div>

              <div>
                <div className="inline-block p-3 text-white bg-indigo-600 rounded-lg">
                  <FaSubscript />
                </div>

                <div className="mt-2">
                  <h1 className="text-xl font-semibold text-gray-700 text-indigo-600">
                    What Problem does QAI solve?
                  </h1>

                  <p className="mt-2 text-sm text-black">
                    {/* It solves the royalty payment transparency issues and data
                    infringement issues. */}
                  </p>
                </div>
              </div>

              <div>
                <div className="inline-block p-3 text-white bg-indigo-600 rounded-lg">
                  <FaMoneyBillWave />
                </div>

                <div className="mt-2">
                  <h1 className="text-xl font-semibold text-gray-700 text-indigo-600">
                    How do I subscribe?
                  </h1>

                  <p className="mt-2 text-sm text-black">
                    {/* You can subscribe using your local currency, which the
                    equivalent token will be credited into your fan account. */}
                  </p>
                </div>
              </div>

              <div>
                <div className="inline-block p-3 text-white bg-indigo-600 rounded-lg mt-4">
                  <FaTimesCircle />
                </div>

                <div className="mt-2">
                  <h1 className="text-xl font-semibold text-gray-700 text-indigo-600">
                    Do I need knowledge of AI to use QAI?
                  </h1>

                  <p className="mt-2 text-sm text-black">
                    {/* DrameBase User-Interface will be built such that anyone who
                    can operate a smartphone can use the platform. */}
                  </p>
                </div>
              </div>

              <div>
                <div className="inline-block p-3 text-white bg-indigo-600 rounded-lg mt-4">
                  <FaVideo />
                </div>

                <div className="mt-2">
                  <h1 className="text-xl font-semibold text-gray-700 text-indigo-600">
                    Why is QAI better than other 
                    platforms?
                  </h1>

                  <p className="mt-2 text-sm text-black">
                    {/* DrameBases uses Blockchain, its shared ledger approach,
                    improves the media supply chain, and decreases copyright
                    infringements by adding transparency, security, and control. */}
                  </p>
                </div>
              </div>

              <div>
                <div className="inline-block p-3 text-white bg-indigo-600 rounded-lg mt-4">
                  <FaThumbsUp />
                </div>

                <div className="mt-2">
                  <h1 className="text-xl font-semibold text-gray-700 text-indigo-600">
                    How can I contact the team?
                  </h1>

                  <p className="mt-2 text-sm text-black">
                    {/* This is a new technology and access is needed to the artists
                    or record labels. We would start with African artists and
                    later on to the other artists in the world. */}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}