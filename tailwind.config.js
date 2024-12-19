
tailwind.config = {
    theme: {
      screens: {
        'sm': '576px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '992px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1272px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1272px',
        // => @media (min-width: 1536px) { ... }
      },
      extend :
      {
        colors :
        {
            textdark : '#000000',
            textlight :'#F0EEED'
        }
      }
    }
  }