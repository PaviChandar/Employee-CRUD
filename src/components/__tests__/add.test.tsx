import "@testing-library/jest-dom"
import { render } from "@testing-library/react"

import AddNewEmployee from "../admin/add"

test("testing add component", () => {
   
    const props = {
        addHandler: jest.fn(), 
        handleChange: jest.fn(), 
        stateValue: {id:0, name:'', age:0, city:'', salary:0 }, 
        errors: {id:0, name:'', age:0, city:'', salary:0 }
    }

    const { getByTestId } = render(<AddNewEmployee {...props} />)

    expect(getByTestId('add-id')).toBeInTheDocument()
    expect(getByTestId('add-id-error')).toBeInTheDocument()
    expect(getByTestId('add-name')).toBeInTheDocument()
    expect(getByTestId('add-name-error')).toBeInTheDocument()
    expect(getByTestId('add-age')).toBeInTheDocument()
    expect(getByTestId('add-age-error')).toBeInTheDocument()
    expect(getByTestId('add-city')).toBeInTheDocument()
    expect(getByTestId('add-city-error')).toBeInTheDocument()
    expect(getByTestId('add-salary')).toBeInTheDocument()
    expect(getByTestId('add-salary-error')).toBeInTheDocument()
    expect(getByTestId('add-button')).toBeInTheDocument()
    expect(getByTestId('add-back-button')).toBeInTheDocument()
})