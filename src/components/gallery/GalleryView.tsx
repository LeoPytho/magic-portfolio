"use client";
import { Media, MasonryGrid } from "@once-ui-system/core";
import { gallery } from "@/resources";

export default function GalleryView() {
  // Function to determine aspect ratio based on image orientation and prevent cropping
  const getAspectRatio = (orientation: string) => {
    switch (orientation) {
      case "horizontal":
        return "16 / 9";
      case "vertical":
        return "3 / 4";
      case "square":
        return "1 / 1";
      default:
        return "auto"; // Let the image maintain its natural aspect ratio
    }
  };

  return (
    <MasonryGrid columns={2} s={{ columns: 1 }} gap="m">
      {gallery.images.map((image, index) => (
        <div key={index} className="relative">
          <Media
            enlarge
            priority={index < 10}
            sizes="(max-width: 560px) 100vw, 50vw"
            radius="m"
            aspectRatio={getAspectRatio(image.orientation)}
            src={image.src}
            alt={image.alt}
            style={{
              objectFit: "contain", // Prevents cropping - shows full image
              objectPosition: "center",
              backgroundColor: "var(--neutral-50)", // Optional: background color for letterboxing
            }}
          />
        </div>
      ))}
    </MasonryGrid>
  );
}
