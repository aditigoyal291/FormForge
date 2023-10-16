export const maxDomainCount = 3;

export const semesterOptions = [
	{
		id: 1,
		htmlForLabel: 'semester1',
		value: 1,
		// name: 'semester',
	},
	{
		id: 2,
		htmlForLabel: 'semester2',
		value: 2,
		// name: 'semester',
	},
	{
		id: 3,
		htmlForLabel: 'semester3',
		value: 3,
		// name: 'semester',
	},
	{
		id: 4,
		htmlForLabel: 'semester4',
		value: 4,
		// name: 'semester',
	},
];

export const courseOptions = [
	{
		id: 1,
		htmlForLabel: 'course1',
		value: 'B.Tech CSE',
		// name: 'course',
	},
	{
		id: 2,
		htmlForLabel: 'course2',
		value: 'B.Tech EEE',
		// name: 'course',
	},
	{
		id: 3,
		htmlForLabel: 'course3',
		value: 'B.Tech ECE',
		// name: 'course',
	},
	{
		id: 4,
		htmlForLabel: 'course4',
		value: 'M.Tech',
		// name: 'course',
	},
	{
		id: 5,
		htmlForLabel: 'course5',
		value: 'B.Design',
		// name: 'course',
	},
	{
		id: 6,
		htmlForLabel: 'course6',
		value: 'Psychology',
		// name: 'course',
	},
];

export const generalQuestions = [
	{
		id: 1,
		question: 'Enter Name',
		name: 'name',
		inputType: 'text',
		required: true,
		validationStyle: true,
		placeholder: 'John Doe',
	},
	{
		id: 2,
		question: 'Enter Email',
		name: 'email',
		required: true,
		inputType: 'email',
		placeholder: 'johndoe@gmail.com',
		pattern: '[a-z0-9._%+-]@[a-z0-9.-]+.[a-z]{2,}$',
		validationStyle: true,
	},
	{
		id: 3,
		question: 'Enter PRN',
		required: true,
		name: 'prn',
		inputType: 'text',
		minLength: 13,
		pattern: '^(pes1202|PES1202)(2|3)[0-9]{5}$',
		maxLength: 13,
		minLength: 13,
		placeholder: 'PES1202[2/3]XXXXX',
		validationStyle: true,
	},
	{
		id: 4,
		question: 'Enter Phone Number',
		required: true,
		name: 'phone',
		inputType: 'tel',
		placeholder: '9400000000',
		pattern: '[6-9]{1}[0-9]{9}',
		validationStyle: true,
	},
	{
		id: 5,
		question: 'Enter Semester',
		required: true,
		name: 'semester',
		inputType: 'radio',
		options: semesterOptions,
	},
	{
		id: 6,
		question: 'Enter Course',
		required: true,
		name: 'course',
		inputType: 'radio',
		options: courseOptions,
	},
	{
		id: 7,
		question: 'Tell something about yourself',
		required: true,
		name: 'bio',
		rows: 8,
		inputType: 'textarea',
		placeholder: 'Something about you',
	},
];

export const domains = [
	{
		domain: 'Web Development',
		name: 'webdev',
		type: 'tech',
		description:
			"The Web Development domain in our technical club is responsible for creating and maintaining web-based projects, enhancing the club's online presence, fostering technical expertise, collaborating across domains, promoting innovation, and building a sense of community. Members can expect to learn, code, manage projects, and develop valuable skills for future careers while having fun and staying creative in the dynamic world of web development. Once someone becomes a part of the domain they will be trained and after that we will start working on project, that can be of some value for them and for their resume",
	},
	{
		domain: 'App Development',
		name: 'appdev',
		type: 'tech',
		description:
			'For people who enjoy development in general and love to build real world projects.',
	},
	{
		domain: 'AI & ML',
		name: 'aiml',
		type: 'tech',
		description: 'Domain desc',
	},
	{
		domain: 'CP',
		name: 'cp',
		type: 'tech',
		description: 'Domain desc',
	},
	{
		domain: 'Logistics',
		name: 'logistics',
		type: 'nonTech',
		description: 'Domain desc',
	},
	{
		domain: 'Event Management',
		name: 'evm',
		type: 'nonTech',
		description:
			"Our mission is to create remarkable and impactful events that leave a lasting impression. Whether it's a hackathon that pushes the boundaries of technology, a workshop that empowers individuals with new skills, or a networking event that fosters collaboration and creativity, we are the driving force behind it all. You will be expected to have good organisational and communication skills to be able to work in the team and decide on the flow and execution of any event. Afterall, a well-planned and successful event doesn't happen by accident.",
	},
	{
		domain: 'Content',
		name: 'content',
		type: 'nonTech',
		description:
			"Content is all about creative writing; writing eye-catching content in ways to attract your audience and make them interested in our events. We mainly write for social media posts, WhatsApp messages and PESU notifications so if you decide to join the content team, this is what you'll be writing for.",
	},
	{
		domain: 'Operations',
		name: 'operation',
		type: 'nonTech',
		description: 'Domain desc',
	},
	{
		domain: 'Marketing',
		name: 'marketing',
		type: 'nonTech',
		description: 'Domain desc',
	},
	{
		domain: 'Campaigning',
		name: 'campaigning',
		type: 'nonTech',
		description:
			'A vital component of Nexus, responsible for spreading the word, engaging the community, and creating a buzz around our events, contests, and hackathons. It’s a bridge connecting our club to the world, ensuring that our initiatives reach every enthusiastic student in the university.',
	},
	{
		domain: 'Public Relations',
		name: 'pr',
		type: 'nonTech',
		description: 'Domain desc',
	},
	{
		domain: 'Sponsorship',
		name: 'sponsor',
		type: 'nonTech',
		description:
			'Sponsorship is one of the most exciting domains in which you have to pitch and market your event to brands and companies and show how your event will bring value to them and in return you try to get support in financial and other forms from the companies.',
	},
	{
		domain: 'Design',
		name: 'design',
		type: 'nonTech',
		description:
			"Design is the key to effective communication. It is in the designer's hand how people perceive about things around them. The design domain of the Nexus club aims to aesthetically communicate the ideas and information about the happenings and the events of the club.",
	},
];
