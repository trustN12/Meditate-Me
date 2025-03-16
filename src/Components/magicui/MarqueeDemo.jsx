import { cn } from "@/lib/utils";
import { Marquee } from "./marquee";


const reviews = [
  {
    name: "Arjun Kumar",
    username: "@arjunkumar",
    body: "Meditate Me helps me focus and relax like never before. Highly recommend!",
    img: "https://randomuser.me/api/portraits/men/10.jpg", // Indian
  },
  {
    name: "Sarah Johnson",
    username: "@sarah_johnson",
    body: "Great app! The soundscapes are perfect for deep meditation.",
    img: "https://randomuser.me/api/portraits/women/11.jpg", // American
  },
  {
    name: "Dmitry Ivanov",
    username: "@dmitry_ivanov",
    body: "A game changer for stress relief. I love the guided soundtracks.",
    img: "https://randomuser.me/api/portraits/men/12.jpg", // Russian
  },
  {
    name: "Priya Sharma",
    username: "@priyasharma",
    body: "Helps me stay grounded. Perfect for building a meditation routine.",
    img: "https://randomuser.me/api/portraits/women/13.jpg", // Indian
  },
  {
    name: "John Smith",
    username: "@john_smith",
    body: "Helps me unwind after work. A great way to clear my head.",
    img: "https://randomuser.me/api/portraits/men/14.jpg", // American
  },
  {
    name: "Tatiana Petrova",
    username: "@tatiana_petrova",
    body: "Essential for my daily routine. The sounds help me focus and relax.",
    img: "https://randomuser.me/api/portraits/women/15.jpg", // Russian
  },
];



const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}) => {
  return (
    <figure
    className={cn(
      "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border-[0.5px] p-4"
    )}
    style={{ backgroundColor: "rgba(255, 200, 200, 0.07)", color: "#F3F3B7" }}
  >
  
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium ">
            {name}
          </figcaption>
          <p className="text-xs font-medium ">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden ">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4"></div>
    </div>
  );
}
