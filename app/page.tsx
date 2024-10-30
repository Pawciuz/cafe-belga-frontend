import Testimonial from "@/components/main/Testimonial";
import Button from "@/components/ui/Button";

export default function Home() {
  const testimonials = [
    {
      name: "Katarzyna",
      quote:
        "Cafe Belga to moje ulubione miejsce na mapie miasta. Kawa zawsze świeża, a atmosfera idealna na spokojne spotkania lub chwilę relaksu w ciągu dnia.",
    },
    {
      name: "Krystyna",
      quote:
        "Uwielbiam przychodzić tutaj z przyjaciółmi. Obsługa jest przesympatyczna, a wybór ciast i deserów naprawdę imponuje. Zawsze czuję się tu wyjątkowo.",
    },
    {
      name: "Adam",
      quote:
        "Cafe Belga to mój przystanek, gdy jestem w mieście. Profesjonalizm i jakość produktów naprawdę się wyróżniają, a klimat jest nie do podrobienia.",
    },
  ];
  return (
    <>
      <div className="w-full flex flex-col xl:flex-row ">
        <img
          src="/main/main-1.png"
          alt="main-1"
          className="w-full xl:min-w-[60%]"
        />
        <div className="flex flex-col p-10 gap-5 items-center justify-center">
          <h1 className="text-5xl">Zasmakuj autentyczności w sercu miasta</h1>
          <p className="font-instrumentSerif text-2xl w-full">
            Cafe Belga to miejsce, w którym tradycja spotyka nowoczesność. Ciesz
            się wyselekcjonowanymi kawami z najdalszych zakątków świata oraz
            wypiekami przygotowanymi na miejscu z dbałością o każdy szczegół.
          </p>
          <Button href="/menu" variant="primary">
            Poznaj nasze menu
          </Button>
          <Button href="/menu" variant="primary">
            Zarezerwuj stolik
          </Button>
        </div>
      </div>
      <div className="w-full flex flex-col-reverse xl:flex-row ">
        <div className="flex flex-col p-10 gap-5 items-center justify-center min-w-[60%]">
          <h1 className="text-5xl">
            Miejsce pełne ciepła i wyjątkowej atmosfery
          </h1>
          <p className="font-instrumentSerif text-2xl">
            Nasza Cafe Belga to nie tylko kawiarnia, ale i przestrzeń stworzona
            z myślą o relaksie i spotkaniach. Z przytulnym wnętrzem, drewnianymi
            akcentami i ręcznie dobieranymi detalami, tworzymy miejsce, w którym
            każdy poczuje się jak w domu. Tutaj, przy filiżance wyśmienitej kawy
            i świeżych wypiekach, czas płynie wolniej, a rozmowy nabierają
            wyjątkowego smaku.
          </p>
        </div>
        <img src="/main/main-2.png" alt="main-2" className="xl:min-w-[40%]" />
      </div>
      <div className="w-full py-20 flex flex-wrap gap-20  justify-evenly ">
        {testimonials.map((testimonial, index) => (
          <Testimonial
            key={index}
            name={testimonial.name}
            quote={testimonial.quote}
          />
        ))}
      </div>
    </>
  );
}
