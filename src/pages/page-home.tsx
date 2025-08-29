import Container from "../components/container";
import PhotoWidget from "../contexts/photos/components/photo-widget";
import type { Photo } from "../contexts/photos/models/photo";

export default function PageHome() {
  return (
    <Container>
      <div className="grid grid-cols-5 gap-9">
        <PhotoWidget
          photo={{
            id: "1",
            title: "Photo 1",
            imageId: "portrait-tower.png",
            albums: [
              {
                id: "1",
                title: "Album 1",
              },
              {
                id: "2",
                title: "Album 2",
              },
              {
                id: "3",
                title: "Album 3",
              },
            ],
          }}
        />
        <PhotoWidget
          photo={{
            id: "1",
            title: "Photo 1",
            imageId: "portrait-tower.png",
            albums: [
              {
                id: "1",
                title: "Album 1",
              },
              {
                id: "2",
                title: "Album 2",
              },
              {
                id: "3",
                title: "Album 3",
              },
            ],
          }}
        />
        <PhotoWidget photo={{} as Photo} loading />
        <PhotoWidget photo={{} as Photo} loading />
        <PhotoWidget photo={{} as Photo} loading />
      </div>
    </Container>
  );
}
