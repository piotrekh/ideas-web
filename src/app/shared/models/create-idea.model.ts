export class CreateIdea
{
    title: string;    
    description: string;    
    categoryId: string;  
    
    /**
     * Names of subcategories. Maximum 5.
     */
    subcategories: string[];
}