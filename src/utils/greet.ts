const greet = (name: string): string => {
  const time = new Date().getHours();
  let message = "";
  if (!name) {
    name = "Guest";
  }

  if (time < 12) {
    message = `Good morning, ${name}!`;
  } else if (time < 18) {
    message = `Good afternoon, ${name}!`;
  } else {
    message = `Good evening, ${name}!`;
  }
  return message;
};

export default greet;
