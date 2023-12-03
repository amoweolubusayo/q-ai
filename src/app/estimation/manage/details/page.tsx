"use client";
import { FaTh, FaCaretDown, FaCaretUp } from "react-icons/fa";
import Link from "next/link";
import { Disclosure } from "@headlessui/react";
const people = [
  {
    name: "EST 1",
    title: "Fire Inspection",
    email: "150,000.00",
    role: "11 Months",
  },
];
const navigation = [
  { name: "Create", href: "#" },
  { name: "Manage", href: "#" },
];

const details = [
  {
    heading: "Property Details",
    description: "Residential.",
  },
  {
    heading: "Building Specification",
    description: "Brand New.",
  },
];

export default function Manage() {
  return (
    <>
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
              <FaTh className="mr-5" size={20} />
            </a>
          </div>
        </nav>
      </header>

      <div className="px-4 sm:px-6 lg:px-8 mt-40">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-base font-semibold leading-6 text-gray-900">
              Manage Quotation
            </h1>
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-12">
              <div className="sm:col-span-3 mt-2">
                <label
                  htmlFor="last-name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Sort for
                </label>
                <div className="mt-2">
                  <select
                    id="country"
                    name="country"
                    autoComplete="country-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    <option value="fire_alarm">
                      Fire alarm system inspection
                    </option>
                    <option value="sprinkler">
                      Sprinkler system inspection
                    </option>
                    <option value="fire_extinguisher">
                      Fire extinguisher inspection
                    </option>
                    <option value="emergency_lighting">
                      Emergency lighting inspection
                    </option>
                    <option value="fire_hose">Fire hose inspection</option>
                    <option value="fire_hydrant">
                      Fire Hydrant Inspection
                    </option>
                    <option value="kitchen_suppression">
                      Commercial Kitchen Suppression Inspection
                    </option>
                    <option value="special_hazard">
                      Special Hazard Systems (e.g., Server Rooms)
                    </option>
                    <option value="other">Other:</option>
                  </select>
                </div>
              </div>
              <div className="sm:col-span-3 mt-2">
                <label
                  htmlFor="last-name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Search
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-3 mt-2"></div>
            </div>
          </div>
          <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
            <button
              type="button"
              className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Add Project
            </button>
          </div>
        </div>
        <div className="mt-8 flow-root">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <table className="min-w-full divide-y divide-gray-300">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                    >
                      Quote ID
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Service Description
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Total Cost Estimate
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Date of Estimation
                    </th>
                    <th
                      scope="col"
                      className="relative py-3.5 pl-3 pr-4 sm:pr-0"
                    ></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {people.map((person) => (
                    <tr key={person.email}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                        {person.name}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {person.title}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {person.email}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {person.role}
                      </td>
                      <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                        <a
                          href="#"
                          className="text-indigo-600 hover:text-indigo-900"
                        >
                          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
                            {details.map((detail) => (
                              <Disclosure
                                as="div"
                                key={detail.description}
                                className="pt-6"
                              >
                                {({ open }) => (
                                  <>
                                    <dt>
                                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                                        <span className="text-base font-semibold leading-7">
                                          {detail.heading}
                                        </span>
                                        <span className="ml-6 flex h-7 items-center">
                                          {open ? (
                                            <FaCaretUp
                                              className="h-6 w-6"
                                              aria-hidden="true"
                                            />
                                          ) : (
                                            <FaCaretDown
                                              className="h-6 w-6"
                                              aria-hidden="true"
                                            />
                                          )}
                                        </span>
                                      </Disclosure.Button>
                                    </dt>
                                    <Disclosure.Panel
                                      as="dd"
                                      className="mt-2 pr-12"
                                    >
                                      <p className="text-base leading-7 text-gray-600 text-left">
                                        {detail.description}
                                      </p>
                                    </Disclosure.Panel>
                                  </>
                                )}
                              </Disclosure>
                            ))}
                          </dl>
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="mt-6 flex items-center justify-start gap-x-6">
                <Link href="/estimation/manage/project">
                  <button
                    type="submit"
                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Proceed with Consultant
                  </button>
                </Link>
                <button
                  type="submit"
                  className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-800 shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Reject Estimation
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
