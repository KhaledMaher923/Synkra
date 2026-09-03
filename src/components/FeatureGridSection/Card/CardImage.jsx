export default function CardImage({ img, imgTop }) {
  return (
    <>
      {imgTop == true ? (
        <div className="w-full h-[250px] overflow-hidden rounded-lg  md:w-full md:h-[308px] md:order-2">
          <img
            src={img}
            className="w-full h-full object-cover object-center md:object-center"
          />
        </div>
      ) : (
        <div className="w-full h-[88px] overflow-hidden rounded-lg  md:h-[194px]">
          <img src={img} className="w-full h-full object-cover object-center" />
        </div>
      )}
    </>
  );
}
