/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		'./emails/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		screens: {
			phone: '426px',
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			'1.5xl': '1324px',
			'2xl': '1536px',
		},
		extend: {
			fontFamily: {
				inter: 'Inter, sans-serif',
				bricolage: 'Bricolage, sans-serif',
			},
			fontSize: {
				xxs: ['11px'],
				clamp: 'clamp(2.8rem, 10vw, 4rem)',
			},
			backgroundImage: {
				'gradient-linear': 'linear-gradient(#009efd, #006dfa)',
			},
			colors: {
				primary: 'hsl(var(--primary))',
				secondary: 'hsl(var(--secondary))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				'foreground-muted': 'hsl(var(--foreground-muted))',

				'message-warn-foreground':
					'hsl(var(--message-warn-foreground))',
				'message-warn-background':
					'hsl(var(--message-warn-background))',
				'message-info-foreground':
					'hsl(var(--message-info-foreground))',
				'message-info-background':
					'hsl(var(--message-info-background))',
				'message-success-foreground':
					'hsl(var(--message-success-foreground))',
				'message-success-background':
					'hsl(var(--message-success-background))',
				'message-error-foreground':
					'hsl(var(--message-error-foreground))',
				'message-error-background':
					'hsl(var(--message-error-background))',

				input: 'hsl(var(--input))',

				'modal-background': 'hsl(var(--modal-background))',
			},
			borderRadius: {
				'2xl': `calc(var(--radius) + 10px)`,
				xl: `calc(var(--radius) + 2px)`,
				lg: `var(--radius)`,
				md: `calc(var(--radius) - 2px)`,
				sm: 'calc(var(--radius) - 4px)',
			},
			keyframes: {
				shine: {
					'0%': {
						'background-size': '200% 200%',
						'background-position': 'right center',
					},
					'100%': {
						'background-size': '200% 200%',
						'background-position': 'left top',
					},
				},
			},
			animation: {
				shine: 'shine 2s linear',
			},
			backgroundSize: {
				'300%': '300%',
			},
		},
	},
	plugins: [require('tailwindcss-animate')],
};
