import Category from '../models/category';
import Meal from '../models/meal';

export const CATEGORIES = [
    new Category('c1', 'American', '#F5D2D2'),
    new Category('c2', 'BBQ & Grilled', '#F8F7BA'),
    new Category('c3', 'Chinese Food', '#BDE3C3'),
    new Category('c4', 'Desserts', '#A3CCDA'),
    new Category('c5', 'Italian', '#FFC7A7'),
    new Category('c6', 'Mexican', '#B6CEB4'),
    new Category('c7', 'Seafood', '#FEE2AD'),
    new Category('c8', 'Sushi', '#D9E9CF'),
    new Category('c9', 'Thai Food', '#A3DC9A'),
    new Category('c10', 'Vegetarian', '#FFD6BA')
];

export const MEALS = [
    new Meal(
        'm1',
        ['c6'],
        'Chicken Tacos',
        'affordable',
        'simple',
        'https://cdn.pixabay.com/photo/2017/01/18/16/46/tacos-1989980_1280.jpg',
        25,
        [
            '500g Chicken Breast',
            '8 Corn Tortillas',
            '1 Lime',
            '2 Tomatoes',
            '1 Onion',
            'Cilantro',
            'Taco Seasoning',
            'Sour Cream',
            'Shredded Cheese'
        ],
        [
            'Season chicken with taco seasoning and cook in a pan until fully cooked.',
            'Shred the cooked chicken with two forks.',
            'Warm the tortillas in a dry pan for 30 seconds on each side.',
            'Dice tomatoes and onions, chop cilantro.',
            'Assemble tacos with chicken, vegetables, cheese, and sour cream.',
            'Squeeze lime juice over the top before serving.'
        ],
        false,
        false,
        false,
        true
    ),

    new Meal(
        'm2',
        ['c10'],
        'Quinoa Buddha Bowl',
        'affordable',
        'simple',
        'https://cdn.pixabay.com/photo/2017/06/01/18/46/cook-2364221_1280.jpg',
        30,
        [
            '200g Quinoa',
            '1 Sweet Potato',
            '1 Avocado',
            '100g Chickpeas',
            'Baby Spinach',
            'Tahini',
            'Lemon Juice',
            'Olive Oil',
            'Salt and Pepper'
        ],
        [
            'Cook quinoa according to package instructions.',
            'Cube sweet potato and roast at 200°C for 25 minutes.',
            'Drain and rinse chickpeas, season with spices and roast for 15 minutes.',
            'Make dressing by mixing tahini, lemon juice, and water until smooth.',
            'Arrange quinoa, sweet potato, chickpeas, spinach, and sliced avocado in a bowl.',
            'Drizzle with tahini dressing and serve.'
        ],
        true,
        true,
        true,
        true
    ),

    new Meal(
        'm3',
        ['c7'],
        'Garlic Butter Shrimp',
        'pricey',
        'simple',
        'https://cdn.pixabay.com/photo/2020/05/23/14/58/shrimp-5209798_1280.jpg',
        15,
        [
            '500g Large Shrimp',
            '4 Cloves Garlic',
            '100g Butter',
            'Fresh Parsley',
            'Lemon',
            'Red Pepper Flakes',
            'Salt and Pepper'
        ],
        [
            'Peel and devein shrimp, pat dry.',
            'Mince garlic finely.',
            'Melt butter in a large pan over medium heat.',
            'Add garlic and red pepper flakes, sauté for 1 minute.',
            'Add shrimp and cook for 2-3 minutes per side until pink.',
            'Squeeze lemon juice over shrimp, garnish with parsley, and serve.'
        ],
        false,
        false,
        false,
        true
    ),

    new Meal(
        'm4',
        ['c2'],
        'BBQ Ribs',
        'pricey',
        'challenging',
        'https://cdn.pixabay.com/photo/2016/06/29/04/39/ribs-1485630_1280.jpg',
        180,
        [
            '1.5kg Pork Ribs',
            '200ml BBQ Sauce',
            '2 Tablespoons Brown Sugar',
            '1 Tablespoon Paprika',
            '1 Teaspoon Garlic Powder',
            '1 Teaspoon Onion Powder',
            'Salt and Pepper',
            'Apple Cider Vinegar'
        ],
        [
            'Remove membrane from back of ribs.',
            'Mix brown sugar, paprika, garlic powder, onion powder, salt, and pepper for dry rub.',
            'Coat ribs generously with dry rub and let sit for 30 minutes.',
            'Wrap ribs in foil and bake at 150°C for 2.5 hours.',
            'Remove from oven, unwrap, and brush with BBQ sauce.',
            'Place under broiler or on grill for 5-10 minutes until caramelized.',
            'Let rest for 10 minutes before cutting and serving.'
        ],
        false,
        false,
        false,
        false
    ),

    new Meal(
        'm5',
        ['c5'],
        'Mac and Cheese',
        'affordable',
        'simple',
        'https://cdn.pixabay.com/photo/2020/06/08/16/49/pasta-5275534_1280.jpg',
        30,
        [
            '400g Elbow Macaroni',
            '60g Butter',
            '60g Flour',
            '500ml Milk',
            '300g Cheddar Cheese',
            '100g Mozzarella',
            'Salt and Pepper',
            'Breadcrumbs (optional)'
        ],
        [
            'Cook macaroni according to package directions, drain.',
            'In a large pot, melt butter over medium heat.',
            'Whisk in flour and cook for 1 minute.',
            'Gradually add milk, whisking constantly until smooth and thickened.',
            'Remove from heat and stir in shredded cheeses until melted.',
            'Add cooked macaroni and stir to coat.',
            'Optional: Transfer to baking dish, top with breadcrumbs, and bake at 180°C for 20 minutes.'
        ],
        true,
        false,
        false,
        false
    ),

    new Meal(
        'm6',
        ['c6', 'c2'],
        'Grilled Vegetable Wrap',
        'affordable',
        'simple',
        'https://cdn.pixabay.com/photo/2017/05/22/16/55/wrap-2334262_1280.jpg',
        25,
        [
            '2 Bell Peppers',
            '1 Zucchini',
            '1 Eggplant',
            '4 Whole Wheat Tortillas',
            'Hummus',
            'Mixed Greens',
            'Feta Cheese',
            'Olive Oil',
            'Balsamic Vinegar'
        ],
        [
            'Slice vegetables into strips.',
            'Brush with olive oil and grill until tender, about 10 minutes.',
            'Warm tortillas in a dry pan.',
            'Spread hummus on each tortilla.',
            'Layer grilled vegetables, mixed greens, and crumbled feta.',
            'Drizzle with balsamic vinegar, roll tightly, and cut in half.'
        ],
        true,
        true,
        true,
        true
    ),

    new Meal(
        'm7',
        ['c7'],
        'Chocolate Lava Cake',
        'affordable',
        'challenging',
        'https://cdn.pixabay.com/photo/2017/01/11/11/33/cake-1971552_1280.jpg',
        25,
        [
            '200g Dark Chocolate',
            '200g Butter',
            '4 Eggs',
            '200g Sugar',
            '100g Flour',
            'Vanilla Extract',
            'Powdered Sugar for dusting',
            'Butter for ramekins'
        ],
        [
            'Preheat oven to 200°C. Butter 6 ramekins.',
            'Melt chocolate and butter together in a double boiler.',
            'Beat eggs and sugar until thick and pale.',
            'Fold melted chocolate mixture into eggs.',
            'Gently fold in flour and vanilla.',
            'Pour into prepared ramekins, filling 3/4 full.',
            'Bake for 12-14 minutes until edges are set but center is soft.',
            'Let cool for 1 minute, invert onto plates, and dust with powdered sugar.'
        ],
        true,
        false,
        false,
        false
    ),

    new Meal(
        'm8',
        ['c8'],
        'Greek Moussaka',
        'pricey',
        'challenging',
        'https://cdn.pixabay.com/photo/2020/02/08/11/19/moussaka-4829088_1280.jpg',
        90,
        [
            '2 Large Eggplants',
            '500g Ground Lamb',
            '1 Onion',
            '2 Cloves Garlic',
            '400g Crushed Tomatoes',
            '100ml Red Wine',
            '500ml Béchamel Sauce',
            'Cinnamon',
            'Parmesan Cheese'
        ],
        [
            'Slice eggplants, salt them, and let sit for 30 minutes. Rinse and pat dry.',
            'Grill or bake eggplant slices until golden.',
            'Cook ground lamb with onion and garlic until browned.',
            'Add tomatoes, wine, cinnamon, and simmer for 20 minutes.',
            'Layer eggplant and meat sauce in a baking dish.',
            'Top with béchamel sauce and grated Parmesan.',
            'Bake at 180°C for 45 minutes until golden and bubbling.'
        ],
        false,
        false,
        false,
        false
    ),

    new Meal(
        'm9',
        ['c9', 'c1'],
        'Beef Burrito',
        'affordable',
        'simple',
        'https://cdn.pixabay.com/photo/2017/06/29/20/09/mexican-2456038_1280.jpg',
        30,
        [
            '400g Ground Beef',
            '4 Large Flour Tortillas',
            '200g Cooked Rice',
            '1 Can Black Beans',
            'Shredded Cheese',
            'Sour Cream',
            'Salsa',
            'Lettuce',
            'Taco Seasoning'
        ],
        [
            'Cook ground beef with taco seasoning until browned.',
            'Warm tortillas in microwave for 20 seconds.',
            'Drain and heat black beans.',
            'Layer rice, beef, beans, cheese, lettuce in center of each tortilla.',
            'Add sour cream and salsa to taste.',
            'Fold in sides, then roll tightly from bottom to top.',
            'Optional: Grill burrito seam-side down for 2 minutes to seal.'
        ],
        false,
        false,
        false,
        true
    ),

    new Meal(
        'm10',
        ['c10', 'c5'],
        'Creamy Tomato Soup',
        'affordable',
        'simple',
        'https://cdn.pixabay.com/photo/2017/02/16/15/16/tomato-soup-2071474_1280.jpg',
        35,
        [
            '1kg Fresh Tomatoes',
            '1 Onion',
            '3 Cloves Garlic',
            '500ml Vegetable Stock',
            '200ml Heavy Cream',
            'Fresh Basil',
            'Olive Oil',
            'Salt and Pepper'
        ],
        [
            'Dice onion and garlic, sauté in olive oil until soft.',
            'Roughly chop tomatoes and add to pot.',
            'Pour in vegetable stock and bring to boil.',
            'Reduce heat and simmer for 20 minutes.',
            'Blend soup until smooth using immersion blender.',
            'Stir in heavy cream and season with salt and pepper.',
            'Serve garnished with fresh basil leaves and a drizzle of cream.'
        ],
        true,
        true,
        true,
        true
    )
];
