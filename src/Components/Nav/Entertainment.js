import CardRow from './Card/CardRow'
import CardRowColumn from './Card/CardRowColumn'

export default function Entertainment() {
  return (
    <section className="mt-20">
      <div className="border-solid border-t-2 border-gray-400"></div>

      <div className="py-14 text-4xl lg:text-6xl font-bold tracking-normal text-brand-primary ">
        <div className="bg-gradient-to-r from-orange-500 to-orange-400  bg-left-bottom bg-no-repeat md:bg-[length:40%_20px] bg-[length:80%_20px] text-[#2B2D42] font-[Golos+Text]">
          Entertainment
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
