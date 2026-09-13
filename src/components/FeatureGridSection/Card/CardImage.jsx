export default function CardImage({ img, imgTop }) {
  return (
    <>
      {imgTop == true ? (
        <div className="w-full h-[225px] overflow-hidden rounded-lg  lg:w-full lg:h-[308px]  lg:order-2 md:order-2  ">
          <img
            src={img}
            className="w-full h-full object-cover object-[0px_-30px] md:object-[0px_-40px] sm:object-[0px_-90px] "
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
