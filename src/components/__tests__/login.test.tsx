import "@testing-library/jest-dom"
import { render } from "@testing-library/react"

import LoginComponent from "../user/login"

test("testing login component", () => {

    const props = {
        handleChange: jest.fn,
        loginHandler: jest.fn,
        someState: {email: 'damon@gmail.com', password: 'damon123'}, 
        errors:{email: 'damonn@gmail.com', password: 'damon12345'}
    }

    const { getByTestId } = render(<LoginComponent {...props} />);

    expect(getByTestId('login-email-input')).toBeInTheDocument()
    expect(getByTestId('login-password-input')).toBeInTheDocument()
    expect(getByTestId('email-error')).toBeInTheDocument()
    expect(getByTestId('password-error')).toBeInTheDocument()
    expect(getByTestId('login-h3-tag')).toBeInTheDocument()
    expect(getByTestId('signup-button')).toBeInTheDocument()
})