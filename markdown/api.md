接口功能 ：

接口地址 :  http://服务器IP地址/countTime.php

请求方法 :	GET

curl请求示例:  `curl --get –include 'http://服务器IP地址/countTime.php'`

JSON返回示例 :

```
{
	"07671103YB": {
		"开始时间": "2017-11-13 21:17:12",
		"抽空时间": "2017-11-13 21:17:19",
		"冷藏时间": "2017-11-14 02:45:06",
		"干燥时间": "2017-11-14 03:25:56",
		"结束时间": "2017-11-15 11:36:12"
	},
	"08371001YA": {
		"开始时间": "2017-10-09 20:41:34",
		"抽空时间": "2017-10-09 20:41:54",
		"冷藏时间": "2017-10-10 01:21:31",
		"干燥时间": "2017-10-10 02:02:12",
		"结束时间": "2017-10-11 10:12:34"
	}
}
```

---

接口功能 ：app页面 左侧列表数据信息

接口地址 :  http://服务器IP地址/odbc.php

请求方法 :	GET

curl请求示例:  `curl --get –include 'http://服务器IP地址/odbc.php'`

JSON返回示例 :

```
{
	"data": [{
		"label": "1#-2017",
		"children": [{
			"label": "07670301-A"
		},{
			"label": "07670604-A"
		}, {
			"label": "07670606A"
		}, {
			"label": "07670701A"
		}]
	}, {
		"label": "2#-2017",
		"children": [{
			"label": "07670301-B"
		}, {
			"label": "4-2满载测试01"
		}, {
			"label": "4-2满载测试02"
		}, {
			"label": "4-2满载测试03"
		}, {
			"label": "SIP-20160926"
		}]
	}, {
		"label": "3#-2017",
		"children": [{
			"label": "07670202Y-A"
		}, {
			"label": "07670203Y-A"
		}, {
			"label": "07670401-A"
		}, {
			"label": "07670402-A"
		}]
	}, {
		"label": "4#-2017",
		"children": [{
			"label": "07670203Y-B"
		}, {
			"label": "07670401-B"
		}, {
			"label": "07670402-B"
		}, {
			"label": "07670404-B"
		}, {
			"label": "07670405-B"
		}]
	}]
}
```

---

接口功能 ：app页面 点击左侧列表项目请求图表数据

接口地址 :  http://服务器IP地址/odbcData.php

请求方法 :	POST

请求参数 ：

参数名 | 类型 | 必填 | 描述 | 默认值
- | :-: | -: 
class | String| true | 数据所在分组 | 无
name | String| true | 名称 | 无

JSON返回示例 :

```
{
	"count": "7",
	"time": ["2017-03-26 17:01:42", "2017-03-26 17:02:42", "2017-03-26 17:03:42", "2017-03-26 17:04:42", "2017-03-26 17:05:42", "2017-03-26 17:06:42", "2017-03-26 17:08:42"],
	"batch": "07670301-A",
	"data": [{
		"name": "板层入口温度(℃)",
		"type": "line",
		"smooth": "true",
		"areaStyle": {
			"normal": {}
		},
		"data": ["13.3", "11.2", "9.09999999999999", "7.09999999999999", "5.0", "3.5", "1.8"]
	}, {
		"name": "板层出口温度(℃)",
		"type": "line",
		"smooth": "true",
		"areaStyle": {
			"normal": {}
		},
		"data": ["20.7", "18.9", "17.1", "15.3", "13.4", "11.7", "10.0"]
	}]
}
```

---


接口功能 ：app页面 下方数据统计列表点击请求数据

接口地址 :  http://服务器IP地址/content.php

请求方法 :	POST

请求参数 ：

参数名 | 类型 | 必填 | 描述 | 默认值
- | :-: | -: 
class | String| true | 数据所在分组 | 无
name | String| true | 名称 | 无

JSON返回示例 :

```
{
	"总批次": {
		"startTime": "2017-02-26 13:31:33",
		"endTime": "2017-02-27 06:45:19"
	},
	"预冻": {
		"startTime": "2017-02-25 16:57:42",
		"endTime": "2017-02-25 16:57:42"
	},
	"抽空": {
		"startTime": "2017-02-25 16:57:42",
		"endTime": "2017-02-25 23:20:55"
	},
	"干燥": {
		"startTime": "2017-02-25 23:20:55",
		"endTime": "2017-02-27 06:45:19"
	}
}
```

---