import { render, screen } from '@testing-library/react';
import SuccessAlert from '../components/Alerts/SuccessAlert';

describe('Success alert component', () => {
  it("It checks whether bg-success class exists correctly",()=>{
    const { container } = render(<SuccessAlert />);
    expect(container.firstChild.classList.contains('bg-success')).toBe(true)

  }) 
});