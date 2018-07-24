# API使用说明

## API Endpoint

测试环境:
```
TBD
```

生产环境：
```
TBD
```

演示环境:
```
TBD
```

## 路由路径

系统管理类API路由前缀:
```
${API_ENDPOINT}/system_management/
```

学校管理类API路由前缀:
```
${API_ENDPOINT}/school_management/
```

## 请求格式

传递表单时, Header需要声明使用JSON格式传递：

```
Content-Type: application/json
```

非GET类请求，请求参数需要提供带上```authenticity_token```:

```json
{
  "authenticity_token"： "1HxW...sa234="
}
```

## 分页信息

**分页字段**

列表类接口，会带上分页信息。

| 字段名 | 描述 |
| -- | -- |
| pages | 列表总页数 |
| page | 当前显示页 |
| total | 列表资源总数 |
| items | 当前显示资源数量 |
| items_per_page | 默认每页资源数量 |

**分页参数**

列表类接口可通过以下分页参数，控制返回信息。

| 参数名 | 参数类型 | 必填 | 描述 | 示例 |
| --- | --- | --- | --- | --- |
| page | integer | 否 | 返回页 | 2  |

示例:
```
GET /system_management/schools?page=2
```

## 身份验证

除登陆接口外，所有API接口都会验证用户身份。如身份验证失败，接口会返回以下错误的一种。

**未登陆**
```
Status: 401 Unauthorized
```
```json
{
  "authentication": "未登陆"
}
```

**权限不足**

```
Status: 401 Unauthorized
```
```json
{
  "authorization": "权限不足：当前接口仅允许系统管理员使用"
}
```
