import Image from "next/image";
import Link from "next/link";
import {
  BeakerIcon,
  HomeIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";
import {
  BellIcon,
  SparklesIcon,
  ChatBubbleLeftEllipsisIcon,
  PlusIcon,
  CurrencyDollarIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";

const Header = () => {
  return (
    <div className="flex bg-white px-4 py-2 shadow-sm sticky top-0 z-50">
      <Logo />
      <div className="flex items-center mx-7 cursor-pointer xl:min-w-[300px]">
        <HomeIcon className="h-5 w-5" />
        <p className="flex-1 ml-2 hidden lg:inline">Home</p>
        <ChevronDownIcon className="h-5 w-5" />
      </div>
      <Search />
      {/* Implement ham burger for this */}
      <div className="text-gray-500 space-x-2 mx-5 hidden lg:inline-flex">
        <SparklesIcon className="icon" />
        <CurrencyDollarIcon className="icon" />
        <hr className="h-10 border border-gray-100" />
        <ChatBubbleLeftEllipsisIcon className="icon" />
        <BellIcon className="icon" />
        <PlusIcon className="icon" />
      </div>
      <div className="ml-5 flex items-center lg:hidden">
        <Bars3Icon className="icon" />
      </div>
      <div className="hidden lg:flex cursor-pointer border border-gray-100">
        <div className="relative h-7 w-6 lg:w-9 flex items-center">
          <Image
            src="/reddit-bot.svg"
            fill
            className="object-contain"
            alt="reddit bot icon"
          />
          <p className="relative text-gray-400">Sign In</p>
        </div>
      </div>
    </div>
  );
};

const Search = () => {
  return (
    <form className="flex flex-1 items-center space-x-2 rounded-sm border border-gray-200 bg-gray-100 px-3 py-1">
      <MagnifyingGlassIcon className="h-6 w-6 text-gray-400" />
      <input
        className="flex-1 bg-transparent outline-none"
        type="text"
        placeholder="Search reddit"
      />
      <button type="submit" hidden />
    </form>
  );
};

const Logo = () => {
  return (
    <Link href="/" passHref legacyBehavior>
      <a className="flex items-center space-x-1">
        <div className="relative h-10 w-7">
          <Image
            src="/logo.svg"
            fill
            className="object-contain"
            alt="reddit logo"
          />
        </div>
        <div className="relative h-10 w-16 hidden md:block">
          <Image
            src="/reddit.svg"
            className="object-contain"
            fill
            alt="reddit text logo"
          />
        </div>
      </a>
    </Link>
  );
};

export default Header;
