


/*//===============================================================Live2D Script===============================================================
// live2d_path 参数建议使用绝对路径
const live2d_path = "https://fastly.jsdelivr.net/gh/stevenjoezhang/live2d-widget@latest/";
//const live2d_path = "/live2d-widget/";

// 封装异步加载资源的方法
function loadExternalResource(url, type) {
	return new Promise((resolve, reject) => {
		let tag;

		if (type === "css") {
			tag = document.createElement("link");
			tag.rel = "stylesheet";
			tag.href = url;
		}
		else if (type === "js") {
			tag = document.createElement("script");
			tag.src = url;
		}
		if (tag) {
			tag.onload = () => resolve(url);
			tag.onerror = () => reject(url);
			document.head.appendChild(tag);
		}
	});
}

// 加载 waifu.css live2d.min.js waifu-tips.js
if (screen.width >= 768) {
	Promise.all([
		loadExternalResource("assets/css/waifu.css", "css"),
		loadExternalResource("assets/js/live2d.min.js", "js"),
		loadExternalResource("assets/js/waifu-tips.js", "js")
	]).then(() => {
		// 配置选项的具体用法见 README.md
		initWidget({
			waifuPath: live2d_path + "waifu-tips.json",
			//apiPath: "https://live2d.fghrsh.net/api/",
			cdnPath: "https://fastly.jsdelivr.net/gh/fghrsh/live2d_api/",
			tools: ["hitokoto", "asteroids", "switch-model", "switch-texture", "photo", "info", "quit"]
		});
	});
}

console.log(`
  く__,.ヘヽ.        /  ,ー､ 〉
           ＼ ', !-─‐-i  /  /´
           ／｀ｰ'       L/／｀ヽ､
         /   ／,   /|   ,   ,       ',
       ｲ   / /-‐/  ｉ  L_ ﾊ ヽ!   i
        ﾚ ﾍ 7ｲ｀ﾄ   ﾚ'ｧ-ﾄ､!ハ|   |
          !,/7 '0'     ´0iソ|    |
          |.从"    _     ,,,, / |./    |
          ﾚ'| i＞.､,,__  _,.イ /   .i   |
            ﾚ'| | / k_７_/ﾚ'ヽ,  ﾊ.  |
              | |/i 〈|/   i  ,.ﾍ |  i  |
             .|/ /  ｉ：    ﾍ!    ＼  |
              kヽ>､ﾊ    _,.ﾍ､    /､!
              !'〈//｀Ｔ´', ＼ ｀'7'ｰr'
              ﾚ'ヽL__|___i,___,ンﾚ|ノ
                  ﾄ-,/  |___./
                  'ｰ'    !_,.:
`);*/



//===============================================================贊助 Script===============================================================
var typed = new Typed('#element', {
	strings: ['2020 Start', 'but', 'no players', '2024 EOL', '感謝贊助' ,'adamsdi123', 'NALA8989', 'Farmertree8', 'SoapierBlast1', 'Twilight_snow00', 'sfytew3983', 'A_min_min', 'Sherrylee303', 'hardy1214', 'Simon0866', '.Sve8538', 'yeifong0119', 'Allen_jie', '.Rockcape9432', '.AbidingEel11493', '.Xiaoyu4501', 'Xiaokai_', 'edward06190628', '.YT_STX', 'Mari_Chan', 'Fan_0411', 'HenrysssYT', '.Mark93024921', '.Teddy065402', '.Teddy06540333', '.AwareAunt744557', '.donchen0604', 'roy_shuh_tw', 'Matthew09843280', 'ChiLin_1003', '.Victoria_lll', 'Chihayakazato', 'P_Ruby', 'jerry94666', 'GMSE24', '10na6', 'ChihayaKazato', 'lll0923', '.Rembran0403', '.Yang2204907160', 'owo0817', 'osumi_zakuya', 'TiptoeGoat85540', 'Reo_Mikage9505', 'BeTAo0o', 'sodaskxx', 'qwer12338', 'Nagsl', 'latte_9684', 'DannyLin2009', 'puritycat', 'Haha594874167' ],
	typeSpeed: 30,
  });

