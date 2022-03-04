import React from 'react';
import CategoryCard from './CategoryCard';
import { categories } from '../categories';

function CategoriesComponent() {
    const alphabeticalCategories = categories.sort((a, b) => a.name.localeCompare(b.name)).filter(category => category.isArchived === false)

    return (
        <div className="row d-flex justify-content-center" data-testid="categories-component">
            {alphabeticalCategories.map((category) => {
                if(category.parentNoteCategoryId !== null || category.isArchived) return(false)

                return (
                    <CategoryCard key={category.id} category={category}/>
                )
            })}
        </div>
    )
}
export default CategoriesComponent;






