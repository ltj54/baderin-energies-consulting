"use client";

import Image, { type StaticImageData } from "next/image";
import { useEffect, useRef, useState } from "react";

type Photo = Readonly<{ src: StaticImageData; alt: string; caption: string }>;

export default function PhotoGallery({ photos }: Readonly<{ photos: readonly Photo[] }>) {
  const [index, setIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement | null>(null);
  const photo = photos[index];

  useEffect(() => {
    if (!isOpen) return;
    const root = document.documentElement;
    const previousOverflow = root.style.overflow;
    root.style.overflow = "hidden";
    return () => { root.style.overflow = previousOverflow; };
  }, [isOpen]);

  function openPhoto(nextIndex: number, button: HTMLButtonElement) {
    trigger.current = button;
    setIndex(nextIndex);
    setIsOpen(true);
    dialog.current?.showModal();
  }

  function move(direction: number) {
    setIndex((current) => (current + direction + photos.length) % photos.length);
  }

  return (
    <>
      <div className="offshore-gallery">
        {photos.map((item, photoIndex) => (
          <figure key={item.caption}>
            <button type="button" className="gallery-thumbnail" aria-label={`Enlarge: ${item.caption}`} aria-haspopup="dialog" onClick={(event) => openPhoto(photoIndex, event.currentTarget)}>
              <Image src={item.src} alt={item.alt} sizes="(max-width: 650px) 100vw, (max-width: 1000px) 46vw, 30vw" placeholder="blur" />
              <span className="gallery-enlarge" aria-hidden="true">↗</span>
            </button>
            <figcaption>{item.caption}</figcaption>
          </figure>
        ))}
      </div>

      <dialog
        ref={dialog}
        className="photo-viewer"
        aria-label="Offshore photo gallery"
        aria-describedby="photo-caption"
        onClose={() => {
          setIsOpen(false);
          trigger.current?.focus({ preventScroll: true });
        }}
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
            event.preventDefault();
            move(event.key === "ArrowLeft" ? -1 : 1);
          }
        }}
      >
        <div className="viewer-toolbar">
          <span>OFFSHORE PHOTOGRAPHS</span>
          <button type="button" aria-label="Close photo viewer" onClick={() => dialog.current?.close()}>Close <span aria-hidden="true">×</span></button>
        </div>
        <div className="viewer-image">
          <Image src={photo.src} alt={photo.alt} sizes="94vw" />
        </div>
        <div className="viewer-controls">
          <button type="button" aria-label="Previous photograph" onClick={() => move(-1)}><span aria-hidden="true">←</span></button>
          <p id="photo-caption" aria-live="polite" aria-atomic="true"><span>{index + 1} / {photos.length}</span>{photo.caption}</p>
          <button type="button" aria-label="Next photograph" onClick={() => move(1)}><span aria-hidden="true">→</span></button>
        </div>
      </dialog>
    </>
  );
}
