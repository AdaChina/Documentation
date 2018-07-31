# 学校管理

获取当前学校基本信息。更新学校配置等功能。

## 获取当前学校

```
GET /school_management/school
```
**响应字段**

| 字段名 | 描述 |
| -- | -- |
| id | 学校ID |
| name | 学校名称 |
| badge_url | 校徽地址 |

**响应示例**

成功响应:

```
Status: 200 OK
```

```json
{
  "id": 1,
  "name": "希望小学",
  "badge_url": "https://image.com/2.png",
  "created_at": "2018-07-24T14:45:15.000+08:00",
  "updated_at": "2018-07-24T14:45:15.000+08:00"
}
```
