# 应用升级

## 获取应用升级信息

```
GET ${API_ENDPOINT}/app_update
```

**请求参数**

| 参数名 | 参数类型 | 必填 | 描述 | 示例 |
| --- | --- | --- | --- | --- |
| app_version | string | 否 | 当前设备应用版本 | 2.8.0 |

**响应字段**

| 字段名 | 描述 |
| -- | -- |
| new_update | 是否需要更新 |
| version | 升级包版本号 |
| file | 升级包地址 |

**响应示例**

成功响应:

```
Status: 200 OK
```

有更新:
```json
{
  "new_update": true,
  "version": "2.8.5",
  "file": "https://cdn.com/file.apk"
}
```

无更新:
```json
{
  "new_update": false
}
```

## 汇报升级结果

```
POST ${API_ENDPOINT}/app_update/report_result
```

**请求参数**

| 参数名 | 参数类型 | 必填 | 描述 | 示例 |
| --- | --- | --- | --- | --- |
| app_version | string | 是 | 升级包版本 | 2.8.5 |
| result | string | 否 (默认失败) | 升级结果 |success |
| description | string | 否 |升级详情 | ... |

| result 参考值 | 描述 |
| -- | -- |
| success | 成功 |
| failure | 失败 |

**响应字段**

| 字段名 | 描述 |
| -- | -- |
| new_update | 是否需要更新 |
| version | 升级包版本号 |
| file | 升级包地址 |

**响应示例**

成功响应:

```
Status: 201 Created
```

```json
{
  "update_record": "created"
}
```

失败响应:

```
Status: 400 Bad Request
```

```json
{
  "error_code": 1003,
  "message": "必须提供APP版本号"
}
```
