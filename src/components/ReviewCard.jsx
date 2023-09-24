import { star } from "../assets/icons";

const ReviewCard = ({ imgUrl, customerName, rating, feedback }) => {
  return (
    <div className="flex justify-center items-center flex-col">
      <img
        src={imgUrl}
        alt="customer"
        className="rounded-full object-cover w-[120px] h-[120px]"
      />
      <p className="mt-6 max-w-sm text-center info-text">{feedback}</p>
      <div className="mt-3 flex justify-center items-center gap-2.5">
        <img
          src={star}
          alt="customer"
          width={24}
          height={24}
          className="object-contain m-0"
        />
        <p className="text-3xl font-montserrat text-slate-gray "> ({rating})</p>
        <h3 className="mt-0 font-palanquin text-3xl items-center font-bold">
          {customerName}
        </h3>
      </div>
    </div>
  );
};
export default ReviewCard;
