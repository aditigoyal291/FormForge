export const questions = [
	{
		domain: 'webdev',
		domainFullName: 'Web Development',
		questions: [
			{
				id: 1,
				question: 'What is React?',
				name: 'solution1',
				inputType: 'text',
				required: true,
				placeholder: 'Enter your answer here',
			},
			{
				id: 2,
				question: 'What is React?',
				name: 'solution2',
				inputType: 'radio',
				required: true,
				options: [
					{
						id: 1,
						value: 'option 1',
						htmlForLabel: 'option1',
					},
					{
						id: 2,
						value: 'option 2',
						htmlForLabel: 'option2',
					},
					{
						id: 3,
						value: 'option 3',
						htmlForLabel: 'option3',
					},
					{
						id: 4,
						value: 'option 4',
						htmlForLabel: 'option4',
					},
				],
			},
			{
				id: 3,
				question: 'Advantages of Next?',
				name: 'solution3',
				inputType: 'checkbox',
				required: true,
				options: [
					{
						id: 1,
						value: 'option 2.1',
						htmlForLabel: 'option5',
					},
					{
						id: 2,
						value: 'option 2.2',
						htmlForLabel: 'option6',
					},
					{
						id: 3,
						value: 'option 2.3',
						htmlForLabel: 'option7',
					},
					{
						id: 4,
						value: 'option 2.4',
						htmlForLabel: 'option8',
					},
				],
			},
			{
				id: 4,
				question: 'What is React?',
				name: 'solution4',
				inputType: 'textarea',
				placeholder: 'Long text',
				required: true,
			},
			{
				id: 5,
				question: 'How excited are you?',
				name: 'solution5',
				inputType: 'range',
				placeholder: 'Long text',
				required: true,
				min: 0,
				max: 10,
			},
		],
	},
	{
		domain: 'appdev',
		domainFullName: 'App Development',
		questions: [
			{
				id: 1,
				question:
					'What is the primary programming language for Android app development?',
				name: 'solution1',
				inputType: 'text',
				required: true,
				placeholder: 'Enter your answer here',
			},
			{
				id: 2,
				question:
					'What is the primary programming language for Android app development?',
				name: 'solution2',
				inputType: 'text',
				required: true,
				placeholder: 'Enter your answer here',
			},
			{
				id: 3,
				question:
					'What is the primary programming language for Android app development?',
				name: 'solution3',
				inputType: 'text',
				required: true,
				placeholder: 'Enter your answer here',
			},
			{
				id: 4,
				question:
					'What is a key difference between native and hybrid app development?',
				name: 'solution4',
				inputType: 'textarea',
				placeholder: 'Long text',
				required: true,
			},
		],
	},
	{
		domain: 'aiml',
		domainFullName: 'Artificial Intelligence and Machine Learning',
		questions: [
			{
				id: 1,
				question:
					'Explain the concept of overfitting in machine learning.',
				name: 'solution1',
				inputType: 'textarea',
				placeholder: 'Long text',
				required: true,
			},
			{
				id: 2,
				question: 'What are the key components of a neural network?',
				name: 'solution2',
				inputType: 'text',
				required: true,
				placeholder: 'Enter your answer here',
			},
			{
				id: 3,
				question:
					'Explain the concept of overfitting in machine learning.',
				name: 'solution3',
				inputType: 'textarea',
				placeholder: 'Long text',
				required: true,
			},
			{
				id: 4,
				question: 'What are the key components of a neural network?',
				name: 'solution4',
				inputType: 'text',
				required: true,
				placeholder: 'Enter your answer here',

				required: true,
			},
		],
	},
	{
		domain: 'cp',
		domainFullName: 'Competitive Programming',
		questions: [
			{
				id: 1,
				question:
					'What is dynamic programming, and how is it used in competitive programming?',
				name: 'solution1',
				inputType: 'textarea',
				placeholder: 'Long text',
				required: true,
			},
			{
				id: 2,
				question:
					'Explain the concept of time complexity in the context of algorithm design.',
				name: 'solution2',
				inputType: 'textarea',
				placeholder: 'Long text',
				required: true,
			},
			{
				id: 3,
				question:
					'What is dynamic programming, and how is it used in competitive programming?',
				name: 'solution3',
				inputType: 'textarea',
				placeholder: 'Long text',
				required: true,
			},
			{
				id: 4,
				question:
					'Explain the concept of time complexity in the context of algorithm design.',
				name: 'solution4',
				inputType: 'textarea',
				placeholder: 'Long text',
				required: true,
			},
		],
	},
	{
		domain: 'logistics',
		domainFullName: 'Logistics',
		questions: [
			{
				id: 1,
				question:
					'What are the key challenges in supply chain logistics management?',
				name: 'solution1',
				inputType: 'textarea',
				placeholder: 'Long text',
				required: true,
			},
			{
				id: 2,
				question:
					'Explain the role of technology in optimizing logistics and transportation.',
				name: 'solution2',
				inputType: 'textarea',
				placeholder: 'Long text',
				required: true,
			},
			{
				id: 3,
				question:
					'What are the key challenges in supply chain logistics management?',
				name: 'solution3',
				inputType: 'textarea',
				placeholder: 'Long text',
				required: true,
			},
			{
				id: 4,
				question:
					'Explain the role of technology in optimizing logistics and transportation.',
				name: 'solution4',
				inputType: 'textarea',
				placeholder: 'Long text',
				required: true,
			},
		],
	},
	{
		domain: 'marketing',
		domainFullName: 'Marketing',
		questions: [
			{
				id: 1,
				question:
					'What is the marketing mix (4Ps) and how does it apply to product marketing?',
				name: 'solution1',
				inputType: 'textarea',
				placeholder: 'Long text',
				required: true,
			},
			{
				id: 2,
				question:
					'How do you measure the effectiveness of a digital marketing campaign?',
				name: 'solution2',
				inputType: 'textarea',
				placeholder: 'Long text',
				required: true,
			},
			{
				id: 3,
				question:
					'What is the marketing mix (4Ps) and how does it apply to product marketing?',
				name: 'solution3',
				inputType: 'textarea',
				placeholder: 'Long text',
				required: true,
			},
			{
				id: 4,
				question:
					'How do you measure the effectiveness of a digital marketing campaign?',
				name: 'solution4',
				inputType: 'textarea',
				placeholder: 'Long text',
				required: true,
			},
		],
	},
	{
		domain: 'evm',
		domainFullName: 'Event Management',
		questions: [
			{
				id: 1,
				question:
					'What are the essential steps in planning a large-scale event?',
				name: 'solution1',
				inputType: 'textarea',
				placeholder: 'Long text',
				required: true,
			},
			{
				id: 2,
				question:
					'How do you handle unexpected challenges during an event?',
				name: 'solution2',
				inputType: 'textarea',
				placeholder: 'Long text',
				required: true,
			},
			{
				id: 3,
				question:
					'What are the essential steps in planning a large-scale event?',
				name: 'solution3',
				inputType: 'textarea',
				placeholder: 'Long text',
				required: true,
			},
			{
				id: 4,
				question:
					'How do you handle unexpected challenges during an event?',
				name: 'solution4',
				inputType: 'textarea',
				placeholder: 'Long text',
				required: true,
			},
		],
	},
	{
		domain: 'design',
		domainFullName: 'Design',
		questions: [
			{
				id: 1,
				question: 'Explain the principles of responsive web design.',
				name: 'solution1',
				inputType: 'textarea',
				placeholder: 'Long text',
				required: true
			},
			{
				id: 2,
				question:
					'What is the importance of user experience (UX) in design?',
				name: 'solution2',
				inputType: 'textarea',
				placeholder: 'Long text',
				required: true
			},
			{
				id: 3,
				question: 'Explain the principles of responsive web design.',
				name: 'solution3',
				inputType: 'textarea',
				placeholder: 'Long text',
				required: true
			},
			{
				id: 4,
				question:
					'What is the importance of user experience (UX) in design?',
				name: 'solution4',
				inputType: 'textarea',
				placeholder: 'Long text',
				required: true
			},
		],
	},
	{
		domain: 'content',
		domainFullName: 'Content Creation',
		questions: [
			{
				id: 1,
				question:
					'How do you create engaging and SEO-friendly blog content?',
				name: 'solution1',
				inputType: 'textarea',
				placeholder: 'Long text',
				required: true,
			},
			{
				id: 2,
				question:
					'What are the key elements of a successful content marketing strategy?',
				name: 'solution2',
				inputType: 'textarea',
				placeholder: 'Long text',
				required: true,
			},
			{
				id: 3,
				question:
					'How do you create engaging and SEO-friendly blog content?',
				name: 'solution3',
				inputType: 'textarea',
				placeholder: 'Long text',
				required: true,
			},
			{
				id: 4,
				question:
					'What are the key elements of a successful content marketing strategy?',
				name: 'solution4',
				inputType: 'textarea',
				placeholder: 'Long text',
				required: true,
			},
		],
	},
	{
		domain: 'sponsor',
		domainFullName: 'Sponsorship',
		questions: [
			{
				id: 1,
				question:
					'What is the process of acquiring and managing event sponsorships?',
				name: 'solution1',
				inputType: 'textarea',
				placeholder: 'Long text',
				required: true,
			},
			{
				id: 2,
				question:
					'How do you create a compelling sponsorship proposal?',
				name: 'solution2',
				inputType: 'textarea',
				placeholder: 'Long text',
				required: true,
			},
			{
				id: 3,
				question:
					'What is the process of acquiring and managing event sponsorships?',
				name: 'solution3',
				inputType: 'textarea',
				placeholder: 'Long text'
			},
			{
				id: 4,
				question:
					'How do you create a compelling sponsorship proposal?',
				name: 'solution4',
				inputType: 'textarea',
				placeholder: 'Long text',
				required: true,
			},
		],
	},
	{
		domain: 'campaigning',
		domainFullName: 'Campaigning',
		questions: [
			{
				id: 1,
				question:
					'What are the key components of a successful political campaign strategy?',
				name: 'solution1',
				inputType: 'textarea',
				placeholder: 'Long text',
				required: true,
			},
			{
				id: 2,
				question:
					'How do you use social media in campaign outreach and mobilization?',
				name: 'solution2',
				inputType: 'textarea',
				placeholder: 'Long text',
				required: true,
			},
			{
				id: 3,
				question:
					'What are the key components of a successful political campaign strategy?',
				name: 'solution3',
				inputType: 'textarea',
				placeholder: 'Long text',
				required: true,
			},
			{
				id: 4,
				question:
					'How do you use social media in campaign outreach and mobilization?',
				name: 'solution4',
				inputType: 'textarea',
				placeholder: 'Long text',
				required: true,
			},
		],
	},
	{
		domain: 'pr',
		domainFullName: 'Public Relations',
		questions: [
			{
				id: 1,
				question:
					"What is the role of PR in shaping an organization's public image and reputation?",
				name: 'solution1',
				inputType: 'textarea',
				placeholder: 'Long text',
				required: true,
			},
			{
				id: 2,
				question:
					'How do you handle a crisis communication situation as a PR professional?',
				name: 'solution2',
				inputType: 'textarea',
				placeholder: 'Long text',
				required: true,
			},
			{
				id: 3,
				question:
					"What is the role of PR in shaping an organization's public image and reputation?",
				name: 'solution3',
				inputType: 'textarea',
				placeholder: 'Long text',
				required: true,
			},
			{
				id: 4,
				question:
					'How do you handle a crisis communication situation as a PR professional?',
				name: 'solution4',
				inputType: 'textarea',
				placeholder: 'Long text',
				required: true,
			},
		],
	},
];
