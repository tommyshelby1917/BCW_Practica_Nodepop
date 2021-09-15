'use strict';

const dbConnection = require('./lib/connectMongoose.js');

// Models and precreated data
const Post = require('./models/Post.js');
const postData = require('../nodepop/posts.json');

main().catch(error => console.log('An error has occured', error));

async function main() {
  await initData();

  dbConnection.close();
}

async function initData() {
  // If we don't pass any arguments to deleteMany, everything is deleted.
  const deleted = await Post.deleteMany();
  console.log(`${deleted.deletedCount} posts were deleted`);

  // Create new data to the DB
  const posts = await Post.insertMany(postData.posts);
  console.log(`${posts.length} posts have been created`);
}