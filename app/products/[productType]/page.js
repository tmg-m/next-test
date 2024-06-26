"use client";
import Card from "@/app/Components/Card";
import Filter from "@/app/Components/Filter/Filter";
import { useAppContext } from "@/app/context/index";
import { useEffect, useState } from "react";

export default function ProductType({ params }) {
  const { getProductByType } = useAppContext();
  const [productType, setProductType] = useState(null);
  const [products, setProducts] = useState(null);
  const [hasFilters, setHasFilters] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getProductByType(params.productType);
        setProducts({ [params.productType]: data });
        setProductType(params.productType);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };
    getData();
  }, [getProductByType, params]);

  const handleFilteredProducts = (filteredProducts) => {
    setHasFilters(filteredProducts);
  };

  return products && (
    <div className="flex flex-col md:flex-row  justify-center bg-ribbon py-10 gap-5 md:gap-10 px-5">
      <div className="w-full md:w-auto">
        <Filter
          productTypes={products && products}
          onFilteredProducts={handleFilteredProducts}
        />
      </div>
      <div className="flex flex-col justify-center items-center">
        <p className="border-b-2 text-lg font-medium mb-8 md:mb-10 w-full">
          {productType}
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-10 justify-center items-center">
          {(hasFilters ? hasFilters[productType] : products[productType]).map((card) => (
            <Card
              key={card.id}
              id={card.id}
              imageUrl={card.image_url.main}
              title={card.title}
              type={card.type}
              description={card.description}
              price={card.storage_options[0].price}
              color={card.color}
              showAddToCart
            />
          ))}
        </div>
      </div>
    </div>
  );
}
