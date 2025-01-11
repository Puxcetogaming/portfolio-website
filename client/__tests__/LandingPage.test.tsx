import { render, screen } from '@testing-library/react';
import LandingPage from '../src/app/page';


describe('LandingPage', () => {

    it('renders hero text',  () => {
        render(<LandingPage />);
        expect(screen.getByText('Iliyan Slavchov')).toBeInTheDocument();
    });
});