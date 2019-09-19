import * as Gverse  from "gverse";

const graph = new Gverse.Graph(
  new Gverse.Connection({ host: "localhost", port: 9080, debug: true })
)

class User extends Gverse.Vertex {
    type = "User"
    name: string = ""
  }

async function createUser(name: string): Promise<User> {
  const user = new User();
  user.name = ""
  await graph.create(user);
  return user;
}

createUser("Jason");