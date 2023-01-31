import { useState, useEffect } from "react";

import GlobalContainer from "@/components/templates/GlobalContainer";
import Text, { TextType } from "@/components/atoms/Text";
import LinkComponent from "@/components/molecules/Link";
import Button from "@/components/molecules/Button";

import { links } from "@/data";

const Navbar = () => {
    const [scrollPosition, setScrollPosition] = useState<number>(0);
    const [isScrolled, setIsScrolled] = useState(false);
    
    useEffect(() => {
        window.addEventListener('scroll', () => {
            setScrollPosition(window.pageYOffset);
        })
    }, []); 

    useEffect(() => {
        if(scrollPosition >= 300) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    }, [scrollPosition]);


    return (
        <nav className={`flex mt-0 fixed z-10 h-[70px] ${isScrolled ? 'bg-white' : ''} transition duration-300 ease-in-out`}>
            <GlobalContainer addClassName="flex justify-between items-center">
                <Text textType={TextType.Regular} addClassName={`text-white font-extrabold ${isScrolled ? 'text-black' : ''}`}>LABRA <span className="purple">V.22</span></Text> 
                <div className="flex gap-[30px] items-center ${isScrolled ? 'text-black' : ''} sm:hidden">
                    {links.map(link => (
                        <LinkComponent key={`${link}-link`} href={`#${link}`} addClassName={`${isScrolled ? 'text-black' : 'text-white'}`}>{link}</LinkComponent>
                    ))}
                    <LinkComponent href="#ContactUs"><Button>Contact Us</Button></LinkComponent>
                </div>
                <div className="hidden sm:flex flex-col gap-[5px] w-[30px]">
                    <div className={`h-[2px] w-[100%] ${isScrolled ? 'bg-black' : 'bg-white'}`}></div>
                    <div className={`h-[2px] w-[100%] ${isScrolled ? 'bg-black' : 'bg-white'}`}></div>
                    <div className={`h-[2px] w-[100%] ${isScrolled ? 'bg-black' : 'bg-white'}`}></div>
                </div>
            </GlobalContainer>
        </nav>
    )
}

export default Navbar;

