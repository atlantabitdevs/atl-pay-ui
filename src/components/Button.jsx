export const Button = (props) => {
  return(
      <button
        className="bg-term-orange py-4 px-6 text-2xl uppercase tracking-widest hover:bg-term-orange-hover disabled:bg-term-orange-disabled flex flex-row items-center align-center justify-center space-x-4 text-center"
        disabled={props.disabled}
        onClick={props.onClick}
      >
        {props.children}
      </button>
    )
}