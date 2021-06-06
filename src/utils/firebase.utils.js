import { firestore as db } from "./../firebase";

// CRUD
// Create
const addOne = async (data, collectionName) => {
  if (!data) {
    throw new Error(
      `No data provided to firebase addOne. Instead received ${data}`
    );
  }
  if (!collectionName) {
    throw new Error(
      `No collectionName provided to firebase addOne. Instead received ${collectionName}`
    );
  }

  try {
    return db.collection(collectionName).add(data);
  } catch (err) {
    console.log("Error for addOne: ", err);
    return Promise.reject(err.message);
  }
};

const addMany = async (data = [], collectionName) => {
  if (!collectionName || typeof collectionName !== 'string') {
    throw new Error(
      `No collection name provided to firebase addMany. Instead received ${collectionName}`
    );
  }
  if(!Array.isArray(data)) {
    throw new Error(
      `Improper data provided to firebase addMany. Received ${JSON.stringify(data)}`
    );
  }
  const promises = [];
  for (const item of data) {
    promises.push(addOne(item, collectionName));
  }
  return Promise.all(promises);
};

// Read
const getOne = async (id, collectionName) => {
  if (!id) {
    throw new Error(
      `No collection name provided to firebase getOne. Instead received ${id}`
    );
  }
  if (!collectionName) {
    throw new Error(
      `No collection name provided to firebase getOne. Instead received ${collectionName}`
    );
  }
  try {
    return db.collection(collectionName).get(id);
  } catch (err) {
    console.log("Error for getOne: ", err);
    return Promise.reject(err.message);
  }
};

const getMany = async (ids = [], collectionName) => {
  const promises = [];
  for (const id of ids) {
    promises.push(getOne(id, collectionName));
  }
  return Promise.all(promises);
};

const getCollection = async (collectionName) => {
  const snapshot = await db.collection(collectionName).get();
  const calls = snapshot.docs.map((doc) => {
    // console.log("new id", doc.id);
    return { _id: doc.id, ...doc.data() };
  });
  return calls;
};

// Update
const updateOne = async (id, updates, collectionName) => {
  if (!id || typeof id !== "string") {
    throw new Error(`Improper id passed to updateOne: received ${id}`);
  }
  if (!updates || !Object.isObject(updates)) {
    throw new Error(
      `Improper updates name passed to updateOne: received ${JSON.stringify(updates)}`
    );
  }
  if (!collectionName || typeof updates !== "string") {
    throw new Error(
      `Improper collection name passed to updateOne: received ${collectionName}`
    );
  }
  delete updates.id;
  return db.collection(collectionName).doc(id).update(updates);
};

// 'updates' must contain the id
const updateMany = async (updates = [], collectionName) => {
  const promises = [];
  for (const update of updates) {
    promises.push(updateOne(update.id, update, collectionName));
  }
  return Promise.all(promises);
};

// Delete
const deleteOne = async (id, collectionName) => {
  return db.collection(collectionName).doc(id).delete();
};

const deleteMany = async (ids = [], collectionName) => {
  if (!collectionName) {
    throw new Error(
      `No collection name passed to deleteMany: received ${collectionName}`
    );
  }

  if (!Array.isArray(ids)) {
    throw new Error(
      `deleteMany requires an array of string ids: received ${JSON.stringify(ids)}`
    );
  }

  const promises = [];
  for (const id of ids) {
    promises.push(deleteOne(id, collectionName));
  }
  return Promise.all(promises);
};

const clearCollection = async (localCollection, collectionName) => {
  if (!localCollection || Array.isArray(localCollection)) {
    throw new Error(
      `Improper localCollection name passed to clearCollection: received ${JSON.stringify(localCollection)}`
    );
  }
  if (!collectionName) {
    throw new Error(
      `No collection name passed to clearCollection: received ${collectionName}`
    );
  }
  try {
    return Promise.all(
      localCollection.map((item) =>
        db.collection(collectionName).doc(item._id).delete()
      )
    );
  } catch (err) {
    const reason = `Error loading calls to firestore: ${err.message}`;
    console.log(reason);
    return Promise.reject(reason);
  }
};

const bindListeners = async (
  collection_name,
  { add, remove } = {
    add: () => {},
    remove: () => {}
  }
  ) => {
  const snapshot = await db.collection(collection_name);
    console.log("snapshot", snapshot);
    let changes = snapshot.docChanges();
    for (const change of changes) {
      switch (change.type) {
        case "added":
          console.log("added", change);
          add()
          break;
        case "removed":
          console.log("removed", change, change.doc.id);
          remove();
          break;
        default:
          return;
      }
    }
}

export {
  addOne,
  addMany,
  getOne,
  getMany,
  getCollection,
  updateOne,
  updateMany,
  deleteOne,
  deleteMany,
  clearCollection,
  bindListeners,
};