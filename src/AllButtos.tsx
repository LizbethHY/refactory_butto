import { ButtonFacebook } from './components/ButtonFacebook';
import { ButtonInstagram } from './components/ButtonInstagram';
import { ButtonYoutube } from './components/ButtonYoutube';

export function AllButtos() {
  return (
    <div className="flex flex-col gap-4 w-full cursor-pointer">
      <ButtonYoutube />
      <ButtonFacebook />
      <ButtonInstagram />
    </div>
  );
}
