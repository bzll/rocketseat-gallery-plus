import { useParams } from "react-router";
import Text from "../components/text";
import Divider from "../components/divider";

export default function PagePhotoDetails() {
  const { id } = useParams();

  return (
    <>
      <Text variant="heading-medium">Página detalhe da Foto</Text>
      <Divider />
      <Text variant="label-medium">ID da Foto: {id}</Text>
    </>
  );
}
