import { PrismaClient } from "@prisma/client";
import * as bodyParser from 'body-parser';
import express from 'express';

const prisma = new PrismaClient();
const app = express();

app.use(bodyParser.json());

app.get('/user/:id', async (req, res) => {
  const { id } = req.params;
  const user = await prisma.user.findOne({
    where: {
      id: Number(id),
    },
  })
  res.json(user);
})

const server = app.listen(3000, () => {
  console.log(
    '🚀 Server ready at: http://localhost:3000\n⭐️',
  )
});

async function createUser(name: string, email: string) {
  await prisma.user.create({
    data: {
      name,
      email,
      posts: {
        create: { title: `Hello World from ${name}!` },
      },
      profile: {
        create: { bio: `My name is ${name}` }
      }
    }
  });
}