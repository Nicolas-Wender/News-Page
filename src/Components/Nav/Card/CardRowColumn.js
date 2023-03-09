export default function CardRowColumn(props) {
  return (
    <div className={"overflow-hidden flex h-28 md:flex-col w-full md:h-full "+props.Style}>
      <img
        className="object-cover w-2/5  md:w-full lg:h-3/5 rounded-lg mr-5 md:mr-0"
        src="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        alt=""
      />

      <div className="flex flex-col md:justify-between md:py-6">
        <div className="text-[#2B2D42] font-mono text-xs md:text-sm">
          Anna Mercury -<span className="text-gray-400">January 11, 2022 </span>
        </div>
        <div className="text-base lg:text-xl font-semibold text-[#2B2D42] font-['Anglecia+Pro+Dsp+Md']  hover:underline ">
          How to use sticky note for problem solving a aaaaaaaaaaaaaa a a a a a
          a
        </div>
      </div>
    </div>
  )
}
