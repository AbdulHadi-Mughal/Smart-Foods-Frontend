import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { Category } from "../../types/spice.type";

type Props = {
  name: string;
  weight: number;
  category: Category;
  description: string;
  instructions: string;
};

const Instructions = ({
  name,
  weight,
  category,
  description,
  instructions,
}: Props) => {
  const [view, setView] = useState<"description" | "instructions">(
    "description"
  );
  const selectedView = view === "description" ? description : instructions;

  return (
    <div className="mb-4 mt-8">
      <div className="flex justify-center">
        <button
          className={`${
            view === "description"
              ? "bg-secondary hover:bg-secondary"
              : "bg-white"
          } text-sm text-foreground rounded-full px-4 py-2 shadow-md hover:bg-gray-200 transition-all duration-300 ease-in-out transform hover:scale-105`}
          onClick={() => setView("description")}
        >
          Product Details
        </button>
        <button
          className={`${
            view === "instructions"
              ? "bg-secondary hover:bg-secondary"
              : "bg-white"
          } text-sm text-foreground rounded-full px-4 py-2 shadow-md hover:bg-gray-200 transition-all duration-300 ease-in-out transform hover:scale-105`}
          onClick={() => setView("instructions")}
        >
          How to use
        </button>
      </div>
      <div>
        <section className="w-full px-4 md:px-8 lg:px-16 py-6">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              h2: (props) => (
                <h2
                  className="text-2xl my-4 font-extrabold text-primary"
                  {...props}
                />
              ),
              table: (props) => (
                <div className="overflow-x-auto my-4">
                  <table
                    className="w-full text-left border border-gray-300 dark:border-gray-700"
                    {...props}
                  />
                </div>
              ),
              thead: (props) => (
                <thead
                  className="bg-gray-100 dark:bg-gray-800 text-sm font-semibold"
                  {...props}
                />
              ),
              th: (props) => (
                <th
                  className="border border-gray-300 dark:border-gray-600 px-4 py-2"
                  {...props}
                />
              ),
              td: (props) => (
                <td
                  className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-sm"
                  {...props}
                />
              ),
              ul: (props) => (
                <ul className="list-disc space-y-1 pl-6 my-2" {...props} />
              ),
              li: (props) => (
                <li className="text-sm leading-relaxed" {...props} />
              ),
            }}
          >
            {selectedView}
          </ReactMarkdown>
          {selectedView === description && (
            <table className="my-4 w-full text-left border border-gray-300 dark:border-gray-700">
              <thead className="bg-gray-100 dark:bg-gray-800 text-sm font-semibold">
                <tr>
                  <th className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                    Name
                  </th>
                  <th className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                    Weight
                  </th>
                  <th className="border border-gray-300 dark:border-gray-600 px-4 py-2">
                    Category
                  </th>
                </tr>
                <tr className="text-sm font-light">
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-sm">
                    {name}
                  </td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-sm">
                    {weight % 1000 === 0
                      ? `${weight / 1000} kg`
                      : `${weight} grams`}
                  </td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-sm">
                    {category}
                  </td>
                </tr>
              </thead>
            </table>
          )}
        </section>
      </div>
    </div>
  );
};

export default Instructions;
