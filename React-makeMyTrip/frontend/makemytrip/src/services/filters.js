import axios from "axios";

export const getFilters = async () => {
  const filters = await axios.get(
    "https://f6219402-b819-4a26-a094-d328462092b8.mock.pstmn.io/filters/filter-list"
  );
  return filters.data;
};

export const getHotelsByFilters = async () => {
  const hotelDetails = await axios.get(
    "https://f6219402-b819-4a26-a094-d328462092b8.mock.pstmn.io/hotels/hotel-listings?checkIn=2022-09-25&checkOut=2022-09-27&starCategory=5"
  );
  console.log(hotelDetails.data);
};
