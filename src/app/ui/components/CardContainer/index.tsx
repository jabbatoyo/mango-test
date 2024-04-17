"use client";
//Hooks
import useProducts from "@/app/hooks/useProducts";
//Components
import Card from "../Card";

function CardContainer() {
  const { products } = useProducts();
  return (
    <div className="grid grid-cols-4 gap-1">
      {products?.map(
        (item: { name: string; img: string; price: string }, index: number) => {
          return (
            <Card
              key={index}
              name={item.name}
              img={item.img}
              price={item.price}
            />
          );
        }
      )}
    </div>
  );
}

export default CardContainer;
