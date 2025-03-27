import React from "react";
import { Separator } from "./separator";

// StarRating Component
interface StarRatingProps {
  rating: number; // e.g., 4.95
  maxRating?: number; // e.g., 5
}

const StarRating: React.FC<StarRatingProps> = ({ rating, maxRating = 5 }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating - fullStars >= 0.5;

  return (
    <div className="flex items-center mb-2">
      {[...Array(fullStars)].map((_, index) => (
        <svg
          key={index}
          className="w-4 h-4 text-yellow-300 me-1"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 22 20"
        >
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
        </svg>
      ))}
      {hasHalfStar && (
        <svg
          className="w-4 h-4 text-yellow-300 me-1"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 22 20"
        >
          <path d="M11 0l2.39 7.34h7.71l-6.24 4.53L16.14 20 11 15.47 5.86 20l1.26-8.13-6.24-4.53h7.71L11 0z" />
        </svg>
      )}
      {[...Array(maxRating - fullStars - (hasHalfStar ? 1 : 0))].map(
        (_, index) => (
          <svg
            key={index}
            className="w-4 h-4 me-1  text-gray-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
        )
      )}
      <p className="ms-1 text-sm font-medium text-gray-400">
        {rating.toFixed(2)}
      </p>
      <p className="ms-1 text-sm font-medium text-gray-400">
        out of
      </p>
      <p className="ms-1 text-sm font-medium text-gray-400">
        {maxRating}
      </p>
    </div>
  );
};

// RatingBreakdown Component
interface RatingBreakdownProps {
  rating: number; // e.g., 5
  percentage: number; // e.g., 70%
}

const RatingBreakdown: React.FC<RatingBreakdownProps> = ({
  rating,
  percentage,
}) => {
  return (
    <div className="flex items-center w-full gap-3">
      <div dir="ltr" className="flex gap-2 text-sm font-medium text-white">
        {rating}
        <svg
          className="w-4 h-4 text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 22 20"
        >
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
        </svg>
      </div>
      <div
        dir="ltr"
        className="h-2 w-[280px] rounded-full bg-[hsla(215,20%,65%,0.24)]"
      >
        <div
          className="h-2 bg-white rounded-full"
          style={{ width: `${percentage}%` }}
        />
      </div>
      <span className="text-base font-bold text-white">{percentage}%</span>
    </div>
  );
};
// OverallRating Component
interface OverallRatingProps {
  rating: number;
  totalRatings: number;
  breakdown: { rating: number; percentage: number }[];
}

const AdvancedRating: React.FC<OverallRatingProps> = ({
  rating,
  totalRatings,
  breakdown,
}) => {
  return (
    <div className="flex flex-col gap-6">
      <div className="text-[#979CA6] flex flex-col gap-[10px]">
        <h5 className="text-base font-medium">میانگین امتیاز</h5>
        <div className="flex items-center gap-2">
          <p className="text-2xl text-white">{rating}</p>
          <p className="text-sm font-medium">
            از <span className="text-base font-medium">۵</span> نمره
          </p>
          <Separator orientation="vertical" className="h-4" />
          <p className="text-base font-medium">
            {totalRatings} <span className="text-sm font-medium">رأی</span>
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-4 justify-center">
        {breakdown.map((item) => (
          <RatingBreakdown
            key={item.rating}
            rating={item.rating}
            percentage={item.percentage}
          />
        ))}
      </div>
    </div>
  );
};

export default AdvancedRating;
