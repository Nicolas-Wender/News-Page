import CardRowColumn from './Card/CardRowColumn'

export default function Tech() {
  return (
    <section className="mt-20">
      <div className="border-solid border-t-2 border-gray-400"></div>

      <div className="py-14 text-4xl lg:text-6xl font-bold tracking-normal text-brand-primary ">
        <div className="bg-gradient-to-r from-blue-500 to-blue-400  bg-left-bottom bg-no-repeat md:bg-[length:15%_20px] bg-[length:27%_20px] text-[#2B2D42] font-[Golos+Text]">
          Tech
        </div>
      </div>

      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-10 mt-8 md:mt-16 md:grid-cols-6 ">
          <CardRowColumn Style="md:col-span-3" />
          <CardRowColumn Style="md:col-span-3" />
          <CardRowColumn Style="md:col-span-2" />
          <CardRowColumn Style="md:col-span-2" />
          <CardRowColumn Style="md:col-span-2" />
        </div>
      </div>
    </section>
  )
}
