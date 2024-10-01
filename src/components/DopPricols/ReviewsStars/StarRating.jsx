import React from 'react';
import style from './ReviewCard.module.css'; // Предполагается, что у вас есть css-модуль

const StarRating = ({ rating }) => {
  const maxStars = 5;
  
  return (
    <div className={style.stars}>
      {[...Array(maxStars)].map((_, index) => {
        const isFilled = index < rating;
        return (
          <span key={index} className={style.star}>
            {isFilled ? (
              <svg
                width="24"
                height="22"
                viewBox="0 0 24 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.4687 21.5C18.3109 21.5006 18.1568 21.4514 18.0286 21.3594L12 16.9887L5.97139 21.3594C5.84259 21.4528 5.68742 21.5028 5.52832 21.5022C5.36921 21.5017 5.21441 21.4505 5.08629 21.3561C4.95818 21.2618 4.86339 21.1291 4.81563 20.9774C4.76787 20.8256 4.76961 20.6626 4.82061 20.5119L7.17186 13.5476L1.07811 9.36873C0.946113 9.27832 0.846491 9.14806 0.793797 8.99699C0.741103 8.84593 0.7381 8.68197 0.785225 8.52907C0.83235 8.37618 0.927135 8.24236 1.05573 8.14717C1.18432 8.05198 1.33999 8.0004 1.49998 7.99998H9.0178L11.2865 1.01795C11.3354 0.867212 11.4308 0.735827 11.559 0.642643C11.6871 0.54946 11.8415 0.499268 12 0.499268C12.1584 0.499268 12.3128 0.54946 12.441 0.642643C12.5692 0.735827 12.6645 0.867212 12.7134 1.01795L14.9822 8.00233H22.5C22.6602 8.00225 22.8162 8.05346 22.9452 8.14847C23.0741 8.24348 23.1693 8.37729 23.2167 8.5303C23.2642 8.68331 23.2613 8.84749 23.2087 8.99878C23.1561 9.15008 23.0564 9.28055 22.9242 9.37108L16.8281 13.5476L19.178 20.51C19.216 20.6227 19.2267 20.7429 19.2092 20.8605C19.1917 20.9782 19.1464 21.09 19.0771 21.1868C19.0078 21.2835 18.9165 21.3623 18.8107 21.4168C18.7049 21.4713 18.5877 21.4998 18.4687 21.5Z"
                  fill="#FFC107"
                />
              </svg>
            ) : (
              <svg
                width="24"
                height="22"
                viewBox="0 0 24 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.4678 21L18.4668 21C18.4144 21.0002 18.3634 20.984 18.3207 20.9536C18.3205 20.9534 18.3203 20.9533 18.3201 20.9531L12.2935 16.5839L12 16.3712L11.7065 16.5839L5.67791 20.9545L5.67782 20.9546C5.63489 20.9858 5.58317 21.0024 5.53013 21.0022C5.4771 21.002 5.4255 20.985 5.38279 20.9535C5.34009 20.9221 5.30849 20.8779 5.29257 20.8273C5.27665 20.7767 5.27723 20.7223 5.29423 20.6721L5.29434 20.6718L7.64559 13.7076L7.76658 13.3492L7.45464 13.1353L1.36089 8.95638L1.36067 8.95623C1.31667 8.92609 1.28347 8.88267 1.2659 8.83232C1.24834 8.78196 1.24734 8.72731 1.26304 8.67634C1.27875 8.62538 1.31035 8.58077 1.35321 8.54904C1.39594 8.51742 1.44763 8.50023 1.50078 8.49998H9.0178H9.38106L9.49332 8.1545L11.7621 1.17247L11.7622 1.17216C11.7785 1.12192 11.8102 1.07812 11.853 1.04706C11.8957 1.016 11.9472 0.999268 12 0.999268C12.0528 0.999268 12.1043 1.016 12.147 1.04706C12.1897 1.07812 12.2215 1.12192 12.2378 1.17216L12.2379 1.17242L14.5066 8.1568L14.6189 8.50233H14.9822L22.5 8.50233L22.5002 8.50233C22.5536 8.5023 22.6056 8.51937 22.6486 8.55104C22.6916 8.58271 22.7233 8.62731 22.7391 8.67832C22.755 8.72932 22.754 8.78405 22.7365 8.83448C22.7189 8.88491 22.6857 8.9284 22.6416 8.95858L22.6416 8.9586L16.5455 13.1352L16.2334 13.349L16.3544 13.7075L18.7042 20.6699L18.7042 20.67C18.7169 20.7076 18.7205 20.7476 18.7147 20.7868C18.7088 20.8261 18.6937 20.8633 18.6706 20.8956C18.6475 20.9278 18.6171 20.9541 18.5818 20.9723C18.5466 20.9904 18.5075 20.9999 18.4678 21Z"
                  stroke="#FFC107"
                />
              </svg>
            )}
          </span>
        );
      })}
    </div>
  );
};

export default StarRating;
