const axios = require("axios");

exports.handler = async (event) => {
	// TODO implement
	let data = "";
	let tweetText = "";
	const searchAPI = "https://api.cryptowat.ch/markets/bitflyer/btcjpy/summary";

	// 四本値取得
	const onClickSearch = async () => {
		try {
			await axios.get(searchAPI).then((response) => {
				console.log(JSON.stringify(response.data));
				data = JSON.stringify(response.data);
				return;
			});
		} catch (e) {
			console.log(e);
		} finally {
		}
	};

	//テキスト整形
	const makeTweet = async (data) => {
		tweetText = `【btcjpy】
        最新値：${JSON.parse(data).result.price.last.toLocaleString()}円
        高値：${JSON.parse(data).result.price.high.toLocaleString()}円
        安値：${JSON.parse(data).result.price.low.toLocaleString()}円
        値動き（％）：${
					Math.floor(
						JSON.parse(data).result.price.change.percentage *
							100 *
							Math.pow(10, 5)
					) / Math.pow(10, 5)
				}%
        出来高：${
					Math.floor(JSON.parse(data).result.volume * Math.pow(10, 5)) /
					Math.pow(10, 5)
				}
        ※過去24時間※  `;
	};

	await onClickSearch();
	await makeTweet(data);

	const response = {
		statusCode: 200,
		body: tweetText,
	};

	return response;
};
