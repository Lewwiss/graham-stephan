import { Twitter, Tiktok, Instagram, Youtube, Facebook } from './Socials';

const Footer = () => {
    return (
        <div className="bg-slate-900 py-14">
            <div className="mx-auto container max-w-8xl grid grid-cols-1 lg:grid-cols-2 px-6 3xl:px-0">
                <div className="flex flex-row space-x-4 justify-center lg:justify-start pt-12 lg:pt-0 order-2 lg:order-1">
                    <p className="text-sm text-slate-500">© 2023 Graham Stephan</p>
                    <p className="text-sm text-slate-500">|</p>
                    <p className="text-sm text-slate-500">Site developed by <a target="_blank" href="https://district.dev/" className="underline">district.dev</a></p>
                </div>
                <div className="flex items-center justify-center lg:justify-end space-x-9 order-1 lg:order-2">
                    <Twitter />
                    <Tiktok />
                    <Facebook />
                    <Instagram />
                    <Youtube />
                </div>
            </div>
        </div>
    );
};

export default Footer;