const Landing = () => {
    return (
        <div>
            <div className="min-h-screen mx-auto container max-w-7xl grid grid-cols-1 xl:grid-cols-2 px-10 2xl:px-0 pt-28 xl:pt-0">
                <div className="flex flex-col items-center justify-center xl:items-start xl:justify-center pb-40 pt-20 xl:pt-40 order-2 xl:order-1">
                    <p className="mb-6 text-md font-bold text-slate-900">Real Estate & Finance Youtuber</p>
                    <h1 className="leading-tight text-8xl font-black text-slate-900">Graham<br />Stephan</h1>
                    <form className="w-full" type="post">
                        <div className="flex justify-center xl:justify-start flex-row mt-9">
                            <input required type="text" className="appearance-none bg-slate-50 border placeholder-slate-400 px-5 py-3.5 bg-white text-slate-900 text-sm focus:outline-none w-88" placeholder="Email" />
                            <button type="submit" className="border border-slate-900 px-6 py-3.5 font-medium bg-slate-900 text-white text-sm">Subscribe</button>
                        </div>
                    </form>
                    <p className="mt-8 text-sm text-slate-500">Or visit my substack <a target="_blank" href="https://grahamstephan.substack.com/" className="underline">here</a> to learn more.</p>
                </div>
                <div className="relative flex items-center justify-center order-1 xl:order-2">
                    <img src="/images/blob.png" className="w-144 2xl:w-full p-4 z-10" />
                    <img src="/images/dots.svg" className="absolute -translate-x-36 translate-y-48 2xl:-translate-x-40 2xl:translate-y-52 w-56 2xl:w-64" />
                </div>
            </div>
        </div>
    );
};

export default Landing;