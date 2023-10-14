import { domains } from "@/constants/baseQuestions";

const DomainList = ({ setPage, setDomain, }) => {

  const handleDomainChange = (e) => {
    e.preventDefault();
    setPage(3);
  };

  return (
		<form className="flex text-foreground mt-10 w-full text-sm">
			<div className="flex flex-col gap-y-10 w-full">
				<span className="text-base">
					Enter the domain of your interest
				</span>
				<div className="grid grid-cols-1 gap-4">
					{domains.map((domain) => (
						<>
							<div
								className="radio-label outline-offset-0 flex rounded-md focus:outline-secondary"
								key={domain.name}
							>
								<label
									htmlFor={domain.name}
									className="relative border-foreground/10 border-[1px] hover:bg-foreground/10 font-medium hover:shadow-lg bg-foreground/5 shadow-md cursor-pointer p-4 flex items-center justify-center rounded-md z-10 w-full"
								>
									<div className="flex flex-col gap-y-1 w-full p-2">
										<div className="flex gap-4 ">
											<h2 className="text-base font-semibold text-foreground">
												{domain.domain}
											</h2>
											<p className="whitespace-nowrap shadow-2xl h-fit px-3  rounded-md-xl outline-none bg-gradient-to-r from-secondary via-secondary/80 to-primary animate-gradient font-medium flex items-center justify-center text-xxs">
												{domain.type === 'tech'
													? 'Tech'
													: 'Non-Tech'}
											</p>
										</div>
										<p className="text-xs leading-5">
											{domain.description}
										</p>
									</div>
									<input
										type="radio"
										name="semester"
										onChange={(e) =>
											setDomain(e.target.value)
										}
										id={domain.name}
										value={domain.name}
										className="self-start box-content rounded-md-full bg-foreground/20 p-1 ring-foreground/20 bg-clip-padding outline-none ring-1 
                 checked:border-primary checked:border-[4px] checked:ring-primary w-2 appearance-none h-2 checked:bg-foreground/80 border-[5px] border-foreground/20"
									/>
								</label>
							</div>
						</>
					))}
				</div>
				<div className="mt-8 flex items-center flex-col-reverse sm:flex-row justify-end gap-2 md:gap-3">
					<button
						type="reset"
						onClick={() => setDomain(null)}
						className="bg-foreground/5 w-full p-2 uppercase font-semibold border-foreground/10 border-[1px] rounded-md focus:outline-secondary focus:outline-offset-0 focus:outline focus:ring-0 focus:border-0 focus:border-none focus:border-b-2 outline-none shadow-md"
					>
						Reset
					</button>

					<button
						type="submit"
						onClick={(e) => handleDomainChange(e)}
						className=" bg-secondary border-secondary w-full border-[1px] rounded-md font-semibold px-3 py-1.5 flex items-center justify-center h-9 sm:h-full uppercase"
					>
						Register
					</button>
				</div>
			</div>
		</form>
  );
};

export default DomainList;
