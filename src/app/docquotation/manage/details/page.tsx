"use client";
import { FaTh } from "react-icons/fa";
import * as dotenv from "dotenv";
dotenv.config({ path: "/.env" });
import { OpenAI } from "openai";
import React, { useEffect, useState } from "react";
const navigation = [
  { name: "Create", href: "#" },
  { name: "Manage", href: "#" },
];

export default function Project() {
  const [chatResponse, setChatResponse] = useState<string | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const openai = new OpenAI({
            apiKey: "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",
            dangerouslyAllowBrowser: true
        });
        const prompt = `
          think of a random RFP based on all info submitted by a proposal and generate an informed decision for a vendor like a microsost partner company. dont include random in your statement
              `;

        const response = await openai.chat.completions.create({
          model: "gpt-3.5-turbo",
          messages: [
            { role: "system", content: "You are a helpful assistant." },
            { role: "user", content: prompt },
          ],
        });
        console.log(response);
        const value = response?.choices[0]?.message.content;
        setChatResponse(value);
      } catch (error) {
        console.error("Error fetching data from OpenAI:", error);
      }
    };

    fetchData();
  }, []);
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
              href="#"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              {/* Get Quoted <span aria-hidden="true">&rarr;</span> */}
              <FaTh className="mr-5" size={20} />
            </a>
          </div>
        </nav>
      </header>

      <div className="space-y-10 divide-y divide-gray-900/10 mt-40">
        <div className="grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-3">
          <form className="bg-gray-100 shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2">
            <div className="px-4 py-6 sm:p-8">
              <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-4">
                  <h2 className="text-base font-semibold leading-7 text-gray-900">
                    Response Name
                  </h2>

                  <p className="text-sm leading-6 text-gray-600">
                    The ultimate AI tool for quotation, based on real time
                    market insights and personal requirements
                  </p>
                  <div className="flex mt-2">
                    <p className="mr-10">xxxxxxx</p>

                    <p className="mr-10">Quote</p>

                    <p className="mr-10">23/11/2023</p>
                    <p className="mr-10"> Bella </p>
                    <p className="mr-10">quote.xlsx</p>
                  </div>
                  <div className="flex mt-2">
                    <p className="mr-10 text-xs">Project Name</p>

                    <p className="mr-10 text-xs">Document type</p>

                    <p className="mr-10 text-xs">Submission schedule</p>
                    <p className="mr-10 text-xs"> Customer Name </p>
                    <p className="mr-10 text-xs">Document File</p>
                  </div>
                </div>

                <div className="col-span-full">
                  <label
                    htmlFor="about"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Response 1
                  </label>
                  <div className="mt-2">
                    <textarea
                      id="about"
                      name="about"
                      rows={3}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      value={chatResponse || ""}
                    />
                  </div>
                  <div className="mt-6 flex items-center justify-start gap-x-6">
                    <button
                      type="submit"
                      className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Edit Response
                    </button>
                    <button
                      type="submit"
                      className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Re-generate
                    </button>
                  </div>
                </div>

                {/* <div className="col-span-full">
                  <label
                    htmlFor="about"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Response 2
                  </label>
                  <div className="mt-2">
                    <textarea
                      id="about"
                      name="about"
                      rows={3}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      value={chatResponse || ""}
                    />
                  </div>
                  <div className="mt-6 flex items-center justify-start gap-x-6">
                    <button
                      type="submit"
                      className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Edit Response
                    </button>
                    <button
                      type="submit"
                      className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Re-generate
                    </button>
                  </div>
                </div> */}
              </div>
            </div>
          </form>

          <div className="px-4 sm:px-0">
            <button
              type="button"
              className="rounded bg-white px-2 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 mt-5"
            >
              Re-generate All
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
