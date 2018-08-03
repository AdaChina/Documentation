# 调试接口

## 获取校园卡绑定信息

获取当前校园卡绑定的学生信息及卡片卡号。适用于运营人员快速查询未知校园卡。

```
GET /utilities/card
```

**请求参数**

| 参数名 | 参数类型 | 必填 | 描述 | 示例 |
| --- | --- | --- | --- | --- |
| card | string | 是 | 校园卡卡号 | C89779KRS865 |

**响应字段**

| 字段名 | 描述 |
| -- | -- |
| id | 学生ID |
| card | 校园卡号 |
| name | 学生姓名 |
| school_id | 学校ID |
| school_name | 学校名称 |
| homeroom_id | 班级ID |
| homeroom_name | 班级名称 |

**响应示例**

成功响应:

```
Status: 200 OK
```

```json
{
  "id": 1,
  "name": "王毅",
  "card": "C89779KRS865",
  "school_id": 97,
  "school_name": "越秀路小学",
  "homeroom_id": 5578,
  "homeroom_name": "三年一班",
}
```

失败响应:

```
Status: 404 Not Found
```

```json
{
  error_code: 1006
  message: "当前卡未绑定学生"
}
```
