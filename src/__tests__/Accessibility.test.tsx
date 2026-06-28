import { render } from '@testing-library/react';
import { axe } from 'vitest-axe';
import 'vitest-axe/extend-expect';
import App from '../App';

describe('Portfolio Ilaria Fruchi — Audit di Accessibilità', () => {
  it("dovrebbe renderizzare l'intera applicazione senza crash o eccezioni", () => {
    const { container } = render(<App />);
    expect(container).toBeInTheDocument();
  });

  it('dovrebbe superare i controlli automatici di accessibilità WCAG con vitest-axe', async () => {
    const { container } = render(<App />);
    const results = await axe(container);
    (expect(results) as any).toHaveNoViolations();
  });
});
