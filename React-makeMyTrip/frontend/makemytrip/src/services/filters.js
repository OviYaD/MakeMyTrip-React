import axios from "axios";
import {filters } from "../utils/filterList"
import { HotelsDetail} from "../utils/HotelsDetail";
const {END_POINT} = process.env

export const getFilters = async () => {
  // const filters = await axios.get(
  //   `${END_POINTS}/filters/filter-list`
  // );
  // return filters.data;
  return filters;
};

export const fetchRulesList = async() => {
  // const rules = await axios.get(`${END_POINTS}/filters/rule-list`);
  // return rules;
  return [
    {
      "id": 1,
      "title": "Guests with fever are not allowed",
      "tagId": 13,
      "hotelId": 1,
      "tag": {
        "id": 13,
        "title": "Restrictions",
        "type": "rule"
      }
    },
    {
      "id": 2,
      "title": "Outside food is not allowed",
      "tagId": 13,
      "hotelId": 1,
      "tag": {
        "id": 13,
        "title": "Restrictions",
        "type": "rule"
      }
    },
    {
      "id": 3,
      "title": "Pets are not allowed.",
      "tagId": 13,
      "hotelId": 1,
      "tag": {
        "id": 13,
        "title": "Restrictions",
        "type": "rule"
      }
    },
    {
      "id": 4,
      "title": "Quarantine protocols are being followed as per local government authorities",
      "tagId": 12,
      "hotelId": 1,
      "tag": {
        "id": 12,
        "title": "Safety and Hygiene",
        "type": "rule"
      }
    },
    {
      "id": 5,
      "title": "Guests from containment zones are not allowed",
      "tagId": 12,
      "hotelId": 1,
      "tag": {
        "id": 12,
        "title": "Safety and Hygiene",
        "type": "rule"
      }
    },
    {
      "id": 6,
      "title": "Unmarried couples allowed",
      "tagId": 11,
      "hotelId": 1,
      "tag": {
        "id": 11,
        "title": "Guest Profile",
        "type": "rule"
      }
    },
    {
      "id": 7,
      "title": "Bachelors allowed",
      "tagId": 11,
      "hotelId": 1,
      "tag": {
        "id": 11,
        "title": "Guest Profile",
        "type": "rule"
      }
    },
    {
      "id": 8,
      "title": "Suitable for children",
      "tagId": 11,
      "hotelId": 1,
      "tag": {
        "id": 11,
        "title": "Guest Profile",
        "type": "rule"
      }
    }
  ]
}
export const getCities = async () => {
  // const cities=await axios.get(`${END_POINT}/filters/city-list`);
  // return getCities.data;
  return [
    {
      "city": "bardez",
      "count": 1
    },
    {
      "city": "ooty",
      "count": 5
    },
    {
      "city": "erode",
      "count": 1
    },
    {
      "city": "chennai",
      "count": 3
    },
    {
      "city": "coimbatore",
      "count": 10
    },
    {
      "city": "kochin",
      "count": 1
    },
    {
      "city": "mumbai",
      "count": 30
    }
  ]

}

export const getHotelsByFilters = async (params) => {
  // const hotelDetails = await axios.get(
  //   `${END_POINT}/hotels/hotel-listings`,params
  // );
  // console.log(hotelDetails.data);
  return HotelsDetail;
};
