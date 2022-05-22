import Featured from './Featured';

const About = () => {
    return (
        <div className="bg-white pt-28 xl:pt-40 pb-16">
            <div className="mx-auto container grid grid-cols-1 max-w-7xl grid grid-cols-1 xl:grid-cols-2 gap-16 px-10 2xl:px-0">
                <div className="relative flex items-center justify-center">
                    <img src="/images/bankroll-coffee.png" className="p-4 z-10 w-120 2xl:w-144" />
                    <img src="/images/dots.svg" className="absolute -translate-x-14 translate-y-24  sm:-translate-x-18 sm:translate-y-36 2xl:-translate-x-28 2xl:translate-y-44 w-48 sm:w-64" />
                </div>
                <div className="flex flex-col items-center xl:items-start text-center xl:text-left justify-center w-full">
                    <p className="leading-10 text-neutral-500 text-sm max-w-3xl xl:max-w-full">Graham Stephan obtained his Real Estate license shortly after his 18th birthday and dove headfirst into the world of Real Estate in 2008. Since then, Graham has sold over $130M+ of Residential Real Estate. His notable clients include Orlando Bloom, Chloe Moretz, Suki Waterhouse, LaVar Arrington, Wale, Casper Inc, among many others.</p>
                    <hr className="w-full border-neutral-200 pb-14 mt-14" />
                    <p className="leading-10 text-neutral-500 text-sm max-w-3xl xl:max-w-full">Outside of Real Estate sales, Graham owns six rental properties that he manages in his spare time throughout Los Angeles and San Bernardino County. He also runs one of the largest Personal Finance based YouTube channel with over 10,000,000+ monthly viewers and over 3.7 Million subscribers.</p>
                </div>
            </div>
            <Featured />
        </div>
    );
};

export default About;