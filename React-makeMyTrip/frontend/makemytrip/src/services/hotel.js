import axios from "axios";
import { hotel as details} from "../utils/HotelsDetail";


export const getHotel = (hid) => {
    // const hotel=await axios.get("https://f6219402-b819-4a26-a094-d328462092b8.mock.pstmn.io/hotels/hotel-details",{hotelId:hid});
    // return hotel;
    return details;
}