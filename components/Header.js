import Account from "./Account"

const Header = () => {
  return (
    <header className="flex justify-between p-5 text-sm text-gray-700 text bg-slate-200 hover:bg-slate-500 hover:text-gray-200 ">
      <div className="flex items-center space-x-5">
        <p className="link">About</p>
        <p className="link">Store</p>
      </div>
      <div className="flex items-center space-x-5">
        <p className="link">Gmail</p>
        <p className="link">Images</p>
        <Account />
      </div>
    </header>
  )
}

export default Header
