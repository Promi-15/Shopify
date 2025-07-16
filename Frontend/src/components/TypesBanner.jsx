import React, { useEffect, useState } from "react";
import ProductItem from "./ProductItem";

const TypesBanner = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState(null);
  const [category, setCategory] = useState("All");

  useEffect(() => {
    if (category === "All") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(
        products.filter((product) => product.category == category)
      );
    }
  }, [category, products]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("/api/product");
        console.log(res);

        if (!res.ok) {
          alert("Something went wrong: " + res.statusText);
          return;
        }

        const data = await res.json();
        setProducts(data.data);
        console.log(data);
      } catch (error) {
        console.log("Not fetching", error);
      }
    };

    fetchProducts();
    console.log(category);
  }, [category]);

  return (
    <div className="mt-10 mx-10">
      <div>
        <ul className="flex gap-5 prata-regular text-xl text-gray-400">
          <li
            className={`cursor-pointer ${
              category == "All"
                ? "text-orange-400 underline  font-semibold"
                : ""
            }`}
            onClick={(e) => setCategory("All")}
          >
            All
          </li>
          <li
            className={`cursor-pointer ${
              category == "Women"
                ? "text-orange-400 underline  font-semibold"
                : ""
            }`}
            onClick={(e) => setCategory("Women")}
          >
            Women
          </li>
          <li
            className={`cursor-pointer ${
              category == "Men"
                ? "text-orange-400 underline  font-semibold"
                : ""
            }`}
            onClick={(e) => setCategory("Men")}
          >
            Men
          </li>
          <li
            className={`cursor-pointer ${
              category == "Kid"
                ? "text-orange-400 underline  font-semibold"
                : ""
            }`}
            onClick={(e) => setCategory("Kid")}
          >
            Kids
          </li>
        </ul>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 ml-6 sm:ml-0 mt-10">
        {filteredProducts?.map((item, index) => (
          <ProductItem key={index} item={item} />
        ))}
      </div>
      <div className="mt-10">
        <ul className="flex justify-center gap-1 text-gray-900">
          <li>
            <a
              href="#"
              className="grid size-8 place-content-center rounded border border-gray-200 transition-colors hover:bg-gray-50 rtl:rotate-180"
              aria-label="Previous page"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </li>

          <li>
            <a
              href="#"
              className="block size-8 rounded border border-gray-200 text-center text-sm/8 font-medium transition-colors hover:bg-gray-50"
            >
              1
            </a>
          </li>

          <li className="block size-8 rounded border border-gray-200 text-center text-sm/8 font-medium transition-colors hover:bg-gray-50">
            2
          </li>

          <li>
            <a
              href="#"
              className="block size-8 rounded border border-gray-200 text-center text-sm/8 font-medium transition-colors hover:bg-gray-50"
            >
              3
            </a>
          </li>

          <li>
            <a
              href="#"
              className="block size-8 rounded border border-gray-200 text-center text-sm/8 font-medium transition-colors hover:bg-gray-50"
            >
              4
            </a>
          </li>

          <li>
            <a
              href="#"
              className="grid size-8 place-content-center rounded border border-gray-200 transition-colors hover:bg-gray-50 rtl:rotate-180"
              aria-label="Next page"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TypesBanner;
