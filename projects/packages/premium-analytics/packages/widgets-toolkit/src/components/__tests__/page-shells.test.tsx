/**
 * External dependencies
 */
import { render, screen } from '@testing-library/react';
/**
 * Internal dependencies
 */
import { ReportPageShell } from '../report-page/report-page-shell';
import type { ReactNode } from 'react';

jest.mock( '@jetpack-premium-analytics/externals', () => ( {
	JetpackFooter: () => <footer>Jetpack footer</footer>,
} ) );

jest.mock( '@wordpress/admin-ui', () => ( {
	Page: ( { children }: { children?: ReactNode } ) => <div data-testid="page">{ children }</div>,
} ) );

describe.each( [ [ 'ReportPageShell', ReportPageShell ] ] )( '%s', ( _name, Shell ) => {
	it( 'ends the page with the Jetpack footer', () => {
		render(
			<Shell>
				<main>content</main>
			</Shell>
		);

		expect( screen.getByTestId( 'page' ) ).toHaveTextContent( /^content\s*Jetpack footer$/ );
	} );
} );
