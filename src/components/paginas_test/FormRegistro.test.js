import { render, screen } from '@testing-library/react';
import RegistrarTurista from '../paginas/FormRegistro';

test('renders learn react link', () => {
  render(<RegistrarTurista />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
