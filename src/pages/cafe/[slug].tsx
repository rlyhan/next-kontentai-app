import { getCafeById } from "../../content-service/queries";
import { fetchQueryById } from "../../content-service/helpers/graphql";

function Cafe({ data }) {
  console.log(data);
  const { cafe } = data;
  const photos = cafe?.photo?.items;
  return (
    <div className="cafe">
      <p>{cafe?.city}</p>
      <p>{cafe?.country}</p>
      <p>{cafe?.street}</p>
      {photos &&
        photos.map((photo) => {
          return <img src={photo.url} style={{ width: "200px" }} />;
        })}
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const { loading, error, data } = await fetchQueryById(
    getCafeById,
    params.slug
  );

  return {
    props: {
      data,
    },
  };
}

export default Cafe;
