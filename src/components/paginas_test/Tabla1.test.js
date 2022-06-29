import { render, screen } from '@testing-library/react';
import ComponenteTabla from '../paginas/Tabla1';

test('renders learn react link', () => {
  render(<ComponenteTabla />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
