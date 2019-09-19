import Gverse from "gverse";

const graph = new Gverse.Graph(
  new Gverse.Connection({ host: "localhost", port: 9080, debug: true })
)

class User extends Gverse.Vertex {
    type = "User"
    name: string = ""
  }

async function createUser(): Promise<User> {
  const user = new User();
  user.name = "Jason"
  await graph.create(user);
  return user;
}

createUser();