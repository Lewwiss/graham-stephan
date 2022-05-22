const Contact = () => {
    return (
        <div>
            <div className="min-h-screen mx-auto container max-w-7xl grid grid-cols-1 xl:grid-cols-2 pt-40 xl:pt-48 px-6">
                <div className="flex flex-col items-center xl:items-start justify-center xl:justify-start">
                    <h1 className="leading-tight text-5xl font-black text-slate-900">Let's chat!</h1>
                    <p className="leading-10 text-slate-500 text-sm pt-6">Please select a topic related and briefly describe your inquiry!</p>
                    <p className="leading-10 text-slate-500 text-sm pt-3 text-center xl:text-left">Or alternatively send me an email:<br /><a target="_blank" href="mailto:hello@grahamstephan.com" className="underline">hello@grahamstephan.com</a></p>
                </div>
                <form className="w-full h-full px-4 sm:px-8 xl:px-0" method="post">
                    <div className="relative flex flex-col items-center xl:items-start justify-center xl:justify-start pt-12 xl:pt-0">
                        <input required type="text" className="appearance-none bg-slate-50 border placeholder-slate-400 px-5 py-3.5 bg-white text-slate-900 text-sm focus:outline-none w-full" placeholder="Full name" />
                        <div className="flex flex-row space-x-6 w-full py-8">
                            <input required type="text" className="appearance-none bg-slate-50 border placeholder-slate-400 px-5 py-3.5 bg-white text-slate-900 text-sm focus:outline-none w-full" placeholder="Email" />
                            <input required type="text" className="appearance-none bg-slate-50 border placeholder-slate-400 px-5 py-3.5 bg-white text-slate-900 text-sm focus:outline-none w-full" placeholder="Phone number" />
                        </div>
                        <input required type="text" className="appearance-none bg-slate-50 border placeholder-slate-400 px-5 py-3.5 bg-white text-slate-900 text-sm focus:outline-none w-full" placeholder="Topic" />
                        <textarea required type="text" className="appearance-none h-68 mt-8 bg-slate-50 border placeholder-slate-400 px-5 py-3.5 bg-white text-slate-900 text-sm focus:outline-none w-full" placeholder="Message" />
                        <button type="submit" className="mb-40 mt-8 border border-slate-900 px-6 py-3.5 font-medium bg-slate-900 text-white text-sm">Send message</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;