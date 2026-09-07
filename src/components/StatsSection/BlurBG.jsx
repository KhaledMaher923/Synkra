export default BlurBG()
{
    return(
        <div className="z-[0] inset-0 absolute blur-[120px]">
                <div className="w-[200px] h-[200px] absolute top-0 right-0 bg-[#1A56DB] opacity-[0.4] rounded-[100%] md:w-[256px] md:h-[256px]"></div>
                <div className=" w-[200px] h-[200px] left-0 bottom-0 absolute bg-[#0D9488] opacity-[0.4] rounded-[100%] md:w-[256px] md:h-[256px]"></div>
              </div>

    )
}