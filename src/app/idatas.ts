export interface Category {
   id?: number;
   name: string;
   shortText: string; 
   items?: Item[];
}

export interface Item {
    id: number;
    reference: string;
    name: string;
    description: string;
    image: string;
    price: number;
    ingredients: string;
    quantity: number;
    category?: Category;
}