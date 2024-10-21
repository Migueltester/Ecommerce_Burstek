/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
const products = [
    {
      id: 1,
      name: 'Cafe 1',
      href: '',
      imageSrc: '/cafe1.jpg',
      imageAlt: "Imagen del Cafe 1.",
      price: '$10',
      color: 'Marrón Claro',
    },
    {
      id: 2,
      name: 'Cafe 2',
      href: '#',
      imageSrc: '/cafe2.jpg',
      imageAlt: "Imagen del Cafe 2.",
      price: '$12',
      color: 'Marrón Oscuro',
    },
    {
      id: 3,
      name: 'Cafe 3',
      href: '#',
      imageSrc: '/cafe3.jpg',
      imageAlt: "Imagen del Cafe 3.",
      price: '$15',
      color: 'Marrón Medio',
    }
  ];
  
  export default function Products() {
    return (
      <div className="bg-white shadow dark:bg-gray-900">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Productos de café
          </h2>
  
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    alt={product.imageAlt}
                    src={product.imageSrc}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700 dark:text-gray-300">
                      <a href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                      {product.color}
                    </p>
                  </div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    {product.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  