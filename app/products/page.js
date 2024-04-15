"use client";
import { useEffect, useState } from "react";
import Card from "../Components/Card";
import { useAppContext } from "@/app/context/index";
import Filter from "../Components/Filter/Filter";

export default function Product() {
  const { getProduct } = useAppContext();
  const [productType, setProductType] = useState({});
  const [hasFilters, setHasFilters] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getProduct();
        const types = ["phone", "tablet", "tv", "accessories"];
        const filteredProducts = {};
        types.forEach((type) => {
          filteredProducts[type] = data.products.filter(
            (product) => product.type === type
          );
        });
        setProductType(filteredProducts);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };
    fetchData();
  }, [getProduct]);
  
  const handleFilteredProducts = (filteredProducts) => {
    setHasFilters(filteredProducts)
  };
  
  return (
    <div className="flex flex-col items-center justify-center bg-ribbon px-5 py-10">
      <Filter productTypes={productType && productType} onFilteredProducts={handleFilteredProducts} />
      {Object.keys(hasFilters ? hasFilters : productType).map((type) => (
        <div key={type}>
          <p className="border-b-2 text-lg font-medium mb-8 md:mb-10 w-full">
            {type}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-10 justify-center items-center mb-10">
            {(hasFilters ? hasFilters[type] : productType[type])?.map((card) => (
              <Card
                key={card.id}
                id={card.id}
                type={card.type}
                imageUrl={`/iphone15test.png`}
                title={card.title}
                description={card.description}
                showAddToCart
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
