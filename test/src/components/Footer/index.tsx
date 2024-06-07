import { Logo } from "../Logo";
import s from "./Footer.module.scss";

export const Footer = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.team}>
        Placeholder about team Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Nemo, dolore vero? Exercitationem laboriosam obcaecati
        et a tempora, nisi quod culpa debitis. Quia dolore sit corporis
        inventore ut exercitationem sapiente officiis nisi explicabo laborum!
        Odio eum animi dolorem dignissimos corporis itaque.
      </div>
      <Logo />
    </div>
  );
};
