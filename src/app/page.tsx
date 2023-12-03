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
  { name: "Features", href: "#features" },
  { name: "Team", href: "#team" },
];

const footernavigation = {
  solutions: [
    { name: "Marketing", href: "#" },
    { name: "Analytics", href: "#" },
    { name: "Commerce", href: "#" },
    { name: "Insights", href: "#" },
  ],
  support: [
    { name: "Pricing", href: "#" },
    { name: "Documentation", href: "#" },
    { name: "Guides", href: "#" },
    { name: "API Status", href: "#" },
  ],
  company: [
    { name: "About", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Jobs", href: "#" },
    { name: "Press", href: "#" },
    { name: "Partners", href: "#" },
  ],
  legal: [
    { name: "Claim", href: "#" },
    { name: "Privacy", href: "#" },
    { name: "Terms", href: "#" },
  ],
};

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

export default function Home() {
  return (
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-20 w-20"
                src="https://github.com/amoweolubusayo/q-ai/assets/20168921/3c562b92-18cd-47ff-a700-1960ba604057"
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
              href="/login"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Get Quoted <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
      </header>

      <div className="relative isolate px-6 lg:px-8">
        {/* <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-blackring-1 ring-gray-900/10 hover:ring-gray-900/20">
             
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
        </div> */}

        <div className="relative bg-white mt-20">
          <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8 mt-20">
            <div className="px-6 pb-24 pt-10 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-56 lg:pt-48 xl:col-span-6">
              <div className="mx-auto max-w-2xl lg:mx-0">
                <div className="hidden sm:mt-32 sm:flex lg:mt-16"></div>
                <h1 className="mt-24 text-4xl font-bold tracking-tight text-gray-900 sm:mt-10 sm:text-6xl">
                  Welcome to QAI
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  AI tool for quotation based on real time and market insights
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <a
                    href="/login"
                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Get started
                  </a>
                </div>
              </div>
            </div>
            <div className="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
              <img
                className="aspect-[3/2] w-full bg-gray-50 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full"
                src="https://images.unsplash.com/photo-1498758536662-35b82cd15e29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2102&q=80"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="bg-gray-100 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl sm:text-center" id="features">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">
                The model you need
              </h2>
              <p className="mt-4 text-3xl tracking-tight text-gray-900 sm:text-4xl">
                For your Commercial & Residential Property Quotation Services
                and Corporate RFP & RFQ Response Suite.
              </p>
            </div>
          </div>
          <div className="relative overflow-hidden pt-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <img
                src="https://github.com/amoweolubusayo/q-ai/assets/20168921/fc9a8b90-bb22-4612-bdbe-0293386cea6f"
                alt="App screenshot"
                className="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-gray-900/10"
                width={2432}
                height={1442}
              />
              <div className="relative" aria-hidden="true">
                <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-white pt-[7%]" />
              </div>
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

        <div className="container px-6 py-8 mx-auto" id="team">
          <h2 className="text-2xl font-semibold text-center text-indigo-600 capitalize lg:text-3xl">
            Our Team
          </h2>

          <div className="grid gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <div className="w-full max-w-xs text-center">
              <img
                className="object-cover object-center w-full h-48 mx-auto rounded-lg"
                src="https://github.com/amoweolubusayo/q-ai/assets/20168921/55a46cbd-3644-403d-930a-672f4745d80d"
                alt="avatar"
              />

              <div className="mt-2">
                <h3 className="text-lg font-medium text-black">Paul</h3>
              </div>
            </div>

            <div className="w-full max-w-xs text-center">
              <img
                className="object-cover object-center w-full h-48 mx-auto rounded-lg"
                src="https://github.com/amoweolubusayo/q-ai/assets/20168921/db37a240-68a9-4d03-ac09-8f34794ef4b2"
                alt="avatar"
              />

              <div className="mt-2">
                <h3 className="text-lg font-medium text-black">Busayo</h3>
              </div>
            </div>

            <div className="w-full max-w-xs text-center">
              <img
                className="object-cover object-center w-full h-48 mx-auto rounded-lg"
                src="https://github.com/amoweolubusayo/q-ai/assets/20168921/af782de0-8e26-49a9-888d-a55b345f868b"
                alt="avatar"
              />

              <div className="mt-2">
                <h3 className="text-lg font-medium text-black">Mohit</h3>
              </div>
            </div>

            <div className="w-full max-w-xs text-center">
              <img
                className="object-cover object-center w-full h-48 mx-auto rounded-lg"
                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                alt="avatar"
              />

              <div className="mt-2">
                <h3 className="text-lg font-medium text-black ">SF</h3>
              </div>
            </div>
          </div>
        </div>

        <footer className="bg-gray-100" aria-labelledby="footer-heading">
          <h2 id="footer-heading" className="sr-only">
            Footer
          </h2>
          <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8 lg:py-32">
            <div className="xl:grid xl:grid-cols-3 xl:gap-8">
              <img
                className="h-7"
                src="https://github.com/amoweolubusayo/q-ai/assets/20168921/3c562b92-18cd-47ff-a700-1960ba604057"
                alt="Company name"
              />
              <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
                <div className="md:grid md:grid-cols-2 md:gap-8">
                  <div>
                    <h3 className="text-sm font-semibold leading-6 text-gray-900">
                      Solutions
                    </h3>
                    <ul role="list" className="mt-6 space-y-4">
                      {footernavigation.solutions.map((item) => (
                        <li key={item.name}>
                          <a
                            href={item.href}
                            className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                          >
                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-10 md:mt-0">
                    <h3 className="text-sm font-semibold leading-6 text-gray-900">
                      Support
                    </h3>
                    <ul role="list" className="mt-6 space-y-4">
                      {footernavigation.support.map((item) => (
                        <li key={item.name}>
                          <a
                            href={item.href}
                            className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                          >
                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="md:grid md:grid-cols-2 md:gap-8">
                  <div>
                    <h3 className="text-sm font-semibold leading-6 text-gray-900">
                      Company
                    </h3>
                    <ul role="list" className="mt-6 space-y-4">
                      {footernavigation.company.map((item) => (
                        <li key={item.name}>
                          <a
                            href={item.href}
                            className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                          >
                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-10 md:mt-0">
                    <h3 className="text-sm font-semibold leading-6 text-gray-900">
                      Legal
                    </h3>
                    <ul role="list" className="mt-6 space-y-4">
                      {footernavigation.legal.map((item) => (
                        <li key={item.name}>
                          <a
                            href={item.href}
                            className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                          >
                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
