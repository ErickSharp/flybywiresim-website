import React from 'react';
import BackgroundImage from '../../assets/img/discord.jpg';
import { Button } from '../Button';

export const A32NX: React.FC = () => (
    <>
        <div className="absolute max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 inset-x-2 inset-y-1/3 z-30">
            <div className="flex flex-row justify-between items-end">
                <div>
                    <h2 className="text-xl font-medium tracking-widest text-white uppercase ml-2 mb-2">
                    DISCOVER THE
                    </h2>
                    <h1 className="text-7xl sm:text-8xl font-medium">
                        <span className="text-blue-light">A32</span><span className="text-blue">N</span>X
                    </h1>
                    <h1 className="w-2/3 text-2xl mt-2">
                        &quot;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error ipsa optio recusandae. Dolores, recusandae sit?&quot;
                    </h1>
                    <div className="flex max-w-md py-5">

                        <a href="https://api.flybywiresim.com/installer">
                            <Button
                                className="w-40 text-xl font-bold bg-blue-light border-2 border-blue-light transition hover:bg-white hover:text-blue-light mr-3">Installer
                            </Button>
                        </a>

                        <a href="https://flybywiresim-packages.b-cdn.net/stable/A32NX-stable.zip">
                            <Button
                                className="w-48 text-xl font-bold border-2 border-blue-light text-blue-light transition hover:bg-white hover:text-blue-light">Direct Download
                            </Button>
                        </a>
                    </div>
                </div>
                <div>

                </div>
            </div>
        </div>
        <img className="relative z-0 h-screen object-cover w-screen opacity-20"
            src={BackgroundImage}  alt=""/>
    </>
);
