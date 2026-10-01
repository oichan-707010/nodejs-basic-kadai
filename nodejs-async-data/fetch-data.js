async function fetchData() {
  try {
    console.log("ユーザーデータの取得を開始します。");

    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    const data = await response.json();

    console.log(`データ取得が完了しました。取得件数：${data.length}`);
    console.log("ユーザー一覧：");
    data.forEach((user) => {
      console.log(user.name);
    });
    console.log("ユーザーデータの取得が終了しました。");
  } catch (error) {
    console.log("エラー発生：", error);
  }
}

console.log("fetchData()関数を実行します。");
fetchData();
console.log("fetchData()関数を実行しました。");

let count = 1;
const interval = setInterval(() => {
  console.log(`別の処理を実行中... ${count++}`);
  if (count > 10) clearInterval(interval);
}, 100);
