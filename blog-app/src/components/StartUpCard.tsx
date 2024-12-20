import { EyeIcon } from "lucide-react";
import { formatDate } from "../lib/utils";
import Image from "next/image";
import Link from "next/link";
import { Author, Startup } from "../../sanity.types";

export type startupTypeCard = Omit<Startup, "author"> & {
  author?: Author;
  views: number;
};

const StartUpCard = ({ post }: { post: startupTypeCard }) => {
  const {
    _createdAt,
    views,
    author,
    title,
    _id,
    image,
    category,
    description = "No description available.", // Fallback
  } = post;

  return (
    <li className="startup-card">
      {/* Top section: Date and Views */}
      <div className="flex-between">
        <p className="startup_card_date">{formatDate(_createdAt)}</p>

        <div className="flex gap-1.5">
          <EyeIcon className="size-6 text-primary" />
          <span className="text-16-medium">{views}</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-between mt-5 gap-5">
        {/* Left: Author name and title */}
        <div className="flex-1">
          <Link href={`/user/${author?._id}`}>
            <p className="text-16-medium bold line-clamp-1">{author?.name}</p>
          </Link>
          <Link href={`/startup/${_id}`}>
            <h3 className="text-26-semibold line-clamp-1">{title}</h3>
          </Link>
        </div>

        {/* Right: Author Image */}
        <Link href={`/user/${author?._id}`}>
          <Image
            src={
              image ||
              "https://photutorial.com/wp-content/uploads/2023/04/Featured-image-AI-image-generators-by-Midjourney.png"
            }
            alt="Author Image"
            width={48}
            height={48}
            className="rounded-full"
          />
        </Link>
      </div>

      {/* Description and Image */}
      <Link href={`/startup/${_id}`}>
        <p className="startup-card_desc">{description}</p>
        <Image
          src={
            image ||
            "https://photutorial.com/wp-content/uploads/2023/04/Featured-image-AI-image-generators-by-Midjourney.png"
          }
          alt="Startup Image"
          width={400} // Set an appropriate width
          height={250} // Set an appropriate height
          className="startup-card_img"
        />
      </Link>

      <div className="flex-between gap-3 mt-5">
        <Link href={`/?query=${category?.toLowerCase()}`}>
          <p className="text-16-medium">{category}</p>
        </Link>

        {/* Details Button */}
        <button className="startup-card_btn">
          <Link href={`/startup/${_id}`}>Details</Link>
        </button>
      </div>
    </li>
  );
};

export default StartUpCard;
