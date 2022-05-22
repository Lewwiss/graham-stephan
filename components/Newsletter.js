const Newsletter = () => {
    return (
        <div className="bg-white py-6">
            <div className="bg-primary mx-auto container max-w-7xl rounded-xl">
                <div className="flex flex-col p-24">
                    <h4 className="font-bold text-4xl leading-normal text-white">Subscribe to my newsletter</h4>
                    <div className="flex flex-row mt-9">
                        <input type="text" className="border px-5 py-3.5 bg-white text-black text-sm focus:outline-none w-88" placeholder="Email" />
                        <button className="border border-primary px-6 py-3.5 font-medium bg-black text-white text-sm">Subscribe</button>
                    </div>
                    <p className="leading-9 text-neutral-500 text-sm pt-8 pl-1">Or visit my substack <a href="https://grahamstephan.substack.com/" target="_blank" className="underline">here</a> to learn more.</p>
                </div>
            </div>
        </div>
    );

    return (
        <div className="bg-white">
            <div className="mx-auto container max-w-7xl gap-20 grid grid-cols-2">
                <div className="flex flex-col py-24">
                    <h4 className="font-bold text-4xl leading-normal text-black">Subscribe to my newsletter</h4>
                    <div className="flex flex-row mt-9">
                        <input type="text" className="border px-5 py-3.5 bg-white text-black text-sm focus:outline-none w-88" placeholder="Email" />
                        <button className="border border-primary px-6 py-3.5 font-medium bg-primary text-white text-sm">Subscribe</button>
                    </div>
                    <p className="leading-9 text-neutral-500 text-sm pt-8 pl-1">Or visit my substack <a href="https://grahamstephan.substack.com/" target="_blank" className="underline">here</a> to learn more.</p>
                </div>
                <div className="px-20">
                    <div className="w-full bg-white border-l border-r h-full" />
                </div>
            </div>
        </div>
    );
};

export default Newsletter;