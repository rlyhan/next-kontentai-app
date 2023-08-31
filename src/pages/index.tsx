import { getAllCafes } from "../content-service/queries";
import { fetchQuery } from "../content-service/helpers/graphql";

function Home({ data }) {
  console.log("data:", data);
  const cafes = data.cafe_All.items;
  return (
    <div className="homepage">
      <h1>Cafés</h1>
      <ul>
        {cafes &&
          cafes.map((cafe) => {
            return (
              <li>
                <a href={`/cafe/${cafe._system_.id}`}>{cafe.city}</a>
                <img src={cafe.photo.items[0].url} style={{ width: "200px" }} />
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export async function getServerSideProps() {
  const { loading, error, data } = await fetchQuery(getAllCafes);

  return {
    props: {
      data,
    },
  };
}

export default Home;
