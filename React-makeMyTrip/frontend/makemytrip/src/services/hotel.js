import axios from "axios";
import { hotel as details} from "../utils/HotelsDetail";
const {END_POINT} = process.env

export const getHotel = async (hid) => {
    // const hotel=await axios.get(`${END_POINT}/hotels/hotel-details`,{hotelId:hid});
    // return hotel;
    return details;
}