import Image from "next/image";

export const Partthree = () => {
  return (
    <div>
      <div>
        <div className="flex justify-between mb-5">
          <div className="border w-[392px] h-[476px] rounded-xl">
            <div className="flex justify-center items-center mb-4">
              <Image
                src="/design.jpeg"
                alt=""
                width={360}
                height={240}
                className="rounded-xl mt-4"
              />
            </div>
            <div className="flex justify-center items-center">
              <div className="w-[360px] h-[188px]">
                <div className="w-24 h-7 bg-[#4B6BFB]/5 text-[#4B6BFB] text-center rounded-md font-medium ml-2 mb-4">
                  Design
                </div>
                <div className="font-semibold text-2xl mb-5">
                  The Impact of Technology on the Workplace: How Technology is
                  Changing
                </div>
                <div className="flex items-center gap-5">
                  <div className="flex items-center gap-2">
                    <div>
                      <Image
                        src="/boldguy.jpeg"
                        alt=""
                        width={36}
                        height={36}
                        className="rounded-full object-cover"
                      />
                    </div>
                    <div className="font-medium text-[#97989F]">
                      Jason Francisco
                    </div>
                  </div>
                  <div className="font-normal text-[#97989F]">
                    August 20, 2022
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};
