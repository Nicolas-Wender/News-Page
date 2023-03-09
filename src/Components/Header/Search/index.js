export default function Search(props) {
  return (
    <div className={'relative text-gray-600 ' + props.styles}>
      <input
        className="h-10 w-full rounded-md border-2 border-gray-400 pl-2 pr-8 py-4 text-sm bg-white/0 focus:outline-none"
        type="search"
        name="search"
        placeholder="Search"
      />
      <button type="submit" className="absolute right-0 bottom-0">
        <svg
          className="text-gray-400 h-10 w-8 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  )
}
