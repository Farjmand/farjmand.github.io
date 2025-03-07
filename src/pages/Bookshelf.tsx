
import React from "react";

interface Book {
  id: number;
  title: string;
  author: string;
  image: string;
  link: string;
}

const Bookshelf: React.FC = () => {
  const books: Book[] = [
    {
      id: 1,
      title: "Clean Code: A Handbook of Agile Software Craftsmanship",
      author: "Robert C. Martin",
      image: "/api/placeholder/240/360",
      link:
        "https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882",
    },
    {
      id: 2,
      title: "Designing Data-Intensive Applications",
      author: "Martin Kleppmann",
      image: "/api/placeholder/240/360",
      link:
        "https://www.amazon.com/Designing-Data-Intensive-Applications-Reliable-Maintainable/dp/1449373321",
    },
    {
      id: 3,
      title: "Pragmatic Programmer: Your Journey to Mastery",
      author: "David Thomas & Andrew Hunt",
      image: "/api/placeholder/240/360",
      link:
        "https://www.amazon.com/Pragmatic-Programmer-journey-mastery-Anniversary/dp/0135957052",
    },
    {
      id: 4,
      title: "System Design Interview: An Insider's Guide",
      author: "Alex Xu",
      image: "/api/placeholder/240/360",
      link:
        "https://www.amazon.com/System-Design-Interview-insiders-Second/dp/B08CMF2CQF",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900">My Bookshelf</h1>
        <p className="mt-4 text-xl text-gray-600">
          Books that shaped my engineering career
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {books.map((book) => (
          <div
            key={book.id}
            className="flex flex-col bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
          >
            <a
              href={book.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="h-64 overflow-hidden flex items-center justify-center bg-gray-200">
                <img
                  src={book.image}
                  alt={book.title}
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">
                  {book.title}
                </h3>
                <p className="text-gray-600 mt-1">{book.author}</p>
              </div>
            </a>
            <div className="mt-auto p-4 pt-0">
              <a
                href={book.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded hover:bg-blue-700 transition"
              >
                View on Amazon
                <svg
                  className="ml-2 h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bookshelf;
