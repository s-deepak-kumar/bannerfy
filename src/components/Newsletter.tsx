const Newsletter: React.FC = () => {
  return (
    <section id="cta" className="mt-10 mb-5 lg:my-20">
      <div className="mx-auto w-full lg:px-4">
        <div className="relative isolate overflow-hidden bg-[#191919] px-6 md:px-16 py-12 border border-primary">
          <h1 className="mx-auto max-w-3xl text-center text-[32px] font-[700] tracking-tight text-white">
          Subscribe to our newsletter
          </h1>
          <p className="mx-auto mt-6 max-w-lg text-center text-[16px] font-[500] text-white">
          Get latest updates on new templates
          </p>
          <form className="mx-auto mt-10 flex lg:max-w-md gap-x-4">
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <div className="flex  rounded-full bg-white px-2 py-1">
              <input
                id="email-address"
                name="email"
                type="email"
                required
                placeholder="Your email id"
                autoComplete="email"
                className="block w-full md:w-[250px] px-3 text-md font-[600] bg-transparent text-black placeholder:text-[#BFBFBF] outline-0"
              />
              <div className="flex w-max z-10">
                <button className="bg-secondary text-white text-md font-[500] shadow-[0px_4.5px_0px_0px_black] px-4 lg:px-12 py-2.5 rounded-full mb-1" >Subscribe</button>
              </div>
            </div>
          </form>

          <p className="mx-auto mt-6 max-w-lg text-center text-[14px] font-[400] text-white">
          We don’t spam, so give it a try
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
