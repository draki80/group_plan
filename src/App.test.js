import React from 'react'
import { render} from '@testing-library/react'
import App from './App'
import CategoriesComponent from './components/CategoriesComponent'
import TitleComponent from './components/TitleComponent'
import { plan } from './plan'
import { categories } from './categories'
import { notes } from './notes'

it('App renders correctly', () => {
  const { getByTestId } = render(<App />);

  expect(getByTestId('container')).toBeTruthy();
  expect(getByTestId('title-component')).toBeTruthy();
  expect(getByTestId('categories-component')).toBeTruthy();
});

it('Title renders correctly', () => {
  const { getByTestId } = render(<TitleComponent />);
  expect(getByTestId('title-component')).toHaveTextContent(plan.name)
});

it('Categories are rendered correctly', () => {
  const { getByTestId } = render(<CategoriesComponent />);
  expect(getByTestId('category-card-' + categories[0].id)).toBeTruthy()
  expect(getByTestId('category-card-' + categories[0].id)).toHaveTextContent(categories[0].name)
});

it('Notes are rendered correctly', () => {
  const { getByTestId } = render(<CategoriesComponent />);
  expect(getByTestId('category-card-' + categories[0].id)).toHaveTextContent(notes[0].content)
});