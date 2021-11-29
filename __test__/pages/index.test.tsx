import { render } from '@testing-library/react';
import Home from '../../pages/index'

describe('Blog page', () => {
  it('renders blog page', async () => {
    const { getByTestId } = render(<Home />);

    const openingHtmlText =  getByTestId('index-content-opening-html')

		expect(openingHtmlText).toBeVisible()
  });
});
