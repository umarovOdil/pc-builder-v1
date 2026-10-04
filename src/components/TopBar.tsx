import { CpuIcon } from "lucide-react";
import { Link } from "react-router-dom";
import ADSBG from '../assets/ads_bg.png'


const TopBar: React.FC = () => {

    const links = [
      { to: '/', label: 'Home' },
      { to: '/builds', label: "To'plamlar" },
      { to: '/builder', label: "Yig'ish" },
      { to: '/mybuild', label: "To'plamlarim" }
    ]

    const Nav = () => (
    <nav className="flex gap-6 ">
        {links.map((l) => (
          <Link
            key={l.to}
            to={l.to}
        >
            {l.label}
        </Link>
        ))}
    </nav>
    )


	return (
    <div>
      <div className="w-full xs:h-35 flex flex-wrap gap-6 items-center justify-between border-b-2 border-gray-600  py-5">
          <Link to="/" className="w-1/2 ">
            <div className="w-full h-full flex gap-3 items-center justify-start min-w-xs">
                <div className="rounded-xl bg-gray-700 p-3  drop-shadow-neon-green shadow-[0_0_30px_rgba(255,45,120,0.35)]">
                    <CpuIcon className="w-10 h-10 text-neon-pink" />
                </div>
                <div>
                    <p className="ml-2 text-2xl font-bold text-gray-200 ">PC Builder <span className=" text-neon-green">V1.0</span></p>
                    <p className="ml-2 text-sm font-semibold text-gray-400 ">Orzuyingizdagi PCni yig'ing</p>
                </div>
            </div>
          </Link>
          <div>
            {Nav()}
          </div>
      </div>
      <div className="w-full mt-3 max-h-30 overflow-hidden flex justify-center items-center">
        <img src={ADSBG} alt="ads" className="w-full max-h-30" />
      </div>
		</div>
	);
};

export default TopBar;
