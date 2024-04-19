import Image from "next/image";

type CardProps = {
  img: string;
  name: string;
  price: string;
};

function Card({ img, name, price }: CardProps) {
  return (
    <div data-testid="card-content">
      <Image src={img} alt={name} width={1000} height={700} />
      <div className="p-[10px]">
        <div className="text-[13px] color-[#121314]">{name}</div>
        <div className="text-[13px] color-[#121314]">{price} €</div>
      </div>
    </div>
  );
}

export default Card;
