import React from 'react';
import MainFooter from '../Components/Footer/MainFooter';
import Navbar from '../Components/Navbar/Navbar';

const GetInTouchForm = () => {
  const inputFields = [
    { label: 'First name', maxLength: 40 },
    { label: 'Last name', maxLength: 80 },
    { label: 'Business Email address', maxLength: 100, type: 'email', placeholder: 'name@mail.com' },
    { label: 'Company name', maxLength: 100 },
  ];

  return (


    <>
    < Navbar />
    <section className="flex py-32 overflow-hidden flex-col bg-neutral-100">
      <div className="flex flex-col self-center mt-24 w-full max-w-[1300px] max-md:mt-10 max-md:max-w-full">
        <h1 className="pb-px w-full text-3xl leading-loose uppercase text-stone-900 tracking-[3.36px] max-md:max-w-full">
          We just need your contact details
        </h1>
        <form className="flex flex-col mt-9 w-full max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            {inputFields.slice(0, 2).map((field, index) => (
              <div key={index} className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow justify-center pb-10 min-h-[133px] max-md:mt-10 max-md:max-w-full">
                  <div className="flex flex-col w-full min-h-[93px] max-md:max-w-full">
                    <div className="flex flex-col w-full max-md:max-w-full">
                      <div className="flex relative gap-10 w-full text-xs max-md:max-w-full">
                        <label htmlFor={`input-${index}`} className="tracking-widest leading-tight uppercase min-w-[240px] text-zinc-900 w-[473px] max-md:max-w-full">
                          <span className="text-stone-900">{field.label} </span>
                          <span className="text-red-700">*</span>
                        </label>
                        <div className="absolute right-px self-start h-3 font-thin tracking-wide leading-none min-h-[12px] text-zinc-600">
                          {field.maxLength} characters
                        </div>
                      </div>
                      <input
                        id={`input-${index}`}
                        type="text"
                        className="flex flex-col pt-6 pr-2.5 pb-6 pl-2.5 mt-2.5 w-full text-base font-thin bg-white rounded border border-gray-200 border-solid text-neutral-500 max-md:max-w-full"
                        placeholder="Please type here"
                        maxLength={field.maxLength}
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow justify-center pb-10 min-h-[134px] max-md:mt-10 max-md:max-w-full">
                <div className="flex flex-col w-full min-h-[94px] max-md:max-w-full">
                  <div className="flex flex-col w-full max-md:max-w-full">
                    <div className="flex relative gap-10 w-full text-xs max-md:max-w-full">
                      <label htmlFor="email" className="tracking-widest leading-tight uppercase min-w-[240px] text-zinc-900 w-[473px] max-md:max-w-full">
                        <span className="text-stone-900">Business Email address </span>
                        <span className="text-red-700">*</span>
                      </label>
                      <div className="absolute -right-px self-start h-3 font-thin tracking-wide leading-none min-h-[12px] text-zinc-600">
                        100 characters
                      </div>
                    </div>
                    <input
                      id="email"
                      type="email"
                      className="flex flex-col pt-6 pr-2.5 pb-6 pl-2.5 mt-2.5 w-full text-sm font-thin whitespace-nowrap bg-white rounded border border-gray-200 border-solid text-neutral-500 max-md:max-w-full"
                      placeholder="name@mail.com"
                      maxLength={100}
                      required
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow min-h-[134px] max-md:mt-10 max-md:max-w-full">
                <div className="flex flex-col w-full max-md:max-w-full">
                  <div className="flex flex-wrap gap-1 items-start pb-px w-full text-xs max-md:max-w-full">
                    <label htmlFor="phone" className="tracking-widest leading-tight uppercase text-stone-900">
                      Phone number <span className="text-red-700">*</span>
                    </label>
                  </div>
                  <div className="flex flex-wrap gap-5 justify-center mt-2.5 w-full text-sm font-thin max-md:max-w-full">
                    <div className="flex flex-col grow shrink leading-10 text-center whitespace-nowrap text-stone-900 w-[116px]">
                      <select className="flex gap-10 justify-between items-center py-2.5 pr-5 pl-2.5 w-full bg-white rounded border border-gray-200 border-solid max-md:pr-5">
                        <option>Select</option>
                      </select>
                    </div>
                    <div className="flex flex-col grow shrink min-w-[240px] text-neutral-500 w-[436px] max-md:max-w-full">
                      <input
                        id="phone"
                        type="tel"
                        className="flex flex-col pt-6 pr-2.5 pb-6 pl-2.5 w-full bg-white rounded border border-gray-200 border-solid max-md:max-w-full"
                        placeholder="Please type here"
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow min-h-[126px] max-md:mt-10 max-md:max-w-full">
                <div className="flex flex-col w-full max-md:max-w-full">
                  <div className="flex relative gap-10 w-full text-xs max-md:max-w-full">
                    <label htmlFor="company" className="tracking-widest leading-tight uppercase min-w-[240px] text-zinc-900 w-[473px] max-md:max-w-full">
                      <span className="text-stone-900">Company name </span>
                      <span className="text-red-700">*</span>
                    </label>
                    <div className="absolute -right-px self-start h-3 font-thin tracking-wide leading-none min-h-[12px] text-zinc-600">
                      100 characters
                    </div>
                  </div>
                  <input
                    id="company"
                    type="text"
                    className="flex flex-col pt-6 pr-2.5 pb-6 pl-2.5 mt-2.5 w-full text-sm font-thin bg-white rounded border border-gray-200 border-solid text-neutral-500 max-md:max-w-full"
                    placeholder="Please type here"
                    maxLength={100}
                    required
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow text-xs min-h-[126px] max-md:mt-10 max-md:max-w-full">
                <div className="flex flex-col w-full max-md:max-w-full">
                  <div className="flex relative gap-10 w-full max-md:max-w-full">
                    <label htmlFor="query" className="tracking-widest leading-tight uppercase min-w-[240px] text-zinc-900 w-[473px] max-md:max-w-full">
                      <span className="text-stone-900">Query </span>
                      <span className="text-red-700">*</span>
                    </label>
                    <div className="absolute -right-px self-start h-3 font-thin tracking-wide leading-none min-h-[12px] text-zinc-600">
                      1000 characters
                    </div>
                  </div>
                  <textarea
                    id="query"
                    className="flex mt-2.5 w-full bg-white rounded border border-gray-200 border-solid min-h-[92px] max-md:max-w-full"
                    maxLength={1000}
                    required
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col py-0.5 mt-9 w-full max-md:max-w-full">
            <div className="flex flex-col justify-center pb-2.5 w-full h-6 text-xs tracking-widest leading-tight uppercase max-md:max-w-full">
              <div className="flex flex-wrap gap-1 items-start w-full h-[15px] max-md:max-w-full">
                <div className="text-stone-900">Marketing Permissions</div>
                <div className="text-red-700">*</div>
              </div>
            </div>
            <div className="flex flex-wrap gap-10 w-full max-md:max-w-full">
              <div className="flex flex-wrap  flex-auto gap-5 justify-center min-h-[90px]">
                <div className="flex flex-col grow shrink justify-center pb-8 w-0 ">
                  <div className="flex flex-col justify-center w-full bg-rose-100 rounded min-h-[60px]">
                    <div className="flex flex-1 p-5 size-full">
                      <div className="flex flex-col justify-center self-start w-5 min-h-[20px]">
                        <input
                          type="radio"
                          id="marketing-yes"
                          name="marketing"
                          value="yes"
                          className="flex flex-1 w-5 h-5 bg-white rounded-xl border border-red-300 border-solid min-h-[20px]"
                        />
                      </div>
                      <label htmlFor="marketing-yes" className="flex flex-col justify-center items-start pl-2.5 text-xs tracking-widest leading-none uppercase whitespace-nowrap text-stone-600">
                        <div className="flex items-center py-1 min-h-[20px]">
                          <div className="self-stretch my-auto">Yes</div>
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col grow shrink justify-center pb-8 w-0 ">
                  <div className="flex flex-col justify-center w-full bg-rose-100 rounded min-h-[60px]">
                    <div className="flex flex-1 p-5 size-full">
                      <div className="flex flex-col justify-center self-start w-5 min-h-[20px]">
                        <input
                          type="radio"
                          id="marketing-no"
                          name="marketing"
                          value="no"
                          className="flex flex-1 w-5 h-5 bg-white rounded-xl border border-red-700 border-solid min-h-[20px]"
                        />
                      </div>
                      <label htmlFor="marketing-no" className="flex flex-col justify-center items-start pl-2.5 text-xs tracking-widest leading-tight uppercase whitespace-nowrap text-stone-600">
                        <div className="flex items-center py-1 min-h-[20px]">
                          <div className="self-stretch my-auto">No</div>
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col flex-1 grow shrink-0 text-base font-thin leading-5 basis-0 min-h-[90px] text-stone-900 w-fit max-md:max-w-full">
                <p className="z-10 pt-0 pb-7 w-full max-md:max-w-full">
                  By completing this form you are agreeing to being contacted by NEOM, If you would also like to hear updates from other parts of NEOM please select Yes. We will treat your information carefully. See our{" "}
                  <a href="#" className="font-medium text-red-700">terms of use</a>{" "}
                  and <a href="#" className="font-medium text-red-700">privacy policy</a>{" "}
                  for more details.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-start pt-1 mt-9 w-full text-lg font-extralight tracking-widest leading-none text-center text-white uppercase whitespace-nowrap max-md:max-w-full">
            <button type="submit" className="flex overflow-hidden uppercase w-40 h-14 justify-center items-center self-stretch px-7 py-3.5 my-auto bg-red-700 rounded-full ">
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
    < MainFooter />
    </>
  );
};

export default GetInTouchForm;