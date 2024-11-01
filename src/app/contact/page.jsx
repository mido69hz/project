const Contact = () => {
  return (
    <div>
      <div className="container w-[895px] h-[895px] flex  justify-center flex-col items-center">
        <div className="flex flex-col ">
          <div className="w-[624px]">
            <div className="font-semibold text-4xl text-black mb-5">
              Contact Us
            </div>
            <div className="text-[#696A75]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam
            </div>
          </div>
          <div className="flex mt-5">
            <div className="border rounded-xl w-[295px] h-[133px] p-4 mr-12">
              <p className="font-semibold text-2xl">Address</p>
              <p className="text-[#696A75] text-lg">
                1328 Oak Ridge Drive, Saint Louis, Missouri
              </p>
            </div>
            <div className="border rounded-xl w-[295px] h-[133px] p-4">
              <p className="font-semibold text-2xl">Contact</p>
              <p className="text-[#696A75] text-lg">
                313-332-8662 info@email.com
              </p>
            </div>
          </div>
        </div>
        <div className="border bg-[#F6F6F7] w-[643px] h-[440px] mt-10 rounded-xl">
          <div className="p-9">
            <div className="font-semibold text-lg mb-6">Leave a Message</div>
            <div>
              <div className="flex gap-7 flex-col">
                <div className="flex gap-7">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-[225px] h-[38px] rounded-lg pl-3"
                  />

                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-[225px] h-[38px] rounded-lg pl-3"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Subject"
                    className="rounded-lg pl-3 w-[478px] h-[35px] pl-4"
                  />
                </div>
                <div>
                  <textarea
                    type="text"
                    className="w-[478px] h-[134px] rounded-md pl-4 pt-4"
                    placeholder="Write a message"
                  />
                </div>
                <button className="border w-[130px] h-10 rounded-md bg-[#4B6BFB] font-medium text-sm text-white">
                    Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
