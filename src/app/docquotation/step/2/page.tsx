"use client";
import Link from "next/link";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

import { FaXing, FaBars, FaBoxes, FaCheck } from "react-icons/fa";

const navigationbar = [
  { name: "Create", href: "#" },
  { name: "Manage", href: "/estimation/manage" },
];

const transactions = [
    {
      ID: 'REQ DR1',
      Name: 'Manual Contract Creation',
      Description: 'Description',
      Entity: 'Contact',
      Type: 'Functional',
      MOSCOW: 'MUST',
      Status: FaCheck,
    },
    {
        ID: 'REQ DR1',
        Name: 'Manual Contract Creation',
        Description: 'Description',
        Entity: 'Contact',
        Type: 'Functional',
        MOSCOW: 'MUST',
        Status: FaCheck,
      },
      {
        ID: 'REQ DR1',
        Name: 'Manual Contract Creation',
        Description: 'Description',
        Entity: 'Contact',
        Type: 'Functional',
        MOSCOW: 'MUST',
        Status: FaCheck,
      },
      {
        ID: 'REQ DR1',
        Name: 'Manual Contract Creation',
        Description: 'Description',
        Entity: 'Contact',
        Type: 'Functional',
        MOSCOW: 'MUST',
        Status: FaCheck,
      },
      {
        ID: 'REQ DR1',
        Name: 'Manual Contract Creation',
        Description: 'Description',
        Entity: 'Contact',
        Type: 'Functional',
        MOSCOW: 'MUST',
        Status: FaCheck,
      },
  ]

const tabs = [
  { name: "Step 1", href: "#", current: false },
  { name: "Step 2", href: "#", current: true },
];

function classNames(
  ...classes: (string | boolean | undefined | null)[]
): string {
  return classes.filter(Boolean).join(" ");
}

export default function DocQuotation() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <header className="absolute inset-x-0 top-0 z-50 pb-4">
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
            {navigationbar.map((item) => (
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
      <div>
        <main className="py-10 lg:pl-72">
          <div className="px-4 sm:px-6 lg:px-8 pt-4">
            {/* Your content */}

            <div className="hidden sm:block">
              <div className="border-b border-gray-200">
                <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                  {tabs.map((tab) => (
                    <a
                      key={tab.name}
                      href={tab.href}
                      className={classNames(
                        tab.current
                          ? "border-indigo-500 text-indigo-600"
                          : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
                        "whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium"
                      )}
                      aria-current={tab.current ? "page" : undefined}
                    >
                      {tab.name}
                    </a>
                  ))}
                </nav>
              </div>
            </div>

            <div className="mt-10 border-b border-gray-900/10 pb-12">
              <h2 className="text-base font-semibold leading-7 text-gray-900">
                Select Responses
              </h2>
            

              <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="whitespace-nowrap py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                  >
                    ID
                  </th>
                  <th
                    scope="col"
                    className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Description
                  </th>
                  <th
                    scope="col"
                    className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Entity
                  </th>
                  <th
                    scope="col"
                    className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Type
                  </th>
                  <th
                    scope="col"
                    className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    MOSCOW
                  </th>
                  <th
                    scope="col"
                    className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Status
                  </th>
                  <th scope="col" className="relative whitespace-nowrap py-3.5 pl-3 pr-4 sm:pr-0">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {transactions.map((transaction) => (
                  <tr key={transaction.ID}>
                    <td className="whitespace-nowrap py-2 pl-4 pr-3 text-sm text-gray-500 sm:pl-0">{transaction.ID}</td>
                    <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-900">{transaction.Name}</td>
                    <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-500">{transaction.Description}</td>
                    <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-500">{transaction.Entity}</td>
                    <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-500">{transaction.Type}</td>
                    <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-500">{transaction.MOSCOW}</td>
                    <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-500">{transaction.Status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
                  <Link href="/docquotation/manage">
                    <button
                      type="submit"
                      className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Generate Response
                    </button>
                  </Link>
                </div>

        </div>

            </div>
          </div>
        </main>
      </div>
    </>
  );
}
