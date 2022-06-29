import { render, screen } from '@testing-library/react';
import RegistrarServicioTercerizado from '../paginas/FormRegistroSer';

test('renders learn react link', () => {
  render(<RegistrarServicioTercerizado />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
