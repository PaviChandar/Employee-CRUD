import "@testing-library/jest-dom"
import { render } from "@testing-library/react"
import SignUpComponent from "../user/sign-up"

test("testing signup component", () => {

    const props = {
        handleSignUp: jest.fn(),
        handleChange: jest.fn(),
        someState: {email:'', username:'', password:''}
    }
    const { getByTestId } = render(<SignUpComponent {...props} />)

    expect(getByTestId('signup-email')).toBeInTheDocument()
    expect(getByTestId('signup-username')).toBeInTheDocument()
    expect(getByTestId('signup-password')).toBeInTheDocument()
    expect(getByTestId('signup-button')).toBeInTheDocument()
    expect(getByTestId('signup-login-button')).toBeInTheDocument()
})