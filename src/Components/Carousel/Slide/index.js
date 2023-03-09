export default function Slide(props) {
  return (
    <div className="md:h-full h-[50vh] w-full md:px-20">

      <div className="relative  h-full ">

        <div className="CONTENT h-full absolute z-10 bg-[#F6F4F0]/20 p-4 rounded-m w-full md:p-7 md:w-2/3 md:max-h-[2/3] md:bg-[#F6F4F0] md:left-[50%] md:translate-x-[-50%] md:top-1/2">
          <div className="text-[#2B2D42] text-sm font-[Golos+Text]">
            {props.author} - <span className="text-gray-400 ">{props.data} </span>
          </div>
          <h1 className="text-[#2B2D42] font-['Anglecia+Pro+Dsp+Md'] font-bold my-2 text-3xl lg:text-5xl md:my-5">
           {props.title}
          </h1>
          <div className="text-gray-400 font-[Golos+Text] hidden lg:block overflow-hidden">
            <p className="text-md'">
            {props.heading}
            </p>
          </div>
        </div>

        <div className="IMAGE absolute h-full md:h-[40vw] w-full ">
          <img
            className="object-cover mix-blend-multiply w-full h-full"
            src={props.imagem}
            alt=""
          />
        </div>

      </div>
    </div>
  )
}
