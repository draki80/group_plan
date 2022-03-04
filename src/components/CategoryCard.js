import React from 'react';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types'
import { notes } from '../notes';
import { categories } from '../categories';

function CategoryCard({category}) {
  const categoryNotes = notes.filter(note => note.categoryId === category.id).sort((a, b) => new Date(b.dateCreated) - new Date(a.dateCreated))
  const subcategories = categories.filter(currentCategory => category.id === currentCategory.parentNoteCategoryId)

  return(
    <div className="col mt-3" data-testid={`category-card-${category.id}`}>
      <Card border="primary">
        <Card.Header>{category.name}</Card.Header>
        <Card.Body>
          <Card.Text></Card.Text>
          {categoryNotes.map(note => <Card.Text key={note.id}>{`(${note.dateCreated}) ${note.content}`}</Card.Text>)}
          {subcategories.map(subCategory => <CategoryCard key={`${subCategory.id} + ${Math.random}`} category={subCategory}/>)}
        </Card.Body>
      </Card>
    </div>
  );
}
CategoryCard.propTypes = {
  category: PropTypes.object
}

export default CategoryCard;