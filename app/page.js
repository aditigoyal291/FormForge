import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { BiRightArrowAlt } from 'react-icons/bi';
import { FaGithub } from 'react-icons/fa';
import Navbar from '../components/Navbar';
const page = () => {
	return (
		
			<div className="py-4 outline flex flex-col mx-auto min-h-[100svh]">
				<Navbar />
				<div className="flex-1 h-full text-white flex items-center justify-center flex-col gap-5 mt-20">
					<div className="flex-1 h-full flex-col my-auto flex items-center justify-center">
						<div className="rounded-full bg-gradient-to-r mb-10 from-green-700 via-green-500  via-yellow-500 via-orange-400 via-pink-400 to-indigo-800 p-px mb-5">
							<div className="flex items-center  bg-background gap-2 rounded-full py-1 px-3">
								<p className="text-sm text-white font-normal">
									Exclusively for PESU
								</p>
								<span>
									<BiRightArrowAlt />
								</span>
							</div>
						</div>
						<div className="my-4">
							<div className="w-full flex justify-center flex-col items-center bg-gradient-to-br from-foreground text-transparent bg-clip-text font-semibold ">
								<span className="before:bg-shine relative mb-8 text-foreground before:absolute before:left-0 before:top-0 before:w-full before:bg-clip-text before:text-transparent text-[42px] leading-[10px] sm:text-[58px] md:text-[84px] md:leading-[48px] sm:leading-[25px] tracking-[-1.024px]  ">
									Forms For
								</span>
								<p className="before:bg-shine relative mb-8 text-foreground before:absolute before:left-0 before:top-0 before:w-full before:bg-clip-text before:text-transparent] text-[42px] leading-[10px] sm:text-[58px] sm:leading-[25px] md:text-[84px] md:leading-[48px] tracking-[-1.024px]  ">
									Developers
								</p>
							</div>
							<p className="text-foreground-muted/80 text-sm sm:text-base md:text-lg my-3 text-center mx-5 text-balance">
								Form generators simplify form creation, data collection, analysis, offering a user-friendly platform for surveys, feedback, and more.
							</p>
							<div className="my-5 flex flex-col sm:flex-row items-center justify-center gap-3 w-full">
								<Link
									href="https://github.com/aditigoyal291/Form"
									className="w-full max-w-xs shadow-md"
								>
									<div className="bg-gradient-to-r from-foreground-muted/60 via-foreground/60 to-foreground-muted/90 p-px rounded-lg">
										<button className="bg-background px-6 rounded-lg w-full text-background p-2 items-center flex justify-center gap-x-3">
											<span className="font-semibold text-sm text-foreground-muted">
												Github
											</span>
											<FaGithub className="inline text-foreground-muted" />
										</button>
									</div>
								</Link>
								<Link
									href="/registration"
									className="w-full max-w-xs shadow-md"
								>
									<button className="bg-foreground px-6 flex items-center rounded-lg w-full text-background py-2 hover:bg-text-primary justify-center gap-x-2.5">
										<span className="font-semibold text-sm">
											Register
										</span>
										<span>
											<BiRightArrowAlt className="w-4" />
										</span>
									</button>
								</Link>
							</div>
						</div>
					</div>
					<div className="flex items-center w-full justify-center gap-2 text-xs">
						<p className="text-foreground/80">Created by</p>

						<Link href="https://github.com/aditigoyal291">
							<span className="flex items-center gap-x-1.5 font-medium hover:font-semibold transition-all">
								<Image
									src="/aditi-github-pic.png"
									width={25}
									height={25}
									alt="aditi github profile pic"
									className="rounded-full"
								/>
								<p className="text-xs">Aditi Goyal</p>
							</span>
						</Link>

						<p className="text-foreground-muted/80">and</p>

						<Link href="https://github.com/SarangKumar/">
							<span className="flex items-center gap-x-1.5 font-medium hover:font-semibold transition-all">
								<Image
									src="/sarang-github-pic.png"
									width={30}
									height={30}
									alt="aditi github profile pic"
									className="rounded-full"
								/>
								<p className="">Sarang Kumar</p>
							</span>
						</Link>
					</div>
				</div>
			</div>
	
	);
};

export default page;
