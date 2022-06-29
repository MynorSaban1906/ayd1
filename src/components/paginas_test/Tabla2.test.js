import { render, screen } from '@testing-library/react';
import ComponenteTabla2 from '../paginas/Tabla2';

test('renders learn react link', () => {
  render(<ComponenteTabla2 />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
