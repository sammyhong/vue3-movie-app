exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({
      name: "HEROPY",
      age: 85,
      email: "thesecon@gmail.com",
    }), // 문자데이터만 할당 가능
  };
};
