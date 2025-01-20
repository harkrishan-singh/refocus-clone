import Button from "./Button";
import Logo from "./Logo";

const navItems = [
  { val: "Home", selected: false },
  { val: "Work", selected: true },
  { val: "Culture", selected: false },
  "",
  { val: "News", selected: false },
];

const Header = () => {
  return (
    <div className=" max-w-screen-lg mx-auto px-6 py-5 flex justify-between items-center border-b-[1px] border-opacity-80 border-zinc-700 ">
      <div className=" flex justify-center items-center gap-8 gap-24 ">
        <Logo />
        <div className=" flex justify-center items-center gap-8 md:gap-12 text-xs font-extralight ">
          {navItems.map((item, index) =>
            item.val ? (
              <a
                key={index}
                className=" flex justify-center items-center gap-1 "
              >
                {item.selected && (
                  <span
                    style={{ boxShadow: "0 0 0.25rem #00FF19" }}
                    className=" inline-block h-1 w-1 rounded-full bg-green-600 "
                  ></span>
                )}
                {item.val}
              </a>
            ) : (
              <div key={index} className=" h-5 w-[1px] bg-zinc-600 "></div>
            )
          )}
        </div>
      </div>
      <Button value="Start a Project" />
    </div>
  );
};

export default Header;
