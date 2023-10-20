import { Injectable, NotFoundException } from '@nestjs/common';
import { Category } from './category.entity';
import { CreateCategoryDTO, UpdateCategoryDTO } from './category.dto';

@Injectable()
export class CategoryService {
  private categories: Category[] = []; // Replace with a database or storage solution

  getCategory(id: number): Category {
    const category = this.categories.find((cat) => cat.id === id);
    if (!category) {
      throw new NotFoundException('Category not found');
    }
    return category;
  }

  createCategory(createCategoryDTO: CreateCategoryDTO): Category {
    // Implement logic to create a new category
    const newCategory = new Category(); // Create a new Category entity
    // Populate newCategory with data from createCategoryDTO
    this.categories.push(newCategory); // Add to the collection or database
    return newCategory;
  }

  updateCategory(id: number, updateCategoryDTO: UpdateCategoryDTO): Category {
    const category = this.getCategory(id); // Retrieve the existing category
    // Implement logic to update the category using data from updateCategoryDTO
    return category;
  }

  deleteCategory(id: number) {
    const index = this.categories.findIndex((cat) => cat.id === id);
    if (index === -1) {
      throw new NotFoundException('Category not found');
    }
    this.categories.splice(index, 1); // Remove the category from the collection or database
  }
}

