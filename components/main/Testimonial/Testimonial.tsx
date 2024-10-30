import { LucideQuote, LucideStar } from "lucide-react";

interface TestimonialProps {
  name: string;
  quote: string;
}
const Testimonial = ({ name, quote }: TestimonialProps) => {
  return (
    <div className="w-[380px] h-[200px] bg-white relative pt-[50px] shadow-2xl">
      <div className="absolute top-[-20px] left-[10px] bg-[#A990B8] h-[70px] w-[300px] p-5 flex flex-row justify-around items-center">
        <h1 className="text-white text-xl font-bold">{name}</h1>
        <div className="flex">
          {Array.from({ length: 5 }).map((_, index) => (
            <LucideStar key={index} className="h-[20px] w-[20px]" />
          ))}
        </div>
      </div>
      <LucideQuote className="absolute bottom-[-20px] left-[20px] h-[50px] w-[50px]" />
      <p className="p-5">{quote}</p>
    </div>
  );
};
export default Testimonial;
