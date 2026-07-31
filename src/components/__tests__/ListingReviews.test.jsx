import { render, screen } from '../../test-utils/render';
import userEvent from '@testing-library/user-event';
import ListingReviews from '../ListingReviews';

describe('ListingReviews Component', () => {
  it('renders all reviews initially', () => {
    render(<ListingReviews />);

    // Verify all names of reviewers from the mock data are present
    expect(screen.getByText('Amit')).toBeInTheDocument();
    expect(screen.getByText('Aheesh')).toBeInTheDocument();
    expect(screen.getByText('Samiksha')).toBeInTheDocument();
    expect(screen.getByText('Vedant')).toBeInTheDocument();
    expect(screen.getByText('Vaibhav S')).toBeInTheDocument();
    expect(screen.getByText('Mohd')).toBeInTheDocument();
  });

  it('filters reviews by category when clicking a category pill', async () => {
    const user = userEvent.setup();
    render(<ListingReviews />);

    // Query the Cleanliness category pill
    // The pill button text contains "Cleanliness" and the count "4"
    const cleanlinessPill = screen.getByRole('button', { name: /Cleanliness/i });
    expect(cleanlinessPill).toBeInTheDocument();

    // Click on the Cleanliness pill to filter
    await user.click(cleanlinessPill);

    // After filtering by "Cleanliness", Aheesh and Vedant should be visible (they have Cleanliness category)
    expect(screen.getByText('Aheesh')).toBeInTheDocument();
    expect(screen.getByText('Vedant')).toBeInTheDocument();

    // The other reviewers should NOT be visible
    expect(screen.queryByText('Amit')).not.toBeInTheDocument();
    expect(screen.queryByText('Samiksha')).not.toBeInTheDocument();
    expect(screen.queryByText('Vaibhav S')).not.toBeInTheDocument();
    expect(screen.queryByText('Mohd')).not.toBeInTheDocument();
  });

  it('removes the filter when clicking the active category pill again', async () => {
    const user = userEvent.setup();
    render(<ListingReviews />);

    const cleanlinessPill = screen.getByRole('button', { name: /Cleanliness/i });

    // Filter reviews
    await user.click(cleanlinessPill);
    expect(screen.queryByText('Amit')).not.toBeInTheDocument();

    // Click the active Cleanliness pill again to deactivate the filter
    await user.click(cleanlinessPill);

    // All reviews should be displayed again
    expect(screen.getByText('Amit')).toBeInTheDocument();
    expect(screen.getByText('Aheesh')).toBeInTheDocument();
    expect(screen.getByText('Samiksha')).toBeInTheDocument();
    expect(screen.getByText('Vedant')).toBeInTheDocument();
    expect(screen.getByText('Vaibhav S')).toBeInTheDocument();
    expect(screen.getByText('Mohd')).toBeInTheDocument();
  });

  it('filters reviews correctly when switching to another category pill', async () => {
    const user = userEvent.setup();
    render(<ListingReviews />);

    const cleanlinessPill = screen.getByRole('button', { name: /Cleanliness/i });
    const accuracyPill = screen.getByRole('button', { name: /Accuracy/i });

    // Click Cleanliness
    await user.click(cleanlinessPill);
    expect(screen.getByText('Aheesh')).toBeInTheDocument();
    expect(screen.getByText('Vedant')).toBeInTheDocument();
    expect(screen.queryByText('Mohd')).not.toBeInTheDocument();

    // Click Accuracy (Cleanliness filter toggles off and Accuracy toggles on)
    // Wait, in ListingReviews.jsx: 
    // onClick={() => setActivePill(activePill === pill.label ? null : pill.label)}
    // So clicking Accuracy while activePill is Cleanliness will change activePill to Accuracy.
    await user.click(accuracyPill);

    // Aheesh and Mohd should be visible (they have Accuracy category)
    expect(screen.getByText('Aheesh')).toBeInTheDocument();
    expect(screen.getByText('Mohd')).toBeInTheDocument();

    // Vedant should no longer be visible
    expect(screen.queryByText('Vedant')).not.toBeInTheDocument();
    expect(screen.queryByText('Amit')).not.toBeInTheDocument();
  });
});
