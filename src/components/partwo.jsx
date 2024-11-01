import Image from "next/image";

export const Parttwo = () =>{
    return (
      <>
        <p className="mb-7 text-2xl font-bold">Trending</p>
        <div className="flex gap-5 mb-[100px]">
          <div className="w-[298px] h-[320px] relative">
            <Image
              src="/image.png"
              alt=""
              width={298}
              height={320}
              className="w-full h-full object-cover rounded-xl"
            />
            <div className="bg-[#141624]/40 absolute inset-0 rounded-xl" />
            <div className="w-[230px] h-[120px] absolute left-7 top-[172px] flex gap-4 flex-col">
              <div className="w-24 h-7 bg-[#4B6BFB] text-white text-center rounded-md font-medium ">
                Technology
              </div>
              <div className="text-white text-center text-base font-semibold">
                The Impact of Technology on the Workplace: How Technology is
                Changing
              </div>
            </div>
          </div>
          <div className="w-[298px] h-[320px] relative">
            <Image
              src="/com.png"
              alt=""
              width={298}
              height={320}
              className="w-full h-full object-cover rounded-xl"
            />
            <div className="bg-[#141624]/40 absolute inset-0 rounded-xl" />
            <div className="w-[230px] h-[120px] absolute left-7 top-[172px] flex gap-4 flex-col">
              <div className="w-24 h-7 bg-[#4B6BFB] text-white text-center rounded-md font-medium ">
                Technology
              </div>
              <div className="text-white text-center text-base font-semibold">
                The Impact of Technology on the Workplace: How Technology is
                Changing
              </div>
            </div>
          </div>
          <div className="w-[298px] h-[320px] relative">
            <Image
              src="/woman.png"
              alt=""
              width={298}
              height={320}
              className="w-full h-full object-cover rounded-xl"
            />
            <div className="bg-[#141624]/40 absolute inset-0 rounded-xl" />
            <div className="w-[230px] h-[120px] absolute left-7 top-[172px] flex gap-4 flex-col">
              <div className="w-24 h-7 bg-[#4B6BFB] text-white text-center rounded-md font-medium ">
                Technology
              </div>
              <div className="text-white text-center text-base font-semibold">
                The Impact of Technology on the Workplace: How Technology is
                Changing
              </div>
            </div>
          </div>
          <div className="w-[298px] h-[320px] relative">
            <Image
              src="/tech.png"
              alt=""
              width={298}
              height={320}
              className="w-full h-full object-cover rounded-xl"
            />
            <div className="bg-[#141624]/40 absolute inset-0 rounded-xl" />
            <div className="w-[230px] h-[120px] absolute left-7 top-[172px] flex gap-4 flex-col">
              <div className="w-24 h-7 bg-[#4B6BFB] text-white text-center rounded-md font-medium ">
                Technology
              </div>
              <div className="text-white text-center text-base font-semibold">
                The Impact of Technology on the Workplace: How Technology is
                Changing
              </div>
            </div>
          </div>
        </div>
      </>
    );
}