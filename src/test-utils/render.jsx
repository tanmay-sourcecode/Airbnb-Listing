import { render } from '@testing-library/react';

// Custom render function to wrap components with any required providers in the future
const customRender = (ui, options = {}) => {
  return render(ui, {
    // wrapper: ({ children }) => children, // add providers here if needed
    ...options,
  });
};

// Re-export everything from @testing-library/react
export * from '@testing-library/react';

// Override the render method
export { customRender as render };
