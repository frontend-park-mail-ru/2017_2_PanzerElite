function httpReq(type, uRL, sendObject) {
	return new Promise(function(resolve, reject) {
		fetch(uRL, {
			method: type,
			mode: "cors",
			credentials: "include",
			body: JSON.stringify(sendObject),
			headers: {
				"Content-Type": "application/json; charset=utf-8"
			}
		}).then(function(response) {
			if (response.status === 200) {
				resolve();
			} else {
				reject("Something went wrong");
			}
		});
	});

}
export default httpReq;