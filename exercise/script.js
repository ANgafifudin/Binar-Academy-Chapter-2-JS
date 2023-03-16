async function get() {
  let url = "https://jsonplaceholder.typicode.com/todos";
  try {
    let res = await fetch(url);
    let result = await res.json();

    let akhir = [];
    // result.map((res) => {
    //   if (res.completed) akhir.push(res);
    // });
    // console.log(akhir);
    let filtered = result.filter((a) => a.completed == true);
    console.table(filtered);
    // console.log(akhir);
    return filtered;
  } catch (error) {
    console.log(error);
  }
}

get();
