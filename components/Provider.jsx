'use client';

import * as React from 'react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

export function Provider({ children, ...props }) {
	return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
