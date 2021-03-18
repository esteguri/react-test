import { render, screen } from '@testing-library/react';
import Product from './Product';

beforeEach(() => render(<Product/>));

describe("ProductPage", () => {
    it("must display a title", () => {
        expect(screen.queryByText(/Product/i)).toBeInTheDocument();
    })

    it("must display the product name PARRAFO", () => {
        expect(screen.queryByText(/parrafo/i)).toBeInTheDocument();
    })
})