// 生成随机id
const createId = (prefix, id, slength = 12) => {
  let uid = id;
  if (!uid) {
    uid = `${Math.random()}`.slice(slength);
  }
  return prefix ? `${prefix}_${uid}` : uid;
};

const createIntId = (length = 18) => +(Date.now() + createId()).slice(0, length);

const interval = setInterval(() => {
  const id1 = createIntId();
  const id2 = createIntId();
  console.log('id1',id1);
  console.log('id2',id2);
  if(id1 === id2) {
    console.log('相同id')
    clearInterval(interval);
    process.exit();
  }
}, 1);