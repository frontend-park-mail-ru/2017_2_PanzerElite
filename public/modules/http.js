/**
 * Модуль, предоставляющий методы для выполнения HTTP-запросов
 * @module Http
 */
function httpReq(type, uRL, sendObject) {

	return new Promise((resolve, reject) => {
		fetch(uRL, {
			method: type,
			headers: {
				"Content-Type": "application/json; charset=utf-8",
			},
			body: JSON.stringify(sendObject),
			mode: "cors",
			credentials: "include"
		}).then(function(response) {
			if (response.status === 200) {
				resolve(response);
				return;
			} else {
				reject("Something went wrong");
			}
		});
	});

}
export default httpReq;