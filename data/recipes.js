const recipes = [

  /* ==================== BREAKFAST ==================== */

  {
    id: 'overnight-oats',
    title: 'Overnight oats',
    category: 'breakfast',
    prepTime: 5,
    cookTime: 0,
    serves: 1,
    tags: ['vegetarian', 'dairy-free'],
    image: 'https://images.unsplash.com/photo-1517673132405-a56a62b18caf?w=600&q=80',
    ingredients: [
      {
        group: null,
        items: [
          { id: 'rolled-oats', name: 'Rolled oats', amount: 80, unit: 'g', type: 'pantry', note: '' },
          { id: 'oat-milk', name: 'Oat milk', amount: 200, unit: 'ml', type: 'fresh', note: 'or any milk' },
          { id: 'chia-seeds', name: 'Chia seeds', amount: 1, unit: 'tbsp', type: 'pantry', note: '' },
          { id: 'honey', name: 'Honey', amount: 1, unit: 'tbsp', type: 'pantry', note: '' },
          { id: 'banana', name: 'Banana', amount: 1, unit: '', type: 'fresh', note: 'sliced, to serve' },
          { id: 'mixed-berries', name: 'Mixed berries', amount: 60, unit: 'g', type: 'fresh', note: 'frozen or fresh, to serve' },
        ]
      }
    ],
    steps: [
      'Add oats, chia seeds and honey to a jar or container.',
      'Pour over the oat milk and stir well to combine.',
      'Seal and refrigerate overnight (or at least 4 hours).',
      'In the morning, give it a stir. Add a splash more milk if too thick.',
      'Top with sliced banana and berries and serve cold.',
    ],
    nutrition: { calories: 420, protein: 12, carbs: 72, fat: 9, fibre: 10, sugar: 22, satFat: 1, sodium: 80 },
    subs: [
      { group: 'Bowl', items: [
        { name: 'Oat milk', swap: '<em>Any milk</em> works — dairy, almond, soy.' },
        { name: 'Honey', swap: '<em>Maple syrup</em> to keep it fully vegan.' },
        { name: 'Mixed berries', swap: 'Any fruit works — <em>mango</em>, <em>apple</em>, <em>peach</em>.' },
      ]}
    ]
  },

  {
    id: 'scrambled-eggs-toast',
    title: 'Scrambled eggs on toast',
    category: 'breakfast',
    prepTime: 5,
    cookTime: 5,
    serves: 2,
    tags: ['vegetarian'],
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=600&q=80',
    ingredients: [
      {
        group: null,
        items: [
          { id: 'eggs', name: 'Eggs', amount: 4, unit: '', type: 'fresh', note: '' },
          { id: 'butter', name: 'Butter', amount: 1, unit: 'tbsp', type: 'pantry', note: '' },
          { id: 'whole-milk', name: 'Whole milk', amount: 2, unit: 'tbsp', type: 'fresh', note: '' },
          { id: 'sourdough-bread', name: 'Sourdough bread', amount: 4, unit: '', type: 'fresh', note: 'thick slices' },
          { id: 'chives', name: 'Chives', amount: 1, unit: 'tbsp', type: 'fresh', note: 'finely chopped' },
          { id: 'black-pepper', name: 'Cracked black pepper', amount: 0, unit: '', type: 'pantry', note: 'to taste' },
          { id: 'salt', name: 'Salt', amount: 0, unit: '', type: 'pantry', note: 'to taste' },
        ]
      }
    ],
    steps: [
      'Crack eggs into a bowl, add milk and whisk. Season with salt and pepper.',
      'Toast the sourdough slices.',
      'Melt butter in a non-stick pan over low heat. Pour in the egg mixture.',
      'Stir slowly and continuously with a spatula, pulling the eggs from the edges. Remove from heat just before they look fully set — residual heat finishes them.',
      'Pile onto toast, scatter over chives and serve immediately.',
    ],
    nutrition: { calories: 380, protein: 22, carbs: 32, fat: 16, fibre: 2, sugar: 3, satFat: 7, sodium: 480 },
    subs: [
      { group: 'Bowl', items: [
        { name: 'Sourdough', swap: '<em>Any bread</em> works — wholegrain, rye, white.' },
        { name: 'Butter', swap: '<em>Olive oil</em> for dairy-free.' },
        { name: 'Chives', swap: '<em>Spring onions</em> or leave out.' },
      ]}
    ]
  },

  /* ==================== LUNCH ==================== */

  {
    id: 'chicken-caesar-wrap',
    title: 'Chicken Caesar wrap',
    category: 'lunch',
    prepTime: 10,
    cookTime: 15,
    serves: 2,
    tags: [],
    image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=600&q=80',
    ingredients: [
      {
        group: null,
        items: [
          { id: 'chicken-breast', name: 'Chicken breast', amount: 2, unit: '', type: 'fresh', note: '' },
          { id: 'olive-oil', name: 'Olive oil', amount: 1, unit: 'tbsp', type: 'pantry', note: '' },
          { id: 'large-tortillas', name: 'Large tortillas', amount: 2, unit: '', type: 'fresh', note: '' },
          { id: 'romaine-lettuce', name: 'Romaine lettuce', amount: 100, unit: 'g', type: 'fresh', note: 'roughly chopped' },
          { id: 'parmesan', name: 'Parmesan', amount: 30, unit: 'g', type: 'fresh', note: 'grated' },
          { id: 'caesar-dressing', name: 'Caesar dressing', amount: 3, unit: 'tbsp', type: 'pantry', note: '' },
          { id: 'black-pepper', name: 'Cracked black pepper', amount: 0, unit: '', type: 'pantry', note: 'to taste' },
        ]
      }
    ],
    steps: [
      'Slice chicken breasts in half horizontally to make thinner fillets. Season with salt and pepper.',
      'Heat olive oil in a frying pan over medium-high heat. Cook chicken 4-5 minutes each side until cooked through. Rest for 2 minutes then slice.',
      'Warm the tortillas in a dry pan for 30 seconds each side.',
      'Toss lettuce with Caesar dressing.',
      'Layer sliced chicken, dressed lettuce and parmesan onto each tortilla.',
      'Fold the sides in and roll tightly. Slice in half and serve.',
    ],
    nutrition: { calories: 520, protein: 42, carbs: 38, fat: 18, fibre: 3, sugar: 2, satFat: 5, sodium: 820 },
    subs: [
      { group: 'Wrap', items: [
        { name: 'Chicken breast', swap: '<em>Grilled prawns</em> or <em>halloumi</em> for a vegetarian option.' },
        { name: 'Caesar dressing', swap: '<em>Greek yoghurt</em> with lemon and garlic for a lighter version.' },
        { name: 'Parmesan', swap: '<em>Pecorino</em> or leave out for dairy-free.' },
      ]}
    ]
  },

  {
    id: 'lentil-soup',
    title: 'Red lentil soup',
    category: 'lunch',
    prepTime: 10,
    cookTime: 25,
    serves: 4,
    tags: ['vegetarian', 'dairy-free', 'gluten-free'],
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600&q=80',
    ingredients: [
      {
        group: null,
        items: [
          { id: 'red-lentils', name: 'Red lentils', amount: 200, unit: 'g', type: 'pantry', note: 'rinsed' },
          { id: 'olive-oil', name: 'Olive oil', amount: 2, unit: 'tbsp', type: 'pantry', note: '' },
          { id: 'onion', name: 'Onion', amount: 1, unit: '', type: 'fresh', note: 'diced' },
          { id: 'garlic-cloves', name: 'Garlic', amount: 3, unit: '', type: 'fresh', note: 'cloves, minced' },
          { id: 'carrots', name: 'Carrots', amount: 2, unit: '', type: 'fresh', note: 'diced' },
          { id: 'chopped-tomatoes', name: 'Chopped tomatoes', amount: 400, unit: 'g', type: 'pantry', note: '1 tin' },
          { id: 'vegetable-stock', name: 'Vegetable stock', amount: 1, unit: 'l', type: 'pantry', note: '' },
          { id: 'ground-cumin', name: 'Ground cumin', amount: 1, unit: 'tsp', type: 'pantry', note: '' },
          { id: 'smoked-paprika', name: 'Smoked paprika', amount: 1, unit: 'tsp', type: 'pantry', note: '' },
          { id: 'lemon', name: 'Lemon', amount: 1, unit: '', type: 'fresh', note: 'juice only' },
          { id: 'black-pepper', name: 'Cracked black pepper', amount: 0, unit: '', type: 'pantry', note: 'to taste' },
          { id: 'salt', name: 'Salt', amount: 0, unit: '', type: 'pantry', note: 'to taste' },
        ]
      }
    ],
    steps: [
      'Heat olive oil in a large saucepan over medium heat. Add onion and cook for 5 minutes until soft.',
      'Add garlic, cumin and paprika. Cook for 1 minute stirring constantly.',
      'Add carrots, lentils, chopped tomatoes and stock. Stir to combine.',
      'Bring to the boil then reduce to a simmer. Cook for 20-25 minutes until lentils are completely soft.',
      'Use a hand blender to partially blend — leave some texture or blend fully if you prefer smooth.',
      'Squeeze in the lemon juice, season and serve. Good with crusty bread.',
    ],
    nutrition: { calories: 290, protein: 16, carbs: 42, fat: 7, fibre: 12, sugar: 8, satFat: 1, sodium: 620 },
    subs: [
      { group: 'Soup', items: [
        { name: 'Red lentils', swap: '<em>Yellow lentils</em> work the same way.' },
        { name: 'Vegetable stock', swap: '<em>Chicken stock</em> if not keeping vegetarian.' },
        { name: 'Carrots', swap: '<em>Sweet potato</em> or <em>butternut squash</em> are great alternatives.' },
      ]}
    ]
  },

  /* ==================== DINNER ==================== */

  {
    id: 'teriyaki-beef-bowls',
    title: 'Teriyaki beef bowls',
    category: 'dinner',
    prepTime: 10,
    cookTime: 20,
    serves: 4,
    tags: ['gluten-free', 'dairy-free'],
    image: 'https://ournourishingtable.com/wp-content/uploads/2024/05/Teriyaki-Beef-Bowls-4.jpg',
    ingredients: [
      {
        group: 'Bowl',
        items: [
          { id: 'olive-oil', name: 'Olive oil', amount: 2, unit: 'tbsp', type: 'pantry', note: 'extra virgin' },
          { id: 'beef-mince', name: 'Beef mince', amount: 500, unit: 'g', type: 'fresh', note: '' },
          { id: 'jasmine-rice', name: 'Jasmine rice', amount: 370, unit: 'g', type: 'pantry', note: 'dry weight' },
          { id: 'broccoli', name: 'Broccoli', amount: 1, unit: '', type: 'fresh', note: 'head, cut into small florets' },
          { id: 'red-pepper', name: 'Red pepper', amount: 1, unit: '', type: 'fresh', note: 'diced small' },
          { id: 'spring-onions', name: 'Spring onions', amount: 2, unit: '', type: 'fresh', note: 'thinly sliced' },
          { id: 'sesame-seeds', name: 'Sesame seeds', amount: 1, unit: 'tbsp', type: 'pantry', note: '' },
          { id: 'edamame-beans', name: 'Edamame beans', amount: 150, unit: 'g', type: 'fresh', note: 'shelled, frozen is fine' },
          { id: 'mangetout', name: 'Mangetout', amount: 100, unit: 'g', type: 'fresh', note: 'thinly sliced' },
        ]
      },
      {
        group: 'Teriyaki sauce',
        items: [
          { id: 'tamari', name: 'Tamari', amount: 60, unit: 'ml', type: 'pantry', note: 'gluten-free soy sauce' },
          { id: 'honey', name: 'Honey', amount: 3, unit: 'tbsp', type: 'pantry', note: '' },
          { id: 'water', name: 'Water', amount: 60, unit: 'ml', type: 'pantry', note: '' },
          { id: 'ginger-paste', name: 'Ginger paste', amount: 0.5, unit: 'tsp', type: 'pantry', note: '' },
          { id: 'garlic-paste', name: 'Garlic paste', amount: 0.5, unit: 'tsp', type: 'pantry', note: '' },
          { id: 'cornflour', name: 'Cornflour', amount: 1, unit: 'tbsp', type: 'pantry', note: '' },
          { id: 'rice-wine-vinegar', name: 'Rice wine vinegar', amount: 1, unit: 'tbsp', type: 'pantry', note: '' },
          { id: 'black-pepper', name: 'Cracked black pepper', amount: 0, unit: '', type: 'pantry', note: 'to taste' },
        ]
      }
    ],
    steps: [
      'Rinse the rice 3 times in cold water, swishing with your hands. Drain, then add 590ml water. Bring to the boil, reduce to a simmer with the lid slightly ajar until nearly absorbed. Lid on fully, heat off — let it steam.',
      'Make the teriyaki sauce: whisk tamari, honey, water, ginger paste, garlic paste, pepper and rice wine vinegar in a small saucepan. Mix cornflour with a splash of the sauce until smooth, pour back in. Warm on low, whisking until glossy and slightly thickened. Set aside.',
      'Heat olive oil in a large frying pan on medium-high. Add beef mince and brown, breaking it up with a spatula.',
      'Once browned, add broccoli florets and diced red pepper. Pour over the teriyaki sauce and stir well to coat.',
      'Put edamame beans in a heatproof jug and cover with boiling water. Leave 30 seconds then drain.',
      'Divide rice between 4 bowls. Top with the teriyaki beef and veg, then scatter over the mangetout and edamame.',
      'Finish with sliced spring onions and sesame seeds. Serve immediately.',
    ],
    nutrition: { calories: 652, protein: 33, carbs: 51, fat: 36, fibre: 6, sugar: 18, satFat: 11, sodium: 927 },
    subs: [
      { group: 'Bowl', items: [
        { name: 'Beef mince', swap: 'Swap for <em>chicken mince</em> or <em>turkey mince</em>.' },
        { name: 'Jasmine rice', swap: 'Any short or medium grain white rice works. Or try <em>brown rice</em>, <em>quinoa</em>, or <em>cauliflower rice</em> for low-carb.' },
        { name: 'Red pepper', swap: 'Any colour pepper works. Or swap for <em>courgette</em>.' },
        { name: 'Mangetout', swap: 'Swap for <em>sliced cucumber</em> or <em>carrot ribbons</em>.' },
      ]},
      { group: 'Teriyaki sauce', items: [
        { name: 'Tamari', swap: '<em>Gluten-free soy sauce</em> or <em>coconut aminos</em>.' },
        { name: 'Honey', swap: '<em>Pure maple syrup</em> to keep it vegan.' },
      ]},
      { group: 'Optional extras', extras: true, items: [
        { text: 'Chilli flakes — sprinkle over before serving.' },
        { text: 'Sriracha mayo or kimchi mayo — drizzle on top.' },
      ]}
    ]
  },

  {
    id: 'spaghetti-bolognese',
    title: 'Spaghetti bolognese',
    category: 'dinner',
    prepTime: 10,
    cookTime: 40,
    serves: 4,
    tags: ['dairy-free'],
    image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=600&q=80',
    ingredients: [
      {
        group: null,
        items: [
          { id: 'beef-mince', name: 'Beef mince', amount: 500, unit: 'g', type: 'fresh', note: '' },
          { id: 'olive-oil', name: 'Olive oil', amount: 2, unit: 'tbsp', type: 'pantry', note: '' },
          { id: 'onion', name: 'Onion', amount: 1, unit: '', type: 'fresh', note: 'finely diced' },
          { id: 'garlic-cloves', name: 'Garlic', amount: 3, unit: '', type: 'fresh', note: 'cloves, minced' },
          { id: 'carrots', name: 'Carrots', amount: 1, unit: '', type: 'fresh', note: 'finely diced' },
          { id: 'chopped-tomatoes', name: 'Chopped tomatoes', amount: 400, unit: 'g', type: 'pantry', note: '1 tin' },
          { id: 'tomato-puree', name: 'Tomato puree', amount: 2, unit: 'tbsp', type: 'pantry', note: '' },
          { id: 'beef-stock', name: 'Beef stock', amount: 200, unit: 'ml', type: 'pantry', note: '' },
          { id: 'spaghetti', name: 'Spaghetti', amount: 320, unit: 'g', type: 'pantry', note: '' },
          { id: 'dried-oregano', name: 'Dried oregano', amount: 1, unit: 'tsp', type: 'pantry', note: '' },
          { id: 'black-pepper', name: 'Cracked black pepper', amount: 0, unit: '', type: 'pantry', note: 'to taste' },
          { id: 'salt', name: 'Salt', amount: 0, unit: '', type: 'pantry', note: 'to taste' },
        ]
      }
    ],
    steps: [
      'Heat olive oil in a large saucepan over medium heat. Add onion and carrot, cook 5 minutes until soft.',
      'Add garlic and cook 1 minute more.',
      'Turn heat to high, add beef mince and brown, breaking up with a spatula. Season well.',
      'Add tomato puree and stir for 1 minute. Add chopped tomatoes, stock and oregano.',
      'Reduce heat to low and simmer uncovered for 30 minutes, stirring occasionally.',
      'Cook spaghetti in well-salted boiling water according to packet instructions. Drain, reserving a cup of pasta water.',
      'Toss spaghetti with the bolognese, adding a splash of pasta water to loosen if needed. Serve immediately.',
    ],
    nutrition: { calories: 580, protein: 38, carbs: 65, fat: 16, fibre: 5, sugar: 9, satFat: 5, sodium: 740 },
    subs: [
      { group: null, items: [
        { name: 'Beef mince', swap: '<em>Pork mince</em>, <em>turkey mince</em>, or <em>lentils</em> for vegetarian.' },
        { name: 'Spaghetti', swap: 'Any pasta shape works — <em>tagliatelle</em> is traditional.' },
        { name: 'Beef stock', swap: '<em>Vegetable stock</em> works fine.' },
      ]}
    ]
  },

  /* ==================== SNACKS ==================== */

  {
    id: 'greek-yogurt-parfait',
    title: 'Greek yogurt parfait',
    category: 'snack',
    prepTime: 5,
    cookTime: 0,
    serves: 1,
    tags: ['vegetarian', 'gluten-free'],
    image: 'https://images.unsplash.com/photo-1488477181228-c84af5765a5e?w=600&q=80',
    ingredients: [
      {
        group: null,
        items: [
          { id: 'greek-yogurt', name: 'Greek yogurt', amount: 150, unit: 'g', type: 'fresh', note: 'full-fat or low-fat' },
          { id: 'granola', name: 'Granola', amount: 30, unit: 'g', type: 'pantry', note: '' },
          { id: 'mixed-berries', name: 'Mixed berries', amount: 60, unit: 'g', type: 'fresh', note: 'fresh or frozen, defrosted' },
          { id: 'honey', name: 'Honey', amount: 1, unit: 'tsp', type: 'pantry', note: '' },
        ]
      }
    ],
    steps: [
      'Spoon the Greek yogurt into a glass or bowl.',
      'Top with granola and mixed berries.',
      'Drizzle with honey and serve immediately.',
    ],
    nutrition: { calories: 220, protein: 16, carbs: 28, fat: 4, fibre: 2, sugar: 18, satFat: 1, sodium: 60 },
    subs: [
      { group: null, items: [
        { name: 'Greek yogurt', swap: '<em>Skyr</em> for extra protein, or any plain yogurt.' },
        { name: 'Honey', swap: '<em>Maple syrup</em> or agave to keep it vegan.' },
        { name: 'Granola', swap: '<em>Muesli</em> or crushed nuts for lower carbs.' },
      ]}
    ]
  },

  {
    id: 'apple-peanut-butter',
    title: 'Apple & peanut butter',
    category: 'snack',
    prepTime: 3,
    cookTime: 0,
    serves: 1,
    tags: ['vegetarian', 'dairy-free', 'gluten-free'],
    image: 'https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=600&q=80',
    ingredients: [
      {
        group: null,
        items: [
          { id: 'apple', name: 'Apple', amount: 1, unit: '', type: 'fresh', note: 'any variety' },
          { id: 'peanut-butter', name: 'Peanut butter', amount: 2, unit: 'tbsp', type: 'pantry', note: 'smooth or crunchy' },
          { id: 'cinnamon', name: 'Ground cinnamon', amount: 0, unit: '', type: 'pantry', note: 'optional, to serve' },
        ]
      }
    ],
    steps: [
      'Core the apple and slice into wedges.',
      'Spoon peanut butter into a small bowl for dipping.',
      'Dust with a pinch of cinnamon if using and serve.',
    ],
    nutrition: { calories: 215, protein: 6, carbs: 26, fat: 11, fibre: 4, sugar: 18, satFat: 2, sodium: 55 },
    subs: [
      { group: null, items: [
        { name: 'Peanut butter', swap: '<em>Almond butter</em> or <em>cashew butter</em> work equally well.' },
        { name: 'Apple', swap: '<em>Celery sticks</em> or <em>banana</em> for variety.' },
      ]}
    ]
  },

  {
    id: 'hummus-veggie-sticks',
    title: 'Hummus & veggie sticks',
    category: 'snack',
    prepTime: 5,
    cookTime: 0,
    serves: 2,
    tags: ['vegetarian', 'dairy-free', 'gluten-free'],
    image: 'https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?w=600&q=80',
    ingredients: [
      {
        group: null,
        items: [
          { id: 'hummus', name: 'Hummus', amount: 150, unit: 'g', type: 'pantry', note: 'shop-bought or homemade' },
          { id: 'carrots', name: 'Carrots', amount: 2, unit: '', type: 'fresh', note: 'cut into sticks' },
          { id: 'cucumber', name: 'Cucumber', amount: 0.5, unit: '', type: 'fresh', note: 'cut into sticks' },
          { id: 'red-pepper', name: 'Red pepper', amount: 1, unit: '', type: 'fresh', note: 'sliced' },
          { id: 'paprika', name: 'Smoked paprika', amount: 0, unit: '', type: 'pantry', note: 'to garnish' },
        ]
      }
    ],
    steps: [
      'Wash and cut the carrots, cucumber, and pepper into even sticks.',
      'Spoon the hummus into a bowl and dust with smoked paprika.',
      'Arrange the veggie sticks alongside and serve.',
    ],
    nutrition: { calories: 165, protein: 6, carbs: 18, fat: 8, fibre: 5, sugar: 5, satFat: 1, sodium: 290 },
    subs: [
      { group: null, items: [
        { name: 'Hummus', swap: '<em>Tzatziki</em> or <em>baba ganoush</em> as alternatives.' },
        { name: 'Veggie sticks', swap: 'Use any crunchy veg — <em>celery</em>, <em>radish</em>, <em>sugar snap peas</em>.' },
      ]}
    ]
  },

  {
    id: 'banana-rice-cakes',
    title: 'Banana & almond butter rice cakes',
    category: 'snack',
    prepTime: 3,
    cookTime: 0,
    serves: 1,
    tags: ['vegetarian', 'dairy-free', 'gluten-free'],
    image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=600&q=80',
    ingredients: [
      {
        group: null,
        items: [
          { id: 'rice-cakes', name: 'Rice cakes', amount: 2, unit: '', type: 'pantry', note: 'plain or lightly salted' },
          { id: 'almond-butter', name: 'Almond butter', amount: 2, unit: 'tbsp', type: 'pantry', note: '' },
          { id: 'banana', name: 'Banana', amount: 1, unit: '', type: 'fresh', note: 'sliced' },
          { id: 'cinnamon', name: 'Ground cinnamon', amount: 0, unit: '', type: 'pantry', note: 'optional' },
        ]
      }
    ],
    steps: [
      'Spread almond butter evenly over each rice cake.',
      'Top with banana slices.',
      'Finish with a pinch of cinnamon if using.',
    ],
    nutrition: { calories: 230, protein: 6, carbs: 34, fat: 9, fibre: 3, sugar: 14, satFat: 1, sodium: 75 },
    subs: [
      { group: null, items: [
        { name: 'Almond butter', swap: '<em>Peanut butter</em> or <em>sunflower seed butter</em> for nut-free.' },
        { name: 'Banana', swap: '<em>Sliced strawberries</em> or <em>mango</em> work great.' },
        { name: 'Rice cakes', swap: '<em>Oat cakes</em> or <em>crispbreads</em>.' },
      ]}
    ]
  },

]
