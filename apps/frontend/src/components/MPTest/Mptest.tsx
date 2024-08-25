type ItemProps = {
    title: string;
    description: string;
    condition: string;
    price: number;
    imageUrl: string;
    altText: string;
  };
  
  const items: ItemProps[] = [
    {
      title: 'Laptop Motherboard',
      description: 'Used laptop motherboard in good condition.',
      condition: 'Good',
      price: 25,
      imageUrl: '/placeholder.svg',
      altText: 'E-Waste Item',
    },
    {
      title: 'Smartphone Battery',
      description: 'Refurbished smartphone battery, 80% capacity.',
      condition: 'Refurbished',
      price: 12,
      imageUrl: '/placeholder.svg',
      altText: 'E-Waste Item',
    },
    {
      title: 'Desktop RAM',
      description: 'Used desktop RAM, 8GB DDR4.',
      condition: 'Used',
      price: 20,
      imageUrl: '/placeholder.svg',
      altText: 'E-Waste Item',
    },
    {
      title: 'Printer Cartridge',
      description: 'Refurbished printer cartridge, compatible with most models.',
      condition: 'Refurbished',
      price: 15,
      imageUrl: '/placeholder.svg',
      altText: 'E-Waste Item',
    },
    {
      title: 'Keyboard',
      description: 'Used keyboard in good working condition.',
      condition: 'Used',
      price: 10,
      imageUrl: '/placeholder.svg',
      altText: 'E-Waste Item',
    },
    {
      title: 'Mouse',
      description: 'Refurbished wireless mouse, works great.',
      condition: 'Refurbished',
      price: 8,
      imageUrl: '/placeholder.svg',
      altText: 'E-Waste Item',
    },
    {
      title: 'Hard Drive',
      description: 'Used 1TB hard drive, tested and working.',
      condition: 'Used',
      price: 30,
      imageUrl: '/placeholder.svg',
      altText: 'E-Waste Item',
    },
    {
      title: 'Tablet Screen',
      description: 'Refurbished tablet screen, compatible with various models.',
      condition: 'Refurbished',
      price: 40,
      imageUrl: '/placeholder.svg',
      altText: 'E-Waste Item',
    },
  ];
  
  const Card: React.FC<ItemProps> = ({ title, description, condition, price, imageUrl, altText }) => (
    <div className="bg-card rounded-lg overflow-hidden shadow-lg">
      <img
        src={imageUrl}
        alt={altText}
        width={400}
        height={300}
        className="w-full h-48 object-cover"
        style={{ aspectRatio: "400/300", objectFit: "cover" }}
      />
      <div className="p-4">
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-2">{description}</p>
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-muted-foreground">Condition: {condition}</span>
          <span className="text-lg font-bold">${price}</span>
        </div>
        <button className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded">Add to Cart</button>
      </div>
    </div>
  );