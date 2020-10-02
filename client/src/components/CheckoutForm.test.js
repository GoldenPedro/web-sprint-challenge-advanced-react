import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />) //Renders the form
    expect(screen.getByText(/checkout form/i)); //Finds the header by regEx text
});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm />)

    const firstNameInput = screen.getByLabelText(/first name/i);
    const lastNameInput = screen.getByLabelText(/last name/i);
    const addressInput = screen.getByLabelText(/address/i);
    const cityInput = screen.getByLabelText(/city/i);
    const stateInput = screen.getByLabelText(/state/i);
    const zipInput = screen.getByLabelText(/zip/i);
    const submitBtn = screen.getByRole('button', {name: /checkout/i});

    fireEvent.change(firstNameInput, {target: { value: 'Pedro' }});
    fireEvent.change(lastNameInput, {target: { value: 'Casuso' }});
    fireEvent.change(addressInput, {target: { value: '5555 Road rd.' }});
    fireEvent.change(cityInput, {target: { value: 'Memphis' }});
    fireEvent.change(stateInput, {target: { value: 'TN' }});
    fireEvent.change(zipInput, {target: { value: '12345' }});

    fireEvent.click(submitBtn);
    expect(screen.getByText(/Pedro/i))
    expect(screen.getByText(/Casuso/i))
    expect(screen.getByText(/555 Road rd./i))
    expect(screen.getByText(/Memphis/i))
    expect(screen.getByText(/12345/i))
    expect(screen.queryByText('successMessage'))
});
