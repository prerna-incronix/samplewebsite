export const categories = [
    // {id:1, name: 'All'},
    {id:1, name: 'Men'},
    {id:2, name: 'Women'},
    {id:3, name: 'Unisex'}
];



export const products = [
    { 
        id: 1, 
        image: 'images/pic1.jpg', 
        name: 'Product1', 
        model: 'Model1', 
        category: 1,    // Men
        images: ['pic1.jpg', 'pic1.jpg', 'pic1.jpg'] // Array of image URLs
    } ,


    { id: 2, image: 'images/pic1.jpg', name: 'Product2', model: 'Model2', category: 1, images: ['pic1.jpg', 'pic1.jpg', 'pic1.jpg'] },    // Men
    { id: 3, image: 'images/pic1.jpg', name: 'Product3', model: 'Model3', category: 2, images: ['image_url_1_1', 'image_url_1_2', 'image_url_1_3'] },    // Women
    { id: 4, image: 'images/pic1.jpg', name: 'Product3', model: 'Model3', category: 2, images: ['image_url_1_1', 'image_url_1_2', 'image_url_1_3'] },    // Women
    { id: 5, image: 'images/pic1.jpg', name: 'Product3', model: 'Model3', category: 2, images: ['image_url_1_1', 'image_url_1_2', 'image_url_1_3'] },    // Women
    { id: 6, image: 'images/pic1.jpg', name: 'Product3', model: 'Model3', category: 3, images: ['image_url_1_1', 'image_url_1_2', 'image_url_1_3'] },    // Unisex
    { id: 7, image: 'images/pic1.jpg', name: 'Product3', model: 'Model3', category: 3, images: ['image_url_1_1', 'image_url_1_2', 'image_url_1_3'] },    // Unisex
    { id: 8, image: 'images/pic1.jpg', name: 'Product3', model: 'Model3', category: 3, images: ['image_url_1_1', 'image_url_1_2', 'image_url_1_3'] },    // Unisex
    { id: 9, image: 'images/pic1.jpg', name: 'Product3', model: 'Model3', category: 3, images: ['image_url_1_1', 'image_url_1_2', 'image_url_1_3'] },    // Unisex
    // Add more products as needed
];

