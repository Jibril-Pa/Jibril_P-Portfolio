import type { Photo } from "../data/about";

import "./PhotoStrip.css";

type PhotoStripProps = {
  photos: Photo[];
  label: string;
};

/** A row of photos that scrolls sideways and runs off the edge of the page, like a contact sheet. */
export default function PhotoStrip({ photos, label }: PhotoStripProps) {
  return (
    // Focusable so the row can be scrolled with the arrow keys.
    <div className="photo-strip" role="region" aria-label={label} tabIndex={0}>
      <ul>
        {photos.map((photo, index) => (
          <li className="photo" key={photo.src}>
            <figure>
              <img
                src={photo.src}
                width={photo.width}
                height={photo.height}
                alt={photo.alt}
                loading="lazy"
                decoding="async"
              />
              <figcaption className="meta">
                <span className="photo-index">{String(index + 1).padStart(2, "0")}</span>
                {photo.caption}
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </div>
  );
}
