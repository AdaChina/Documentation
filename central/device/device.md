# 设备信息

## 获取基础信息

获取设备序列号，系统归属信息，以及IoT平台等设备初始化信息。

```
GET ${API_ENDPOINT}/device/base
```

**响应字段**

| 字段名 | 描述 |
| -- | -- |
| serial | 设备序列号 |
| iot_id | 设备IoT平台ID |
| iot_secret | 设备IoT平台密钥 |
| system: name | 所属系统名称 |
| system: api_endpoint | 所属系统API地址 |
| system: short_code | 所属系统短码 |

**响应示例**

成功响应:

```
Status: 200 OK
```

```json
{
  "serial": "AC123456789",
  "iot_id": "98575177CA",
  "iot_secret": "K#$vOAOO31",
  "system": {
    "name": '智慧校园',
    "api_endpoint": "https://classbrand.staging.adachina.net",
    "short_code": "class-brand"
  }
}
```
