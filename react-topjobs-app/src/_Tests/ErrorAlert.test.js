import { render, screen } from '@testing-library/react';
import ErrorAlert from '../components/Alerts/ErrorAlert';

describe('ErrorAlert component', () => {
  it("It checks whether bg-danger class exists correctly",()=>{
    const { container } = render(<ErrorAlert />);
    expect(container.firstChild.classList.contains('bg-danger')).toBe(true)

  }) 
});