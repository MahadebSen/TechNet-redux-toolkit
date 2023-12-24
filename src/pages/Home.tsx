import { Button } from '@/components/ui/button';
import banner from '@/assets/images/banner.png';
import hero from '@/assets/images/hero.png';
import { Link } from 'react-router-dom';
import Footer from '@/layouts/Footer';

export default function Home() {
  return (
    <>
      <div className="flex gap-16 flex-col-reverse lg:flex-row justify-between items-center lg:h-[calc(100vh-80px)] md:max-w-7xl lg:mx-auto lg:px-10 mt-10 lg:mt-0">
        <div className="h-[-100px]">
          <h1 className="text-6xl font-black text-primary mb-2">
            HAYLOU <br /> SOLAR PLUSE
          </h1>
          <p className="text-secondary font-semibold text-xl">
            Effortless communication at your fingertips
          </p>
          <div className="text-primary mt-12 md:mt-20">
            <p>Bluetooth 5.2 for easy, secure communication</p>
            <p>Precise 143 Amoled display for clear visuals</p>
          </div>
          <Button className="mt-5">Learn more</Button>
        </div>
        <div className="relative lg:-right-7 px-10 md:px-2">
          <img src={banner} alt="" />
        </div>
      </div>

      <div className="mb-32 lg:mb-80 mt-32 lg:mt-0 mx-2 md:mx-0">
        <div>
          <img className="mx-auto px-2" src={hero} alt="" />
        </div>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-5xl text-center font-black text-primary uppercase mt-10">
            The future of tech is here
          </h1>
          <Button className="mt-10" asChild>
            <Link to="/products">Brows all products</Link>
          </Button>
        </div>
      </div>
      <Footer />
    </>
  );
}
