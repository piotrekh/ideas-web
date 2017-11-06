import { Idea } from './idea.model';
import { User } from './user.model';
import { Category } from './category.model';
import { Subcategory } from './subcategory.model';

export class IdeaDetails extends Idea
{
    author: User;
    description: string;
    category: Category;
    subcategories: Subcategory[];
}