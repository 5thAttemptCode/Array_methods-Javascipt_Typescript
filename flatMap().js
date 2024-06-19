// flatMap() - Maps each element, then flattens the result by one level.
// Scenario: An e-commerce manages its product catalogue.  Each product has a category 
// and associated tags. For quick reference or indexing a flattened list of all tags across all categories is needed.


const products = [
  { category: 'Electronics', tags: ['gadget', 'tech', 'device'] },
  { category: 'Clothing', tags: ['apparel', 'fashion'] },
  { category: 'Watches', tags: ['accessoirs', 'jewelry'] }
]

const allTags = products.flatMap(product => product.tags)

console.log("All product tags:", allTags)

// Result
// "All product tags: ['gadget', 'tech', 'device', 'apparel', 'fashion', 'accessoirs', 'jewelry']"