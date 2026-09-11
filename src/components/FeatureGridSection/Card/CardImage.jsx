export default function CardImage({ img, imgTop }) {
  return (
    <>
      {imgTop == true ? (
        <div className="w-full h-[225px] overflow-hidden rounded-lg  md:w-full md:h-[308px] md:order-2">
          <img
            src={img}
            className="w-full h-full object-cover object-[0px_-30px] md:object-[0px_-40px]"
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
