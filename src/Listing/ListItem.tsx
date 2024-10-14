import React from 'react';

//TypeScript 
interface Item {
  listing_id: number;
  url: string;
  MainImage?: {
    url_570xN?: string;
  };
  title: string;
  currency_code: string;
  price: string;
  quantity: number;
}

// Пропс для Listing
interface ListingProps {
  items: Item[];
}

// Функция для форматирования цены 
function formatPrice(price: string, currency_code: string): string {
  switch (currency_code) {
    case 'USD':
      return `$${price}`;
    case 'EUR':
      return `€${price}`;
    default:
      return `${price} ${currency_code}`;
  }
}

// Функция для определения класса количества
function getQuantityClass(quantity: number) {
  if (quantity <= 10) {
    return 'level-low';
  } else if (quantity <= 20) {
    return 'level-medium';
  } else {
    return 'level-high';
  }
}

// Компонент Listing с использованием типов
const Listing: React.FC<ListingProps> = ({ items }) => {
  return (
    <div className="item-list">
      {items.map(item => (
        <div key={item.listing_id} className="item">
          <div className="item-image">
            <a href={item.url}>
              {item.MainImage && item.MainImage.url_570xN ? (
                <img src={item.MainImage.url_570xN} alt={item.title} />
              ) : (
                <img src="https://via.placeholder.com/150" alt="Placeholder" />
              )}
            </a>
          </div>
          <div className="item-details">
            <p className="item-title">
              {item.title? (
                item.title.length > 50 ? `${item.title.substring(0, 50)}…` : item.title
              ) : (
                'No title available'
              )}
            </p>
            <p className="item-price">{formatPrice(item.price, item.currency_code)}</p>
            <p className={`item-quantity ${getQuantityClass(item.quantity)}`}>
              {item.quantity} left
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Listing;
