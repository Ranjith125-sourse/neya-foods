
import { CDN_URL } from "../utils/constant";

const MindCard = (props) => {
  const { resData } = props;

  return (
    <div className="w-40 h-40 min-w-[160px] flex-items-center justify-center transition-all duration-300 hover:scale-110">
      <img
        className="w-full h-full object-cover rounded-lg"
        src={CDN_URL + resData?.imageId}
      />
    </div>
  );
};

export default MindCard;
