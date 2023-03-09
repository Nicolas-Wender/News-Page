import CardRow from './Card/CardRow'
import CardRowColumn from './Card/CardRowColumn'

export default function Sports() {
  return (
    <section className="mt-20">
      <div className="border-solid border-t-2 border-gray-400"></div>

      <div className="py-14 text-4xl lg:text-6xl font-bold tracking-normal text-brand-primary ">
        <div className="bg-gradient-to-r from-red-500 to-red-400 bg-left-bottom bg-no-repeat md:bg-[length:20%_20px] bg-[length:40%_20px] text-[#2B2D42] font-[Golos+Text]">
          Sports
        </div>
      </div>

      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-y-10 gap-10 mt-8 md:mt-16 md:grid-cols-3 place-items-center ">
          <CardRow Style="md:col-span-3" />
          <CardRowColumn />
          <CardRowColumn />
          <CardRowColumn />
        </div>
      </div>
    </section>
  )
}
