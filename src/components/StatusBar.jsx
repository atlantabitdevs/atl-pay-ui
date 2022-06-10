export const StatusBar = () => {
  return(
    <div className="status-bar">
      <ol className="flex flex-row space-x-12 text-lg text-term-gray list-decimal">
        <li className="current">
          <a href="#">Membership Type</a>
        </li>
        <li>
          <a href="#">About You</a>
        </li>
        <li>
          <a href="#">Payment schedule</a>
        </li>
        <li>
          <a href="#">Checkout</a>
        </li>
      </ol>
    </div>
  )
}