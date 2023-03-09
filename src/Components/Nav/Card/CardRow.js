export default function CardRow(props) {
  return (
    <div className={"overflow-hidden flex h-28 md:h-full w-full justify-between " + props.Style}>
      <img
        className="object-cover rounded-lg w-2/5 md:w-1/2 h-full mr-5 "
        src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        alt=""
      />

      <div className="flex flex-col lg:ml-14 mx-2 h-full lg:w-1/2">
        <div className="text-[#2B2D42] font-mono text-xs lg:text-base ">
          Anna Mercury -<span className="text-gray-400">January 11, 2022 </span>
        </div>

        <div className={"text-base font-semibold hover:underline mt-2 md:text-3xl lg:text-5xl text-[#2B2D42] font-['Anglecia+Pro+Dsp+Md'] "+props.Small}>
          How to use sticky note for problem solving aaaaaa aa a a aaaa
        </div>
      </div>
    </div>
  )
}
