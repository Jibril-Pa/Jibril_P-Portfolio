import { useLocation } from "react-router-dom";

import ButtonLink from "../components/ButtonLink";
import usePageTitle from "../hooks/usePageTitle";

import "./pages.css";

export default function NotFound() {
  usePageTitle("Page not found");
  const { pathname } = useLocation();

  return (
    <div className="page">
      <p className="page-eyebrow">404</p>
      <h1 className="page-title">Page not found</h1>
      <p className="page-lead">That link does not point anywhere yet.</p>
      <p className="not-found-path meta">Nothing lives at {pathname}</p>
      <div className="page-actions">
        <ButtonLink to="/" variant="primary">
          Back home
        </ButtonLink>
        <ButtonLink to="/work" variant="secondary">
          See my work
        </ButtonLink>
      </div>
    </div>
  );
}
