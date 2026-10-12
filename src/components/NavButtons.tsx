import ButtonLink from "./ButtonLink";
import { site } from "../data/site";

type NavButtonsProps = {
  className?: string;
  onNavigate?: () => void;
};

export default function NavButtons({ className, onNavigate }: NavButtonsProps) {
  return (
    <div className={["nav-buttons", className].filter(Boolean).join(" ")}>
      <ButtonLink to={site.resume} variant="secondary" external onClick={onNavigate}>
        Resume
      </ButtonLink>
      <ButtonLink to="/contact" variant="primary" onClick={onNavigate}>
        Get in touch
      </ButtonLink>
    </div>
  );
}
