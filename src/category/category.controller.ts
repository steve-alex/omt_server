import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryDTO } from './category.dto';

@Controller('categories')
export class CategoryController {
  constructor(private categoryService: CategoryService) {}

  @Get(':id')
  getCategory(@Param('id') id: number) {
    return this.categoryService.getCategory(id);
  }

  @Post()
  createCategory(@Body() createCategoryDTO: CategoryDTO) {
    return this.categoryService.createCategory(createCategoryDTO);
  }

  @Put(':id')
  updateCategory(@Param('id') id: number, @Body() updateCategoryDTO: CategoryDTO) {
    return this.categoryService.updateCategory(id, updateCategoryDTO);
  }

  @Delete(':id')
  deleteCategory(@Param('id') id: number) {
    return this.categoryService.deleteCategory(id);
  }
}