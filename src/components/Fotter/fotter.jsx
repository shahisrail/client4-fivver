const Fotter = () => {
  return (
    <div className="bg-[#F3F2F1] text-white p-4 flex flex-wrap justify-around items-center">
      <div className="text-black ">
        <div className="py-4">
          <ul className="flex flex-wrap gap-4">
            <a className="underline" href="#">
              Accessibility statement
            </a>
            <a className="underline" href="#">
              {" "}
              Privacy Policy{" "}
            </a>
            <a className="underline" href="#">
              Terms and conditions
            </a>
            <a className="underline" href="#">
              Help using Gov
            </a>
            <a className="underline" href="#">
              Contact
            </a>
            <a className="underline" href="#">
              {" "}
              Rhestr o Wasanaethau Cymraeg Government{" "}
            </a>
          </ul>
        </div>
        <div>
            <span className="font-extrabold p-2" > 
                OGL
            </span>
          All content is available under the Open Government Licence v3.0,
          except where otherwise stated
        </div>
      </div>
      <div className="flex flex-col items-center">
        <img className="h-[100px] w-[100px]" src="/footer.png" alt="" />
        <span className="text-gray-600 underline text-center">
        © Crown copyright</span>
      </div>
    </div>
  );
};

export default Fotter;
