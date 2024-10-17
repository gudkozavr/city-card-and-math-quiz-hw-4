export default function Answer({ updatePoints, num1, num2 }) {
  function handleSubmit(e) {
    e.preventDefault();
    const userResponse = Number(e.target.userResponse.value);

    console.log(e.target.userResponse.value);

    if (userResponse === num1 + num2) {
      updatePoints();
      e.target.userResponse.placeholder = "ответ правильный";
    } else {
      e.target.userResponse.placeholder = "попробуй еще раз";
    }

    e.target.userResponse.value = "";
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="userResponse"
        type="text"
        placeholder="Напиши вариант ответа"
      />
      <input type="submit" value="Проверить" />
    </form>
  );
}
