/* eslint-disable react/react-in-jsx-scope */

import Logo from "./Logo"
function Footer(){
    return(
        <footer className=" bg-black grid grid-cols-1 p-8 sm:grid-cols-3 gap-12 rounded-tr-[5rem]">
           <div className="row-span-2">
            <Logo />
           </div>
            <ul className="text-white">
                <li>Overview</li>
                <li>Pricing</li>
                <li>Market Place</li>
                <li>Features</li>
                <li>Integrations</li>
            </ul>
             <ul className="text-white">
                <li>Overview</li>
                <li>Pricing</li>
                <li>Market Place</li>
                <li>Features</li>
                <li>Integrations</li>
            </ul>
             <ul className="text-white">
                <li>Overview</li>
                <li>Pricing</li>
                <li>Market Place</li>
                <li>Features</li>
                <li>Integrations</li>
            </ul>
             <ul className="text-white">
                <li>Overview</li>
                <li>Pricing</li>
                <li>Market Place</li>
                <li>Features</li>
                <li>Integrations</li>
            </ul>
        </footer>
    )
}
export default Footer;