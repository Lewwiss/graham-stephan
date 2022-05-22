import { useState, useEffect } from "react";

const Navigation = () => {
    const [top, setTop] = useState(true);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.pageYOffset === 0) {
                setTop(true);
            } else {
                setTop(false);
            };
        });
    }, []);

    return (
        <div className={`fixed z-50 w-full duration-300 ${top ? "h-28" : "h-24 bg-white"}`}>
            <div className="mx-auto container max-w-8xl w-full grid grid-cols-2 lg:grid-cols-3 h-full px-6 3xl:px-0">
                <div className="flex items-center justify-start">
                    <a href="/" className="bg-white h-10 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="#64748b" strokeWidth={1.6}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                        </svg>
                    </a>
                </div>
                <div className="hidden lg:flex flex-row items-center justify-center space-x-14">
                    <a href="/" className="text-sm text-slate-500">Home</a>
                    <a href="/featured" className="text-sm text-slate-500">Featured</a>
                    <a href="/projects" className="text-sm text-slate-500">Projects</a>
                    <a target="_blank" href="https://grahamstephan.substack.com/" className="text-sm text-slate-500">Newsletter</a>
                </div>
                <div className="flex flex-row justify-end items-center space-x-8">
                    <a href="/" className="hidden lg:flex bg-white h-10 items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="#64748b" strokeWidth={1.6}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                    </a>
                    <a href="/contact" className="border border-slate-900 px-6 py-3.5 font-medium bg-slate-900 text-white text-sm">Get in contact</a>
                </div>
            </div>
        </div>
    );
};

export default Navigation;