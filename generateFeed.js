import { faker } from "@faker-js/faker";
import fs from "fs";

const TOTAL_POSTS = 100000;

const posts = Array.from({ length: TOTAL_POSTS }, (_, i) => ({
  id: `post_${i + 1}`,
  author: {
    id: `user_${faker.number.int({ min: 1, max: 5000 })}`,
    name: faker.person.fullName(),
    avatar: faker.image.avatar(),
  },
  content: {
    text: faker.lorem.sentence({ min: 5, max: 15 }),
    image: faker.image.urlPicsumPhotos({ width: 500, height: 300 }),
  },
  stats: {
    likes: faker.number.int({ min: 0, max: 5000 }),
    comments: faker.number.int({ min: 0, max: 5000 }),
    shares: faker.number.int({ min: 0, max: 5000 }),
  },
  createdAt: Date.now() - i * 1000 * 60,
}));

fs.writeFileSync("feed.json", JSON.stringify(posts));
