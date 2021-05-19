import { render, screen } from '../utils/test-utils'
import Dashboard from './dashboard';

test('renders material button', () => {
    render(<Dashboard />, { initialState: { doctors: { value: [], status: 'idle' } } });
    const linkElement = screen.getByText(/Test Button/i);
    expect(linkElement).toBeInTheDocument();
});
