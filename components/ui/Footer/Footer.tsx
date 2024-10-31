import Button from "@/components/ui/Button";
import { LucideFacebook, LucideInstagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#595D67] shadow-[0_-10px_25px_#595D67]">
      <div className="container mx-auto flex flex-col xl:flex-row gap-5 p-5 font-instrumentSerif text-xl">
        <div className="w-full xl:w-1/3 flex gap-10 flex-col text-white p-10">
          <p>
            <strong className="font-bold">Cafe Belga</strong> – Twoja lokalna
            kawiarnia w sercu miasta. Naszą misją jest tworzenie miejsca, w
            którym kawa łączy ludzi i inspiruje do rozmów.
          </p>
          <span>
            Godziny otwarcia:
            <ul className="list-disc px-4">
              <li>Poniedziałek - Piątek: 8:00 - 20:00</li>
              <li>Sobota - Niedziela: 9:00 - 22:00</li>
            </ul>
          </span>
          <span>
            Kontakt:
            <ul className="list-disc px-4">
              <li>Adres: ul. Kawiarniana 12, 00-001 Warszawa</li>
              <li> Telefon: +48 123 456 789</li>
              <li> Email: kontakt@cafebelga.pl</li>
            </ul>
          </span>
          <div className="flex gap-10">
            <LucideFacebook size={32} />
            <LucideInstagram size={32} />
          </div>
        </div>
        <div className="w-full xl:w-1/3 flex justify-center items-center ">
          <img src="/footer/map.png" alt="map" className="w-[80%]" />
        </div>
        <div className="w-full xl:w-1/3 flex flex-col justify-center items-center text-white text-center gap-5">
          <h1 className="text-3xl">Zostań w kontakcie!</h1>
          <p className="w-[350px]">
            Zapisz się na nasz newsletter i bądź na bieżąco z promocjami i
            wydarzeniami.
          </p>
          <div className="flex gap-5 mt-5 flex-col">
            <input
              type="text"
              placeholder="e-mail"
              className="p-2 rounded-lg w-[350px]"
            />
            <Button variant="primary" className="w-[200px] mx-auto">
              Zapisz się
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
