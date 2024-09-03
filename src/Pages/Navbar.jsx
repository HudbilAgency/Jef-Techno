import * as React from "react";

const NavbarItem = ({ text, hasIcon, alt }) => (
  <div className="flex gap-2.5 justify-center items-center self-stretch my-auto">
    <div className="self-stretch my-auto text-2xl font-medium text-zinc-900 tracking-[2px]">{text}</div>
    {hasIcon && (
      <div className="flex flex-col justify-center items-center self-stretch px-2.5 py-3.5 my-auto w-9 min-h-[36px]">
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/5b78ea1e174590f051c423d232a44cf9a06dd7609926986d4d37c5c9a94107e0?placeholderIfAbsent=true&apiKey=60c6eb6ce37644fdb727618799199006" alt={alt} className="object-contain aspect-[1.8] w-[18px]" />
      </div>
    )}
  </div>
);

const Navbar = () => (
  <>
  <nav className="flex relative flex-wrap gap-5 justify-between items-center self-center w-full max-w-[1520px] max-md:max-w-full">
    <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/1f72711985a65d5e9cccf583145ef02cf25367e53a9dbd9152d31ad79b46cc8c?placeholderIfAbsent=true&apiKey=60c6eb6ce37644fdb727618799199006" className="object-contain shrink-0 self-stretch max-w-full aspect-[1.77] w-[124px]" alt="Brand logo" />
    <div className="flex flex-wrap gap-10 items-center self-stretch my-auto max-md:max-w-full">
      <NavbarItem text="Home" />
      <NavbarItem text="About" hasIcon alt="Dropdown icon" />
      <NavbarItem text="Our Business" hasIcon alt="Dropdown icon" />
      <NavbarItem text="News" hasIcon alt="Dropdown icon" />
      <div className="self-stretch my-auto text-2xl font-medium text-zinc-900 tracking-[2px]">
        Careers
      </div>
    </div>
    <div className="flex gap-8 items-center self-stretch my-auto max-md:max-w-full">
      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/d286a54bf2245ec9b8204fea512ccef9942321493eb7d4c073ee049948aa0c7a?placeholderIfAbsent=true&apiKey=60c6eb6ce37644fdb727618799199006" alt="Profile icon" className="object-contain shrink-0 self-stretch my-auto w-9 aspect-square" />
      <div className="flex gap-2.5 items-center self-stretch my-auto">
        <div className="self-stretch my-auto text-2xl font-light text-neutral-900 tracking-[2px]">English</div>
        <div className="flex flex-col justify-center items-center self-stretch px-2.5 py-3.5 my-auto w-9 min-h-[36px]">
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/932bb1b4188128c4db68e06cefe2307fe98ad701028c66d1c2a9754b15480222?placeholderIfAbsent=true&apiKey=60c6eb6ce37644fdb727618799199006" alt="Language icon" className="object-contain aspect-[1.8] w-[18px]" />
        </div>
      </div>
      <button className="gap-3 self-stretch p-2.5 my-auto text-2xl text-white bg-red-700 rounded-[30px] tracking-[2px] w-[216px]">Get In Touch</button>
    </div>
  </nav>
  <div className="relative shrink-0 mt-8 h-px border border-solid border-neutral-200 max-md:max-w-full" />
  </>
);

export default Navbar;