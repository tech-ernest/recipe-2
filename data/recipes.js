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
    image: 'https://images.unsplash.com/photo-1571748982800-fa51082c2224?w=600&q=80',
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
    image: 'https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?w=600&q=80',
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

  /* ==================== HIGH PROTEIN BREAKFASTS ==================== */

  {
    id: 'steak-and-eggs',
    title: 'Steak & eggs on sourdough',
    category: 'breakfast',
    prepTime: 5,
    cookTime: 12,
    serves: 1,
    tags: [],
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80',
    ingredients: [{ group: null, items: [
      { id: 'sirloin-steak', name: 'Sirloin steak', amount: 200, unit: 'g', type: 'fresh', note: 'rump works too' },
      { id: 'eggs', name: 'Eggs', amount: 2, unit: '', type: 'fresh', note: '' },
      { id: 'sourdough-bread', name: 'Sourdough bread', amount: 2, unit: '', type: 'fresh', note: 'thick slices' },
      { id: 'butter', name: 'Butter', amount: 1, unit: 'tbsp', type: 'pantry', note: '' },
      { id: 'salt', name: 'Salt', amount: 0, unit: '', type: 'pantry', note: 'to taste' },
      { id: 'black-pepper', name: 'Cracked black pepper', amount: 0, unit: '', type: 'pantry', note: 'to taste' },
    ]}],
    steps: [
      'Take the steak out of the fridge 10 minutes before cooking to bring it to room temperature.',
      'Heat a cast-iron or heavy pan over high heat until smoking. Season the steak generously with salt and pepper.',
      'Cook 3–4 minutes each side for medium-rare. Rest on a board for 3–5 minutes.',
      'In the same pan, reduce to medium heat. Add butter and fry the eggs to your liking.',
      'Toast the sourdough. Slice steak against the grain and serve alongside the eggs and toast.',
    ],
    nutrition: { calories: 720, protein: 56, carbs: 32, fat: 28, fibre: 2, sugar: 2, satFat: 10, sodium: 520 },
    subs: [{ group: null, items: [
      { name: 'Sirloin steak', swap: '<em>Rump</em> or <em>ribeye</em> work equally well.' },
      { name: 'Sourdough', swap: '<em>Wholegrain</em> or <em>rye bread</em> for more fibre.' },
    ]}]
  },

  {
    id: 'ham-cheese-omelette',
    title: 'Ham & cheese omelette',
    category: 'breakfast',
    prepTime: 5,
    cookTime: 8,
    serves: 1,
    tags: ['gluten-free'],
    image: 'https://images.unsplash.com/photo-1510693206972-df098062cb71?w=600&q=80',
    ingredients: [{ group: null, items: [
      { id: 'eggs', name: 'Eggs', amount: 4, unit: '', type: 'fresh', note: '' },
      { id: 'sliced-ham', name: 'Sliced ham', amount: 100, unit: 'g', type: 'fresh', note: '' },
      { id: 'cheddar', name: 'Cheddar', amount: 50, unit: 'g', type: 'fresh', note: 'grated' },
      { id: 'butter', name: 'Butter', amount: 1, unit: 'tbsp', type: 'pantry', note: '' },
      { id: 'salt', name: 'Salt', amount: 0, unit: '', type: 'pantry', note: 'to taste' },
      { id: 'black-pepper', name: 'Cracked black pepper', amount: 0, unit: '', type: 'pantry', note: 'to taste' },
    ]}],
    steps: [
      'Crack eggs into a bowl, season with salt and pepper, and whisk well.',
      'Melt butter in a non-stick pan over medium heat. Pour in the eggs.',
      'As the edges set, gently pull them towards the centre with a spatula, letting raw egg flow underneath.',
      'When mostly set but still slightly glossy on top, lay ham and cheddar over one half.',
      'Fold the omelette in half, slide onto a plate and serve immediately.',
    ],
    nutrition: { calories: 660, protein: 50, carbs: 2, fat: 50, fibre: 0, sugar: 1, satFat: 22, sodium: 1000 },
    subs: [{ group: null, items: [
      { name: 'Ham', swap: '<em>Smoked salmon</em>, <em>bacon</em>, or <em>mushrooms</em> for vegetarian.' },
      { name: 'Cheddar', swap: '<em>Gruyère</em> or <em>Emmental</em> melt particularly well.' },
    ]}]
  },

  {
    id: 'smoked-salmon-bagel',
    title: 'Smoked salmon bagel with scrambled eggs',
    category: 'breakfast',
    prepTime: 5,
    cookTime: 5,
    serves: 1,
    tags: [],
    image: 'https://images.unsplash.com/photo-1743104750646-cfd7a48192ee?w=600&q=80',
    ingredients: [{ group: null, items: [
      { id: 'bagel', name: 'Bagel', amount: 1, unit: '', type: 'fresh', note: 'large, plain or sesame' },
      { id: 'smoked-salmon', name: 'Smoked salmon', amount: 100, unit: 'g', type: 'fresh', note: '' },
      { id: 'cream-cheese', name: 'Full-fat cream cheese', amount: 50, unit: 'g', type: 'fresh', note: '' },
      { id: 'eggs', name: 'Eggs', amount: 2, unit: '', type: 'fresh', note: '' },
      { id: 'butter', name: 'Butter', amount: 0.5, unit: 'tbsp', type: 'pantry', note: '' },
      { id: 'capers', name: 'Capers', amount: 1, unit: 'tbsp', type: 'pantry', note: '' },
      { id: 'red-onion', name: 'Red onion', amount: 0.25, unit: '', type: 'fresh', note: 'thinly sliced' },
      { id: 'lemon', name: 'Lemon', amount: 0.5, unit: '', type: 'fresh', note: 'to squeeze' },
    ]}],
    steps: [
      'Slice and toast the bagel.',
      'Whisk eggs with a pinch of salt. Melt butter in a pan over low heat and scramble slowly until just set.',
      'Spread cream cheese generously on both bagel halves.',
      'Top with smoked salmon, red onion, and capers.',
      'Add scrambled eggs on the side, squeeze lemon over the salmon and serve.',
    ],
    nutrition: { calories: 670, protein: 40, carbs: 54, fat: 28, fibre: 3, sugar: 8, satFat: 10, sodium: 1300 },
    subs: [{ group: null, items: [
      { name: 'Cream cheese', swap: '<em>Greek yogurt</em> mixed with dill for a lighter option.' },
      { name: 'Bagel', swap: '<em>Sourdough</em> or <em>wholegrain toast</em>.' },
      { name: 'Capers', swap: 'Leave out or swap for <em>pickled cucumber</em>.' },
    ]}]
  },

  {
    id: 'cottage-cheese-avocado-toast',
    title: 'Cottage cheese & avocado toast',
    category: 'breakfast',
    prepTime: 5,
    cookTime: 5,
    serves: 1,
    tags: ['vegetarian'],
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=600&q=80',
    ingredients: [{ group: null, items: [
      { id: 'wholegrain-bread', name: 'Wholegrain bread', amount: 2, unit: '', type: 'fresh', note: 'thick slices' },
      { id: 'cottage-cheese', name: 'Full-fat cottage cheese', amount: 150, unit: 'g', type: 'fresh', note: '' },
      { id: 'avocado', name: 'Avocado', amount: 0.5, unit: '', type: 'fresh', note: 'ripe' },
      { id: 'eggs', name: 'Eggs', amount: 2, unit: '', type: 'fresh', note: '' },
      { id: 'chilli-flakes', name: 'Chilli flakes', amount: 0, unit: '', type: 'pantry', note: 'to taste' },
      { id: 'lemon', name: 'Lemon', amount: 0.5, unit: '', type: 'fresh', note: 'to squeeze' },
      { id: 'salt', name: 'Salt', amount: 0, unit: '', type: 'pantry', note: 'to taste' },
    ]}],
    steps: [
      'Toast the bread until golden and crisp.',
      'Fry the eggs in a non-stick pan with a little butter or oil to your liking.',
      'Mash the avocado with a squeeze of lemon, salt, and pepper.',
      'Spread cottage cheese over the toast, then top with mashed avocado.',
      'Place fried eggs on top and finish with chilli flakes.',
    ],
    nutrition: { calories: 640, protein: 36, carbs: 48, fat: 30, fibre: 8, sugar: 4, satFat: 8, sodium: 680 },
    subs: [{ group: null, items: [
      { name: 'Cottage cheese', swap: '<em>Ricotta</em> or <em>cream cheese</em> for a richer flavour.' },
      { name: 'Wholegrain bread', swap: '<em>Sourdough</em> or <em>rye bread</em>.' },
      { name: 'Fried eggs', swap: '<em>Poached</em> or <em>scrambled</em> eggs work just as well.' },
    ]}]
  },

  /* ==================== HIGH PROTEIN LUNCHES ==================== */

  {
    id: 'chicken-rice-broccoli',
    title: 'Chicken, rice & broccoli bowl',
    category: 'lunch',
    prepTime: 10,
    cookTime: 25,
    serves: 1,
    tags: ['dairy-free', 'gluten-free'],
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&q=80',
    ingredients: [{ group: null, items: [
      { id: 'chicken-breast', name: 'Chicken breast', amount: 250, unit: 'g', type: 'fresh', note: '' },
      { id: 'brown-rice', name: 'Brown rice', amount: 80, unit: 'g', type: 'pantry', note: 'dry weight' },
      { id: 'broccoli', name: 'Broccoli', amount: 200, unit: 'g', type: 'fresh', note: 'cut into florets' },
      { id: 'olive-oil', name: 'Olive oil', amount: 1, unit: 'tbsp', type: 'pantry', note: '' },
      { id: 'soy-sauce', name: 'Soy sauce', amount: 2, unit: 'tbsp', type: 'pantry', note: '' },
      { id: 'garlic', name: 'Garlic', amount: 2, unit: 'cloves', type: 'fresh', note: 'minced' },
      { id: 'lemon', name: 'Lemon', amount: 0.5, unit: '', type: 'fresh', note: 'to squeeze' },
      { id: 'salt', name: 'Salt', amount: 0, unit: '', type: 'pantry', note: 'to taste' },
    ]}],
    steps: [
      'Cook brown rice according to packet instructions (about 25 min). Drain and keep warm.',
      'Season chicken breast with salt, pepper, and garlic. Heat olive oil in a pan over medium-high heat.',
      'Cook chicken 6–7 minutes each side until golden and cooked through. Rest 3 minutes, then slice.',
      'Steam or boil broccoli florets for 4–5 minutes until just tender.',
      'Arrange rice, chicken, and broccoli in a bowl. Drizzle with soy sauce and a squeeze of lemon.',
    ],
    nutrition: { calories: 750, protein: 68, carbs: 74, fat: 14, fibre: 6, sugar: 3, satFat: 2, sodium: 680 },
    subs: [{ group: null, items: [
      { name: 'Brown rice', swap: '<em>White rice</em> cooks faster; <em>quinoa</em> adds more protein.' },
      { name: 'Broccoli', swap: '<em>Green beans</em>, <em>asparagus</em>, or any green veg.' },
      { name: 'Soy sauce', swap: '<em>Tamari</em> to keep it strictly gluten-free.' },
    ]}]
  },

  {
    id: 'turkey-meatball-pasta',
    title: 'Turkey meatball pasta bake',
    category: 'lunch',
    prepTime: 15,
    cookTime: 30,
    serves: 2,
    tags: [],
    image: 'https://images.unsplash.com/photo-1677139599937-4ff6b3747353?w=600&q=80',
    ingredients: [{ group: null, items: [
      { id: 'turkey-mince', name: 'Turkey mince', amount: 500, unit: 'g', type: 'fresh', note: 'lean' },
      { id: 'pasta', name: 'Pasta', amount: 300, unit: 'g', type: 'pantry', note: 'dry — rigatoni or penne' },
      { id: 'passata', name: 'Passata', amount: 400, unit: 'ml', type: 'pantry', note: '' },
      { id: 'garlic', name: 'Garlic', amount: 3, unit: 'cloves', type: 'fresh', note: 'minced' },
      { id: 'parmesan', name: 'Parmesan', amount: 60, unit: 'g', type: 'fresh', note: 'grated' },
      { id: 'olive-oil', name: 'Olive oil', amount: 2, unit: 'tbsp', type: 'pantry', note: '' },
      { id: 'dried-oregano', name: 'Dried oregano', amount: 1, unit: 'tsp', type: 'pantry', note: '' },
      { id: 'salt', name: 'Salt', amount: 0, unit: '', type: 'pantry', note: 'to taste' },
      { id: 'black-pepper', name: 'Cracked black pepper', amount: 0, unit: '', type: 'pantry', note: 'to taste' },
    ]}],
    steps: [
      'Preheat oven to 200°C. Mix turkey mince with garlic, oregano, salt and pepper. Roll into golf ball-sized meatballs.',
      'Heat olive oil in an oven-safe pan. Brown meatballs 2–3 minutes each side, then pour passata over them.',
      'Transfer to the oven and bake 20 minutes until meatballs are cooked through.',
      'Meanwhile cook pasta in salted boiling water until al dente. Reserve a cup of pasta water.',
      'Toss pasta with the meatballs and sauce, adding pasta water to loosen. Serve topped with Parmesan.',
    ],
    nutrition: { calories: 800, protein: 52, carbs: 88, fat: 22, fibre: 5, sugar: 6, satFat: 6, sodium: 780 },
    subs: [{ group: null, items: [
      { name: 'Turkey mince', swap: '<em>Chicken mince</em> or <em>lean beef mince</em>.' },
      { name: 'Passata', swap: '<em>Canned chopped tomatoes</em> blended smooth.' },
      { name: 'Parmesan', swap: '<em>Pecorino</em> or <em>Grana Padano</em>.' },
    ]}]
  },

  {
    id: 'salmon-quinoa-bowl',
    title: 'Salmon & quinoa buddha bowl',
    category: 'lunch',
    prepTime: 10,
    cookTime: 20,
    serves: 1,
    tags: ['dairy-free', 'gluten-free'],
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=80',
    ingredients: [{ group: null, items: [
      { id: 'salmon-fillet', name: 'Salmon fillet', amount: 200, unit: 'g', type: 'fresh', note: 'skin on' },
      { id: 'quinoa', name: 'Quinoa', amount: 75, unit: 'g', type: 'pantry', note: 'dry weight' },
      { id: 'edamame', name: 'Edamame', amount: 80, unit: 'g', type: 'fresh', note: 'shelled, defrosted if frozen' },
      { id: 'sweet-potato', name: 'Sweet potato', amount: 100, unit: 'g', type: 'fresh', note: 'cubed' },
      { id: 'cucumber', name: 'Cucumber', amount: 0.5, unit: '', type: 'fresh', note: 'sliced' },
      { id: 'olive-oil', name: 'Olive oil', amount: 2, unit: 'tbsp', type: 'pantry', note: '' },
      { id: 'tahini', name: 'Tahini', amount: 2, unit: 'tbsp', type: 'pantry', note: '' },
      { id: 'lemon', name: 'Lemon', amount: 0.5, unit: '', type: 'fresh', note: '' },
      { id: 'salt', name: 'Salt', amount: 0, unit: '', type: 'pantry', note: 'to taste' },
    ]}],
    steps: [
      'Preheat oven to 200°C. Toss sweet potato in 1 tbsp olive oil and salt. Roast 20 min until tender.',
      'Rinse quinoa, add to 150ml cold water, bring to boil, cover and simmer 12–15 min until water is absorbed.',
      'Season salmon with salt and pepper. Heat remaining oil in a pan over medium-high. Cook skin-side down 4 min, flip and cook 2–3 min more.',
      'Mix tahini with lemon juice and a splash of water to a drizzleable dressing.',
      'Assemble bowl: quinoa base, roasted sweet potato, edamame, cucumber, and salmon. Drizzle with tahini dressing.',
    ],
    nutrition: { calories: 760, protein: 50, carbs: 60, fat: 30, fibre: 7, sugar: 5, satFat: 5, sodium: 380 },
    subs: [{ group: null, items: [
      { name: 'Quinoa', swap: '<em>Brown rice</em> or <em>couscous</em>.' },
      { name: 'Edamame', swap: '<em>Chickpeas</em> or <em>butter beans</em>.' },
      { name: 'Tahini dressing', swap: '<em>Soy sauce & sesame oil</em> dressing pairs great with salmon.' },
    ]}]
  },

  /* ==================== HIGH PROTEIN DINNERS ==================== */

  {
    id: 'chicken-thighs-roast',
    title: 'Roast chicken thighs with potatoes',
    category: 'dinner',
    prepTime: 10,
    cookTime: 45,
    serves: 2,
    tags: ['dairy-free', 'gluten-free'],
    image: 'https://images.unsplash.com/photo-1762154194962-cccc677be031?w=600&q=80',
    ingredients: [{ group: null, items: [
      { id: 'chicken-thighs', name: 'Chicken thighs', amount: 4, unit: '', type: 'fresh', note: 'bone-in, skin-on (~600g)' },
      { id: 'baby-potatoes', name: 'Baby potatoes', amount: 400, unit: 'g', type: 'fresh', note: 'halved' },
      { id: 'spinach', name: 'Spinach or kale', amount: 200, unit: 'g', type: 'fresh', note: '' },
      { id: 'garlic', name: 'Garlic', amount: 4, unit: 'cloves', type: 'fresh', note: '' },
      { id: 'rosemary', name: 'Fresh rosemary', amount: 3, unit: 'sprigs', type: 'fresh', note: '' },
      { id: 'olive-oil', name: 'Olive oil', amount: 2, unit: 'tbsp', type: 'pantry', note: '' },
      { id: 'lemon', name: 'Lemon', amount: 1, unit: '', type: 'fresh', note: '' },
      { id: 'salt', name: 'Salt', amount: 0, unit: '', type: 'pantry', note: 'to taste' },
      { id: 'black-pepper', name: 'Cracked black pepper', amount: 0, unit: '', type: 'pantry', note: 'to taste' },
    ]}],
    steps: [
      'Preheat oven to 220°C. Pat chicken thighs dry with paper towel. Season generously with salt and pepper.',
      'Toss potatoes with 1 tbsp olive oil, salt, rosemary, and garlic in a large roasting tray.',
      'Place chicken thighs skin-side up on top of the potatoes. Drizzle with remaining oil and squeeze over half the lemon.',
      'Roast 40–45 minutes until the skin is crisp and golden and the juices run clear.',
      'Wilt spinach or kale in a pan with a splash of water. Squeeze over remaining lemon and serve alongside.',
    ],
    nutrition: { calories: 980, protein: 55, carbs: 70, fat: 45, fibre: 6, sugar: 4, satFat: 12, sodium: 480 },
    subs: [{ group: null, items: [
      { name: 'Baby potatoes', swap: '<em>Sweet potato</em> or regular potatoes cut into chunks.' },
      { name: 'Rosemary', swap: '<em>Thyme</em> or <em>mixed dried herbs</em>.' },
      { name: 'Spinach/kale', swap: '<em>Broccoli</em> or <em>green beans</em> roasted alongside.' },
    ]}]
  },

  {
    id: 'pork-tenderloin-sweet-potato',
    title: 'Pork tenderloin with mashed sweet potato',
    category: 'dinner',
    prepTime: 10,
    cookTime: 35,
    serves: 2,
    tags: ['gluten-free'],
    image: 'https://images.unsplash.com/photo-1432139509613-5c4255815697?w=600&q=80',
    ingredients: [{ group: null, items: [
      { id: 'pork-tenderloin', name: 'Pork tenderloin', amount: 700, unit: 'g', type: 'fresh', note: '' },
      { id: 'sweet-potato', name: 'Sweet potato', amount: 800, unit: 'g', type: 'fresh', note: 'peeled and cubed' },
      { id: 'green-beans', name: 'Green beans', amount: 200, unit: 'g', type: 'fresh', note: 'trimmed' },
      { id: 'butter', name: 'Butter', amount: 2, unit: 'tbsp', type: 'pantry', note: 'for mash' },
      { id: 'olive-oil', name: 'Olive oil', amount: 2, unit: 'tbsp', type: 'pantry', note: '' },
      { id: 'garlic', name: 'Garlic', amount: 3, unit: 'cloves', type: 'fresh', note: 'minced' },
      { id: 'dijon-mustard', name: 'Dijon mustard', amount: 2, unit: 'tbsp', type: 'pantry', note: '' },
      { id: 'fresh-thyme', name: 'Fresh thyme', amount: 4, unit: 'sprigs', type: 'fresh', note: '' },
      { id: 'salt', name: 'Salt', amount: 0, unit: '', type: 'pantry', note: 'to taste' },
    ]}],
    steps: [
      'Preheat oven to 200°C. Mix garlic, mustard, thyme leaves, salt, and 1 tbsp olive oil. Rub all over the pork.',
      'Boil sweet potato in salted water 15 min until very tender. Drain and mash with butter. Season well.',
      'Heat remaining oil in an oven-safe pan over high heat. Sear pork on all sides for 3–4 min total.',
      'Transfer pan to oven and roast 20–25 min until internal temp reaches 65°C. Rest 5 min before slicing.',
      'Steam green beans for 4 min. Serve sliced pork over mash with green beans alongside.',
    ],
    nutrition: { calories: 920, protein: 55, carbs: 90, fat: 30, fibre: 10, sugar: 14, satFat: 10, sodium: 540 },
    subs: [{ group: null, items: [
      { name: 'Pork tenderloin', swap: '<em>Chicken breast</em> — reduce oven time to 20 min.' },
      { name: 'Sweet potato', swap: '<em>Regular mash</em> or <em>roasted butternut squash</em>.' },
      { name: 'Dijon mustard', swap: '<em>Wholegrain mustard</em> for a coarser texture.' },
    ]}]
  },

  {
    id: 'black-bean-shakshuka',
    title: 'Black bean & feta shakshuka',
    category: 'dinner',
    prepTime: 10,
    cookTime: 25,
    serves: 2,
    tags: ['vegetarian', 'gluten-free'],
    image: 'https://images.unsplash.com/photo-1520218576172-c1a2df3fa5fc?w=600&q=80',
    ingredients: [{ group: null, items: [
      { id: 'black-beans', name: 'Black beans', amount: 400, unit: 'g', type: 'pantry', note: '1 can, drained and rinsed' },
      { id: 'chopped-tomatoes', name: 'Chopped tomatoes', amount: 400, unit: 'g', type: 'pantry', note: '1 can' },
      { id: 'eggs', name: 'Eggs', amount: 4, unit: '', type: 'fresh', note: '' },
      { id: 'feta', name: 'Feta cheese', amount: 100, unit: 'g', type: 'fresh', note: 'crumbled' },
      { id: 'onion', name: 'Onion', amount: 1, unit: '', type: 'fresh', note: 'diced' },
      { id: 'garlic', name: 'Garlic', amount: 3, unit: 'cloves', type: 'fresh', note: 'minced' },
      { id: 'red-pepper', name: 'Red pepper', amount: 1, unit: '', type: 'fresh', note: 'diced' },
      { id: 'olive-oil', name: 'Olive oil', amount: 2, unit: 'tbsp', type: 'pantry', note: '' },
      { id: 'ground-cumin', name: 'Ground cumin', amount: 1, unit: 'tsp', type: 'pantry', note: '' },
      { id: 'smoked-paprika', name: 'Smoked paprika', amount: 1, unit: 'tsp', type: 'pantry', note: '' },
      { id: 'chilli-flakes', name: 'Chilli flakes', amount: 0.5, unit: 'tsp', type: 'pantry', note: 'to taste' },
      { id: 'salt', name: 'Salt', amount: 0, unit: '', type: 'pantry', note: 'to taste' },
    ]}],
    steps: [
      'Heat olive oil in a large wide pan over medium heat. Fry onion and pepper 5–6 minutes until softened.',
      'Add garlic, cumin, paprika, and chilli flakes. Cook 1 minute until fragrant.',
      'Pour in chopped tomatoes and black beans. Stir and simmer 10 minutes until the sauce thickens.',
      'Make 4 wells in the sauce and crack an egg into each. Cover and cook 6–8 minutes until whites are set but yolks still runny.',
      'Scatter feta over the top and serve directly from the pan.',
    ],
    nutrition: { calories: 900, protein: 46, carbs: 80, fat: 38, fibre: 16, sugar: 10, satFat: 12, sodium: 920 },
    subs: [{ group: null, items: [
      { name: 'Black beans', swap: '<em>Chickpeas</em> or <em>kidney beans</em>.' },
      { name: 'Feta', swap: '<em>Goat\'s cheese</em> or leave out for dairy-free.' },
      { name: 'Chilli flakes', swap: '<em>Fresh chilli</em> or omit for a milder version.' },
    ]}]
  },

  {
    id: 'salmon-pasta-aglio',
    title: 'Salmon pasta aglio e olio',
    category: 'dinner',
    prepTime: 5,
    cookTime: 20,
    serves: 2,
    tags: ['dairy-free'],
    image: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=600&q=80',
    ingredients: [{ group: null, items: [
      { id: 'salmon-fillet', name: 'Salmon fillets', amount: 400, unit: 'g', type: 'fresh', note: 'skin on, 2 fillets' },
      { id: 'pasta', name: 'Spaghetti or linguine', amount: 320, unit: 'g', type: 'pantry', note: 'dry weight' },
      { id: 'olive-oil', name: 'Olive oil', amount: 5, unit: 'tbsp', type: 'pantry', note: '' },
      { id: 'garlic', name: 'Garlic', amount: 5, unit: 'cloves', type: 'fresh', note: 'thinly sliced' },
      { id: 'chilli-flakes', name: 'Chilli flakes', amount: 0.5, unit: 'tsp', type: 'pantry', note: '' },
      { id: 'cherry-tomatoes', name: 'Cherry tomatoes', amount: 150, unit: 'g', type: 'fresh', note: 'halved' },
      { id: 'spinach', name: 'Baby spinach', amount: 100, unit: 'g', type: 'fresh', note: '' },
      { id: 'capers', name: 'Capers', amount: 2, unit: 'tbsp', type: 'pantry', note: '' },
      { id: 'lemon', name: 'Lemon', amount: 1, unit: '', type: 'fresh', note: '' },
      { id: 'salt', name: 'Salt', amount: 0, unit: '', type: 'pantry', note: 'to taste' },
    ]}],
    steps: [
      'Cook pasta in heavily salted boiling water until al dente. Reserve 200ml pasta water before draining.',
      'Season salmon with salt. Heat 1 tbsp olive oil over medium-high. Cook skin-side down 4–5 min, flip and cook 2 min more. Remove and flake into large pieces.',
      'In the same pan over low heat, add remaining olive oil, sliced garlic, and chilli flakes. Cook gently 2–3 min until garlic turns golden — do not burn.',
      'Add cherry tomatoes and capers. Cook 2 min, then add pasta with a splash of pasta water. Toss to coat.',
      'Fold in spinach and flaked salmon. Finish with lemon juice and serve immediately.',
    ],
    nutrition: { calories: 1000, protein: 50, carbs: 90, fat: 40, fibre: 5, sugar: 4, satFat: 7, sodium: 560 },
    subs: [{ group: null, items: [
      { name: 'Salmon', swap: '<em>Sea bass</em> or <em>cod</em> for a milder flavour.' },
      { name: 'Capers', swap: '<em>Green olives</em> chopped, or leave out.' },
      { name: 'Spaghetti', swap: '<em>Linguine</em> or <em>tagliatelle</em>.' },
    ]}]
  },

  /* ==================== HIGH PROTEIN SNACKS ==================== */

  {
    id: 'cottage-cheese-nut-bowl',
    title: 'Cottage cheese & nut bowl',
    category: 'snack',
    prepTime: 3,
    cookTime: 0,
    serves: 1,
    tags: ['vegetarian', 'gluten-free'],
    image: 'https://images.unsplash.com/photo-1573810655264-8d1e50f1592d?w=600&q=80',
    ingredients: [{ group: null, items: [
      { id: 'cottage-cheese', name: 'Full-fat cottage cheese', amount: 250, unit: 'g', type: 'fresh', note: '' },
      { id: 'almonds', name: 'Almonds', amount: 20, unit: 'g', type: 'pantry', note: '' },
      { id: 'pumpkin-seeds', name: 'Pumpkin seeds', amount: 10, unit: 'g', type: 'pantry', note: '' },
      { id: 'honey', name: 'Honey', amount: 1, unit: 'tbsp', type: 'pantry', note: '' },
      { id: 'cinnamon', name: 'Ground cinnamon', amount: 0, unit: '', type: 'pantry', note: 'pinch, optional' },
    ]}],
    steps: [
      'Spoon cottage cheese into a bowl.',
      'Scatter over the almonds and pumpkin seeds.',
      'Drizzle with honey and finish with a pinch of cinnamon if using.',
    ],
    nutrition: { calories: 360, protein: 30, carbs: 22, fat: 18, fibre: 2, sugar: 14, satFat: 4, sodium: 380 },
    subs: [{ group: null, items: [
      { name: 'Cottage cheese', swap: '<em>Skyr</em> for even more protein.' },
      { name: 'Almonds', swap: '<em>Walnuts</em>, <em>cashews</em>, or a mixed nut blend.' },
      { name: 'Honey', swap: '<em>Maple syrup</em> or <em>agave nectar</em>.' },
    ]}]
  },

  {
    id: 'smoked-salmon-rye-crackers',
    title: 'Smoked salmon & cream cheese rye crackers',
    category: 'snack',
    prepTime: 5,
    cookTime: 0,
    serves: 1,
    tags: [],
    image: 'https://images.unsplash.com/photo-1640282162499-8f7f50cb6129?w=600&q=80',
    ingredients: [{ group: null, items: [
      { id: 'smoked-salmon', name: 'Smoked salmon', amount: 80, unit: 'g', type: 'fresh', note: '' },
      { id: 'cream-cheese', name: 'Full-fat cream cheese', amount: 30, unit: 'g', type: 'fresh', note: '' },
      { id: 'rye-crackers', name: 'Rye crackers', amount: 5, unit: '', type: 'pantry', note: 'e.g. Ryvita' },
      { id: 'lemon', name: 'Lemon', amount: 0.5, unit: '', type: 'fresh', note: 'to squeeze' },
      { id: 'capers', name: 'Capers', amount: 1, unit: 'tsp', type: 'pantry', note: '' },
      { id: 'fresh-dill', name: 'Fresh dill', amount: 0, unit: '', type: 'fresh', note: 'optional, to garnish' },
    ]}],
    steps: [
      'Spread cream cheese evenly over each cracker.',
      'Top with smoked salmon and a few capers.',
      'Squeeze lemon over everything and garnish with dill if using.',
    ],
    nutrition: { calories: 340, protein: 24, carbs: 16, fat: 18, fibre: 3, sugar: 2, satFat: 6, sodium: 1100 },
    subs: [{ group: null, items: [
      { name: 'Cream cheese', swap: '<em>Greek yogurt</em> mixed with dill for fewer calories.' },
      { name: 'Rye crackers', swap: '<em>Oatcakes</em> or any wholegrain crispbread.' },
      { name: 'Capers', swap: '<em>Pickled red onion</em> or leave out.' },
    ]}]
  },

  {
    id: 'hard-boiled-eggs-crackers',
    title: 'Hard-boiled eggs with cheddar & crackers',
    category: 'snack',
    prepTime: 2,
    cookTime: 10,
    serves: 1,
    tags: ['vegetarian'],
    image: 'https://images.unsplash.com/photo-1680987398307-e1ae27a6ed67?w=600&q=80',
    ingredients: [{ group: null, items: [
      { id: 'eggs', name: 'Eggs', amount: 3, unit: '', type: 'fresh', note: '' },
      { id: 'cheddar', name: 'Mature cheddar', amount: 40, unit: 'g', type: 'fresh', note: '' },
      { id: 'wholegrain-crackers', name: 'Wholegrain crackers', amount: 6, unit: '', type: 'pantry', note: 'e.g. oatcakes' },
      { id: 'salt', name: 'Salt', amount: 0, unit: '', type: 'pantry', note: 'to taste' },
      { id: 'black-pepper', name: 'Cracked black pepper', amount: 0, unit: '', type: 'pantry', note: 'to taste' },
    ]}],
    steps: [
      'Lower eggs into boiling water and cook 9–10 minutes for hard-boiled yolks.',
      'Transfer to cold water for 2 minutes, then peel.',
      'Slice eggs and serve alongside cheddar and crackers. Season with salt and pepper.',
    ],
    nutrition: { calories: 380, protein: 22, carbs: 18, fat: 24, fibre: 2, sugar: 1, satFat: 10, sodium: 480 },
    subs: [{ group: null, items: [
      { name: 'Cheddar', swap: '<em>Gouda</em>, <em>Edam</em>, or any hard cheese.' },
      { name: 'Wholegrain crackers', swap: '<em>Rice cakes</em> to keep it lighter on carbs.' },
    ]}]
  }

]
