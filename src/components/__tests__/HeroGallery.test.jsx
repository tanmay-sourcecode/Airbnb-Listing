import { render, screen } from '../../test-utils/render';
import userEvent from '@testing-library/user-event';
import HeroGallery from '../HeroGallery';

describe('HeroGallery Component', () => {
  it('renders the initial collage images and does not show the PhotoTourModal initially', () => {
    render(<HeroGallery />);

    // Check that the collage section is rendered
    const section = screen.getByRole('region', { name: /Photos of this place/i });
    expect(section).toBeInTheDocument();

    // Verify that the PhotoTourModal is not in the document
    const modal = screen.queryByRole('dialog', { name: /Photo tour/i });
    expect(modal).not.toBeInTheDocument();
  });

  it('opens the PhotoTourModal when a collage image is clicked', async () => {
    const user = userEvent.setup();
    render(<HeroGallery />);

    // Get the first image button in the collage by its alt text/accessible name
    const firstImageButton = screen.getAllByRole('button', {
      name: /Romantic Jacuzzi 1BHK Candolim | Terrace View/i,
    })[0];
    expect(firstImageButton).toBeInTheDocument();

    // Click the collage image button
    await user.click(firstImageButton);

    // Verify that the PhotoTourModal is now rendered and visible in the document
    const modal = screen.getByRole('dialog', { name: /Photo tour/i });
    expect(modal).toBeInTheDocument();

    // Verify modal header or some components of the tour modal are visible
    const tourHeading = screen.getByRole('heading', { name: /Photo tour/i });
    expect(tourHeading).toBeInTheDocument();
  });

  it('opens the PhotoTourModal when the "Show all photos" button is clicked', async () => {
    const user = userEvent.setup();
    render(<HeroGallery />);

    const showAllButton = screen.getByRole('button', { name: /Show all photos/i });
    expect(showAllButton).toBeInTheDocument();

    // Click the "Show all photos" button
    await user.click(showAllButton);

    // Verify that the PhotoTourModal opens
    const modal = screen.getByRole('dialog', { name: /Photo tour/i });
    expect(modal).toBeInTheDocument();
  });
});
