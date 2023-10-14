const DomainList = ({ setPage, setDomain, }) => {
  const domains = [
    {
      domain: "Web Development",
      name: "webdev",
      type: "tech",
      description:
        "The Web Development domain in our technical club is responsible for creating and maintaining web-based projects, enhancing the club's online presence, fostering technical expertise, collaborating across domains, promoting innovation, and building a sense of community. Members can expect to learn, code, manage projects, and develop valuable skills for future careers while having fun and staying creative in the dynamic world of web development. Once someone becomes a part of the domain they will be trained and after that we will start working on project, that can be of some value for them and for their resume",
    },
    {
      domain: "App Development",
      name: "appdev",
      type: "tech",
      description:
        "For people who enjoy development in general and love to build real world projects.",
    },
    {
      domain: "AI & ML",
      name: "aiml",
      type: "tech",
      description: "Domain desc",
    },
    {
      domain: "CP",
      name: "cp",
      type: "tech",
      description: "Domain desc",
    },
    {
      domain: "Logistics",
      name: "logistics",
      type: "nonTech",
      description: "Domain desc",
    },
    {
      domain: "Event Management",
      name: "evm",
      type: "nonTech",
      description:
        "Our mission is to create remarkable and impactful events that leave a lasting impression. Whether it's a hackathon that pushes the boundaries of technology, a workshop that empowers individuals with new skills, or a networking event that fosters collaboration and creativity, we are the driving force behind it all. You will be expected to have good organisational and communication skills to be able to work in the team and decide on the flow and execution of any event. Afterall, a well-planned and successful event doesn't happen by accident.",
    },
    {
      domain: "Content",
      name: "content",
      type: "nonTech",
      description:
        "Content is all about creative writing; writing eye-catching content in ways to attract your audience and make them interested in our events. We mainly write for social media posts, WhatsApp messages and PESU notifications so if you decide to join the content team, this is what you'll be writing for.",
    },
    {
      domain: "Operations",
      name: "operation",
      type: "nonTech",
      description: "Domain desc",
    },
    {
      domain: "Marketing",
      name: "marketing",
      type: "nonTech",
      description: "Domain desc",
    },
    {
      domain: "Campaigning",
      name: "campaigning",
      type: "nonTech",
      description:
        "A vital component of Nexus, responsible for spreading the word, engaging the community, and creating a buzz around our events, contests, and hackathons. It’s a bridge connecting our club to the world, ensuring that our initiatives reach every enthusiastic student in the university.",
    },
    {
      domain: "Public Relations",
      name: "pr",
      type: "nonTech",
      description: "Domain desc",
    },
    {
      domain: "Sponsorship",
      name: "sponsor",
      type: "nonTech",
      description:
        "Sponsorship is one of the most exciting domains in which you have to pitch and market your event to brands and companies and show how your event will bring value to them and in return you try to get support in financial and other forms from the companies.",
    },
    {
      domain: "Design",
      name: "design",
      type: "nonTech",
      description:
        "Design is the key to effective communication. It is in the designer's hand how people perceive about things around them. The design domain of the Nexus club aims to aesthetically communicate the ideas and information about the happenings and the events of the club.",
    },
  ];

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
									className="relative border-foreground/10 border-[1px] hover:bg-foreground/20 font-medium hover:shadow-lg bg-foreground/5 shadow-md cursor-pointer p-4 flex items-center justify-center rounded-md z-10 w-full"
								>
									<div className="flex flex-col gap-y-1 w-full p-2">
										<div className="flex gap-4 ">
											<h2 className="text-base font-semibold text-foreground">
												{domain.domain}
											</h2>
											<p className="foregroundspace-nowrap shadow-2xl h-fit px-3  rounded-md-xl outline-none bg-gradient-to-r from-secondary via-secondary/80 to-primary animate-gradient font-medium flex items-center justify-center text-xxs">
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
