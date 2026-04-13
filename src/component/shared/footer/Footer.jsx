import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
    return (
        <footer className="footer footer-horizontal footer-center bg-[#244D3F] text-white p-10">
            <aside>
                <h2 className="text-7xl font-bold mb-4">KeenKeeper</h2>
                <p>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
                
            </aside>
            <nav>
                <p className="font-bold text-xl mb-3">Social Links</p>
                <div className="grid grid-flow-col gap-4">
                    <a>
                        <RiInstagramFill />
                    </a>
                    <a>
                        <FaFacebook />
                    </a>
                    <a>
                        <FaXTwitter />
                    </a>
                </div>
            </nav>
            <div className="text-gray-400 flex items-center justify-between gap-60">
                <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
                <div className="flex items-center justify-between gap-8">
                    <p>Privacy Policy</p>
                    <p>Terms of Service</p>
                    <p>Cookies</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;