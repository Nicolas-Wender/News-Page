/* eslint-disable jsx-a11y/anchor-is-valid */
export default function Button(props) {
  return (
    <>
      <a
        className={
          'block px-4 py-2 leading-loose cursor-pointer text-center rounded-3xl text-xl font-base w-full font-[Golos+Text] ' +
          props.textColor +
          ' ' +
          props.colorBg +
          ' hover:' +
          props.colorBgHover
        }
      >
        {props.name}
      </a>
    </>
  )
}
