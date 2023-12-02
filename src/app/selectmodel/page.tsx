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
  FaHome,
  FaBook,
  FaAccessibleIcon,
  FaBoxes,
} from "react-icons/fa";
const navigation = [
  { name: "Create", href: "#" },
  { name: "Manage", href: "#" },
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
const model = [
  {
    name: "Commercial & Residential Property Quotation Services",
    icon: FaHome,
  },
  {
    name: "Corporate RFP & RFQ Response Suite",
    icon: FaBook,
  },
];
const features = [
  {
    name: "Join Qai as an Artist:",
    description:
      "Upload Music and Videos for streaming. Mint your content as NFT’s. Have Exclusive EP releases. Get funding and donations on projects. Host Virtual Events",
    icon: FaMusic,
  },
  {
    name: "Join Qai as a Fan:",
    description:
      "Video Streaming.Music Streaming.Exclusive EP Access. Earn rewards for listening. Pay for Tickets to shows. Buy NFT’s and order in a physical copy",
    icon: FaVideo,
  },
  {
    name: "Token.",
    description: "Qai Token (DB)",
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
            <a href="/" className="-m-1.5 p-1.5">
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
              {/* Get Quoted <span aria-hidden="true">&rarr;</span> */}
              <FaBoxes className="mr-5" size={50} />
            </a>
          </div>
        </nav>
      </header>

      <div className="relative isolate px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Welcome to QAI
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              The ultimate AI tool for quotation based on real time , market
              insights and personal requirements
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
                Pick a Model
              </h1>
            </div>
            {/* <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                {model.map((model) => (
                  <div key={model.name} className="relative pl-16">
                    <dt className="text-base font-semibold leading-7 text-gray-900">
                      <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                        <model.icon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </div>
                      {model.name}
                    </dt>
                  </div>
                ))}
              </dl>
            </div> */}
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                {model.map((model) => (
                  <div
                    key={model.name}
                    className="relative border border-gray-300 rounded-lg p-4"
                  >
                    <dt className="text-base font-semibold leading-7 text-gray-900 text-center">
                      <div className="h-16 w-16 mx-auto flex items-center justify-center rounded-lg bg-indigo-600 mb-2">
                        <model.icon
                          className="h-8 w-8 text-white"
                          aria-hidden="true"
                        />
                      </div>
                      <span>
                        <a
                          href={
                            model.name ===
                            "Commercial & Residential Property Quotation Services"
                              ? "/estimation/step/1"
                              : "/docquotation/step/1"
                          }
                        >
                          {model.name}
                        </a>
                      </span>
                    </dt>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
