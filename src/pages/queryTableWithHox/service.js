function query(params) {
  // 变量的转换统一放到 service 里处理
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        total: 20,
        list: Array(20)
          .fill()
          .map((v, i) => ({ id: i, name: `name${i}`, address: `address${i}` })),
      });
    }, 200);
  });
}

export default { query };
