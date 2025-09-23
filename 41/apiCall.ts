type apiCallType = {
  id: number;
  title: string;
  completed: boolean;
  userId: string;
};

async function apiCallHandling(): Promise<apiCallType> {
  const result = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await result.json();
  return data;
}

apiCallHandling()
  .then((data: apiCallType) => console.log(data))
  .catch((err) => console.log(err));
