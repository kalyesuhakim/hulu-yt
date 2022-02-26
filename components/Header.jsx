import HeaderIcon from "../components/HeaderIcon";
import {
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";
function Header() {
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center">
      <div className="flex flex-grow justify-evenly max-w-2xl">
        <HeaderIcon title="HOME" Icon={HomeIcon} />
        <HeaderIcon title="TRENDING" Icon={LightningBoltIcon} />
        <HeaderIcon title="VERIFIED" Icon={BadgeCheckIcon} />
        <HeaderIcon title="COLLECTIONS" Icon={CollectionIcon} />
        <HeaderIcon title="SEARCH" Icon={SearchIcon} />
        <HeaderIcon title="ACCOUNT" Icon={UserIcon} />
      </div>
      <h1 className="text-white text-2xl font-bold ">hulu</h1>
      {/* <Image className="object-contain" src="https://links.papareact.com/ua6" width={200} height={100} */}
    </header>
  );
}

export default Header;
