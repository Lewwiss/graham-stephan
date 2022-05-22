const Featured = () => {
    return (
        <div className="bg-white py-24 text-center">
            <div className="mx-auto container max-w-7xl grid grid-cols-2 xl:grid-cols-4">
                <a target="_blank" href="https://www.businessinsider.com/youtuber-graham-stephan-launching-bankroll-coffee-startup-costs-earnings-interview-2021-9?r=US&IR=T" className="flex items-center justify-center">
                    <img src="/images/business-insider.svg" className="w-24 sm:w-36" />
                </a>
                <a target="_blank" href="https://www.cnbc.com/2021/09/09/how-graham-stephan-makes-6-million-dollars-a-year-from-youtube.html" className="flex items-center justify-center">
                    <img src="/images/cnbc.svg" className="w-18 sm:w-24" />
                </a>
                <a target="_blank" href="https://www.forbes.com/sites/jrose/2020/10/28/millennial-cracks-youtube-algorithm---makes-18-million-in-2020-so-far/?sh=51ee0ff7714b" className="flex items-center justify-center">
                    <img src="/images/forbes.svg" className="w-20 sm:w-32 mt-20 xl:mt-0" />
                </a>
                <a target="_blank" href="https://medium.com/" className="flex items-center justify-center">
                    <img src="/images/medium.svg" className="w-32 sm:w-44 mt-20 xl:mt-0" />
                </a>
            </div>
        </div>
    );
};

export default Featured;