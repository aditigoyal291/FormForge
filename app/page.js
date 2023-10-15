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
			<div className="flex-1 h-full flex items-center justify-center flex-col gap-5 mt-[5%] md:mt-[3%]">

				<div className="absolute bg-foreground/20 right-10 max-w-[70px] blur-[100px]  -rotate-12 h-2/5 w-1/6 rounded-full" />
				<div className="w-1/6 max-h-[250px] h-1/6 absolute rounded-full blur-[80px] bg-foreground/10 left-[2%] top-[10%] md:top-[15%]" />
				<div className='absolute  bg-foreground/30 bottom-10 left-[35%] max-h-[50px] h-1/6 w-[6%] blur-[80px]'/>
				<div className='absolute  bg-foreground/5 bottom-[20%] left-16 max-h-[50px] h-1/6 w-[6%] blur-[50px]'/>


				<div className="flex-1 h-full flex-col my-auto flex items-center justify-center">
					<div className="rounded-full bg-gradient-to-r from-green-700 via-green-500 via-yellow-500 via-orange-400 via-pink-400 to-indigo-800 p-px mb-5">
						<div className="flex items-center justify-center bg-background gap-2 rounded-full py-1 px-3">
							<p className="text-sm text-white font-normal">
								Exclusively for PESU
							</p>
							<span>
								<BiRightArrowAlt className="text-foreground" />
							</span>
						</div>
					</div>
					<div className="my-4">
						<div className="relative:animate-shine relative after:absolute after:w-full after:h-full after:top-0 after:left-0 bg-gradient-to-br after:from-bg-red-500 from-white via-blue-400 bg-clip-text text-foreground w-full flex justify-center flex-col items-center font-semibold">
							<span className="anima relative mb-8 text-foreground text-[42px] leading-[10px] sm:text-[58px] md:text-[72px] md:leading-[44px] sm:leading-[22px] tracking-[-1.024px]  ">
								Forms For
							</span>
							<p className="relative mb-8 text-foreground  text-[42px] leading-[10px] sm:text-[58px] sm:leading-[22px] md:text-[72px] md:leading-[44px] tracking-[-1.024px] ">
								Developers
							</p>
						</div>
						<p className="text-foreground-muted/80 text-sm sm:text-base md:text-lg my-3 text-center mx-5 text-balance max-w-md">
							Form generators simplify form creation, data
							collection, analysis, offering a user-friendly
							platform for surveys, feedback, and more.
						</p>
						<div className="my-5 flex flex-col sm:flex-row items-center justify-center gap-3 w-full">
							<Link
								href="https://github.com/aditigoyal291/Form"
								className="w-full max-w-xs shadow-md"
							>
								<div className="bg-gradient-to-r from-foreground-muted/60 via-foreground/60 to-foreground-muted/90 p-px rounded-lg">
									<button className="bg-background hover:bg-modal-background px-6 rounded-lg w-full text-background p-2 items-center flex justify-center gap-x-3">
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
								<button className="bg-foreground px-6 flex items-center rounded-lg hover:bg-foreground-muted w-full text-background py-2 hover:bg-text-primary justify-center gap-x-2.5">
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
				<div className="flex items-center w-full text-foreground justify-center gap-2 text-xs">
					<p className="text-foreground/80">Created by</p>

					<Link href="https://github.com/aditigoyal291">
						<span className="flex items-center gap-x-1.5 font-medium hover:-translate-y-1 transition-all">
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
						<span className="flex items-center gap-x-1.5 font-medium hover:-translate-y-1 transition-all">
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
