import LocalSwitcher from "./LocalSwitcher";

export default function Header() {
  return (
    <header className="w-full bg-neutral-300 h-14 flex justify-between items-center px-4 md:px-10 lg:px-20">
      {/* LOGO */}
      <div className=""></div>
      {/* Navbar */}
      <div className=""></div>
      {/* actions */}
      <div className="">
        <LocalSwitcher />
      </div>
    </header>
  );
}
