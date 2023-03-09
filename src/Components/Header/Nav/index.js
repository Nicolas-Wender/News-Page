import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="border-solid border-t-2 border-gray-400 md:p-2 md:mb-10 md:border-b-2 md:border-t-0 flex md:justify-center">
      <ul className="hidden md:flex">
        {[
          ['Home', '/'],
          ['Sports', '/Sports'],
          ['Entertainment', '#'],
          ['Money', '#'],
          ['Tech', '#']
        ].map(([title, url]) => (
          <li>
            <Link
              to={url}
              className="mx-5 py-2.5 px-3 text-[#2B2D42] font-medium font-[Golos+Text] text-md hover:text-slate-900 hover:border-solid hover:border-b-2 hover:border-slate-900 "
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
