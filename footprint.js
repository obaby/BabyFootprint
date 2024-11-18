////////////////////////////////////////////////////////////////////////////
// 我的足迹
// by:obaby
// https://oba.by
// https://github.com/obaby
// https://h4ck.org.cn
// 在页面加载完成后执行代码
////////////////////////////////////////////////////////////////////////////
window.onload = function() {
	// 定义城市名称和文本信息数组
	var locations = [{
		city: "北京市",
		text: "北京",
		mark: "已经游玩"
	},
	{
		city: "上海市",
		text: "上海",
		mark: "已经游玩"
	},
	{
		city: "深圳市",
		text: "深圳",
		mark: "已经游玩"
	},
	{
		city: "东营",
		text: "东营",
		mark: "已经游玩"
	},
	{
		city: "连云港市",
		text: "连云港",
		mark: "已经游玩"
	},
	{
		city: "锡林郭勒盟",
		text: "锡林郭勒盟",
		mark: "已经游玩"
	},
	{
		city: "赤峰市",
		text: "赤峰",
		mark: "已经游玩"
	},
	{
		city: "承德市",
		text: "承德",
		mark: "已经游玩"
	},
	{
		city: "济南市",
		text: "济南",
		mark: "已经游玩"
	},
	{
		city: "章丘市",
		text: "章丘",
		mark: "已经游玩"
	},
	{
		city: "泰安市",
		text: "泰安",
		mark: "已经游玩"
	},
	{
		city: "枣庄市",
		text: "枣庄",
		mark: "已经游玩"
	},
	{
		city: "昆明市",
		text: "昆明",
		mark: "已经游玩"
	},
	{
		city: "长沙市",
		text: "长沙",
		mark: "已经游玩"
	},
	{
		city: "湘潭市",
		text: "湘潭",
		mark: "已经游玩"
	},
	{
		city: "株洲市",
		text: "株洲",
		mark: "已经游玩"
	},
	{
		city: "日照市",
		text: "日照",
		mark: "已经游玩"
	},
	{
		city: "威海市",
		text: "威海",
		mark: "已经游玩"
	},
	{
		city: "烟台市",
		text: "烟台",
		mark: "已经游玩"
	},
	{
		city: "深圳市",
		text: "深圳",
		mark: "已经游玩"
	},
	{
		city: "广州市",
		text: "广州",
		mark: "已经游玩"
	},
	{
		city: "西安市",
		text: "西安",
		mark: "已经游玩"
	},
	{
		city: "临沂市",
		text: "临沂",
		mark: "已经游玩"
	},
	{
		city: "潍坊市",
		text: "潍坊",
		mark: "已经游玩"
	},
	{
		city: "青岛市",
		text: "青岛",
		mark: "已经游玩"
	},
	{
		city: "大理",
		text: "大理",
		mark: "已经游玩"
	},
	{
		city: "海口市",
		text: "海口",
		mark: "已经游玩"
	},
	{
		city: "三亚市",
		text: "三亚",
		mark: "已经游玩"
	},
	{
		city: "蜈支洲岛",
		text: "蜈支洲岛",
		mark: "已经游玩"
	},
	{
		city: "厦门市",
		text: "厦门",
		mark: "已经游玩"
	},
	{
		city: "杭州市",
		text: "杭州",
		mark: "已经游玩"
	},
	{
		city: "淄博市",
		text: "淄博",
		mark: "已经游玩"
	},
	{
		city: "广州市",
		text: "广州",
		mark: "没咋玩"
	},
	{
		city: "丽江",
		text: "丽江",
		mark: "已经游玩"
	}

	// 添加更多城市和文本信息...
	];
	var out_China_locations = [{
		city: "清迈",
		text: "泰国清迈",
		mark: "已经游玩",
		longtitude: 98.96095,
		latitude: 18.79325
	},
	{
		city: "清莱",
		text: "泰国清莱",
		mark: "已经游玩",
		longtitude: 99.72588,
		latitude: 19.903138
	}];

	var passed_locations = [{
		city: "天津市",
		text: "天津",
		mark: "路过吖"
	},
	{
		city: "景德镇",
		text: "景德镇",
		mark: "路过吖"
	},
	{
		city: "衢州市",
		text: "衢州",
		mark: "路过吖"
	},
	{
		city: "佛山市",
		text: "佛山",
		mark: "路过吖"
	},
	{
		city: "无锡市",
		text: "无锡",
		mark: "路过吖"
	}];

	// 创建地图实例
	var map = new BMapGL.Map("map"); // "map"是地图容器的id
	// 设置地图中心点和缩放级别
	var point = new BMapGL.Point(113.6401, 34.72468); // 设置地图中心点坐标
	map.centerAndZoom(point, 5); // 设置地图中心和缩放级别
	map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
	var scaleCtrl = new BMapGL.ScaleControl(); // 添加比例尺控件
	map.addControl(scaleCtrl);
	var zoomCtrl = new BMapGL.ZoomControl(); // 添加缩放控件
	map.addControl(zoomCtrl);

	// 循环遍历城市数组
	for (var i = 0; i < locations.length; i++) {
		// 创建闭包来保存城市名称和文本信息
		(function() {
			var city = locations[i].city;
			var text = "\r\n <a target='_blank' href='" + "https://h4ck.org.cn/?s=" + locations[i].text + "'>  https://h4ck.org.cn/?s=" + locations[i].text + "</a>";

			// 使用地理编码将城市名称转换为经纬度
			var geoc = new BMapGL.Geocoder();
			geoc.getPoint(city,
			function(point) {
				if (point) {
					// 添加标注
					// 创建小车图标
					var myIcon = new BMapGL.Icon("https://h4ck.org.cn/avatar/avatar_circle-256.png", new BMapGL.Size(26, 26));
					// 创建Marker标注，使用小车图标
					// var pt = new BMapGL.Point(116.417, 39.909);
					var marker = new BMapGL.Marker(point, {
						icon: myIcon
					});
					//   var marker = new BMap.Marker(point);
					//   marker.color = "pink";
					map.addOverlay(marker);

					var opts = {
						width: 200,
						// 信息窗口宽度
						height: 80,
						// 信息窗口高度
						title: city + "(" + locations[i].mark + ")",
						// 信息窗口标题
						message: text
					}
					var infoWindow = new BMapGL.InfoWindow("相关文章：" + text, opts); // 创建信息窗口对象 

					// 绑定点击事件
					marker.addEventListener("click",
					function() {
						this.openInfoWindow(infoWindow);
					});
				}
			},
			city);
		})();
	}

	for (var i = 0; i < passed_locations.length; i++) {
		// 创建闭包来保存城市名称和文本信息
		(function() {
			var city = passed_locations[i].city;
			var text = "\r\n <a target='_blank' href='" + "https://h4ck.org.cn/?s=" + passed_locations[i].text + "'>  https://h4ck.org.cn/?s=" + passed_locations[i].text + "</a>";
			var mark = passed_locations[i].mark;
			// 使用地理编码将城市名称转换为经纬度
			var geoc = new BMapGL.Geocoder();
			geoc.getPoint(city,
			function(point) {
				if (point) {
					// 添加标注
					// 创建小车图标
					var myIcon = new BMapGL.Icon("https://h4ck.org.cn/avatar/avatar-2.png", new BMapGL.Size(26, 26));
					// 创建Marker标注，使用小车图标
					// var pt = new BMapGL.Point(116.417, 39.909);
					var marker = new BMapGL.Marker(point, {
						icon: myIcon
					});
					//   var marker = new BMap.Marker(point);
					//   marker.color = "pink";
					map.addOverlay(marker);

					var opts = {
						width: 200,
						// 信息窗口宽度
						height: 80,
						// 信息窗口高度
						title: city + "(" + mark + ")",
						// 信息窗口标题
						message: text
					}
					var infoWindow = new BMapGL.InfoWindow("相关文章：" + text, opts); // 创建信息窗口对象 
					// 绑定点击事件
					marker.addEventListener("click",
					function() {
						this.openInfoWindow(infoWindow);
					});
				}
			},
			city);
		})();
	}

	for (var i = 0; i < out_China_locations.length; i++) {
		// 创建闭包来保存城市名称和文本信息
		(function() {
			var city = out_China_locations[i].city;
			var text = "\r\n <a target='_blank' href='" + "https://h4ck.org.cn/?s=" + out_China_locations[i].text + "'>  https://h4ck.org.cn/?s=" + out_China_locations[i].text + "</a>";
			var mark = out_China_locations[i].mark;
			// 使用地理编码将城市名称转换为经纬度
			var point = new BMapGL.Point(out_China_locations[i].longtitude, out_China_locations[i].latitude);
			// 添加标注
			// 创建小车图标
			var myIcon = new BMapGL.Icon("https://h4ck.org.cn/avatar/avatar_circle-256.png", new BMapGL.Size(26, 26));
			// 创建Marker标注，使用小车图标
			// var pt = new BMapGL.Point(116.417, 39.909);
			var marker = new BMapGL.Marker(point, {
				icon: myIcon
			});
			//   var marker = new BMap.Marker(point);
			//   marker.color = "pink";
			map.addOverlay(marker);

			var opts = {
				width: 200,
				// 信息窗口宽度
				height: 80,
				// 信息窗口高度
				title: city + "(" + mark + ")",
				// 信息窗口标题
				message: text
			}
			var infoWindow = new BMapGL.InfoWindow("相关文章：" + text, opts); // 创建信息窗口对象 
			// 绑定点击事件
			marker.addEventListener("click",
			function() {
				this.openInfoWindow(infoWindow);
			});
		})();
	}
};