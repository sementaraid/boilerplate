import type { Route } from "./+types";

const loader = async ({ params }: Route.LoaderArgs) => {
  let team = await Promise.resolve({ name: "React Router Team" });
  return { name: team.name };
}

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Contact Us</h1>
      <p>This is the main entry point of our application 3.</p>
    </div>
  );
}


export { loader }
export default Home;